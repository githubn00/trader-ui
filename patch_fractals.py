"""
Patch: Add left/right bar inputs to the Fractals indicator form.

Files modified:
  1. terminal/Cj-wvwrR.js  – add left:2, right:2 to Fractals params
  2. terminal/YtNU6idj.js  – add FrFm form component (left/right inputs + style)
  3. terminal/BuFyB25p.js  – import FrFm, wire into fractals dispatch slot
  4. terminal/C2M0l3R7.js  – import FrFmc, wire into picker fractals slot
"""

import sys

# ---------------------------------------------------------------------------
# 1. Cj-wvwrR.js — add left/right params to the Fractals settings class
# ---------------------------------------------------------------------------
with open('terminal/Cj-wvwrR.js', 'r', encoding='utf-8') as f:
    cj = f.read()

old_frac_params = '{ apply: 0 },\n      { line: { color: 8421504, thickness: 1 } },'
new_frac_params = '{ left: 2, right: 2 },\n      { line: { color: 8421504, thickness: 1 } },'

assert cj.count(old_frac_params) == 1, f'Expected 1 match for Fractals params, got {cj.count(old_frac_params)}'
cj = cj.replace(old_frac_params, new_frac_params, 1)

with open('terminal/Cj-wvwrR.js', 'w', encoding='utf-8') as f:
    f.write(cj)
print('1. Cj-wvwrR.js patched.')


# ---------------------------------------------------------------------------
# 2. YtNU6idj.js — add FrFm component before the export block
# ---------------------------------------------------------------------------
with open('terminal/YtNU6idj.js', 'r', encoding='utf-8') as f:
    yt = f.read()

frfm_code = r'''
// ── Fractals params form (FrFm) ──────────────────────────────────────────
// Slot function: Left bars number input
// ctx: [0]=store, [1]=value, [2]=onLeft, [3]=onRight, [4]=onVisible, [5]=onColor, [6]=onThickness
function FrWt(t){let e,s,n;function i(e){t[2](e)}let a={type:"number",min:1,placeholder:"2"};return void 0!==t[1].params.left&&(a.value=t[1].params.left),e=new K({props:a}),q.push((()=>x(e,"value",i))),{c(){_(e.$$.fragment)},m(t,s){k(e,t,s),n=!0},p(t,n){const o={};!s&&2&n&&(s=!0,o.value=t[1].params.left,j((()=>s=!1))),e.$set(o)},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){o(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}
// Slot function: Right bars number input
function FrZt(t){let e,s,n;function i(e){t[3](e)}let a={type:"number",min:1,placeholder:"2"};return void 0!==t[1].params.right&&(a.value=t[1].params.right),e=new K({props:a}),q.push((()=>x(e,"value",i))),{c(){_(e.$$.fragment)},m(t,s){k(e,t,s),n=!0},p(t,n){const o={};!s&&2&n&&(s=!0,o.value=t[1].params.right,j((()=>s=!1))),e.$set(o)},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){o(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}
// Inner render: two labeled fields + style-line component
function FrEs(t){let e,s,a,c,r,u,$,V,d;e=new R({props:{label:"Left bars",$$slots:{default:[FrWt]},$$scope:{ctx:t}}}),s=new R({props:{label:"Right bars",$$slots:{default:[FrZt]},$$scope:{ctx:t}}});let A2={label:window.tr(window.lang.chart.indicators.form.style.title)};function B2(e){t[4](e)}function C2(e){t[5](e)}function D2(e){t[6](e)}void 0!==t[1].style.line.visible&&(A2.visible=t[1].style.line.visible),void 0!==t[1].style.line.color&&(A2.color=t[1].style.line.color),void 0!==t[1].style.line.thickness&&(A2.thickness=t[1].style.line.thickness),a=new xt({props:A2}),q.push((()=>x(a,"visible",B2))),q.push((()=>x(a,"color",C2))),q.push((()=>x(a,"thickness",D2)));return{c(){_(e.$$.fragment),c=h(),_(s.$$.fragment),r=h(),_(a.$$.fragment)},m(t,n){k(e,t,n),i(t,c,n),k(s,t,n),i(t,r,n),k(a,t,n),d=!0},p(t,n){const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const l2={};2&n&&(l2.$$scope={dirty:n,ctx:t}),s.$set(l2);const i2={};!u&&2&n&&(u=!0,i2.visible=t[1].style.line.visible,j((()=>u=!1))),!$&&2&n&&($=!0,i2.color=t[1].style.line.color,j((()=>$=!1))),!V&&2&n&&(V=!0,i2.thickness=t[1].style.line.thickness,j((()=>V=!1))),a.$set(i2)},i(t){d||(l(e.$$.fragment,t),l(s.$$.fragment,t),l(a.$$.fragment,t),d=!0)},o(t){o(e.$$.fragment,t),o(s.$$.fragment,t),o(a.$$.fragment,t),d=!1},d(t){t&&(n(c),n(r)),b(e,t),b(s,t),b(a,t)}}}
// Outer render: yt layout wrapper
function FrRs(t){let e,s;return e=new yt({props:{$$slots:{default:[FrEs]},$$scope:{ctx:t}}}),{c(){_(e.$$.fragment)},m(t,n){k(e,t,n),s=!0},p(t,[s]){const n={};2&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(l(e.$$.fragment,t),s=!0)},o(t){o(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}
// Logic: subscribe to settings store, expose param + style handlers
function FrOs(t,e,s){let n,o2=M,l2=()=>(o2(),o2=W(i,(t=>s(1,n=t))),i);t.$$.on_destroy.push((()=>o2()));let{settings:i}=e;return l2(),t.$$set=t=>{"settings"in t&&l2(s(0,i=t.settings))},[i,n,function(e){t.$$.not_equal(n.params.left,e)&&(n.params.left=e,i.set(n))},function(e){t.$$.not_equal(n.params.right,e)&&(n.params.right=e,i.set(n))},function(e){t.$$.not_equal(n.style.line.visible,e)&&(n.style.line.visible=e,i.set(n))},function(e){t.$$.not_equal(n.style.line.color,e)&&(n.style.line.color=e,i.set(n))},function(e){t.$$.not_equal(n.style.line.thickness,e)&&(n.style.line.thickness=e,i.set(n))}]}
class FrFm extends t{constructor(t){super(),e(this,t,FrOs,FrRs,s,{settings:0})}}
// ── end FrFm ─────────────────────────────────────────────────────────────
'''

export_idx = yt.rfind('export{')
assert export_idx != -1, 'Could not find export{ block'
yt = yt[:export_idx] + frfm_code + yt[export_idx:]

# Add FrFm to exports
old_export = 'export{Ln as A,Kn as B,Ls as C,Ps as D,In as E,Vs as F,Pe as G,Gn as I,Qn as M,as as O,io as P,rn as R,wn as S,qn as T,ne as V,Mn as W,ys as a,_s as b,Us as c,Fs as d,nn as e,Zs as f,dn as g,ds as h,Ye as i,ss as j,be as k,me as l,De as m,Te as n,Oe as o,ne2 as p,Fs2 as q};'
new_export = 'export{Ln as A,Kn as B,Ls as C,Ps as D,In as E,Vs as F,Pe as G,Gn as I,Qn as M,as as O,io as P,rn as R,wn as S,qn as T,ne as V,Mn as W,ys as a,_s as b,Us as c,Fs as d,nn as e,Zs as f,dn as g,ds as h,Ye as i,ss as j,be as k,me as l,De as m,Te as n,Oe as o,ne2 as p,Fs2 as q,FrFm as r};'

assert yt.count(old_export) == 1, f'Expected 1 export match, got {yt.count(old_export)}'
yt = yt.replace(old_export, new_export, 1)

with open('terminal/YtNU6idj.js', 'w', encoding='utf-8') as f:
    f.write(yt)
print('2. YtNU6idj.js patched.')


# ---------------------------------------------------------------------------
# 3. BuFyB25p.js — import FrFm, replace `_` with FrFm in function et
# ---------------------------------------------------------------------------
with open('terminal/BuFyB25p.js', 'r', encoding='utf-8') as f:
    bu = f.read()

# Add import alias for FrFm (exported as 'r')
old_import_bu = ',p as ne2,q as Fs2}from"./YtNU6idj.js";'
new_import_bu = ',p as ne2,q as Fs2,r as FrFm}from"./YtNU6idj.js";'
assert bu.count(old_import_bu) == 1, f'Expected 1 import match in BuFyB25p.js, got {bu.count(old_import_bu)}'
bu = bu.replace(old_import_bu, new_import_bu, 1)

# Replace `new _({props:{settings` with `new FrFm({props:{settings` inside function et
# The anchor must be unique enough — use the full et function signature
old_et = 'function et(t){let n,s,r,g;return n=new _({props:{settings:t[0]}})'
new_et = 'function et(t){let n,s,r,g;return n=new FrFm({props:{settings:t[0]}})'
assert bu.count(old_et) == 1, f'Expected 1 match for et function, got {bu.count(old_et)}'
bu = bu.replace(old_et, new_et, 1)

with open('terminal/BuFyB25p.js', 'w', encoding='utf-8') as f:
    f.write(bu)
print('3. BuFyB25p.js patched.')


# ---------------------------------------------------------------------------
# 4. C2M0l3R7.js — import FrFmc, replace mt with FrFmc in function Ot
# ---------------------------------------------------------------------------
with open('terminal/C2M0l3R7.js', 'r', encoding='utf-8') as f:
    c2 = f.read()

# Add import alias for FrFm (as FrFmc to avoid name collision)
old_import_c2 = '  p as ne2c,\n  q as Fs2c\n} from "./YtNU6idj.js";'
new_import_c2 = '  p as ne2c,\n  q as Fs2c,\n  r as FrFmc\n} from "./YtNU6idj.js";'
assert c2.count(old_import_c2) == 1, f'Expected 1 import match in C2M0l3R7.js, got {c2.count(old_import_c2)}'
c2 = c2.replace(old_import_c2, new_import_c2, 1)

# Replace mt with FrFmc inside function Ot
old_ot = '    (n = new mt({ props: { settings: t[0] } })),'
new_ot = '    (n = new FrFmc({ props: { settings: t[0] } })),'
assert c2.count(old_ot) == 1, f'Expected 1 match for Ot mt usage, got {c2.count(old_ot)}'
c2 = c2.replace(old_ot, new_ot, 1)

with open('terminal/C2M0l3R7.js', 'w', encoding='utf-8') as f:
    f.write(c2)
print('4. C2M0l3R7.js patched.')

print('\nAll done.')
