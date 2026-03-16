# Signals Feature — Implementation Notes

## Overview

The Signals feature adds a **Manage Signals** side panel and a **Signals tab** in the Select Indicator popup. Signals are custom indicator types (category 6) capable of generating trade signals. The feature is wired in parallel with the existing Manage Drawings panel.

---

## Architecture

### New Category: 6 (Signals)

Indicator categories in `C2M0l3R7.js`:

| Value | Category |
|-------|----------|
| 0 | Economic Calendar |
| 1 | Trend |
| 2 | Oscillators |
| 3 | Volumes |
| 4 | Bill Williams |
| 5 | Charts/Overlay |
| -1 | Trade marks |
| **6** | **Signals** (new) |

Category 6 is not yet assigned to any indicator in the registry — it will be populated as custom signal indicator types are created.

---

## Files Changed

### `terminal/CBg_RnCD.js`

Language strings added:

```javascript
// Inside chart.indicators.tabs:
signals: "Signals"

// New top-level chart.signals section:
signals: {
  close: "Close",
  empty: "You don't have any signals on the chart",
  title: "Manage Signals",
}
```

### `terminal/C2M0l3R7.js` — Indicator Picker Popup

**Added `Sn` tab slot function** (after existing `fn` for Bill Williams):
```javascript
function Sn(t) {
  // renders window.lang.chart.indicators.tabs.signals
}
```

**Added Signals tab (value 5) to `pn()` assembly**:
- New component `A2` with `value: 5`, slot `Sn`
- New locking var `q`, separator anchor `Z2`
- New handler `function G(n) { t[9](n); }` for two-way group binding

**Extended `dn()` context array** with a sixth bind callback (index `t[9]`):
```javascript
function (t) { ((s = t), e(0, s)); },  // t[9] — Signals group bind
```

### `terminal/MnSignal.js` — Manage Signals Panel (new file)

Derived from `cNlpOkCc.js` (Manage Drawings). Key differences:

| Aspect | Manage Drawings | Manage Signals |
|--------|----------------|----------------|
| Title | `window.lang.chart.tree.title` | `window.lang.chart.signals.title` |
| Close | `window.lang.chart.tree.close` | `window.lang.chart.signals.close` |
| Empty | `window.lang.chart.tree.empty` | `window.lang.chart.signals.empty` |
| Filter | All indicators | `SIGNAL_TYPES.has(t.settings.type)` |

**`SIGNAL_TYPES` set** (defined before the `wt` class export):
```javascript
const Vt = new Set();   // populate with signal indicator type strings
export { wt as default };
```

To add a signal indicator type: `Vt.add("my_signal_type")` — or better, populate from the registry when actual signal indicators are created.

The component accepts the same props as `cNlpOkCc.js`:
`symbol`, `objectsManager`, `analysisManager`, `objectsStore`, `indicatorsStore`

### `terminal/CezRPkQL.js` — Main App Wiring

**Lazy import** (alongside `Xp` for cNlpOkCc.js):
```javascript
Np2 = () => t(() => import("./MnSignal.js"), []),
```

**New panel helper functions** inserted before `yp`:
- `mp2(t)` — sets `t[31]` to the lazy-loaded module default
- `bp2(t)` — instantiates `new t[31]({...props...})`, registers `"close"` → `t[23]`
- `Np2p(t)` — async loader wrapper using `_t` + `Np2`, slots `bp2`

**Sidebar panel selector `Mp` / `s()`** extended with index 3:
```
tradeEdit/Create → 0
depthOfMarket   → 1
tree            → 2
signals         → 3  (new)
-1 = hidden
```

**Sidebar visibility condition** (`vp` wrapper) updated:
```javascript
t[7].depthOfMarket || t[7].tree || t[7].signals || ...
```

**Toolbar (`_a` function)** — new `Q_sg` signals toggle button:
- `icon: Ho` (same tree-panel icon, placeholder)
- `checked: t[4].signals`
- `title: window.tr(window.lang.chart.signals.title)`
- `click → t[17]` (signals toggle from `qa`)
- Placed in the `e` outer div alongside the DOM button (`P`)

**`qa` toolbar logic** — new `t[17]` handler:
```javascript
function () {
  o.setLayout({ signals: !o.signals, tree: !1, depthOfMarket: !1 });
}
```
Tree and DOM toggles also reset `signals: !1` on activation.

**`Gp` main logic** — new `t[23]` close handler:
```javascript
function () {
  q(f, (r.signals = !1), r);
}
```
The "hide all left panels" handler also clears `signals: !1`.

---

## Data Flow: Signals Panel

```
User clicks Signals toolbar button
  → qa t[17]: layoutStore.setLayout({ signals: true, tree: false, depthOfMarket: false })
  → Mp s() returns 3
  → Np2p renders: _t lazy-loads MnSignal.js
  → bp2 instantiates wt (MnSignal default) with chart's analysisManager + indicatorsStore
  → wt.pt filters analysisManager.data via Vt (SIGNAL_TYPES set)
  → panel renders empty state (Vt is empty) or signal indicators list

User clicks X (close)
  → MnSignal emits "close" event
  → bp2 handler: t[23] → Gp sets r.signals = false
  → panel hides
```

---

## How to Register a Signal Indicator Type

When a custom signal indicator is created (e.g., type `"my_signal"`):

1. **Add to `MnSignal.js`** registry set so it appears in Manage Signals:
   ```javascript
   const Vt = new Set(["my_signal"]);
   ```

2. **Add to `C2M0l3R7.js`** indicator registry with category 6:
   ```javascript
   ["my_signal", 6, "My Signal", "My Signal Full Name"],
   ```
   This makes it appear in the Signals tab of the Select Indicator popup.

---

## Patch Scripts

| Script | Target | Purpose |
|--------|--------|---------|
| `patch_signals_cbg.py` | `CBg_RnCD.js` | Language strings |
| `patch_signals_c2m0.py` | `C2M0l3R7.js` | Signals tab in indicator picker |
| `patch_make_mnsignal.py` | creates `MnSignal.js` | Panel component from cNlpOkCc.js |
| `patch_signals_cez.py` | `CezRPkQL.js` | Full wiring: import, panel, toolbar |

All scripts use `assert content.count(anchor) == 1` guards and write only on success.

---

## Key Context Indices (CezRPkQL.js)

| Index | Scope | Value |
|-------|-------|-------|
| `t[26].default` | `_t` slot | lazy-loaded module default |
| `t[30]` | `mp` / `bp` | Manage Drawings component class |
| `t[31]` | `mp2` / `bp2` | Manage Signals component class |
| `t[23]` | `Gp` return | signals close handler |
| `t[17]` | `qa` return | signals toggle (toolbar) |

---

## Related Files

| File | Role |
|------|------|
| `terminal/cNlpOkCc.js` | Manage Drawings — template for MnSignal.js |
| `terminal/C3TG5Sy0.js` | Depth of Market panel |
| `terminal/C2M0l3R7.js` | Select Indicator popup + indicator registry |
| `terminal/CezRPkQL.js` | Main app shell — wires all panels and toolbar |
| `docs/depth-of-market-research.md` | DOM data flow reference |
