#!/usr/bin/env python3
"""
patch_mao_.py — Creates the mao_ (Moving Average of Oscillator_) variant.

Mirrors how macd_ was derived from macd.  mao_ adds sameTimeframeSource /
sourceTimeframe to OsMA so the user can pick the source timeframe.

Files modified:
  terminal/Cj-wvwrR.js   — settings class
  terminal/b2TMcBQ2.js   — calculation class + add() case
  terminal/YtNU6idj.js   — form component (MOsFm)
  terminal/BuFyB25p.js   — form dispatch (ut2)
  terminal/C2M0l3R7.js   — registry, metadata, picker form dispatch
"""

import sys

def patch(path, old, new, desc):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    count = content.count(old)
    assert count == 1, f'[{desc}] Expected 1 match in {path}, got {count}'
    content = content.replace(old, new, 1)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'  OK: {desc}')

# ─────────────────────────────────────────────────────────────────────────────
# 1. Cj-wvwrR.js — settings class
# ─────────────────────────────────────────────────────────────────────────────
print('Patching Cj-wvwrR.js ...')

# 1a. Add mao_ settings class after the mao class
patch(
    'terminal/Cj-wvwrR.js',
    '((q.type = "mao"), (q.category = 2), (q.digits = 6), (q.flags = 4));\nlet z = q;',
    '((q.type = "mao"), (q.category = 2), (q.digits = 6), (q.flags = 4));\nlet z = q;\nconst q_ = class s extends f {\n  constructor(e) {\n    super(\n      e,\n      { fast: 12, slow: 26, macd: 9, apply: 0, sameTimeframeSource: 1, sourceTimeframe: 0 },\n      { line: { color: 16711790, thickness: 1 } },\n      s.type,\n      s.category,\n      s.digits,\n      s.flags,\n    );\n  }\n};\n((q_.category = 2), (q_.type = "mao_"), (q_.digits = 6), (q_.flags = 4));\nlet z_ = q_;',
    'add mao_ settings class',
)

# 1b. Add to h(s) type-name switch
patch(
    'terminal/Cj-wvwrR.js',
    'case "mao":\n      return "Moving Average of Oscillator";',
    'case "mao":\n      return "Moving Average of Oscillator";\n    case "mao_":\n      return "Moving Average of Oscillator_";',
    'add mao_ to h(s) switch',
)

# 1c. Export z_ as H
patch(
    'terminal/Cj-wvwrR.js',
    '  U_ as G,\n  z as n,',
    '  U_ as G,\n  z_ as H,\n  z as n,',
    'export z_ as H',
)

# ─────────────────────────────────────────────────────────────────────────────
# 2. b2TMcBQ2.js — calculation class + add() case
# ─────────────────────────────────────────────────────────────────────────────
print('Patching b2TMcBQ2.js ...')

# 2a. Import new settings class
patch(
    'terminal/b2TMcBQ2.js',
    '  G as Xs2,\n  n as Us,',
    '  G as Xs2,\n  H as Xs2b,\n  n as Us,',
    'import H as Xs2b (mao_ settings)',
)

# 2b. Add Di2 calculation class after Di's WeakMap/WeakSet init block
DI2_CODE = r"""
// ── AnalysisMAO_ — OsMA with same-timeframe-source / MTF support ─────────
const Hi2=new Map(),ji2=new Map(),Oi2=new Map(),Pi2=new Map(),Ii2=new Map();
let ht2=new WeakMap(),rt2=new WeakSet(),ot2;
class Di2 extends ce{
  constructor(){(super(...arguments),bs(this,rt2),bs(this,ht2));}
  value(t){return this.data&&this.data[t]?[{color:this.settings.style.line.color,value:this.data[t].toFixed(this.settings.digits)}]:[];}
  _titleArguments(){const{params:t}=this.settings;return[t.fast,t.slow,t.macd,re(t.apply)];}
  _calc(t){
    super._calc();
    const{params:s}=this.settings,e=ks(this,rt2,ot2).call(this);
    let i=Hi2.get(e),a=ji2.get(e),n=Oi2.get(e),l=Pi2.get(e),h=Ii2.get(e);
    if(s.sameTimeframeSource){
      // Same-TF path: standard OsMA (mirrors Di exactly)
      const prices=this._getPrices(t||void 0);
      if(i&&a&&n&&l&&h){t&&Ei(i,a,n,l,h,prices,s.fast,s.slow,s.macd,!0);}
      else{((i=new Float64Array(prices.length)),(a=new Float64Array(prices.length)),(n=new Float64Array(prices.length)),(l=new Float64Array(prices.length)),(h=new Float64Array(prices.length)),Ei(i,a,n,l,h,prices,s.fast,s.slow,s.macd),Hi2.set(e,i),ji2.set(e,a),Oi2.set(e,n),Pi2.set(e,l),Ii2.set(e,h));const r=vs(this,ht2);(r&&(Hi2.delete(r),ji2.delete(r),Oi2.delete(r),Pi2.delete(r),Ii2.delete(r)),_s(this,ht2,e));}
    }else{
      // MTF path: compute OsMA at HT resolution, then expand to current-TF bars
      const bars=this.chart.bars,len=bars.length,tfMs=Ni2(s.sourceTimeframe)*60000;
      if(!tfMs){
        // sourceTimeframe not set — fall back to same-TF
        const prices=this._getPrices(t||void 0);
        if(i&&a&&n&&l&&h){t&&Ei(i,a,n,l,h,prices,s.fast,s.slow,s.macd,!0);}
        else{((i=new Float64Array(prices.length)),(a=new Float64Array(prices.length)),(n=new Float64Array(prices.length)),(l=new Float64Array(prices.length)),(h=new Float64Array(prices.length)),Ei(i,a,n,l,h,prices,s.fast,s.slow,s.macd),Hi2.set(e,i),ji2.set(e,a),Oi2.set(e,n),Pi2.set(e,l),Ii2.set(e,h));const r=vs(this,ht2);(r&&(Hi2.delete(r),ji2.delete(r),Oi2.delete(r),Pi2.delete(r),Ii2.delete(r)),_s(this,ht2,e));}
      }else{
        // Step 1: build HT candles
        const htOp=[],htHi=[],htLo=[],htCl=[],htBarMap=new Int32Array(len);
        let cs=-1,cO=0,cH=-Infinity,cL=Infinity,htIdx=-1;
        for(let j=0;j<len;j++){
          const bc=Math.floor(bars.time(j)/tfMs)*tfMs;
          if(bc!==cs){cs=bc;cO=bars.open(j);cH=bars.high(j);cL=bars.low(j);htIdx++;htOp.push(cO);htHi.push(cH);htLo.push(cL);htCl.push(bars.close(j));}
          else{if(bars.high(j)>cH){cH=bars.high(j);htHi[htIdx]=cH;}if(bars.low(j)<cL){cL=bars.low(j);htLo[htIdx]=cL;}htCl[htIdx]=bars.close(j);}
          htBarMap[j]=htIdx;
        }
        const htLen=htOp.length;
        // Step 2: build HT price series
        const htPrices=new Float64Array(htLen);
        for(let j=0;j<htLen;j++)htPrices[j]=Ni2b(htOp[j],htHi[j],htLo[j],htCl[j],s.apply);
        // Step 3: compute OsMA entirely on HT prices
        const htOsMA=new Float64Array(htLen),htF=new Float64Array(htLen),htS=new Float64Array(htLen),htMACD=new Float64Array(htLen),htSig=new Float64Array(htLen);
        Ei(htOsMA,htF,htS,htMACD,htSig,htPrices,s.fast,s.slow,s.macd);
        // Step 4: expand OsMA back to LT bar positions
        i=new Float64Array(len);
        for(let j=0;j<len;j++)i[j]=htOsMA[htBarMap[j]];
        Hi2.set(e,i);
        const dummy=new Float64Array(0);ji2.set(e,dummy);Oi2.set(e,dummy);Pi2.set(e,dummy);Ii2.set(e,dummy);
        const r=vs(this,ht2);(r&&(Hi2.delete(r),ji2.delete(r),Oi2.delete(r),Pi2.delete(r),Ii2.delete(r)),_s(this,ht2,e));
      }
    }
    ((this.data=i),this._calcExtremum());
  }
  _drawGraph(t){const{data:s,settings:e}=this,{style:i}=e;s&&this.drawHistogram(t,s,i.line);}
}
((ht2=new WeakMap()),(rt2=new WeakSet()),(ot2=function(){const{params:t}=this.settings;return[t.fast,t.slow,t.macd,t.sameTimeframeSource,t.sourceTimeframe,this.baseHash()].join("-");}));
"""

patch(
    'terminal/b2TMcBQ2.js',
    '((ht = new WeakMap()),\n  (rt = new WeakSet()),\n  (ot = function () {\n    const { params: t } = this.settings;\n    return [t.fast, t.slow, t.macd, this.b',
    DI2_CODE + '((ht = new WeakMap()),\n  (rt = new WeakSet()),\n  (ot = function () {\n    const { params: t } = this.settings;\n    return [t.fast, t.slow, t.macd, this.b',
    'insert Di2 class before Di WeakMap init block',
)

# 2c. Add mao_ case in add() switch
patch(
    'terminal/b2TMcBQ2.js',
    '      case "mao":\n        (([h, r] = this.getOptions(o.AnalysisMAOSettings.flags)),\n          (l = new o.AnalysisMAOSettings({ ...i, index: r })),\n          (n = new o.AnalysisMAO(h, 5e3, l)));\n        break;',
    '      case "mao":\n        (([h, r] = this.getOptions(o.AnalysisMAOSettings.flags)),\n          (l = new o.AnalysisMAOSettings({ ...i, index: r })),\n          (n = new o.AnalysisMAO(h, 5e3, l)));\n        break;\n      case "mao_":\n        (([h, r] = this.getOptions(o.AnalysisMAO_Settings.flags)),\n          (l = new o.AnalysisMAO_Settings({ ...i, index: r })),\n          (n = new o.AnalysisMAO_(h, 5e3, l)));\n        break;',
    'add mao_ case in add() switch',
)

# 2d. Add to frozen module object
patch(
    'terminal/b2TMcBQ2.js',
    '      AnalysisMAO: Di,\n      AnalysisMAOSettings: Us,',
    '      AnalysisMAO: Di,\n      AnalysisMAOSettings: Us,\n      AnalysisMAO_: Di2,\n      AnalysisMAO_Settings: Xs2b,',
    'add mao_ to frozen module object',
)

# 2e. Add to named exports
patch(
    'terminal/b2TMcBQ2.js',
    '  Di as AnalysisMAO,\n  Us as AnalysisMAOSettings,',
    '  Di as AnalysisMAO,\n  Us as AnalysisMAOSettings,\n  Di2 as AnalysisMAO_,\n  Xs2b as AnalysisMAO_Settings,',
    'add mao_ to named exports',
)

# ─────────────────────────────────────────────────────────────────────────────
# 3. YtNU6idj.js — form component (MOsFm)
# ─────────────────────────────────────────────────────────────────────────────
print('Patching YtNU6idj.js ...')

# New form code — identical to Zs/Ys/Xs/Js/Gs but with MOsXxx names.
# MOsWt = style slot (like Gs, handlers at t[6]/t[7] = color/thickness)
# MOsEs = inner render (like Js, references MOsWt instead of Gs)
# MOsRs = outer render (like Xs, references MOsEs)
# MOsOs = logic (like Ys)
# MOsFm = class (like Zs)
FORM_CODE = (
    'function MOsWt(t){let e,s,n,i;function a(e){t[6](e)}function c(e){t[7](e)}'
    'let r={label:window.tr(window.lang.chart.indicators.form.line.style)};'
    'return void 0!==t[1].style.line.color&&(r.color=t[1].style.line.color),'
    'void 0!==t[1].style.line.thickness&&(r.thickness=t[1].style.line.thickness),'
    'e=new xt({props:r}),q.push((()=>x(e,"color",a))),q.push((()=>x(e,"thickness",c))),'
    '{c(){_(e.$$.fragment)},m(t,s){k(e,t,s),i=!0},'
    'p(t,o){const l={};!s&&2&o&&(s=!0,l.color=t[1].style.line.color,j((()=>s=!1))),'
    '!n&&2&o&&(n=!0,l.thickness=t[1].style.line.thickness,j((()=>n=!1))),e.$set(l)},'
    'i(t){i||(l(e.$$.fragment,t),i=!0)},o(t){o(e.$$.fragment,t),i=!1},d(t){b(e,t)}}}'
    'function MOsEs(t){let e,s,a,c,r,$,u,p,d,f;'
    'function m(e){t[2](e)}function g(e){t[3](e)}function y(e){t[4](e)}'
    'let w={};function v(e){t[5](e)}'
    'void 0!==t[1].params.fast&&(w.fast=t[1].params.fast),'
    'void 0!==t[1].params.slow&&(w.slow=t[1].params.slow),'
    'void 0!==t[1].params.macd&&(w.macd=t[1].params.macd),'
    'e=new St({props:w}),q.push((()=>x(e,"fast",m))),q.push((()=>x(e,"slow",g))),q.push((()=>x(e,"macd",y)));'
    'let D={};return void 0!==t[1].params.apply&&(D.value=t[1].params.apply),'
    '$=new Q({props:D}),q.push((()=>x($,"value",v))),'
    'd=new R({props:{label:window.tr(window.lang.chart.indicators.form.line.style),'
    '$$slots:{default:[MOsWt]},$$scope:{ctx:t}}}),'
    '{c(){_(e.$$.fragment),r=h(),_($.$$.fragment),p=h(),_(d.$$.fragment)},'
    'm(t,s){k(e,t,s),i(t,r,s),k($,t,s),i(t,p,s),k(d,t,s),f=!0},'
    'p(t,n){const o={};'
    '!s&&2&n&&(s=!0,o.fast=t[1].params.fast,j((()=>s=!1))),'
    '!a&&2&n&&(a=!0,o.slow=t[1].params.slow,j((()=>a=!1))),'
    '!c&&2&n&&(c=!0,o.macd=t[1].params.macd,j((()=>c=!1))),e.$set(o);'
    'const l={};!u&&2&n&&(u=!0,l.value=t[1].params.apply,j((()=>u=!1))),$.$set(l);'
    'const i={};258&n&&(i.$$scope={dirty:n,ctx:t}),d.$set(i)},'
    'i(t){f||(l(e.$$.fragment,t),l($.$$.fragment,t),l(d.$$.fragment,t),f=!0)},'
    'o(t){o(e.$$.fragment,t),o($.$$.fragment,t),o(d.$$.fragment,t),f=!1},'
    'd(t){t&&(n(r),n(p)),b(e,t),b($,t),b(d,t)}}}'
    'function MOsRs(t){let e,s;return e=new yt({props:{$$slots:{default:[MOsEs]},$$scope:{ctx:t}}}),'
    '{c(){_(e.$$.fragment)},m(t,n){k(e,t,n),s=!0},'
    'p(t,[s]){const n={};258&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},'
    'i(t){s||(l(e.$$.fragment,t),s=!0)},o(t){o(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}'
    'function MOsOs(t,e,s){let n,o2=M,l2=()=>(o2(),o2=W(i,(t=>s(1,n=t))),i);'
    't.$$.on_destroy.push((()=>o2()));'
    'let{settings:i}=e;return l2(),'
    't.$$set=t=>{"settings"in t&&l2(s(0,i=t.settings))},'
    '[i,n,'
    'function(e){t.$$.not_equal(n.params.fast,e)&&(n.params.fast=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.params.slow,e)&&(n.params.slow=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.params.macd,e)&&(n.params.macd=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.params.apply,e)&&(n.params.apply=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.line.color,e)&&(n.style.line.color=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.line.thickness,e)&&(n.style.line.thickness=e,i.set(n)})]}'
    'class MOsFm extends t{constructor(t){super(),e(this,t,MOsOs,MOsRs,s,{settings:0})}}'
)

with open('terminal/YtNU6idj.js', 'r', encoding='utf-8') as f:
    ytnu = f.read()

export_idx = ytnu.rfind('export{')
assert export_idx >= 0, 'export{ block not found in YtNU6idj.js'
ytnu = ytnu[:export_idx] + FORM_CODE + ytnu[export_idx:]

# Add MOsFm to export block
OLD_EXPORT = 'export{Ln as A,Kn as B,Ls as C,Ps as D,In as E,Vs as F,Pe as G,Gn as I,Qn as M,as as O,io as P,rn as R,wn as S,qn as T,ne as V,Mn as W,ys as a,_s as b,Us as c,Fs as d,nn as e,Zs as f,dn as g,ds as h,Ye as i,ss as j,be as k,me as l,De as m,Te as n,Oe as o,ne2 as p,Fs2 as q,FrFm as r,EpFm as s};'
NEW_EXPORT = 'export{Ln as A,Kn as B,Ls as C,Ps as D,In as E,Vs as F,Pe as G,Gn as I,Qn as M,as as O,io as P,rn as R,wn as S,qn as T,ne as V,Mn as W,ys as a,_s as b,Us as c,Fs as d,nn as e,Zs as f,dn as g,ds as h,Ye as i,ss as j,be as k,me as l,De as m,Te as n,Oe as o,ne2 as p,Fs2 as q,FrFm as r,EpFm as s,MOsFm as t2};'

assert ytnu.count(OLD_EXPORT) == 1, f'export block mismatch in YtNU6idj.js'
ytnu = ytnu.replace(OLD_EXPORT, NEW_EXPORT, 1)

with open('terminal/YtNU6idj.js', 'w', encoding='utf-8') as f:
    f.write(ytnu)
print('  OK: insert MOsFm form + export as t2')

# ─────────────────────────────────────────────────────────────────────────────
# 4. BuFyB25p.js — import + ut2 form dispatch + dispatch array + ternary
# ─────────────────────────────────────────────────────────────────────────────
print('Patching BuFyB25p.js ...')

# 4a. Add import of MOsFm (t2) from YtNU6idj.js
patch(
    'terminal/BuFyB25p.js',
    ',p as ne2,q as Fs2,r as FrFm,s as EpFm}from"./YtNU6idj.js"',
    ',p as ne2,q as Fs2,r as FrFm,s as EpFm,t2 as MOsFm}from"./YtNU6idj.js"',
    'import MOsFm (t2) in BuFyB25p.js',
)

# 4b. Add ut2 function after ut  — ut ends with "d(t){t&&e(s),o(n,t),o(r,t)}}"
# We need to find the exact end of ut. The ut function body ends at the same point as Mt/Mt2.
# Use the full ut function text as anchor.
UT2_CODE = (
    'function ut2(t){let n,s,r,g;return n=new MOsFm({props:{settings:t[0]}}),r=new ne2({props:{analysisManager:t[1],settings:t[0]}}),'
    '{c(){p(n.$$.fragment),s=c(),p(r.$$.fragment)},m(t,e){f(n,t,e),i(t,s,e),f(r,t,e),g=!0},'
    'p(t,s){const e={};1&s&&(e.settings=t[0]),n.$set(e);const a={};2&s&&(a.analysisManager=t[1]),1&s&&(a.settings=t[0]),r.$set(a)},'
    'i(t){g||($(n.$$.fragment,t),$(r.$$.fragment,t),g=!0)},'
    'o(t){a(n.$$.fragment,t),a(r.$$.fragment,t),g=!1},'
    'd(t){t&&e(s),o(n,t),o(r,t)}}}'
)

patch(
    'terminal/BuFyB25p.js',
    'function ut(t){let n,s,r,g;return n=new V({props:{settings:t[0]}}),r=new b({props:{analysisManager:t[1],settings:t[0]}}),',
    UT2_CODE + 'function ut(t){let n,s,r,g;return n=new V({props:{settings:t[0]}}),r=new b({props:{analysisManager:t[1],settings:t[0]}}),',
    'insert ut2 before ut in BuFyB25p.js',
)

# 4c. Add ut2 to dispatch array (insert after Mt2)
patch(
    'terminal/BuFyB25p.js',
    'const p=[Ft,Et,Dt,zt,xt,St,kt,ht,It,vt,bt,jt,wt,Mt,dt,ut,yt,lt,ct,pt,ft,ot,mt,it,gt,rt,$t,at,et,st,nt,tt,Mt2,Ep2t]',
    'const p=[Ft,Et,Dt,zt,xt,St,kt,ht,It,vt,bt,jt,wt,Mt,dt,ut,yt,lt,ct,pt,ft,ot,mt,it,gt,rt,$t,at,et,st,nt,tt,Mt2,Ep2t,ut2]',
    'add ut2 to dispatch array',
)

# 4d. Add mao_ to type ternary
patch(
    'terminal/BuFyB25p.js',
    '"engulfing"===t[0].type?33:-1}',
    '"engulfing"===t[0].type?33:"mao_"===t[0].type?34:-1}',
    'add mao_ to type ternary in BuFyB25p.js',
)

# ─────────────────────────────────────────────────────────────────────────────
# 5. C2M0l3R7.js — registry, metadata, picker form dispatch
# ─────────────────────────────────────────────────────────────────────────────
print('Patching C2M0l3R7.js ...')

# 5a. Import MOsFm (as t2) from YtNU6idj.js
patch(
    'terminal/C2M0l3R7.js',
    '  p as ne2c,\n  q as Fs2c,\n  r as FrFmc,\n  s as EpFmc\n} from "./YtNU6idj.js";',
    '  p as ne2c,\n  q as Fs2c,\n  r as FrFmc,\n  s as EpFmc,\n  t2 as MOsFmc\n} from "./YtNU6idj.js";',
    'import MOsFmc in C2M0l3R7.js',
)

# 5b. Add "mao_" to yt type registry array (after "macd_")
patch(
    'terminal/C2M0l3R7.js',
    '    "macd_",\n    "mao",',
    '    "macd_",\n    "mao_",\n    "mao",',
    'add mao_ to yt type registry',
)

# 5c. Add metadata entry (after macd_ entry)
patch(
    'terminal/C2M0l3R7.js',
    '  ["mao", 2, "OsMA", "Moving Average of Oscillator"],',
    '  ["mao_", 2, "OsMA_", "Moving Average of Oscillator_"],\n  ["mao", 2, "OsMA", "Moving Average of Oscillator"],',
    'add mao_ metadata entry',
)

# 5d. Add Xt2 picker form function (before Xt)
XT2_CODE = (
    'function Xt2(t){let n,e,s,r;return('
    'n=new MOsFmc({props:{settings:t[0]}}),'
    's=new ne2c({props:{analysisManager:t[1],settings:t[0]}}),'
    '{c(){(A(n.$$.fragment),(e=u()),A(s.$$.fragment))},'
    'm(t,a){(x(n,t,a),$(t,e,a),x(s,t,a),(r=!0))},'
    'p(t,e){const a={};(1&e&&(a.settings=t[0]),n.$set(a));const r={};(2&e&&(r.analysisManager=t[1]),1&e&&(r.settings=t[0]),s.$set(r))},'
    'i(t){r||(h(n.$$.fragment,t),h(s.$$.fragment,t),(r=!0))},'
    'o(t){(M(n.$$.fragment,t),M(s.$$.fragment,t),(r=!1))},'
    'd(t){(t&&c(e),v(n,t),v(s,t))}})'
    '}'
)

patch(
    'terminal/C2M0l3R7.js',
    'function Xt(t) {',
    XT2_CODE + '\nfunction Xt(t) {',
    'insert Xt2 picker form before Xt',
)

# 5e. Add Xt2 to picker dispatch array i (after Gt2, before Ep2tc)
patch(
    'terminal/C2M0l3R7.js',
    '      Gt2,\n      Ep2tc,\n    ],',
    '      Gt2,\n      Ep2tc,\n      Xt2,\n    ],',
    'add Xt2 to picker dispatch array',
)

# 5f. Add mao_ to picker type ternary (after engulfing)
patch(
    'terminal/C2M0l3R7.js',
    ': "engulfing" === t[0].type\n                                                                  ? 32\n                                                                  : -1;',
    ': "engulfing" === t[0].type\n                                                                  ? 32\n                                                                  : "mao_" === t[0].type\n                                                                  ? 33\n                                                                  : -1;',
    'add mao_ to picker ternary',
)

print()
print('All patches applied successfully.')
