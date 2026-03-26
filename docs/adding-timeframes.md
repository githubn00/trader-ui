# Adding Custom Timeframes

This document describes how to add a new timeframe to the trader UI. Use it as a reference when adding future timeframes.

## Two Encoding Systems

The codebase uses **two separate encoding systems** for timeframes:

| System | Used for | Values |
|--------|----------|--------|
| **Minute values** | Chart toolbar period buttons | 1, 5, 15, 30, 60, 240, 1440, 10080, 43200 |
| **Bitmask values** | Indicator "show on timeframe" multi-select | 1, 2, 4, 8, 16, 32, 64, 128, 256, 512… |

The `Ni2` function in `terminal/b2TMcBQ2.js` converts bitmask → minutes.

### Bitmask ↔ Label mapping

| Bitmask | Minutes | Label |
|---------|---------|-------|
| 512     | 1/6     | S10   |
| 1       | 1       | M1    |
| 2       | 5       | M5    |
| 4       | 15      | M15   |
| 8       | 30      | M30   |
| 16      | 60      | H1    |
| 32      | 240     | H4    |
| 64      | 1440    | D1    |
| 128     | 10080   | W1    |
| 256     | 43200   | MN    |

New bitmask values must be the next power of 2 after the current highest (currently 512).

> Bitmask values are **not** chronological sort keys. After adding `512 = S10`, numeric bit order no longer matches timeframe order (`512` is smaller than `M1` in time, but larger as a bitmask). Use an explicit display-order array when you need timeframe ordering.

---

## Files to Edit

When adding a new timeframe, update all five locations:

### 1. `terminal/CezRPkQL.js` — Chart toolbar buttons

**a) Icon render function** — add before the first icon function (`yn`/M1):

Each icon is a Svelte fragment function that creates an SVG element using these local aliases:
- `g(tag)` → `createElement(tag)`
- `w(el, attr, val)` → `setAttribute`
- `$(target, el, anchor)` → `insert`
- `f(parent, child)` → `append`
- `h(el)` → `detach`
- `m` → `noop`

For sub-minute timeframes without a complex SVG glyph, use an SVG `<text>` element:

```js
function S10n(t) {
  let e, n;
  return {
    c() {
      ((e = g("svg")),
        (n = g("text")),
        (n.textContent = "S10"),
        w(n, "x", "12"),
        w(n, "y", "16"),
        w(n, "text-anchor", "middle"),
        w(n, "font-size", "8"),
        w(n, "fill", "currentColor"),
        w(e, "width", "24"),
        w(e, "height", "24"),
        w(e, "viewBox", "0 0 24 24"),
        w(e, "xmlns", "http://www.w3.org/2000/svg"));
    },
    m(t, r) { ($(t, e, r), f(e, n)); },
    p: m, i: m, o: m,
    d(t) { t && h(e); },
  };
}
```

**b) `Ja` array** — add a new entry (order = display order):

```js
const Ja = [
  { value: 1 / 6, icon: class extends u { constructor(t) { (super(), d(this, t, null, S10n, p, {})); } } },
  { value: 1,     icon: class extends u { constructor(t) { (super(), d(this, t, null, yn,   p, {})); } } },
  // ...
];
```

The `value` is in **minutes**. For 10 seconds: `1/6`. For 30 seconds: `0.5`.

**c) `Ga(t)` function** — add label for the new period (used as button tooltip):

```js
function Ga(t) {
  if (t === 1 / 6) return "10 Seconds";   // ← add before the switch
  switch (t) {
    case 1: return window.tr(window.lang.chart.period.full.M1);
    // ...
  }
}
```

> **Why `if` instead of `case`?** Floating-point values like `1/6` can't be used in `switch` case labels reliably in all environments. Use `===` comparison in an `if` guard before the `switch`.

---

### 2. `terminal/b2TMcBQ2.js` — Bitmask → minutes conversion (`Ni2`)

Add the new bitmask entry to the map:

```js
function Ni2(b) {
  const m = { 512: 1/6, 1: 1, 2: 5, 4: 15, 8: 30, 16: 60, 32: 240, 64: 1440, 128: 10080, 256: 43200 };
  return m[b] || 0;
}
```

---

### 3. `terminal/DtFtoC84.js` — Indicator period bitmask filter (`ve` array)

Add the new bitmask to the `ve` array (order = display order in the multi-select UI):

```js
const ve = [512, 1, 2, 4, 8, 16, 32, 64, 128, 256];
```

Also update the "select all" value — it must be the sum of all bitmask values:

```js
// 512 + 256 + 128 + ... + 1 = 1023
t.checked ? n(0, (s.period = 1023), s) : n(0, (s.period = 0), s);
```

Formula: `2^(n+1) - 1` where `n` is the number of timeframes. With 10 timeframes: `2^10 - 1 = 1023`.

---

### 4. `terminal/YtNU6idj.js` — Crossover indicator timeframe dropdown

```js
const TF = [[512,'S10'],[1,'M1'],[2,'M5'],[4,'M15'],[8,'M30'],[16,'H1'],[32,'H4'],[64,'D1'],[128,'W1'],[256,'MN']];
```

---

### 5. `add_xover_form.js` — Add-xover form timeframe dropdown

Same change as `YtNU6idj.js` but with template-literal quoting (uses `${q1}` and `${q2}` placeholders for quotes):

```js
const TF = [[512,${q1}S10${q1}],[1,${q1}M1${q1}],[2,${q1}M5${q1}], ...];
```

---

## Adding Future Timeframes — Checklist

- [ ] Assign next power-of-2 bitmask (current highest: 512 for S10)
- [ ] Create icon render function in `CezRPkQL.js` (SVG text element or path glyph)
- [ ] Add entry to `Ja` array in `CezRPkQL.js` (value in minutes, in display order)
- [ ] Add `if (t === <minutes>) return "<label>";` guard in `Ga()` in `CezRPkQL.js`
- [ ] Add `<bitmask>: <minutes>` to `Ni2` map in `b2TMcBQ2.js`
- [ ] Add bitmask to `ve` array in `DtFtoC84.js`
- [ ] Update "select all" value in `DtFtoC84.js` to `(previous_all + new_bitmask)`
- [ ] Add `[bitmask, 'LABEL']` to TF in `YtNU6idj.js`
- [ ] Add `[bitmask, ${q1}LABEL${q1}]` to TF in `add_xover_form.js`
- [ ] Add `(<minutes> === i && <bitmask> & s)` to `isDrawingAllowed()` in `Y63yw9rt.js`
- [ ] Update default `mask.period` in `Mt` constructor in `Y63yw9rt.js` to include new bitmask (add new bitmask to previous value)

## Notes

- **Server support**: The server must support the timeframe for candle data to load. The UI button will appear regardless, but the chart may show no data for unsupported intervals. Indicators that use bid-zero-diff drawing (`_bidZeroDiffW` / `_bidZeroDiffD` in `b2TMcBQ2.js`) must guard against empty data arrays — use `if (lastIdx < 0) return;` before accessing `d[lastIdx]`.
- **Sub-minute values**: Use fractional minutes (e.g., `1/6` for 10s, `0.5` for 30s). The `===` comparison is safe because JavaScript evaluates the same literal expression to the same IEEE 754 double each time.
- **Icon width**: The `iconWidth` in `Ua()` is `8` for `bn` (M30) and `6` for all others. New icons default to `6`.

## Custom (server-unsupported) Timeframes

When `md(period)` returns `0` the server does not know the period. In that case bars are built locally from real-time tick data and stored in **IndexedDB** (`traderCustomBars` / `bars` store). See `terminal/customBarsManager.js`.

### How it works

```
Tick (WS cmd 8)
  └─ Ca-rt9XF.js:1390  barsStore.extends() + customBarsManager.onTick()
       └─ customBarsManager  aggregates into 10-second OHLC bars in memory
            └─ on bar close  →  IndexedDB.put (debounced 500 ms)

Chart period change → gd.getRates()
  └─ md(period) === 0  →  customBarsManager.getRates(symbol, period, from, to)
       └─ returns ArrayBuffer slice from memory (+ current in-progress bar)
```

### Adding a new sub-minute period (e.g. S30 = 30 seconds)

In addition to the 8-file checklist above:

1. **`terminal/customBarsManager.js`** — add entry to `CUSTOM_PERIODS`:
   ```js
   export const CUSTOM_PERIODS = new Map([
     [1 / 6,  10],  // S10
     [1 / 2,  30],  // S30  ← new
   ]);
   ```

2. **`terminal/Y63yw9rt.js`** (`ct` snap function) — add fast-path:
   ```js
   if (i === 1 / 2) return Math.floor(t / 30000) * 30000;
   ```

3. **`terminal/Ca-rt9XF.js`** (`Xn` alignment check) — add:
   ```js
   if (e === 1 / 2) return t % 30000 === 0;
   ```

4. **`terminal/CSht1uUK.js`** (`A` dateShift) — add:
   ```js
   if (e === 1 / 2) { t.setUTCSeconds(t.getUTCSeconds() + 30 * i); return; }
   ```

Everything else (IndexedDB, `gd.getRates` intercept, tick forwarding) is already generic — it reads from `CUSTOM_PERIODS` so no further changes are needed.

### IndexedDB schema

| Field    | Type        | Notes                             |
|----------|-------------|-----------------------------------|
| `id`     | string (PK) | `"${symbol}_${String(period)}"`   |
| `symbol` | string      | e.g. `"EURUSD"`                   |
| `period` | number      | minutes, e.g. `0.1666…` for S10  |
| `buffer` | ArrayBuffer | 48 bytes × N completed bars       |

In-progress (open) bars are kept in memory only and included in `getRates()` responses but not persisted until the bar closes.

### Known issues and fixes applied

#### 1. `extends()` only handled `m === 1` — broke after any time gap

`Bars.extends()` in `CSht1uUK.js` originally had `1 === m &&` as the guard for creating a new bar. This worked when ticks arrived every second, but failed in two cases:
- **Session gap**: IDB bars from a previous session are 24 h old; first live tick has `m ≈ 8640`, so no new bar was ever created and ticks were silently dropped.
- **Brief disconnect**: even a 2-step gap (20 s) blocked new bar creation.

Fix: changed to `m >= 1 &&`, so any forward step creates a new bar at the tick's time. Existing logic for same-bar updates (`m = 0`) is unchanged.

#### 2. Ghost tick with far-future timestamp on period switch

When switching to a custom period, the very first tick that arrives can have a nonsensical `timeMs` far in the future (observed: year 2082). If accepted, this tick:
- Opens a `customBarsManager` in-progress bar at the future timestamp
- When the next real tick arrives, `o < c` causes `Bars.extends()` to `return` early, dropping **all** subsequent ticks

Fix: `customBarsManager.onTick()` now rejects any tick whose `timeMs` is more than 1 day ahead of `Date.now()`.

#### 3. Chart title showed "Unknown" for S10

The chart title uses `_t()` in `CQSQNu0h.js`, not `Ga()` in `CezRPkQL.js`. Added `if (e === 1 / 6) return "S10";` guard before the `switch` in `_t()`.

#### 4. Candles invisible on S10 — `isDrawingAllowed()` returned false

`isDrawingAllowed()` in `Y63yw9rt.js` checks the current chart period against the indicator/renderer's `mask.period` bitmask. The function had hardcoded checks for all standard periods (1, 5, 15, … 43200) but no check for `1/6` (S10). For any unrecognised period it returns `false`, so the candlestick renderer (`vs`) and all indicators were silently skipped.

Two fixes required:
1. Added `(1 / 6 === i && 512 & s)` as the first condition in the `return !!()` chain.
2. Updated the default `mask.period` in the `Mt` settings constructor from `511` to `1023` (511 + 512), so newly-created renderers and indicators include S10 in their "show on" mask by default.
