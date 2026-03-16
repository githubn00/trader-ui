# Engulfing Patterns — Signal Indicator

## Overview

Engulfing Patterns is the first Signal Indicator (category 6). It detects **bullish** and **bearish** engulfing candlestick patterns and marks them directly on the price chart. It appears in the **Signals tab** of the Select Indicator popup and in the **Manage Signals** panel.

---

## Pattern Logic

### Bullish Engulfing
- Current candle is **bullish** (`close > open`)
- Previous candle is **bearish** (`close < open`)
- Current body **completely engulfs** previous body: `current.open ≤ prev.close` AND `current.close ≥ prev.open`
- Marker drawn: **up triangle** at the bar's `low` (pointing upward)
- Default color: green (`0x00FF00`)

### Bearish Engulfing
- Current candle is **bearish** (`close < open`)
- Previous candle is **bullish** (`close > open`)
- Current body **completely engulfs** previous body: `current.open ≥ prev.close` AND `current.close ≤ prev.open`
- Marker drawn: **down triangle** at the bar's `high` (pointing downward)
- Default color: red (`0xFF0000`)

---

## Registration

| Property | Value |
|----------|-------|
| Type string | `"engulfing"` |
| Category | `6` (Signals) |
| Flags | `0` (overlay on main chart pane) |
| Digits | `0` |
| Short title | `"Engulfing"` |
| Full title | `"Engulfing Patterns"` |

---

## Files Changed

### `terminal/Cj-wvwrR.js` — Settings class

**Added case to `h()` display-name function:**
```javascript
case "engulfing":
  return "Engulfing Patterns";
```

**Added `Ep2` settings class** (before `export {`):
```javascript
const Ep2 = class s extends f {
  constructor(e) {
    super(
      e,
      {},                                                   // no params
      {
        bullish: { color: 65280, thickness: 1 },           // green
        bearish: { color: 16711680, thickness: 1 },        // red
      },
      s.type, s.category, s.digits, s.flags,
    );
  }
};
((Ep2.type = "engulfing"), (Ep2.category = 6), (Ep2.digits = 0), (Ep2.flags = 0));
let ep2 = Ep2;
```

**Exported** as `ep`:
```javascript
ep2 as ep,
```

---

### `terminal/b2TMcBQ2.js` — Analysis class

**Import** (`EpS` = EngulfingPatternsSettings):
```javascript
ep as EpS,
} from "./Cj-wvwrR.js";
```

**Cache maps** (added before `const Pe = new Map()`):
```javascript
const engulfBullMap = new Map(), engulfBearMap = new Map();
```

**`engulfCalc(bull, bear, bars, update)`** — detects patterns per bar:
- `update = false`: full recalculation over all bars
- `update = true`: recalculate only the last bar (live tick update)

**`engulfDrawUp(t, s, e, i)`** / **`engulfDrawDn(t, s, e, i)`** — triangle marker drawing, same shape as Fractals markers.

**`Ee2` class** (`AnalysisEngulfingPatterns`) extends `ce` (BaseAnalysis):

| Method / Property | Behavior |
|-------------------|----------|
| `get yMin()` | Returns `this.chart.state.extrema[0] / this.getYDigits()` |
| `get yMax()` | Returns `this.chart.state.extrema[1] / this.getYDigits()` |
| `title()` | Returns `settings.title \|\| "Engulfing Patterns"` |
| `_titleArguments()` | Returns `[]` (no params to display) |
| `_calc(t)` | Reads bars, runs `engulfCalc`, stores results as `this._epBull` / `this._epBear` |
| `_drawGraph(t)` | Iterates visible bars, draws UP marker at bullish lows and DOWN marker at bearish highs |
| `value(t)` | Returns `[]` (no tooltip value needed) |

> **Critical — `yMin` / `yMax` overrides are mandatory for overlay signal indicators.**
>
> The base class `ce` (in `Y63yw9rt.js`) initializes `_yMin = 0` and `_yMax = 0`. Its `_before()` method computes:
> ```
> yStep = (yHeight / (yMax - yMin)) * getScale()
>       = (yHeight / 0) * getScale()
>       = Infinity * 0  →  NaN
> ```
> With `yStep = NaN`, every call to `valueToY(price)` returns `NaN`, and all markers are drawn at an invalid position (invisible).
>
> Any analysis class that draws on the **main price chart pane** must override both getters to use the chart's live price range — exactly as `je` (Fractals) does:
> ```javascript
> get yMin() { return this.chart.state.extrema[0] / this.getYDigits(); }
> get yMax() { return this.chart.state.extrema[1] / this.getYDigits(); }
> ```
> Without these, the indicator will appear to work (patterns calculated, `_drawGraph` called) but nothing will be visible.

**Switch case added** (after `"fractals"`):
```javascript
case "engulfing":
  (([h, r] = this.getOptions(o.AnalysisEngulfingPatternsSettings.flags)),
    (l = new o.AnalysisEngulfingPatternsSettings({ ...i, index: r })),
    (n = new o.AnalysisEngulfingPatterns(h, 5e3, l)));
  break;
```

**Added to `rn` module** and **file exports** as `AnalysisEngulfingPatterns` / `AnalysisEngulfingPatternsSettings`.

---

### `terminal/C2M0l3R7.js` — Indicator picker

**Registry entry added** (alongside other category entries):
```javascript
["engulfing", 6, "Engulfing", "Engulfing Patterns"],
```

**`yt` array** — `"engulfing"` added to the list of pickable indicator type strings.

**Signals tab value corrected**: `value: 5 → value: 6`

The tab's group value must match the indicator category number for the filter `ht[t].category === c` to work. Category 5 is Charts/Overlay (Area/Line/Candles/Bars). Category 6 is Signals — so the Signals tab must have `value: 6`.

---

### `terminal/MnSignal.js` — Manage Signals panel

```javascript
const Vt = new Set(["engulfing"]);
```

Engulfing Patterns now passes the `Vt.has(t.settings.type)` filter and appears in the Manage Signals side panel.

---

## Data Flow

```
User selects "Engulfing Patterns" from Signals tab
  → analysisManager.add("engulfing", settings)
  → b2TMcBQ2.js switch: creates AnalysisEngulfingPatternsSettings + AnalysisEngulfingPatterns
  → Ee2._calc(): runs engulfCalc() over all bars
      → stores Float64Arrays: engulfBullMap[hash] = bull[], engulfBearMap[hash] = bear[]
  → Ee2._drawGraph(): for each visible bar
      → bull[i] set? → engulfDrawUp() at valueToY(low)   — up triangle
      → bear[i] set? → engulfDrawDn() at valueToY(high)  — down triangle

User opens Manage Signals panel
  → MnSignal.js Vt.has("engulfing") = true → indicator appears in list

Live tick arrives
  → Ee2._calc(true): engulfCalc(..., update=true) rechecks only the last bar
```

---

### `terminal/YtNU6idj.js` — Form components

**Added `EpFm` Svelte component** with two style line controls:

- **Bullish** — binds `style.bullish` (visible / color / thickness)
- **Bearish** — binds `style.bearish` (visible / color / thickness)

Three internal functions added (`EpEs`, `EpRs`, `EpOs`) following the same compiled-Svelte pattern as `FrFm` (Fractals form). Exported as `s`.

---

### `terminal/BuFyB25p.js` — Edit Indicator dialog

- Imports `EpFm` (as `s`) from `YtNU6idj.js`
- Added `Ep2t` form function (index **33** in dispatch array)
- Dispatch chain extended: `"engulfing" === t[0].type ? 33 : -1`

---

### `terminal/C2M0l3R7.js` — Select Indicator picker preview

- Imports `EpFmc` (as `s`) from `YtNU6idj.js`
- Added `Ep2tc` form function (index **32** in dispatch array)
- Dispatch chain extended: `"engulfing" === t[0].type ? 32 : -1`

---

## Data Flow

```
User selects "Engulfing Patterns" from Signals tab
  → analysisManager.add("engulfing", settings)
  → b2TMcBQ2.js switch: creates AnalysisEngulfingPatternsSettings + AnalysisEngulfingPatterns
  → Ee2._calc(): runs engulfCalc() over all bars
      → stores Float64Arrays: engulfBullMap[hash] = bull[], engulfBearMap[hash] = bear[]
  → Ee2._drawGraph(): for each visible bar
      → bull[i] set? → engulfDrawUp() at valueToY(low)   — up triangle
      → bear[i] set? → engulfDrawDn() at valueToY(high)  — down triangle

User opens Manage Signals panel
  → MnSignal.js Vt.has("engulfing") = true → indicator appears in list

User opens Edit Indicator dialog
  → BuFyB25p.js dispatch index 33 → Ep2t → EpFm form
      → Bullish style line (color/thickness/visibility)
      → Bearish style line (color/thickness/visibility)

User hovers indicator in Add Indicator picker
  → C2M0l3R7.js dispatch index 32 → Ep2tc → EpFmc form (same controls, preview mode)

Live tick arrives
  → Ee2._calc(true): engulfCalc(..., update=true) rechecks only the last bar
```

---

## How to Add Another Signal Indicator

Follow the same pattern:

1. **`Cj-wvwrR.js`**: Add case to `h()`, add settings class (`flags = 0`), export it.
2. **`b2TMcBQ2.js`**: Import settings, add analysis class + helper functions, add switch case, add to `rn` + exports.
   - **Always override `get yMin()` and `get yMax()`** in the analysis class — see note above. Forgetting these makes all markers invisible with no error in the console.
3. **`C2M0l3R7.js`**: Add `["type", 6, "Short", "Full Name"]` to the registry AND `"type"` to the `yt` array.
4. **`MnSignal.js`**: Add `"type"` to the `Vt` set.
5. **`YtNU6idj.js`**: Add a form component (style lines / param inputs as needed), export as next available alias.
6. **`BuFyB25p.js`**: Import form, add wrapper function, extend dispatch chain.
7. **`C2M0l3R7.js`**: Import form (as `...c` alias), add wrapper function, extend dispatch chain.

The Signals tab value (`6`) and category (`6`) are now aligned — no further tab fixes needed for future signal indicators.

---

## Patch Scripts

- `patch_engulfing.py` — applies the four core file changes (analysis, settings, picker, panel)
- `patch_engulfing_form.py` — wires the style controls into the Edit and Add indicator dialogs

---

## Key Bug Fixed During Implementation

The original signals feature (`patch_signals_c2m0.py`) set the Signals tab to `value: 5`. Since the category for Signal indicators is `6`, the tab filter `category === c` would never match. The tab value was corrected to `6` as part of this implementation.
