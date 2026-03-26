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
AnalysisMACD_: Wi2,
AnalysisMACD_Settings: Xs2
```

> **Note:** `AnalysisMACD_` maps to `Wi2`, not `Wi`. `Wi2` is a separate class that extends `ce` directly (not `Wi`) to avoid private field conflicts. `Wi` remains the original MACD implementation.

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
- `Yt2s` only shows TFs after the current TF in display order (`ee.slice(curIdx + 1)`)

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
- **`a.set(n)` alone does NOT trigger indicator recalculation.** To force the chart to redraw and call `_calc()` on all indicators, you must also fire: `i.trigger("208", a.uid)`. Event "208" on the analysisManager propagates → `chart.refresh()` → event "119" → all indicators call `draw()` → `_calc()`. This is required whenever settings that affect the calculation (e.g. `sourceTimeframe`, `sameTimeframeSource`) are changed from the form.

---

## Additional: C2M0l3R7.js (Indicator Picker Dialog)

C2M0l3R7.js is the "Add indicator" picker dialog. It has its **own** form dispatch (`rn` render + `$n` logic for `class on`) separate from BuFyB25p.js. This shows a settings preview in the right panel when you hover/select an indicator type before clicking "Add".

**Key facts:**
- `class on` uses `$n`/`rn` with `{ settings: 0, analysisManager: 1 }` props
- `rn` has a dispatch array `i` and a `g()` ternary mapping type → index (34 entries after `mao_`)
- To add a new indicator to the picker preview, add its form function to both `i` and `g()`
- Imports from `YtNU6idj.js` grow as new form components are added (see export alias sequence)

**To add MACD_-style picker form:**
```javascript
// 1. Add imports
import { ..., p as ne2c, q as Fs2c } from "./YtNU6idj.js";

// 2. Add form function (copy of Gt pattern)
function Gt2(t) { /* same structure as Gt, use Fs2c + ne2c */ }

// 3. In rn() dispatch array i: add Gt2 at end (index 31)
const i = [..., Ct, Gt2]

// 4. In g() ternary: add case before -1
: "macd_" === t[0].type ? 31 : -1
```

**Picker flow (xn logic function):**
1. User selects type → `l.analysis.add(type)` creates temp indicator, stores uid in `w`
2. `$$.update` fetches `l.analysis.get(w).settings` into `o`, subscribes via `S(o, ...)` into `a`
3. `hn(t)` shown when `t[3] && t[8]` (settings object + subscribed value both truthy)
4. "Add" button: dispatches `"add"` event with `o` → parent `Gp` calls `indicatorsController.save(o, symbol)` and hides panel
5. Close: `y()` removes the temp indicator via `l.analysis.remove(w)`

---

## Additional: Multi-Timeframe (MTF) Indicator Implementation

**Architecture:** `this.chart.bars` is the only bars source in `b2TMcBQ2.js`. There is no built-in MTF data API. MTF is implemented by **re-aggregating current bars** into higher-TF candles.

**Key facts:**
- `bars.time(i)` → timestamp in **milliseconds**
- `bars.open(i)`, `bars.high(i)`, `bars.low(i)`, `bars.close(i)` → OHLC
- `bars.period` → current chart period in minutes
- `bars.symbol`, `bars.length` — also available
- `ge(bars, i, apply)` → apply-based price from a bars object at index `i`
- `baseHash()` → `[type, symbol, period, apply, length, firstTime, lastTime].join("-")`
- Private fields pattern: `bs(this, nt2)` declares, `vs(this, it2)` reads, `_s(this, at2, val)` writes
- `ks(this, nt2, lt2).call(this)` — calls private method `lt2` on instance

**Correct MTF semantics:** All LT bars within one HT candle must show the **exact same** HT MACD value. MTF MACD is computed entirely at HT candle resolution, then expanded back to LT bar positions. Do **not** compute MACD at LT resolution using HT-derived prices — that gives slightly different values per LT bar and is incorrect.

**Wi2 implementation pattern (new indicator class extending `ce`):**
```javascript
// bit → minutes mapping
function Ni2(b){const m={1:1,2:5,4:15,8:30,16:60,32:240,64:1440,128:10080,256:43200};return m[b]||0;}

// apply-based price from raw OHLC values (mirrors ge() but takes values, not a bars object)
function Ni2b(o,h,l,c,a){switch(a){case 0:return c;case 1:return o;case 2:return h;case 3:return l;case 4:return(h+l)/2;case 5:return(h+l+c)/3;case 6:return(h+l+c+c)/4;default:return c;}}

// Cache maps (new per-class to avoid collision with Wi)
const ki2=new Map(),xi2=new Map(),Fi2=new Map(),Si2=new Map();
let it2=new WeakMap(),at2=new WeakMap(),nt2=new WeakSet(),lt2;

class Wi2 extends ce {
  constructor(){(super(...arguments),bs(this,nt2),bs(this,it2),bs(this,at2));}
  _calc(t){
    super._calc();
    const{params:s}=this.settings, e=ks(this,nt2,lt2).call(this);
    let i=ki2.get(e),a=xi2.get(e),n=Fi2.get(e),l=Si2.get(e);

    if(s.sameTimeframeSource){
      // Same-TF path: standard MACD, mirrors Wi exactly (incremental update supported)
      const prices=this._getPrices(t||void 0);
      if(i&&a&&n&&l){t&&Ti(i,a,n,l,prices,s.fast,s.slow,s.macd,!0);}
      else{/* allocate + full compute + cache */}
    }else{
      // MTF path: compress bars → compute MACD at HT resolution → expand back to LT positions
      const bars=this.chart.bars,len=bars.length,tfMs=Ni2(s.sourceTimeframe)*60000;
      if(!tfMs){ /* fall back to same-TF */ }
      else{
        // Step 1: build HT candles; record htBarMap[ltBarIdx] = htCandleIdx
        const htOp=[],htHi=[],htLo=[],htCl=[],htBarMap=new Int32Array(len);
        let cs=-1,cO=0,cH=-Infinity,cL=Infinity,htIdx=-1;
        for(let j=0;j<len;j++){
          const bc=Math.floor(bars.time(j)/tfMs)*tfMs;  // bars.time() is milliseconds
          if(bc!==cs){cs=bc;cO=bars.open(j);cH=bars.high(j);cL=bars.low(j);htIdx++;htOp.push(cO);htHi.push(cH);htLo.push(cL);htCl.push(bars.close(j));}
          else{/* accumulate running OHLC for current candle */}
          htBarMap[j]=htIdx;
        }
        // Step 2: build HT price series (one apply-price per HT candle)
        const htLen=htOp.length, htPrices=new Float64Array(htLen);
        for(let j=0;j<htLen;j++)htPrices[j]=Ni2b(htOp[j],htHi[j],htLo[j],htCl[j],s.apply);

        // Step 3: compute MACD entirely on the compressed HT price series
        const htMACD=new Float64Array(htLen),htSig=new Float64Array(htLen),
              htF=new Float64Array(htLen),htS=new Float64Array(htLen);
        Ti(htMACD,htSig,htF,htS,htPrices,s.fast,s.slow,s.macd);

        // Step 4: expand — every LT bar gets the HT candle value it belongs to
        i=new Float64Array(len);a=new Float64Array(len);
        for(let j=0;j<len;j++){const hi=htBarMap[j];i[j]=htMACD[hi];a[j]=htSig[hi];}
        ki2.set(e,i);xi2.set(e,a);
      }
    }
    ((this.data=i),_s(this,it2,a),this._calcExtremum(i,a));
  }
}
// Init private fields AFTER class definition (lt2 hash must include sameTimeframeSource + sourceTimeframe):
((it2=new WeakMap()),(at2=new WeakMap()),(nt2=new WeakSet()),
 (lt2=function(){const{params:t}=this.settings;return[t.fast,t.slow,t.macd,t.sameTimeframeSource,t.sourceTimeframe,this.baseHash()].join("-");}));
```

**Important:**
- Private WeakMap/WeakSet fields must be declared as `let` vars **before** the class constructor runs, then assigned initial values in a `((...))` block **after** the class definition.
- `baseHash()` returns `[type, symbol, period, apply, length, firstTime, lastTime].join("-")`. Include `sameTimeframeSource` and `sourceTimeframe` in `lt2`'s hash to invalidate the cache whenever those params change.
- `C4q1ypxK.js` is the file that lazily imports `b2TMcBQ2.js` via `import("./b2TMcBQ2.js")`.

---

## Additional: Adding an MTF variant for a single-output indicator (`mao_`)

`mao_` (Moving Average of Oscillator_) was added following exactly the same pattern as `macd_`, but the indicator produces **one** output array instead of two (OsMA only — no signal line rendered). This section documents the differences from the `macd_` pattern.

### Key differences from `macd_`

| Aspect | `macd_` (`Wi2`) | `mao_` (`Di2`) |
|---|---|---|
| Outputs | `data` (histogram) + `signal` (line) | `data` (histogram) only |
| Calc function | `Ti(macd, sig, fastEMA, slowEMA, prices, …)` — 4 output arrays | `Ei(osma, fastEMA, slowEMA, macd, sig, prices, …)` — 5 output arrays |
| MTF expansion | Expand both `macd` and `sig` back to LT | Expand `osma` (index 0) only |
| Private fields | `it2` (WeakMap sig) + `at2` (WeakMap prevHash) + `nt2` (WeakSet) | `ht2` (WeakMap prevHash) + `rt2` (WeakSet) — 2 fields, no second WeakMap |
| Style | `line` + `signal` (two `xt` rows, both with `visible`) | `line` only (one `xt` row, **no `visible`** — color + thickness only) |
| Settings export alias | `G` in `Cj-wvwrR.js` | `H` |
| Form export alias | `Fs2 as q` in `YtNU6idj.js` | `MOsFm as t2` |

### `Ei` function signature

```javascript
// Ei(osma, fastEMA, slowEMA, macd, signal, prices, fastPeriod, slowPeriod, macdPeriod, incremental)
Ei(t, s, e, i, a, n, l, h, r, o = !1)
// t = OsMA output (the only value rendered)
// s,e,i,a = intermediates (fastEMA, slowEMA, macdLine, signalLine)
// n = price series input
```

In the MTF path, only `t` (OsMA) is expanded to LT resolution. The intermediates (`s,e,i,a`) are computed at HT resolution and discarded after use.

### `Di2` private fields pattern

`Di2` needs only 2 private fields (same as the original `Di`):
```javascript
let ht2=new WeakMap(),   // stores previous cache key (for cleanup)
    rt2=new WeakSet(),   // WeakSet used for private method dispatch
    ot2;                 // hash function (set after class definition)

class Di2 extends ce {
  constructor(){(super(...arguments),bs(this,rt2),bs(this,ht2));}
  // ...
}
((ht2=new WeakMap()),(rt2=new WeakSet()),(ot2=function(){
  const{params:t}=this.settings;
  return[t.fast,t.slow,t.macd,t.sameTimeframeSource,t.sourceTimeframe,this.baseHash()].join("-");
}));
```

> The hash must include `sameTimeframeSource` and `sourceTimeframe` or the cache won't invalidate when the user changes the source TF.

### Form component: single line style (no `visible`)

The original `mao` (`Zs`) form uses `xt` with only `color` and `thickness` — there is no `visible` toggle. The `mao_` form (`MOsFm`) is an exact copy. The slot function (`MOsWt`) wires handlers at state indices `[6]` (color) and `[7]` (thickness), matching the original `Gs` slot pattern.

Do **not** add a `visible` prop to the `xt` component here — the original `mao` style object is `{ line: { color, thickness } }` with no `visible` field, so trying to bind it would produce `undefined` and break two-way binding.

### Export alias sequence in `YtNU6idj.js`

After adding `EpFm as s` (engulfing), the next free single-letter alias was `t`. However `t` is the Svelte base class alias at module scope — safe to use as an **export** alias (it's a different namespace), but to avoid confusion, `t2` was chosen instead.

Current tail of the export block:
```
...,ne2 as p,Fs2 as q,FrFm as r,EpFm as s,MOsFm as t2
```

### Dispatch index bookkeeping

After adding `mao_`, the dispatch indices are:

**`BuFyB25p.js` `p` array / ternary:**
- index 32: `Mt2` → `macd_`
- index 33: `Ep2t` → `engulfing`
- index 34: `ut2` → `mao_` ← new

**`C2M0l3R7.js` picker `i` array / `g()` ternary:**
- index 31: `Gt2` → `macd_`
- index 32: `Ep2tc` → `engulfing`
- index 33: `Xt2` → `mao_` ← new

### Critical pitfall: `transition_out` vs `destroy_component` in picker form `o(t)` method

When writing a new picker form function (e.g. `Xt2`), the `o(t)` (outro) method **must** call `M(n.$$.fragment, t)` — where `M` is the alias for `transition_out` (exported as `t` from `CHj1SSsY.js`).

**Wrong (causes runtime crash):**
```javascript
o(t){(k(n.$$.fragment,t),k(s.$$.fragment,t),(r=!1))}
```

**Correct (matches working `Gt2`):**
```javascript
o(t){(M(n.$$.fragment,t),M(s.$$.fragment,t),(r=!1))}
```

**Why it crashes:** In `C2M0l3R7.js`, `k` is imported as `r` from `CHj1SSsY.js` — that alias is `destroy_component`, not `transition_out`. Calling `destroy_component(n.$$.fragment, t)` passes the fragment object where a component is expected; `destroy_component` internally tries to read `argument.$$` which is `undefined` on a fragment, throwing:

```
TypeError: Cannot read properties of undefined (reading 'fragment')
    at le (CHj1SSsY.js:896:14)
    at Object.o (C2M0l3R7.js:826:417)
```

The `d(t)` (destroy) method uses `v(n,t)` to call `destroy_component` correctly (passing the component, not its fragment). The function aliases `k` and `M` look similar but are entirely different Svelte helpers — always copy `o(t)` verbatim from a working picker function like `Gt2`.

---

## Known pitfall: font paths in `CezRPkQL.js`

`CezRPkQL.js` (~line 18976) defines the bitmap font paths used by the chart canvas renderer:

```javascript
const Fp = {
  axis:   Wp ? "/terminal/font/axis2x.fnt"   : "/terminal/font/axis.fnt",
  axisb:  Wp ? "/terminal/font/axisb2x.fnt"  : "/terminal/font/axisb.fnt",
  values: Wp ? "/terminal/font/values2x.fnt" : "/terminal/font/values.fnt",
};
```

`Wp` is `true` on hi-DPI (retina) screens — it selects the `2x` atlas; otherwise the standard atlas is used.

**The committed source must always use `/terminal/font/` paths.** `fonts://` is a build-time virtual scheme used only inside the generated single-file artifact. `build.js` now rewrites the bundled output to `fonts://` (and inlines polyfills for fetch + Image.src), but the source file in git and on the dev server must stay on `/terminal/font/`.

**Build side-effect:** `build.js` may still modify `CRNNNCwz.js` in-place to disable the PIXI worker image path. Restore it after a build with:
```
git checkout terminal/CRNNNCwz.js
```
Committing a `fonts://`-patched `CezRPkQL.js` causes the "URL scheme fonts is not supported" error on the dev server.
