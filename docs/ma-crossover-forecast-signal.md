# MA Crossover Forecast Signal

## Overview

The **MA Crossover Forecast** indicator (type `"xover"`, category 6) estimates how many bars remain before two configurable moving averages cross, and fires a browser desktop/mobile notification when the estimated crossover is within a user-defined threshold.

It appears in the **Signals tab** of the indicator picker and is managed via the **Manage Signals** panel alongside other category 6 indicators.

No service worker is required — notifications use `new Notification(...)` from the main thread (tab must remain open, but can be minimized).

---

## Settings (`Xp2` in `terminal/Cj-wvwrR.js`)

| Param | Default | Description |
|---|---|---|
| `fastPeriod` | 12 | Period for the fast MA |
| `fastType` | 0 | 0 = EMA, 1 = SMA |
| `slowPeriod` | 26 | Period for the slow MA |
| `slowType` | 0 | 0 = EMA, 1 = SMA |
| `velocityLookback` | 3 | N-bar slope window used to estimate crossover timing |
| `barsBeforeAlert` | 5 | Fire notification when estimated bars ≤ this value |
| `useMacdFilter` | 0 | 0 = off, 1 = on — suppress premature estimates |
| `macdFast` | 12 | MACD fast period (filter only) |
| `macdSlow` | 26 | MACD slow period (filter only) |
| `macdSignal` | 9 | MACD signal period (filter only) |
| `notifications` | 1 | 0 = off, 1 = on |
| `sameSymbol` | 1 | 1 = use chart symbol, 0 = custom |
| `sourceSymbol` | `""` | Custom symbol (e.g. `"EURUSD"`) when `sameSymbol=0` |
| `sameTimeframe` | 1 | 1 = use chart timeframe, 0 = custom |
| `sourceTimeframe` | 0 | Timeframe bit when `sameTimeframe=0` (same enum as MACD_) |

### Style defaults

| Series | Color | Thickness |
|---|---|---|
| `fast` | `0xffaa00` (amber) | 1 |
| `slow` | `0x00aaff` (blue) | 1 |
| `alert` | `0xff4444` (red) | 2 |

---

## Algorithm (`Xe2._calc` in `terminal/b2TMcBQ2.js`)

### Step 1 — Compute MAs

Both MAs are computed via `xoverMa(bars, period, type)` which delegates to the existing `alertsEma` / `alertsSma` helpers. Supports optional multi-timeframe via the same HTF aggregation mechanism used by MACD_.

### Step 2 — Estimate bars to crossover

At each bar `i`, using lookback `N = velocityLookback`:

```
dFast    = (fast[i] - fast[i-N]) / N   // per-bar velocity of fast MA
dSlow    = (slow[i] - slow[i-N]) / N   // per-bar velocity of slow MA
gap      = fast[i] - slow[i]           // current separation
dr       = dFast - dSlow               // rate of gap closure
barsToX  = (dr !== 0) ? -gap / dr : Infinity
```

- `barsToX > 0` → converging, crossover expected in `barsToX` bars
- `barsToX ≤ 0` → diverging, no crossover imminent

### Step 3 — MACD filter (optional)

When `useMacdFilter = 1`, the indicator suppresses the crossover estimate until the MACD histogram has peaked (for a bullish crossover) or bottomed (for a bearish crossover). This avoids premature alerts during trend acceleration phases. The filter resets if the histogram re-accelerates beyond its previous extreme.

### Step 4 — Edge-trigger notification

```javascript
const inZone = barsToX > 0 && barsToX <= params.barsBeforeAlert;
if (inZone && !this._prevInZone) fireNotification(...);
this._prevInZone = inZone;
```

The notification fires exactly once per entry into the alert zone. A 60-second module-level cooldown (`_notifyCooldown` Map) prevents duplicate notifications across indicator instances.

---

## Rendering (`Xe2._drawGraph`)

- Draws both MA lines on the price chart (overlay indicator)
- When in alert zone: draws a dashed vertical line at the estimated crossover bar + triangle marker + label (e.g. `"X ~3 bars"`) at the current bar position

---

## Form (`XoverFm` in `terminal/YtNU6idj.js`)

The settings form follows the `ApFm` pattern. Controls:

| Control | Type | Param |
|---|---|---|
| Same as chart symbol | checkbox | `sameSymbol` |
| Source symbol | text input | `sourceSymbol` |
| Same timeframe | checkbox | `sameTimeframe` |
| Source timeframe | select (M1–MN) | `sourceTimeframe` |
| Fast Period | number | `fastPeriod` |
| Fast Type | select (EMA/SMA) | `fastType` |
| Slow Period | number | `slowPeriod` |
| Slow Type | select (EMA/SMA) | `slowType` |
| Velocity Lookback | number | `velocityLookback` |
| Bars Before Alert | number | `barsBeforeAlert` |
| Desktop Notifications | checkbox | `notifications` |
| Use MACD Filter | checkbox | `useMacdFilter` |
| MACD Fast *(if filter on)* | number | `macdFast` |
| MACD Slow *(if filter on)* | number | `macdSlow` |
| MACD Signal *(if filter on)* | number | `macdSignal` |
| Fast line style | `xt` picker | `style.fast` |
| Slow line style | `xt` picker | `style.slow` |
| Alert marker color | color picker | `style.alert` |

---

## Files Changed

| File | Change |
|---|---|
| `terminal/Cj-wvwrR.js` | `Xp2` settings class (`type="xover"`, `category=6`), exported as `xp2` |
| `terminal/b2TMcBQ2.js` | `xoverMa`, `fireNotification`, `Xe2` class, `case "xover"` in analysis switch, `AnalysisXover`/`AnalysisXoverSettings` exports |
| `terminal/YtNU6idj.js` | `XoverFm` / `XoverFmc` form components, exported as `v` |
| `terminal/C2M0l3R7.js` | `"xover"` in pickable types, type registry, `Xover2tc` wrapper, dispatch index 35 |
| `terminal/BuFyB25p.js` | `Xover2t` wrapper, dispatch index 36 |

---

## Verification

1. Add "MA Crossover Forecast" from the Signals tab in the indicator picker — form appears with all controls
2. Set fast=12 EMA, slow=26 EMA, `barsBeforeAlert=5` — both MAs render on the price chart
3. When estimated crossover ≤ 5 bars: alert marker appears on chart; browser notification fires (grant permission on first trigger)
4. Enable MACD filter — verify no notification fires while histogram is still accelerating
5. Mobile (Chrome Android) — notification appears in the system notification tray
6. Minimized browser — notification still fires (Web Notifications work with minimized tab, not closed)
