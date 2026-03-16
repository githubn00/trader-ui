with open('terminal/CezRPkQL.js', 'r', encoding='utf-8') as f:
    content = f.read()

# ── 1. Add MnSignal.js lazy import after cNlpOkCc.js import ─────────────────
old_import = '  Xp = () => t(() => import("./cNlpOkCc.js"), []),'
new_import = '  Xp = () => t(() => import("./cNlpOkCc.js"), []),\n  Np2 = () => t(() => import("./MnSignal.js"), []),'
assert content.count(old_import) == 1, f"Expected 1 match for import anchor, got {content.count(old_import)}"
content = content.replace(old_import, new_import, 1)

# ── 2. Add mp2/bp2/Np2p functions before function yp( ────────────────────────
signals_panel_fns = 'function mp2(t){const e=t[26].default;t[31]=e;}\nfunction bp2(t){let e,n;return(mp2(t),(e=new t[31]({props:{symbol:t[8].symbol,analysisManager:t[0].chart.chartController.chart.analysis,objectsManager:t[0].chart.chartController.chart.objects,objectsStore:t[0].objects.objectsStore,indicatorsStore:t[0].indicators.indicatorsStore}})),e.$on("close",t[23]),{c(){et(e.$$.fragment)},m(t,o){(tt(e,t,o),(n=!0))},p(t,n){mp2(t);const o={};(256&n[0]&&(o.symbol=t[8].symbol),1&n[0]&&(o.analysisManager=t[0].chart.chartController.chart.analysis),1&n[0]&&(o.objectsManager=t[0].chart.chartController.chart.objects),1&n[0]&&(o.objectsStore=t[0].objects.objectsStore),1&n[0]&&(o.indicatorsStore=t[0].indicators.indicatorsStore),e.$set(o))},i(t){n||(S(e.$$.fragment,t),(n=!0))},o(t){(y(e.$$.fragment,t),(n=!1))},d(t){G(e,t)}});}\nfunction Np2p(t){let e,n;return((e=new _t({props:{module:Np2,$$slots:{default:[bp2,({module:t})=>({26:t}),({module:t})=>[t?67108864:0]]},$$scope:{ctx:t}}})),{c(){et(e.$$.fragment)},m(t,o){(tt(e,t,o),(n=!0))},p(t,n){const o={};((257&n[0])|(1&n[1])&&(o.$$scope={dirty:n,ctx:t}),e.$set(o))},i(t){n||(S(e.$$.fragment,t),(n=!0))},o(t){(y(e.$$.fragment,t),(n=!1))},d(t){G(e,t)}});}\n'
old_yp = 'function yp(t) {'
new_yp = signals_panel_fns + 'function yp(t) {'
assert content.count(old_yp) == 1, f"Expected 1 match for yp anchor, got {content.count(old_yp)}"
content = content.replace(old_yp, new_yp, 1)

# ── 3. Add Np2p to Mp's component array ─────────────────────────────────────
old_l_arr = '  const l = [Cp, Sp, yp],'
new_l_arr = '  const l = [Cp, Sp, yp, Np2p],'
assert content.count(old_l_arr) == 1, f"Expected 1 match for l array, got {content.count(old_l_arr)}"
content = content.replace(old_l_arr, new_l_arr, 1)

# ── 4. Add signals branch to Mp's s() index function ─────────────────────────
old_s_fn = '        : t[7].tree &&\n            (null == (n = t[0].chart.chartController) ? void 0 : n.chart)\n          ? 2\n          : -1;'
new_s_fn = '        : t[7].tree &&\n            (null == (n = t[0].chart.chartController) ? void 0 : n.chart)\n          ? 2\n          : t[7].signals &&\n            (null == (n = t[0].chart.chartController) ? void 0 : n.chart)\n          ? 3\n          : -1;'
assert content.count(old_s_fn) == 1, f"Expected 1 match for s() fn, got {content.count(old_s_fn)}"
content = content.replace(old_s_fn, new_s_fn, 1)

# ── 5. Update sidebar visibility condition to include signals ─────────────────
old_vis = '    (t[7].depthOfMarket ||\n      t[7].tree ||'
new_vis = '    (t[7].depthOfMarket ||\n      t[7].tree ||\n      t[7].signals ||'
assert content.count(old_vis) == 1, f"Expected 1 match for visibility condition, got {content.count(old_vis)}"
content = content.replace(old_vis, new_vis, 1)

# also second occurrence of visibility check (inside p() block)
old_vis2 = '        t[7].depthOfMarket ||\n        t[7].tree ||'
new_vis2 = '        t[7].depthOfMarket ||\n        t[7].tree ||\n        t[7].signals ||'
assert content.count(old_vis2) == 1, f"Expected 1 match for visibility condition2, got {content.count(old_vis2)}"
content = content.replace(old_vis2, new_vis2, 1)

# ── 6. Add signals button Q_sg declaration in _a (before return) ─────────────
old_a_return = '  return {\n    c() {\n      ((e = L("div")),\n        (n = L("div")),\n        et(o.$$.fragment),\n        (l = V()),\n        (i = L("div")),\n        et(s.$$.fragment),\n        (u = V()),\n        et(d.$$.fragment),\n        (m = V()),\n        v.c(),\n        (C = V()),\n        P && P.c(),\n        (b = V()),\n        N && N.c(),\n        (x = U()),'
new_a_return = '  let Q_sg = (function (t) {\n    let e, n, o;\n    return (\n      (n = new Xs({\n        props: {\n          icon: Ho,\n          checked: t[4].signals,\n          title: window.tr(window.lang.chart.signals.title),\n        },\n      })),\n      n.$on("click", t[17]),\n      {\n        c() {\n          ((e = L("div")),\n            et(n.$$.fragment),\n            w(e, "class", "group svelte-1xnpsl6"));\n        },\n        m(t, r) {\n          ($(t, e, r), tt(n, e, null), (o = !0));\n        },\n        p(t, e) {\n          const o = {};\n          (16 & e && (o.checked = t[4].signals),\n            n.$set(o));\n        },\n        i(t) {\n          o || (S(n.$$.fragment, t), (o = !0));\n        },\n        o(t) {\n          (y(n.$$.fragment, t), (o = !1));\n        },\n        d(t) {\n          (t && h(e), G(n));\n        },\n      }\n    );\n  })(t);\n  return {\n    c() {\n      ((e = L("div")),\n        (n = L("div")),\n        et(o.$$.fragment),\n        (l = V()),\n        (i = L("div")),\n        et(s.$$.fragment),\n        (u = V()),\n        et(d.$$.fragment),\n        (m = V()),\n        v.c(),\n        (C = V()),\n        P && P.c(),\n        Q_sg && Q_sg.c(),\n        (b = V()),\n        N && N.c(),\n        (x = U()),'
assert content.count(old_a_return) == 1, f"Expected 1 match for _a return, got {content.count(old_a_return)}"
content = content.replace(old_a_return, new_a_return, 1)

# ── 7. Add Q_sg mount in _a m() after P.m ────────────────────────────────────
old_m_p = '        P && P.m(e, null),\n        $(t, b, r),'
new_m_p = '        P && P.m(e, null),\n        Q_sg && Q_sg.m(e, null),\n        $(t, b, r),'
assert content.count(old_m_p) == 1, f"Expected 1 match for m() P.m anchor, got {content.count(old_m_p)}"
content = content.replace(old_m_p, new_m_p, 1)

# ── 8. Add Q_sg update in _a p() after P.p ───────────────────────────────────
old_p_np = '        P.p(ja(t), e),\n        N.p(t, e));'
new_p_np = '        P.p(ja(t), e),\n        Q_sg && Q_sg.p(t, e),\n        N.p(t, e));'
assert content.count(old_p_np) == 1, f"Expected 1 match for p() P.p anchor, got {content.count(old_p_np)}"
content = content.replace(old_p_np, new_p_np, 1)

# ── 9. Add Q_sg in _a i() lifecycle ──────────────────────────────────────────
old_i_life = '        S(P),\n        S(N),'
new_i_life = '        S(P),\n        S(Q_sg),\n        S(N),'
assert content.count(old_i_life) == 1, f"Expected 1 match for i() lifecycle, got {content.count(old_i_life)}"
content = content.replace(old_i_life, new_i_life, 1)

# ── 10. Add Q_sg in _a o() lifecycle ─────────────────────────────────────────
old_o_life = '        y(P),\n        y(N),'
new_o_life = '        y(P),\n        y(Q_sg),\n        y(N),'
assert content.count(old_o_life) == 1, f"Expected 1 match for o() lifecycle, got {content.count(old_o_life)}"
content = content.replace(old_o_life, new_o_life, 1)

# ── 11. Add Q_sg in _a d() after P.d ─────────────────────────────────────────
old_d_p = '        P && P.d(),\n        N && N.d(t));'
new_d_p = '        P && P.d(),\n        Q_sg && Q_sg.d(),\n        N && N.d(t));'
assert content.count(old_d_p) == 1, f"Expected 1 match for d() P.d anchor, got {content.count(old_d_p)}"
content = content.replace(old_d_p, new_d_p, 1)

# ── 12. Add signals toggle handler t[17] in qa context array ─────────────────
old_qa_last = '      () => y(c.Journal),\n    ]\n  );\n}\nclass Aa extends u {'
new_qa_last = '      () => y(c.Journal),\n      function () {\n        o.setLayout({ signals: !o.signals, tree: !1, depthOfMarket: !1 });\n      },\n    ]\n  );\n}\nclass Aa extends u {'
assert content.count(old_qa_last) == 1, f"Expected 1 match for qa last entry, got {content.count(old_qa_last)}"
content = content.replace(old_qa_last, new_qa_last, 1)

# ── 13. Add signals:!1 to tree toggle in qa (tree resets signals) ─────────────
old_tree_toggle = "    : o.setLayout({ tree: !o.tree, depthOfMarket: !1 });"
new_tree_toggle = "    : o.setLayout({ tree: !o.tree, depthOfMarket: !1, signals: !1 });"
assert content.count(old_tree_toggle) == 1, f"Expected 1 match for tree toggle, got {content.count(old_tree_toggle)}"
content = content.replace(old_tree_toggle, new_tree_toggle, 1)

# ── 14. Add signals:!1 to DOM toggle in qa (DOM resets signals) ───────────────
old_dom_toggle = "    : o.setLayout({ depthOfMarket: !o.depthOfMarket, tree: !1 });"
new_dom_toggle = "    : o.setLayout({ depthOfMarket: !o.depthOfMarket, tree: !1, signals: !1 });"
assert content.count(old_dom_toggle) == 1, f"Expected 1 match for DOM toggle, got {content.count(old_dom_toggle)}"
content = content.replace(old_dom_toggle, new_dom_toggle, 1)

# ── 15. Add signals:!1 to the "hide all left panels" handler in Gp ────────────
old_hide_all = '      r.setLayout({\n          depthOfMarket: !1,\n          tree: !1,\n          tradeCreate: null,\n          tradeEdit: !1,\n        }),'
new_hide_all = '      r.setLayout({\n          depthOfMarket: !1,\n          tree: !1,\n          signals: !1,\n          tradeCreate: null,\n          tradeEdit: !1,\n        }),'
assert content.count(old_hide_all) == 1, f"Expected 1 match for hide all, got {content.count(old_hide_all)}"
content = content.replace(old_hide_all, new_hide_all, 1)

# ── 16. Add t[23] (signals close handler) in Gp context array ─────────────────
old_gp_last = '      function (e) {\n        t.$$.not_equal(r.contacts, e) && ((r.contacts = e), f.set(r));\n      },\n    ]\n  );\n}\nconst tm = Object.freeze('
new_gp_last = '      function (e) {\n        t.$$.not_equal(r.contacts, e) && ((r.contacts = e), f.set(r));\n      },\n      function () {\n        q(f, (r.signals = !1), r);\n      },\n    ]\n  );\n}\nconst tm = Object.freeze('
assert content.count(old_gp_last) == 1, f"Expected 1 match for Gp last entry, got {content.count(old_gp_last)}"
content = content.replace(old_gp_last, new_gp_last, 1)

with open('terminal/CezRPkQL.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done. CezRPkQL.js updated.")
