/**
 * customBarsManager.js
 *
 * Aggregates real-time tick data into custom timeframe bars (e.g. S10 = 10 seconds)
 * and persists them in IndexedDB. Used when the server does not support a given period.
 *
 * Bar buffer format (48 bytes per bar, little-endian, matches CSht1uUK.js Bars class):
 *   Offset  0 : time       Uint32  (UTC seconds since epoch)
 *   Offset  4 : open       Float64
 *   Offset 12 : high       Float64
 *   Offset 20 : low        Float64
 *   Offset 28 : close      Float64
 *   Offset 36 : tickVolume Uint32
 *   Offset 40 : realVolume Float64 (always 0 — no exchange data from ticks)
 */

const DB_NAME    = "traderCustomBars";
const STORE_NAME = "bars";
const BAR_BYTES  = 48;
const MAX_BARS   = 9000; // matches Bars.MAX_COUNT in CSht1uUK.js
let _farFutureWarned = false;
const FLUSH_DELAY_MS = 500;

// Maps period (minutes) → interval (seconds).
// Add future sub-minute periods here.
export const CUSTOM_PERIODS = new Map([
  [1 / 6, 10], // S10 : 10-second bars
]);

// ── IndexedDB helpers ─────────────────────────────────────────────────────────

function _openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = (ev) => {
      const db = ev.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME))
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
    };
    req.onsuccess  = (ev) => resolve(ev.target.result);
    req.onerror    = (ev) => reject(ev.target.error);
  });
}

const _dbPromise = _openDB().catch(() => null); // degrade gracefully if IDB unavailable

async function _dbGet(key) {
  const db = await _dbPromise;
  if (!db) return null;
  return new Promise((resolve) => {
    try {
      const tx  = db.transaction(STORE_NAME, "readonly");
      const req = tx.objectStore(STORE_NAME).get(key);
      req.onsuccess = () => resolve(req.result?.buffer ?? null);
      req.onerror   = () => resolve(null);
    } catch { resolve(null); }
  });
}

async function _dbPut(key, symbol, period, buffer) {
  const db = await _dbPromise;
  if (!db) return;
  try {
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).put({ id: key, symbol, period, buffer });
  } catch { /* non-fatal */ }
}

// ── Buffer helpers ────────────────────────────────────────────────────────────

function _writeBar(dv, index, bar) {
  const off = index * BAR_BYTES;
  dv.setUint32 (off,       bar.timeSec,    true);
  dv.setFloat64(off + 4,   bar.open,       true);
  dv.setFloat64(off + 12,  bar.high,       true);
  dv.setFloat64(off + 20,  bar.low,        true);
  dv.setFloat64(off + 28,  bar.close,      true);
  dv.setUint32 (off + 36,  bar.tickVolume, true);
  dv.setFloat64(off + 40,  0,              true); // realVolume always 0
}

function _readBar(dv, index) {
  const off = index * BAR_BYTES;
  return {
    timeSec:    dv.getUint32 (off,       true),
    open:       dv.getFloat64(off + 4,   true),
    high:       dv.getFloat64(off + 12,  true),
    low:        dv.getFloat64(off + 20,  true),
    close:      dv.getFloat64(off + 28,  true),
    tickVolume: dv.getUint32 (off + 36,  true),
    realVolume: dv.getFloat64(off + 40,  true),
  };
}

/** Serialize completed bars (+ optional current bar) into a single ArrayBuffer.
 *  Only returns bars from the most recent contiguous session (gap ≤ 50s) to
 *  avoid sparse impose() which creates huge empty time-slots in the chart. */
function _barsToBuffer(completedBars, inProgress, fromSec, toSec) {
  // Build full bar list to find the most recent contiguous block
  const all = completedBars.slice();
  if (inProgress) all.push(inProgress);
  if (!all.length) return new ArrayBuffer(0);

  // Walk backwards — stop when gap between consecutive bars exceeds 50s (5 × S10)
  const maxGapSec = 50;
  let contigStart = all.length - 1;
  for (let i = all.length - 1; i > 0; i--) {
    if (all[i].timeSec - all[i - 1].timeSec > maxGapSec) break;
    contigStart = i - 1;
  }

  // From the contiguous block, only include bars in the requested time range
  const rows = [];
  for (let i = contigStart; i < all.length; i++) {
    if (all[i].timeSec >= fromSec && all[i].timeSec <= toSec) rows.push(all[i]);
  }

  const buf = new ArrayBuffer(rows.length * BAR_BYTES);
  const dv  = new DataView(buf);
  rows.forEach((b, i) => _writeBar(dv, i, b));
  return buf;
}

/** Build the full completed-only buffer for IndexedDB persistence. */
function _completedBuffer(completedBars) {
  const buf = new ArrayBuffer(completedBars.length * BAR_BYTES);
  const dv  = new DataView(buf);
  completedBars.forEach((b, i) => _writeBar(dv, i, b));
  return buf;
}

// ── Per-symbol-period state ───────────────────────────────────────────────────

// key: `${symbol}_${String(period)}`
// value: { completedBars: Array<bar>, inProgress: bar|null, loaded: bool, debounce: id|null }
const _states = new Map();

function _key(symbol, period) {
  return `${symbol}_${String(period)}`;
}

function _scheduleFlush(key, symbol, period, state) {
  if (state.debounce !== null) clearTimeout(state.debounce);
  state.debounce = setTimeout(() => {
    state.debounce = null;
    _dbPut(key, symbol, period, _completedBuffer(state.completedBars));
  }, FLUSH_DELAY_MS);
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Register interest in a symbol+period combo and hydrate from IndexedDB.
 * Safe to call multiple times — idempotent after the first call.
 */
export async function watch(symbol, period) {
  const key = _key(symbol, period);
  if (_states.has(key)) return;

  const state = { completedBars: [], inProgress: null, loaded: false, debounce: null };
  _states.set(key, state);

  const stored = await _dbGet(key);
  if (stored && stored.byteLength >= BAR_BYTES) {
    const dv    = new DataView(stored);
    const count = stored.byteLength / BAR_BYTES;
    for (let i = 0; i < count; i++) state.completedBars.push(_readBar(dv, i));
  }
  state.loaded = true;
}

/**
 * Feed a tick into the aggregator for all watched custom periods for this symbol.
 * @param {string} symbol
 * @param {number} timeMs  — tick timestamp in milliseconds (UTC epoch)
 * @param {number} price   — bid price
 */
export function onTick(symbol, timeMs, price) {
  if (!timeMs || typeof price !== "number" || !isFinite(price) || price <= 0) return;
  // Reject ticks from the far future (>1 day ahead) — these are synthetic/stale artifacts
  // that arrive when switching periods and would corrupt the bar sequence.
  if (timeMs > Date.now() + 86400000) {
    if (!_farFutureWarned) { _farFutureWarned = true; console.warn(`[customBars] rejecting far-future ticks (first: ${symbol} ${new Date(timeMs).toISOString()})`); }
    return;
  }

  for (const [period, intervalSec] of CUSTOM_PERIODS) {
    const key   = _key(symbol, period);
    const state = _states.get(key);
    if (!state) continue;

    const intervalMs = intervalSec * 1000;
    const barTimeSec = Math.floor(timeMs / intervalMs) * intervalSec; // UTC seconds, 10s-aligned
    const prev       = state.inProgress;

    if (prev === null) {
      // First tick — open the first bar
      state.inProgress = { timeSec: barTimeSec, open: price, high: price,
                           low: price, close: price, tickVolume: 1, realVolume: 0 };
    } else if (barTimeSec === prev.timeSec) {
      // Same bar — update OHLC in-place
      prev.close = price;
      if (price > prev.high) prev.high = price;
      if (price < prev.low)  prev.low  = price;
      prev.tickVolume += 1;
    } else {
      // New bar — finalize previous, open new
      state.completedBars.push(prev);
      if (state.completedBars.length > MAX_BARS)
        state.completedBars.splice(0, state.completedBars.length - MAX_BARS);

      state.inProgress = { timeSec: barTimeSec, open: price, high: price,
                           low: price, close: price, tickVolume: 1, realVolume: 0 };
      _scheduleFlush(key, symbol, period, state);
    }
  }
}

/**
 * Return an ArrayBuffer (48 bytes × N) for the requested symbol/period/time-range.
 * Matches the binary format expected by the Bars class in CSht1uUK.js.
 * Also calls watch() so tick aggregation begins immediately if not already started.
 *
 * @param {string} symbol
 * @param {number} period  — in minutes (e.g. 1/6 for S10)
 * @param {number} fromMs  — range start, UTC epoch ms
 * @param {number} toMs    — range end,   UTC epoch ms
 * @returns {ArrayBuffer}
 */
export function getRates(symbol, period, fromMs, toMs) {
  const key   = _key(symbol, period);
  const state = _states.get(key);

  if (!state) {
    watch(symbol, period); // kick off async hydration; return empty buffer this call
    return new ArrayBuffer(0);
  }

  const fromSec = Math.floor((fromMs ?? 0)          / 1000);
  const toSec   = Math.floor((toMs   ?? Date.now()) / 1000);
  return _barsToBuffer(state.completedBars, state.inProgress, fromSec, toSec);
}

export default { CUSTOM_PERIODS, watch, onTick, getRates };
