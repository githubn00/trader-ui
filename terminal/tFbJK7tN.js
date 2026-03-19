import {
  S as t,
  i as e,
  s as o,
  N as n,
  a2 as r,
  d as s,
  r as i,
  t as $,
  g as l,
  a3 as c,
  b as a,
  c as d,
  u as p,
  C as u,
  e as m,
  v as f,
  m as g,
  f as y,
  o as h,
  k as w,
  l as x,
  E as S,
  h as v,
  j as b,
  D as k,
  n as C,
  a4 as D,
  a as P,
  Y as O,
  Z as U,
  I as T,
  Q as H,
} from "./CHj1SSsY.js";
import {
  n as B,
  X as A,
  J as _,
  Y as M,
  Z as z,
  $ as V,
  a0 as N,
  a1 as I,
  a2 as j,
  a3 as q,
  a4 as F,
  a5 as Y,
  h as R,
  a6 as L,
} from "./CQSQNu0h.js";
import { a as J, I as W, d as X } from "./C8gngcK2.js";
import {
  T as Z,
  h as E,
  i as Q,
  V as G,
  c as K,
  k as tt,
  l as et,
  C as ot,
  M as nt,
} from "./CezRPkQL.js";
import "./CSht1uUK.js";
import "./Y63yw9rt.js";
import "./CRNNNCwz.js";
import "./BmK36PA1.js";
import "./BLCxo5ZN.js";
function rt(t) {
  let e;
  return {
    c() {
      e = h("—");
    },
    m(t, o) {
      a(t, e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function st(t) {
  let e, o, h, w, x, S, v, b, k, C, D, P, O, U, T;
  function H(e) {
    t[10](e);
  }
  let A = { name: "dateFrom", type: "date", min: t[5], max: t[3] };
  (void 0 !== t[2] && (A.value = t[2]),
    (h = new J({ props: A })),
    n.push(() => r(h, "value", H)));
  let _ = t[0] && rt();
  function M(e) {
    t[11](e);
  }
  let z = { name: "dateTo", type: "date", min: t[4], max: t[6] };
  return (
    void 0 !== t[1] && (z.value = t[1]),
    (b = new J({ props: z })),
    n.push(() => r(b, "value", M)),
    (P = new W({ props: { name: B } })),
    {
      c() {
        ((e = m("div")),
          (o = m("div")),
          f(h.$$.fragment),
          (x = g()),
          _ && _.c(),
          (S = g()),
          (v = m("div")),
          f(b.$$.fragment),
          (C = g()),
          (D = m("button")),
          f(P.$$.fragment),
          y(o, "class", "input svelte-1th6mmf"),
          y(v, "class", "input svelte-1th6mmf"),
          y(D, "class", "close svelte-1th6mmf"),
          y(D, "type", "button"),
          y(e, "class", "period svelte-1th6mmf"));
      },
      m(n, r) {
        (a(n, e, r),
          d(e, o),
          p(h, o, null),
          d(e, x),
          _ && _.m(e, null),
          d(e, S),
          d(e, v),
          p(b, v, null),
          d(e, C),
          d(e, D),
          p(P, D, null),
          (O = !0),
          U || ((T = u(D, "click", t[7])), (U = !0)));
      },
      p(t, [o]) {
        const n = {};
        (8 & o && (n.max = t[3]),
          !w && 4 & o && ((w = !0), (n.value = t[2]), c(() => (w = !1))),
          h.$set(n),
          t[0]
            ? _ || ((_ = rt()), _.c(), _.m(e, S))
            : _ && (_.d(1), (_ = null)));
        const r = {};
        (16 & o && (r.min = t[4]),
          !k && 2 & o && ((k = !0), (r.value = t[1]), c(() => (k = !1))),
          b.$set(r));
      },
      i(t) {
        O ||
          (l(h.$$.fragment, t),
          l(b.$$.fragment, t),
          l(P.$$.fragment, t),
          (O = !0));
      },
      o(t) {
        ($(h.$$.fragment, t),
          $(b.$$.fragment, t),
          $(P.$$.fragment, t),
          (O = !1));
      },
      d(t) {
        (t && s(e), i(h), _ && _.d(), i(b), i(P), (U = !1), T());
      },
    }
  );
}
function it(t, e = !1) {
  const o = new Date(t);
  return (
    o.setUTCMilliseconds(0),
    o.setUTCSeconds(e ? 59 : 0),
    o.setUTCMinutes(e ? 59 : 0),
    o.setUTCHours(e ? 23 : 0),
    o.getTime()
  );
}
function $t(t, e, o) {
  let n,
    { historyStore: r } = e,
    { historyController: s } = e,
    { mobile: i = !1 } = e,
    $ = it(new Date().getTime(), !0);
  if (0 === r.prevPeriod) n = 0;
  else {
    const t = new Date(it(new Date().getTime()));
    switch (r.prevPeriod) {
      case 1:
        t.setUTCDate(t.getUTCDate() - 1);
        break;
      case 2:
        t.setUTCDate(t.getUTCDate() - 7);
        break;
      case 3:
      default:
        t.setUTCMonth(t.getUTCMonth() - 1);
        break;
      case 4:
        t.setUTCMonth(t.getUTCMonth() - 3);
        break;
      case 5:
        t.setUTCMonth(t.getUTCMonth() - 6);
        break;
      case 6:
        t.setUTCFullYear(t.getUTCFullYear() - 1);
    }
    n = t.getTime();
  }
  const l = new Date(0).toISOString().split("T")[0],
    c = new Date().toISOString().split("T")[0];
  let a, d;
  return (
    (t.$$set = (t) => {
      ("historyStore" in t && o(8, (r = t.historyStore)),
        "historyController" in t && o(9, (s = t.historyController)),
        "mobile" in t && o(0, (i = t.mobile)));
    }),
    (t.$$.update = () => {
      (6 & t.$$.dirty &&
        (o(3, ([a] = new Date(it($, !0)).toISOString().split("T")), a),
        o(4, ([d] = new Date(it(n)).toISOString().split("T")), d)),
        518 & t.$$.dirty &&
          s.loadHistory(-1, { from: it(n) / 1e3, to: it($, !0) / 1e3 }));
    }),
    [
      i,
      $,
      n,
      a,
      d,
      l,
      c,
      function () {
        const t = -1 !== r.prevPeriod ? r.prevPeriod : 3;
        s.setPeriod(t);
      },
      r,
      s,
      function (t) {
        ((n = t), o(2, n));
      },
      function (t) {
        (($ = t), o(1, $));
      },
    ]
  );
}
class lt extends t {
  constructor(t) {
    (super(),
      e(this, t, $t, st, o, {
        historyStore: 8,
        historyController: 9,
        mobile: 0,
      }));
  }
}
function ct(t) {
  let e,
    o = A(t[0].timeCreate) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      1 & n && o !== (o = A(t[0].timeCreate) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function at(t) {
  let e,
    o = t[0].deal + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      1 & n && o !== (o = t[0].deal + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function dt(t) {
  let e;
  return {
    c() {
      e = h(t[1]);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, o) {
      2 & o && w(e, t[1]);
    },
    d(t) {
      t && s(e);
    },
  };
}
function pt(t) {
  let e,
    o,
    n = _(t[0].profit ?? 0, t[0].digitsCurrency) + "";
  return {
    c() {
      ((e = m("div")),
        (o = h(n)),
        y(e, "class", "svelte-1orrocn"),
        x(e, "blue", Math.sign(t[0].profit ?? 0) > 0),
        x(e, "red", Math.sign(t[0].profit ?? 0) < 0));
    },
    m(t, n) {
      (a(t, e, n), d(e, o));
    },
    p(t, r) {
      (1 & r &&
        n !== (n = _(t[0].profit ?? 0, t[0].digitsCurrency) + "") &&
        w(o, n),
        1 & r && x(e, "blue", Math.sign(t[0].profit ?? 0) > 0),
        1 & r && x(e, "red", Math.sign(t[0].profit ?? 0) < 0));
    },
    d(t) {
      t && s(e);
    },
  };
}
function ut(t) {
  let e,
    o = t[0].comment + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      1 & n && o !== (o = t[0].comment + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function mt(t) {
  let e, o, n, r, c, d, u, m, y, h, w, x, S, v, b, k;
  return (
    (e = new E({
      props: {
        index: 0,
        title: A(t[0].timeCreate),
        $$slots: { default: [ct] },
        $$scope: { ctx: t },
      },
    })),
    (n = new E({
      props: {
        index: 1,
        title: t[0].deal,
        $$slots: { default: [at] },
        $$scope: { ctx: t },
      },
    })),
    (c = new E({ props: { index: 2 } })),
    (u = new E({ props: { index: 3 } })),
    (y = new E({
      props: {
        index: 4,
        title: t[1],
        $$slots: { default: [dt] },
        $$scope: { ctx: t },
      },
    })),
    (w = new E({ props: { index: 5, colspan: [6, 12] } })),
    (S = new E({
      props: {
        index: 11,
        title: _(t[0].profit ?? 0, t[0].digitsCurrency),
        $$slots: { default: [pt] },
        $$scope: { ctx: t },
      },
    })),
    (b = new E({
      props: {
        index: 12,
        title: t[0].comment,
        $$slots: { default: [ut] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (f(e.$$.fragment),
          (o = g()),
          f(n.$$.fragment),
          (r = g()),
          f(c.$$.fragment),
          (d = g()),
          f(u.$$.fragment),
          (m = g()),
          f(y.$$.fragment),
          (h = g()),
          f(w.$$.fragment),
          (x = g()),
          f(S.$$.fragment),
          (v = g()),
          f(b.$$.fragment));
      },
      m(t, s) {
        (p(e, t, s),
          a(t, o, s),
          p(n, t, s),
          a(t, r, s),
          p(c, t, s),
          a(t, d, s),
          p(u, t, s),
          a(t, m, s),
          p(y, t, s),
          a(t, h, s),
          p(w, t, s),
          a(t, x, s),
          p(S, t, s),
          a(t, v, s),
          p(b, t, s),
          (k = !0));
      },
      p(t, o) {
        const r = {};
        (1 & o && (r.title = A(t[0].timeCreate)),
          9 & o && (r.$$scope = { dirty: o, ctx: t }),
          e.$set(r));
        const s = {};
        (1 & o && (s.title = t[0].deal),
          9 & o && (s.$$scope = { dirty: o, ctx: t }),
          n.$set(s));
        const i = {};
        (2 & o && (i.title = t[1]),
          10 & o && (i.$$scope = { dirty: o, ctx: t }),
          y.$set(i));
        const $ = {};
        (1 & o && ($.title = _(t[0].profit ?? 0, t[0].digitsCurrency)),
          9 & o && ($.$$scope = { dirty: o, ctx: t }),
          S.$set($));
        const l = {};
        (1 & o && (l.title = t[0].comment),
          9 & o && (l.$$scope = { dirty: o, ctx: t }),
          b.$set(l));
      },
      i(t) {
        k ||
          (l(e.$$.fragment, t),
          l(n.$$.fragment, t),
          l(c.$$.fragment, t),
          l(u.$$.fragment, t),
          l(y.$$.fragment, t),
          l(w.$$.fragment, t),
          l(S.$$.fragment, t),
          l(b.$$.fragment, t),
          (k = !0));
      },
      o(t) {
        ($(e.$$.fragment, t),
          $(n.$$.fragment, t),
          $(c.$$.fragment, t),
          $(u.$$.fragment, t),
          $(y.$$.fragment, t),
          $(w.$$.fragment, t),
          $(S.$$.fragment, t),
          $(b.$$.fragment, t),
          (k = !1));
      },
      d(t) {
        (t && (s(o), s(r), s(d), s(m), s(h), s(x), s(v)),
          i(e, t),
          i(n, t),
          i(c, t),
          i(u, t),
          i(y, t),
          i(w, t),
          i(S, t),
          i(b, t));
      },
    }
  );
}
function ft(t) {
  let e, o;
  return (
    (e = new Z({ props: { $$slots: { default: [mt] }, $$scope: { ctx: t } } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, [o]) {
        const n = {};
        (11 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function gt(t, e, o) {
  let n,
    { dealUtils: r } = e,
    { item: s } = e;
  return (
    (t.$$set = (t) => {
      ("dealUtils" in t && o(2, (r = t.dealUtils)),
        "item" in t && o(0, (s = t.item)));
    }),
    (t.$$.update = () => {
      5 & t.$$.dirty && o(1, (n = r.printAction(s.action)));
    }),
    [s, n, r]
  );
}
let yt = class extends t {
  constructor(t) {
    (super(), e(this, t, gt, ft, o, { dealUtils: 2, item: 0 }));
  }
};
function ht(t) {
  let e,
    o = A(t[1].timeCreate) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = A(t[1].timeCreate) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function wt(t) {
  let e,
    o = t[1].deal + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = t[1].deal + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function xt(t) {
  let e,
    o = t[1].order + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = t[1].order + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function St(t) {
  let e,
    o = t[1].symbol + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = t[1].symbol + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function vt(t) {
  let e,
    o,
    n = t[0].printAction(t[1].action) + "";
  return {
    c() {
      ((e = m("div")),
        (o = h(n)),
        y(e, "class", "svelte-1hstgo1"),
        x(e, "blue", t[0].isBuy(t[1].action)),
        x(e, "red", t[0].isSell(t[1].action)));
    },
    m(t, n) {
      (a(t, e, n), d(e, o));
    },
    p(t, r) {
      (3 & r && n !== (n = t[0].printAction(t[1].action) + "") && w(o, n),
        3 & r && x(e, "blue", t[0].isBuy(t[1].action)),
        3 & r && x(e, "red", t[0].isSell(t[1].action)));
    },
    d(t) {
      t && s(e);
    },
  };
}
function bt(t) {
  let e,
    o = t[1].entry + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = t[1].entry + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function kt(t) {
  let e,
    o = t[1].volume + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = t[1].volume + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Ct(t) {
  let e,
    o,
    n = _(t[1].priceOpen, t[1].digits) + "";
  return {
    c() {
      ((e = m("span")),
        (o = h(n)),
        y(e, "class", "svelte-1hstgo1"),
        x(e, "close-by-sl", t[3]),
        x(e, "close-by-tp", t[4]));
    },
    m(t, n) {
      (a(t, e, n), d(e, o));
    },
    p(t, r) {
      (2 & r && n !== (n = _(t[1].priceOpen, t[1].digits) + "") && w(o, n),
        8 & r && x(e, "close-by-sl", t[3]),
        16 & r && x(e, "close-by-tp", t[4]));
    },
    d(t) {
      t && s(e);
    },
  };
}
function Dt(t) {
  let e;
  return {
    c() {
      e = h(t[6]);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, o) {
      64 & o && w(e, t[6]);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Pt(t) {
  let e;
  return {
    c() {
      e = h(t[7]);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, o) {
      128 & o && w(e, t[7]);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Ot(t) {
  let e;
  return {
    c() {
      e = h(t[8]);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, o) {
      256 & o && w(e, t[8]);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Ut(t) {
  let e, o;
  return {
    c() {
      ((e = m("div")),
        (o = h(t[5])),
        y(e, "class", "svelte-1hstgo1"),
        x(e, "blue", Math.sign(t[1].profit ?? 0) > 0),
        x(e, "red", Math.sign(t[1].profit ?? 0) < 0));
    },
    m(t, n) {
      (a(t, e, n), d(e, o));
    },
    p(t, n) {
      (32 & n && w(o, t[5]),
        2 & n && x(e, "blue", Math.sign(t[1].profit ?? 0) > 0),
        2 & n && x(e, "red", Math.sign(t[1].profit ?? 0) < 0));
    },
    d(t) {
      t && s(e);
    },
  };
}
function Tt(t) {
  let e,
    o = t[1].comment + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = t[1].comment + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Ht(t) {
  let e,
    o,
    n,
    r,
    c,
    d,
    u,
    m,
    y,
    h,
    w,
    x,
    S,
    v,
    b,
    k,
    C,
    D,
    P,
    O,
    U,
    T,
    H,
    B,
    _,
    M;
  return (
    (e = new E({
      props: {
        index: 0,
        title: A(t[1].timeCreate),
        $$slots: { default: [ht] },
        $$scope: { ctx: t },
      },
    })),
    (n = new E({
      props: {
        index: 1,
        title: t[1].deal,
        $$slots: { default: [wt] },
        $$scope: { ctx: t },
      },
    })),
    (c = new E({
      props: {
        index: 2,
        title: t[1].order,
        $$slots: { default: [xt] },
        $$scope: { ctx: t },
      },
    })),
    (u = new E({
      props: {
        index: 3,
        title: t[1].symbol,
        $$slots: { default: [St] },
        $$scope: { ctx: t },
      },
    })),
    (y = new E({
      props: {
        index: 4,
        title: t[0].printAction(t[1].action),
        $$slots: { default: [vt] },
        $$scope: { ctx: t },
      },
    })),
    (w = new E({
      props: {
        index: 5,
        title: String(t[1].entry),
        $$slots: { default: [bt] },
        $$scope: { ctx: t },
      },
    })),
    (S = new E({
      props: {
        index: 6,
        title: t[1].volume,
        $$slots: { default: [kt] },
        $$scope: { ctx: t },
      },
    })),
    (b = new E({
      props: {
        index: 7,
        title: t[3] || t[4] ? t[9] : t[2],
        $$slots: { default: [Ct] },
        $$scope: { ctx: t },
      },
    })),
    (C = new E({
      props: {
        index: 8,
        title: t[6],
        $$slots: { default: [Dt] },
        $$scope: { ctx: t },
      },
    })),
    (P = new E({
      props: {
        index: 9,
        title: t[7],
        $$slots: { default: [Pt] },
        $$scope: { ctx: t },
      },
    })),
    (U = new E({
      props: {
        index: 10,
        title: t[8],
        $$slots: { default: [Ot] },
        $$scope: { ctx: t },
      },
    })),
    (H = new E({
      props: {
        index: 11,
        title: t[5],
        $$slots: { default: [Ut] },
        $$scope: { ctx: t },
      },
    })),
    (_ = new E({
      props: {
        index: 12,
        title: t[1].comment,
        $$slots: { default: [Tt] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (f(e.$$.fragment),
          (o = g()),
          f(n.$$.fragment),
          (r = g()),
          f(c.$$.fragment),
          (d = g()),
          f(u.$$.fragment),
          (m = g()),
          f(y.$$.fragment),
          (h = g()),
          f(w.$$.fragment),
          (x = g()),
          f(S.$$.fragment),
          (v = g()),
          f(b.$$.fragment),
          (k = g()),
          f(C.$$.fragment),
          (D = g()),
          f(P.$$.fragment),
          (O = g()),
          f(U.$$.fragment),
          (T = g()),
          f(H.$$.fragment),
          (B = g()),
          f(_.$$.fragment));
      },
      m(t, s) {
        (p(e, t, s),
          a(t, o, s),
          p(n, t, s),
          a(t, r, s),
          p(c, t, s),
          a(t, d, s),
          p(u, t, s),
          a(t, m, s),
          p(y, t, s),
          a(t, h, s),
          p(w, t, s),
          a(t, x, s),
          p(S, t, s),
          a(t, v, s),
          p(b, t, s),
          a(t, k, s),
          p(C, t, s),
          a(t, D, s),
          p(P, t, s),
          a(t, O, s),
          p(U, t, s),
          a(t, T, s),
          p(H, t, s),
          a(t, B, s),
          p(_, t, s),
          (M = !0));
      },
      p(t, o) {
        const r = {};
        (2 & o && (r.title = A(t[1].timeCreate)),
          2050 & o && (r.$$scope = { dirty: o, ctx: t }),
          e.$set(r));
        const s = {};
        (2 & o && (s.title = t[1].deal),
          2050 & o && (s.$$scope = { dirty: o, ctx: t }),
          n.$set(s));
        const i = {};
        (2 & o && (i.title = t[1].order),
          2050 & o && (i.$$scope = { dirty: o, ctx: t }),
          c.$set(i));
        const $ = {};
        (2 & o && ($.title = t[1].symbol),
          2050 & o && ($.$$scope = { dirty: o, ctx: t }),
          u.$set($));
        const l = {};
        (3 & o && (l.title = t[0].printAction(t[1].action)),
          2051 & o && (l.$$scope = { dirty: o, ctx: t }),
          y.$set(l));
        const a = {};
        (2 & o && (a.title = String(t[1].entry)),
          2050 & o && (a.$$scope = { dirty: o, ctx: t }),
          w.$set(a));
        const d = {};
        (2 & o && (d.title = t[1].volume),
          2050 & o && (d.$$scope = { dirty: o, ctx: t }),
          S.$set(d));
        const p = {};
        (540 & o && (p.title = t[3] || t[4] ? t[9] : t[2]),
          2074 & o && (p.$$scope = { dirty: o, ctx: t }),
          b.$set(p));
        const m = {};
        (64 & o && (m.title = t[6]),
          2112 & o && (m.$$scope = { dirty: o, ctx: t }),
          C.$set(m));
        const f = {};
        (128 & o && (f.title = t[7]),
          2176 & o && (f.$$scope = { dirty: o, ctx: t }),
          P.$set(f));
        const g = {};
        (256 & o && (g.title = t[8]),
          2304 & o && (g.$$scope = { dirty: o, ctx: t }),
          U.$set(g));
        const h = {};
        (32 & o && (h.title = t[5]),
          2082 & o && (h.$$scope = { dirty: o, ctx: t }),
          H.$set(h));
        const x = {};
        (2 & o && (x.title = t[1].comment),
          2050 & o && (x.$$scope = { dirty: o, ctx: t }),
          _.$set(x));
      },
      i(t) {
        M ||
          (l(e.$$.fragment, t),
          l(n.$$.fragment, t),
          l(c.$$.fragment, t),
          l(u.$$.fragment, t),
          l(y.$$.fragment, t),
          l(w.$$.fragment, t),
          l(S.$$.fragment, t),
          l(b.$$.fragment, t),
          l(C.$$.fragment, t),
          l(P.$$.fragment, t),
          l(U.$$.fragment, t),
          l(H.$$.fragment, t),
          l(_.$$.fragment, t),
          (M = !0));
      },
      o(t) {
        ($(e.$$.fragment, t),
          $(n.$$.fragment, t),
          $(c.$$.fragment, t),
          $(u.$$.fragment, t),
          $(y.$$.fragment, t),
          $(w.$$.fragment, t),
          $(S.$$.fragment, t),
          $(b.$$.fragment, t),
          $(C.$$.fragment, t),
          $(P.$$.fragment, t),
          $(U.$$.fragment, t),
          $(H.$$.fragment, t),
          $(_.$$.fragment, t),
          (M = !1));
      },
      d(t) {
        (t &&
          (s(o),
          s(r),
          s(d),
          s(m),
          s(h),
          s(x),
          s(v),
          s(k),
          s(D),
          s(O),
          s(T),
          s(B)),
          i(e, t),
          i(n, t),
          i(c, t),
          i(u, t),
          i(y, t),
          i(w, t),
          i(S, t),
          i(b, t),
          i(C, t),
          i(P, t),
          i(U, t),
          i(H, t),
          i(_, t));
      },
    }
  );
}
function Bt(t) {
  let e, o;
  return (
    (e = new Z({ props: { $$slots: { default: [Ht] }, $$scope: { ctx: t } } })),
    e.$on("mousedown", t[10]),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, [o]) {
        const n = {};
        (3071 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function At(t, e, o) {
  let n,
    r,
    s,
    i,
    $,
    l,
    c,
    a,
    { dealUtils: d } = e,
    { item: p } = e;
  return (
    (t.$$set = (t) => {
      ("dealUtils" in t && o(0, (d = t.dealUtils)),
        "item" in t && o(1, (p = t.item)));
    }),
    (t.$$.update = () => {
      30 & t.$$.dirty &&
        (o(5, (n = _(p.profit ?? 0, p.digitsCurrency))),
        o(6, (r = p.commission ? _(p.commission, p.digitsCurrency) : "")),
        o(7, (s = p.commissionFee ? _(p.commissionFee, p.digitsCurrency) : "")),
        o(8, (i = p.storage ? _(p.storage, p.digitsCurrency) : "")),
        o(2, ($ = _(p.priceOpen, p.digits))),
        o(3, (l = 3 === p.tradeReason)),
        o(4, (c = 4 === p.tradeReason)),
        o(9, (a = `Close by ${l ? "SL" : ""}${c ? "TP" : ""} ${$}`)));
    }),
    [
      d,
      p,
      $,
      l,
      c,
      n,
      r,
      s,
      i,
      a,
      function (e) {
        S.call(this, t, e);
      },
    ]
  );
}
class _t extends t {
  constructor(t) {
    (super(), e(this, t, At, Bt, o, { dealUtils: 0, item: 1 }));
  }
}
function Mt(t) {
  let e, o;
  return (
    (e = new Z({
      props: {
        inactive: !0,
        sticky: !0,
        $$slots: { default: [qt] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (6 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function zt(t) {
  let e,
    o,
    n,
    r,
    i,
    $,
    l,
    c,
    p,
    u,
    f,
    x,
    S,
    v,
    b,
    k,
    C,
    D,
    P,
    O,
    U,
    T,
    H,
    B,
    A,
    M = window.tr(window.lang.trade.history.total.profit) + "",
    z = _(t[1].total.buysell, 2) + "",
    V = window.tr(window.lang.trade.history.total.credit) + "",
    N = _(t[1].total.credit, 2) + "",
    I = window.tr(window.lang.trade.history.total.deposit) + "",
    j = _(t[1].total.deposit, 2) + "",
    q = window.tr(window.lang.trade.history.total.withdrawal) + "",
    F = _(t[1].total.withdrawal, 2) + "",
    Y = window.tr(window.lang.trade.history.total.balance) + "",
    R = _(t[1].total.balance, 2) + "";
  return {
    c() {
      ((e = m("div")),
        (o = m("div")),
        (n = h(M)),
        (r = h(": ")),
        (i = h(z)),
        ($ = g()),
        (l = m("div")),
        (c = h(V)),
        (p = h(": ")),
        (u = h(N)),
        (f = g()),
        (x = m("div")),
        (S = h(I)),
        (v = h(": ")),
        (b = h(j)),
        (k = g()),
        (C = m("div")),
        (D = h(q)),
        (P = h(": ")),
        (O = h(F)),
        (U = g()),
        (T = m("div")),
        (H = h(Y)),
        (B = h(": ")),
        (A = h(R)),
        y(e, "class", "layout svelte-1i9wdgu"));
    },
    m(t, s) {
      (a(t, e, s),
        d(e, o),
        d(o, n),
        d(o, r),
        d(o, i),
        d(e, $),
        d(e, l),
        d(l, c),
        d(l, p),
        d(l, u),
        d(e, f),
        d(e, x),
        d(x, S),
        d(x, v),
        d(x, b),
        d(e, k),
        d(e, C),
        d(C, D),
        d(C, P),
        d(C, O),
        d(e, U),
        d(e, T),
        d(T, H),
        d(T, B),
        d(T, A));
    },
    p(t, e) {
      (2 & e && z !== (z = _(t[1].total.buysell, 2) + "") && w(i, z),
        2 & e && N !== (N = _(t[1].total.credit, 2) + "") && w(u, N),
        2 & e && j !== (j = _(t[1].total.deposit, 2) + "") && w(b, j),
        2 & e && F !== (F = _(t[1].total.withdrawal, 2) + "") && w(O, F),
        2 & e && R !== (R = _(t[1].total.balance, 2) + "") && w(A, R));
    },
    d(t) {
      t && s(e);
    },
  };
}
function Vt(t) {
  let e,
    o = _(t[1].total.commission, 2) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = _(t[1].total.commission, 2) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Nt(t) {
  let e,
    o = _(t[1].total.commissionFee, 2) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = _(t[1].total.commissionFee, 2) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function It(t) {
  let e,
    o = _(t[1].total.swap, 2) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = _(t[1].total.swap, 2) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function jt(t) {
  let e,
    o = _(t[1].total.profit, 2) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = _(t[1].total.profit, 2) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function qt(t) {
  let e, o, n, r, c, d, u, m, y, h, w, x;
  return (
    (e = new E({
      props: {
        index: 0,
        colspan: [1, 9],
        $$slots: { default: [zt] },
        $$scope: { ctx: t },
      },
    })),
    (n = new E({
      props: { index: 8, $$slots: { default: [Vt] }, $$scope: { ctx: t } },
    })),
    (c = new E({
      props: { index: 9, $$slots: { default: [Nt] }, $$scope: { ctx: t } },
    })),
    (u = new E({
      props: { index: 10, $$slots: { default: [It] }, $$scope: { ctx: t } },
    })),
    (y = new E({
      props: { index: 11, $$slots: { default: [jt] }, $$scope: { ctx: t } },
    })),
    (w = new E({ props: { index: 12 } })),
    {
      c() {
        (f(e.$$.fragment),
          (o = g()),
          f(n.$$.fragment),
          (r = g()),
          f(c.$$.fragment),
          (d = g()),
          f(u.$$.fragment),
          (m = g()),
          f(y.$$.fragment),
          (h = g()),
          f(w.$$.fragment));
      },
      m(t, s) {
        (p(e, t, s),
          a(t, o, s),
          p(n, t, s),
          a(t, r, s),
          p(c, t, s),
          a(t, d, s),
          p(u, t, s),
          a(t, m, s),
          p(y, t, s),
          a(t, h, s),
          p(w, t, s),
          (x = !0));
      },
      p(t, o) {
        const r = {};
        (6 & o && (r.$$scope = { dirty: o, ctx: t }), e.$set(r));
        const s = {};
        (6 & o && (s.$$scope = { dirty: o, ctx: t }), n.$set(s));
        const i = {};
        (6 & o && (i.$$scope = { dirty: o, ctx: t }), c.$set(i));
        const $ = {};
        (6 & o && ($.$$scope = { dirty: o, ctx: t }), u.$set($));
        const l = {};
        (6 & o && (l.$$scope = { dirty: o, ctx: t }), y.$set(l));
      },
      i(t) {
        x ||
          (l(e.$$.fragment, t),
          l(n.$$.fragment, t),
          l(c.$$.fragment, t),
          l(u.$$.fragment, t),
          l(y.$$.fragment, t),
          l(w.$$.fragment, t),
          (x = !0));
      },
      o(t) {
        ($(e.$$.fragment, t),
          $(n.$$.fragment, t),
          $(c.$$.fragment, t),
          $(u.$$.fragment, t),
          $(y.$$.fragment, t),
          $(w.$$.fragment, t),
          (x = !1));
      },
      d(t) {
        (t && (s(o), s(r), s(d), s(m), s(h)),
          i(e, t),
          i(n, t),
          i(c, t),
          i(u, t),
          i(y, t),
          i(w, t));
      },
    }
  );
}
function Ft(t) {
  let e,
    o,
    n = t[1].total && Mt(t);
  return {
    c() {
      (n && n.c(), (e = k()));
    },
    m(t, r) {
      (n && n.m(t, r), a(t, e, r), (o = !0));
    },
    p(t, [o]) {
      t[1].total
        ? n
          ? (n.p(t, o), 2 & o && l(n, 1))
          : ((n = Mt(t)), n.c(), l(n, 1), n.m(e.parentNode, e))
        : n &&
          (v(),
          $(n, 1, 1, () => {
            n = null;
          }),
          b());
    },
    i(t) {
      o || (l(n), (o = !0));
    },
    o(t) {
      ($(n), (o = !1));
    },
    d(t) {
      (t && s(e), n && n.d(t));
    },
  };
}
function Yt(t, e, o) {
  let n,
    r = C,
    s = () => (r(), (r = D(i, (t) => o(1, (n = t)))), i);
  t.$$.on_destroy.push(() => r());
  let { historyDealsStore: i } = e;
  return (
    s(),
    (t.$$set = (t) => {
      "historyDealsStore" in t && s(o(0, (i = t.historyDealsStore)));
    }),
    [i, n]
  );
}
let Rt = class extends t {
  constructor(t) {
    (super(), e(this, t, Yt, Ft, o, { historyDealsStore: 0 }));
  }
};
function Lt(t, e, o) {
  const n = t.slice();
  return ((n[14] = e[o]), (n[16] = o), n);
}
function Jt(t) {
  let e, o;
  return (
    (e = new _t({ props: { item: t[17].value, dealUtils: t[3] } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (131072 & o && (n.item = t[17].value),
          8 & o && (n.dealUtils = t[3]),
          e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function Wt(t) {
  let e, o;
  return (
    (e = new yt({ props: { item: t[17].value, dealUtils: t[3] } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (131072 & o && (n.item = t[17].value),
          8 & o && (n.dealUtils = t[3]),
          e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function Xt(t) {
  let e, o, n, r;
  const i = [Wt, Jt],
    c = [];
  function d(t, e) {
    return t[17].value.isBalance ? 0 : 1;
  }
  return (
    (e = d(t)),
    (o = c[e] = i[e](t)),
    {
      c() {
        (o.c(), (n = k()));
      },
      m(t, o) {
        (c[e].m(t, o), a(t, n, o), (r = !0));
      },
      p(t, r) {
        let s = e;
        ((e = d(t)),
          e === s
            ? c[e].p(t, r)
            : (v(),
              $(c[s], 1, 1, () => {
                c[s] = null;
              }),
              b(),
              (o = c[e]),
              o ? o.p(t, r) : ((o = c[e] = i[e](t)), o.c()),
              l(o, 1),
              o.m(n.parentNode, n)));
      },
      i(t) {
        r || (l(o), (r = !0));
      },
      o(t) {
        ($(o), (r = !1));
      },
      d(t) {
        (t && s(n), c[e].d(t));
      },
    }
  );
}
function Zt(t) {
  let e,
    o = t[14].title + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function Et(t) {
  let e, o, d, u;
  function m(e) {
    t[12](e);
  }
  let y = {
    right: !t[14].left,
    value: 1,
    sortBy: 2,
    $$slots: { default: [Zt] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[7].historyDealsSortDirection &&
      (y.direction = t[7].historyDealsSortDirection),
    (e = new et({ props: y })),
    n.push(() => r(e, "direction", m)),
    {
      c() {
        (f(e.$$.fragment), (d = g()));
      },
      m(t, o) {
        (p(e, t, o), a(t, d, o), (u = !0));
      },
      p(t, n) {
        const r = {};
        (262144 & n && (r.$$scope = { dirty: n, ctx: t }),
          !o &&
            128 & n &&
            ((o = !0),
            (r.direction = t[7].historyDealsSortDirection),
            c(() => (o = !1))),
          e.$set(r));
      },
      i(t) {
        u || (l(e.$$.fragment, t), (u = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (u = !1));
      },
      d(t) {
        (t && s(d), i(e, t));
      },
    }
  );
}
function Qt(t) {
  let e, o;
  return (
    (e = new tt({
      props: {
        right: !t[14].left,
        width: t[8][t[14].key],
        index: t[16],
        level: t[14].level ?? 0,
        title: t[14].description || t[14].title,
        visible: t[14].showAlways || t[7].historyDealsColumnsVisible[t[14].key],
        $$slots: { default: [Et] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (256 & o && (n.width = t[8][t[14].key]),
          128 & o &&
            (n.visible =
              t[14].showAlways || t[7].historyDealsColumnsVisible[t[14].key]),
          262272 & o && (n.$$scope = { dirty: o, ctx: t }),
          e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function Gt(t) {
  let e,
    o,
    n = O(t[10]),
    r = [];
  for (let s = 0; s < n.length; s += 1) r[s] = Qt(Lt(t, n, s));
  const i = (t) =>
    $(r[t], 1, 1, () => {
      r[t] = null;
    });
  return {
    c() {
      for (let t = 0; t < r.length; t += 1) r[t].c();
      e = k();
    },
    m(t, n) {
      for (let e = 0; e < r.length; e += 1) r[e] && r[e].m(t, n);
      (a(t, e, n), (o = !0));
    },
    p(t, o) {
      if (1408 & o) {
        let s;
        for (n = O(t[10]), s = 0; s < n.length; s += 1) {
          const i = Lt(t, n, s);
          r[s]
            ? (r[s].p(i, o), l(r[s], 1))
            : ((r[s] = Qt(i)), r[s].c(), l(r[s], 1), r[s].m(e.parentNode, e));
        }
        for (v(), s = n.length; s < r.length; s += 1) i(s);
        b();
      }
    },
    i(t) {
      if (!o) {
        for (let t = 0; t < n.length; t += 1) l(r[t]);
        o = !0;
      }
    },
    o(t) {
      r = r.filter(Boolean);
      for (let e = 0; e < r.length; e += 1) $(r[e]);
      o = !1;
    },
    d(t) {
      (t && s(e), U(r, t));
    },
  };
}
function Kt(t) {
  let e, o;
  return (
    (e = new Z({ props: { $$slots: { default: [Gt] }, $$scope: { ctx: t } } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (262528 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function te(t) {
  let e, o;
  return (
    (e = new Rt({ props: { historyDealsStore: t[2] } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (4 & o && (n.historyDealsStore = t[2]), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function ee(t) {
  let e,
    o = window.tr(window.lang.trade.history.empty) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function oe(t) {
  let e, o;
  return (
    (e = new K({ props: { $$slots: { title: [ee] }, $$scope: { ctx: t } } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (262144 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function ne(t) {
  let e,
    o,
    n = {
      list: t[5],
      itemHeight: 30,
      $$slots: {
        empty: [oe],
        total: [te],
        head: [Kt],
        default: [
          Xt,
          ({ item: t }) => ({ 17: t }),
          ({ item: t }) => (t ? 131072 : 0),
        ],
      },
      $$scope: { ctx: t },
    };
  return (
    (e = new G({ props: n })),
    t[13](e),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (32 & o && (n.list = t[5]),
          393612 & o && (n.$$scope = { dirty: o, ctx: t }),
          e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(o) {
        (t[13](null), i(e, o));
      },
    }
  );
}
function re(t) {
  let e, o;
  return (
    (e = new X({ props: { overlay: !0 } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function se(t) {
  let e, o, n, r, c;
  o = new Q({
    props: {
      hScroll: t[7].historyDealsHorizontalScroll,
      $$slots: { default: [ne] },
      $$scope: { ctx: t },
    },
  });
  let d = t[6].loading && re();
  return {
    c() {
      ((e = m("div")),
        f(o.$$.fragment),
        (n = g()),
        d && d.c(),
        (r = k()),
        P(
          e,
          "height",
          t[9]
            ? "calc(100% - var(--history-custom-period-height-desktop))"
            : "100%",
        ));
    },
    m(t, s) {
      (a(t, e, s),
        p(o, e, null),
        a(t, n, s),
        d && d.m(t, s),
        a(t, r, s),
        (c = !0));
    },
    p(t, [n]) {
      const s = {};
      (128 & n && (s.hScroll = t[7].historyDealsHorizontalScroll),
        262573 & n && (s.$$scope = { dirty: n, ctx: t }),
        o.$set(s),
        512 & n &&
          P(
            e,
            "height",
            t[9]
              ? "calc(100% - var(--history-custom-period-height-desktop))"
              : "100%",
          ),
        t[6].loading
          ? d
            ? 64 & n && l(d, 1)
            : ((d = re()), d.c(), l(d, 1), d.m(r.parentNode, r))
          : d &&
            (v(),
            $(d, 1, 1, () => {
              d = null;
            }),
            b()));
    },
    i(t) {
      c || (l(o.$$.fragment, t), l(d), (c = !0));
    },
    o(t) {
      ($(o.$$.fragment, t), $(d), (c = !1));
    },
    d(t) {
      (t && (s(e), s(n), s(r)), i(o), d && d.d(t));
    },
  };
}
function ie(t, e, o) {
  let r,
    s,
    i,
    $ = C,
    l = () => ($(), ($ = D(m, (t) => o(6, (r = t)))), m),
    c = C,
    a = () => (c(), (c = D(u, (t) => o(7, (s = t)))), u),
    d = C,
    p = () => (d(), (d = D(x, (t) => o(11, (i = t)))), x);
  (t.$$.on_destroy.push(() => $()),
    t.$$.on_destroy.push(() => c()),
    t.$$.on_destroy.push(() => d()));
  let { uiSettingsStore: u } = e;
  a();
  let { historyDealsStore: m } = e;
  l();
  let f,
    g,
    y,
    { dealUtils: h } = e,
    { virtualTbody: w = null } = e,
    { historyStore: x } = e;
  p();
  const S = M.map((t) => ({ ...t, title: z(t.key) }));
  return (
    (t.$$set = (t) => {
      ("uiSettingsStore" in t && a(o(1, (u = t.uiSettingsStore))),
        "historyDealsStore" in t && l(o(2, (m = t.historyDealsStore))),
        "dealUtils" in t && o(3, (h = t.dealUtils)),
        "virtualTbody" in t && o(0, (w = t.virtualTbody)),
        "historyStore" in t && p(o(4, (x = t.historyStore))));
    }),
    (t.$$.update = () => {
      (2048 & t.$$.dirty && o(9, (y = -1 === i.period)),
        224 & t.$$.dirty &&
          (0 !== s.historyDealsSortDirection
            ? (o(5, (f = r.getDeals(s.historyDealsSortBy))),
              -1 === s.historyDealsSortDirection && f.reverse())
            : o(5, (f = r.getDeals()))),
        72 & t.$$.dirty && o(8, (g = V(h.printAction, r.getDeals(), 18))));
    }),
    [
      w,
      u,
      m,
      h,
      x,
      f,
      r,
      s,
      g,
      y,
      S,
      i,
      function (e) {
        t.$$.not_equal(s.historyDealsSortDirection, e) &&
          ((s.historyDealsSortDirection = e), u.set(s));
      },
      function (t) {
        n[t ? "unshift" : "push"](() => {
          ((w = t), o(0, w));
        });
      },
    ]
  );
}
class $e extends t {
  constructor(t) {
    (super(),
      e(this, t, ie, se, o, {
        uiSettingsStore: 1,
        historyDealsStore: 2,
        dealUtils: 3,
        virtualTbody: 0,
        historyStore: 4,
      }));
  }
}
function le(t) {
  let e, o;
  return (
    (e = new Z({
      props: {
        inactive: !0,
        sticky: !0,
        $$slots: { default: [me] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (6 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function ce(t) {
  let e,
    o,
    n,
    r,
    i,
    $,
    l,
    c,
    p,
    u,
    f,
    x,
    S,
    v,
    b,
    k,
    C,
    D,
    P,
    O,
    U,
    T,
    H,
    B,
    A,
    M = window.tr(window.lang.trade.history.total.profit) + "",
    z = _(t[1].total.buysell, 2) + "",
    V = window.tr(window.lang.trade.history.total.credit) + "",
    N = _(t[1].total.credit, 2) + "",
    I = window.tr(window.lang.trade.history.total.deposit) + "",
    j = _(t[1].total.deposit, 2) + "",
    q = window.tr(window.lang.trade.history.total.withdrawal) + "",
    F = _(t[1].total.withdrawal, 2) + "",
    Y = window.tr(window.lang.trade.history.total.balance) + "",
    R = _(t[1].total.balance, 2) + "";
  return {
    c() {
      ((e = m("div")),
        (o = m("div")),
        (n = h(M)),
        (r = h(": ")),
        (i = h(z)),
        ($ = g()),
        (l = m("div")),
        (c = h(V)),
        (p = h(": ")),
        (u = h(N)),
        (f = g()),
        (x = m("div")),
        (S = h(I)),
        (v = h(": ")),
        (b = h(j)),
        (k = g()),
        (C = m("div")),
        (D = h(q)),
        (P = h(": ")),
        (O = h(F)),
        (U = g()),
        (T = m("div")),
        (H = h(Y)),
        (B = h(": ")),
        (A = h(R)),
        y(e, "class", "layout svelte-1i9wdgu"));
    },
    m(t, s) {
      (a(t, e, s),
        d(e, o),
        d(o, n),
        d(o, r),
        d(o, i),
        d(e, $),
        d(e, l),
        d(l, c),
        d(l, p),
        d(l, u),
        d(e, f),
        d(e, x),
        d(x, S),
        d(x, v),
        d(x, b),
        d(e, k),
        d(e, C),
        d(C, D),
        d(C, P),
        d(C, O),
        d(e, U),
        d(e, T),
        d(T, H),
        d(T, B),
        d(T, A));
    },
    p(t, e) {
      (2 & e && z !== (z = _(t[1].total.buysell, 2) + "") && w(i, z),
        2 & e && N !== (N = _(t[1].total.credit, 2) + "") && w(u, N),
        2 & e && j !== (j = _(t[1].total.deposit, 2) + "") && w(b, j),
        2 & e && F !== (F = _(t[1].total.withdrawal, 2) + "") && w(O, F),
        2 & e && R !== (R = _(t[1].total.balance, 2) + "") && w(A, R));
    },
    d(t) {
      t && s(e);
    },
  };
}
function ae(t) {
  let e,
    o = _(t[1].total.commission, 2) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = _(t[1].total.commission, 2) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function de(t) {
  let e,
    o = _(t[1].total.commissionFee, 2) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = _(t[1].total.commissionFee, 2) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function pe(t) {
  let e,
    o = _(t[1].total.swap, 2) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = _(t[1].total.swap, 2) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function ue(t) {
  let e,
    o = _(t[1].total.profit, 2) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = _(t[1].total.profit, 2) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function me(t) {
  let e, o, n, r, c, d, u, m, y, h, w, x;
  return (
    (e = new E({
      props: {
        index: 4,
        colspan: [1, 11],
        $$slots: { default: [ce] },
        $$scope: { ctx: t },
      },
    })),
    (n = new E({
      props: { index: 10, $$slots: { default: [ae] }, $$scope: { ctx: t } },
    })),
    (c = new E({
      props: { index: 11, $$slots: { default: [de] }, $$scope: { ctx: t } },
    })),
    (u = new E({
      props: { index: 12, $$slots: { default: [pe] }, $$scope: { ctx: t } },
    })),
    (y = new E({
      props: { index: 13, $$slots: { default: [ue] }, $$scope: { ctx: t } },
    })),
    (w = new E({ props: { index: 14 } })),
    {
      c() {
        (f(e.$$.fragment),
          (o = g()),
          f(n.$$.fragment),
          (r = g()),
          f(c.$$.fragment),
          (d = g()),
          f(u.$$.fragment),
          (m = g()),
          f(y.$$.fragment),
          (h = g()),
          f(w.$$.fragment));
      },
      m(t, s) {
        (p(e, t, s),
          a(t, o, s),
          p(n, t, s),
          a(t, r, s),
          p(c, t, s),
          a(t, d, s),
          p(u, t, s),
          a(t, m, s),
          p(y, t, s),
          a(t, h, s),
          p(w, t, s),
          (x = !0));
      },
      p(t, o) {
        const r = {};
        (6 & o && (r.$$scope = { dirty: o, ctx: t }), e.$set(r));
        const s = {};
        (6 & o && (s.$$scope = { dirty: o, ctx: t }), n.$set(s));
        const i = {};
        (6 & o && (i.$$scope = { dirty: o, ctx: t }), c.$set(i));
        const $ = {};
        (6 & o && ($.$$scope = { dirty: o, ctx: t }), u.$set($));
        const l = {};
        (6 & o && (l.$$scope = { dirty: o, ctx: t }), y.$set(l));
      },
      i(t) {
        x ||
          (l(e.$$.fragment, t),
          l(n.$$.fragment, t),
          l(c.$$.fragment, t),
          l(u.$$.fragment, t),
          l(y.$$.fragment, t),
          l(w.$$.fragment, t),
          (x = !0));
      },
      o(t) {
        ($(e.$$.fragment, t),
          $(n.$$.fragment, t),
          $(c.$$.fragment, t),
          $(u.$$.fragment, t),
          $(y.$$.fragment, t),
          $(w.$$.fragment, t),
          (x = !1));
      },
      d(t) {
        (t && (s(o), s(r), s(d), s(m), s(h)),
          i(e, t),
          i(n, t),
          i(c, t),
          i(u, t),
          i(y, t),
          i(w, t));
      },
    }
  );
}
function fe(t) {
  let e,
    o,
    n = t[1].total && le(t);
  return {
    c() {
      (n && n.c(), (e = k()));
    },
    m(t, r) {
      (n && n.m(t, r), a(t, e, r), (o = !0));
    },
    p(t, [o]) {
      t[1].total
        ? n
          ? (n.p(t, o), 2 & o && l(n, 1))
          : ((n = le(t)), n.c(), l(n, 1), n.m(e.parentNode, e))
        : n &&
          (v(),
          $(n, 1, 1, () => {
            n = null;
          }),
          b());
    },
    i(t) {
      o || (l(n), (o = !0));
    },
    o(t) {
      ($(n), (o = !1));
    },
    d(t) {
      (t && s(e), n && n.d(t));
    },
  };
}
function ge(t, e, o) {
  let n,
    r = C,
    s = () => (r(), (r = D(i, (t) => o(1, (n = t)))), i);
  t.$$.on_destroy.push(() => r());
  let { historyPositionsStore: i } = e;
  return (
    s(),
    (t.$$set = (t) => {
      "historyPositionsStore" in t && s(o(0, (i = t.historyPositionsStore)));
    }),
    [i, n]
  );
}
let ye = class extends t {
  constructor(t) {
    (super(), e(this, t, ge, fe, o, { historyPositionsStore: 0 }));
  }
};
function he(t) {
  let e,
    o = A(t[0].timeOpen) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      1 & n && o !== (o = A(t[0].timeOpen) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function we(t) {
  let e,
    o = t[0].id + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      1 & n && o !== (o = t[0].id + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function xe(t) {
  let e,
    o = t[1](t[0].type) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      3 & n && o !== (o = t[1](t[0].type) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Se(t) {
  let e,
    o = t[0].comment + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      1 & n && o !== (o = t[0].comment + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function ve(t) {
  let e,
    o,
    n = _(t[0].profit ?? 0, t[0].digitsCurrency) + "";
  return {
    c() {
      ((e = m("div")),
        (o = h(n)),
        y(e, "class", "svelte-1orrocn"),
        x(e, "blue", Math.sign(t[0].profit ?? 0) > 0),
        x(e, "red", Math.sign(t[0].profit ?? 0) < 0));
    },
    m(t, n) {
      (a(t, e, n), d(e, o));
    },
    p(t, r) {
      (1 & r &&
        n !== (n = _(t[0].profit ?? 0, t[0].digitsCurrency) + "") &&
        w(o, n),
        1 & r && x(e, "blue", Math.sign(t[0].profit ?? 0) > 0),
        1 & r && x(e, "red", Math.sign(t[0].profit ?? 0) < 0));
    },
    d(t) {
      t && s(e);
    },
  };
}
function be(t) {
  let e,
    o = t[0].comment + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      1 & n && o !== (o = t[0].comment + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function ke(t) {
  let e, o, n, r, c, d, u, m, y, h, w, x;
  return (
    (e = new E({
      props: {
        index: 0,
        title: A(t[0].timeOpen),
        $$slots: { default: [he] },
        $$scope: { ctx: t },
      },
    })),
    (n = new E({
      props: {
        index: 1,
        title: t[0].id,
        $$slots: { default: [we] },
        $$scope: { ctx: t },
      },
    })),
    (c = new E({
      props: {
        index: 2,
        title: t[1](t[0].type),
        $$slots: { default: [xe] },
        $$scope: { ctx: t },
      },
    })),
    (u = new E({
      props: {
        index: 4,
        colspan: [4, 14],
        title: t[0].comment,
        $$slots: { default: [Se] },
        $$scope: { ctx: t },
      },
    })),
    (y = new E({
      props: {
        index: 13,
        title: _(t[0].profit ?? 0, t[0].digitsCurrency),
        $$slots: { default: [ve] },
        $$scope: { ctx: t },
      },
    })),
    (w = new E({
      props: {
        index: 14,
        title: t[0].comment,
        $$slots: { default: [be] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (f(e.$$.fragment),
          (o = g()),
          f(n.$$.fragment),
          (r = g()),
          f(c.$$.fragment),
          (d = g()),
          f(u.$$.fragment),
          (m = g()),
          f(y.$$.fragment),
          (h = g()),
          f(w.$$.fragment));
      },
      m(t, s) {
        (p(e, t, s),
          a(t, o, s),
          p(n, t, s),
          a(t, r, s),
          p(c, t, s),
          a(t, d, s),
          p(u, t, s),
          a(t, m, s),
          p(y, t, s),
          a(t, h, s),
          p(w, t, s),
          (x = !0));
      },
      p(t, o) {
        const r = {};
        (1 & o && (r.title = A(t[0].timeOpen)),
          5 & o && (r.$$scope = { dirty: o, ctx: t }),
          e.$set(r));
        const s = {};
        (1 & o && (s.title = t[0].id),
          5 & o && (s.$$scope = { dirty: o, ctx: t }),
          n.$set(s));
        const i = {};
        (3 & o && (i.title = t[1](t[0].type)),
          7 & o && (i.$$scope = { dirty: o, ctx: t }),
          c.$set(i));
        const $ = {};
        (1 & o && ($.title = t[0].comment),
          5 & o && ($.$$scope = { dirty: o, ctx: t }),
          u.$set($));
        const l = {};
        (1 & o && (l.title = _(t[0].profit ?? 0, t[0].digitsCurrency)),
          5 & o && (l.$$scope = { dirty: o, ctx: t }),
          y.$set(l));
        const a = {};
        (1 & o && (a.title = t[0].comment),
          5 & o && (a.$$scope = { dirty: o, ctx: t }),
          w.$set(a));
      },
      i(t) {
        x ||
          (l(e.$$.fragment, t),
          l(n.$$.fragment, t),
          l(c.$$.fragment, t),
          l(u.$$.fragment, t),
          l(y.$$.fragment, t),
          l(w.$$.fragment, t),
          (x = !0));
      },
      o(t) {
        ($(e.$$.fragment, t),
          $(n.$$.fragment, t),
          $(c.$$.fragment, t),
          $(u.$$.fragment, t),
          $(y.$$.fragment, t),
          $(w.$$.fragment, t),
          (x = !1));
      },
      d(t) {
        (t && (s(o), s(r), s(d), s(m), s(h)),
          i(e, t),
          i(n, t),
          i(c, t),
          i(u, t),
          i(y, t),
          i(w, t));
      },
    }
  );
}
function Ce(t) {
  let e, o;
  return (
    (e = new Z({ props: { $$slots: { default: [ke] }, $$scope: { ctx: t } } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, [o]) {
        const n = {};
        (7 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function De(t, e, o) {
  let { item: n } = e,
    { printAction: r } = e;
  return (
    (t.$$set = (t) => {
      ("item" in t && o(0, (n = t.item)),
        "printAction" in t && o(1, (r = t.printAction)));
    }),
    [n, r]
  );
}
class Pe extends t {
  constructor(t) {
    (super(), e(this, t, De, Ce, o, { item: 0, printAction: 1 }));
  }
}
function Oe(t) {
  let e,
    o = A(t[1].timeOpen) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = A(t[1].timeOpen) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Ue(t) {
  let e,
    o = t[1].id + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = t[1].id + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Te(t) {
  let e,
    o,
    n = t[0].printAction(t[1].type) + "";
  return {
    c() {
      ((e = m("div")),
        (o = h(n)),
        y(e, "class", "svelte-h1m35d"),
        x(e, "blue", t[1].isBuy),
        x(e, "red", t[1].isSell));
    },
    m(t, n) {
      (a(t, e, n), d(e, o));
    },
    p(t, r) {
      (3 & r && n !== (n = t[0].printAction(t[1].type) + "") && w(o, n),
        2 & r && x(e, "blue", t[1].isBuy),
        2 & r && x(e, "red", t[1].isSell));
    },
    d(t) {
      t && s(e);
    },
  };
}
function He(t) {
  let e,
    o = t[1].volume + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = t[1].volume + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Be(t) {
  let e,
    o = t[1].symbol + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = t[1].symbol + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Ae(t) {
  let e,
    o = _(t[1].priceOpen, t[1].digits) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = _(t[1].priceOpen, t[1].digits) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function _e(t) {
  let e, o;
  return {
    c() {
      ((e = m("span")),
        (o = h(t[7])),
        y(e, "class", "svelte-h1m35d"),
        x(e, "close-by-sl", t[9] && t[7]));
    },
    m(t, n) {
      (a(t, e, n), d(e, o));
    },
    p(t, n) {
      (128 & n && w(o, t[7]), 640 & n && x(e, "close-by-sl", t[9] && t[7]));
    },
    d(t) {
      t && s(e);
    },
  };
}
function Me(t) {
  let e, o;
  return {
    c() {
      ((e = m("span")),
        (o = h(t[8])),
        y(e, "class", "svelte-h1m35d"),
        x(e, "close-by-tp", t[10] && t[8]));
    },
    m(t, n) {
      (a(t, e, n), d(e, o));
    },
    p(t, n) {
      (256 & n && w(o, t[8]), 1280 & n && x(e, "close-by-tp", t[10] && t[8]));
    },
    d(t) {
      t && s(e);
    },
  };
}
function ze(t) {
  let e,
    o = A(t[1].timeClose) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = A(t[1].timeClose) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Ve(t) {
  let e,
    o = _(t[1].priceClose, t[1].digits) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = _(t[1].priceClose, t[1].digits) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Ne(t) {
  let e;
  return {
    c() {
      e = h(t[4]);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, o) {
      16 & o && w(e, t[4]);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Ie(t) {
  let e;
  return {
    c() {
      e = h(t[5]);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, o) {
      32 & o && w(e, t[5]);
    },
    d(t) {
      t && s(e);
    },
  };
}
function je(t) {
  let e;
  return {
    c() {
      e = h(t[6]);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, o) {
      64 & o && w(e, t[6]);
    },
    d(t) {
      t && s(e);
    },
  };
}
function qe(t) {
  let e, o;
  return {
    c() {
      ((e = m("div")),
        (o = h(t[3])),
        y(e, "class", "svelte-h1m35d"),
        x(e, "blue", Math.sign(t[1].profit ?? 0) > 0),
        x(e, "red", Math.sign(t[1].profit ?? 0) < 0));
    },
    m(t, n) {
      (a(t, e, n), d(e, o));
    },
    p(t, n) {
      (8 & n && w(o, t[3]),
        2 & n && x(e, "blue", Math.sign(t[1].profit ?? 0) > 0),
        2 & n && x(e, "red", Math.sign(t[1].profit ?? 0) < 0));
    },
    d(t) {
      t && s(e);
    },
  };
}
function Fe(t) {
  let e,
    o = t[1].comment + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = t[1].comment + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Ye(t) {
  let e,
    o,
    n,
    r,
    c,
    d,
    u,
    m,
    y,
    h,
    w,
    x,
    S,
    v,
    b,
    k,
    C,
    D,
    P,
    O,
    U,
    T,
    H,
    B,
    M,
    z,
    V,
    N,
    I,
    j;
  return (
    (e = new E({
      props: {
        index: 0,
        title: A(t[1].timeOpen),
        $$slots: { default: [Oe] },
        $$scope: { ctx: t },
      },
    })),
    (n = new E({
      props: {
        index: 1,
        title: t[1].id,
        $$slots: { default: [Ue] },
        $$scope: { ctx: t },
      },
    })),
    (c = new E({
      props: {
        index: 2,
        title: t[0].printAction(t[1].type),
        $$slots: { default: [Te] },
        $$scope: { ctx: t },
      },
    })),
    (u = new E({
      props: {
        index: 3,
        title: t[1].volume,
        $$slots: { default: [He] },
        $$scope: { ctx: t },
      },
    })),
    (y = new E({
      props: {
        index: 4,
        title: t[1].symbol,
        $$slots: { default: [Be] },
        $$scope: { ctx: t },
      },
    })),
    (w = new E({
      props: {
        index: 5,
        title: _(t[1].priceOpen, t[1].digits),
        $$slots: { default: [Ae] },
        $$scope: { ctx: t },
      },
    })),
    (S = new E({
      props: {
        index: 6,
        title: t[9] && t[7] ? `Close by SL ${t[7]}` : t[7],
        $$slots: { default: [_e] },
        $$scope: { ctx: t },
      },
    })),
    (b = new E({
      props: {
        index: 7,
        title: t[10] && t[8] ? `Close by TP ${t[8]}` : t[8],
        $$slots: { default: [Me] },
        $$scope: { ctx: t },
      },
    })),
    (C = new E({
      props: {
        index: 8,
        title: A(t[1].timeClose),
        $$slots: { default: [ze] },
        $$scope: { ctx: t },
      },
    })),
    (P = new E({
      props: {
        index: 9,
        title: _(t[1].priceClose, t[1].digits),
        $$slots: { default: [Ve] },
        $$scope: { ctx: t },
      },
    })),
    (U = new E({
      props: {
        index: 10,
        title: t[4],
        $$slots: { default: [Ne] },
        $$scope: { ctx: t },
      },
    })),
    (H = new E({
      props: {
        index: 11,
        title: t[5],
        $$slots: { default: [Ie] },
        $$scope: { ctx: t },
      },
    })),
    (M = new E({
      props: {
        index: 12,
        title: t[6],
        $$slots: { default: [je] },
        $$scope: { ctx: t },
      },
    })),
    (V = new E({
      props: {
        index: 13,
        title: t[3],
        $$slots: { default: [qe] },
        $$scope: { ctx: t },
      },
    })),
    (I = new E({
      props: {
        index: 14,
        title: t[1].comment,
        $$slots: { default: [Fe] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (f(e.$$.fragment),
          (o = g()),
          f(n.$$.fragment),
          (r = g()),
          f(c.$$.fragment),
          (d = g()),
          f(u.$$.fragment),
          (m = g()),
          f(y.$$.fragment),
          (h = g()),
          f(w.$$.fragment),
          (x = g()),
          f(S.$$.fragment),
          (v = g()),
          f(b.$$.fragment),
          (k = g()),
          f(C.$$.fragment),
          (D = g()),
          f(P.$$.fragment),
          (O = g()),
          f(U.$$.fragment),
          (T = g()),
          f(H.$$.fragment),
          (B = g()),
          f(M.$$.fragment),
          (z = g()),
          f(V.$$.fragment),
          (N = g()),
          f(I.$$.fragment));
      },
      m(t, s) {
        (p(e, t, s),
          a(t, o, s),
          p(n, t, s),
          a(t, r, s),
          p(c, t, s),
          a(t, d, s),
          p(u, t, s),
          a(t, m, s),
          p(y, t, s),
          a(t, h, s),
          p(w, t, s),
          a(t, x, s),
          p(S, t, s),
          a(t, v, s),
          p(b, t, s),
          a(t, k, s),
          p(C, t, s),
          a(t, D, s),
          p(P, t, s),
          a(t, O, s),
          p(U, t, s),
          a(t, T, s),
          p(H, t, s),
          a(t, B, s),
          p(M, t, s),
          a(t, z, s),
          p(V, t, s),
          a(t, N, s),
          p(I, t, s),
          (j = !0));
      },
      p(t, o) {
        const r = {};
        (2 & o && (r.title = A(t[1].timeOpen)),
          65538 & o && (r.$$scope = { dirty: o, ctx: t }),
          e.$set(r));
        const s = {};
        (2 & o && (s.title = t[1].id),
          65538 & o && (s.$$scope = { dirty: o, ctx: t }),
          n.$set(s));
        const i = {};
        (3 & o && (i.title = t[0].printAction(t[1].type)),
          65539 & o && (i.$$scope = { dirty: o, ctx: t }),
          c.$set(i));
        const $ = {};
        (2 & o && ($.title = t[1].volume),
          65538 & o && ($.$$scope = { dirty: o, ctx: t }),
          u.$set($));
        const l = {};
        (2 & o && (l.title = t[1].symbol),
          65538 & o && (l.$$scope = { dirty: o, ctx: t }),
          y.$set(l));
        const a = {};
        (2 & o && (a.title = _(t[1].priceOpen, t[1].digits)),
          65538 & o && (a.$$scope = { dirty: o, ctx: t }),
          w.$set(a));
        const d = {};
        (640 & o && (d.title = t[9] && t[7] ? `Close by SL ${t[7]}` : t[7]),
          66176 & o && (d.$$scope = { dirty: o, ctx: t }),
          S.$set(d));
        const p = {};
        (1280 & o && (p.title = t[10] && t[8] ? `Close by TP ${t[8]}` : t[8]),
          66816 & o && (p.$$scope = { dirty: o, ctx: t }),
          b.$set(p));
        const m = {};
        (2 & o && (m.title = A(t[1].timeClose)),
          65538 & o && (m.$$scope = { dirty: o, ctx: t }),
          C.$set(m));
        const f = {};
        (2 & o && (f.title = _(t[1].priceClose, t[1].digits)),
          65538 & o && (f.$$scope = { dirty: o, ctx: t }),
          P.$set(f));
        const g = {};
        (16 & o && (g.title = t[4]),
          65552 & o && (g.$$scope = { dirty: o, ctx: t }),
          U.$set(g));
        const h = {};
        (32 & o && (h.title = t[5]),
          65568 & o && (h.$$scope = { dirty: o, ctx: t }),
          H.$set(h));
        const x = {};
        (64 & o && (x.title = t[6]),
          65600 & o && (x.$$scope = { dirty: o, ctx: t }),
          M.$set(x));
        const v = {};
        (8 & o && (v.title = t[3]),
          65546 & o && (v.$$scope = { dirty: o, ctx: t }),
          V.$set(v));
        const k = {};
        (2 & o && (k.title = t[1].comment),
          65538 & o && (k.$$scope = { dirty: o, ctx: t }),
          I.$set(k));
      },
      i(t) {
        j ||
          (l(e.$$.fragment, t),
          l(n.$$.fragment, t),
          l(c.$$.fragment, t),
          l(u.$$.fragment, t),
          l(y.$$.fragment, t),
          l(w.$$.fragment, t),
          l(S.$$.fragment, t),
          l(b.$$.fragment, t),
          l(C.$$.fragment, t),
          l(P.$$.fragment, t),
          l(U.$$.fragment, t),
          l(H.$$.fragment, t),
          l(M.$$.fragment, t),
          l(V.$$.fragment, t),
          l(I.$$.fragment, t),
          (j = !0));
      },
      o(t) {
        ($(e.$$.fragment, t),
          $(n.$$.fragment, t),
          $(c.$$.fragment, t),
          $(u.$$.fragment, t),
          $(y.$$.fragment, t),
          $(w.$$.fragment, t),
          $(S.$$.fragment, t),
          $(b.$$.fragment, t),
          $(C.$$.fragment, t),
          $(P.$$.fragment, t),
          $(U.$$.fragment, t),
          $(H.$$.fragment, t),
          $(M.$$.fragment, t),
          $(V.$$.fragment, t),
          $(I.$$.fragment, t),
          (j = !1));
      },
      d(t) {
        (t &&
          (s(o),
          s(r),
          s(d),
          s(m),
          s(h),
          s(x),
          s(v),
          s(k),
          s(D),
          s(O),
          s(T),
          s(B),
          s(z),
          s(N)),
          i(e, t),
          i(n, t),
          i(c, t),
          i(u, t),
          i(y, t),
          i(w, t),
          i(S, t),
          i(b, t),
          i(C, t),
          i(P, t),
          i(U, t),
          i(H, t),
          i(M, t),
          i(V, t),
          i(I, t));
      },
    }
  );
}
function Re(t) {
  let e, o;
  return (
    (e = new Z({
      props: {
        active: t[2] === t[1].id,
        $$slots: { default: [Ye] },
        $$scope: { ctx: t },
      },
    })),
    e.$on("click", t[14]),
    e.$on("mousedown", t[15]),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, [o]) {
        const n = {};
        (6 & o && (n.active = t[2] === t[1].id),
          67579 & o && (n.$$scope = { dirty: o, ctx: t }),
          e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function Le(t, e, o) {
  let n,
    r,
    s,
    i,
    $,
    l,
    c,
    a,
    d,
    p,
    { dealUtils: u } = e,
    { historyDealsStore: m } = e,
    { item: f } = e,
    { selected: g } = e;
  return (
    (t.$$set = (t) => {
      ("dealUtils" in t && o(0, (u = t.dealUtils)),
        "historyDealsStore" in t && o(11, (m = t.historyDealsStore)),
        "item" in t && o(1, (f = t.item)),
        "selected" in t && o(2, (g = t.selected)));
    }),
    (t.$$.update = () => {
      14338 & t.$$.dirty &&
        (o(3, (n = _(f.profit ?? 0, f.digitsCurrency))),
        o(4, (r = f.commission ? _(f.commission, f.digitsCurrency) : "")),
        o(5, (s = f.commissionFee ? _(f.commissionFee, f.digitsCurrency) : "")),
        o(6, (i = f.storage ? _(f.storage, f.digitsCurrency) : "")),
        o(7, ($ = f.sl ? _(f.sl, f.digits) : "")),
        o(8, (l = f.tp ? _(f.tp, f.digits) : "")),
        o(12, (c = m.getDealsBySymbolAndPosition(f.symbol, f.id))),
        o(13, (a = (null == c ? void 0 : c.length) ? c[c.length - 1] : null)),
        o(9, (d = Boolean(a && 3 === a.value.tradeReason))),
        o(10, (p = Boolean(a && 4 === a.value.tradeReason))));
    }),
    [
      u,
      f,
      g,
      n,
      r,
      s,
      i,
      $,
      l,
      d,
      p,
      m,
      c,
      a,
      function (e) {
        S.call(this, t, e);
      },
      function (e) {
        S.call(this, t, e);
      },
    ]
  );
}
class Je extends t {
  constructor(t) {
    (super(),
      e(this, t, Le, Re, o, {
        dealUtils: 0,
        historyDealsStore: 11,
        item: 1,
        selected: 2,
      }));
  }
}
function We(t, e, o) {
  const n = t.slice();
  return ((n[25] = e[o]), (n[27] = o), n);
}
function Xe(t) {
  let e, o;
  return (
    (e = new Je({
      props: {
        historyDealsStore: t[1],
        item: t[28].value,
        selected: t[11].selectedHistoryPosition,
        dealUtils: t[6],
      },
    })),
    e.$on("click", function () {
      return t[22](t[28]);
    }),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(o, n) {
        t = o;
        const r = {};
        (2 & n && (r.historyDealsStore = t[1]),
          268435456 & n && (r.item = t[28].value),
          2048 & n && (r.selected = t[11].selectedHistoryPosition),
          64 & n && (r.dealUtils = t[6]),
          e.$set(r));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function Ze(t) {
  let e, o;
  return (
    (e = new Pe({
      props: { item: t[28].value, printAction: t[6].printAction },
    })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (268435456 & o && (n.item = t[28].value),
          64 & o && (n.printAction = t[6].printAction),
          e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function Ee(t) {
  let e, o, n, r;
  const i = [Ze, Xe],
    c = [];
  function d(t, e) {
    return t[28].value.isBalance ? 0 : 1;
  }
  return (
    (e = d(t)),
    (o = c[e] = i[e](t)),
    {
      c() {
        (o.c(), (n = k()));
      },
      m(t, o) {
        (c[e].m(t, o), a(t, n, o), (r = !0));
      },
      p(t, r) {
        let s = e;
        ((e = d(t)),
          e === s
            ? c[e].p(t, r)
            : (v(),
              $(c[s], 1, 1, () => {
                c[s] = null;
              }),
              b(),
              (o = c[e]),
              o ? o.p(t, r) : ((o = c[e] = i[e](t)), o.c()),
              l(o, 1),
              o.m(n.parentNode, n)));
      },
      i(t) {
        r || (l(o), (r = !0));
      },
      o(t) {
        ($(o), (r = !1));
      },
      d(t) {
        (t && s(n), c[e].d(t));
      },
    }
  );
}
function Qe(t) {
  let e,
    o = t[25].title + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function Ge(t) {
  let e, o, d, u, m;
  function y(e) {
    t[20](e);
  }
  function h(e) {
    t[21](e);
  }
  let w = {
    right: !t[25].left,
    value: t[25].key,
    $$slots: { default: [Qe] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[10].historyPositionsSortBy &&
      (w.sortBy = t[10].historyPositionsSortBy),
    void 0 !== t[10].historyPositionsSortDirection &&
      (w.direction = t[10].historyPositionsSortDirection),
    (e = new et({ props: w })),
    n.push(() => r(e, "sortBy", y)),
    n.push(() => r(e, "direction", h)),
    {
      c() {
        (f(e.$$.fragment), (u = g()));
      },
      m(t, o) {
        (p(e, t, o), a(t, u, o), (m = !0));
      },
      p(t, n) {
        const r = {};
        (536870912 & n && (r.$$scope = { dirty: n, ctx: t }),
          !o &&
            1024 & n &&
            ((o = !0),
            (r.sortBy = t[10].historyPositionsSortBy),
            c(() => (o = !1))),
          !d &&
            1024 & n &&
            ((d = !0),
            (r.direction = t[10].historyPositionsSortDirection),
            c(() => (d = !1))),
          e.$set(r));
      },
      i(t) {
        m || (l(e.$$.fragment, t), (m = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (m = !1));
      },
      d(t) {
        (t && s(u), i(e, t));
      },
    }
  );
}
function Ke(t) {
  let e, o;
  return (
    (e = new tt({
      props: {
        right: !t[25].left,
        width: t[12][t[25].key],
        index: t[27],
        level: t[25].level ?? 0,
        title: t[25].description || t[25].title,
        visible:
          t[25].showAlways || t[10].historyPositionsColumnsVisible[t[25].key],
        $$slots: { default: [Ge] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (4096 & o && (n.width = t[12][t[25].key]),
          1024 & o &&
            (n.visible =
              t[25].showAlways ||
              t[10].historyPositionsColumnsVisible[t[25].key]),
          536871936 & o && (n.$$scope = { dirty: o, ctx: t }),
          e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function to(t) {
  let e,
    o,
    n = O(t[15]),
    r = [];
  for (let s = 0; s < n.length; s += 1) r[s] = Ke(We(t, n, s));
  const i = (t) =>
    $(r[t], 1, 1, () => {
      r[t] = null;
    });
  return {
    c() {
      for (let t = 0; t < r.length; t += 1) r[t].c();
      e = k();
    },
    m(t, n) {
      for (let e = 0; e < r.length; e += 1) r[e] && r[e].m(t, n);
      (a(t, e, n), (o = !0));
    },
    p(t, o) {
      if (37888 & o) {
        let s;
        for (n = O(t[15]), s = 0; s < n.length; s += 1) {
          const i = We(t, n, s);
          r[s]
            ? (r[s].p(i, o), l(r[s], 1))
            : ((r[s] = Ke(i)), r[s].c(), l(r[s], 1), r[s].m(e.parentNode, e));
        }
        for (v(), s = n.length; s < r.length; s += 1) i(s);
        b();
      }
    },
    i(t) {
      if (!o) {
        for (let t = 0; t < n.length; t += 1) l(r[t]);
        o = !0;
      }
    },
    o(t) {
      r = r.filter(Boolean);
      for (let e = 0; e < r.length; e += 1) $(r[e]);
      o = !1;
    },
    d(t) {
      (t && s(e), U(r, t));
    },
  };
}
function eo(t) {
  let e, o;
  return (
    (e = new Z({ props: { $$slots: { default: [to] }, $$scope: { ctx: t } } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (536876032 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function oo(t) {
  let e, o;
  return (
    (e = new ye({ props: { historyPositionsStore: t[2] } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (4 & o && (n.historyPositionsStore = t[2]), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function no(t) {
  let e,
    o = window.tr(window.lang.trade.history.empty) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function ro(t) {
  let e, o;
  return (
    (e = new K({ props: { $$slots: { title: [no] }, $$scope: { ctx: t } } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (536870912 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function so(t) {
  let e,
    o,
    n = {
      list: t[8],
      itemHeight: 30,
      $$slots: {
        empty: [ro],
        total: [oo],
        head: [eo],
        default: [
          Ee,
          ({ item: t }) => ({ 28: t }),
          ({ item: t }) => (t ? 268435456 : 0),
        ],
      },
      $$scope: { ctx: t },
    };
  return (
    (e = new G({ props: n })),
    t[23](e),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (256 & o && (n.list = t[8]),
          805313606 & o && (n.$$scope = { dirty: o, ctx: t }),
          e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(o) {
        (t[23](null), i(e, o));
      },
    }
  );
}
function io(t) {
  let e, o;
  return (
    (e = new X({ props: { overlay: !0 } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function $o(t) {
  let e, o, n, r, c;
  o = new Q({
    props: {
      hScroll: t[10].historyPositionsHorizontalScroll,
      $$slots: { default: [so] },
      $$scope: { ctx: t },
    },
  });
  let d = t[9].loading && io();
  return {
    c() {
      ((e = m("div")),
        f(o.$$.fragment),
        (n = g()),
        d && d.c(),
        (r = k()),
        P(
          e,
          "height",
          t[13]
            ? "calc(100% - var(--history-custom-period-height-desktop))"
            : "100%",
        ));
    },
    m(t, s) {
      (a(t, e, s),
        p(o, e, null),
        a(t, n, s),
        d && d.m(t, s),
        a(t, r, s),
        (c = !0));
    },
    p(t, [n]) {
      const s = {};
      (1024 & n && (s.hScroll = t[10].historyPositionsHorizontalScroll),
        536878407 & n && (s.$$scope = { dirty: n, ctx: t }),
        o.$set(s),
        8192 & n &&
          P(
            e,
            "height",
            t[13]
              ? "calc(100% - var(--history-custom-period-height-desktop))"
              : "100%",
          ),
        t[9].loading
          ? d
            ? 512 & n && l(d, 1)
            : ((d = io()), d.c(), l(d, 1), d.m(r.parentNode, r))
          : d &&
            (v(),
            $(d, 1, 1, () => {
              d = null;
            }),
            b()));
    },
    i(t) {
      c || (l(o.$$.fragment, t), l(d), (c = !0));
    },
    o(t) {
      ($(o.$$.fragment, t), $(d), (c = !1));
    },
    d(t) {
      (t && (s(e), s(n), s(r)), i(o), d && d.d(t));
    },
  };
}
function lo(t, e, o) {
  let r,
    s,
    i,
    $,
    l,
    c = C,
    a = () => (c(), (c = D(k, (t) => o(24, (r = t)))), k),
    d = C,
    p = () => (d(), (d = D(x, (t) => o(9, (s = t)))), x),
    u = C,
    m = () => (u(), (u = D(B, (t) => o(10, (i = t)))), B),
    f = C,
    g = () => (f(), (f = D(S, (t) => o(11, ($ = t)))), S),
    y = C,
    h = () => (y(), (y = D(b, (t) => o(19, (l = t)))), b);
  (t.$$.on_destroy.push(() => c()),
    t.$$.on_destroy.push(() => d()),
    t.$$.on_destroy.push(() => u()),
    t.$$.on_destroy.push(() => f()),
    t.$$.on_destroy.push(() => y()));
  let { historyDealsStore: w } = e,
    { historyPositionsStore: x } = e;
  p();
  let { interactionStore: S } = e;
  g();
  let { chartController: v } = e,
    { historyStore: b } = e;
  h();
  let { configStore: k } = e;
  a();
  let P,
    O,
    { dealUtils: U } = e,
    { virtualTbody: H = null } = e,
    { uiSettingsStore: B } = e;
  m();
  let A,
    _ = 0,
    M = "";
  function z(t) {
    (S.setSelectedHistoryPosition(t.id),
      r.symbol !== t.symbol && v.select(t.symbol));
  }
  const V = N.map((t) => {
    var e;
    return {
      ...t,
      title: I(t.key).title,
      description: null == (e = I(t.key)) ? void 0 : e.description,
    };
  });
  return (
    T(() => {
      (null == H ? void 0 : H.scrollToIndex) && H.scrollToIndex(_);
    }),
    (t.$$set = (t) => {
      ("historyDealsStore" in t && o(1, (w = t.historyDealsStore)),
        "historyPositionsStore" in t && p(o(2, (x = t.historyPositionsStore))),
        "interactionStore" in t && g(o(3, (S = t.interactionStore))),
        "chartController" in t && o(16, (v = t.chartController)),
        "historyStore" in t && h(o(4, (b = t.historyStore))),
        "configStore" in t && a(o(5, (k = t.configStore))),
        "dealUtils" in t && o(6, (U = t.dealUtils)),
        "virtualTbody" in t && o(0, (H = t.virtualTbody)),
        "uiSettingsStore" in t && m(o(7, (B = t.uiSettingsStore))));
    }),
    (t.$$.update = () => {
      (524288 & t.$$.dirty && o(13, (A = -1 === l.period)),
        395777 & t.$$.dirty &&
          ($.selectedHistoryPosition &&
            $.selectedHistoryPosition !== M &&
            (o(
              17,
              (_ = s
                .getPositions()
                .findIndex(
                  ({ value: t }) => t.id === $.selectedHistoryPosition,
                )),
            ),
            (null == H ? void 0 : H.scrollToIndex) &&
              (null == H || H.scrollToIndex(_))),
          o(18, (M = $.selectedHistoryPosition))),
        1792 & t.$$.dirty &&
          (0 !== i.historyPositionsSortDirection
            ? (o(8, (P = s.getPositions(i.historyPositionsSortBy))),
              -1 === i.historyPositionsSortDirection && P.reverse())
            : o(8, (P = s.getPositions()))),
        576 & t.$$.dirty &&
          o(12, (O = j(U.printAction, s.getPositions(), 18))));
    }),
    [
      H,
      w,
      x,
      S,
      b,
      k,
      U,
      B,
      P,
      s,
      i,
      $,
      O,
      A,
      z,
      V,
      v,
      _,
      M,
      l,
      function (e) {
        t.$$.not_equal(i.historyPositionsSortBy, e) &&
          ((i.historyPositionsSortBy = e), B.set(i));
      },
      function (e) {
        t.$$.not_equal(i.historyPositionsSortDirection, e) &&
          ((i.historyPositionsSortDirection = e), B.set(i));
      },
      (t) => {
        const { value: e } = t;
        z(e);
      },
      function (t) {
        n[t ? "unshift" : "push"](() => {
          ((H = t), o(0, H));
        });
      },
    ]
  );
}
class co extends t {
  constructor(t) {
    (super(),
      e(this, t, lo, $o, o, {
        historyDealsStore: 1,
        historyPositionsStore: 2,
        interactionStore: 3,
        chartController: 16,
        historyStore: 4,
        configStore: 5,
        dealUtils: 6,
        virtualTbody: 0,
        uiSettingsStore: 7,
      }));
  }
}
function ao(t) {
  let e, o;
  return (
    (e = new Z({
      props: {
        inactive: !0,
        sticky: !0,
        $$slots: { default: [mo] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (6 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function po(t) {
  let e,
    o,
    n,
    r,
    i = window.tr(window.lang.trade.history.orders.total.rejected) + "",
    $ = t[1].total.rejected + "";
  return {
    c() {
      ((e = m("div")), (o = h(i)), (n = h(": ")), (r = h($)));
    },
    m(t, s) {
      (a(t, e, s), d(e, o), d(e, n), d(e, r));
    },
    p(t, e) {
      2 & e && $ !== ($ = t[1].total.rejected + "") && w(r, $);
    },
    d(t) {
      t && s(e);
    },
  };
}
function uo(t) {
  let e,
    o,
    n,
    r,
    i,
    $,
    l,
    c,
    p,
    u,
    f,
    x,
    S,
    v,
    b,
    k,
    C = window.tr(window.lang.trade.history.orders.total.title) + "",
    D = t[1].total.total + "",
    P = window.tr(window.lang.trade.history.orders.total.filled) + "",
    O = t[1].total.filled + "",
    U = window.tr(window.lang.trade.history.orders.total.canceled) + "",
    T = t[1].total.canceled + "",
    H = t[1].total.rejected > 0 && po(t);
  return {
    c() {
      ((e = m("div")),
        (o = m("div")),
        (n = h(C)),
        (r = h(": ")),
        (i = h(D)),
        ($ = g()),
        (l = m("div")),
        (c = h(P)),
        (p = h(": ")),
        (u = h(O)),
        (f = g()),
        (x = m("div")),
        (S = h(U)),
        (v = h(": ")),
        (b = h(T)),
        (k = g()),
        H && H.c(),
        y(e, "class", "layout svelte-1i9wdgu"));
    },
    m(t, s) {
      (a(t, e, s),
        d(e, o),
        d(o, n),
        d(o, r),
        d(o, i),
        d(e, $),
        d(e, l),
        d(l, c),
        d(l, p),
        d(l, u),
        d(e, f),
        d(e, x),
        d(x, S),
        d(x, v),
        d(x, b),
        d(e, k),
        H && H.m(e, null));
    },
    p(t, o) {
      (2 & o && D !== (D = t[1].total.total + "") && w(i, D),
        2 & o && O !== (O = t[1].total.filled + "") && w(u, O),
        2 & o && T !== (T = t[1].total.canceled + "") && w(b, T),
        t[1].total.rejected > 0
          ? H
            ? H.p(t, o)
            : ((H = po(t)), H.c(), H.m(e, null))
          : H && (H.d(1), (H = null)));
    },
    d(t) {
      (t && s(e), H && H.d());
    },
  };
}
function mo(t) {
  let e, o;
  return (
    (e = new E({
      props: {
        index: 2,
        colspan: [1, 12],
        $$slots: { default: [uo] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (6 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function fo(t) {
  let e,
    o,
    n = t[1].total && ao(t);
  return {
    c() {
      (n && n.c(), (e = k()));
    },
    m(t, r) {
      (n && n.m(t, r), a(t, e, r), (o = !0));
    },
    p(t, [o]) {
      t[1].total
        ? n
          ? (n.p(t, o), 2 & o && l(n, 1))
          : ((n = ao(t)), n.c(), l(n, 1), n.m(e.parentNode, e))
        : n &&
          (v(),
          $(n, 1, 1, () => {
            n = null;
          }),
          b());
    },
    i(t) {
      o || (l(n), (o = !0));
    },
    o(t) {
      ($(n), (o = !1));
    },
    d(t) {
      (t && s(e), n && n.d(t));
    },
  };
}
function go(t, e, o) {
  let n,
    r = C,
    s = () => (r(), (r = D(i, (t) => o(1, (n = t)))), i);
  t.$$.on_destroy.push(() => r());
  let { historyOrdersStore: i } = e;
  return (
    s(),
    (t.$$set = (t) => {
      "historyOrdersStore" in t && s(o(0, (i = t.historyOrdersStore)));
    }),
    [i, n]
  );
}
class yo extends t {
  constructor(t) {
    (super(), e(this, t, go, fo, o, { historyOrdersStore: 0 }));
  }
}
function ho(t) {
  let e,
    o = A(t[1].timeSetup) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = A(t[1].timeSetup) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function wo(t) {
  let e,
    o = t[1].order + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = t[1].order + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function xo(t) {
  let e,
    o = t[1].symbol + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = t[1].symbol + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function So(t) {
  let e,
    o,
    n = t[0].printType(t[1].type) + "";
  return {
    c() {
      ((e = m("div")),
        (o = h(n)),
        y(e, "class", "svelte-1hstgo1"),
        x(e, "blue", t[0].isBuy(t[1].type)),
        x(e, "red", t[0].isSell(t[1].type)));
    },
    m(t, n) {
      (a(t, e, n), d(e, o));
    },
    p(t, r) {
      (3 & r && n !== (n = t[0].printType(t[1].type) + "") && w(o, n),
        3 & r && x(e, "blue", t[0].isBuy(t[1].type)),
        3 & r && x(e, "red", t[0].isSell(t[1].type)));
    },
    d(t) {
      t && s(e);
    },
  };
}
function vo(t) {
  let e,
    o = t[1].volumeSize + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = t[1].volumeSize + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function bo(t) {
  let e, o;
  return {
    c() {
      ((e = m("span")),
        (o = h(t[2])),
        y(e, "class", "svelte-1hstgo1"),
        x(e, "close-by-sl", t[3]),
        x(e, "close-by-tp", t[4]));
    },
    m(t, n) {
      (a(t, e, n), d(e, o));
    },
    p(t, n) {
      (4 & n && w(o, t[2]),
        8 & n && x(e, "close-by-sl", t[3]),
        16 & n && x(e, "close-by-tp", t[4]));
    },
    d(t) {
      t && s(e);
    },
  };
}
function ko(t) {
  let e;
  return {
    c() {
      e = h(t[5]);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, o) {
      32 & o && w(e, t[5]);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Co(t) {
  let e;
  return {
    c() {
      e = h(t[6]);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, o) {
      64 & o && w(e, t[6]);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Do(t) {
  let e,
    o = A(t[1].timeDone) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = A(t[1].timeDone) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Po(t) {
  let e,
    o = t[0].printOrderStatus(t[1].state) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      3 & n && o !== (o = t[0].printOrderStatus(t[1].state) + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Oo(t) {
  let e,
    o = t[1].comment + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p(t, n) {
      2 & n && o !== (o = t[1].comment + "") && w(e, o);
    },
    d(t) {
      t && s(e);
    },
  };
}
function Uo(t) {
  let e, o, n, r, c, d, u, m, y, h, w, x, S, v, b, k, C, D, P, O, U, T;
  return (
    (e = new E({
      props: {
        index: 0,
        title: A(t[1].timeSetup),
        $$slots: { default: [ho] },
        $$scope: { ctx: t },
      },
    })),
    (n = new E({
      props: {
        index: 1,
        title: t[1].order,
        $$slots: { default: [wo] },
        $$scope: { ctx: t },
      },
    })),
    (c = new E({
      props: {
        index: 2,
        title: t[1].symbol,
        $$slots: { default: [xo] },
        $$scope: { ctx: t },
      },
    })),
    (u = new E({
      props: {
        index: 3,
        title: t[0].printType(t[1].type),
        $$slots: { default: [So] },
        $$scope: { ctx: t },
      },
    })),
    (y = new E({
      props: {
        index: 4,
        title: t[1].volume,
        $$slots: { default: [vo] },
        $$scope: { ctx: t },
      },
    })),
    (w = new E({
      props: {
        index: 5,
        title: t[3] || t[4] ? t[7] : t[2],
        $$slots: { default: [bo] },
        $$scope: { ctx: t },
      },
    })),
    (S = new E({
      props: {
        index: 6,
        title: t[5],
        $$slots: { default: [ko] },
        $$scope: { ctx: t },
      },
    })),
    (b = new E({
      props: {
        index: 7,
        title: t[6],
        $$slots: { default: [Co] },
        $$scope: { ctx: t },
      },
    })),
    (C = new E({
      props: {
        index: 8,
        title: A(t[1].timeDone),
        $$slots: { default: [Do] },
        $$scope: { ctx: t },
      },
    })),
    (P = new E({
      props: {
        index: 9,
        title: t[0].printOrderStatus(t[1].state),
        $$slots: { default: [Po] },
        $$scope: { ctx: t },
      },
    })),
    (U = new E({
      props: {
        index: 10,
        title: t[1].comment,
        $$slots: { default: [Oo] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (f(e.$$.fragment),
          (o = g()),
          f(n.$$.fragment),
          (r = g()),
          f(c.$$.fragment),
          (d = g()),
          f(u.$$.fragment),
          (m = g()),
          f(y.$$.fragment),
          (h = g()),
          f(w.$$.fragment),
          (x = g()),
          f(S.$$.fragment),
          (v = g()),
          f(b.$$.fragment),
          (k = g()),
          f(C.$$.fragment),
          (D = g()),
          f(P.$$.fragment),
          (O = g()),
          f(U.$$.fragment));
      },
      m(t, s) {
        (p(e, t, s),
          a(t, o, s),
          p(n, t, s),
          a(t, r, s),
          p(c, t, s),
          a(t, d, s),
          p(u, t, s),
          a(t, m, s),
          p(y, t, s),
          a(t, h, s),
          p(w, t, s),
          a(t, x, s),
          p(S, t, s),
          a(t, v, s),
          p(b, t, s),
          a(t, k, s),
          p(C, t, s),
          a(t, D, s),
          p(P, t, s),
          a(t, O, s),
          p(U, t, s),
          (T = !0));
      },
      p(t, o) {
        const r = {};
        (2 & o && (r.title = A(t[1].timeSetup)),
          514 & o && (r.$$scope = { dirty: o, ctx: t }),
          e.$set(r));
        const s = {};
        (2 & o && (s.title = t[1].order),
          514 & o && (s.$$scope = { dirty: o, ctx: t }),
          n.$set(s));
        const i = {};
        (2 & o && (i.title = t[1].symbol),
          514 & o && (i.$$scope = { dirty: o, ctx: t }),
          c.$set(i));
        const $ = {};
        (3 & o && ($.title = t[0].printType(t[1].type)),
          515 & o && ($.$$scope = { dirty: o, ctx: t }),
          u.$set($));
        const l = {};
        (2 & o && (l.title = t[1].volume),
          514 & o && (l.$$scope = { dirty: o, ctx: t }),
          y.$set(l));
        const a = {};
        (156 & o && (a.title = t[3] || t[4] ? t[7] : t[2]),
          540 & o && (a.$$scope = { dirty: o, ctx: t }),
          w.$set(a));
        const d = {};
        (32 & o && (d.title = t[5]),
          544 & o && (d.$$scope = { dirty: o, ctx: t }),
          S.$set(d));
        const p = {};
        (64 & o && (p.title = t[6]),
          576 & o && (p.$$scope = { dirty: o, ctx: t }),
          b.$set(p));
        const m = {};
        (2 & o && (m.title = A(t[1].timeDone)),
          514 & o && (m.$$scope = { dirty: o, ctx: t }),
          C.$set(m));
        const f = {};
        (3 & o && (f.title = t[0].printOrderStatus(t[1].state)),
          515 & o && (f.$$scope = { dirty: o, ctx: t }),
          P.$set(f));
        const g = {};
        (2 & o && (g.title = t[1].comment),
          514 & o && (g.$$scope = { dirty: o, ctx: t }),
          U.$set(g));
      },
      i(t) {
        T ||
          (l(e.$$.fragment, t),
          l(n.$$.fragment, t),
          l(c.$$.fragment, t),
          l(u.$$.fragment, t),
          l(y.$$.fragment, t),
          l(w.$$.fragment, t),
          l(S.$$.fragment, t),
          l(b.$$.fragment, t),
          l(C.$$.fragment, t),
          l(P.$$.fragment, t),
          l(U.$$.fragment, t),
          (T = !0));
      },
      o(t) {
        ($(e.$$.fragment, t),
          $(n.$$.fragment, t),
          $(c.$$.fragment, t),
          $(u.$$.fragment, t),
          $(y.$$.fragment, t),
          $(w.$$.fragment, t),
          $(S.$$.fragment, t),
          $(b.$$.fragment, t),
          $(C.$$.fragment, t),
          $(P.$$.fragment, t),
          $(U.$$.fragment, t),
          (T = !1));
      },
      d(t) {
        (t && (s(o), s(r), s(d), s(m), s(h), s(x), s(v), s(k), s(D), s(O)),
          i(e, t),
          i(n, t),
          i(c, t),
          i(u, t),
          i(y, t),
          i(w, t),
          i(S, t),
          i(b, t),
          i(C, t),
          i(P, t),
          i(U, t));
      },
    }
  );
}
function To(t) {
  let e, o;
  return (
    (e = new Z({ props: { $$slots: { default: [Uo] }, $$scope: { ctx: t } } })),
    e.$on("mousedown", t[8]),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, [o]) {
        const n = {};
        (767 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function Ho(t, e, o) {
  let n,
    r,
    s,
    i,
    $,
    l,
    { orderUtils: c } = e,
    { item: a } = e;
  return (
    (t.$$set = (t) => {
      ("orderUtils" in t && o(0, (c = t.orderUtils)),
        "item" in t && o(1, (a = t.item)));
    }),
    (t.$$.update = () => {
      30 & t.$$.dirty &&
        (o(5, (n = a.sl ? _(a.sl, a.digits) : "")),
        o(6, (r = a.tp ? _(a.tp, a.digits) : "")),
        o(2, (s = a.price ? _(a.price, a.digits) : "")),
        o(3, (i = 3 === a.typeReason)),
        o(4, ($ = 4 === a.typeReason)),
        o(7, (l = `Close by ${i ? "SL" : ""}${$ ? "TP" : ""} ${s}`)));
    }),
    [
      c,
      a,
      s,
      i,
      $,
      n,
      r,
      l,
      function (e) {
        S.call(this, t, e);
      },
    ]
  );
}
class Bo extends t {
  constructor(t) {
    (super(), e(this, t, Ho, To, o, { orderUtils: 0, item: 1 }));
  }
}
function Ao(t, e, o) {
  const n = t.slice();
  return ((n[15] = e[o]), (n[17] = o), n);
}
function _o(t) {
  let e, o;
  return (
    (e = new Bo({ props: { item: t[18].value, orderUtils: t[2] } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (262144 & o && (n.item = t[18].value),
          4 & o && (n.orderUtils = t[2]),
          e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function Mo(t) {
  let e,
    o = t[15].title + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function zo(t) {
  let e, o, d, u, m;
  function y(e) {
    t[12](e);
  }
  function h(e) {
    t[13](e);
  }
  let w = {
    right: !t[15].left,
    value: t[15].key,
    $$slots: { default: [Mo] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[7].historyOrdersSortBy &&
      (w.sortBy = t[7].historyOrdersSortBy),
    void 0 !== t[7].historyOrdersSortDirection &&
      (w.direction = t[7].historyOrdersSortDirection),
    (e = new et({ props: w })),
    n.push(() => r(e, "sortBy", y)),
    n.push(() => r(e, "direction", h)),
    {
      c() {
        (f(e.$$.fragment), (u = g()));
      },
      m(t, o) {
        (p(e, t, o), a(t, u, o), (m = !0));
      },
      p(t, n) {
        const r = {};
        (524288 & n && (r.$$scope = { dirty: n, ctx: t }),
          !o &&
            128 & n &&
            ((o = !0),
            (r.sortBy = t[7].historyOrdersSortBy),
            c(() => (o = !1))),
          !d &&
            128 & n &&
            ((d = !0),
            (r.direction = t[7].historyOrdersSortDirection),
            c(() => (d = !1))),
          e.$set(r));
      },
      i(t) {
        m || (l(e.$$.fragment, t), (m = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (m = !1));
      },
      d(t) {
        (t && s(u), i(e, t));
      },
    }
  );
}
function Vo(t) {
  let e, o;
  return (
    (e = new tt({
      props: {
        right: !t[15].left,
        width: t[8][t[15].key],
        index: t[17],
        level: t[15].level ?? 0,
        title: t[15].description || t[15].title,
        visible:
          t[15].showAlways || t[7].historyOrdersColumnsVisible[t[15].key],
        $$slots: { default: [zo] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (256 & o && (n.width = t[8][t[15].key]),
          128 & o &&
            (n.visible =
              t[15].showAlways || t[7].historyOrdersColumnsVisible[t[15].key]),
          524416 & o && (n.$$scope = { dirty: o, ctx: t }),
          e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function No(t) {
  let e,
    o,
    n = O(t[10]),
    r = [];
  for (let s = 0; s < n.length; s += 1) r[s] = Vo(Ao(t, n, s));
  const i = (t) =>
    $(r[t], 1, 1, () => {
      r[t] = null;
    });
  return {
    c() {
      for (let t = 0; t < r.length; t += 1) r[t].c();
      e = k();
    },
    m(t, n) {
      for (let e = 0; e < r.length; e += 1) r[e] && r[e].m(t, n);
      (a(t, e, n), (o = !0));
    },
    p(t, o) {
      if (1408 & o) {
        let s;
        for (n = O(t[10]), s = 0; s < n.length; s += 1) {
          const i = Ao(t, n, s);
          r[s]
            ? (r[s].p(i, o), l(r[s], 1))
            : ((r[s] = Vo(i)), r[s].c(), l(r[s], 1), r[s].m(e.parentNode, e));
        }
        for (v(), s = n.length; s < r.length; s += 1) i(s);
        b();
      }
    },
    i(t) {
      if (!o) {
        for (let t = 0; t < n.length; t += 1) l(r[t]);
        o = !0;
      }
    },
    o(t) {
      r = r.filter(Boolean);
      for (let e = 0; e < r.length; e += 1) $(r[e]);
      o = !1;
    },
    d(t) {
      (t && s(e), U(r, t));
    },
  };
}
function Io(t) {
  let e, o;
  return (
    (e = new Z({ props: { $$slots: { default: [No] }, $$scope: { ctx: t } } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (524672 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function jo(t) {
  let e, o;
  return (
    (e = new yo({ props: { historyOrdersStore: t[3] } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (8 & o && (n.historyOrdersStore = t[3]), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function qo(t) {
  let e,
    o = window.tr(window.lang.trade.history.empty) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function Fo(t) {
  let e, o;
  return (
    (e = new K({ props: { $$slots: { title: [qo] }, $$scope: { ctx: t } } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (524288 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function Yo(t) {
  let e,
    o,
    n = {
      list: t[5],
      itemHeight: 30,
      $$slots: {
        empty: [Fo],
        total: [jo],
        head: [Io],
        default: [
          _o,
          ({ item: t }) => ({ 18: t }),
          ({ item: t }) => (t ? 262144 : 0),
        ],
      },
      $$scope: { ctx: t },
    };
  return (
    (e = new G({ props: n })),
    t[14](e),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (32 & o && (n.list = t[5]),
          786828 & o && (n.$$scope = { dirty: o, ctx: t }),
          e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(o) {
        (t[14](null), i(e, o));
      },
    }
  );
}
function Ro(t) {
  let e, o;
  return (
    (e = new X({ props: { overlay: !0 } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function Lo(t) {
  let e, o, n, r, c;
  o = new Q({
    props: {
      hScroll: t[7].historyOrdersHorizontalScroll,
      $$slots: { default: [Yo] },
      $$scope: { ctx: t },
    },
  });
  let d = t[6].loading && Ro();
  return {
    c() {
      ((e = m("div")),
        f(o.$$.fragment),
        (n = g()),
        d && d.c(),
        (r = k()),
        P(
          e,
          "height",
          t[9]
            ? "calc(100% - var(--history-custom-period-height-desktop))"
            : "100%",
        ));
    },
    m(t, s) {
      (a(t, e, s),
        p(o, e, null),
        a(t, n, s),
        d && d.m(t, s),
        a(t, r, s),
        (c = !0));
    },
    p(t, [n]) {
      const s = {};
      (128 & n && (s.hScroll = t[7].historyOrdersHorizontalScroll),
        524717 & n && (s.$$scope = { dirty: n, ctx: t }),
        o.$set(s),
        512 & n &&
          P(
            e,
            "height",
            t[9]
              ? "calc(100% - var(--history-custom-period-height-desktop))"
              : "100%",
          ),
        t[6].loading
          ? d
            ? 64 & n && l(d, 1)
            : ((d = Ro()), d.c(), l(d, 1), d.m(r.parentNode, r))
          : d &&
            (v(),
            $(d, 1, 1, () => {
              d = null;
            }),
            b()));
    },
    i(t) {
      c || (l(o.$$.fragment, t), l(d), (c = !0));
    },
    o(t) {
      ($(o.$$.fragment, t), $(d), (c = !1));
    },
    d(t) {
      (t && (s(e), s(n), s(r)), i(o), d && d.d(t));
    },
  };
}
function Jo(t, e, o) {
  let r,
    s,
    i,
    $ = C,
    l = () => ($(), ($ = D(f, (t) => o(6, (r = t)))), f),
    c = C,
    a = () => (c(), (c = D(u, (t) => o(7, (s = t)))), u),
    d = C,
    p = () => (d(), (d = D(g, (t) => o(11, (i = t)))), g);
  (t.$$.on_destroy.push(() => $()),
    t.$$.on_destroy.push(() => c()),
    t.$$.on_destroy.push(() => d()));
  let { uiSettingsStore: u } = e;
  a();
  let { orderUtils: m } = e,
    { historyOrdersStore: f } = e;
  l();
  let { historyStore: g } = e;
  p();
  let y,
    h,
    w,
    { virtualTbody: x = null } = e;
  const S = q.map((t) => {
    var e;
    return {
      ...t,
      title: F(t.key).title,
      description: null == (e = F(t.key)) ? void 0 : e.description,
    };
  });
  return (
    (t.$$set = (t) => {
      ("uiSettingsStore" in t && a(o(1, (u = t.uiSettingsStore))),
        "orderUtils" in t && o(2, (m = t.orderUtils)),
        "historyOrdersStore" in t && l(o(3, (f = t.historyOrdersStore))),
        "historyStore" in t && p(o(4, (g = t.historyStore))),
        "virtualTbody" in t && o(0, (x = t.virtualTbody)));
    }),
    (t.$$.update = () => {
      (2048 & t.$$.dirty && o(9, (w = -1 === i.period)),
        224 & t.$$.dirty &&
          (0 !== s.historyOrdersSortDirection
            ? (o(5, (y = r.getOrders(s.historyOrdersSortBy))),
              -1 === s.historyOrdersSortDirection && y.reverse())
            : o(5, (y = r.getOrders()))),
        68 & t.$$.dirty && o(8, (h = Y(m, r.getOrders(), 18))));
    }),
    [
      x,
      u,
      m,
      f,
      g,
      y,
      r,
      s,
      h,
      w,
      S,
      i,
      function (e) {
        t.$$.not_equal(s.historyOrdersSortBy, e) &&
          ((s.historyOrdersSortBy = e), u.set(s));
      },
      function (e) {
        t.$$.not_equal(s.historyOrdersSortDirection, e) &&
          ((s.historyOrdersSortDirection = e), u.set(s));
      },
      function (t) {
        n[t ? "unshift" : "push"](() => {
          ((x = t), o(0, x));
        });
      },
    ]
  );
}
class Wo extends t {
  constructor(t) {
    (super(),
      e(this, t, Jo, Lo, o, {
        uiSettingsStore: 1,
        orderUtils: 2,
        historyOrdersStore: 3,
        historyStore: 4,
        virtualTbody: 0,
      }));
  }
}
function Xo(t, e, o) {
  const n = t.slice();
  return ((n[57] = e[o]), (n[58] = e), (n[59] = o), n);
}
function Zo(t, e, o) {
  const n = t.slice();
  return ((n[57] = e[o]), (n[60] = e), (n[61] = o), n);
}
function Eo(t, e, o) {
  const n = t.slice();
  return ((n[57] = e[o]), (n[62] = e), (n[63] = o), n);
}
function Qo(t) {
  let e,
    o = window.tr(window.lang.trade.history.menu.positions) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function Go(t) {
  let e,
    o = window.tr(window.lang.trade.history.menu.deals) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function Ko(t) {
  let e,
    o = window.tr(window.lang.trade.history.menu.orders) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function tn(t) {
  let e,
    o = window.tr(window.lang.trade.history.menu.period.title) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function en(t) {
  let e,
    o,
    n,
    r,
    i = window.tr(window.lang.trade.history.menu.period.today) + "";
  return {
    c() {
      ((e = m("div")),
        (o = h(i)),
        (n = g()),
        (r = m("span")),
        (r.textContent = `${t[21]}`),
        y(r, "class", "secondary svelte-itfcm8"));
    },
    m(t, s) {
      (a(t, e, s), d(e, o), d(e, n), d(e, r));
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function on(t) {
  let e,
    o,
    n,
    r,
    i = window.tr(window.lang.trade.history.menu.period.lastWeek) + "";
  return {
    c() {
      ((e = m("div")),
        (o = h(i)),
        (n = g()),
        (r = m("span")),
        (r.textContent = `${R(1e3 * t[20](2).from, _n)}\n                        —\n                        ${t[21]}`),
        y(r, "class", "secondary svelte-itfcm8"));
    },
    m(t, s) {
      (a(t, e, s), d(e, o), d(e, n), d(e, r));
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function nn(t) {
  let e,
    o,
    n,
    r,
    i = window.tr(window.lang.trade.history.menu.period.lastMonth) + "";
  return {
    c() {
      ((e = m("div")),
        (o = h(i)),
        (n = g()),
        (r = m("span")),
        (r.textContent = `${R(1e3 * t[20](3).from, _n)}\n                        —\n                        ${t[21]}`),
        y(r, "class", "secondary svelte-itfcm8"));
    },
    m(t, s) {
      (a(t, e, s), d(e, o), d(e, n), d(e, r));
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function rn(t) {
  let e,
    o,
    n,
    r,
    i = window.tr(window.lang.trade.history.menu.period.last3Months) + "";
  return {
    c() {
      ((e = m("div")),
        (o = h(i)),
        (n = g()),
        (r = m("span")),
        (r.textContent = `${R(1e3 * t[20](4).from, _n)}\n                        —\n                        ${t[21]}`),
        y(r, "class", "secondary svelte-itfcm8"));
    },
    m(t, s) {
      (a(t, e, s), d(e, o), d(e, n), d(e, r));
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function sn(t) {
  let e,
    o,
    n,
    r,
    i = window.tr(window.lang.trade.history.menu.period.last6months) + "";
  return {
    c() {
      ((e = m("div")),
        (o = h(i)),
        (n = g()),
        (r = m("span")),
        (r.textContent = `${R(1e3 * t[20](5).from, _n)}\n                        —\n                        ${t[21]}`),
        y(r, "class", "secondary svelte-itfcm8"));
    },
    m(t, s) {
      (a(t, e, s), d(e, o), d(e, n), d(e, r));
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function $n(t) {
  let e,
    o,
    n,
    r,
    i = window.tr(window.lang.trade.history.menu.period.lastYear) + "";
  return {
    c() {
      ((e = m("div")),
        (o = h(i)),
        (n = g()),
        (r = m("span")),
        (r.textContent = `${R(1e3 * t[20](6).from, _n)}\n                        —\n                        ${t[21]}`),
        y(r, "class", "secondary svelte-itfcm8"));
    },
    m(t, s) {
      (a(t, e, s), d(e, o), d(e, n), d(e, r));
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function ln(t) {
  let e,
    o = window.tr(window.lang.trade.history.menu.period.all) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function cn(t) {
  let e,
    o = window.tr(window.lang.trade.history.menu.period.customPeriod) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function an(t) {
  let e, o, d, u, m, y, h, w, x, S, v, b, k, C, D, P, O, U, T, H, B, A, _, M;
  function z(e) {
    t[26](e);
  }
  let V = {
    checked: 1 === t[12].period,
    $$slots: { default: [en] },
    $$scope: { ctx: t },
  };
  function N(e) {
    t[28](e);
  }
  (void 0 !== t[17] && (V.group = t[17]),
    (e = new nt({ props: V })),
    n.push(() => r(e, "group", z)),
    e.$on("click", t[27]));
  let I = {
    checked: 2 === t[12].period,
    $$slots: { default: [on] },
    $$scope: { ctx: t },
  };
  function j(e) {
    t[30](e);
  }
  (void 0 !== t[17] && (I.group = t[17]),
    (u = new nt({ props: I })),
    n.push(() => r(u, "group", N)),
    u.$on("click", t[29]));
  let q = {
    checked: 3 === t[12].period,
    $$slots: { default: [nn] },
    $$scope: { ctx: t },
  };
  function F(e) {
    t[32](e);
  }
  (void 0 !== t[17] && (q.group = t[17]),
    (h = new nt({ props: q })),
    n.push(() => r(h, "group", j)),
    h.$on("click", t[31]));
  let Y = {
    checked: 4 === t[12].period,
    $$slots: { default: [rn] },
    $$scope: { ctx: t },
  };
  function R(e) {
    t[34](e);
  }
  (void 0 !== t[17] && (Y.group = t[17]),
    (S = new nt({ props: Y })),
    n.push(() => r(S, "group", F)),
    S.$on("click", t[33]));
  let L = {
    checked: 5 === t[12].period,
    $$slots: { default: [sn] },
    $$scope: { ctx: t },
  };
  function J(e) {
    t[36](e);
  }
  (void 0 !== t[17] && (L.group = t[17]),
    (k = new nt({ props: L })),
    n.push(() => r(k, "group", R)),
    k.$on("click", t[35]));
  let W = {
    checked: 6 === t[12].period,
    $$slots: { default: [$n] },
    $$scope: { ctx: t },
  };
  function X(e) {
    t[38](e);
  }
  (void 0 !== t[17] && (W.group = t[17]),
    (P = new nt({ props: W })),
    n.push(() => r(P, "group", J)),
    P.$on("click", t[37]));
  let Z = {
    checked: 0 === t[12].period,
    $$slots: { default: [ln] },
    $$scope: { ctx: t },
  };
  function E(e) {
    t[40](e);
  }
  (void 0 !== t[17] && (Z.group = t[17]),
    (T = new nt({ props: Z })),
    n.push(() => r(T, "group", X)),
    T.$on("click", t[39]));
  let Q = {
    checked: -1 === t[12].period,
    $$slots: { default: [cn] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[17] && (Q.group = t[17]),
    (A = new nt({ props: Q })),
    n.push(() => r(A, "group", E)),
    A.$on("click", t[41]),
    {
      c() {
        (f(e.$$.fragment),
          (d = g()),
          f(u.$$.fragment),
          (y = g()),
          f(h.$$.fragment),
          (x = g()),
          f(S.$$.fragment),
          (b = g()),
          f(k.$$.fragment),
          (D = g()),
          f(P.$$.fragment),
          (U = g()),
          f(T.$$.fragment),
          (B = g()),
          f(A.$$.fragment));
      },
      m(t, o) {
        (p(e, t, o),
          a(t, d, o),
          p(u, t, o),
          a(t, y, o),
          p(h, t, o),
          a(t, x, o),
          p(S, t, o),
          a(t, b, o),
          p(k, t, o),
          a(t, D, o),
          p(P, t, o),
          a(t, U, o),
          p(T, t, o),
          a(t, B, o),
          p(A, t, o),
          (M = !0));
      },
      p(t, n) {
        const r = {};
        (4096 & n[0] && (r.checked = 1 === t[12].period),
          4 & n[2] && (r.$$scope = { dirty: n, ctx: t }),
          !o &&
            131072 & n[0] &&
            ((o = !0), (r.group = t[17]), c(() => (o = !1))),
          e.$set(r));
        const s = {};
        (4096 & n[0] && (s.checked = 2 === t[12].period),
          4 & n[2] && (s.$$scope = { dirty: n, ctx: t }),
          !m &&
            131072 & n[0] &&
            ((m = !0), (s.group = t[17]), c(() => (m = !1))),
          u.$set(s));
        const i = {};
        (4096 & n[0] && (i.checked = 3 === t[12].period),
          4 & n[2] && (i.$$scope = { dirty: n, ctx: t }),
          !w &&
            131072 & n[0] &&
            ((w = !0), (i.group = t[17]), c(() => (w = !1))),
          h.$set(i));
        const $ = {};
        (4096 & n[0] && ($.checked = 4 === t[12].period),
          4 & n[2] && ($.$$scope = { dirty: n, ctx: t }),
          !v &&
            131072 & n[0] &&
            ((v = !0), ($.group = t[17]), c(() => (v = !1))),
          S.$set($));
        const l = {};
        (4096 & n[0] && (l.checked = 5 === t[12].period),
          4 & n[2] && (l.$$scope = { dirty: n, ctx: t }),
          !C &&
            131072 & n[0] &&
            ((C = !0), (l.group = t[17]), c(() => (C = !1))),
          k.$set(l));
        const a = {};
        (4096 & n[0] && (a.checked = 6 === t[12].period),
          4 & n[2] && (a.$$scope = { dirty: n, ctx: t }),
          !O &&
            131072 & n[0] &&
            ((O = !0), (a.group = t[17]), c(() => (O = !1))),
          P.$set(a));
        const d = {};
        (4096 & n[0] && (d.checked = 0 === t[12].period),
          4 & n[2] && (d.$$scope = { dirty: n, ctx: t }),
          !H &&
            131072 & n[0] &&
            ((H = !0), (d.group = t[17]), c(() => (H = !1))),
          T.$set(d));
        const p = {};
        (4096 & n[0] && (p.checked = -1 === t[12].period),
          4 & n[2] && (p.$$scope = { dirty: n, ctx: t }),
          !_ &&
            131072 & n[0] &&
            ((_ = !0), (p.group = t[17]), c(() => (_ = !1))),
          A.$set(p));
      },
      i(t) {
        M ||
          (l(e.$$.fragment, t),
          l(u.$$.fragment, t),
          l(h.$$.fragment, t),
          l(S.$$.fragment, t),
          l(k.$$.fragment, t),
          l(P.$$.fragment, t),
          l(T.$$.fragment, t),
          l(A.$$.fragment, t),
          (M = !0));
      },
      o(t) {
        ($(e.$$.fragment, t),
          $(u.$$.fragment, t),
          $(h.$$.fragment, t),
          $(S.$$.fragment, t),
          $(k.$$.fragment, t),
          $(P.$$.fragment, t),
          $(T.$$.fragment, t),
          $(A.$$.fragment, t),
          (M = !1));
      },
      d(t) {
        (t && (s(d), s(y), s(x), s(b), s(D), s(U), s(B)),
          i(e, t),
          i(u, t),
          i(h, t),
          i(S, t),
          i(k, t),
          i(P, t),
          i(T, t),
          i(A, t));
      },
    }
  );
}
function dn(t) {
  let e,
    o = window.tr(window.lang.trade.history.menu.columns.title) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function pn(t) {
  let e,
    o,
    d,
    u,
    m,
    y,
    h = O(N),
    w = [];
  for (let n = 0; n < h.length; n += 1) w[n] = mn(Eo(t, h, n));
  const x = (t) =>
    $(w[t], 1, 1, () => {
      w[t] = null;
    });
  function S(e) {
    t[43](e);
  }
  let k = {
    line: "top",
    toggle: !0,
    $$slots: { default: [fn] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[19].historyPositionsHorizontalScroll &&
      (k.checked = t[19].historyPositionsHorizontalScroll),
    (o = new nt({ props: k })),
    n.push(() => r(o, "checked", S)),
    (m = new nt({
      props: { $$slots: { default: [gn] }, $$scope: { ctx: t } },
    })),
    m.$on("click", t[44]),
    m.$on("click", function () {
      H(t[56]) && t[56].apply(this, arguments);
    }),
    {
      c() {
        for (let t = 0; t < w.length; t += 1) w[t].c();
        ((e = g()), f(o.$$.fragment), (u = g()), f(m.$$.fragment));
      },
      m(t, n) {
        for (let e = 0; e < w.length; e += 1) w[e] && w[e].m(t, n);
        (a(t, e, n), p(o, t, n), a(t, u, n), p(m, t, n), (y = !0));
      },
      p(n, r) {
        if (((t = n), 524288 & r[0])) {
          let o;
          for (h = O(N), o = 0; o < h.length; o += 1) {
            const n = Eo(t, h, o);
            w[o]
              ? (w[o].p(n, r), l(w[o], 1))
              : ((w[o] = mn(n)), w[o].c(), l(w[o], 1), w[o].m(e.parentNode, e));
          }
          for (v(), o = h.length; o < w.length; o += 1) x(o);
          b();
        }
        const s = {};
        (4 & r[2] && (s.$$scope = { dirty: r, ctx: t }),
          !d &&
            524288 & r[0] &&
            ((d = !0),
            (s.checked = t[19].historyPositionsHorizontalScroll),
            c(() => (d = !1))),
          o.$set(s));
        const i = {};
        (4 & r[2] && (i.$$scope = { dirty: r, ctx: t }), m.$set(i));
      },
      i(t) {
        if (!y) {
          for (let t = 0; t < h.length; t += 1) l(w[t]);
          (l(o.$$.fragment, t), l(m.$$.fragment, t), (y = !0));
        }
      },
      o(t) {
        w = w.filter(Boolean);
        for (let e = 0; e < w.length; e += 1) $(w[e]);
        ($(o.$$.fragment, t), $(m.$$.fragment, t), (y = !1));
      },
      d(t) {
        (t && (s(e), s(u)), U(w, t), i(o, t), i(m, t));
      },
    }
  );
}
function un(t) {
  let e,
    o = I(t[57].key).title + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function mn(t) {
  let e,
    o,
    d =
      !t[57].showAlways &&
      (function (t) {
        let e, o, s;
        function a(e) {
          t[42](e, t[57]);
        }
        let d = { toggle: !0, $$slots: { default: [un] }, $$scope: { ctx: t } };
        return (
          void 0 !== t[19].historyPositionsColumnsVisible[t[57].key] &&
            (d.checked = t[19].historyPositionsColumnsVisible[t[57].key]),
          (e = new nt({ props: d })),
          n.push(() => r(e, "checked", a)),
          {
            c() {
              f(e.$$.fragment);
            },
            m(t, o) {
              (p(e, t, o), (s = !0));
            },
            p(n, r) {
              t = n;
              const s = {};
              (4 & r[2] && (s.$$scope = { dirty: r, ctx: t }),
                !o &&
                  524288 & r[0] &&
                  ((o = !0),
                  (s.checked = t[19].historyPositionsColumnsVisible[t[57].key]),
                  c(() => (o = !1))),
                e.$set(s));
            },
            i(t) {
              s || (l(e.$$.fragment, t), (s = !0));
            },
            o(t) {
              ($(e.$$.fragment, t), (s = !1));
            },
            d(t) {
              i(e, t);
            },
          }
        );
      })(t);
  return {
    c() {
      (d && d.c(), (e = k()));
    },
    m(t, n) {
      (d && d.m(t, n), a(t, e, n), (o = !0));
    },
    p(t, e) {
      t[57].showAlways || d.p(t, e);
    },
    i(t) {
      o || (l(d), (o = !0));
    },
    o(t) {
      ($(d), (o = !1));
    },
    d(t) {
      (t && s(e), d && d.d(t));
    },
  };
}
function fn(t) {
  let e,
    o = window.tr(window.lang.trade.history.menu.columns.horizontalScroll) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function gn(t) {
  let e,
    o = window.tr(window.lang.trade.history.menu.columns.resetAll) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function yn(t) {
  let e,
    o,
    d,
    u,
    m,
    y,
    h = O(q),
    w = [];
  for (let n = 0; n < h.length; n += 1) w[n] = wn(Zo(t, h, n));
  const x = (t) =>
    $(w[t], 1, 1, () => {
      w[t] = null;
    });
  function S(e) {
    t[46](e);
  }
  let k = {
    line: "top",
    toggle: !0,
    $$slots: { default: [xn] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[19].historyOrdersHorizontalScroll &&
      (k.checked = t[19].historyOrdersHorizontalScroll),
    (o = new nt({ props: k })),
    n.push(() => r(o, "checked", S)),
    (m = new nt({
      props: { $$slots: { default: [Sn] }, $$scope: { ctx: t } },
    })),
    m.$on("click", t[47]),
    m.$on("click", function () {
      H(t[56]) && t[56].apply(this, arguments);
    }),
    {
      c() {
        for (let t = 0; t < w.length; t += 1) w[t].c();
        ((e = g()), f(o.$$.fragment), (u = g()), f(m.$$.fragment));
      },
      m(t, n) {
        for (let e = 0; e < w.length; e += 1) w[e] && w[e].m(t, n);
        (a(t, e, n), p(o, t, n), a(t, u, n), p(m, t, n), (y = !0));
      },
      p(n, r) {
        if (((t = n), 524288 & r[0])) {
          let o;
          for (h = O(q), o = 0; o < h.length; o += 1) {
            const n = Zo(t, h, o);
            w[o]
              ? (w[o].p(n, r), l(w[o], 1))
              : ((w[o] = wn(n)), w[o].c(), l(w[o], 1), w[o].m(e.parentNode, e));
          }
          for (v(), o = h.length; o < w.length; o += 1) x(o);
          b();
        }
        const s = {};
        (4 & r[2] && (s.$$scope = { dirty: r, ctx: t }),
          !d &&
            524288 & r[0] &&
            ((d = !0),
            (s.checked = t[19].historyOrdersHorizontalScroll),
            c(() => (d = !1))),
          o.$set(s));
        const i = {};
        (4 & r[2] && (i.$$scope = { dirty: r, ctx: t }), m.$set(i));
      },
      i(t) {
        if (!y) {
          for (let t = 0; t < h.length; t += 1) l(w[t]);
          (l(o.$$.fragment, t), l(m.$$.fragment, t), (y = !0));
        }
      },
      o(t) {
        w = w.filter(Boolean);
        for (let e = 0; e < w.length; e += 1) $(w[e]);
        ($(o.$$.fragment, t), $(m.$$.fragment, t), (y = !1));
      },
      d(t) {
        (t && (s(e), s(u)), U(w, t), i(o, t), i(m, t));
      },
    }
  );
}
function hn(t) {
  let e,
    o = F(t[57].key).title + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function wn(t) {
  let e,
    o,
    d =
      !t[57].showAlways &&
      (function (t) {
        let e, o, s;
        function a(e) {
          t[45](e, t[57]);
        }
        let d = { toggle: !0, $$slots: { default: [hn] }, $$scope: { ctx: t } };
        return (
          void 0 !== t[19].historyOrdersColumnsVisible[t[57].key] &&
            (d.checked = t[19].historyOrdersColumnsVisible[t[57].key]),
          (e = new nt({ props: d })),
          n.push(() => r(e, "checked", a)),
          {
            c() {
              f(e.$$.fragment);
            },
            m(t, o) {
              (p(e, t, o), (s = !0));
            },
            p(n, r) {
              t = n;
              const s = {};
              (4 & r[2] && (s.$$scope = { dirty: r, ctx: t }),
                !o &&
                  524288 & r[0] &&
                  ((o = !0),
                  (s.checked = t[19].historyOrdersColumnsVisible[t[57].key]),
                  c(() => (o = !1))),
                e.$set(s));
            },
            i(t) {
              s || (l(e.$$.fragment, t), (s = !0));
            },
            o(t) {
              ($(e.$$.fragment, t), (s = !1));
            },
            d(t) {
              i(e, t);
            },
          }
        );
      })(t);
  return {
    c() {
      (d && d.c(), (e = k()));
    },
    m(t, n) {
      (d && d.m(t, n), a(t, e, n), (o = !0));
    },
    p(t, e) {
      t[57].showAlways || d.p(t, e);
    },
    i(t) {
      o || (l(d), (o = !0));
    },
    o(t) {
      ($(d), (o = !1));
    },
    d(t) {
      (t && s(e), d && d.d(t));
    },
  };
}
function xn(t) {
  let e,
    o = window.tr(window.lang.trade.history.menu.columns.horizontalScroll) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function Sn(t) {
  let e,
    o = window.tr(window.lang.trade.history.menu.columns.resetAll) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function vn(t) {
  let e,
    o,
    d,
    u,
    m,
    y,
    h = O(M),
    w = [];
  for (let n = 0; n < h.length; n += 1) w[n] = kn(Xo(t, h, n));
  const x = (t) =>
    $(w[t], 1, 1, () => {
      w[t] = null;
    });
  function S(e) {
    t[49](e);
  }
  let k = {
    line: "top",
    toggle: !0,
    $$slots: { default: [Cn] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[19].historyDealsHorizontalScroll &&
      (k.checked = t[19].historyDealsHorizontalScroll),
    (o = new nt({ props: k })),
    n.push(() => r(o, "checked", S)),
    (m = new nt({
      props: { $$slots: { default: [Dn] }, $$scope: { ctx: t } },
    })),
    m.$on("click", t[50]),
    m.$on("click", function () {
      H(t[56]) && t[56].apply(this, arguments);
    }),
    {
      c() {
        for (let t = 0; t < w.length; t += 1) w[t].c();
        ((e = g()), f(o.$$.fragment), (u = g()), f(m.$$.fragment));
      },
      m(t, n) {
        for (let e = 0; e < w.length; e += 1) w[e] && w[e].m(t, n);
        (a(t, e, n), p(o, t, n), a(t, u, n), p(m, t, n), (y = !0));
      },
      p(n, r) {
        if (((t = n), 524288 & r[0])) {
          let o;
          for (h = O(M), o = 0; o < h.length; o += 1) {
            const n = Xo(t, h, o);
            w[o]
              ? (w[o].p(n, r), l(w[o], 1))
              : ((w[o] = kn(n)), w[o].c(), l(w[o], 1), w[o].m(e.parentNode, e));
          }
          for (v(), o = h.length; o < w.length; o += 1) x(o);
          b();
        }
        const s = {};
        (4 & r[2] && (s.$$scope = { dirty: r, ctx: t }),
          !d &&
            524288 & r[0] &&
            ((d = !0),
            (s.checked = t[19].historyDealsHorizontalScroll),
            c(() => (d = !1))),
          o.$set(s));
        const i = {};
        (4 & r[2] && (i.$$scope = { dirty: r, ctx: t }), m.$set(i));
      },
      i(t) {
        if (!y) {
          for (let t = 0; t < h.length; t += 1) l(w[t]);
          (l(o.$$.fragment, t), l(m.$$.fragment, t), (y = !0));
        }
      },
      o(t) {
        w = w.filter(Boolean);
        for (let e = 0; e < w.length; e += 1) $(w[e]);
        ($(o.$$.fragment, t), $(m.$$.fragment, t), (y = !1));
      },
      d(t) {
        (t && (s(e), s(u)), U(w, t), i(o, t), i(m, t));
      },
    }
  );
}
function bn(t) {
  let e,
    o = z(t[57].key) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function kn(t) {
  let e,
    o,
    d =
      !t[57].showAlways &&
      (function (t) {
        let e, o, s;
        function a(e) {
          t[48](e, t[57]);
        }
        let d = { toggle: !0, $$slots: { default: [bn] }, $$scope: { ctx: t } };
        return (
          void 0 !== t[19].historyDealsColumnsVisible[t[57].key] &&
            (d.checked = t[19].historyDealsColumnsVisible[t[57].key]),
          (e = new nt({ props: d })),
          n.push(() => r(e, "checked", a)),
          {
            c() {
              f(e.$$.fragment);
            },
            m(t, o) {
              (p(e, t, o), (s = !0));
            },
            p(n, r) {
              t = n;
              const s = {};
              (4 & r[2] && (s.$$scope = { dirty: r, ctx: t }),
                !o &&
                  524288 & r[0] &&
                  ((o = !0),
                  (s.checked = t[19].historyDealsColumnsVisible[t[57].key]),
                  c(() => (o = !1))),
                e.$set(s));
            },
            i(t) {
              s || (l(e.$$.fragment, t), (s = !0));
            },
            o(t) {
              ($(e.$$.fragment, t), (s = !1));
            },
            d(t) {
              i(e, t);
            },
          }
        );
      })(t);
  return {
    c() {
      (d && d.c(), (e = k()));
    },
    m(t, n) {
      (d && d.m(t, n), a(t, e, n), (o = !0));
    },
    p(t, e) {
      t[57].showAlways || d.p(t, e);
    },
    i(t) {
      o || (l(d), (o = !0));
    },
    o(t) {
      ($(d), (o = !1));
    },
    d(t) {
      (t && s(e), d && d.d(t));
    },
  };
}
function Cn(t) {
  let e,
    o = window.tr(window.lang.trade.history.menu.columns.horizontalScroll) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function Dn(t) {
  let e,
    o = window.tr(window.lang.trade.history.menu.columns.resetAll) + "";
  return {
    c() {
      e = h(o);
    },
    m(t, o) {
      a(t, e, o);
    },
    p: C,
    d(t) {
      t && s(e);
    },
  };
}
function Pn(t) {
  let e,
    o,
    n,
    r,
    i = t[18].botPanel === L.HistoryPositions && pn(t),
    c = t[18].botPanel === L.HistoryOrders && yn(t),
    d = t[18].botPanel === L.HistoryDeals && vn(t);
  return {
    c() {
      (i && i.c(), (e = g()), c && c.c(), (o = g()), d && d.c(), (n = k()));
    },
    m(t, s) {
      (i && i.m(t, s),
        a(t, e, s),
        c && c.m(t, s),
        a(t, o, s),
        d && d.m(t, s),
        a(t, n, s),
        (r = !0));
    },
    p(t, r) {
      (t[18].botPanel === L.HistoryPositions
        ? i
          ? (i.p(t, r), 262144 & r[0] && l(i, 1))
          : ((i = pn(t)), i.c(), l(i, 1), i.m(e.parentNode, e))
        : i &&
          (v(),
          $(i, 1, 1, () => {
            i = null;
          }),
          b()),
        t[18].botPanel === L.HistoryOrders
          ? c
            ? (c.p(t, r), 262144 & r[0] && l(c, 1))
            : ((c = yn(t)), c.c(), l(c, 1), c.m(o.parentNode, o))
          : c &&
            (v(),
            $(c, 1, 1, () => {
              c = null;
            }),
            b()),
        t[18].botPanel === L.HistoryDeals
          ? d
            ? (d.p(t, r), 262144 & r[0] && l(d, 1))
            : ((d = vn(t)), d.c(), l(d, 1), d.m(n.parentNode, n))
          : d &&
            (v(),
            $(d, 1, 1, () => {
              d = null;
            }),
            b()));
    },
    i(t) {
      r || (l(i), l(c), l(d), (r = !0));
    },
    o(t) {
      ($(i), $(c), $(d), (r = !1));
    },
    d(t) {
      (t && (s(e), s(o), s(n)), i && i.d(t), c && c.d(t), d && d.d(t));
    },
  };
}
function On(t) {
  let e, o, d, u, m, y, h, w, x, S, v, b, k;
  function C(e) {
    t[23](e);
  }
  let D = {
    value: L.HistoryPositions,
    checked: t[18].botPanel === L.HistoryPositions,
    $$slots: { default: [Qo] },
    $$scope: { ctx: t },
  };
  function P(e) {
    t[24](e);
  }
  (void 0 !== t[18].botPanel && (D.group = t[18].botPanel),
    (e = new nt({ props: D })),
    n.push(() => r(e, "group", C)));
  let O = {
    value: L.HistoryDeals,
    checked: t[18].botPanel === L.HistoryDeals,
    $$slots: { default: [Go] },
    $$scope: { ctx: t },
  };
  function U(e) {
    t[25](e);
  }
  (void 0 !== t[18].botPanel && (O.group = t[18].botPanel),
    (u = new nt({ props: O })),
    n.push(() => r(u, "group", P)));
  let T = {
    value: L.HistoryOrders,
    checked: t[18].botPanel === L.HistoryOrders,
    $$slots: { default: [Ko] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[18].botPanel && (T.group = t[18].botPanel),
    (h = new nt({ props: T })),
    n.push(() => r(h, "group", U)),
    (S = new nt({
      props: {
        line: "top",
        $$slots: { submenu: [an], default: [tn] },
        $$scope: { ctx: t },
      },
    })),
    (b = new nt({
      props: {
        line: "top",
        $$slots: { submenu: [Pn], default: [dn] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (f(e.$$.fragment),
          (d = g()),
          f(u.$$.fragment),
          (y = g()),
          f(h.$$.fragment),
          (x = g()),
          f(S.$$.fragment),
          (v = g()),
          f(b.$$.fragment));
      },
      m(t, o) {
        (p(e, t, o),
          a(t, d, o),
          p(u, t, o),
          a(t, y, o),
          p(h, t, o),
          a(t, x, o),
          p(S, t, o),
          a(t, v, o),
          p(b, t, o),
          (k = !0));
      },
      p(t, n) {
        const r = {};
        (262144 & n[0] && (r.checked = t[18].botPanel === L.HistoryPositions),
          4 & n[2] && (r.$$scope = { dirty: n, ctx: t }),
          !o &&
            262144 & n[0] &&
            ((o = !0), (r.group = t[18].botPanel), c(() => (o = !1))),
          e.$set(r));
        const s = {};
        (262144 & n[0] && (s.checked = t[18].botPanel === L.HistoryDeals),
          4 & n[2] && (s.$$scope = { dirty: n, ctx: t }),
          !m &&
            262144 & n[0] &&
            ((m = !0), (s.group = t[18].botPanel), c(() => (m = !1))),
          u.$set(s));
        const i = {};
        (262144 & n[0] && (i.checked = t[18].botPanel === L.HistoryOrders),
          4 & n[2] && (i.$$scope = { dirty: n, ctx: t }),
          !w &&
            262144 & n[0] &&
            ((w = !0), (i.group = t[18].botPanel), c(() => (w = !1))),
          h.$set(i));
        const $ = {};
        ((135170 & n[0]) | (4 & n[2]) && ($.$$scope = { dirty: n, ctx: t }),
          S.$set($));
        const l = {};
        ((786688 & n[0]) | (33554432 & n[1]) | (4 & n[2]) &&
          (l.$$scope = { dirty: n, ctx: t }),
          b.$set(l));
      },
      i(t) {
        k ||
          (l(e.$$.fragment, t),
          l(u.$$.fragment, t),
          l(h.$$.fragment, t),
          l(S.$$.fragment, t),
          l(b.$$.fragment, t),
          (k = !0));
      },
      o(t) {
        ($(e.$$.fragment, t),
          $(u.$$.fragment, t),
          $(h.$$.fragment, t),
          $(S.$$.fragment, t),
          $(b.$$.fragment, t),
          (k = !1));
      },
      d(t) {
        (t && (s(d), s(y), s(x), s(v)),
          i(e, t),
          i(u, t),
          i(h, t),
          i(S, t),
          i(b, t));
      },
    }
  );
}
function Un(t) {
  let e, o, s;
  function a(e) {
    t[53](e);
  }
  let d = {
    historyOrdersStore: t[6],
    historyStore: t[0],
    uiSettingsStore: t[8],
    orderUtils: t[11],
  };
  return (
    void 0 !== t[15] && (d.virtualTbody = t[15]),
    (e = new Wo({ props: d })),
    n.push(() => r(e, "virtualTbody", a)),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, o) {
        (p(e, t, o), (s = !0));
      },
      p(t, n) {
        const r = {};
        (64 & n[0] && (r.historyOrdersStore = t[6]),
          1 & n[0] && (r.historyStore = t[0]),
          256 & n[0] && (r.uiSettingsStore = t[8]),
          2048 & n[0] && (r.orderUtils = t[11]),
          !o &&
            32768 & n[0] &&
            ((o = !0), (r.virtualTbody = t[15]), c(() => (o = !1))),
          e.$set(r));
      },
      i(t) {
        s || (l(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (s = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function Tn(t) {
  let e, o, s;
  function a(e) {
    t[52](e);
  }
  let d = {
    historyDealsStore: t[2],
    historyStore: t[0],
    uiSettingsStore: t[8],
    dealUtils: t[10],
  };
  return (
    void 0 !== t[16] && (d.virtualTbody = t[16]),
    (e = new $e({ props: d })),
    n.push(() => r(e, "virtualTbody", a)),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, o) {
        (p(e, t, o), (s = !0));
      },
      p(t, n) {
        const r = {};
        (4 & n[0] && (r.historyDealsStore = t[2]),
          1 & n[0] && (r.historyStore = t[0]),
          256 & n[0] && (r.uiSettingsStore = t[8]),
          1024 & n[0] && (r.dealUtils = t[10]),
          !o &&
            65536 & n[0] &&
            ((o = !0), (r.virtualTbody = t[16]), c(() => (o = !1))),
          e.$set(r));
      },
      i(t) {
        s || (l(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (s = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function Hn(t) {
  let e, o, s;
  function a(e) {
    t[51](e);
  }
  let d = {
    historyDealsStore: t[2],
    historyPositionsStore: t[3],
    interactionStore: t[4],
    chartController: t[5],
    historyStore: t[0],
    configStore: t[7],
    dealUtils: t[10],
    uiSettingsStore: t[8],
  };
  return (
    void 0 !== t[14] && (d.virtualTbody = t[14]),
    (e = new co({ props: d })),
    n.push(() => r(e, "virtualTbody", a)),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, o) {
        (p(e, t, o), (s = !0));
      },
      p(t, n) {
        const r = {};
        (4 & n[0] && (r.historyDealsStore = t[2]),
          8 & n[0] && (r.historyPositionsStore = t[3]),
          16 & n[0] && (r.interactionStore = t[4]),
          32 & n[0] && (r.chartController = t[5]),
          1 & n[0] && (r.historyStore = t[0]),
          128 & n[0] && (r.configStore = t[7]),
          1024 & n[0] && (r.dealUtils = t[10]),
          256 & n[0] && (r.uiSettingsStore = t[8]),
          !o &&
            16384 & n[0] &&
            ((o = !0), (r.virtualTbody = t[14]), c(() => (o = !1))),
          e.$set(r));
      },
      i(t) {
        s || (l(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (s = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function Bn(t) {
  let e, o;
  return (
    (e = new lt({ props: { historyStore: t[0], historyController: t[1] } })),
    {
      c() {
        f(e.$$.fragment);
      },
      m(t, n) {
        (p(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (1 & o[0] && (n.historyStore = t[0]),
          2 & o[0] && (n.historyController = t[1]),
          e.$set(n));
      },
      i(t) {
        o || (l(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        ($(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        i(e, t);
      },
    }
  );
}
function An(t) {
  let e, o, n, r, c, u, h, w, x;
  e = new ot({
    props: {
      target: t[13],
      $$slots: {
        default: [
          On,
          ({ onHide: t }) => ({ 56: t }),
          ({ onHide: t }) => [0, t ? 33554432 : 0],
        ],
      },
      $$scope: { ctx: t },
    },
  });
  const S = [Hn, Tn, Un],
    C = [];
  function D(t, e) {
    return t[18].botPanel === L.HistoryPositions
      ? 0
      : t[18].botPanel === L.HistoryDeals
        ? 1
        : t[18].botPanel === L.HistoryOrders
          ? 2
          : -1;
  }
  ~(c = D(t)) && (u = C[c] = S[c](t));
  let P = -1 === t[12].period && Bn(t);
  return {
    c() {
      (f(e.$$.fragment),
        (o = g()),
        (n = m("div")),
        (r = m("div")),
        u && u.c(),
        (h = g()),
        P && P.c(),
        (w = k()),
        y(r, "class", "tables svelte-itfcm8"),
        y(n, "class", "wrapper svelte-itfcm8"));
    },
    m(s, i) {
      (p(e, s, i),
        a(s, o, i),
        a(s, n, i),
        d(n, r),
        ~c && C[c].m(r, null),
        t[54](r),
        a(s, h, i),
        P && P.m(s, i),
        a(s, w, i),
        (x = !0));
    },
    p(t, o) {
      const n = {};
      (8192 & o[0] && (n.target = t[13]),
        (921858 & o[0]) | (33554432 & o[1]) | (4 & o[2]) &&
          (n.$$scope = { dirty: o, ctx: t }),
        e.$set(n));
      let s = c;
      ((c = D(t)),
        c === s
          ? ~c && C[c].p(t, o)
          : (u &&
              (v(),
              $(C[s], 1, 1, () => {
                C[s] = null;
              }),
              b()),
            ~c
              ? ((u = C[c]),
                u ? u.p(t, o) : ((u = C[c] = S[c](t)), u.c()),
                l(u, 1),
                u.m(r, null))
              : (u = null)),
        -1 === t[12].period
          ? P
            ? (P.p(t, o), 4096 & o[0] && l(P, 1))
            : ((P = Bn(t)), P.c(), l(P, 1), P.m(w.parentNode, w))
          : P &&
            (v(),
            $(P, 1, 1, () => {
              P = null;
            }),
            b()));
    },
    i(t) {
      x || (l(e.$$.fragment, t), l(u), l(P), (x = !0));
    },
    o(t) {
      ($(e.$$.fragment, t), $(u), $(P), (x = !1));
    },
    d(r) {
      (r && (s(o), s(n), s(h), s(w)),
        i(e, r),
        ~c && C[c].d(),
        t[54](null),
        P && P.d(r));
    },
  };
}
const _n = "DD.MM.YY";
function Mn(t, e, o) {
  let r,
    s,
    i,
    $ = C,
    l = () => ($(), ($ = D(u, (t) => o(12, (r = t)))), u),
    c = C,
    a = () => (c(), (c = D(v, (t) => o(18, (s = t)))), v),
    d = C,
    p = () => (d(), (d = D(S, (t) => o(19, (i = t)))), S);
  (t.$$.on_destroy.push(() => $()),
    t.$$.on_destroy.push(() => c()),
    t.$$.on_destroy.push(() => d()));
  let { historyStore: u } = e;
  l();
  let { historyController: m } = e,
    { historyDealsStore: f } = e,
    { historyPositionsStore: g } = e,
    { interactionStore: y } = e,
    { chartController: h } = e,
    { historyOrdersStore: w } = e,
    { configStore: x } = e,
    { uiSettingsStore: S } = e;
  p();
  let { layoutStore: v } = e;
  a();
  let b,
    { dealUtils: k } = e,
    { orderUtils: P } = e,
    O = null,
    U = null,
    T = null;
  const H = m.getHistoryRequestData,
    B = R(new Date(), _n);
  let A;
  async function _(t) {
    (await m.loadHistory(t),
      (null == O ? void 0 : O.scrollToIndex) && O.scrollToIndex(0),
      (null == T ? void 0 : T.scrollToIndex) && T.scrollToIndex(0),
      (null == U ? void 0 : U.scrollToIndex) &&
        (null == U || U.scrollToIndex(0)));
  }
  return (
    (t.$$set = (t) => {
      ("historyStore" in t && l(o(0, (u = t.historyStore))),
        "historyController" in t && o(1, (m = t.historyController)),
        "historyDealsStore" in t && o(2, (f = t.historyDealsStore)),
        "historyPositionsStore" in t && o(3, (g = t.historyPositionsStore)),
        "interactionStore" in t && o(4, (y = t.interactionStore)),
        "chartController" in t && o(5, (h = t.chartController)),
        "historyOrdersStore" in t && o(6, (w = t.historyOrdersStore)),
        "configStore" in t && o(7, (x = t.configStore)),
        "uiSettingsStore" in t && p(o(8, (S = t.uiSettingsStore))),
        "layoutStore" in t && a(o(9, (v = t.layoutStore))),
        "dealUtils" in t && o(10, (k = t.dealUtils)),
        "orderUtils" in t && o(11, (P = t.orderUtils)));
    }),
    (t.$$.update = () => {
      4096 & t.$$.dirty[0] && o(17, (A = r.period));
    }),
    [
      u,
      m,
      f,
      g,
      y,
      h,
      w,
      x,
      S,
      v,
      k,
      P,
      r,
      b,
      O,
      U,
      T,
      A,
      s,
      i,
      H,
      B,
      _,
      function (e) {
        t.$$.not_equal(s.botPanel, e) && ((s.botPanel = e), v.set(s));
      },
      function (e) {
        t.$$.not_equal(s.botPanel, e) && ((s.botPanel = e), v.set(s));
      },
      function (e) {
        t.$$.not_equal(s.botPanel, e) && ((s.botPanel = e), v.set(s));
      },
      function (t) {
        ((A = t), o(17, A), o(12, r));
      },
      () => _(1),
      function (t) {
        ((A = t), o(17, A), o(12, r));
      },
      () => _(2),
      function (t) {
        ((A = t), o(17, A), o(12, r));
      },
      () => _(3),
      function (t) {
        ((A = t), o(17, A), o(12, r));
      },
      () => _(4),
      function (t) {
        ((A = t), o(17, A), o(12, r));
      },
      () => _(5),
      function (t) {
        ((A = t), o(17, A), o(12, r));
      },
      () => _(6),
      function (t) {
        ((A = t), o(17, A), o(12, r));
      },
      () => _(0),
      function (t) {
        ((A = t), o(17, A), o(12, r));
      },
      () => m.setPeriod(-1),
      function (e, o) {
        t.$$.not_equal(i.historyPositionsColumnsVisible[o.key], e) &&
          ((i.historyPositionsColumnsVisible[o.key] = e), S.set(i));
      },
      function (e) {
        t.$$.not_equal(i.historyPositionsHorizontalScroll, e) &&
          ((i.historyPositionsHorizontalScroll = e), S.set(i));
      },
      () => S.resetHistoryPositionsColumnsVisible(),
      function (e, o) {
        t.$$.not_equal(i.historyOrdersColumnsVisible[o.key], e) &&
          ((i.historyOrdersColumnsVisible[o.key] = e), S.set(i));
      },
      function (e) {
        t.$$.not_equal(i.historyOrdersHorizontalScroll, e) &&
          ((i.historyOrdersHorizontalScroll = e), S.set(i));
      },
      () => S.resetHistoryOrdersColumnsVisible(),
      function (e, o) {
        t.$$.not_equal(i.historyDealsColumnsVisible[o.key], e) &&
          ((i.historyDealsColumnsVisible[o.key] = e), S.set(i));
      },
      function (e) {
        t.$$.not_equal(i.historyDealsHorizontalScroll, e) &&
          ((i.historyDealsHorizontalScroll = e), S.set(i));
      },
      () => S.resetHistoryDealsColumnsVisible(),
      function (t) {
        ((O = t), o(14, O));
      },
      function (t) {
        ((T = t), o(16, T));
      },
      function (t) {
        ((U = t), o(15, U));
      },
      function (t) {
        n[t ? "unshift" : "push"](() => {
          ((b = t), o(13, b));
        });
      },
    ]
  );
}
class zn extends t {
  constructor(t) {
    (super(),
      e(
        this,
        t,
        Mn,
        An,
        o,
        {
          historyStore: 0,
          historyController: 1,
          historyDealsStore: 2,
          historyPositionsStore: 3,
          interactionStore: 4,
          chartController: 5,
          historyOrdersStore: 6,
          configStore: 7,
          uiSettingsStore: 8,
          layoutStore: 9,
          dealUtils: 10,
          orderUtils: 11,
        },
        null,
        [-1, -1, -1],
      ));
  }
}
export { zn as default };
