"""
patch_engulfing_form.py — Add style controls to Edit/Add indicator windows for Engulfing Patterns

Files modified:
  terminal/YtNU6idj.js  — Add EpFm Svelte form component (two xt style lines: Bullish / Bearish)
  terminal/BuFyB25p.js  — Wire EpFm into Edit Indicator dialog (index 33)
  terminal/C2M0l3R7.js  — Wire EpFmc into Select Indicator picker preview (index 32)
"""

# ─────────────────────────────────────────────────────────────────────────────
# 1. YtNU6idj.js  — Add EpFm component + export
# ─────────────────────────────────────────────────────────────────────────────
with open('terminal/YtNU6idj.js', 'r', encoding='utf-8') as f:
    content = f.read()

ep_form_code = (
    '\n// ── Engulfing Patterns form (EpFm) ───────────────────────────────────────\n'
    'function EpEs(t){let e,s,a,c,r,u,$,V,d,z;'
    'let A2={label:"Bullish"};'
    'function B2(e){t[2](e)}function C2(e){t[3](e)}function D2(e){t[4](e)}'
    'void 0!==t[1].style.bullish.visible&&(A2.visible=t[1].style.bullish.visible),'
    'void 0!==t[1].style.bullish.color&&(A2.color=t[1].style.bullish.color),'
    'void 0!==t[1].style.bullish.thickness&&(A2.thickness=t[1].style.bullish.thickness),'
    'e=new xt({props:A2}),'
    'q.push((()=>x(e,"visible",B2))),q.push((()=>x(e,"color",C2))),q.push((()=>x(e,"thickness",D2)));'
    'let E2={label:"Bearish"};'
    'function F2(e){t[5](e)}function G2(e){t[6](e)}function H2(e){t[7](e)}'
    'void 0!==t[1].style.bearish.visible&&(E2.visible=t[1].style.bearish.visible),'
    'void 0!==t[1].style.bearish.color&&(E2.color=t[1].style.bearish.color),'
    'void 0!==t[1].style.bearish.thickness&&(E2.thickness=t[1].style.bearish.thickness),'
    's=new xt({props:E2}),'
    'q.push((()=>x(s,"visible",F2))),q.push((()=>x(s,"color",G2))),q.push((()=>x(s,"thickness",H2)));'
    'return{c(){_(e.$$.fragment),a=h(),_(s.$$.fragment)},'
    'm(t,n){k(e,t,n),i(t,a,n),k(s,t,n),z=!0},'
    'p(t,n){const o={};'
    '!c&&2&n&&(c=!0,o.visible=t[1].style.bullish.visible,j((()=>c=!1))),'
    '!r&&2&n&&(r=!0,o.color=t[1].style.bullish.color,j((()=>r=!1))),'
    '!u&&2&n&&(u=!0,o.thickness=t[1].style.bullish.thickness,j((()=>u=!1))),'
    'e.$set(o);'
    'const l2={};'
    '!$&&2&n&&($=!0,l2.visible=t[1].style.bearish.visible,j((()=>$=!1))),'
    '!V&&2&n&&(V=!0,l2.color=t[1].style.bearish.color,j((()=>V=!1))),'
    '!d&&2&n&&(d=!0,l2.thickness=t[1].style.bearish.thickness,j((()=>d=!1))),'
    's.$set(l2)},'
    'i(t){z||(l(e.$$.fragment,t),l(s.$$.fragment,t),z=!0)},'
    'o(t){o(e.$$.fragment,t),o(s.$$.fragment,t),z=!1},'
    'd(t){t&&n(a),b(e,t),b(s,t)}}}\n'
    'function EpRs(t){let e,s;return e=new yt({props:{$$slots:{default:[EpEs]},$$scope:{ctx:t}}}),{c(){_(e.$$.fragment)},m(t,n){k(e,t,n),s=!0},p(t,[s]){const n={};2&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(l(e.$$.fragment,t),s=!0)},o(t){o(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}\n'
    'function EpOs(t,e,s){let n,o2=M,l2=()=>(o2(),o2=W(i,(t=>s(1,n=t))),i);t.$$.on_destroy.push((()=>o2()));let{settings:i}=e;return l2(),t.$$set=t=>{"settings"in t&&l2(s(0,i=t.settings))},[i,n,'
    'function(e){t.$$.not_equal(n.style.bullish.visible,e)&&(n.style.bullish.visible=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bullish.color,e)&&(n.style.bullish.color=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bullish.thickness,e)&&(n.style.bullish.thickness=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bearish.visible,e)&&(n.style.bearish.visible=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bearish.color,e)&&(n.style.bearish.color=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bearish.thickness,e)&&(n.style.bearish.thickness=e,i.set(n))}'
    ']}\n'
    'class EpFm extends t{constructor(t){super(),e(this,t,EpOs,EpRs,s,{settings:0})}}\n'
    '// ── end EpFm ──────────────────────────────────────────────────────────────\n'
)

# Insert EpFm block before the export statement (after the end FrFm comment)
old_export_anchor = '// ── end FrFm ─────────────────────────────────────────────────────────────\nexport{'
new_export_anchor = '// ── end FrFm ─────────────────────────────────────────────────────────────\n' + ep_form_code + 'export{'
assert content.count(old_export_anchor) == 1, f"Expected 1 match for export anchor, got {content.count(old_export_anchor)}"
content = content.replace(old_export_anchor, new_export_anchor, 1)

# Add EpFm to the export list
old_export_end = 'FrFm as r};'
new_export_end = 'FrFm as r,EpFm as s};'
assert content.count(old_export_end) == 1, f"Expected 1 match for export end, got {content.count(old_export_end)}"
content = content.replace(old_export_end, new_export_end, 1)

with open('terminal/YtNU6idj.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("YtNU6idj.js updated.")

# ─────────────────────────────────────────────────────────────────────────────
# 2. BuFyB25p.js  — Add EpFm to Edit Indicator dialog
# ─────────────────────────────────────────────────────────────────────────────
with open('terminal/BuFyB25p.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 2a. Add EpFm import
old_import = 'r as FrFm}from"./YtNU6idj.js"'
new_import = 'r as FrFm,s as EpFm}from"./YtNU6idj.js"'
assert content.count(old_import) == 1, f"Expected 1 match for import anchor, got {content.count(old_import)}"
content = content.replace(old_import, new_import, 1)

# 2b. Add Ep2t form function before function Nt(
ep2t_fn = (
    'function Ep2t(t){let n,s,r,g;'
    'return n=new EpFm({props:{settings:t[0]}}),r=new b({props:{analysisManager:t[1],settings:t[0]}}),'
    '{c(){p(n.$$.fragment),s=c(),p(r.$$.fragment)},'
    'm(t,e){f(n,t,e),i(t,s,e),f(r,t,e),g=!0},'
    'p(t,s){const e={};1&s&&(e.settings=t[0]),n.$set(e);const a={};2&s&&(a.analysisManager=t[1]),1&s&&(a.settings=t[0]),r.$set(a)},'
    'i(t){g||($(n.$$.fragment,t),$(r.$$.fragment,t),g=!0)},'
    'o(t){a(n.$$.fragment,t),a(r.$$.fragment,t),g=!1},'
    'd(t){t&&e(s),o(n,t),o(r,t)}}}\n'
)
old_nt = 'function Nt(t){'
new_nt = ep2t_fn + 'function Nt(t){'
assert content.count(old_nt) == 1, f"Expected 1 match for Nt anchor, got {content.count(old_nt)}"
content = content.replace(old_nt, new_nt, 1)

# 2c. Add Ep2t to p array
old_p_end = 'st,nt,tt,Mt2],'
new_p_end = 'st,nt,tt,Mt2,Ep2t],'
assert content.count(old_p_end) == 1, f"Expected 1 match for p array end, got {content.count(old_p_end)}"
content = content.replace(old_p_end, new_p_end, 1)

# 2d. Add engulfing to dispatch chain (after macd_ at 32)
old_dispatch_end = '"macd_"===t[0].type?32:-1'
new_dispatch_end = '"macd_"===t[0].type?32:"engulfing"===t[0].type?33:-1'
assert content.count(old_dispatch_end) == 1, f"Expected 1 match for dispatch end, got {content.count(old_dispatch_end)}"
content = content.replace(old_dispatch_end, new_dispatch_end, 1)

with open('terminal/BuFyB25p.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("BuFyB25p.js updated.")

# ─────────────────────────────────────────────────────────────────────────────
# 3. C2M0l3R7.js  — Add EpFmc to Select Indicator picker preview
# ─────────────────────────────────────────────────────────────────────────────
with open('terminal/C2M0l3R7.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 3a. Add EpFmc import
old_import_c2m = '  r as FrFmc\n} from "./YtNU6idj.js";'
new_import_c2m = '  r as FrFmc,\n  s as EpFmc\n} from "./YtNU6idj.js";'
assert content.count(old_import_c2m) == 1, f"Expected 1 match for import anchor, got {content.count(old_import_c2m)}"
content = content.replace(old_import_c2m, new_import_c2m, 1)

# 3b. Add Ep2tc form function before function rn(
ep2tc_fn = (
    'function Ep2tc(t){let n,e,s,r;return(n=new EpFmc({props:{settings:t[0]}}),s=new L({props:{analysisManager:t[1],settings:t[0]}}),'
    '{c(){(A(n.$$.fragment),(e=u()),A(s.$$.fragment))},'
    'm(t,a){(x(n,t,a),$(t,e,a),x(s,t,a),(r=!0))},'
    'p(t,e){const a={};(1&e&&(a.settings=t[0]),n.$set(a));const r={};(2&e&&(r.analysisManager=t[1]),1&e&&(r.settings=t[0]),s.$set(r))},'
    'i(t){r||(h(n.$$.fragment,t),h(s.$$.fragment,t),(r=!0))},'
    'o(t){(M(n.$$.fragment,t),M(s.$$.fragment,t),(r=!1))},'
    'd(t){(t&&a(e),k(n,t),k(s,t))}})}\n'
)
old_rn = 'function rn(t) {'
new_rn = ep2tc_fn + 'function rn(t) {'
assert content.count(old_rn) == 1, f"Expected 1 match for rn anchor, got {content.count(old_rn)}"
content = content.replace(old_rn, new_rn, 1)

# 3c. Add Ep2tc to i array (after Gt2)
old_i_end = '      Gt2,\n    ],'
new_i_end = '      Gt2,\n      Ep2tc,\n    ],'
assert content.count(old_i_end) == 1, f"Expected 1 match for i array end, got {content.count(old_i_end)}"
content = content.replace(old_i_end, new_i_end, 1)

# 3d. Add engulfing to dispatch chain (after macd_ at 31)
old_dispatch_c2m = (
    '                                                                  : "macd_" === t[0].type\n'
    '                                                                  ? 31\n'
    '                                                                  : -1;'
)
new_dispatch_c2m = (
    '                                                                  : "macd_" === t[0].type\n'
    '                                                                  ? 31\n'
    '                                                                  : "engulfing" === t[0].type\n'
    '                                                                  ? 32\n'
    '                                                                  : -1;'
)
assert content.count(old_dispatch_c2m) == 1, f"Expected 1 match for dispatch end, got {content.count(old_dispatch_c2m)}"
content = content.replace(old_dispatch_c2m, new_dispatch_c2m, 1)

with open('terminal/C2M0l3R7.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("C2M0l3R7.js updated.")

print("\nAll form files patched successfully.")
