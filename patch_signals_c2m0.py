with open('terminal/C2M0l3R7.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add Sn tab label function for Signals before function pn(
old_before_pn = 'function pn(t) {'
new_before_pn = '''function Sn(t) {
  let n,
    e = window.tr(window.lang.chart.indicators.tabs.signals) + "";
  return {
    c() {
      n = d(e);
    },
    m(t, e) {
      $(t, n, e);
    },
    p: s,
    d(t) {
      t && a(n);
    },
  };
}
function pn(t) {'''
assert content.count(old_before_pn) == 1, f"Expected 1 match for pn anchor, got {content.count(old_before_pn)}"
content = content.replace(old_before_pn, new_before_pn, 1)

# 2. Add A2, q, Z2 to pn let declaration
old_let = '  let n, e, s, r, i, o, g, l, c, m, f, p, d, w, y;'
new_let = '  let n, e, s, r, i, o, g, l, c, m, f, p, d, w, y, A2, q, Z2;'
assert content.count(old_let) == 1, f"Expected 1 match for let declaration, got {content.count(old_let)}"
content = content.replace(old_let, new_let, 1)

# 3. Add signals tab component initialization and G handler after Bill Williams setup
old_bw_end = '  let E = {\n    slim: t[2],\n    value: 4,\n    $$slots: { default: [fn] },\n    $$scope: { ctx: t },\n  };\n  return (\n    void 0 !== t[0] && (E.group = t[0]),\n    (d = new dt({ props: E })),\n    T.push(() => I(d, "group", F)),'
new_bw_end = '  let E = {\n    slim: t[2],\n    value: 4,\n    $$slots: { default: [fn] },\n    $$scope: { ctx: t },\n  };\n  function G(n) {\n    t[9](n);\n  }\n  let _W = {\n    slim: t[2],\n    value: 5,\n    $$slots: { default: [Sn] },\n    $$scope: { ctx: t },\n  };\n  return (\n    void 0 !== t[0] && (E.group = t[0]),\n    (d = new dt({ props: E })),\n    T.push(() => I(d, "group", F)),\n    void 0 !== t[0] && (_W.group = t[0]),\n    (A2 = new dt({ props: _W })),\n    T.push(() => I(A2, "group", G)),'
assert content.count(old_bw_end) == 1, f"Expected 1 match for bw end anchor, got {content.count(old_bw_end)}"
content = content.replace(old_bw_end, new_bw_end, 1)

# 4. Update c() in pn: add Z2 separator and A2 fragment after d
old_c = '          A(d.$$.fragment));'
new_c = '          A(d.$$.fragment),\n          (Z2 = u()),\n          A(A2.$$.fragment));'
assert content.count(old_c) == 1, f"Expected 1 match for c() anchor, got {content.count(old_c)}"
content = content.replace(old_c, new_c, 1)

# 5. Update m() in pn: add Z2 separator and A2 mount after d
old_m = '          x(d, t, e),\n          (y = !0));'
new_m = '          x(d, t, e),\n          $(t, Z2, e),\n          x(A2, t, e),\n          (y = !0));'
assert content.count(old_m) == 1, f"Expected 1 match for m() anchor, got {content.count(old_m)}"
content = content.replace(old_m, new_m, 1)

# 6. Update p() in pn: add signals block after Bill Williams block
old_p_end = '          !w && 1 & s && ((w = !0), (p.group = t[0]), C(() => (w = !1))),\n          d.$set(p));'
new_p_end = '          !w && 1 & s && ((w = !0), (p.group = t[0]), C(() => (w = !1))),\n          d.$set(p));\n        const _hs = {};\n        (4 & s && (_hs.slim = t[2]),\n          512 & s && (_hs.$$scope = { dirty: s, ctx: t }),\n          !q && 1 & s && ((q = !0), (_hs.group = t[0]), C(() => (q = !1))),\n          A2.$set(_hs));'
assert content.count(old_p_end) == 1, f"Expected 1 match for p() end anchor, got {content.count(old_p_end)}"
content = content.replace(old_p_end, new_p_end, 1)

# 7. Update i() in pn: add A2 fragment
old_i = '          h(d.$$.fragment, t),\n          (y = !0));'
new_i = '          h(d.$$.fragment, t),\n          h(A2.$$.fragment, t),\n          (y = !0));'
assert content.count(old_i) == 1, f"Expected 1 match for i() anchor, got {content.count(old_i)}"
content = content.replace(old_i, new_i, 1)

# 8. Update o() in pn: add A2 fragment
old_o = '          M(d.$$.fragment, t),\n          (y = !1));'
new_o = '          M(d.$$.fragment, t),\n          M(A2.$$.fragment, t),\n          (y = !1));'
assert content.count(old_o) == 1, f"Expected 1 match for o() anchor, got {content.count(old_o)}"
content = content.replace(old_o, new_o, 1)

# 9. Update d() in pn: add Z2 to separator destroy list
old_d_sep = '        (t && (a(s), a(o), a(c), a(p)),'
new_d_sep = '        (t && (a(s), a(o), a(c), a(p), a(Z2)),'
assert content.count(old_d_sep) == 1, f"Expected 1 match for d() separators, got {content.count(old_d_sep)}"
content = content.replace(old_d_sep, new_d_sep, 1)

# 10. Update d() in pn: add A2 destroy
old_d = '          k(d, t));\n      },\n    }\n  );\n}\nfunction un'
new_d = '          k(d, t),\n          k(A2, t));\n      },\n    }\n  );\n}\nfunction un'
assert content.count(old_d) == 1, f"Expected 1 match for d() anchor, got {content.count(old_d)}"
content = content.replace(old_d, new_d, 1)

# 11. Add t[9] handler to dn return array (tabs logic function)
old_dn_last = '      function (t) {\n        ((s = t), e(0, s));\n      },\n    ]\n  );\n}\nclass wn extends t {'
new_dn_last = '      function (t) {\n        ((s = t), e(0, s));\n      },\n      function (t) {\n        ((s = t), e(0, s));\n      },\n    ]\n  );\n}\nclass wn extends t {'
assert content.count(old_dn_last) == 1, f"Expected 1 match for dn last entry, got {content.count(old_dn_last)}"
content = content.replace(old_dn_last, new_dn_last, 1)

with open('terminal/C2M0l3R7.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done. C2M0l3R7.js updated.")
