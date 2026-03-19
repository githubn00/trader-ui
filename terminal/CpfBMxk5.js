import {
  S as t,
  i as e,
  s as l,
  r as n,
  t as s,
  g as o,
  u as i,
  v as c,
  n as r,
  Y as a,
  d as u,
  Z as d,
  b as v,
  e as m,
  f as h,
  a4 as f,
  c as y,
  m as g,
  k,
  l as w,
  o as p,
} from "./CHj1SSsY.js";
import { D as $, e as q, K as x } from "./CQSQNu0h.js";
import { P as S, I as C, i as j } from "./C8gngcK2.js";
function b(t, e, l) {
  const n = t.slice();
  return ((n[10] = e[l]), n);
}
function I(t, e, l) {
  var n, s;
  const o = t.slice();
  o[13] = e[l];
  const i =
    null == (s = null == (n = o[0].hotkeys[o[13]]) ? void 0 : n[0])
      ? void 0
      : s.keyCode;
  return ((o[14] = i), o);
}
function N(t) {
  let e;
  return {
    c() {
      ((e = m("div")),
        (e.textContent = j() ? "⌥" : "alt"),
        h(e, "class", "key svelte-qs7nc3"),
        h(e, "title", j() ? "option" : "alt"));
    },
    m(t, l) {
      v(t, e, l);
    },
    d(t) {
      t && u(e);
    },
  };
}
function O(t) {
  let e;
  return {
    c() {
      ((e = m("div")),
        (e.textContent = "ctrl"),
        h(e, "class", "key svelte-qs7nc3"));
    },
    m(t, l) {
      v(t, e, l);
    },
    d(t) {
      t && u(e);
    },
  };
}
function T(t) {
  let e;
  return {
    c() {
      ((e = m("div")),
        (e.textContent = j() ? "⌘" : "WIN"),
        h(e, "class", "key svelte-qs7nc3"),
        h(e, "title", j() ? "command" : "WIN"));
    },
    m(t, l) {
      v(t, e, l);
    },
    d(t) {
      t && u(e);
    },
  };
}
function W(t) {
  let e;
  return {
    c() {
      ((e = m("div")),
        (e.textContent = "shift"),
        h(e, "class", "key svelte-qs7nc3"));
    },
    m(t, l) {
      v(t, e, l);
    },
    d(t) {
      t && u(e);
    },
  };
}
function D(t) {
  let e,
    l,
    n = x[t[14]] + "";
  return {
    c() {
      var s, o;
      ((e = m("div")),
        (l = p(n)),
        h(e, "class", "key small svelte-qs7nc3"),
        w(
          e,
          "mouse",
          null == (o = null == (s = t[0].hotkeys[t[13]]) ? void 0 : s[0])
            ? void 0
            : o.mouse,
        ));
    },
    m(t, n) {
      (v(t, e, n), y(e, l));
    },
    p(t, s) {
      var o, i;
      (1 & s && n !== (n = x[t[14]] + "") && k(l, n),
        5 & s &&
          w(
            e,
            "mouse",
            null == (i = null == (o = t[0].hotkeys[t[13]]) ? void 0 : o[0])
              ? void 0
              : i.mouse,
          ));
    },
    d(t) {
      t && u(e);
    },
  };
}
function J(t) {
  var e, l, n, s, o, i, c, r;
  let a,
    d,
    f,
    k,
    w,
    p,
    $,
    x,
    S =
      (null == (l = null == (e = t[0].hotkeys[t[13]]) ? void 0 : e[0])
        ? void 0
        : l.alt) && N(),
    C =
      (null == (s = null == (n = t[0].hotkeys[t[13]]) ? void 0 : n[0])
        ? void 0
        : s.ctrl) && O(),
    j =
      (null == (i = null == (o = t[0].hotkeys[t[13]]) ? void 0 : o[0])
        ? void 0
        : i.meta) && T(),
    b =
      (null == (r = null == (c = t[0].hotkeys[t[13]]) ? void 0 : c[0])
        ? void 0
        : r.shift) && W(),
    I = t[14] && D(t);
  return {
    c() {
      ((a = m("div")),
        (d = m("div")),
        (d.textContent = `${q(t[13])}`),
        (f = g()),
        (k = m("div")),
        S && S.c(),
        (w = g()),
        C && C.c(),
        (p = g()),
        j && j.c(),
        ($ = g()),
        b && b.c(),
        (x = g()),
        I && I.c(),
        h(d, "class", "shortcut-title svelte-qs7nc3"),
        h(k, "class", "keys svelte-qs7nc3"),
        h(a, "class", "shortcut svelte-qs7nc3"));
    },
    m(t, e) {
      (v(t, a, e),
        y(a, d),
        y(a, f),
        y(a, k),
        S && S.m(k, null),
        y(k, w),
        C && C.m(k, null),
        y(k, p),
        j && j.m(k, null),
        y(k, $),
        b && b.m(k, null),
        y(k, x),
        I && I.m(k, null));
    },
    p(t, e) {
      var l, n, s, o, i, c, r, a;
      ((
        null == (n = null == (l = t[0].hotkeys[t[13]]) ? void 0 : l[0])
          ? void 0
          : n.alt
      )
        ? S || ((S = N()), S.c(), S.m(k, w))
        : S && (S.d(1), (S = null)),
        (
          null == (o = null == (s = t[0].hotkeys[t[13]]) ? void 0 : s[0])
            ? void 0
            : o.ctrl
        )
          ? C || ((C = O()), C.c(), C.m(k, p))
          : C && (C.d(1), (C = null)),
        (
          null == (c = null == (i = t[0].hotkeys[t[13]]) ? void 0 : i[0])
            ? void 0
            : c.meta
        )
          ? j || ((j = T()), j.c(), j.m(k, $))
          : j && (j.d(1), (j = null)),
        (
          null == (a = null == (r = t[0].hotkeys[t[13]]) ? void 0 : r[0])
            ? void 0
            : a.shift
        )
          ? b || ((b = W()), b.c(), b.m(k, x))
          : b && (b.d(1), (b = null)),
        t[14]
          ? I
            ? I.p(t, e)
            : ((I = D(t)), I.c(), I.m(k, null))
          : I && (I.d(1), (I = null)));
    },
    d(t) {
      (t && u(a), S && S.d(), C && C.d(), j && j.d(), b && b.d(), I && I.d());
    },
  };
}
function K(t) {
  let e,
    l,
    n,
    s,
    o = a(t[10].list),
    i = [];
  for (let c = 0; c < o.length; c += 1) i[c] = J(I(t, o, c));
  return {
    c() {
      ((e = m("div")),
        (l = m("div")),
        (l.textContent = `${t[10].title}`),
        (n = g()));
      for (let t = 0; t < i.length; t += 1) i[t].c();
      ((s = g()),
        h(l, "class", "group-title svelte-qs7nc3"),
        h(e, "class", "group svelte-qs7nc3"));
    },
    m(t, o) {
      (v(t, e, o), y(e, l), y(e, n));
      for (let l = 0; l < i.length; l += 1) i[l] && i[l].m(e, null);
      y(e, s);
    },
    p(t, l) {
      if (5 & l) {
        let n;
        for (o = a(t[10].list), n = 0; n < o.length; n += 1) {
          const c = I(t, o, n);
          i[n] ? i[n].p(c, l) : ((i[n] = J(c)), i[n].c(), i[n].m(e, s));
        }
        for (; n < i.length; n += 1) i[n].d(1);
        i.length = o.length;
      }
    },
    d(t) {
      (t && u(e), d(i, t));
    },
  };
}
function L(t) {
  let e,
    l = a(Object.values(t[2])),
    n = [];
  for (let s = 0; s < l.length; s += 1) n[s] = K(b(t, l, s));
  return {
    c() {
      e = m("div");
      for (let t = 0; t < n.length; t += 1) n[t].c();
      h(e, "class", "content svelte-qs7nc3");
    },
    m(t, l) {
      v(t, e, l);
      for (let s = 0; s < n.length; s += 1) n[s] && n[s].m(e, null);
    },
    p(t, s) {
      if (5 & s) {
        let o;
        for (l = a(Object.values(t[2])), o = 0; o < l.length; o += 1) {
          const i = b(t, l, o);
          n[o] ? n[o].p(i, s) : ((n[o] = K(i)), n[o].c(), n[o].m(e, null));
        }
        for (; o < n.length; o += 1) n[o].d(1);
        n.length = l.length;
      }
    },
    d(t) {
      (t && u(e), d(n, t));
    },
  };
}
function P(t) {
  let e, l;
  return (
    (e = new C({ props: { slot: "close", name: $ } })),
    {
      c() {
        c(e.$$.fragment);
      },
      m(t, n) {
        (i(e, t, n), (l = !0));
      },
      p: r,
      i(t) {
        l || (o(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        (s(e.$$.fragment, t), (l = !1));
      },
      d(t) {
        n(e, t);
      },
    }
  );
}
function Y(t) {
  let e, l;
  return (
    (e = new S({
      props: {
        title: window.tr(window.lang.ui.hotkeys.title),
        draggable: !0,
        $$slots: { close: [P], default: [L] },
        $$scope: { ctx: t },
      },
    })),
    e.$on("close", t[3]),
    {
      c() {
        c(e.$$.fragment);
      },
      m(t, n) {
        (i(e, t, n), (l = !0));
      },
      p(t, [l]) {
        const n = {};
        (131073 & l && (n.$$scope = { dirty: l, ctx: t }), e.$set(n));
      },
      i(t) {
        l || (o(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        (s(e.$$.fragment, t), (l = !1));
      },
      d(t) {
        n(e, t);
      },
    }
  );
}
function Z(t, e, l) {
  let n,
    s = r,
    o = () => (s(), (s = f(c, (t) => l(4, (n = t)))), c);
  t.$$.on_destroy.push(() => s());
  let { hotkeysStore: i } = e,
    { layoutStore: c } = e;
  o();
  const a = {
    navigation: {
      title: window.tr(window.lang.ui.hotkeys.sections.navigation),
      list: [0, 5, 6, 4, 7, 8, 1, 2, 3],
    },
    drawing: {
      title: window.tr(window.lang.chart.hotkeys.sections.drawing),
      list: [15, 16, 17, 18, 19, 20, 21, 22, 38],
    },
    chartType: {
      title: window.tr(window.lang.chart.hotkeys.sections.chartType),
      list: [9, 10, 11, 12],
    },
    volume: {
      title: window.tr(window.lang.chart.hotkeys.sections.volume),
      list: [13, 14],
    },
    view: {
      title: window.tr(window.lang.ui.hotkeys.sections.view),
      list: [23, 24, 27, 28, 29, 30, 31, 32, 33],
    },
  };
  return (
    (t.$$set = (t) => {
      ("hotkeysStore" in t && l(0, (i = t.hotkeysStore)),
        "layoutStore" in t && o(l(1, (c = t.layoutStore))));
    }),
    [
      i,
      c,
      a,
      function () {
        n.setLayout({ hotkeys: !1 });
      },
    ]
  );
}
class _ extends t {
  constructor(t) {
    (super(), e(this, t, Z, Y, l, { hotkeysStore: 0, layoutStore: 1 }));
  }
}
export { _ as default };
