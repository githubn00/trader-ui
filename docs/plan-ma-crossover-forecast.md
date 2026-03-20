# Plan: MA Crossover Forecast Alert Indicator

## Context

The existing "Price & MA Alerts" indicator (category 6) draws markers on-chart but never fires OS-level notifications. This plan adds a new indicator — **MA Crossover Forecast** — that estimates how many bars remain before two MAs (EMA or SMA) cross, fires a browser desktop/mobile notification at a user-chosen countdown, and optionally uses the MACD histogram peak/bottom as a filter to avoid premature estimates.

No service worker is needed for MVP: `new Notification(...)` from the main thread works on desktop and mobile (Chrome/Android) as long as the tab is open. A service worker would require a push server and HTTPS infrastructure — unnecessary for MVP.

---

## New Indicator: `"xover"` — MA Crossover Forecast

**Category:** 6 (Signals) | **Title:** "MA Crossover Forecast"

### Settings class in `terminal/Cj-wvwrR.js`

Add `Xp2` class:

```javascript
const Xp2 = class s extends f {
  constructor(e) {
    super(e,
      {
        fastPeriod: 12, fastType: 0,   // 0=EMA, 1=SMA
        slowPeriod: 26, slowType: 0,
        velocityLookback: 3,            // N-bar slope window (user-settable)
        barsBeforeAlert: 5,             // trigger when estimated bars ≤ this
        useMacdFilter: 0,               // 0=off, 1=on
        macdFast: 12, macdSlow: 26, macdSignal: 9,
        notifications: 1,               // 0=off, 1=on
        sameSymbol: 1,                  // 1=use chart symbol, 0=custom
        sourceSymbol: "",               // custom symbol (e.g. "EURUSD")
        sameTimeframe: 1,               // 1=use chart timeframe, 0=custom
        sourceTimeframe: 0,             // custom timeframe index (same enum as MACD_)
      },
      {
        fast: { visible: 1, color: 0xffaa00, thickness: 1, lineType: 0 },
        slow: { visible: 1, color: 0x00aaff, thickness: 1, lineType: 0 },
        alert: { visible: 1, color: 0xff4444, thickness: 1 },
      },
      s.type, s.category, s.digits, s.flags
    );
  }
};
(Xp2.type = "xover"), (Xp2.category = 6), (Xp2.digits = 0), (Xp2.flags = 0);
```

Export as `xp2` / `Xp2`.

---

## Algorithm: `xoverCalc` in `terminal/b2TMcBQ2.js`

### Step 1 — Compute both MAs

Reuse existing `alertsEma` / `alertsSma` helpers already in b2TMcBQ2.js. Add a thin wrapper:

```javascript
function xoverMa(bars, period, type) {
  const closes = new Float64Array(bars.length);
  for (let i = 0; i < bars.length; i++) closes[i] = bars.close(i);
  return type === 1 ? alertsSma(closes, period) : alertsEma(closes, period);
}
```

### Step 2 — Estimate bars to crossover

```javascript
// At bar i, with lookback N:
const dFast = (fast[i] - fast[i - N]) / N;
const dSlow = (slow[i] - slow[i - N]) / N;
const gap   = fast[i] - slow[i];
const dr    = dFast - dSlow;          // rate of gap closure
const barsToX = (dr !== 0) ? -gap / dr : Infinity;
```

`barsToX > 0` means converging (crossover expected), `≤ 0` means diverging.

### Step 3 — MACD filter (optional)

When `useMacdFilter = 1`:
- Compute MACD line = `fastEma(macdFast) - fastEma(macdSlow)`
- Compute MACD signal = `ema(macd, macdSignal)`
- Compute histogram = `macd - signal`
- Track histogram sign-of-slope change: peaked = `hist[i] < hist[i-1]` after hist was rising (for bull crossover); bottomed = `hist[i] > hist[i-1]` after hist was falling (for bear crossover)
- Suppress estimation if histogram has NOT yet peaked/bottomed (still accelerating)
- Reset if histogram re-accelerates beyond the previous peak (false peak)

### Step 4 — Alert edge-trigger

```javascript
// Only fire once per entry into the alert zone (not every bar)
const inZone = barsToX > 0 && barsToX <= params.barsBeforeAlert;
if (inZone && !_prevInZone) fireNotification(type, barsToX);
_prevInZone = inZone;
```

### Notification helper (module-level in b2TMcBQ2.js)

```javascript
const _notifyCooldown = new Map();
function fireNotification(title, body) {
  const key = title + body;
  if (_notifyCooldown.has(key)) return;
  _notifyCooldown.set(key, 1);
  setTimeout(() => _notifyCooldown.delete(key), 60000);  // 60s cooldown

  if (Notification.permission === 'granted') {
    new Notification(title, { body, icon: '/favicon.ico' });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(p => {
      if (p === 'granted') new Notification(title, { body, icon: '/favicon.ico' });
    });
  }
}
```

---

## Indicator Class: `Xe2` in `terminal/b2TMcBQ2.js`

Mirrors the structure of `Ae2` (alerts). Key members:

| Member | Purpose |
|---|---|
| `_fast`, `_slow` | Cached MA arrays (WeakMap) |
| `_estMap` | Map of bar index → estimated barsToX |
| `_alertFired` | Set of bar indices where notification already fired |
| `_prevInZone` | Edge-trigger state |
| `_macdPeaked` | MACD filter state |
| `_hash()` | Cache key: `fastPeriod-fastType-slowPeriod-slowType-symbol-length` |
| `_calc(update)` | Full or incremental (last 10 bars) recalculation |
| `_drawGraph(ctx)` | Draw fast/slow MAs + alert marker at current bar |
| `yMin`, `yMax` | Delegate to price range (overlay indicator) |

### `_drawGraph` rendering

- Draw fast MA line via `this.drawLine(ctx, _fast, style.fast)` — respects `lineType`
- Draw slow MA line via `this.drawLine(ctx, _slow, style.slow)`
- At the current bar, if in alert zone: draw a vertical marker (triangle + dashed vertical line) at current bar indicating estimated crossover bar position
- Label: e.g. "X ~3 bars" drawn near the marker

---

## Form: `XoverFm` in `terminal/YtNU6idj.js`

Follow the `ApFm` pattern. Controls:

| Control | Type | Param |
|---|---|---|
| Symbol | checkbox + text input | `sameSymbol`, `sourceSymbol` |
| Timeframe | checkbox + select | `sameTimeframe`, `sourceTimeframe` |
| Fast Period | number | `fastPeriod` |
| Fast Type | select (EMA/SMA) | `fastType` |
| Slow Period | number | `slowPeriod` |
| Slow Type | select (EMA/SMA) | `slowType` |
| Velocity Lookback | number | `velocityLookback` |
| Bars Before Alert | number | `barsBeforeAlert` |
| Desktop Notifications | checkbox | `notifications` |
| Use MACD Filter | checkbox | `useMacdFilter` |
| *(if useMacdFilter)* MACD Fast | number | `macdFast` |
| *(if useMacdFilter)* MACD Slow | number | `macdSlow` |
| *(if useMacdFilter)* MACD Signal | number | `macdSignal` |
| Fast line style | `xt` picker | `style.fast` |
| Slow line style | `xt` picker | `style.slow` |
| Alert marker style | color-only picker | `style.alert` |

**Symbol/Timeframe UX pattern** — mirrors the existing `MOsFmc` form used by MACD_ and MAO_:
- "Same as chart" checkbox (default checked). When unchecked, reveals a text input for symbol name.
- "Same timeframe" checkbox (default checked). When unchecked, reveals the timeframe dropdown (same options/enum as MACD_'s `sourceTimeframe`).
- The indicator class must request bars for the selected symbol+timeframe from the data layer, the same way MACD_ does — reuse that mechanism.

---

## UI Management: Manage Signals Panel

Alert instances are category 6 indicators and automatically appear in the existing Manage Signals panel (MnSignal.js / `docs/signals-feature.md`). No new management window is needed.

Each instance in the panel will show:
- Indicator name + symbol/timeframe it is monitoring
- Edit and Delete buttons (same as other category 6 indicators)
- Notifications toggle (per instance, bound to `params.notifications`)

The live countdown ("~4 bars to crossover") is **on-chart only** via `_drawGraph` — the panel itself stays static (it doesn't poll live state). This is consistent with existing signals behavior.

---

## Dispatch Registration

### `terminal/C2M0l3R7.js` (Add dialog)
- Add `"xover"` to pickable types array
- Add case in dispatch switch → new index pointing to `XoverFmc` component

### `terminal/BuFyB25p.js` (Edit dialog)
- Add case in dispatch switch → new index pointing to `XoverFm` component

### `terminal/Cj-wvwrR.js`
- Export `Xp2` (settings) and `xp2` (let alias)

### `terminal/b2TMcBQ2.js`
- Register `"xover"` in `switch(type)` inside `analysisManager.add()` (search for `case "alerts":`)
- Export `AnalysisXover` and `AnalysisXoverSettings` in the module object

---

## Files Modified

| File | Change |
|---|---|
| `terminal/b2TMcBQ2.js` | `xoverMa`, `xoverCalc`, `fireNotification`, `Xe2` class, register `"xover"` type |
| `terminal/Cj-wvwrR.js` | Add `Xp2` settings class, export |
| `terminal/YtNU6idj.js` | Add `XoverFm` / `XoverFmc` form components |
| `terminal/C2M0l3R7.js` | Register `"xover"` in add dialog dispatch |
| `terminal/BuFyB25p.js` | Register `"xover"` in edit dialog dispatch |

---

## Verification

1. Add "MA Crossover Forecast" via the indicator picker → form appears with all controls
2. Set fast=12 EMA, slow=26 EMA, barsBeforeAlert=5 → both MAs draw on chart
3. When estimated crossover is ≤5 bars: alert marker appears on chart, browser notification fires (grant permission on first trigger)
4. Enable MACD filter → verify no notification fires during trend acceleration phase
5. Test on mobile (Chrome Android) — notification appears in notification tray
6. Minimize browser window → notification still appears (Web Notifications work with minimized browser, just not closed)
