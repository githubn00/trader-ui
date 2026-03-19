#!/usr/bin/env python3
"""
Patch script: Create alerts form component and wire into Edit/Add dialogs

Files modified:
  terminal/YtNU6idj.js  — Add AfFm Svelte form component (params + styles)
  terminal/BuFyB25p.js  — Wire AfFm into Edit Indicator dialog
  terminal/C2M0l3R7.js  — Wire AfFm into Select Indicator picker preview
"""

import sys

# ─────────────────────────────────────────────────────────────────────────────
# 1. YtNU6idj.js  — Add AfFm component + export
# ─────────────────────────────────────────────────────────────────────────────
with open('terminal/YtNU6idj.js', 'r', encoding='utf-8') as f:
    content = f.read()

af_form_code = (
    '\n// ── Alerts form (AfFm) ───────────────────────────────────────────────────\n'
    'function AfEs(t){let e,s,a,c,r,u,$,V,d,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,T,U,W,X,Y,Z;\n'
    'let q2={label:"maPeriod",min:0,max:200,type:"number"};'
    'function S2(e){t[2](e)}void 0!==t[1].params.maPeriod&&(q2.value=t[1].params.maPeriod),'
    'e=new st({props:q2}),q.push((()=>x(e,"value",S2)));\n'
    'let H2={label:"maType",options:["EMA","SMA"]};'
    'function I2(e){t[3](e)}void 0!==t[1].params.maType&&(H2.selected=t[1].params.maType),'
    's=new at({props:H2}),q.push((()=>x(s,"selected",I2)));\n'
    'let J2={label:"maSlope",min:5,max:50,type:"number"};'
    'function K2(e){t[4](e)}void 0!==t[1].params.maSlope&&(J2.value=t[1].params.maSlope),'
    'a=new st({props:J2}),q.push((()=>x(a,"value",K2)));\n'
    'let L2={label:"breakoutPercent",min:0.1,max:5,step:0.1,type:"number"};'
    'function M2(e){t[5](e)}void 0!==t[1].params.breakoutPercent&&(L2.value=t[1].params.breakoutPercent),'
    'c=new st({props:L2}),q.push((()=>x(c,"value",M2)));\n'
    'let N2={label:"usePrice"};'
    'function O2(e){t[6](e)}void 0!==t[1].params.usePrice&&(N2.checked=t[1].params.usePrice),'
    'r=new ct({props:N2}),q.push((()=>x(r,"checked",O2)));\n'
    'let P2={label:"useMaCross"};'
    'function Q2(e){t[7](e)}void 0!==t[1].params.useMaCross&&(P2.checked=t[1].params.useMaCross),'
    'u=new ct({props:P2}),q.push((()=>x(u,"checked",Q2)));\n'
    'let R2={label:"useMaSlope"};'
    'function S3(e){t[8](e)}void 0!==t[1].params.useMaSlope&&(R2.checked=t[1].params.useMaSlope),'
    '$=new ct({props:R2}),q.push((()=>x($,"checked",S3)));\n'
    'let T2={label:"useBreakout"};'
    'function U2(e){t[9](e)}void 0!==t[1].params.useBreakout&&(T2.checked=t[1].params.useBreakout),'
    'V=new ct({props:T2}),q.push((()=>x(V,"checked",U2)));\n'
    'let V2={label:"Bullish"};'
    'function W2(e){t[10](e)}function X2(e){t[11](e)}function Y2(e){t[12](e)}'
    'void 0!==t[1].style.bullish.visible&&(V2.visible=t[1].style.bullish.visible),'
    'void 0!==t[1].style.bullish.color&&(V2.color=t[1].style.bullish.color),'
    'void 0!==t[1].style.bullish.thickness&&(V2.thickness=t[1].style.bullish.thickness),'
    'd=new xt({props:V2}),'
    'q.push((()=>x(d,"visible",W2))),q.push((()=>x(d,"color",X2))),q.push((()=>x(d,"thickness",Y2)));\n'
    'let W2a={label:"Bearish"};'
    'function Z2(e){t[13](e)}function A3(e){t[14](e)}function B3(e){t[15](e)}'
    'void 0!==t[1].style.bearish.visible&&(W2a.visible=t[1].style.bearish.visible),'
    'void 0!==t[1].style.bearish.color&&(W2a.color=t[1].style.bearish.color),'
    'void 0!==t[1].style.bearish.thickness&&(W2a.thickness=t[1].style.bearish.thickness),'
    'z=new xt({props:W2a}),'
    'q.push((()=>x(z,"visible",Z2))),q.push((()=>x(z,"color",A3))),q.push((()=>x(z,"thickness",B3)));\n'
    'let C3={label:"MA Slope"};'
    'function D3(e){t[16](e)}function E3(e){t[17](e)}function F3(e){t[18](e)}'
    'void 0!==t[1].style.maSlope.visible&&(C3.visible=t[1].style.maSlope.visible),'
    'void 0!==t[1].style.maSlope.color&&(C3.color=t[1].style.maSlope.color),'
    'void 0!==t[1].style.maSlope.thickness&&(C3.thickness=t[1].style.maSlope.thickness),'
    'A=new xt({props:C3}),'
    'q.push((()=>x(A,"visible",D3))),q.push((()=>x(A,"color",E3))),q.push((()=>x(A,"thickness",F3)));\n'
    'let G3={label:"Breakout"};'
    'function H3(e){t[19](e)}function I3(e){t[20](e)}function J3(e){t[21](e)}'
    'void 0!==t[1].style.breakout.visible&&(G3.visible=t[1].style.breakout.visible),'
    'void 0!==t[1].style.breakout.color&&(G3.color=t[1].style.breakout.color),'
    'void 0!==t[1].style.breakout.thickness&&(G3.thickness=t[1].style.breakout.thickness),'
    'B=new xt({props:G3}),'
    'q.push((()=>x(B,"visible",H3))),q.push((()=>x(B,"color",I3))),q.push((()=>x(B,"thickness",J3)));\n'
    'return{c(){_(e.$$.fragment),a=h(),_(s.$$.fragment),c=h(),_(a.$$.fragment),r=h(),_(c.$$.fragment),u=h(),_($.$$.fragment),$=h(),_(V.$$.fragment),d=h(),_(z.$$.fragment),z=h(),_(A.$$.fragment),A=h(),_(B.$$.fragment)},'
    'm(t,n){k(e,t,n),i(t,a,n),k(s,t,n),i(t,c,n),k(a,t,n),i(t,r,n),k(c,t,n),i(t,u,n),k($,t,n),i(t,$,n),k(V,t,n),i(t,d,n),k(z,t,n),i(t,z,n),k(A,t,n),i(t,A,n),k(B,t,n)},'
    'p(t,n){const o={};'
    '!B&&2&n&&(B=!0,o.value=t[1].params.maPeriod,j((()=>B=!1))),e.$set(o);'
    'const l2={};'
    '!C&&2&n&&(C=!0,l2.selected=t[1].params.maType,j((()=>C=!1))),s.$set(l2);'
    'const c2={};'
    '!D&&2&n&&(D=!0,c2.value=t[1].params.maSlope,j((()=>D=!1))),a.$set(c2);'
    'const r2={};'
    '!E&&2&n&&(E=!0,r2.value=t[1].params.breakoutPercent,j((()=>E=!1))),c.$set(r2);'
    'const u2={};'
    '!F&&2&n&&(F=!0,u2.checked=t[1].params.usePrice,j((()=>F=!1))),$.$set(u2);'
    'const $2={};'
    '!G&&2&n&&($2.checked=t[1].params.useMaCross,j((()=>G=!1))),V.$set($2);'
    'const V2={};'
    '!H&&2&n&&(H=!0,V2.checked=t[1].params.useMaSlope,j((()=>H=!1))),A.$set(V2);'
    'const d2={};'
    '!I&&2&n&&(I=!0,d2.checked=t[1].params.useBreakout,j((()=>I=!1))),B.$set(d2);'
    'const z2={};'
    '!J&&2&n&&(J=!0,z2.visible=t[1].style.bullish.visible,j((()=>J=!1))),'
    '!K&&2&n&&(K=!0,z2.color=t[1].style.bullish.color,j((()=>K=!1))),'
    '!L&&2&n&&(L=!0,z2.thickness=t[1].style.bullish.thickness,j((()=>L=!1))),d.$set(z2);'
    'const A2={};'
    '!M&&2&n&&(M=!0,A2.visible=t[1].style.bearish.visible,j((()=>M=!1))),'
    '!N&&2&n&&(N=!0,A2.color=t[1].style.bearish.color,j((()=>N=!1))),'
    '!O&&2&n&&(O=!0,A2.thickness=t[1].style.bearish.thickness,j((()=>O=!1))),z.$set(A2);'
    'const C2={};'
    '!P&&2&n&&(P=!0,C2.visible=t[1].style.maSlope.visible,j((()=>P=!1))),'
    '!Q&&2&n&&(Q=!0,C2.color=t[1].style.maSlope.color,j((()=>Q=!1))),'
    '!R&&2&n&&(R=!0,C2.thickness=t[1].style.maSlope.thickness,j((()=>R=!1))),A.$set(C2);'
    'const G2={};'
    '!T&&2&n&&(T=!0,G2.visible=t[1].style.breakout.visible,j((()=>T=!1))),'
    '!U&&2&n&&(U=!0,G2.color=t[1].style.breakout.color,j((()=>U=!1))),'
    '!W&&2&n&&(W=!0,G2.thickness=t[1].style.breakout.thickness,j((()=>W=!1))),B.$set(G2)},'
    'i(t){X||(l(e.$$.fragment,t),l(s.$$.fragment,t),l(a.$$.fragment,t),l(c.$$.fragment,t),'
    'l($.$$.fragment,t),l(V.$$.fragment,t),l(d.$$.fragment,t),l(z.$$.fragment,t),'
    'l(A.$$.fragment,t),l(B.$$.fragment,t),X=!0)},'
    'o(t){o(e.$$.fragment,t),o(s.$$.fragment,t),o(a.$$.fragment,t),o(c.$$.fragment,t),'
    'o($.$$.fragment,t),o(V.$$.fragment,t),o(d.$$.fragment,t),o(z.$$.fragment,t),'
    'o(A.$$.fragment,t),o(B.$$.fragment,t),X=!1},'
    'd(t){t&&(n(a),n(c),n(r),n(u),n($),n(d),n(z),n(A)),b(e,t),b(s,t),b(a,t),b(c,t),b($,t),b(V,t),b(d,t),b(z,t),b(A,t),b(B,t)}}}\n'
    'function AfRs(t){let e,s;return e=new yt({props:{$$slots:{default:[AfEs]},$$scope:{ctx:t}}}),{c(){_(e.$$.fragment)},m(t,n){k(e,t,n),s=!0},p(t,[s]){const n={};2&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(l(e.$$.fragment,t),s=!0)},o(t){o(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}\n'
    'function AfOs(t,e,s){let n,o2=M,l2=()=>(o2(),o2=W(i,(t=>s(1,n=t))),i);t.$$.on_destroy.push((()=>o2()));let{settings:i}=e;return l2(),t.$$set=t=>{"settings"in t&&l2(s(0,i=t.settings))},[i,n,'
    'function(e){t.$$.not_equal(n.params.maPeriod,e)&&(n.params.maPeriod=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.params.maType,e)&&(n.params.maType=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.params.maSlope,e)&&(n.params.maSlope=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.params.breakoutPercent,e)&&(n.params.breakoutPercent=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.params.usePrice,e)&&(n.params.usePrice=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.params.useMaCross,e)&&(n.params.useMaCross=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.params.useMaSlope,e)&&(n.params.useMaSlope=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.params.useBreakout,e)&&(n.params.useBreakout=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bullish.visible,e)&&(n.style.bullish.visible=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bullish.color,e)&&(n.style.bullish.color=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bullish.thickness,e)&&(n.style.bullish.thickness=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bearish.visible,e)&&(n.style.bearish.visible=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bearish.color,e)&&(n.style.bearish.color=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bearish.thickness,e)&&(n.style.bearish.thickness=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.maSlope.visible,e)&&(n.style.maSlope.visible=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.maSlope.color,e)&&(n.style.maSlope.color=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.maSlope.thickness,e)&&(n.style.maSlope.thickness=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.breakout.visible,e)&&(n.style.breakout.visible=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.breakout.color,e)&&(n.style.breakout.color=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.breakout.thickness,e)&&(n.style.breakout.thickness=e,i.set(n))}'
    ']}\n'
    'class AfFm extends t{constructor(t){super(),e(this,t,AfOs,AfRs,s,{settings:0})}}\n'
    '// ── end AfFm ──────────────────────────────────────────────────────────────\n'
)

# Insert AfFm block before the export statement (before export{ on the last line)
old_export_anchor = '// ── end EpFm ──────────────────────────────────────────────────────────────\nfunction MOsWt(t){'
new_export_anchor = '// ── end EpFm ──────────────────────────────────────────────────────────────\n' + af_form_code + 'function MOsWt(t){'
if content.count(old_export_anchor) == 1:
    content = content.replace(old_export_anchor, new_export_anchor, 1)
    print("[+] AfFm form component added to YtNU6idj.js")
else:
    print("[-] Could not find export anchor in YtNU6idj.js")
    sys.exit(1)

# Add AfFm to the export list
old_export_end = 'MOsFm as t2};'
new_export_end = 'MOsFm as t2,AfFm as u};'
if content.count(old_export_end) == 1:
    content = content.replace(old_export_end, new_export_end, 1)
    print("[+] AfFm exported from YtNU6idj.js")
else:
    print("[-] Could not find export statement in YtNU6idj.js")
    sys.exit(1)

with open('terminal/YtNU6idj.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("[+] YtNU6idj.js updated.")

# ─────────────────────────────────────────────────────────────────────────────
# 2. BuFyB25p.js  — Add AfFm to Edit Indicator dialog
# ─────────────────────────────────────────────────────────────────────────────
with open('terminal/BuFyB25p.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 2a. Add AfFm import (find latest form import and add after it)
# Look for EpFm or MOsFm import first, then add AfFm
if 'as EpFm}' in content:
    old_import = 'as EpFm}from"./YtNU6idj.js"'
    new_import = 'as EpFm,u as AfFm}from"./YtNU6idj.js"'
    if content.count(old_import) == 1:
        content = content.replace(old_import, new_import, 1)
        print("[+] Added AfFm import to BuFyB25p.js")
    else:
        print("[-] Could not find EpFm import anchor in BuFyB25p.js")
        sys.exit(1)
elif 'as MOsFm}' in content:
    old_import = 'as MOsFm}from"./YtNU6idj.js"'
    new_import = 'as MOsFm,u as AfFm}from"./YtNU6idj.js"'
    if content.count(old_import) == 1:
        content = content.replace(old_import, new_import, 1)
        print("[+] Added AfFm import to BuFyB25p.js")
    else:
        print("[-] Could not find MOsFm import anchor in BuFyB25p.js")
        sys.exit(1)
else:
    print("[-] Could not find form import in BuFyB25p.js")
    sys.exit(1)

# 2b. Add Af2t form function before function Nt(
af2t_fn = (
    'function Af2t(t){let n,s,r,g;'
    'return n=new AfFm({props:{settings:t[0]}}),r=new b({props:{analysisManager:t[1],settings:t[0]}}),'
    '{c(){p(n.$$.fragment),s=c(),p(r.$$.fragment)},'
    'm(t,e){f(n,t,e),i(t,s,e),f(r,t,e),g=!0},'
    'p(t,s){const e={};1&s&&(e.settings=t[0]),n.$set(e);const a={};2&s&&(a.analysisManager=t[1]),1&s&&(a.settings=t[0]),r.$set(a)},'
    'i(t){g||($(n.$$.fragment,t),$(r.$$.fragment,t),g=!0)},'
    'o(t){a(n.$$.fragment,t),a(r.$$.fragment,t),g=!1},'
    'd(t){t&&e(s),o(n,t),o(r,t)}}}\n'
)
old_nt = 'function Nt(t){'
new_nt = af2t_fn + 'function Nt(t){'
if content.count(old_nt) == 1:
    content = content.replace(old_nt, new_nt, 1)
    print("[+] Added Af2t form function to BuFyB25p.js")
else:
    print("[-] Could not find Nt anchor in BuFyB25p.js")
    sys.exit(1)

# 2c. Add Af2t to p array (find the closing bracket and add before it)
# Look for patterns like "ut2]" or "Mt2,Ep2t,ut2]" (latest entries)
p_array_patterns = [
    ('st,nt,tt,Mt2,Ep2t,ut2]', 'st,nt,tt,Mt2,Ep2t,ut2,Af2t]'),
    ('st,nt,tt,Mt2,Ep2t]', 'st,nt,tt,Mt2,Ep2t,Af2t]'),
    ('st,nt,tt,Mt2]', 'st,nt,tt,Mt2,Af2t]'),
]

found_p_array = False
for old_p_end, new_p_end in p_array_patterns:
    if content.count(old_p_end) == 1:
        content = content.replace(old_p_end, new_p_end, 1)
        print(f"[+] Added Af2t to p array in BuFyB25p.js")
        found_p_array = True
        break

if not found_p_array:
    print("[-] Could not find p array pattern in BuFyB25p.js")
    sys.exit(1)

# 2d. Add alerts to dispatch chain
# Find pattern like '"mao_"===t[0].type?34:-1' and update it
old_dispatch_patterns = [
    ('"mao_"===t[0].type?34:-1', '"mao_"===t[0].type?34:"alerts"===t[0].type?35:-1'),
    ('"engulfing"===t[0].type?33:"mao_"===t[0].type?34:-1', '"engulfing"===t[0].type?33:"mao_"===t[0].type?34:"alerts"===t[0].type?35:-1'),
    ('"engulfing"===t[0].type?33:-1', '"engulfing"===t[0].type?33:"alerts"===t[0].type?34:-1'),
    ('"macd_"===t[0].type?32:-1', '"macd_"===t[0].type?32:"engulfing"===t[0].type?33:"alerts"===t[0].type?34:-1'),
]

found_dispatch = False
for old_dispatch_end, new_dispatch_end in old_dispatch_patterns:
    if content.count(old_dispatch_end) == 1:
        content = content.replace(old_dispatch_end, new_dispatch_end, 1)
        print(f"[+] Added alerts to dispatch chain in BuFyB25p.js")
        found_dispatch = True
        break

if not found_dispatch:
    # If dispatch already has alerts, skip
    if '"alerts"===t[0].type' in content:
        print("[+] Alerts already in dispatch chain (skipped)")
        found_dispatch = True
    else:
        print("[-] Could not find dispatch chain pattern in BuFyB25p.js")
        sys.exit(1)

with open('terminal/BuFyB25p.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("[+] BuFyB25p.js updated.")

# ─────────────────────────────────────────────────────────────────────────────
# 3. C2M0l3R7.js  — Add AfFm to Select Indicator picker preview
# ─────────────────────────────────────────────────────────────────────────────
with open('terminal/C2M0l3R7.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 3a. Add AfFmc import (the minified version for C2M0l3R7)
if 'as EpFmc' in content:
    old_import_c2m = 'as EpFmc\n} from "./YtNU6idj.js";'
    new_import_c2m = 'as EpFmc,\n  u as AfFmc\n} from "./YtNU6idj.js";'
    if content.count(old_import_c2m) == 1:
        content = content.replace(old_import_c2m, new_import_c2m, 1)
        print("[+] Added AfFmc import to C2M0l3R7.js")
    else:
        print("[-] Could not find EpFmc import anchor in C2M0l3R7.js")
        sys.exit(1)
elif 'as MOsFmc' in content:
    old_import_c2m = 'as MOsFmc\n} from "./YtNU6idj.js";'
    new_import_c2m = 'as MOsFmc,\n  u as AfFmc\n} from "./YtNU6idj.js";'
    if content.count(old_import_c2m) == 1:
        content = content.replace(old_import_c2m, new_import_c2m, 1)
        print("[+] Added AfFmc import to C2M0l3R7.js")
    else:
        print("[-] Could not find MOsFmc import anchor in C2M0l3R7.js")
        sys.exit(1)
else:
    print("[-] Could not find form import in C2M0l3R7.js")
    sys.exit(1)

# 3b. Add Af2tc form function before function rn(
af2tc_fn = (
    'function Af2tc(t){let n,e,s,r;return(n=new AfFmc({props:{settings:t[0]}}),s=new L({props:{analysisManager:t[1],settings:t[0]}}),'
    '{c(){(A(n.$$.fragment),(e=u()),A(s.$$.fragment))},'
    'm(t,a){(x(n,t,a),$(t,e,a),x(s,t,a),(r=!0))},'
    'p(t,e){const a={};(1&e&&(a.settings=t[0]),n.$set(a));const r={};(2&e&&(r.analysisManager=t[1]),1&e&&(r.settings=t[0]),s.$set(r))},'
    'i(t){r||(h(n.$$.fragment,t),h(s.$$.fragment,t),(r=!0))},'
    'o(t){(M(n.$$.fragment,t),M(s.$$.fragment,t),(r=!1))},'
    'd(t){(t&&a(e),k(n,t),k(s,t))}})}\n'
)
old_rn = 'function rn(t) {'
new_rn = af2tc_fn + 'function rn(t) {'
if content.count(old_rn) == 1:
    content = content.replace(old_rn, new_rn, 1)
    print("[+] Added Af2tc form function to C2M0l3R7.js")
else:
    print("[-] Could not find rn anchor in C2M0l3R7.js")
    sys.exit(1)

# 3c. Add Af2tc to i array
i_array_patterns = [
    ('      Gt2,\n    ],', '      Gt2,\n      Af2tc,\n    ],'),
    ('      Ep2tc,\n    ],', '      Ep2tc,\n      Af2tc,\n    ],'),
]

found_i_array = False
for old_i_end, new_i_end in i_array_patterns:
    if content.count(old_i_end) == 1:
        content = content.replace(old_i_end, new_i_end, 1)
        print(f"[+] Added Af2tc to i array in C2M0l3R7.js")
        found_i_array = True
        break

if not found_i_array:
    print("[-] Could not find i array pattern in C2M0l3R7.js")
    sys.exit(1)

# 3d. Add alerts to dispatch chain
dispatch_patterns = [
    (
        '                                                                  : "engulfing" === t[0].type\n'
        '                                                                  ? 32\n'
        '                                                                  : -1;',
        '                                                                  : "engulfing" === t[0].type\n'
        '                                                                  ? 32\n'
        '                                                                  : "alerts" === t[0].type\n'
        '                                                                  ? 33\n'
        '                                                                  : -1;'
    ),
    (
        '                                                                  : "macd_" === t[0].type\n'
        '                                                                  ? 31\n'
        '                                                                  : -1;',
        '                                                                  : "macd_" === t[0].type\n'
        '                                                                  ? 31\n'
        '                                                                  : "engulfing" === t[0].type\n'
        '                                                                  ? 32\n'
        '                                                                  : "alerts" === t[0].type\n'
        '                                                                  ? 33\n'
        '                                                                  : -1;'
    ),
]

found_dispatch_c2m = False
for old_dispatch_c2m, new_dispatch_c2m in dispatch_patterns:
    if content.count(old_dispatch_c2m) == 1:
        content = content.replace(old_dispatch_c2m, new_dispatch_c2m, 1)
        print(f"[+] Added alerts to dispatch chain in C2M0l3R7.js")
        found_dispatch_c2m = True
        break

if not found_dispatch_c2m:
    # If alerts already in dispatch, skip
    if '"alerts" === t[0].type' in content:
        print("[+] Alerts already in dispatch chain (skipped)")
        found_dispatch_c2m = True
    else:
        print("[-] Could not find dispatch chain pattern in C2M0l3R7.js")
        sys.exit(1)

with open('terminal/C2M0l3R7.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("[+] C2M0l3R7.js updated.")

print("\n[+] All form files patched successfully!")
print("[+] Next: Run ./build.js to compile changes")
