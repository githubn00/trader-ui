# Alerts Component — Quick Start

## 📦 What's Included

A complete **Price & MA Alerts** signal indicator with 4 detection types:
- **Price Action** — Breakouts from support/resistance
- **MA Crossover** — Price crossing moving average
- **MA Slope Change** — Momentum reversals
- **Breakout** — Rapid price moves

Add as many alerts as you want, each with independent configuration.

---

## ⚡ Quick Setup (2 minutes)

### Step 1: Apply Patches
```bash
python patch_alerts_settings.py
python patch_alerts_analysis.py
python patch_alerts_registry.py
python patch_alerts_form.py
```

Each should print: `✓ [filename] completed successfully`

### Step 2: Rebuild
```bash
./build.js
```

### Step 3: Use It
1. Open chart → **Select Indicator** → **Signals tab**
2. Click **"Price & MA Alerts"**
3. Adjust parameters or use defaults
4. Click **Add**

Markers appear on chart! 🎯

---

## 🎮 Managing Alerts

**Manage Signals Panel** (click Signals toolbar button):
- ✏️ Edit settings → right-click alert → "Edit Indicator"
- 🗑️ Delete → select alert → press Delete
- 👁️ Toggle visibility → click eye icon
- ➕ Add more → Select Indicator → Signals tab → Add (unlimited)

---

## ⚙️ Configuration Quick Reference

| Parameter | Default | Range | Effect |
|-----------|---------|-------|--------|
| **MA Period** | 50 | 0-500 | Bars for MA (0 = disabled) |
| **MA Type** | EMA | EMA/SMA | Exponential or Simple |
| **Breakout %** | 2 | 0.1-10 | Min % move threshold |
| **MA Slope** | 20 | 1-100 | Bars for slope detection |

**Enable/Disable:**
- ☑️ Price Action
- ☑️ MA Crossover
- ☑️ MA Slope Change
- ☑️ Breakout

---

## 📊 Alert Markers

| Marker | Color | Meaning |
|--------|-------|---------|
| **▲** | Green | Bullish signal |
| **▼** | Red | Bearish signal |
| **●** | Yellow | Momentum shift |
| **■** | Blue | Rapid move |

---

## 🎯 Recommended Presets

### For Trend Trading (Daily)
```
MA Period: 50, Type: EMA
Enable: MA Crossover, MA Slope
Disable: Price Action, Breakout
```

### For Swing Trading (4H)
```
MA Period: 20, Type: EMA
Breakout: 1.5%
Enable: All
```

### For Scalping (5m)
```
MA Period: 0 (disabled)
Breakout: 0.5%
Enable: Price Action, Breakout
```

---

## 📚 Full Documentation

- **`ALERTS_IMPLEMENTATION.md`** — Complete technical summary
- **`docs/alerts-signal.md`** — Technical reference
- **`docs/alerts-integration-guide.md`** — Implementation details
- **`docs/alerts-usage.md`** — Trading guide & examples

---

## ✅ Verify Installation

Check patches worked:
```bash
# Should all return "alerts" entries
grep "const Ap2" terminal/Cj-wvwrR.js
grep "const Ae2" terminal/b2TMcBQ2.js
grep '"alerts"' terminal/C2M0l3R7.js
grep '"alerts"' terminal/MnSignal.js
grep "const ApFm" terminal/YtNU6idj.js
```

---

## 🆘 Common Issues

| Problem | Fix |
|---------|-----|
| No alerts appear | Enable at least one type; set MA Period > 0 if using MA |
| Too many alerts | Increase Breakout %, reduce MA sensitivity |
| Settings don't save | Reload page; check console for errors |
| Markers at wrong Y | Reload page to reset rendering cache |

---

## 💡 Pro Tips

1. **Start Conservative** — Use defaults first, adjust after 30 bars
2. **Multi-Instance** — Add same alert type with different params for confirmation
3. **Timeframe Match** — Adjust MA period to suit your chart timeframe
4. **Filter Noise** — Disable detection types you don't need
5. **Combine Signals** — Wait for multiple markers before trading

---

## 🚀 Next Steps

1. Apply patches and rebuild ✓
2. Add an alert to your chart ✓
3. Observe signals for 20-30 bars
4. Adjust parameters for your style
5. Consider adding a second instance with different settings
6. Use Manage Signals panel to organize your alerts

---

**Questions?** Check the full documentation files listed above.

Happy trading! 📈

