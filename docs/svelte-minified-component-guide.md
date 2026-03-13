# Guide: Adding Components to Svelte Compiled/Minified Files

This documents the pattern used to add MACD_ (a copy of the MACD indicator with a "Same timeframe source" option) to the trader-ui project.

## File Map

| File | Role |
|---|---|
| `terminal/Cj-wvwrR.js` | Indicator settings classes (params, style, type metadata) |
| `terminal/b2TMcBQ2.js` | Indicator manager — `add()` switch creates instances |
| `terminal/C2M0l3R7.js` | Indicator list/metadata array (registry) |
| `terminal/CBg_RnCD.js` | English language strings |
| `terminal/YtNU6idj.js` | Svelte compiled form components for indicator settings dialogs |
| `terminal/BuFyB25p.js` | Form dispatch — maps indicator type string → form component |

---

## Step 1: Add Settings Class (`Cj-wvwrR.js`)

Add a new class after the existing indicator you are copying:

```javascript
const K_ = class s extends f {
  constructor(e) {
    super(
      e,
      { fast: 12, slow: 26, macd: 9, apply: 0, sameTimeframeSource: 1, sourceTimeframe: 0 },
      {
        line: { visible: !0, color: 16711790, thickness: 1 },
        signal: { visible: !0, color: 38143, thickness: 1 },
      },
      s.type, s.category, s.digits, s.flags,
    );
  }
};
((K_.category = 2), (K_.type = "macd_"), (K_.flags = 4), (K_.digits = 6));
let U_ = K_;
```

Add `U_ as G` to the file's `export {}` block.

Also add to the `h(s)` type-name switch:
```javascript
case "macd_": return "MACD_"
```

---

## Step 2: Register in Indicator Manager (`b2TMcBQ2.js`)

Add import:
```javascript
import { G as Xs2 } from "./Cj-wvwrR.js";
```

Add case in `add()` switch:
```javascript
case "macd_":
  (([h, r] = this.getOptions(o.AnalysisMACD_Settings.flags)),
    (l = new o.AnalysisMACD_Settings({ ...i, index: r })),
    (n = new o.AnalysisMACD_(h, 5e3, l)));
  break;
```

Add to frozen module object and exports:
```javascript
AnalysisMACD_: Wi,
AnalysisMACD_Settings: Xs2
```

---

## Step 3: Add to Registry (`C2M0l3R7.js`)

Add to the `yt` array:
```javascript
"macd_"
```

Add to the metadata array:
```javascript
["macd_", 2, "MACD_"]
```

---

## Step 4: Add Language String (`CBg_RnCD.js`)

```javascript
sameTimeframeSource: "Same timeframe source",
```

---

## Step 5: Add Form Components (`YtNU6idj.js`)

This file is a single-line minified Svelte compilation. Use Python to insert code.

### Key constants and runtime aliases (module scope)
- `ee = [1,2,4,8,16,32,64,128,256]` — period bitmask values (M1→MN)
- `B` — checkbox component (`Nt` from C8gngcK2.js), supports `disabled` prop
- `t, e, s` — Svelte base class, init helper, safe_not_equal
- `m, h, i, f, k, _, b, l, o, n, v, g` — createElement, createTextNode, insert, append, mount_component, create_component, destroy_component, transition_in, transition_out, detach, createTextNode, attr
- `H, T` — group_outros, check_outros
- `D, U` — ensure_array_like, destroy_each
- `M, W` — noop, subscribe (store)
- `Gt` — Boolean (used as filter for outro cleanup)
- `q, x` — binding callbacks array, bind_component
- `j` — schedule_update (for two-way binding guards)
- `yt, St, Q, xt` — tab wrapper, fast/slow/macd input, apply-to select, style line component

### Dirty flag bitmask
State index N → dirty bit `1 << N`. Example: index 1 = bit 2, index 4 = bit 16.

### Period-to-bit mapping
```
1min→1, 5min→2, 15min→4, 30min→8, 60min→16, 240min→32, 1440min→64, 10080min→128, 43200min→256
```

### Insertion pattern (Python)

```python
with open('terminal/YtNU6idj.js', 'r', encoding='utf-8') as f:
    content = f.read()

new_code = '...'  # your new functions as a single string

export_idx = content.rfind('export{')
new_content = content[:export_idx] + new_code + content[export_idx:]

# Update export
old_export = 'export{...,Oe as o};'
new_export = 'export{...,Oe as o,ne2 as p,Fs2 as q};'
new_content = new_content.replace(old_export, new_export)

with open('terminal/YtNU6idj.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
```

### Component structure (ne2 — timeframes with "Same timeframe source")

State indices for `se2`:
- 0: `a` — settings store
- 1: `n` — settings value (reactive)
- 2: `cTF` — toggle individual "show on" TF
- 3: `onShowAll` — toggle all TFs
- 4: `i` — analysisManager
- 5: curried `cTF` → `(bit, event) => cTF(event, bit)`
- 6: `onSameSrc` — toggle sameTimeframeSource
- 7: `onSrcTF` — single-select source TF
- 8: curried `onSrcTF` → `(bit, event) => onSrcTF(bit, event)`
- 9: per-item bit (loop context via `Jt2`)

Key behaviors:
- When `sameTimeframeSource` toggled OFF: auto-sets period mask to current TF bit only
- `onSrcTF`: only sets `sourceTimeframe` when `checked=true` (single-select)
- `Qt2m` disables non-current TFs when `sameTimeframeSource=false`
- `Yt2s` only shows TFs with bit > current TF bit

### Anchor pattern for multiple conditionals in render function

```javascript
// c(): create in order
e=m("div"), _(s.$$.fragment), a=h(), w&&w.c(), c=h(), _(r.$$.fragment), u=h(), y&&y.c()

// m(): append anchors BEFORE optional blocks, then insert before anchor
k(s,e,null), f(e,a),
f(e,c), w&&w.m(e,c),   // anchor c appended first; w inserts before c
k(r,e,null), f(e,u),
y&&y.m(e,null)          // y appended at end

// p(): create block before anchor when appearing
w=Yt2m(t), w.c(), l(w,1), w.m(e,c)   // insert before anchor c
y=Yt2s(t), y.c(), l(y,1), y.m(e,null) // append at end
```

---

## Step 6: Wire Form in Dispatch (`BuFyB25p.js`)

### Python patch approach

```python
with open('terminal/BuFyB25p.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add imports
content = content.replace(
    '...}from"./YtNU6idj.js";',
    '...,p as ne2,q as Fs2}from"./YtNU6idj.js";'
)

# 2. Add Mt2 function (copy of Mt using Fs2+ne2) after Mt

# 3. Add to dispatch array
content = content.replace('const p=[...,tt]', 'const p=[...,tt,Mt2]')

# 4. Add to type ternary
content = content.replace(
    '"calendar"===t[0].type?31:-1}',
    '"calendar"===t[0].type?31:"macd_"===t[0].type?32:-1}'
)
```

### Mt2 structure (mirrors Mt)
```javascript
function Mt2(t){
  let n,s,r,g;
  return n=new Fs2({props:{settings:t[0]}}),
    r=new ne2({props:{analysisManager:t[1],settings:t[0]}}),
    {
      c(){p(n.$$.fragment),s=c(),p(r.$$.fragment)},
      m(t,e){f(n,t,e),i(t,s,e),f(r,t,e),g=!0},
      p(t,s){
        const e={};1&s&&(e.settings=t[0]),n.$set(e);
        const a={};2&s&&(a.analysisManager=t[1]),1&s&&(a.settings=t[0]),r.$set(a)
      },
      i(t){g||($(n.$$.fragment,t),$(r.$$.fragment,t),g=!0)},
      o(t){a(n.$$.fragment,t),a(r.$$.fragment,t),g=!1},
      d(t){t&&e(s),o(n,t),o(r,t)}
    }
}
```

---

## Notes

- In Svelte compiled code, function-local variable names like `e,s,a,c` shadow module-level Svelte helpers (`m()`, `f()`, etc.) — this is intentional.
- The `$$scope` dirty flag `512` = bit for index 9 (loop context); `4098` = bits for complex slot updates.
- `analysisManager.chart.bars.period` gives current period in minutes.
- `a.set(n)` triggers store subscribers to re-render; `i.setPeriodMask(uid, mask)` updates TF visibility mask.
