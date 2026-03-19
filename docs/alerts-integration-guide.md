# Alerts Component — Integration Guide

## Overview

The **Alerts Component** is a comprehensive trading signal indicator that detects four types of market events:

1. **Price Action Patterns** — Support/resistance breakouts
2. **Moving Average Crossovers** — Price crossing above/below MA
3. **MA Slope Changes** — Momentum shifts in the trend
4. **Breakouts** — Rapid price moves exceeding a threshold

The component is fully integrated into the signals framework (category 6) and can be added as many times as needed with different configurations for different timeframes.

---

## Quick Start

### 1. Apply Patch Scripts

The implementation is split across four patch scripts that must be run in order:

```bash
# Core functionality: settings class and analysis engine
python patch_alerts_settings.py

# Analysis class with detection logic
python patch_alerts_analysis.py

# Registration in picker and manage signals panel
python patch_alerts_registry.py

# UI form component and dialog wiring
python patch_alerts_form.py

# Rebuild the bundled application
./build.js
```

### 2. Add Alerts to Your Chart

1. Open the chart application
2. Click the **Select Indicator** button
3. Navigate to the **Signals tab**
4. Select **"Price & MA Alerts"**
5. Configure parameters in the form:
   - **MA Period**: Set to 0 to disable MA-based alerts, or 20-200 for timeframe-appropriate values
   - **Detection Types**: Toggle which event types to monitor
   - **Breakout Threshold**: Set minimum % move (0.5-5%)
   - **Style**: Customize colors and thickness for each alert type

### 3. Interpret Alerts

Watch the chart pane for markers:

| Marker | Type | Meaning |
|--------|------|---------|
| 🔺 (Green) | Bullish | Bullish condition: breakout, MA cross up, or slope change up |
| 🔻 (Red) | Bearish | Bearish condition: breakdown, MA cross down, or slope change down |
| ● (Yellow) | MA Slope | Momentum inflection (trend change) |
| ■ (Blue) | Breakout | Rapid price move (% threshold exceeded) |

---

## Architecture

### File Structure

```
terminal/
├── Cj-wvwrR.js         (Settings) → Ap2 class
├── b2TMcBQ2.js         (Analysis) → Ae2 class + helpers
├── C2M0l3R7.js         (Picker)  → Registry + dispatch
├── MnSignal.js         (Panel)   → Signal types set
└── YtNU6idj.js         (Form)    → ApFm component
                        → BuFyB25p.js (Edit dialog)
                        → C2M0l3R7.js (Add preview)
```

### Data Classes

#### Settings Class: `Ap2`
- **File:** `terminal/Cj-wvwrR.js`
- **Exports:** `ap`
- **Params:**
  - `maPeriod` (number, default 50) — MA lookback period
  - `maType` (number, default 0) — 0=EMA, 1=SMA
  - `maSlope` (number, default 20) — Slope detection period
  - `breakoutPercent` (number, default 2) — Breakout threshold %
  - `usePrice`, `useMaCross`, `useMaSlope`, `useBreakout` (boolean, default all 1) — Detection toggles
- **Styles:** bullish, bearish, maSlope, breakout

#### Analysis Class: `Ae2`
- **File:** `terminal/b2TMcBQ2.js`
- **Exports:** `AnalysisAlerts`, `AnalysisAlertsSettings`
- **Methods:**
  - `_calc(update)` — Detect alerts for all (update=false) or last 10 bars (update=true)
  - `_drawGraph(ctx)` — Draw markers on chart
  - `title()` — Return formatted title with MA period
  - `yMin` / `yMax` — Price scale getters (critical for overlay rendering)

#### Form Component: `ApFm`
- **File:** `terminal/YtNU6idj.js`
- **Exports:** `ApFm` (with sub-properties `Os`, `Rs`)
- **Features:**
  - Bullish/bearish style pickers (color + thickness)
  - MA period slider (0-500)
  - MA type selector (EMA/SMA)
  - Breakout percentage input
  - MA slope period
  - Toggle checkboxes for each detection type

---

## Configuration Scenarios

### Scenario 1: Trend Following Alerts
Focus on MA interactions for major trend confirmation:

```javascript
const settings = {
  type: "alerts",
  params: {
    maPeriod: 50,      // 50-bar EMA for daily/4H
    maType: 0,         // EMA
    useMaCross: 1,     // Enable MA crossover
    useMaSlope: 1,     // Enable slope changes
    usePrice: 0,       // Disable price action (noise)
    useBreakout: 0,    // Disable breakout
  },
  style: {
    bullish: { color: 65280, thickness: 2 },
    bearish: { color: 16711680, thickness: 2 },
  }
};
chart.analysisManager.add("alerts", settings);
```

### Scenario 2: Multi-Timeframe Confirmation
Add alerts on different timeframes to confirm signals:

**Chart 1 (Daily):**
```javascript
{ params: { maPeriod: 50, maType: 0, ... } }
```

**Chart 2 (4-Hour):**
```javascript
{ params: { maPeriod: 20, maType: 0, ... } }
```

**Chart 3 (1-Hour):**
```javascript
{ params: { maPeriod: 9, maType: 1, ... } }  // SMA for faster response
```

### Scenario 3: High-Frequency Scalp Alerts
Detect small moves and quick reversals:

```javascript
const settings = {
  params: {
    maPeriod: 0,           // Disable MA (adds latency)
    usePrice: 1,           // Detect breakouts from 5-bar range
    useMaCross: 0,         // Disable MA cross
    useMaSlope: 0,         // Disable slope
    useBreakout: 1,        // Enable breakout
    breakoutPercent: 0.3,  // Very aggressive (0.3%)
  }
};
```

### Scenario 4: Support/Resistance Alerts
Pure price action without MA:

```javascript
const settings = {
  params: {
    maPeriod: 0,         // Disable MA
    usePrice: 1,         // Price action only
    useMaCross: 0,
    useMaSlope: 0,
    useBreakout: 0,      // Disable breakout (noise)
  }
};
```

---

## Patch Script Details

### patch_alerts_settings.py
**Target:** `terminal/Cj-wvwrR.js`

- Adds case `"alerts"` → `"Price & MA Alerts"` to the `h()` display-name function
- Defines `Ap2` settings class extending `f` base class
- Exports `ap2 as ap`
- Sets `category = 6`, `type = "alerts"`, `flags = 0`, `digits = 0`

### patch_alerts_analysis.py
**Target:** `terminal/b2TMcBQ2.js`

- Imports `ApS` (Alerts Settings) from `Cj-wvwrR.js`
- Adds four cache maps: `alertsBullMap`, `alertsBearMap`, `alertsSlopeMap`, `alertsBreakoutMap`
- Defines helper functions:
  - `alertsEma(prices, period)` — Exponential moving average
  - `alertsSma(prices, period)` — Simple moving average
  - `alertsMa(bars, period, maType)` — Dispatch to EMA/SMA
  - `alertsDetectSlope(ma, period)` — Compute MA slope
  - `alertsCalc(...)` — Main detection logic
  - `alertsDrawUp/Down/Sideways(...)` — Marker drawing
- Defines `Ae2` analysis class extending `ce` base class with:
  - `get yMin()` / `get yMax()` — Price scale overrides (critical!)
  - `_calc(update)` — Run detection
  - `_drawGraph(ctx)` — Render markers
  - `title()` — Formatted title with MA info
  - `value()` — Tooltip value (empty array)
- Adds switch case for `"alerts"` type → creates Ae2 + ApS
- Exports `AnalysisAlerts`, `AnalysisAlertsSettings`

### patch_alerts_registry.py
**Targets:** `terminal/C2M0l3R7.js`, `terminal/MnSignal.js`

**C2M0l3R7.js:**
- Adds registry entry: `["alerts", 6, "Alerts", "Price & MA Alerts"]`
- Adds `"alerts"` to the `yt` array (pickable indicator types)

**MnSignal.js:**
- Adds `"alerts"` to the `Vt` set (signal types in Manage Signals panel)

### patch_alerts_form.py
**Targets:** `terminal/YtNU6idj.js`, `terminal/BuFyB25p.js`, `terminal/C2M0l3R7.js`

**YtNU6idj.js:**
- Defines `ApFm` form component with:
  - Color/thickness pickers for bullish, bearish, MA slope, breakout styles
  - MA period input (0-500)
  - MA type selector (EMA/SMA)
  - Breakout % threshold
  - MA slope period
  - Checkboxes for detection types
- Exports `ApFm` with `Os` and `Rs` sub-properties for state management

**BuFyB25p.js:**
- Imports `ApFm as Ap2t` for Edit Indicator dialog
- Extends dispatch chain: `"alerts"` type → index 34 → `Ap2t` form

**C2M0l3R7.js:**
- Imports `ApFm as ApFmc` for Add Indicator preview
- Extends dispatch chain: `"alerts"` type → index 35 → `ApFmc` form

---

## How It Works: Data Flow

```
┌─ User selects "Price & MA Alerts" from Signals tab
│
├─ analysisManager.add("alerts", settings)
│
├─ b2TMcBQ2.js: switch case "alerts"
│  ├─ Creates AnalysisAlertsSettings (Ap2)
│  └─ Creates AnalysisAlerts (Ae2)
│
├─ Ae2._calc():
│  ├─ Reads bars and parameters
│  ├─ Computes EMA/SMA if maPeriod > 0
│  ├─ Computes MA slope via alertsDetectSlope()
│  ├─ Calls alertsCalc() → detects 4 event types
│  └─ Caches results in _aBull, _aBear, _aSlope, _aBreakout
│
├─ Ae2._drawGraph(context):
│  ├─ For each visible bar:
│  │  ├─ bull[i] set? → green up triangle
│  │  ├─ bear[i] set? → red down triangle
│  │  ├─ slope[i] set? → yellow circle
│  │  └─ breakout[i] set? → blue square
│  └─ Uses _yMin/_yMax for coordinate transformation
│
├─ Manage Signals panel:
│  └─ MnSignal.js: Vt.has("alerts") = true → appears in list
│
└─ Live tick arrives:
   └─ Ae2._calc(true) → recalculate last 10 bars only
```

---

## Critical Implementation Notes

### 1. yMin / yMax Overrides
**MUST** be present in the `Ae2` analysis class:

```javascript
get yMin() { return this.chart.state.extrema[0] / this.getYDigits(); }
get yMax() { return this.chart.state.extrema[1] / this.getYDigits(); }
```

Without these, all markers render at invalid coordinates (NaN) due to division by zero in the coordinate transformation. This is a **critical but silent failure** — no console errors, markers just don't appear.

### 2. Cache Key Strategy
Results are cached per chart context (symbol/timeframe). Cache is invalidated when:
- Indicator is first added
- Parameters change (MA period, breakout %, etc.)
- New bars arrive (live update mode)

### 3. Incremental Updates
When `_calc(true)` is called on live ticks:
- Only the **last 10 bars** are recalculated
- Previous bars' cached values are reused
- Drastically improves performance for high-frequency ticks

### 4. Disabled Features (maPeriod = 0)
When `maPeriod = 0`:
- MA computation is skipped (returns `null`)
- MA crossover and slope detection are disabled
- Only price action and breakout alerts work
- Improves performance and reduces false signals on ranging markets

---

## Testing & Verification

### Manual Test Checklist

- [ ] Patch scripts run without errors
- [ ] `./build.js` completes successfully
- [ ] Chart loads without console errors
- [ ] Select Indicator → Signals tab → "Price & MA Alerts" appears
- [ ] Click to add → form displays all controls
- [ ] Adjust parameters → markers redraw on next bar
- [ ] Manage Signals panel → "Price & MA Alerts" instance appears
- [ ] Right-click → Edit Indicator → form displays current settings
- [ ] Multiple instances: add with different configs → all appear in panel

### Verification Steps

1. **Settings class exists:**
   ```bash
   grep -n "const Ap2" terminal/Cj-wvwrR.js
   grep -n "ap2 as ap" terminal/Cj-wvwrR.js
   ```

2. **Analysis class exists:**
   ```bash
   grep -n "const Ae2" terminal/b2TMcBQ2.js
   grep -n "AnalysisAlerts," terminal/b2TMcBQ2.js
   ```

3. **Registered in picker:**
   ```bash
   grep -n '"alerts"' terminal/C2M0l3R7.js | wc -l  # Should be ≥ 2
   ```

4. **In signal panel:**
   ```bash
   grep -n '"alerts"' terminal/MnSignal.js
   ```

5. **Form component:**
   ```bash
   grep -n "const ApFm" terminal/YtNU6idj.js
   ```

---

## Troubleshooting

### Alerts Don't Appear After Adding
1. **Check parameters:** At least one detection type (usePrice, useMaCross, useMaSlope, useBreakout) must be enabled
2. **Check MA period:** If using MA-based detection, maPeriod must be > 0
3. **Clear cache:** Reload the page to clear browser cache
4. **Inspect console:** Look for JavaScript errors

### Too Many False Alerts
- Increase `breakoutPercent` threshold (2.5, 3.0, etc.)
- Increase `maSlope` period to reduce sensitivity
- Disable less-relevant detection types
- Reduce MA period for cleaner trends

### Markers Appear at Wrong Y Position
- Verify `yMin` / `yMax` overrides are present in `Ae2` class
- This is a critical bug that causes coordinate transformation to fail
- Check patch script output for success message

### Manage Signals Shows Old List
- Verify `"alerts"` was added to `Vt` set in `MnSignal.js`
- Reload page after patching
- Check browser console for import errors

---

## Future Enhancements

Potential expansions to the alerts component:

1. **Alert Notifications**
   - Toast popups when alerts fire
   - Sound alerts
   - External webhook notifications

2. **Alerts History Panel**
   - Dedicated side panel showing all recent alerts
   - Timestamps, prices, alert types
   - Click to jump to bar on chart

3. **Advanced Filters**
   - Filter by volume / volatility conditions
   - Filter by higher timeframe trend
   - Require confirmation from multiple detection types

4. **Statistics & Performance Metrics**
   - Win rate for each alert type
   - Equity curve if alerts are traded as signals
   - Optimization tool for parameters

5. **Multi-Timeframe Coordination**
   - Alerts that fire only when higher TF aligns
   - Dashboard showing alerts across all open charts

---

## Related Documentation

- **Signal Feature Overview:** `docs/signals-feature.md` — Architecture and registration
- **Engulfing Patterns Signal:** `docs/engulfing-patterns-signal.md` — Simpler signal indicator example
- **Modifying Indicators:** `docs/modifying-existing-indicator-guide.md` — General guide for changes
- **Minified Components:** `docs/svelte-minified-component-guide.md` — UI component patterns

---

## Summary

The Alerts component provides traders with real-time detection of four critical market events. It's fully integrated into the signals framework, supports unlimited instances with independent configurations, and can be extended with custom detection logic. Use the four patch scripts in order, rebuild the application, and you'll have a powerful signal toolkit ready to enhance your trading analysis.

