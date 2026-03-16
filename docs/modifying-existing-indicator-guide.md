# Guide: Modifying an Existing Indicator (Params, Form, Calculation, Title)

This documents the pattern used to add configurable **Left bars / Right bars** inputs to the Fractals indicator. Use this as the reference for modifying any existing indicator — adding new params, wiring form inputs, updating the calculation, and showing params in the chart overlay.

Compare with `svelte-minified-component-guide.md` which covers **adding a brand-new** indicator from scratch.

---

## File Map (same as for new indicators)

| File | Role |
|---|---|
| `terminal/Cj-wvwrR.js` | Settings classes — params defaults, style defaults, type metadata |
| `terminal/YtNU6idj.js` | Svelte compiled form components |
| `terminal/BuFyB25p.js` | Form dispatch — maps indicator type → form component (edit dialog) |
| `terminal/C2M0l3R7.js` | Indicator picker dialog — preview form dispatch |
| `terminal/b2TMcBQ2.js` | Indicator manager — `add()` switch + calculation classes |

---

## Step 1: Add/change params in the settings class (`Cj-wvwrR.js`)

Find the class by searching for the type string in the `h(s)` switch:

```javascript
case "fractals": return "Fractals"
```

The class immediately above that section owns the type. Change its params object:

```javascript
// Before
{ apply: 0 }

// After — add left/right with sensible defaults
{ left: 2, right: 2 }
```

**Notes:**
- The params object becomes `this.settings.params` at runtime.
- Default values here are also the placeholder values shown in the form inputs.
- Removing a param (e.g. `apply`) that was previously present can break existing saved indicators — guard with `|| default` in the calculation.

---

## Step 2: Create a new form component in `YtNU6idj.js`

The file is a single-line minified Svelte compilation. Insert new code **before** the `export{` block using Python.

### Key module-level aliases (do NOT redeclare these in your functions)

| Alias | What it is |
|---|---|
| `t` | Svelte base class `S` |
| `e` | `init` helper |
| `s` | `safe_not_equal` |
| `m` | `createElement` |
| `h` | `createTextNode` / text node |
| `i` | `insert` (DOM) |
| `n` | `detach` (DOM) |
| `f` | `mount_component` |
| `k` | `mount_component` (used in slot context) |
| `b` | `destroy_component` |
| `l` | `transition_in` |
| `o` | `transition_out` |
| `_` | `create_component` |
| `q` | binding callbacks array |
| `x` | `bind_component` |
| `j` | `schedule_update` (used in two-way binding guards) |
| `W` | `subscribe` (store) |
| `M` | `noop` |
| `R` | `Field` component — labeled row wrapper |
| `yt` | Layout `div` wrapper (renders `<div class="layout">`) |
| `xt` | Style-line component (`label`, `visible`, `color`, `thickness`) |
| `St` | Fast/slow/macd compound input |
| `Q` | Apply-to select |
| `K` | Basic `Input` component (from `C8gngcK2.js`) |

> **Critical:** Function-local variable names shadow module-level aliases. Inside your render functions `e,s,a,c,r` etc. are local — never declare `j`, `l`, `o`, `W`, `M` as local vars, as these are needed at call sites inside the function body.

### Component state index convention

| Index | Content |
|---|---|
| 0 | `i` — the settings store |
| 1 | `n` — subscribed value (reactive) |
| 2+ | handler functions (`function(e){t.$$.not_equal(...)}`) |

Dirty bit for index `N` = `1 << N`. Index 1 (subscribed value) = dirty bit `2`. Use `2&n` as the mask in `p()` update functions.

### Pattern: number input for a single param (e.g. "Left bars")

```javascript
// Slot function — receives FrEs's ctx as t
function FrWt(t){
  let e,s,n;
  function i(e){t[2](e)}  // t[2] = handler for params.left (state index 2)
  let a={type:"number",min:1,placeholder:"2"};
  return void 0!==t[1].params.left&&(a.value=t[1].params.left),
  e=new K({props:a}),q.push((()=>x(e,"value",i))),
  {c(){_(e.$$.fragment)},m(t,s){k(e,t,s),n=!0},
   p(t,n){const o={};!s&&2&n&&(s=!0,o.value=t[1].params.left,j((()=>s=!1))),e.$set(o)},
   i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){o(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}
```

- `t[1].params.left` — access subscribed value at index 1, sub-field params.left
- `t[2]` — the params.left setter handler (state index 2)
- Dirty bit `2` = bit for state index 1 (subscribed value changed)
- Guard variable `s` prevents circular update feedback

### Pattern: inner render function (two inputs + style line)

```javascript
function FrEs(t){
  let e,s,a,c,r,u,$,V,d;
  // R = labeled Field wrapper; slot fn receives this ctx as t
  e=new R({props:{label:"Left bars",$$slots:{default:[FrWt]},$$scope:{ctx:t}}}),
  s=new R({props:{label:"Right bars",$$slots:{default:[FrZt]},$$scope:{ctx:t}}});
  // xt = style line (visible/color/thickness)
  let A2={label:window.tr(window.lang.chart.indicators.form.style.title)};
  function B2(e){t[4](e)} // visible handler at state index 4
  function C2(e){t[5](e)} // color handler
  function D2(e){t[6](e)} // thickness handler
  void 0!==t[1].style.line.visible&&(A2.visible=t[1].style.line.visible),
  void 0!==t[1].style.line.color&&(A2.color=t[1].style.line.color),
  void 0!==t[1].style.line.thickness&&(A2.thickness=t[1].style.line.thickness),
  a=new xt({props:A2}),
  q.push((()=>x(a,"visible",B2))),q.push((()=>x(a,"color",C2))),q.push((()=>x(a,"thickness",D2)));
  return{
    c(){_(e.$$.fragment),c=h(),_(s.$$.fragment),r=h(),_(a.$$.fragment)},
    m(t,n){k(e,t,n),i(t,c,n),k(s,t,n),i(t,r,n),k(a,t,n),d=!0},
    p(t,n){
      // Propagate $$scope to R slot children when subscribed value changes
      const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);
      const l2={};2&n&&(l2.$$scope={dirty:n,ctx:t}),s.$set(l2);
      // Update xt props with two-way binding guards
      const i2={};
      !u&&2&n&&(u=!0,i2.visible=t[1].style.line.visible,j((()=>u=!1)));
      !$&&2&n&&($=!0,i2.color=t[1].style.line.color,j((()=>$=!1)));
      !V&&2&n&&(V=!0,i2.thickness=t[1].style.line.thickness,j((()=>V=!1)));
      a.$set(i2)
    },
    i(t){d||(l(e.$$.fragment,t),l(s.$$.fragment,t),l(a.$$.fragment,t),d=!0)},
    o(t){o(e.$$.fragment,t),o(s.$$.fragment,t),o(a.$$.fragment,t),d=!1},
    d(t){t&&(n(c),n(r)),b(e,t),b(s,t),b(a,t)}
  }
}
```

### Pattern: outer render (yt layout wrapper)

```javascript
function FrRs(t){
  let e,s;
  return e=new yt({props:{$$slots:{default:[FrEs]},$$scope:{ctx:t}}}),
  {c(){_(e.$$.fragment)},m(t,n){k(e,t,n),s=!0},
   p(t,[s]){const n={};2&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},
   i(t){s||(l(e.$$.fragment,t),s=!0)},o(t){o(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}
```

### Pattern: logic function and class

```javascript
function FrOs(t,e,s){
  let n,o2=M,l2=()=>(o2(),o2=W(i,(t=>s(1,n=t))),i);
  t.$$.on_destroy.push((()=>o2()));
  let{settings:i}=e;
  return l2(),
  t.$$set=t=>{"settings"in t&&l2(s(0,i=t.settings))},
  [i, n,
   function(e){t.$$.not_equal(n.params.left,e)&&(n.params.left=e,i.set(n))},   // index 2
   function(e){t.$$.not_equal(n.params.right,e)&&(n.params.right=e,i.set(n))}, // index 3
   function(e){t.$$.not_equal(n.style.line.visible,e)&&(n.style.line.visible=e,i.set(n))},
   function(e){t.$$.not_equal(n.style.line.color,e)&&(n.style.line.color=e,i.set(n))},
   function(e){t.$$.not_equal(n.style.line.thickness,e)&&(n.style.line.thickness=e,i.set(n))}
  ]
}
class FrFm extends t{constructor(t){super(),e(this,t,FrOs,FrRs,s,{settings:0})}}
```

### Python insertion pattern

```python
with open('terminal/YtNU6idj.js', 'r', encoding='utf-8') as f:
    content = f.read()

new_code = '...'  # all new functions as a single string

export_idx = content.rfind('export{')
content = content[:export_idx] + new_code + content[export_idx:]

# Append to export block
old_export = '...,Fs2 as q};'
new_export = '...,Fs2 as q,FrFm as r};'
content = content.replace(old_export, new_export, 1)
```

> **Export alias collision:** Check the current export block for the next free single-letter alias. The existing sequence ends at `q` (Fs2). `r` is the next free alias.

---

## Step 3: Replace the indicator's form in `BuFyB25p.js`

Find the existing form function for the indicator (search for its type in the dispatch ternary `l()`). In the component array, find which function maps to that index.

For Fractals (index 28 → function `et`):

```javascript
// Before: used old style-only form (_=Te)
function et(t){let n,s,r,g;return n=new _({props:{settings:t[0]}}), ...}

// After: use new params+style form (FrFm)
function et(t){let n,s,r,g;return n=new FrFm({props:{settings:t[0]}}), ...}
```

Also add the import:
```javascript
// Before
,p as ne2,q as Fs2}from"./YtNU6idj.js";

// After
,p as ne2,q as Fs2,r as FrFm}from"./YtNU6idj.js";
```

---

## Step 4: Replace the picker preview form in `C2M0l3R7.js`

Same pattern. The picker has its own dispatch array `i` and function `g()`. Find the form function at the same index (28 for fractals → `Ot`):

```javascript
// Before
(n = new mt({ props: { settings: t[0] } })),

// After
(n = new FrFmc({ props: { settings: t[0] } })),
```

Add import (use a distinct alias to avoid collision with `BuFyB25p.js`):
```javascript
  p as ne2c,
  q as Fs2c,
  r as FrFmc       // ← add
} from "./YtNU6idj.js";
```

---

## Step 5: Update the calculation (`b2TMcBQ2.js`)

### Cache key — always include params that affect output

```javascript
// Before: cache key ignores params
const e = this.baseHash();

// After: append left/right so changing inputs invalidates the cache
const { params: p2 } = this.settings,
      left  = (p2 && p2.left)  || 2,
      right = (p2 && p2.right) || 2,
      e = [this.baseHash(), left, right].join("-");
```

### Pass params into the calculation function

```javascript
// Before
if (i && a) t && Oe(i, a, s, !0);
else { Oe(i, a, s); ... }

// After
if (i && a) t && Oe(i, a, s, left, right, !0);
else { Oe(i, a, s, left, right); ... }
```

### Parameterize the algorithm itself

Replace hardcoded N-bar comparisons with loops:

```javascript
// Before: hardcoded 2-bar checks
function Oe(t, s, e, i = !1) {
  let a = e.length - 5;
  i || (a = 2);
  for (let n = a, l = e.length - 2; n < l; n++)
    (e.high(n) > e.high(n+1) && e.high(n) > e.high(n+2) &&
     e.high(n) >= e.high(n-1) && e.high(n) >= e.high(n-2) && (t[n]=e.high(n)),
     ...)
}

// After: variable left/right via loops
function Oe(t, s, e, left, right, i = !1) {
  const start = i ? Math.max(left, e.length - right - 1) : left;
  for (let n = start, l = e.length - right; n < l; n++) {
    let hUp = true, lDn = true;
    for (let r = 1; r <= right && hUp; r++) { if (e.high(n) <= e.high(n+r)) hUp = false; }
    for (let r = 1; r <= right && lDn; r++) { if (e.low(n)  >= e.low(n+r))  lDn = false; }
    for (let r = 1; r <= left  && hUp; r++) { if (e.high(n) <  e.high(n-r)) hUp = false; }
    for (let r = 1; r <= left  && lDn; r++) { if (e.low(n)  >  e.low(n-r))  lDn = false; }
    if (hUp) t[n] = e.high(n);
    if (lDn) s[n] = e.low(n);
  }
}
```

**Incremental update start position:**
- Full recalc: start at `left` (skip bars with no left context)
- Incremental: start at `Math.max(left, e.length - right - 1)` — only recheck the tail

---

## Step 6: Show params in the chart overlay title

The base class `ce` implements:
```javascript
title() {
  return `${this.settings.title} (${this._titleArguments().join(", ")})`;
}
```

Indicators that override `title()` directly bypass this. Replace the manual override with `_titleArguments()`:

```javascript
// Before: overrides title(), shows no params
title() {
  return this.settings.title;
}

// After: lets ce.title() format it; returns [left, right]
_titleArguments() {
  const { params: t } = this.settings;
  return [(t && t.left) || 2, (t && t.right) || 2];
}
```

Result: **"Fractals (2, 2)"** — updates live when the user changes the form inputs.

---

## Patch script pattern (Python)

All modifications are done with Python patch scripts that use `assert content.count(anchor) == 1` guards to fail loudly if the anchor is not unique or has changed. This is the required pattern for all changes to minified files.

```python
with open('terminal/SomeFile.js', 'r', encoding='utf-8') as f:
    content = f.read()

old = '...exact string...'
new = '...replacement...'
assert content.count(old) == 1, f'Expected 1 match, got {content.count(old)}'
content = content.replace(old, new, 1)

with open('terminal/SomeFile.js', 'w', encoding='utf-8') as f:
    f.write(content)
```

---

## How to find things in minified files

| Goal | How |
|---|---|
| Find indicator class in `Cj-wvwrR.js` | `grep -n '"type_string"'` → look at the class above |
| Find form function in `BuFyB25p.js` | Search for `"type_string"===t[0].type?N` → index N in the `p` array |
| Find the form function name | Count from `[Ft,Et,Dt,...]` — index N = Nth function name |
| Find form function in `C2M0l3R7.js` | Same — dispatch array `i`, ternary `g()` |
| Find calculation class | `grep "AnalysisXxx"` in `b2TMcBQ2.js` |
| Find the calc helper function | Look inside `_calc()` for the helper call |
| Find lang strings | `grep "form\." terminal/CBg_RnCD.js` |

---

## Fractals-specific notes

- **Standard MT5 semantics:** right bars use strict comparison (`>`/`<`), left bars use non-strict (`>=`/`<=`). Preserved in the loop implementation.
- **Default values:** MT5 default is 2 left, 2 right. Used as both the param default and the input placeholder.
- **`apply` param removed:** Fractals detect highs/lows structurally — it does not use a price-selection apply parameter.
