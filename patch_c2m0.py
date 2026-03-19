with open('terminal/C2M0l3R7.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add ne2c and Fs2c imports from YtNU6idj.js
old_import = '} from "./YtNU6idj.js";'
new_import = ',p as ne2c,q as Fs2c} from "./YtNU6idj.js";'
assert content.count(old_import) == 1, f"Expected 1 match for import anchor, got {content.count(old_import)}"
content = content.replace(old_import, new_import, 1)

# 2. Add Gt2 function before function rn(
gt2_code = '''function Gt2(t){let n,e,s,r;return(n=new Fs2c({props:{settings:t[0]}}),s=new ne2c({props:{analysisManager:t[1],settings:t[0]}}),{c(){(A(n.$$.fragment),(e=u()),A(s.$$.fragment))},m(t,a){(x(n,t,a),$(t,e,a),x(s,t,a),(r=!0))},p(t,e){const a={};(1&e&&(a.settings=t[0]),n.$set(a));const r={};(2&e&&(r.analysisManager=t[1]),1&e&&(r.settings=t[0]),s.$set(r))},i(t){r||(h(n.$$.fragment,t),h(s.$$.fragment,t),(r=!0))},o(t){(M(n.$$.fragment,t),M(s.$$.fragment,t),(r=!1))},d(t){(t&&a(e),k(n,t),k(s,t))}})}
'''

rn_idx = content.find('function rn(')
assert rn_idx != -1, "Could not find function rn("
content = content[:rn_idx] + gt2_code + content[rn_idx:]

# 3. Add Gt2 to the i array (after Ct,)
old_array_end = '      Ct,\n    ]'
new_array_end = '      Ct,\n      Gt2,\n    ]'
assert content.count(old_array_end) == 1, f"Expected 1 match for array end, got {content.count(old_array_end)}"
content = content.replace(old_array_end, new_array_end, 1)

# 4. Add macd_ case to g() - add before the final : -1;
old_end = ': "mf" ===\n                                                                    t[0].type\n                                                                  ? 30\n                                                                  : -1;'
new_end = ': "mf" ===\n                                                                    t[0].type\n                                                                  ? 30\n                                                                  : "macd_" === t[0].type\n                                                                  ? 31\n                                                                  : -1;'
assert content.count(old_end) == 1, f"Expected 1 match for g() end, got {content.count(old_end)}"
content = content.replace(old_end, new_end, 1)

with open('terminal/C2M0l3R7.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done. File updated.")
print(f"New file length: {len(content)}")
