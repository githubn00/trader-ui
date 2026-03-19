# Alerts Component — User Guide

## Managing Alerts

### Manage Signals Panel

Alerts are managed through the **Manage Signals** side panel, which works identically to the **Manage Drawings** panel:

1. **Click the Signals toolbar button** (tree icon in the top toolbar) to open the Manage Signals panel
2. **View all alert instances** in the list
3. **Edit** an alert by right-clicking and selecting "Edit Indicator" (or double-clicking)
4. **Delete** an alert by selecting it and pressing Delete or clicking the X button
5. **Toggle visibility** by clicking the eye icon next to each alert

### Adding a New Alert Instance

You can add as many alert instances as you want with different configurations:

1. Click **Select Indicator** (or press I)
2. Go to the **Signals tab**
3. Click **"Price & MA Alerts"**
4. Configure parameters in the popup form
5. Click **Add**

The alert is instantly added to the chart and appears in the Manage Signals panel.

### Editing Alert Settings

There are two ways to edit an existing alert:

**Method 1: Right-click in Manage Signals Panel**
1. Open Manage Signals panel (click Signals toolbar button)
2. Right-click the alert instance
3. Select "Edit Indicator"
4. Modify parameters and click Save

**Method 2: Double-click the Alert**
1. Double-click any marker (triangle, circle, square) on the chart
2. Edit dialog opens automatically
3. Modify and save

---

## Parameter Reference

### Basic Parameters

| Parameter | Range | Default | Description |
|-----------|-------|---------|-------------|
| **MA Period** | 0-500 | 50 | Bars lookback for moving average; `0` disables MA-based alerts |
| **MA Type** | EMA, SMA | EMA | Exponential or Simple moving average |
| **Breakout %** | 0.1-10 | 2 | Minimum % price movement to trigger breakout alert |
| **MA Slope** | 1-100 | 20 | Bars lookback for detecting MA slope changes |

### Detection Toggles

Enable/disable each alert type independently:

- **Price Action** — Detect breakouts from 5-bar range highs/lows
- **MA Crossover** — Detect price crossing above/below the MA
- **MA Slope Change** — Detect momentum shifts in MA trend
- **Breakout** — Detect rapid price moves exceeding threshold

### Style Settings

Customize the appearance of each alert type:

| Alert Type | Default Color | Default Thickness | Shape |
|------------|---------------|-------------------|-------|
| **Bullish** | Green | 2px | Up triangle ▲ |
| **Bearish** | Red | 2px | Down triangle ▼ |
| **MA Slope** | Yellow | 1px | Circle ● |
| **Breakout** | Blue | 2px | Square ■ |

---

## Quick Configuration Presets

### Preset 1: Trend Trader
Ideal for following major trends:

```
MA Period:        50
MA Type:          EMA
Breakout %:       2.5
MA Slope Period:  20
Enable:
  ✓ MA Crossover
  ✓ MA Slope Change
  ✗ Price Action
  ✗ Breakout
```

**Best for:** Daily, 4H, 1H charts

---

### Preset 2: Swing Trader
Balanced approach for intermediate moves:

```
MA Period:        20
MA Type:          EMA
Breakout %:       1.5
MA Slope Period:  10
Enable:
  ✓ Price Action
  ✓ MA Crossover
  ✓ MA Slope Change
  ✗ Breakout
```

**Best for:** 1H, 15m charts

---

### Preset 3: Scalper
High-sensitivity for quick trades:

```
MA Period:        0 (disabled)
Breakout %:       0.5
Enable:
  ✓ Price Action
  ✓ Breakout
  ✗ MA Crossover
  ✗ MA Slope Change
```

**Best for:** 5m, 1m charts

---

### Preset 4: Multi-Timeframe
Three instances for confirmation trading:

**Daily Instance:**
```
MA Period:  50, Type: EMA
Breakout:   3%, MA Slope: 30
Enable: MA Crossover, MA Slope
```

**4-Hour Instance:**
```
MA Period:  20, Type: EMA
Breakout:   1.5%, MA Slope: 15
Enable: All
```

**1-Hour Instance:**
```
MA Period:  9, Type: SMA
Breakout:   0.7%, MA Slope: 5
Enable: Price Action, Breakout
```

---

## Alert Interpretation Guide

### Green Up Triangle ▲ (Bullish Signal)
**Occurs when:**
- Price breaks above the 5-bar range high, OR
- Price crosses above the moving average, OR
- MA slope changes from negative to positive

**Action:** Consider **long** positions
**Confirmation:** Wait for another green signal or candle close above the alert

### Red Down Triangle ▼ (Bearish Signal)
**Occurs when:**
- Price breaks below the 5-bar range low, OR
- Price crosses below the moving average, OR
- MA slope changes from positive to negative

**Action:** Consider **short** positions
**Confirmation:** Wait for another red signal or candle close below the alert

### Yellow Circle ● (Momentum Inflection)
**Indicates:** The moving average is changing direction — a **potential trend reversal**

**Action:** Not a trade signal by itself; use as confirmation with green/red triangles
**Context:** Strong when accompanied by a bullish or bearish signal

### Blue Square ■ (Volatility Breakout)
**Indicates:** Price is moving rapidly (exceeds your configured % threshold)

**Action:** Potential start of a new trend or impulse move
**Context:** Often precedes larger moves; watch for green/red confirmation signals

---

## Trading Examples

### Example 1: Trend Confirmation Trade

```
Chart: EUR/USD Daily
Alerts: 50 EMA, MA Crossover + Slope enabled

Price trades sideways → no alerts
Price rises above 50 EMA → GREEN TRIANGLE (MA Crossover)
  Confirms: Price above rising MA, trend is up
  Action: Look for long entries on pullbacks

Price pulls back to 50 EMA → no new signal
50 EMA slope continues positive → YELLOW CIRCLE
  Confirms: Uptrend still has momentum
  Action: Stay long, no reversal yet

Price closes below 50 EMA → RED TRIANGLE (MA Crossover)
  Signal: Trend may be reversing
  Action: Consider closing long or tightening stop loss
```

---

### Example 2: Scalp Trade Setup

```
Chart: BTC/USD 1-Hour
Alerts: MA disabled, Price Action + Breakout (0.5%)

Price consolidates → few alerts
Price breaks above 5-bar high → GREEN TRIANGLE (Price Action)
  Confirms: Strong buyers just broke range
  Action: Entry for quick scalp long

Price moves 0.7% up → BLUE SQUARE (Breakout)
  Confirms: Continued momentum
  Action: Hold, target short-term resistance

Price pulls back, breaks below breakout level → RED TRIANGLE
  Signal: Scalp profit target reached
  Action: Exit with profit
```

---

## Common Questions

**Q: Why aren't my alerts showing on the chart?**
A: Check that at least one detection type is enabled in the settings. If using MA-based alerts, ensure MA Period > 0. Reload the page to clear cache.

**Q: Can I use different alerts on different timeframes?**
A: Yes! Open multiple charts or use a multi-pane layout. Add alerts to each chart with different settings tailored to that timeframe.

**Q: Should I disable all alert types except the ones I need?**
A: Yes, this reduces noise. Enable only the types relevant to your trading strategy:
- Trend traders → MA Crossover + MA Slope only
- Scalpers → Price Action + Breakout only
- Swing traders → All types

**Q: How do I know if my settings are too aggressive?**
A: If you're getting more than 2-3 alerts per bar on average, increase:
- Breakout % threshold
- MA Slope period
- Disable sensitive alert types

**Q: Can I copy alert settings between instances?**
A: Yes! Edit the first alert, write down the settings, then create a new alert and apply the same values.

---

## Tips & Best Practices

### 1. Start Conservative
Begin with moderate settings and adjust based on market conditions:
- Start with default 50 EMA, 2% breakout threshold
- Enable only 1-2 alert types initially
- Observe for 20-30 bars to understand the signal pattern

### 2. Match Timeframe
Adjust MA period to suit your trading timeframe:
- **Daily:** 50-100 EMA
- **4H:** 20-50 EMA
- **1H:** 9-20 EMA
- **15m:** 5-9 EMA
- **5m/scalp:** 0 (disable), use Price Action + Breakout

### 3. Use Confirmation Signals
Don't trade single alerts blindly:
- Wait for multiple signal types to align (e.g., green triangle + yellow circle)
- Wait for price to close beyond alert level
- Confirm with volume or other indicators

### 4. Manage Multiple Instances
Use separate instances for different strategies:
```
Instance 1: Trend following (50 EMA, MA Crossover + Slope)
Instance 2: Scalp/Breakout (No MA, Price Action + Breakout)
```
Toggle visibility to focus on one strategy at a time.

### 5. Regular Optimization
Test your settings across different:
- Market conditions (trending vs ranging)
- Assets (stocks, crypto, forex)
- Timeframes

Fine-tune based on results.

---

## Troubleshooting Guide

| Problem | Solution |
|---------|----------|
| **No alerts appear** | Enable at least one detection type; if using MA, set period > 0 |
| **Too many alerts** | Increase breakout %, increase MA slope period, reduce MA period |
| **Alerts at wrong position** | Reload page; this resets rendering cache |
| **Settings don't save** | Check console for errors; try re-adding the alert |
| **Manage Signals panel empty** | Click Signals toolbar button; if still empty, reload page |
| **Can't delete an alert** | Right-click in Manage Signals panel, select delete; or select and press Delete |

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open/Close Manage Signals | Click Signals toolbar button |
| Delete selected alert | Delete key |
| Edit alert | Double-click marker OR right-click in panel → Edit |
| Toggle alert visibility | Click eye icon in Manage Signals panel |

---

## Summary

The Alerts component provides four powerful, independent detection methods that can be mixed and matched for any trading style. Start with the trend trader preset, adjust parameters for your timeframe, and refine based on market conditions. Use Manage Signals panel to add, edit, and delete alert instances — you can have unlimited instances with different configurations.

**Happy trading!** 📈

