#!/usr/bin/env python3
"""
Wire AfFm form into Edit/Add indicator dialogs
(Assumes AfFm form component already exists in YtNU6idj.js)
"""

import sys

# ─────────────────────────────────────────────────────────────────────────────
# 1. BuFyB25p.js  — Add AfFm to Edit Indicator dialog
# ─────────────────────────────────────────────────────────────────────────────
with open('terminal/BuFyB25p.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Check if already done
if 'as AfFm' in content:
    print("[+] AfFm already imported/wired in BuFyB25p.js (skipping)")
else:
    # 1a. Add AfFm import
    if 'as MOsFm}' in content:
        old_import = 'as MOsFm}from"./YtNU6idj.js"'
        new_import = 'as MOsFm,u as AfFm}from"./YtNU6idj.js"'
        if content.count(old_import) == 1:
            content = content.replace(old_import, new_import, 1)
            print("[+] Added AfFm import to BuFyB25p.js")
        else:
            print("[-] Could not find MOsFm import anchor in BuFyB25p.js")
            sys.exit(1)
    elif 'as EpFm}' in content:
        old_import = 'as EpFm}from"./YtNU6idj.js"'
        new_import = 'as EpFm,u as AfFm}from"./YtNU6idj.js"'
        if content.count(old_import) == 1:
            content = content.replace(old_import, new_import, 1)
            print("[+] Added AfFm import to BuFyB25p.js")
        else:
            print("[-] Could not find EpFm import anchor in BuFyB25p.js")
            sys.exit(1)
    else:
        print("[-] Could not find form import in BuFyB25p.js")
        sys.exit(1)

    # 1b. Add Af2t form function before function Nt(
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
    if content.count(old_nt) == 1 and 'function Af2t(t)' not in content:
        new_nt = af2t_fn + 'function Nt(t){'
        content = content.replace(old_nt, new_nt, 1)
        print("[+] Added Af2t form function to BuFyB25p.js")
    elif 'function Af2t(t)' in content:
        print("[+] Af2t already defined (skipping)")
    else:
        print("[-] Could not find Nt anchor in BuFyB25p.js")
        sys.exit(1)

    # 1c. Add Af2t to p array
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

    # 1d. Add alerts to dispatch chain
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
        if '"alerts"===t[0].type' in content:
            print("[+] Alerts already in dispatch chain (skipped)")
        else:
            print("[-] Could not find dispatch chain pattern in BuFyB25p.js")
            sys.exit(1)

with open('terminal/BuFyB25p.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("[+] BuFyB25p.js updated.")

# ─────────────────────────────────────────────────────────────────────────────
# 2. C2M0l3R7.js  — Add AfFm to Select Indicator picker preview
# ─────────────────────────────────────────────────────────────────────────────
with open('terminal/C2M0l3R7.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Check if already done
if 'as AfFmc' in content:
    print("[+] AfFmc already imported/wired in C2M0l3R7.js (skipping)")
else:
    # 2a. Add AfFmc import
    if 'as MOsFmc' in content:
        old_import_c2m = '  t2 as MOsFmc\n} from "./YtNU6idj.js";'
        new_import_c2m = '  t2 as MOsFmc,\n  u as AfFmc\n} from "./YtNU6idj.js";'
        if content.count(old_import_c2m) == 1:
            content = content.replace(old_import_c2m, new_import_c2m, 1)
            print("[+] Added AfFmc import to C2M0l3R7.js")
        else:
            print("[-] Could not find MOsFmc import anchor in C2M0l3R7.js")
            sys.exit(1)
    elif 'as EpFmc' in content:
        old_import_c2m = 'as EpFmc\n} from "./YtNU6idj.js";'
        new_import_c2m = 'as EpFmc,\n  u as AfFmc\n} from "./YtNU6idj.js";'
        if content.count(old_import_c2m) == 1:
            content = content.replace(old_import_c2m, new_import_c2m, 1)
            print("[+] Added AfFmc import to C2M0l3R7.js")
        else:
            print("[-] Could not find EpFmc import anchor in C2M0l3R7.js")
            sys.exit(1)
    else:
        print("[-] Could not find form import in C2M0l3R7.js")
        sys.exit(1)

    # 2b. Add Af2tc form function before function rn(
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
    if content.count(old_rn) == 1 and 'function Af2tc(t)' not in content:
        new_rn = af2tc_fn + 'function rn(t) {'
        content = content.replace(old_rn, new_rn, 1)
        print("[+] Added Af2tc form function to C2M0l3R7.js")
    elif 'function Af2tc(t)' in content:
        print("[+] Af2tc already defined (skipping)")
    else:
        print("[-] Could not find rn anchor in C2M0l3R7.js")
        sys.exit(1)

    # 2c. Add Af2tc to i array
    i_array_patterns = [
        ('      Gt2,\n      Ep2tc,\n      Xt2,', '      Gt2,\n      Ep2tc,\n      Af2tc,\n      Xt2,'),
        ('      Gt2,\n      Ep2tc,\n    ],', '      Gt2,\n      Ep2tc,\n      Af2tc,\n    ],'),
        ('      Gt2,\n    ],', '      Gt2,\n      Af2tc,\n    ],'),
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

    # 2d. Add alerts to dispatch chain
    dispatch_patterns = [
        (
            '                                                                  : "engulfing" === t[0].type\n'
            '                                                                  ? 32\n'
            '                                                                  : "mao_" === t[0].type\n'
            '                                                                  ? 33\n'
            '                                                                  : -1;',
            '                                                                  : "engulfing" === t[0].type\n'
            '                                                                  ? 32\n'
            '                                                                  : "mao_" === t[0].type\n'
            '                                                                  ? 33\n'
            '                                                                  : "alerts" === t[0].type\n'
            '                                                                  ? 34\n'
            '                                                                  : -1;'
        ),
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
        if '"alerts" === t[0].type' in content or '"alerts"===t[0].type' in content:
            print("[+] Alerts already in dispatch chain (skipped)")
        else:
            print("[-] Could not find dispatch chain pattern in C2M0l3R7.js")
            sys.exit(1)

with open('terminal/C2M0l3R7.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("[+] C2M0l3R7.js updated.")

print("\n[+] All form wiring patches applied successfully!")
print("[+] Next: Run ./build.js to compile changes")
