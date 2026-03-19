import {
  S as e,
  i as t,
  s as n,
  N as s,
  a2 as a,
  d as o,
  r,
  t as c,
  g as i,
  a3 as l,
  b as $,
  c as d,
  u as m,
  e as u,
  m as f,
  v as p,
  f as w,
  n as g,
  L as k,
  o as v,
  a4 as C,
} from "./CHj1SSsY.js";
import { C as b, B as x } from "./C8gngcK2.js";
function S(e) {
  let t,
    n = window.tr(window.lang.trade.oneClickDisclaimer.acceptCheckbox) + "";
  return {
    c() {
      t = v(n);
    },
    m(e, n) {
      $(e, t, n);
    },
    p: g,
    d(e) {
      e && o(t);
    },
  };
}
function y(e) {
  let t,
    n = window.tr(window.lang.trade.oneClickDisclaimer.btnCancel) + "";
  return {
    c() {
      t = v(n);
    },
    m(e, n) {
      $(e, t, n);
    },
    p: g,
    d(e) {
      e && o(t);
    },
  };
}
function h(e) {
  let t,
    n = window.tr(window.lang.trade.oneClickDisclaimer.btnAccept) + "";
  return {
    c() {
      t = v(n);
    },
    m(e, n) {
      $(e, t, n);
    },
    p: g,
    d(e) {
      e && o(t);
    },
  };
}
function N(e) {
  let t,
    n,
    g,
    k,
    v,
    C,
    N,
    D,
    q,
    L,
    j,
    H,
    M =
      window.tr(window.lang.trade.oneClickDisclaimer.text, {
        companyName: e[1],
      }) + "";
  function T(t) {
    e[7](t);
  }
  let A = { $$slots: { default: [S] }, $$scope: { ctx: e } };
  return (
    void 0 !== e[2] && (A.checked = e[2]),
    (v = new b({ props: A })),
    s.push(() => a(v, "checked", T)),
    (q = new x({ props: { $$slots: { default: [y] }, $$scope: { ctx: e } } })),
    q.$on("click", e[3]),
    (j = new x({
      props: {
        disabled: !e[2],
        active: !0,
        $$slots: { default: [h] },
        $$scope: { ctx: e },
      },
    })),
    j.$on("click", e[4]),
    {
      c() {
        ((t = u("div")),
          (n = u("div")),
          (g = f()),
          (k = u("div")),
          p(v.$$.fragment),
          (N = f()),
          (D = u("div")),
          p(q.$$.fragment),
          (L = f()),
          p(j.$$.fragment),
          w(n, "class", "content svelte-1f38vq9"),
          w(D, "class", "buttons svelte-1f38vq9"),
          w(k, "class", "controls svelte-1f38vq9"),
          w(t, "class", "wrapper svelte-1f38vq9"));
      },
      m(e, s) {
        ($(e, t, s),
          d(t, n),
          (n.innerHTML = M),
          d(t, g),
          d(t, k),
          m(v, k, null),
          d(k, N),
          d(k, D),
          m(q, D, null),
          d(D, L),
          m(j, D, null),
          (H = !0));
      },
      p(e, [t]) {
        (!H || 2 & t) &&
          M !==
            (M =
              window.tr(window.lang.trade.oneClickDisclaimer.text, {
                companyName: e[1],
              }) + "") &&
          (n.innerHTML = M);
        const s = {};
        (512 & t && (s.$$scope = { dirty: t, ctx: e }),
          !C && 4 & t && ((C = !0), (s.checked = e[2]), l(() => (C = !1))),
          v.$set(s));
        const a = {};
        (512 & t && (a.$$scope = { dirty: t, ctx: e }), q.$set(a));
        const o = {};
        (4 & t && (o.disabled = !e[2]),
          512 & t && (o.$$scope = { dirty: t, ctx: e }),
          j.$set(o));
      },
      i(e) {
        H ||
          (i(v.$$.fragment, e),
          i(q.$$.fragment, e),
          i(j.$$.fragment, e),
          (H = !0));
      },
      o(e) {
        (c(v.$$.fragment, e),
          c(q.$$.fragment, e),
          c(j.$$.fragment, e),
          (H = !1));
      },
      d(e) {
        (e && o(t), r(v), r(q), r(j));
      },
    }
  );
}
function D(e, t, n) {
  let s,
    a = g,
    o = () => (a(), (a = C(r, (e) => n(6, (s = e)))), r);
  e.$$.on_destroy.push(() => a());
  let { userSettingsStore: r } = t;
  o();
  let { brokerName: c } = t;
  const i = k();
  let l, $;
  return (
    (e.$$set = (e) => {
      ("userSettingsStore" in e && o(n(0, (r = e.userSettingsStore))),
        "brokerName" in e && n(1, (c = e.brokerName)));
    }),
    (e.$$.update = () => {
      (64 & e.$$.dirty && n(5, (l = 1 === s.oneClick)),
        32 & e.$$.dirty && n(2, ($ = l)));
    }),
    [
      r,
      c,
      $,
      function () {
        (0 === s.oneClick && s.setSettings({ oneClick: 2 }),
          i("close", { agreement: !1 }));
      },
      function () {
        $ && (s.setSettings({ oneClick: 1 }), i("close", { agreement: !0 }));
      },
      l,
      s,
      function (e) {
        (($ = e), n(2, $), n(5, l), n(6, s));
      },
    ]
  );
}
class q extends e {
  constructor(e) {
    (super(), t(this, e, D, N, n, { userSettingsStore: 0, brokerName: 1 }));
  }
}
export { q as default };
