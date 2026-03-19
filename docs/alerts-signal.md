# Alerts Signal Indicator

## Overview

The Alerts signal indicator detects and marks four key trading events on the price chart:

1. **Price Action Patterns** — Support/resistance breakouts from recent price ranges
2. **Moving Average Crossovers** — Price crossing above or below a configurable MA
3. **MA Slope Changes** — Momentum shifts detected when MA slope changes direction
4. **Breakouts** — Rapid price moves exceeding a configurable percentage threshold

Each alert type is visually distinguished by a unique marker and color.

---

## Registration

| Property | Value |
|----------|-------|
| Type string | `"alerts"` |
| Category | `6` (Signals) |
| Flags | `0` (overlay on main chart pane) |
| Digits | `0` |
| Short title | `"Alerts"` |
| Full title | `"Price & MA Alerts"` |

---

## Configuration Parameters

The alerts indicator accepts the following configurable parameters:

### Moving Average Settings
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `maPeriod` | number | 50 | MA period in bars; set to 0 to disable MA-based alerts |
| `maType` | number | 0 | `0` = EMA (exponential), `1` = SMA (simple) |

### Detection Settings
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `maSlope` | number | 20 | Bars lookback for detecting MA slope changes |
| `breakoutPercent` | number | 2 | Minimum % price move to trigger breakout alert |
| `usePrice` | bool | 1 | Enable price action pattern detection |
| `useMaCross` | bool | 1 | Enable MA crossover detection |
| `useMaSlope` | bool | 1 | Enable MA slope change detection |
| `useBreakout` | bool | 1 | Enable breakout detection |

---

## Alert Types & Visual Markers

### Bullish Alert (Green Up Triangle ▲)
Indicates **bullish** conditions detected by:
- Price breaking above recent range high
- Price crossing above MA
- MA slope changing from down to up

**Color:** Green (`#00FF00`)
**Thickness:** 2 pixels
**Position:** Placed at bar's high

### Bearish Alert (Red Down Triangle ▼)
Indicates **bearish** conditions detected by:
- Price breaking below recent range low
- Price crossing below MA
- MA slope changing from up to down

**Color:** Red (`#FF0000`)
**Thickness:** 2 pixels
**Position:** Placed at bar's low

### MA Slope Change (Yellow Circle ●)
Indicates momentum reversal (MA slope inflection point).

**Color:** Yellow (`#FFFF00`)
**Thickness:** 1 pixel
**Position:** Placed at bar's midpoint (high+low)/2

### Breakout Alert (Blue Square ■)
Indicates rapid price movement exceeding configured threshold.

**Color:** Blue (`#0000FF`)
**Thickness:** 2 pixels
**Position:** Placed at bar's midpoint

---

## Style Configuration

The indicator supports customizable colors and thicknesses for each alert type:

```javascript
{
  bullish: { color: 65280, thickness: 2 },     // green
  bearish: { color: 16711680, thickness: 2 },  // red
  maSlope: { color: 16776960, thickness: 1 },  // yellow
  breakout: { color: 255, thickness: 2 }       // blue
}
```

Colors are specified as **24-bit RGB integers** (0xBBGGRR format):
- Green: `65280` = `0x00FF00`
- Red: `16711680` = `0xFF0000`
- Yellow: `16776960` = `0xFFFF00`
- Blue: `255` = `0x0000FF`

---

## Detection Logic

### Price Action Patterns
Monitors a rolling 5-bar window and alerts when price breaks beyond the recent high/low:

```
For each bar i:
  highestHigh = max(bars[i-5:i].high)
  lowestLow = min(bars[i-5:i].low)

  IF close > highestHigh AND high == close → BULLISH alert
  IF close < lowestLow AND low == close → BEARISH alert
```

### MA Crossovers
Detects when price crosses above/below the moving average:

```
IF previousClose ≤ prevMA AND currentClose > currentMA → BULLISH alert
IF previousClose ≥ prevMA AND currentClose < currentMA → BEARISH alert
```

### MA Slope Changes
Detects inflection points in the MA trend using configurable lookback period:

```
slope[i] = ma[i] - ma[i-maSlope]

IF slope[i-1] ≤ 0 AND slope[i] > 0 → BULLISH alert (uptrend begins)
IF slope[i-1] ≥ 0 AND slope[i] < 0 → BEARISH alert (downtrend begins)
```

### Breakouts
Identifies rapid price moves exceeding the configured percentage threshold:

```
percentChange = ((close - prevClose) / prevClose) * 100

IF percentChange > breakoutPercent → BREAKOUT alert
IF percentChange < -breakoutPercent → BREAKOUT alert
```

---

## Data Flow

```
User selects "Price & MA Alerts" from Signals tab
  → analysisManager.add("alerts", settings)
  → b2TMcBQ2.js switch: creates AnalysisAlertsSettings + AnalysisAlerts
  → Ae2._calc():
      - Computes EMA/SMA if maPeriod > 0
      - Detects all four alert types via alertsCalc()
      - Stores results in _aBull, _aBear, _aSlope, _aBreakout maps
  → Ae2._drawGraph(): for each visible bar
      - bull[i] set? → draw green up triangle at bar high
      - bear[i] set? → draw red down triangle at bar low
      - slope[i] set? → draw yellow circle at bar midpoint
      - breakout[i] set? → draw blue square at bar midpoint

User opens Manage Signals panel
  → MnSignal.js Vt.has("alerts") = true → indicator appears in list

Live tick arrives
  → Ae2._calc(true): recalculates only the last 10 bars
```

---

## Files Modified

| File | Changes |
|------|---------|
| `terminal/Cj-wvwrR.js` | Added alerts case to h(), Ap2 settings class |
| `terminal/b2TMcBQ2.js` | Added Ae2 analysis class, helper functions, switch case |
| `terminal/C2M0l3R7.js` | Added registry entry, alerts to yt array |
| `terminal/MnSignal.js` | Added "alerts" to Vt set |

---

## Implementation Notes

### yMin/yMax Overrides (Critical)
The analysis class **must** override `get yMin()` and `get yMax()` to use the chart's live price range. Without these, all markers will be invisible because coordinate transformation will produce NaN values.

```javascript
get yMin() { return this.chart.state.extrema[0] / this.getYDigits(); }
get yMax() { return this.chart.state.extrema[1] / this.getYDigits(); }
```

### Cache Key Strategy
Detection results are cached with a key based on the bar's opening timestamp and chart context. Cache is automatically invalidated when:
- Chart symbol changes
- MA period or type changes
- New bars arrive (live updates trigger recalculation)

### Performance Optimization
- Full recalculation only on indicator addition or parameter change
- Incremental updates check only the last 10 bars when new ticks arrive
- MA computation is deferred until needed (maPeriod = 0 disables it)

---

## Usage Examples

### Basic Setup
```javascript
// Add alerts with default settings
const settings = {
  params: {
    maPeriod: 50,      // 50-bar EMA
    breakoutPercent: 2, // 2% move threshold
  },
  style: {}
};
analysisManager.add("alerts", settings);
```

### Aggressive Breakout Detector
```javascript
// Low threshold, detect small moves
const settings = {
  params: {
    breakoutPercent: 0.5,  // 0.5% threshold
    usePrice: 0,           // disable price action
    useMaCross: 0,         // disable MA cross
    useMaSlope: 0,         // disable slope
    useBreakout: 1         // breakout only
  }
};
```

### MA-Centric Alerts
```javascript
// Focus on moving average interactions
const settings = {
  params: {
    maPeriod: 20,         // 20-bar SMA (short-term)
    maType: 1,            // SMA, not EMA
    usePrice: 0,          // disable price action
    useMaCross: 1,        // enable MA cross
    useMaSlope: 1,        // enable slope change
    useBreakout: 0        // disable breakout
  }
};
```

### Timeframe-Specific Configuration
The alerts indicator operates on the **current chart timeframe**. To monitor alerts across multiple timeframes:
1. Open multiple chart windows/panes, each set to a different timeframe
2. Add the Alerts indicator to each chart
3. Configure parameters independently for each timeframe

---

## Troubleshooting

### No Alerts Appear
- **Check parameters:** At least one `use*` flag must be enabled (usePrice, useMaCross, useMaSlope, or useBreakout)
- **Check MA period:** If all detections use MA, ensure maPeriod > 0
- **Inspect cache:** Clear browser cache if recent parameter changes don't take effect

### Too Many Alerts
- Increase `breakoutPercent` threshold (e.g., 2.5 or 3.0)
- Increase `maSlope` lookback period
- Disable less-relevant detection types (set use* flags to 0)

### Performance Issues
- Reduce `maPeriod` (smaller periods = simpler MA)
- Increase `maSlope` period (fewer slope checks)
- Disable price action pattern detection (usePrice = 0)

---

## Related Files & Documentation

- **Feature Overview:** `docs/signals-feature.md`
- **Similar Implementation:** `docs/engulfing-patterns-signal.md` (simpler signal example)
- **Patching Guide:** `docs/modifying-existing-indicator-guide.md`
- **Component Guide:** `docs/svelte-minified-component-guide.md`

---

## Patch Scripts

Three Python scripts implement the alerts indicator:

1. **`patch_alerts_settings.py`** — Adds Ap2 settings class to Cj-wvwrR.js
2. **`patch_alerts_analysis.py`** — Adds Ae2 analysis class + helpers to b2TMcBQ2.js
3. **`patch_alerts_registry.py`** — Registers alerts in picker and Manage Signals panel

Run in order after building:
```bash
python patch_alerts_settings.py
python patch_alerts_analysis.py
python patch_alerts_registry.py
./build.js
```

---

## Future Enhancements

- **Form component** (`YtNU6idj.js`) — Configure parameters via UI
- **Edit dialog wiring** (`BuFyB25p.js`) — Edit alerts in Edit Indicator popup
- **Add indicator preview** (`C2M0l3R7.js`) — Show style controls in Add Indicator popup
- **Advanced filters** — Filter alerts by timeframe, volume, volatility
- **Alert notifications** — Toast/notifications when alerts fire (requires chart event system)
- **Alerts list panel** — Dedicated "Alerts" side panel showing recent alerts with timestamps

