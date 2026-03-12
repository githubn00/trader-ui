import {
  S as t,
  i as e,
  s as n,
  r as o,
  t as r,
  g as l,
  u as s,
  v as i,
  d as c,
  k as a,
  l as $,
  b as d,
  c as u,
  e as m,
  o as f,
  m as p,
  f as g,
  E as y,
  n as w,
  a4 as v,
  L as h,
  D as x,
  h as S,
  j as b,
  O as C,
  C as k,
  af as N,
  I as q,
  N as P,
  Y as O,
  Z as B,
  ac as L,
  ad as F,
  a as T,
  a2 as _,
  a3 as U,
  T as D,
  Q as E,
} from "./CHj1SSsY.js";
import {
  J as V,
  h as j,
  n as I,
  P as M,
  R as Y,
  T as R,
  U as Q,
  W as H,
} from "./CQSQNu0h.js";
import { I as J, d as W } from "./C8gngcK2.js";
import {
  L as z,
  T as A,
  h as X,
  i as Z,
  j as G,
  c as K,
  k as tt,
  l as et,
  C as nt,
  M as ot,
  P as rt,
} from "./CezRPkQL.js";
import "./CSht1uUK.js";
import "./Y63yw9rt.js";
import "./CRNNNCwz.js";
import "./BmK36PA1.js";
import "./BLCxo5ZN.js";
function lt(t) {
  let e,
    n,
    o,
    r,
    l,
    s,
    i,
    y,
    w,
    v,
    h,
    x,
    S,
    b,
    C = t[1].symbol + "",
    k = t[1].typeName + "",
    N = t[1].volume + "",
    q = V(t[1].price, t[1].digits) + "";
  return {
    c() {
      ((e = m("span")),
        (n = m("div")),
        (o = f(C)),
        (r = p()),
        (l = m("div")),
        (s = f(k)),
        (i = p()),
        (y = m("div")),
        (w = f(N)),
        (v = f(" at ")),
        (h = f(q)),
        (x = p()),
        (S = m("div")),
        (b = f(t[0])),
        g(n, "class", "symbol svelte-13bfi3b"),
        g(l, "class", "type svelte-13bfi3b"),
        $(l, "red", !t[1].isBuy),
        g(y, "class", "price svelte-13bfi3b"),
        g(S, "class", "profit blue svelte-13bfi3b"),
        g(e, "class", "order svelte-13bfi3b"),
        $(e, "selected", t[2] === t[1].order));
    },
    m(t, c) {
      (d(t, e, c),
        u(e, n),
        u(n, o),
        u(e, r),
        u(e, l),
        u(l, s),
        u(e, i),
        u(e, y),
        u(y, w),
        u(y, v),
        u(y, h),
        u(e, x),
        u(e, S),
        u(S, b));
    },
    p(t, n) {
      (2 & n && C !== (C = t[1].symbol + "") && a(o, C),
        2 & n && k !== (k = t[1].typeName + "") && a(s, k),
        2 & n && $(l, "red", !t[1].isBuy),
        2 & n && N !== (N = t[1].volume + "") && a(w, N),
        2 & n && q !== (q = V(t[1].price, t[1].digits) + "") && a(h, q),
        1 & n && a(b, t[0]),
        6 & n && $(e, "selected", t[2] === t[1].order));
    },
    d(t) {
      t && c(e);
    },
  };
}
function st(t) {
  let e, n;
  return (
    (e = new z({
      props: {
        to: "/terminal/trade/menu",
        $$slots: { default: [lt] },
        $$scope: { ctx: t },
      },
    })),
    e.$on("click", t[3]),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(t, [n]) {
        const o = {};
        (23 & n && (o.$$scope = { dirty: n, ctx: t }), e.$set(o));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function it(t, e, n) {
  let { orderStatus: o } = e,
    { item: r } = e,
    { selected: l } = e;
  return (
    (t.$$set = (t) => {
      ("orderStatus" in t && n(0, (o = t.orderStatus)),
        "item" in t && n(1, (r = t.item)),
        "selected" in t && n(2, (l = t.selected)));
    }),
    [
      o,
      r,
      l,
      function (e) {
        y.call(this, t, e);
      },
    ]
  );
}
class ct extends t {
  constructor(t) {
    (super(), e(this, t, it, st, n, { orderStatus: 0, item: 1, selected: 2 }));
  }
}
function at(t) {
  let e,
    n,
    o,
    r,
    l = V(t[1].credit, 2) + "";
  return {
    c() {
      ((e = m("div")),
        (e.textContent = `${window.tr(window.lang.trade.table.total.credit)}:`),
        (n = p()),
        (o = m("div")),
        (r = f(l)),
        g(e, "class", "svelte-sf8q22"),
        g(o, "class", "svelte-sf8q22"));
    },
    m(t, l) {
      (d(t, e, l), d(t, n, l), d(t, o, l), u(o, r));
    },
    p(t, e) {
      2 & e && l !== (l = V(t[1].credit, 2) + "") && a(r, l);
    },
    d(t) {
      t && (c(e), c(n), c(o));
    },
  };
}
function $t(t) {
  let e,
    n,
    o,
    r,
    l = V(t[1].commission, 2) + "";
  return {
    c() {
      ((e = m("div")),
        (e.textContent = `${window.tr(window.lang.trade.table.total.commission)}:`),
        (n = p()),
        (o = m("div")),
        (r = f(l)),
        g(e, "class", "svelte-sf8q22"),
        g(o, "class", "svelte-sf8q22"));
    },
    m(t, l) {
      (d(t, e, l), d(t, n, l), d(t, o, l), u(o, r));
    },
    p(t, e) {
      2 & e && l !== (l = V(t[1].commission, 2) + "") && a(r, l);
    },
    d(t) {
      t && (c(e), c(n), c(o));
    },
  };
}
function dt(t) {
  let e,
    n,
    o,
    r,
    l = V(t[1].assets, 2) + "";
  return {
    c() {
      ((e = m("div")),
        (e.textContent = `${window.tr(window.lang.trade.table.total.assets)}:`),
        (n = p()),
        (o = m("div")),
        (r = f(l)),
        g(e, "class", "svelte-sf8q22"),
        g(o, "class", "svelte-sf8q22"));
    },
    m(t, l) {
      (d(t, e, l), d(t, n, l), d(t, o, l), u(o, r));
    },
    p(t, e) {
      2 & e && l !== (l = V(t[1].assets, 2) + "") && a(r, l);
    },
    d(t) {
      t && (c(e), c(n), c(o));
    },
  };
}
function ut(t) {
  let e,
    n,
    o,
    r,
    l = V(t[1].liabilities, 2) + "";
  return {
    c() {
      ((e = m("div")),
        (e.textContent = `${window.tr(window.lang.trade.table.total.liabilities)}:`),
        (n = p()),
        (o = m("div")),
        (r = f(l)),
        g(e, "class", "svelte-sf8q22"),
        g(o, "class", "svelte-sf8q22"));
    },
    m(t, l) {
      (d(t, e, l), d(t, n, l), d(t, o, l), u(o, r));
    },
    p(t, e) {
      2 & e && l !== (l = V(t[1].liabilities, 2) + "") && a(r, l);
    },
    d(t) {
      t && (c(e), c(n), c(o));
    },
  };
}
function mt(t) {
  let e,
    n,
    o,
    r,
    l,
    s,
    i,
    y,
    v,
    h,
    x,
    S,
    b,
    C,
    k,
    N,
    q,
    P,
    O,
    B,
    L,
    F,
    T,
    _,
    U,
    D,
    E,
    j,
    I,
    M,
    Y,
    R,
    Q,
    H,
    J,
    W = t[1].floating + "",
    z = t[1].currency + "",
    A = V(t[1].balance, 2) + "",
    X = V(t[1].marginFree, 2) + "",
    Z = V(t[1].equity, 2) + "",
    G = V(t[1].marginLevel, 2) + "",
    K = V(t[1].margin, 2) + "",
    tt = t[1].credit && at(t),
    et = t[1].commission && $t(t),
    nt = t[1].assets && dt(t),
    ot = t[1].liabilities && ut(t);
  return {
    c() {
      ((e = m("div")),
        (n = f(W)),
        (o = p()),
        (r = f(z)),
        (l = p()),
        (s = m("div")),
        (i = m("div")),
        (i.textContent = `${window.tr(window.lang.trade.table.total.balance)}:`),
        (y = p()),
        (v = m("div")),
        (h = f(A)),
        (x = p()),
        (S = m("div")),
        (S.textContent = `${window.tr(window.lang.trade.table.total.marginFree)}:`),
        (b = p()),
        (C = m("div")),
        (k = f(X)),
        (N = p()),
        (q = m("div")),
        (q.textContent = `${window.tr(window.lang.trade.table.total.equity)}:`),
        (P = p()),
        (O = m("div")),
        (B = f(Z)),
        (L = p()),
        (F = m("div")),
        (F.textContent = `${window.tr(window.lang.trade.table.total.marginLevel)}:`),
        (T = p()),
        (_ = m("div")),
        (U = f(G)),
        (D = f("%")),
        (E = p()),
        (j = m("div")),
        (j.textContent = `${window.tr(window.lang.trade.table.total.margin)}:`),
        (I = p()),
        (M = m("div")),
        (Y = f(K)),
        (R = p()),
        tt && tt.c(),
        (Q = p()),
        et && et.c(),
        (H = p()),
        nt && nt.c(),
        (J = p()),
        ot && ot.c(),
        g(e, "class", "profit svelte-sf8q22"),
        $(e, "red", t[1].floating < 0),
        $(e, "blue", t[1].floating > 0),
        g(i, "class", "svelte-sf8q22"),
        g(v, "class", "svelte-sf8q22"),
        g(S, "class", "svelte-sf8q22"),
        g(C, "class", "svelte-sf8q22"),
        g(q, "class", "svelte-sf8q22"),
        g(O, "class", "svelte-sf8q22"),
        g(F, "class", "svelte-sf8q22"),
        g(_, "class", "svelte-sf8q22"),
        g(j, "class", "svelte-sf8q22"),
        g(M, "class", "svelte-sf8q22"),
        g(s, "class", "list svelte-sf8q22"));
    },
    m(t, c) {
      (d(t, e, c),
        u(e, n),
        u(e, o),
        u(e, r),
        d(t, l, c),
        d(t, s, c),
        u(s, i),
        u(s, y),
        u(s, v),
        u(v, h),
        u(s, x),
        u(s, S),
        u(s, b),
        u(s, C),
        u(C, k),
        u(s, N),
        u(s, q),
        u(s, P),
        u(s, O),
        u(O, B),
        u(s, L),
        u(s, F),
        u(s, T),
        u(s, _),
        u(_, U),
        u(_, D),
        u(s, E),
        u(s, j),
        u(s, I),
        u(s, M),
        u(M, Y),
        u(s, R),
        tt && tt.m(s, null),
        u(s, Q),
        et && et.m(s, null),
        u(s, H),
        nt && nt.m(s, null),
        u(s, J),
        ot && ot.m(s, null));
    },
    p(t, [o]) {
      (2 & o && W !== (W = t[1].floating + "") && a(n, W),
        2 & o && z !== (z = t[1].currency + "") && a(r, z),
        2 & o && $(e, "red", t[1].floating < 0),
        2 & o && $(e, "blue", t[1].floating > 0),
        2 & o && A !== (A = V(t[1].balance, 2) + "") && a(h, A),
        2 & o && X !== (X = V(t[1].marginFree, 2) + "") && a(k, X),
        2 & o && Z !== (Z = V(t[1].equity, 2) + "") && a(B, Z),
        2 & o && G !== (G = V(t[1].marginLevel, 2) + "") && a(U, G),
        2 & o && K !== (K = V(t[1].margin, 2) + "") && a(Y, K),
        t[1].credit
          ? tt
            ? tt.p(t, o)
            : ((tt = at(t)), tt.c(), tt.m(s, Q))
          : tt && (tt.d(1), (tt = null)),
        t[1].commission
          ? et
            ? et.p(t, o)
            : ((et = $t(t)), et.c(), et.m(s, H))
          : et && (et.d(1), (et = null)),
        t[1].assets
          ? nt
            ? nt.p(t, o)
            : ((nt = dt(t)), nt.c(), nt.m(s, J))
          : nt && (nt.d(1), (nt = null)),
        t[1].liabilities
          ? ot
            ? ot.p(t, o)
            : ((ot = ut(t)), ot.c(), ot.m(s, null))
          : ot && (ot.d(1), (ot = null)));
    },
    i: w,
    o: w,
    d(t) {
      (t && (c(e), c(l), c(s)),
        tt && tt.d(),
        et && et.d(),
        nt && nt.d(),
        ot && ot.d());
    },
  };
}
function ft(t, e, n) {
  let o,
    r = w,
    l = () => (r(), (r = v(s, (t) => n(1, (o = t)))), s);
  t.$$.on_destroy.push(() => r());
  let { accountStore: s } = e;
  return (
    l(),
    (t.$$set = (t) => {
      "accountStore" in t && l(n(0, (s = t.accountStore)));
    }),
    [s, o]
  );
}
class pt extends t {
  constructor(t) {
    (super(), e(this, t, ft, mt, n, { accountStore: 0 }));
  }
}
function gt(t) {
  let e,
    n,
    o = t[0].priceOpen + "";
  return {
    c() {
      ((e = f(o)), (n = f(" →")));
    },
    m(t, o) {
      (d(t, e, o), d(t, n, o));
    },
    p(t, n) {
      1 & n && o !== (o = t[0].priceOpen + "") && a(e, o);
    },
    d(t) {
      t && (c(e), c(n));
    },
  };
}
function yt(t) {
  let e,
    n = t[0].profit + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, o) {
      1 & o && n !== (n = t[0].profit + "") && a(e, n);
    },
    d(t) {
      t && c(e);
    },
  };
}
function wt(t) {
  let e,
    n,
    o,
    r,
    l,
    s,
    i,
    y,
    w,
    v,
    h,
    x,
    S,
    b,
    C,
    k = t[0].symbol + "",
    N = t[0].typeName + "",
    q = t[0].volume + "",
    P = t[0].priceClose + "",
    O = !t[2] && gt(t),
    B = !t[2] && yt(t);
  return {
    c() {
      ((e = m("span")),
        (n = m("span")),
        (o = f(k)),
        (r = p()),
        (l = m("span")),
        (s = f(N)),
        (i = p()),
        (y = m("span")),
        (w = f(q)),
        (v = p()),
        (h = m("span")),
        O && O.c(),
        (x = p()),
        (S = f(P)),
        (b = p()),
        (C = m("span")),
        B && B.c(),
        g(n, "class", "symbol svelte-1cd3n83"),
        g(l, "class", "type svelte-1cd3n83"),
        $(l, "red", !t[0].isBuy),
        g(y, "class", "volume svelte-1cd3n83"),
        $(y, "red", !t[0].isBuy),
        g(h, "class", "price svelte-1cd3n83"),
        g(C, "class", "profit svelte-1cd3n83"),
        $(C, "blue", t[0].profitState),
        $(C, "red", !t[0].profitState),
        g(e, "class", "position svelte-1cd3n83"),
        $(e, "selected", t[1] === t[0].id));
    },
    m(t, c) {
      (d(t, e, c),
        u(e, n),
        u(n, o),
        u(e, r),
        u(e, l),
        u(l, s),
        u(e, i),
        u(e, y),
        u(y, w),
        u(e, v),
        u(e, h),
        O && O.m(h, null),
        u(h, x),
        u(h, S),
        u(e, b),
        u(e, C),
        B && B.m(C, null));
    },
    p(t, n) {
      (1 & n && k !== (k = t[0].symbol + "") && a(o, k),
        1 & n && N !== (N = t[0].typeName + "") && a(s, N),
        1 & n && $(l, "red", !t[0].isBuy),
        1 & n && q !== (q = t[0].volume + "") && a(w, q),
        1 & n && $(y, "red", !t[0].isBuy),
        t[2]
          ? O && (O.d(1), (O = null))
          : O
            ? O.p(t, n)
            : ((O = gt(t)), O.c(), O.m(h, x)),
        1 & n && P !== (P = t[0].priceClose + "") && a(S, P),
        t[2]
          ? B && (B.d(1), (B = null))
          : B
            ? B.p(t, n)
            : ((B = yt(t)), B.c(), B.m(C, null)),
        1 & n && $(C, "blue", t[0].profitState),
        1 & n && $(C, "red", !t[0].profitState),
        3 & n && $(e, "selected", t[1] === t[0].id));
    },
    d(t) {
      (t && c(e), O && O.d(), B && B.d());
    },
  };
}
function vt(t) {
  let e, n;
  return (
    (e = new z({
      props: {
        to: "/terminal/trade/menu",
        $$slots: { default: [wt] },
        $$scope: { ctx: t },
      },
    })),
    e.$on("click", t[3]),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(t, [n]) {
        const o = {};
        (23 & n && (o.$$scope = { dirty: n, ctx: t }), e.$set(o));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function ht(t, e, n) {
  let { item: o } = e,
    { selected: r } = e,
    { collateral: l = !1 } = e;
  return (
    (t.$$set = (t) => {
      ("item" in t && n(0, (o = t.item)),
        "selected" in t && n(1, (r = t.selected)),
        "collateral" in t && n(2, (l = t.collateral)));
    }),
    [
      o,
      r,
      l,
      function (e) {
        y.call(this, t, e);
      },
    ]
  );
}
class xt extends t {
  constructor(t) {
    (super(), e(this, t, ht, vt, n, { item: 0, selected: 1, collateral: 2 }));
  }
}
function St(t) {
  let e,
    n = t[0].symbol + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, o) {
      1 & o && n !== (n = t[0].symbol + "") && a(e, n);
    },
    d(t) {
      t && c(e);
    },
  };
}
function bt(t) {
  let e,
    n = t[0].id + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, o) {
      1 & o && n !== (n = t[0].id + "") && a(e, n);
    },
    d(t) {
      t && c(e);
    },
  };
}
function Ct(t) {
  let e,
    n = Mt(t[0].timeCreate) + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, o) {
      1 & o && n !== (n = Mt(t[0].timeCreate) + "") && a(e, n);
    },
    d(t) {
      t && c(e);
    },
  };
}
function kt(t) {
  let e,
    n,
    o = t[0].typeName + "";
  return {
    c() {
      ((e = m("div")),
        (n = f(o)),
        g(e, "class", "svelte-b5o4g9"),
        $(e, "blue", t[0].isBuy),
        $(e, "red", !t[0].isBuy));
    },
    m(t, o) {
      (d(t, e, o), u(e, n));
    },
    p(t, r) {
      (1 & r && o !== (o = t[0].typeName + "") && a(n, o),
        1 & r && $(e, "blue", t[0].isBuy),
        1 & r && $(e, "red", !t[0].isBuy));
    },
    d(t) {
      t && c(e);
    },
  };
}
function Nt(t) {
  let e,
    n = t[0].volume + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, o) {
      1 & o && n !== (n = t[0].volume + "") && a(e, n);
    },
    d(t) {
      t && c(e);
    },
  };
}
function qt(t) {
  let e;
  return {
    c() {
      e = f(t[5]);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, n) {
      32 & n && a(e, t[5]);
    },
    d(t) {
      t && c(e);
    },
  };
}
function Pt(t) {
  let e,
    n = !t[2] && qt(t);
  return {
    c() {
      (n && n.c(), (e = x()));
    },
    m(t, o) {
      (n && n.m(t, o), d(t, e, o));
    },
    p(t, o) {
      t[2]
        ? n && (n.d(1), (n = null))
        : n
          ? n.p(t, o)
          : ((n = qt(t)), n.c(), n.m(e.parentNode, e));
    },
    d(t) {
      (t && c(e), n && n.d(t));
    },
  };
}
function Ot(t) {
  let e, n, u, y, w, v, h;
  return (
    (n = new J({ props: { width: 4, height: 4, name: I } })),
    {
      c() {
        ((e = m("button")),
          i(n.$$.fragment),
          (u = p()),
          (y = f(t[6])),
          g(e, "type", "button"),
          g(e, "class", "clear svelte-b5o4g9"),
          $(e, "active", t[1] === t[0].id));
      },
      m(o, r) {
        (d(o, e, r),
          s(n, e, null),
          d(o, u, r),
          d(o, y, r),
          (w = !0),
          v || ((h = k(e, "click", N(t[11]))), (v = !0)));
      },
      p(t, n) {
        ((!w || 3 & n) && $(e, "active", t[1] === t[0].id),
          (!w || 64 & n) && a(y, t[6]));
      },
      i(t) {
        w || (l(n.$$.fragment, t), (w = !0));
      },
      o(t) {
        (r(n.$$.fragment, t), (w = !1));
      },
      d(t) {
        (t && (c(e), c(u), c(y)), o(n), (v = !1), h());
      },
    }
  );
}
function Bt(t) {
  let e,
    n,
    o = t[6] && Ot(t);
  return {
    c() {
      (o && o.c(), (e = x()));
    },
    m(t, r) {
      (o && o.m(t, r), d(t, e, r), (n = !0));
    },
    p(t, n) {
      t[6]
        ? o
          ? (o.p(t, n), 64 & n && l(o, 1))
          : ((o = Ot(t)), o.c(), l(o, 1), o.m(e.parentNode, e))
        : o &&
          (S(),
          r(o, 1, 1, () => {
            o = null;
          }),
          b());
    },
    i(t) {
      n || (l(o), (n = !0));
    },
    o(t) {
      (r(o), (n = !1));
    },
    d(t) {
      (t && c(e), o && o.d(t));
    },
  };
}
function Lt(t) {
  let e, n, u, y, w, v, h;
  return (
    (n = new J({ props: { width: 4, height: 4, name: I } })),
    {
      c() {
        ((e = m("button")),
          i(n.$$.fragment),
          (u = p()),
          (y = f(t[7])),
          g(e, "type", "button"),
          g(e, "class", "clear svelte-b5o4g9"),
          $(e, "active", t[1] === t[0].id));
      },
      m(o, r) {
        (d(o, e, r),
          s(n, e, null),
          d(o, u, r),
          d(o, y, r),
          (w = !0),
          v || ((h = k(e, "click", N(t[12]))), (v = !0)));
      },
      p(t, n) {
        ((!w || 3 & n) && $(e, "active", t[1] === t[0].id),
          (!w || 128 & n) && a(y, t[7]));
      },
      i(t) {
        w || (l(n.$$.fragment, t), (w = !0));
      },
      o(t) {
        (r(n.$$.fragment, t), (w = !1));
      },
      d(t) {
        (t && (c(e), c(u), c(y)), o(n), (v = !1), h());
      },
    }
  );
}
function Ft(t) {
  let e,
    n,
    o = t[7] && Lt(t);
  return {
    c() {
      (o && o.c(), (e = x()));
    },
    m(t, r) {
      (o && o.m(t, r), d(t, e, r), (n = !0));
    },
    p(t, n) {
      t[7]
        ? o
          ? (o.p(t, n), 128 & n && l(o, 1))
          : ((o = Lt(t)), o.c(), l(o, 1), o.m(e.parentNode, e))
        : o &&
          (S(),
          r(o, 1, 1, () => {
            o = null;
          }),
          b());
    },
    i(t) {
      n || (l(o), (n = !0));
    },
    o(t) {
      (r(o), (n = !1));
    },
    d(t) {
      (t && c(e), o && o.d(t));
    },
  };
}
function Tt(t) {
  let e;
  return {
    c() {
      e = f(t[3]);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, n) {
      8 & n && a(e, t[3]);
    },
    d(t) {
      t && c(e);
    },
  };
}
function _t(t) {
  let e;
  return {
    c() {
      e = f(t[8]);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, n) {
      256 & n && a(e, t[8]);
    },
    d(t) {
      t && c(e);
    },
  };
}
function Ut(t) {
  let e, n;
  return {
    c() {
      ((e = m("div")),
        (n = f(t[4])),
        g(e, "class", "svelte-b5o4g9"),
        $(e, "blue", t[0].profitState),
        $(e, "red", !t[0].profitState));
    },
    m(t, o) {
      (d(t, e, o), u(e, n));
    },
    p(t, o) {
      (16 & o && a(n, t[4]),
        1 & o && $(e, "blue", t[0].profitState),
        1 & o && $(e, "red", !t[0].profitState));
    },
    d(t) {
      t && c(e);
    },
  };
}
function Dt(t) {
  let e,
    n = !t[2] && Ut(t);
  return {
    c() {
      (n && n.c(), (e = x()));
    },
    m(t, o) {
      (n && n.m(t, o), d(t, e, o));
    },
    p(t, o) {
      t[2]
        ? n && (n.d(1), (n = null))
        : n
          ? n.p(t, o)
          : ((n = Ut(t)), n.c(), n.m(e.parentNode, e));
    },
    d(t) {
      (t && c(e), n && n.d(t));
    },
  };
}
function Et(t) {
  let e,
    n = t[0].comment + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, o) {
      1 & o && n !== (n = t[0].comment + "") && a(e, n);
    },
    d(t) {
      t && c(e);
    },
  };
}
function Vt(t) {
  let e, n, a, u, f;
  return (
    (n = new J({ props: { name: I } })),
    {
      c() {
        ((e = m("button")),
          i(n.$$.fragment),
          g(e, "class", "close svelte-b5o4g9"),
          g(e, "type", "button"),
          g(e, "title", t[9]),
          $(e, "active", t[1] === t[0].id));
      },
      m(o, r) {
        (d(o, e, r),
          s(n, e, null),
          (a = !0),
          u ||
            ((f = [k(e, "dblclick", N(Yt)), k(e, "click", N(t[13]))]),
            (u = !0)));
      },
      p(t, n) {
        ((!a || 512 & n) && g(e, "title", t[9]),
          (!a || 3 & n) && $(e, "active", t[1] === t[0].id));
      },
      i(t) {
        a || (l(n.$$.fragment, t), (a = !0));
      },
      o(t) {
        (r(n.$$.fragment, t), (a = !1));
      },
      d(t) {
        (t && c(e), o(n), (u = !1), C(f));
      },
    }
  );
}
function jt(t) {
  let e,
    n,
    a,
    $,
    u,
    m,
    f,
    g,
    y,
    w,
    v,
    h,
    x,
    S,
    b,
    C,
    k,
    N,
    q,
    P,
    O,
    B,
    L,
    F,
    T,
    _;
  return (
    (e = new X({
      props: {
        index: 0,
        title: t[0].symbol,
        $$slots: { default: [St] },
        $$scope: { ctx: t },
      },
    })),
    (a = new X({
      props: {
        index: 1,
        title: t[0].id,
        $$slots: { default: [bt] },
        $$scope: { ctx: t },
      },
    })),
    (u = new X({
      props: {
        index: 2,
        title: Mt(t[0].timeCreate),
        $$slots: { default: [Ct] },
        $$scope: { ctx: t },
      },
    })),
    (f = new X({
      props: {
        index: 3,
        title: t[0].typeName,
        $$slots: { default: [kt] },
        $$scope: { ctx: t },
      },
    })),
    (y = new X({
      props: {
        index: 4,
        title: t[0].volume,
        $$slots: { default: [Nt] },
        $$scope: { ctx: t },
      },
    })),
    (v = new X({
      props: {
        index: 5,
        title: t[2] ? "" : t[5],
        $$slots: { default: [Pt] },
        $$scope: { ctx: t },
      },
    })),
    (x = new X({
      props: {
        index: 6,
        title: t[6],
        $$slots: { default: [Bt] },
        $$scope: { ctx: t },
      },
    })),
    (b = new X({
      props: {
        index: 7,
        title: t[7],
        $$slots: { default: [Ft] },
        $$scope: { ctx: t },
      },
    })),
    (k = new X({
      props: {
        index: 8,
        title: t[3],
        $$slots: { default: [Tt] },
        $$scope: { ctx: t },
      },
    })),
    (q = new X({
      props: {
        index: 9,
        title: t[8],
        $$slots: { default: [_t] },
        $$scope: { ctx: t },
      },
    })),
    (O = new X({
      props: {
        index: 10,
        title: t[2] ? "" : t[4],
        $$slots: { default: [Dt] },
        $$scope: { ctx: t },
      },
    })),
    (L = new X({
      props: {
        index: 11,
        title: t[0].comment,
        $$slots: { default: [Et] },
        $$scope: { ctx: t },
      },
    })),
    (T = new X({
      props: { index: 12, $$slots: { default: [Vt] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        (i(e.$$.fragment),
          (n = p()),
          i(a.$$.fragment),
          ($ = p()),
          i(u.$$.fragment),
          (m = p()),
          i(f.$$.fragment),
          (g = p()),
          i(y.$$.fragment),
          (w = p()),
          i(v.$$.fragment),
          (h = p()),
          i(x.$$.fragment),
          (S = p()),
          i(b.$$.fragment),
          (C = p()),
          i(k.$$.fragment),
          (N = p()),
          i(q.$$.fragment),
          (P = p()),
          i(O.$$.fragment),
          (B = p()),
          i(L.$$.fragment),
          (F = p()),
          i(T.$$.fragment));
      },
      m(t, o) {
        (s(e, t, o),
          d(t, n, o),
          s(a, t, o),
          d(t, $, o),
          s(u, t, o),
          d(t, m, o),
          s(f, t, o),
          d(t, g, o),
          s(y, t, o),
          d(t, w, o),
          s(v, t, o),
          d(t, h, o),
          s(x, t, o),
          d(t, S, o),
          s(b, t, o),
          d(t, C, o),
          s(k, t, o),
          d(t, N, o),
          s(q, t, o),
          d(t, P, o),
          s(O, t, o),
          d(t, B, o),
          s(L, t, o),
          d(t, F, o),
          s(T, t, o),
          (_ = !0));
      },
      p(t, n) {
        const o = {};
        (1 & n && (o.title = t[0].symbol),
          262145 & n && (o.$$scope = { dirty: n, ctx: t }),
          e.$set(o));
        const r = {};
        (1 & n && (r.title = t[0].id),
          262145 & n && (r.$$scope = { dirty: n, ctx: t }),
          a.$set(r));
        const l = {};
        (1 & n && (l.title = Mt(t[0].timeCreate)),
          262145 & n && (l.$$scope = { dirty: n, ctx: t }),
          u.$set(l));
        const s = {};
        (1 & n && (s.title = t[0].typeName),
          262145 & n && (s.$$scope = { dirty: n, ctx: t }),
          f.$set(s));
        const i = {};
        (1 & n && (i.title = t[0].volume),
          262145 & n && (i.$$scope = { dirty: n, ctx: t }),
          y.$set(i));
        const c = {};
        (36 & n && (c.title = t[2] ? "" : t[5]),
          262180 & n && (c.$$scope = { dirty: n, ctx: t }),
          v.$set(c));
        const $ = {};
        (64 & n && ($.title = t[6]),
          262211 & n && ($.$$scope = { dirty: n, ctx: t }),
          x.$set($));
        const d = {};
        (128 & n && (d.title = t[7]),
          262275 & n && (d.$$scope = { dirty: n, ctx: t }),
          b.$set(d));
        const m = {};
        (8 & n && (m.title = t[3]),
          262152 & n && (m.$$scope = { dirty: n, ctx: t }),
          k.$set(m));
        const p = {};
        (256 & n && (p.title = t[8]),
          262400 & n && (p.$$scope = { dirty: n, ctx: t }),
          q.$set(p));
        const g = {};
        (20 & n && (g.title = t[2] ? "" : t[4]),
          262165 & n && (g.$$scope = { dirty: n, ctx: t }),
          O.$set(g));
        const w = {};
        (1 & n && (w.title = t[0].comment),
          262145 & n && (w.$$scope = { dirty: n, ctx: t }),
          L.$set(w));
        const h = {};
        (262659 & n && (h.$$scope = { dirty: n, ctx: t }), T.$set(h));
      },
      i(t) {
        _ ||
          (l(e.$$.fragment, t),
          l(a.$$.fragment, t),
          l(u.$$.fragment, t),
          l(f.$$.fragment, t),
          l(y.$$.fragment, t),
          l(v.$$.fragment, t),
          l(x.$$.fragment, t),
          l(b.$$.fragment, t),
          l(k.$$.fragment, t),
          l(q.$$.fragment, t),
          l(O.$$.fragment, t),
          l(L.$$.fragment, t),
          l(T.$$.fragment, t),
          (_ = !0));
      },
      o(t) {
        (r(e.$$.fragment, t),
          r(a.$$.fragment, t),
          r(u.$$.fragment, t),
          r(f.$$.fragment, t),
          r(y.$$.fragment, t),
          r(v.$$.fragment, t),
          r(x.$$.fragment, t),
          r(b.$$.fragment, t),
          r(k.$$.fragment, t),
          r(q.$$.fragment, t),
          r(O.$$.fragment, t),
          r(L.$$.fragment, t),
          r(T.$$.fragment, t),
          (_ = !1));
      },
      d(t) {
        (t &&
          (c(n),
          c($),
          c(m),
          c(g),
          c(w),
          c(h),
          c(S),
          c(C),
          c(N),
          c(P),
          c(B),
          c(F)),
          o(e, t),
          o(a, t),
          o(u, t),
          o(f, t),
          o(y, t),
          o(v, t),
          o(x, t),
          o(b, t),
          o(k, t),
          o(q, t),
          o(O, t),
          o(L, t),
          o(T, t));
      },
    }
  );
}
function It(t) {
  let e, n;
  return (
    (e = new A({
      props: {
        id: t[0].id,
        active: t[1] === t[0].id,
        $$slots: { default: [jt] },
        $$scope: { ctx: t },
      },
    })),
    e.$on("click", t[14]),
    e.$on("dblclick", t[15]),
    e.$on("mousedown", t[16]),
    e.$on("contextmenu", t[17]),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(t, [n]) {
        const o = {};
        (1 & n && (o.id = t[0].id),
          3 & n && (o.active = t[1] === t[0].id),
          263167 & n && (o.$$scope = { dirty: n, ctx: t }),
          e.$set(o));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function Mt(t) {
  const e = new Date(t),
    n = new Date().getUTCFullYear() === e.getUTCFullYear();
  return j(e, n ? "MM.DD hhhh:mm:ss" : "YY.MM.DD hhhh:mm:ss");
}
const Yt = () => {};
function Rt(t, e, n) {
  const o = h();
  let r,
    l,
    s,
    i,
    c,
    a,
    $,
    { item: d } = e,
    { selected: u } = e,
    { collateral: m = !1 } = e;
  return (
    (t.$$set = (t) => {
      ("item" in t && n(0, (d = t.item)),
        "selected" in t && n(1, (u = t.selected)),
        "collateral" in t && n(2, (m = t.collateral)));
    }),
    (t.$$.update = () => {
      25 & t.$$.dirty &&
        (n(5, (r = V(d.priceOpen, d.digits || 5))),
        n(6, (l = d.sl ? V(d.sl, d.digits || 5) : "")),
        n(7, (s = d.tp ? V(d.tp, d.digits || 5) : "")),
        n(3, (i = V(d.priceClose, d.digits))),
        n(8, (c = d.storage ? V(d.storage, d.digitsCurrency || 2) : "")),
        n(4, (a = V(d.profit, d.digitsCurrency || 2))),
        n(
          9,
          ($ = `Close ${d.info} at ${i} with ${d.profit >= 0 ? "Profit" : "Loss"} ${a}`),
        ));
    }),
    [
      d,
      u,
      m,
      i,
      a,
      r,
      l,
      s,
      c,
      $,
      o,
      () => o("removeLevel", { level: "sl", position: d.id }),
      () => o("removeLevel", { level: "tp", position: d.id }),
      () => o("close", { position: d.id }),
      function (e) {
        y.call(this, t, e);
      },
      function (e) {
        y.call(this, t, e);
      },
      function (e) {
        y.call(this, t, e);
      },
      function (e) {
        y.call(this, t, e);
      },
    ]
  );
}
class Qt extends t {
  constructor(t) {
    (super(), e(this, t, Rt, It, n, { item: 0, selected: 1, collateral: 2 }));
  }
}
function Ht(t) {
  let e,
    n = t[0].symbol + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, o) {
      1 & o && n !== (n = t[0].symbol + "") && a(e, n);
    },
    d(t) {
      t && c(e);
    },
  };
}
function Jt(t) {
  let e,
    n = t[0].order + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, o) {
      1 & o && n !== (n = t[0].order + "") && a(e, n);
    },
    d(t) {
      t && c(e);
    },
  };
}
function Wt(t) {
  let e,
    n = ie(t[0].timeSetup) + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, o) {
      1 & o && n !== (n = ie(t[0].timeSetup) + "") && a(e, n);
    },
    d(t) {
      t && c(e);
    },
  };
}
function zt(t) {
  let e,
    n = t[0].typeName + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, o) {
      1 & o && n !== (n = t[0].typeName + "") && a(e, n);
    },
    d(t) {
      t && c(e);
    },
  };
}
function At(t) {
  let e,
    n = t[0].volume + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, o) {
      1 & o && n !== (n = t[0].volume + "") && a(e, n);
    },
    d(t) {
      t && c(e);
    },
  };
}
function Xt(t) {
  let e;
  return {
    c() {
      e = f(t[3]);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, n) {
      8 & n && a(e, t[3]);
    },
    d(t) {
      t && c(e);
    },
  };
}
function Zt(t) {
  let e, n, u, y, w, v, h;
  return (
    (n = new J({ props: { width: 4, height: 4, name: I } })),
    {
      c() {
        ((e = m("button")),
          i(n.$$.fragment),
          (u = p()),
          (y = f(t[4])),
          g(e, "type", "button"),
          g(e, "class", "clear svelte-1hgebtr"),
          $(e, "active", t[2] === t[0].order));
      },
      m(o, r) {
        (d(o, e, r),
          s(n, e, null),
          d(o, u, r),
          d(o, y, r),
          (w = !0),
          v || ((h = k(e, "click", N(t[8]))), (v = !0)));
      },
      p(t, n) {
        ((!w || 5 & n) && $(e, "active", t[2] === t[0].order),
          (!w || 16 & n) && a(y, t[4]));
      },
      i(t) {
        w || (l(n.$$.fragment, t), (w = !0));
      },
      o(t) {
        (r(n.$$.fragment, t), (w = !1));
      },
      d(t) {
        (t && (c(e), c(u), c(y)), o(n), (v = !1), h());
      },
    }
  );
}
function Gt(t) {
  let e,
    n,
    o = t[4] && Zt(t);
  return {
    c() {
      (o && o.c(), (e = x()));
    },
    m(t, r) {
      (o && o.m(t, r), d(t, e, r), (n = !0));
    },
    p(t, n) {
      t[4]
        ? o
          ? (o.p(t, n), 16 & n && l(o, 1))
          : ((o = Zt(t)), o.c(), l(o, 1), o.m(e.parentNode, e))
        : o &&
          (S(),
          r(o, 1, 1, () => {
            o = null;
          }),
          b());
    },
    i(t) {
      n || (l(o), (n = !0));
    },
    o(t) {
      (r(o), (n = !1));
    },
    d(t) {
      (t && c(e), o && o.d(t));
    },
  };
}
function Kt(t) {
  let e, n, u, y, w, v, h;
  return (
    (n = new J({ props: { width: 4, height: 4, name: I } })),
    {
      c() {
        ((e = m("button")),
          i(n.$$.fragment),
          (u = p()),
          (y = f(t[5])),
          g(e, "type", "button"),
          g(e, "class", "clear svelte-1hgebtr"),
          $(e, "active", t[2] === t[0].order));
      },
      m(o, r) {
        (d(o, e, r),
          s(n, e, null),
          d(o, u, r),
          d(o, y, r),
          (w = !0),
          v || ((h = k(e, "click", N(t[9]))), (v = !0)));
      },
      p(t, n) {
        ((!w || 5 & n) && $(e, "active", t[2] === t[0].order),
          (!w || 32 & n) && a(y, t[5]));
      },
      i(t) {
        w || (l(n.$$.fragment, t), (w = !0));
      },
      o(t) {
        (r(n.$$.fragment, t), (w = !1));
      },
      d(t) {
        (t && (c(e), c(u), c(y)), o(n), (v = !1), h());
      },
    }
  );
}
function te(t) {
  let e,
    n,
    o = t[5] && Kt(t);
  return {
    c() {
      (o && o.c(), (e = x()));
    },
    m(t, r) {
      (o && o.m(t, r), d(t, e, r), (n = !0));
    },
    p(t, n) {
      t[5]
        ? o
          ? (o.p(t, n), 32 & n && l(o, 1))
          : ((o = Kt(t)), o.c(), l(o, 1), o.m(e.parentNode, e))
        : o &&
          (S(),
          r(o, 1, 1, () => {
            o = null;
          }),
          b());
    },
    i(t) {
      n || (l(o), (n = !0));
    },
    o(t) {
      (r(o), (n = !1));
    },
    d(t) {
      (t && c(e), o && o.d(t));
    },
  };
}
function ee(t) {
  let e;
  return {
    c() {
      e = f(t[6]);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, n) {
      64 & n && a(e, t[6]);
    },
    d(t) {
      t && c(e);
    },
  };
}
function ne(t) {
  let e;
  return {
    c() {
      e = f(t[1]);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, n) {
      2 & n && a(e, t[1]);
    },
    d(t) {
      t && c(e);
    },
  };
}
function oe(t) {
  let e,
    n = t[0].comment + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, o) {
      1 & o && n !== (n = t[0].comment + "") && a(e, n);
    },
    d(t) {
      t && c(e);
    },
  };
}
function re(t) {
  let e, n, a, u, f;
  return (
    (n = new J({ props: { name: I } })),
    {
      c() {
        ((e = m("button")),
          i(n.$$.fragment),
          g(e, "class", "close svelte-1hgebtr"),
          g(e, "type", "button"),
          g(
            e,
            "title",
            window.tr(window.lang.trade.table.oneClick.deleteOrder),
          ),
          $(e, "active", t[2] === t[0].order));
      },
      m(o, r) {
        (d(o, e, r),
          s(n, e, null),
          (a = !0),
          u ||
            ((f = [k(e, "dblclick", N(ce)), k(e, "click", N(t[10]))]),
            (u = !0)));
      },
      p(t, n) {
        (!a || 5 & n) && $(e, "active", t[2] === t[0].order);
      },
      i(t) {
        a || (l(n.$$.fragment, t), (a = !0));
      },
      o(t) {
        (r(n.$$.fragment, t), (a = !1));
      },
      d(t) {
        (t && c(e), o(n), (u = !1), C(f));
      },
    }
  );
}
function le(t) {
  let e,
    n,
    a,
    $,
    u,
    m,
    f,
    g,
    y,
    w,
    v,
    h,
    x,
    S,
    b,
    C,
    k,
    N,
    q,
    P,
    O,
    B,
    L,
    F,
    T,
    _;
  return (
    (e = new X({
      props: {
        index: 0,
        title: t[0].symbol,
        $$slots: { default: [Ht] },
        $$scope: { ctx: t },
      },
    })),
    (a = new X({
      props: {
        index: 1,
        title: t[0].order,
        $$slots: { default: [Jt] },
        $$scope: { ctx: t },
      },
    })),
    (u = new X({
      props: {
        index: 2,
        title: ie(t[0].timeSetup),
        $$slots: { default: [Wt] },
        $$scope: { ctx: t },
      },
    })),
    (f = new X({
      props: {
        index: 3,
        title: t[0].typeName,
        $$slots: { default: [zt] },
        $$scope: { ctx: t },
      },
    })),
    (y = new X({
      props: {
        index: 4,
        title: t[0].volume,
        $$slots: { default: [At] },
        $$scope: { ctx: t },
      },
    })),
    (v = new X({
      props: {
        index: 5,
        title: t[3],
        $$slots: { default: [Xt] },
        $$scope: { ctx: t },
      },
    })),
    (x = new X({
      props: {
        index: 6,
        title: t[4],
        $$slots: { default: [Gt] },
        $$scope: { ctx: t },
      },
    })),
    (b = new X({
      props: {
        index: 7,
        title: t[5],
        $$slots: { default: [te] },
        $$scope: { ctx: t },
      },
    })),
    (k = new X({
      props: {
        index: 8,
        title: t[6],
        $$slots: { default: [ee] },
        $$scope: { ctx: t },
      },
    })),
    (q = new X({ props: { index: 9 } })),
    (O = new X({
      props: {
        index: 10,
        title: t[1],
        $$slots: { default: [ne] },
        $$scope: { ctx: t },
      },
    })),
    (L = new X({
      props: {
        index: 11,
        title: t[0].comment,
        $$slots: { default: [oe] },
        $$scope: { ctx: t },
      },
    })),
    (T = new X({
      props: { index: 12, $$slots: { default: [re] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        (i(e.$$.fragment),
          (n = p()),
          i(a.$$.fragment),
          ($ = p()),
          i(u.$$.fragment),
          (m = p()),
          i(f.$$.fragment),
          (g = p()),
          i(y.$$.fragment),
          (w = p()),
          i(v.$$.fragment),
          (h = p()),
          i(x.$$.fragment),
          (S = p()),
          i(b.$$.fragment),
          (C = p()),
          i(k.$$.fragment),
          (N = p()),
          i(q.$$.fragment),
          (P = p()),
          i(O.$$.fragment),
          (B = p()),
          i(L.$$.fragment),
          (F = p()),
          i(T.$$.fragment));
      },
      m(t, o) {
        (s(e, t, o),
          d(t, n, o),
          s(a, t, o),
          d(t, $, o),
          s(u, t, o),
          d(t, m, o),
          s(f, t, o),
          d(t, g, o),
          s(y, t, o),
          d(t, w, o),
          s(v, t, o),
          d(t, h, o),
          s(x, t, o),
          d(t, S, o),
          s(b, t, o),
          d(t, C, o),
          s(k, t, o),
          d(t, N, o),
          s(q, t, o),
          d(t, P, o),
          s(O, t, o),
          d(t, B, o),
          s(L, t, o),
          d(t, F, o),
          s(T, t, o),
          (_ = !0));
      },
      p(t, n) {
        const o = {};
        (1 & n && (o.title = t[0].symbol),
          32769 & n && (o.$$scope = { dirty: n, ctx: t }),
          e.$set(o));
        const r = {};
        (1 & n && (r.title = t[0].order),
          32769 & n && (r.$$scope = { dirty: n, ctx: t }),
          a.$set(r));
        const l = {};
        (1 & n && (l.title = ie(t[0].timeSetup)),
          32769 & n && (l.$$scope = { dirty: n, ctx: t }),
          u.$set(l));
        const s = {};
        (1 & n && (s.title = t[0].typeName),
          32769 & n && (s.$$scope = { dirty: n, ctx: t }),
          f.$set(s));
        const i = {};
        (1 & n && (i.title = t[0].volume),
          32769 & n && (i.$$scope = { dirty: n, ctx: t }),
          y.$set(i));
        const c = {};
        (8 & n && (c.title = t[3]),
          32776 & n && (c.$$scope = { dirty: n, ctx: t }),
          v.$set(c));
        const $ = {};
        (16 & n && ($.title = t[4]),
          32789 & n && ($.$$scope = { dirty: n, ctx: t }),
          x.$set($));
        const d = {};
        (32 & n && (d.title = t[5]),
          32805 & n && (d.$$scope = { dirty: n, ctx: t }),
          b.$set(d));
        const m = {};
        (64 & n && (m.title = t[6]),
          32832 & n && (m.$$scope = { dirty: n, ctx: t }),
          k.$set(m));
        const p = {};
        (2 & n && (p.title = t[1]),
          32770 & n && (p.$$scope = { dirty: n, ctx: t }),
          O.$set(p));
        const g = {};
        (1 & n && (g.title = t[0].comment),
          32769 & n && (g.$$scope = { dirty: n, ctx: t }),
          L.$set(g));
        const w = {};
        (32773 & n && (w.$$scope = { dirty: n, ctx: t }), T.$set(w));
      },
      i(t) {
        _ ||
          (l(e.$$.fragment, t),
          l(a.$$.fragment, t),
          l(u.$$.fragment, t),
          l(f.$$.fragment, t),
          l(y.$$.fragment, t),
          l(v.$$.fragment, t),
          l(x.$$.fragment, t),
          l(b.$$.fragment, t),
          l(k.$$.fragment, t),
          l(q.$$.fragment, t),
          l(O.$$.fragment, t),
          l(L.$$.fragment, t),
          l(T.$$.fragment, t),
          (_ = !0));
      },
      o(t) {
        (r(e.$$.fragment, t),
          r(a.$$.fragment, t),
          r(u.$$.fragment, t),
          r(f.$$.fragment, t),
          r(y.$$.fragment, t),
          r(v.$$.fragment, t),
          r(x.$$.fragment, t),
          r(b.$$.fragment, t),
          r(k.$$.fragment, t),
          r(q.$$.fragment, t),
          r(O.$$.fragment, t),
          r(L.$$.fragment, t),
          r(T.$$.fragment, t),
          (_ = !1));
      },
      d(t) {
        (t &&
          (c(n),
          c($),
          c(m),
          c(g),
          c(w),
          c(h),
          c(S),
          c(C),
          c(N),
          c(P),
          c(B),
          c(F)),
          o(e, t),
          o(a, t),
          o(u, t),
          o(f, t),
          o(y, t),
          o(v, t),
          o(x, t),
          o(b, t),
          o(k, t),
          o(q, t),
          o(O, t),
          o(L, t),
          o(T, t));
      },
    }
  );
}
function se(t) {
  let e, n;
  return (
    (e = new A({
      props: {
        id: t[0].order,
        active: t[2] === t[0].order,
        $$slots: { default: [le] },
        $$scope: { ctx: t },
      },
    })),
    e.$on("click", t[11]),
    e.$on("dblclick", t[12]),
    e.$on("mousedown", t[13]),
    e.$on("contextmenu", t[14]),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(t, [n]) {
        const o = {};
        (1 & n && (o.id = t[0].order),
          5 & n && (o.active = t[2] === t[0].order),
          32895 & n && (o.$$scope = { dirty: n, ctx: t }),
          e.$set(o));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function ie(t) {
  const e = new Date(t),
    n = new Date().getUTCFullYear() === e.getUTCFullYear();
  return j(e, n ? "MM.DD hhhh:mm:ss" : "YY.MM.DD hhhh:mm:ss");
}
const ce = () => {};
function ae(t, e, n) {
  const o = h();
  let r,
    l,
    s,
    i,
    { item: c } = e,
    { orderStatus: a } = e,
    { selected: $ } = e;
  return (
    (t.$$set = (t) => {
      ("item" in t && n(0, (c = t.item)),
        "orderStatus" in t && n(1, (a = t.orderStatus)),
        "selected" in t && n(2, ($ = t.selected)));
    }),
    (t.$$.update = () => {
      1 & t.$$.dirty &&
        (n(3, (r = V(c.price, c.digits))),
        n(4, (l = c.sl ? V(c.sl, c.digits) : "")),
        n(5, (s = c.tp ? V(c.tp, c.digits) : "")),
        n(6, (i = String(V(c.priceCurrent, c.digits) ?? "-"))));
    }),
    [
      c,
      a,
      $,
      r,
      l,
      s,
      i,
      o,
      () => o("removeLevel", { level: "sl", order: c.order }),
      () => o("removeLevel", { level: "tp", order: c.order }),
      () => o("close", { order: c.order }),
      function (e) {
        y.call(this, t, e);
      },
      function (e) {
        y.call(this, t, e);
      },
      function (e) {
        y.call(this, t, e);
      },
      function (e) {
        y.call(this, t, e);
      },
    ]
  );
}
class $e extends t {
  constructor(t) {
    (super(), e(this, t, ae, se, n, { item: 0, orderStatus: 1, selected: 2 }));
  }
}
function de(t) {
  let e,
    n,
    o,
    r,
    l,
    s,
    i,
    $,
    y = window.tr(window.lang.trade.table.total.collateral) + "",
    w = V(t[1].collateral, 2) + "",
    v = t[1].currency + "";
  return {
    c() {
      ((e = m("div")),
        (n = m("div")),
        (o = f(y)),
        (r = f(": ")),
        (l = f(w)),
        (s = p()),
        (i = m("span")),
        ($ = f(v)),
        g(i, "class", "bold svelte-1w81fi8"),
        g(e, "class", "layout svelte-1w81fi8"));
    },
    m(t, c) {
      (d(t, e, c),
        u(e, n),
        u(n, o),
        u(n, r),
        u(n, l),
        u(e, s),
        u(e, i),
        u(i, $));
    },
    p(t, e) {
      (2 & e && w !== (w = V(t[1].collateral, 2) + "") && a(l, w),
        2 & e && v !== (v = t[1].currency + "") && a($, v));
    },
    d(t) {
      t && c(e);
    },
  };
}
function ue(t) {
  let e, n;
  return (
    (e = new X({
      props: {
        index: 0,
        colspan: [1, 14],
        $$slots: { default: [de] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(t, n) {
        const o = {};
        (6 & n && (o.$$scope = { dirty: n, ctx: t }), e.$set(o));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function me(t) {
  let e, n;
  return (
    (e = new A({
      props: {
        inactive: !0,
        sticky: !0,
        $$slots: { default: [ue] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(t, [n]) {
        const o = {};
        (6 & n && (o.$$scope = { dirty: n, ctx: t }), e.$set(o));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function fe(t, e, n) {
  let o,
    r = w,
    l = () => (r(), (r = v(s, (t) => n(1, (o = t)))), s);
  t.$$.on_destroy.push(() => r());
  let { accountStore: s } = e;
  return (
    l(),
    (t.$$set = (t) => {
      "accountStore" in t && l(n(0, (s = t.accountStore)));
    }),
    [s, o]
  );
}
class pe extends t {
  constructor(t) {
    (super(), e(this, t, fe, me, n, { accountStore: 0 }));
  }
}
function ge(t) {
  let e,
    n,
    o,
    r,
    l = window.tr(window.lang.trade.table.total.assets) + "",
    s = V(t[1].assets, 2) + "";
  return {
    c() {
      ((e = m("div")), (n = f(l)), (o = f(": ")), (r = f(s)));
    },
    m(t, l) {
      (d(t, e, l), u(e, n), u(e, o), u(e, r));
    },
    p(t, e) {
      2 & e && s !== (s = V(t[1].assets, 2) + "") && a(r, s);
    },
    d(t) {
      t && c(e);
    },
  };
}
function ye(t) {
  let e,
    n,
    o,
    r,
    l = window.tr(window.lang.trade.table.total.liabilities) + "",
    s = V(t[1].liabilities, 2) + "";
  return {
    c() {
      ((e = m("div")), (n = f(l)), (o = f(": ")), (r = f(s)));
    },
    m(t, l) {
      (d(t, e, l), u(e, n), u(e, o), u(e, r));
    },
    p(t, e) {
      2 & e && s !== (s = V(t[1].liabilities, 2) + "") && a(r, s);
    },
    d(t) {
      t && c(e);
    },
  };
}
function we(t) {
  let e,
    n,
    o,
    r,
    l = window.tr(window.lang.trade.table.total.credit) + "",
    s = V(t[1].credit, 2) + "";
  return {
    c() {
      ((e = m("div")), (n = f(l)), (o = f(": ")), (r = f(s)));
    },
    m(t, l) {
      (d(t, e, l), u(e, n), u(e, o), u(e, r));
    },
    p(t, e) {
      2 & e && s !== (s = V(t[1].credit, 2) + "") && a(r, s);
    },
    d(t) {
      t && c(e);
    },
  };
}
function ve(t) {
  let e,
    n,
    o,
    r,
    l = window.tr(window.lang.trade.table.total.commission) + "",
    s = V(t[1].commission, 2) + "";
  return {
    c() {
      ((e = m("div")), (n = f(l)), (o = f(": ")), (r = f(s)));
    },
    m(t, l) {
      (d(t, e, l), u(e, n), u(e, o), u(e, r));
    },
    p(t, e) {
      2 & e && s !== (s = V(t[1].commission, 2) + "") && a(r, s);
    },
    d(t) {
      t && c(e);
    },
  };
}
function he(t) {
  let e,
    n,
    o,
    r,
    l,
    s,
    i,
    $,
    y,
    w,
    v,
    h,
    x,
    S,
    b,
    C,
    k,
    N,
    q,
    P,
    O,
    B,
    L,
    F,
    T,
    _,
    U,
    D,
    E,
    j,
    I = window.tr(window.lang.trade.table.total.balance) + "",
    M = V(t[1].balance, 2) + "",
    Y = window.tr(window.lang.trade.table.total.equity) + "",
    R = V(t[1].equity, 2) + "",
    Q = window.tr(window.lang.trade.table.total.margin) + "",
    H = V(t[1].margin, 2) + "",
    J = window.tr(window.lang.trade.table.total.marginFree) + "",
    W = V(t[1].marginFree, 2) + "",
    z = window.tr(window.lang.trade.table.total.marginLevel) + "",
    A = V(t[1].marginLevel, 2) + "",
    X = t[1].assets && ge(t),
    Z = t[1].liabilities && ye(t),
    G = t[1].credit && we(t),
    K = t[1].commission && ve(t);
  return {
    c() {
      ((e = m("div")),
        (n = m("div")),
        (o = f(I)),
        (r = f(": ")),
        (l = f(M)),
        (s = p()),
        X && X.c(),
        (i = p()),
        Z && Z.c(),
        ($ = p()),
        (y = m("div")),
        (w = f(Y)),
        (v = f(": ")),
        (h = f(R)),
        (x = p()),
        G && G.c(),
        (S = p()),
        K && K.c(),
        (b = p()),
        (C = m("div")),
        (k = f(Q)),
        (N = f(": ")),
        (q = f(H)),
        (P = p()),
        (O = m("div")),
        (B = f(J)),
        (L = f(": ")),
        (F = f(W)),
        (T = p()),
        (_ = m("div")),
        (U = f(z)),
        (D = f(": ")),
        (E = f(A)),
        (j = f("%")),
        g(e, "class", "layout svelte-1w81fi8"));
    },
    m(t, c) {
      (d(t, e, c),
        u(e, n),
        u(n, o),
        u(n, r),
        u(n, l),
        u(e, s),
        X && X.m(e, null),
        u(e, i),
        Z && Z.m(e, null),
        u(e, $),
        u(e, y),
        u(y, w),
        u(y, v),
        u(y, h),
        u(e, x),
        G && G.m(e, null),
        u(e, S),
        K && K.m(e, null),
        u(e, b),
        u(e, C),
        u(C, k),
        u(C, N),
        u(C, q),
        u(e, P),
        u(e, O),
        u(O, B),
        u(O, L),
        u(O, F),
        u(e, T),
        u(e, _),
        u(_, U),
        u(_, D),
        u(_, E),
        u(_, j));
    },
    p(t, n) {
      (2 & n && M !== (M = V(t[1].balance, 2) + "") && a(l, M),
        t[1].assets
          ? X
            ? X.p(t, n)
            : ((X = ge(t)), X.c(), X.m(e, i))
          : X && (X.d(1), (X = null)),
        t[1].liabilities
          ? Z
            ? Z.p(t, n)
            : ((Z = ye(t)), Z.c(), Z.m(e, $))
          : Z && (Z.d(1), (Z = null)),
        2 & n && R !== (R = V(t[1].equity, 2) + "") && a(h, R),
        t[1].credit
          ? G
            ? G.p(t, n)
            : ((G = we(t)), G.c(), G.m(e, S))
          : G && (G.d(1), (G = null)),
        t[1].commission
          ? K
            ? K.p(t, n)
            : ((K = ve(t)), K.c(), K.m(e, b))
          : K && (K.d(1), (K = null)),
        2 & n && H !== (H = V(t[1].margin, 2) + "") && a(q, H),
        2 & n && W !== (W = V(t[1].marginFree, 2) + "") && a(F, W),
        2 & n && A !== (A = V(t[1].marginLevel, 2) + "") && a(E, A));
    },
    d(t) {
      (t && c(e), X && X.d(), Z && Z.d(), G && G.d(), K && K.d());
    },
  };
}
function xe(t) {
  let e,
    n = V(t[1].floating, 2) + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p(t, o) {
      2 & o && n !== (n = V(t[1].floating, 2) + "") && a(e, n);
    },
    d(t) {
      t && c(e);
    },
  };
}
function Se(t) {
  let e,
    n,
    o,
    r = t[1].currency + "";
  return {
    c() {
      ((e = m("span")),
        (n = f(r)),
        g(e, "class", "bold svelte-1w81fi8"),
        g(e, "style", (o = `color: ${t[1].floating > 0 ? ke : Ne};`)));
    },
    m(t, o) {
      (d(t, e, o), u(e, n));
    },
    p(t, l) {
      (2 & l && r !== (r = t[1].currency + "") && a(n, r),
        2 & l &&
          o !== (o = `color: ${t[1].floating > 0 ? ke : Ne};`) &&
          g(e, "style", o));
    },
    d(t) {
      t && c(e);
    },
  };
}
function be(t) {
  let e, n, a, $, u, m, f, g;
  return (
    (e = new X({
      props: {
        index: 0,
        colspan: [1, 11],
        $$slots: { default: [he] },
        $$scope: { ctx: t },
      },
    })),
    (a = new X({
      props: { index: 10, $$slots: { default: [xe] }, $$scope: { ctx: t } },
    })),
    (u = new X({
      props: { index: 11, $$slots: { default: [Se] }, $$scope: { ctx: t } },
    })),
    (f = new X({ props: { index: 12 } })),
    {
      c() {
        (i(e.$$.fragment),
          (n = p()),
          i(a.$$.fragment),
          ($ = p()),
          i(u.$$.fragment),
          (m = p()),
          i(f.$$.fragment));
      },
      m(t, o) {
        (s(e, t, o),
          d(t, n, o),
          s(a, t, o),
          d(t, $, o),
          s(u, t, o),
          d(t, m, o),
          s(f, t, o),
          (g = !0));
      },
      p(t, n) {
        const o = {};
        (6 & n && (o.$$scope = { dirty: n, ctx: t }), e.$set(o));
        const r = {};
        (6 & n && (r.$$scope = { dirty: n, ctx: t }), a.$set(r));
        const l = {};
        (6 & n && (l.$$scope = { dirty: n, ctx: t }), u.$set(l));
      },
      i(t) {
        g ||
          (l(e.$$.fragment, t),
          l(a.$$.fragment, t),
          l(u.$$.fragment, t),
          l(f.$$.fragment, t),
          (g = !0));
      },
      o(t) {
        (r(e.$$.fragment, t),
          r(a.$$.fragment, t),
          r(u.$$.fragment, t),
          r(f.$$.fragment, t),
          (g = !1));
      },
      d(t) {
        (t && (c(n), c($), c(m)), o(e, t), o(a, t), o(u, t), o(f, t));
      },
    }
  );
}
function Ce(t) {
  let e, n;
  return (
    (e = new A({
      props: {
        inactive: !0,
        sticky: !0,
        $$slots: { default: [be] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(t, [n]) {
        const o = {};
        (6 & n && (o.$$scope = { dirty: n, ctx: t }), e.$set(o));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
const ke = "var(--color-text-blue)",
  Ne = "var(--color-text-red)";
function qe(t, e, n) {
  let o,
    r = w,
    l = () => (r(), (r = v(s, (t) => n(1, (o = t)))), s);
  t.$$.on_destroy.push(() => r());
  let { accountStore: s } = e;
  return (
    l(),
    (t.$$set = (t) => {
      "accountStore" in t && l(n(0, (s = t.accountStore)));
    }),
    [s, o]
  );
}
class Pe extends t {
  constructor(t) {
    (super(), e(this, t, qe, Ce, n, { accountStore: 0 }));
  }
}
function Oe(t, e, n) {
  const o = t.slice();
  return ((o[57] = e[n]), o);
}
function Be(t, e, n) {
  const o = t.slice();
  return ((o[60] = e[n]), o);
}
function Le(t, e, n) {
  const o = t.slice();
  return ((o[60] = e[n]), o);
}
function Fe(t, e, n) {
  const o = t.slice();
  return ((o[71] = e[n]), o);
}
function Te(t, e, n) {
  const o = t.slice();
  return ((o[57] = e[n]), o);
}
function _e(t, e, n) {
  const o = t.slice();
  return ((o[60] = e[n]), o);
}
function Ue(t, e, n) {
  const o = t.slice();
  return ((o[60] = e[n]), o);
}
function De(t) {
  let e, n, a, $, u;
  return (
    (n = new Z({ props: { $$slots: { default: [Ke] }, $$scope: { ctx: t } } })),
    {
      c() {
        ((e = m("div")),
          i(n.$$.fragment),
          g(e, "class", "wrapper svelte-2xl1xo"));
      },
      m(o, r) {
        (d(o, e, r),
          s(n, e, null),
          t[53](e),
          (a = !0),
          $ ||
            ((u = [k(e, "contextmenu", t[30]), k(e, "contextmenu", t[54])]),
            ($ = !0)));
      },
      p(t, e) {
        const o = {};
        ((1048368 & e[0]) | (4096 & e[2]) && (o.$$scope = { dirty: e, ctx: t }),
          n.$set(o));
      },
      i(t) {
        a || (l(n.$$.fragment, t), (a = !0));
      },
      o(t) {
        (r(n.$$.fragment, t), (a = !1));
      },
      d(r) {
        (r && c(e), o(n), t[53](null), ($ = !1), C(u));
      },
    }
  );
}
function Ee(t) {
  let e,
    n,
    o,
    s = !t[17] && tn(t);
  return {
    c() {
      ((e = m("div")),
        (n = m("div")),
        s && s.c(),
        g(n, "class", "list svelte-2xl1xo"),
        g(e, "class", "wrapper svelte-2xl1xo"));
    },
    m(t, r) {
      (d(t, e, r), u(e, n), s && s.m(n, null), (o = !0));
    },
    p(t, e) {
      t[17]
        ? s &&
          (S(),
          r(s, 1, 1, () => {
            s = null;
          }),
          b())
        : s
          ? (s.p(t, e), 131072 & e[0] && l(s, 1))
          : ((s = tn(t)), s.c(), l(s, 1), s.m(n, null));
    },
    i(t) {
      o || (l(s), (o = !0));
    },
    o(t) {
      (r(s), (o = !1));
    },
    d(t) {
      (t && c(e), s && s.d());
    },
  };
}
function Ve(t) {
  let e,
    n = Q(t[71].key).title + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p: w,
    d(t) {
      t && c(e);
    },
  };
}
function je(t) {
  let e, n, c, a;
  function $(e) {
    t[35](e);
  }
  function d(e) {
    t[36](e);
  }
  let u = {
    value: t[71].key,
    right: t[71].right,
    $$slots: { default: [Ve] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[11] && (u.sortBy = t[11]),
    void 0 !== t[12] && (u.direction = t[12]),
    (e = new et({ props: u })),
    P.push(() => _(e, "sortBy", $)),
    P.push(() => _(e, "direction", d)),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, n) {
        (s(e, t, n), (a = !0));
      },
      p(t, o) {
        const r = {};
        (4096 & o[2] && (r.$$scope = { dirty: o, ctx: t }),
          !n &&
            2048 & o[0] &&
            ((n = !0), (r.sortBy = t[11]), U(() => (n = !1))),
          !c &&
            4096 & o[0] &&
            ((c = !0), (r.direction = t[12]), U(() => (c = !1))),
          e.$set(r));
      },
      i(t) {
        a || (l(e.$$.fragment, t), (a = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (a = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function Ie(t) {
  let e, n;
  return (
    (e = new tt({
      props: {
        visible:
          !t[71].visible || !1 !== t[19].quotesColumnsVisible[t[71].visible],
        index: t[71].key,
        width: t[15][t[71].key],
        right: t[71].right,
        level: t[71].level,
        title: Q(t[71].key).description || Q(t[71].key).title,
        $$slots: { default: [je] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(t, n) {
        const o = {};
        (524288 & n[0] &&
          (o.visible =
            !t[71].visible || !1 !== t[19].quotesColumnsVisible[t[71].visible]),
          32768 & n[0] && (o.width = t[15][t[71].key]),
          (6144 & n[0]) | (4096 & n[2]) && (o.$$scope = { dirty: n, ctx: t }),
          e.$set(o));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function Me(t) {
  let e;
  return {
    c() {
      ((e = m("div")), T(e, "position", "relative"), T(e, "z-index", "1"));
    },
    m(t, n) {
      d(t, e, n);
    },
    p: w,
    d(t) {
      t && c(e);
    },
  };
}
function Ye(t) {
  let e,
    n,
    a,
    $ = O(Y),
    u = [];
  for (let o = 0; o < $.length; o += 1) u[o] = Ie(Fe(t, $, o));
  const m = (t) =>
    r(u[t], 1, 1, () => {
      u[t] = null;
    });
  return (
    (n = new tt({
      props: {
        index: R.Controls,
        width: t[15][R.Controls],
        right: !0,
        $$slots: { default: [Me] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        for (let t = 0; t < u.length; t += 1) u[t].c();
        ((e = p()), i(n.$$.fragment));
      },
      m(t, o) {
        for (let e = 0; e < u.length; e += 1) u[e] && u[e].m(t, o);
        (d(t, e, o), s(n, t, o), (a = !0));
      },
      p(t, o) {
        if (563200 & o[0]) {
          let n;
          for ($ = O(Y), n = 0; n < $.length; n += 1) {
            const r = Fe(t, $, n);
            u[n]
              ? (u[n].p(r, o), l(u[n], 1))
              : ((u[n] = Ie(r)), u[n].c(), l(u[n], 1), u[n].m(e.parentNode, e));
          }
          for (S(), n = $.length; n < u.length; n += 1) m(n);
          b();
        }
        const r = {};
        (32768 & o[0] && (r.width = t[15][R.Controls]),
          4096 & o[2] && (r.$$scope = { dirty: o, ctx: t }),
          n.$set(r));
      },
      i(t) {
        if (!a) {
          for (let t = 0; t < $.length; t += 1) l(u[t]);
          (l(n.$$.fragment, t), (a = !0));
        }
      },
      o(t) {
        u = u.filter(Boolean);
        for (let e = 0; e < u.length; e += 1) r(u[e]);
        (r(n.$$.fragment, t), (a = !1));
      },
      d(t) {
        (t && c(e), B(u, t), o(n, t));
      },
    }
  );
}
function Re(t) {
  let e, n;
  return (
    (e = new W({ props: { overlay: !0 } })),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p: w,
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function Qe(t) {
  let e,
    n,
    a,
    $,
    u,
    m,
    f,
    g = [],
    y = new Map(),
    w = O(t[14].noCollateral),
    v = [];
  for (let o = 0; o < w.length; o += 1) v[o] = He(Le(t, w, o));
  const h = (t) =>
    r(v[t], 1, 1, () => {
      v[t] = null;
    });
  n = new Pe({ props: { accountStore: t[4] } });
  let C = O(t[14].collateral),
    k = [];
  for (let o = 0; o < C.length; o += 1) k[o] = Je(Be(t, C, o));
  const N = (t) =>
    r(k[t], 1, 1, () => {
      k[t] = null;
    });
  let q = t[14].collateral.length && We(t),
    P = O(t[9]);
  const T = (t) => t[57].id;
  for (let o = 0; o < P.length; o += 1) {
    let e = Oe(t, P, o),
      n = T(e);
    y.set(n, (g[o] = ze(n, e)));
  }
  return {
    c() {
      for (let t = 0; t < v.length; t += 1) v[t].c();
      ((e = p()), i(n.$$.fragment), (a = p()));
      for (let t = 0; t < k.length; t += 1) k[t].c();
      (($ = p()), q && q.c(), (u = p()));
      for (let t = 0; t < g.length; t += 1) g[t].c();
      m = x();
    },
    m(t, o) {
      for (let e = 0; e < v.length; e += 1) v[e] && v[e].m(t, o);
      (d(t, e, o), s(n, t, o), d(t, a, o));
      for (let e = 0; e < k.length; e += 1) k[e] && k[e].m(t, o);
      (d(t, $, o), q && q.m(t, o), d(t, u, o));
      for (let e = 0; e < g.length; e += 1) g[e] && g[e].m(t, o);
      (d(t, m, o), (f = !0));
    },
    p(t, o) {
      if (2187264 & o[0]) {
        let n;
        for (w = O(t[14].noCollateral), n = 0; n < w.length; n += 1) {
          const r = Le(t, w, n);
          v[n]
            ? (v[n].p(r, o), l(v[n], 1))
            : ((v[n] = He(r)), v[n].c(), l(v[n], 1), v[n].m(e.parentNode, e));
        }
        for (S(), n = w.length; n < v.length; n += 1) h(n);
        b();
      }
      const s = {};
      if ((16 & o[0] && (s.accountStore = t[4]), n.$set(s), 2187264 & o[0])) {
        let e;
        for (C = O(t[14].collateral), e = 0; e < C.length; e += 1) {
          const n = Be(t, C, e);
          k[e]
            ? (k[e].p(n, o), l(k[e], 1))
            : ((k[e] = Je(n)), k[e].c(), l(k[e], 1), k[e].m($.parentNode, $));
        }
        for (S(), e = C.length; e < k.length; e += 1) N(e);
        b();
      }
      (t[14].collateral.length
        ? q
          ? (q.p(t, o), 16384 & o[0] && l(q, 1))
          : ((q = We(t)), q.c(), l(q, 1), q.m(u.parentNode, u))
        : q &&
          (S(),
          r(q, 1, 1, () => {
            q = null;
          }),
          b()),
        4268576 & o[0] &&
          ((P = O(t[9])),
          S(),
          (g = L(g, o, T, 1, t, P, y, m.parentNode, F, ze, m, Oe)),
          b()));
    },
    i(t) {
      if (!f) {
        for (let t = 0; t < w.length; t += 1) l(v[t]);
        l(n.$$.fragment, t);
        for (let t = 0; t < C.length; t += 1) l(k[t]);
        l(q);
        for (let t = 0; t < P.length; t += 1) l(g[t]);
        f = !0;
      }
    },
    o(t) {
      v = v.filter(Boolean);
      for (let e = 0; e < v.length; e += 1) r(v[e]);
      (r(n.$$.fragment, t), (k = k.filter(Boolean)));
      for (let e = 0; e < k.length; e += 1) r(k[e]);
      r(q);
      for (let e = 0; e < g.length; e += 1) r(g[e]);
      f = !1;
    },
    d(t) {
      (t && (c(e), c(a), c($), c(u), c(m)),
        B(v, t),
        o(n, t),
        B(k, t),
        q && q.d(t));
      for (let e = 0; e < g.length; e += 1) g[e].d(t);
    },
  };
}
function He(t) {
  let e, n;
  return (
    (e = new Qt({
      props: { item: t[60].value, selected: t[13].selectedPosition },
    })),
    e.$on("click", function () {
      return t[37](t[60]);
    }),
    e.$on("dblclick", t[38]),
    e.$on("close", t[39]),
    e.$on("removeLevel", t[40]),
    e.$on("contextmenu", function () {
      return t[41](t[60]);
    }),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(n, o) {
        t = n;
        const r = {};
        (16384 & o[0] && (r.item = t[60].value),
          8192 & o[0] && (r.selected = t[13].selectedPosition),
          e.$set(r));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function Je(t) {
  let e, n;
  return (
    (e = new Qt({
      props: {
        item: t[60].value,
        selected: t[13].selectedPosition,
        collateral: !0,
      },
    })),
    e.$on("click", function () {
      return t[42](t[60]);
    }),
    e.$on("dblclick", t[43]),
    e.$on("close", t[44]),
    e.$on("removeLevel", t[45]),
    e.$on("contextmenu", function () {
      return t[46](t[60]);
    }),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(n, o) {
        t = n;
        const r = {};
        (16384 & o[0] && (r.item = t[60].value),
          8192 & o[0] && (r.selected = t[13].selectedPosition),
          e.$set(r));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function We(t) {
  let e, n;
  return (
    (e = new pe({ props: { accountStore: t[4] } })),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(t, n) {
        const o = {};
        (16 & n[0] && (o.accountStore = t[4]), e.$set(o));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function ze(t, e) {
  let n, a, $;
  return (
    (a = new $e({
      props: {
        orderStatus: e[5].printOrderStatus(e[57].value.state),
        item: e[57].value,
        selected: e[13].selectedOrder,
      },
    })),
    a.$on("click", function () {
      return e[47](e[57]);
    }),
    a.$on("dblclick", e[48]),
    a.$on("close", e[49]),
    a.$on("removeLevel", e[50]),
    a.$on("contextmenu", function () {
      return e[51](e[57]);
    }),
    {
      key: t,
      first: null,
      c() {
        ((n = x()), i(a.$$.fragment), (this.first = n));
      },
      m(t, e) {
        (d(t, n, e), s(a, t, e), ($ = !0));
      },
      p(t, n) {
        e = t;
        const o = {};
        (544 & n[0] &&
          (o.orderStatus = e[5].printOrderStatus(e[57].value.state)),
          512 & n[0] && (o.item = e[57].value),
          8192 & n[0] && (o.selected = e[13].selectedOrder),
          a.$set(o));
      },
      i(t) {
        $ || (l(a.$$.fragment, t), ($ = !0));
      },
      o(t) {
        (r(a.$$.fragment, t), ($ = !1));
      },
      d(t) {
        (t && c(n), o(a, t));
      },
    }
  );
}
function Ae(t) {
  let e, n, a, $, u, m;
  e = new A({ props: { $$slots: { default: [Ye] }, $$scope: { ctx: t } } });
  const f = [Qe, Re],
    g = [];
  function y(t, e) {
    return t[17] ? 1 : 0;
  }
  return (
    (a = y(t)),
    ($ = g[a] = f[a](t)),
    {
      c() {
        (i(e.$$.fragment), (n = p()), $.c(), (u = x()));
      },
      m(t, o) {
        (s(e, t, o), d(t, n, o), g[a].m(t, o), d(t, u, o), (m = !0));
      },
      p(t, n) {
        const o = {};
        ((563200 & n[0]) | (4096 & n[2]) && (o.$$scope = { dirty: n, ctx: t }),
          e.$set(o));
        let s = a;
        ((a = y(t)),
          a === s
            ? g[a].p(t, n)
            : (S(),
              r(g[s], 1, 1, () => {
                g[s] = null;
              }),
              b(),
              ($ = g[a]),
              $ ? $.p(t, n) : (($ = g[a] = f[a](t)), $.c()),
              l($, 1),
              $.m(u.parentNode, u)));
      },
      i(t) {
        m || (l(e.$$.fragment, t), l($), (m = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), r($), (m = !1));
      },
      d(t) {
        (t && (c(n), c(u)), o(e, t), g[a].d(t));
      },
    }
  );
}
function Xe(t) {
  let e,
    n = window.tr(window.lang.trade.table.emptyPlug.title) + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p: w,
    d(t) {
      t && c(e);
    },
  };
}
function Ze(t) {
  let e, n, o;
  return {
    c() {
      ((e = m("button")),
        (e.textContent = `${window.tr(window.lang.trade.table.emptyPlug.btnNewOrder)}`),
        g(e, "slot", "buttons"));
    },
    m(r, l) {
      (d(r, e, l), n || ((o = k(e, "click", t[34])), (n = !0)));
    },
    p: w,
    d(t) {
      (t && c(e), (n = !1), o());
    },
  };
}
function Ge(t) {
  let e, n;
  return (
    (e = new K({
      props: {
        slot: "empty",
        $$slots: { buttons: [Ze], title: [Xe] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(t, n) {
        const o = {};
        ((262144 & n[0]) | (4096 & n[2]) && (o.$$scope = { dirty: n, ctx: t }),
          e.$set(o));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function Ke(t) {
  let e,
    n,
    c = {
      empty: !t[9].length && !t[10].length,
      $$slots: { empty: [Ge], default: [Ae] },
      $$scope: { ctx: t },
    };
  return (
    (e = new G({ props: c })),
    t[52](e),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(t, n) {
        const o = {};
        (1536 & n[0] && (o.empty = !t[9].length && !t[10].length),
          (1047088 & n[0]) | (4096 & n[2]) &&
            (o.$$scope = { dirty: n, ctx: t }),
          e.$set(o));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(n) {
        (t[52](null), o(e, n));
      },
    }
  );
}
function tn(t) {
  let e, n, a, $, u, m, f, g, y;
  e = new pt({ props: { accountStore: t[4] } });
  let w = t[14].noCollateral.length && en(),
    v = O(t[14].noCollateral),
    h = [];
  for (let o = 0; o < v.length; o += 1) h[o] = nn(Ue(t, v, o));
  const C = (t) =>
    r(h[t], 1, 1, () => {
      h[t] = null;
    });
  let k = t[14].collateral.length && on(),
    N = O(t[14].collateral),
    q = [];
  for (let o = 0; o < N.length; o += 1) q[o] = rn(_e(t, N, o));
  const P = (t) =>
    r(q[t], 1, 1, () => {
      q[t] = null;
    });
  let L = t[9].length && ln(),
    F = O(t[9]),
    T = [];
  for (let o = 0; o < F.length; o += 1) T[o] = sn(Te(t, F, o));
  const _ = (t) =>
    r(T[t], 1, 1, () => {
      T[t] = null;
    });
  return {
    c() {
      (i(e.$$.fragment), (n = p()), w && w.c(), (a = p()));
      for (let t = 0; t < h.length; t += 1) h[t].c();
      (($ = p()), k && k.c(), (u = p()));
      for (let t = 0; t < q.length; t += 1) q[t].c();
      ((m = p()), L && L.c(), (f = p()));
      for (let t = 0; t < T.length; t += 1) T[t].c();
      g = x();
    },
    m(t, o) {
      (s(e, t, o), d(t, n, o), w && w.m(t, o), d(t, a, o));
      for (let e = 0; e < h.length; e += 1) h[e] && h[e].m(t, o);
      (d(t, $, o), k && k.m(t, o), d(t, u, o));
      for (let e = 0; e < q.length; e += 1) q[e] && q[e].m(t, o);
      (d(t, m, o), L && L.m(t, o), d(t, f, o));
      for (let e = 0; e < T.length; e += 1) T[e] && T[e].m(t, o);
      (d(t, g, o), (y = !0));
    },
    p(t, n) {
      const o = {};
      if (
        (16 & n[0] && (o.accountStore = t[4]),
        e.$set(o),
        t[14].noCollateral.length
          ? w
            ? w.p(t, n)
            : ((w = en()), w.c(), w.m(a.parentNode, a))
          : w && (w.d(1), (w = null)),
        3235840 & n[0])
      ) {
        let e;
        for (v = O(t[14].noCollateral), e = 0; e < v.length; e += 1) {
          const o = Ue(t, v, e);
          h[e]
            ? (h[e].p(o, n), l(h[e], 1))
            : ((h[e] = nn(o)), h[e].c(), l(h[e], 1), h[e].m($.parentNode, $));
        }
        for (S(), e = v.length; e < h.length; e += 1) C(e);
        b();
      }
      if (
        (t[14].collateral.length
          ? k
            ? k.p(t, n)
            : ((k = on()), k.c(), k.m(u.parentNode, u))
          : k && (k.d(1), (k = null)),
        3235840 & n[0])
      ) {
        let e;
        for (N = O(t[14].collateral), e = 0; e < N.length; e += 1) {
          const o = _e(t, N, e);
          q[e]
            ? (q[e].p(o, n), l(q[e], 1))
            : ((q[e] = rn(o)), q[e].c(), l(q[e], 1), q[e].m(m.parentNode, m));
        }
        for (S(), e = N.length; e < q.length; e += 1) P(e);
        b();
      }
      if (
        (t[9].length
          ? L
            ? L.p(t, n)
            : ((L = ln()), L.c(), L.m(f.parentNode, f))
          : L && (L.d(1), (L = null)),
        5317152 & n[0])
      ) {
        let e;
        for (F = O(t[9]), e = 0; e < F.length; e += 1) {
          const o = Te(t, F, e);
          T[e]
            ? (T[e].p(o, n), l(T[e], 1))
            : ((T[e] = sn(o)), T[e].c(), l(T[e], 1), T[e].m(g.parentNode, g));
        }
        for (S(), e = F.length; e < T.length; e += 1) _(e);
        b();
      }
    },
    i(t) {
      if (!y) {
        l(e.$$.fragment, t);
        for (let t = 0; t < v.length; t += 1) l(h[t]);
        for (let t = 0; t < N.length; t += 1) l(q[t]);
        for (let t = 0; t < F.length; t += 1) l(T[t]);
        y = !0;
      }
    },
    o(t) {
      (r(e.$$.fragment, t), (h = h.filter(Boolean)));
      for (let e = 0; e < h.length; e += 1) r(h[e]);
      q = q.filter(Boolean);
      for (let e = 0; e < q.length; e += 1) r(q[e]);
      T = T.filter(Boolean);
      for (let e = 0; e < T.length; e += 1) r(T[e]);
      y = !1;
    },
    d(t) {
      (t && (c(n), c(a), c($), c(u), c(m), c(f), c(g)),
        o(e, t),
        w && w.d(t),
        B(h, t),
        k && k.d(t),
        B(q, t),
        L && L.d(t),
        B(T, t));
    },
  };
}
function en(t) {
  let e;
  return {
    c() {
      ((e = m("div")),
        (e.textContent = `${window.tr(window.lang.trade.table.sections.positions)}`),
        g(e, "class", "header svelte-2xl1xo"));
    },
    m(t, n) {
      d(t, e, n);
    },
    p: w,
    d(t) {
      t && c(e);
    },
  };
}
function nn(t) {
  let e, n;
  return (
    (e = new xt({
      props: { item: t[60].value, selected: t[13].selectedPosition },
    })),
    e.$on("click", function () {
      return t[31](t[60]);
    }),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(n, o) {
        t = n;
        const r = {};
        (16384 & o[0] && (r.item = t[60].value),
          8192 & o[0] && (r.selected = t[13].selectedPosition),
          e.$set(r));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function on(t) {
  let e;
  return {
    c() {
      ((e = m("div")),
        (e.textContent = `${window.tr(window.lang.trade.table.sections.collateralPositions)}`),
        g(e, "class", "header svelte-2xl1xo"));
    },
    m(t, n) {
      d(t, e, n);
    },
    p: w,
    d(t) {
      t && c(e);
    },
  };
}
function rn(t) {
  let e, n;
  return (
    (e = new xt({
      props: {
        item: t[60].value,
        selected: t[13].selectedPosition,
        collateral: !0,
      },
    })),
    e.$on("click", function () {
      return t[32](t[60]);
    }),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(n, o) {
        t = n;
        const r = {};
        (16384 & o[0] && (r.item = t[60].value),
          8192 & o[0] && (r.selected = t[13].selectedPosition),
          e.$set(r));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function ln(t) {
  let e;
  return {
    c() {
      ((e = m("div")),
        (e.textContent = `${window.tr(window.lang.trade.table.sections.orders)}`),
        g(e, "class", "header svelte-2xl1xo"));
    },
    m(t, n) {
      d(t, e, n);
    },
    p: w,
    d(t) {
      t && c(e);
    },
  };
}
function sn(t) {
  let e, n;
  return (
    (e = new ct({
      props: {
        item: t[57].value,
        orderStatus: t[5].printOrderStatus(t[57].value.state),
        selected: t[13].selectedPosition,
      },
    })),
    e.$on("click", function () {
      return t[33](t[57]);
    }),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(n, o) {
        t = n;
        const r = {};
        (512 & o[0] && (r.item = t[57].value),
          544 & o[0] &&
            (r.orderStatus = t[5].printOrderStatus(t[57].value.state)),
          8192 & o[0] && (r.selected = t[13].selectedPosition),
          e.$set(r));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function cn(t) {
  let e, n, o, s;
  const i = [Ee, De],
    a = [];
  return (
    (e = 1),
    (n = a[1] = i[1](t)),
    {
      c() {
        (n.c(), (o = x()));
      },
      m(t, e) {
        (a[1].m(t, e), d(t, o, e), (s = !0));
      },
      p(t, e) {
        n.p(t, e);
      },
      i(t) {
        s || (l(n), (s = !0));
      },
      o(t) {
        (r(n), (s = !1));
      },
      d(t) {
        (t && c(o), a[1].d(t));
      },
    }
  );
}
function an(t, e, n) {
  let o,
    r,
    l,
    s,
    i,
    c = w,
    a = () => (c(), (c = v(N, (t) => n(13, (o = t)))), N),
    $ = w,
    d = () => ($(), ($ = v(C, (t) => n(28, (r = t)))), C),
    u = w,
    m = () => (u(), (u = v(b, (t) => n(29, (l = t)))), b),
    f = w,
    p = () => (f(), (f = v(_, (t) => n(18, (s = t)))), _),
    g = w,
    x = () => (g(), (g = v(T, (t) => n(19, (i = t)))), T);
  (t.$$.on_destroy.push(() => c()),
    t.$$.on_destroy.push(() => $()),
    t.$$.on_destroy.push(() => u()),
    t.$$.on_destroy.push(() => f()),
    t.$$.on_destroy.push(() => g()));
  let { symbolsStore: S } = e,
    { positionsStore: b } = e;
  m();
  let { ordersStore: C } = e;
  d();
  let { interactionController: k } = e,
    { interactionStore: N } = e;
  a();
  let { chartController: O } = e,
    { accountStore: B } = e,
    { configStore: L } = e,
    { orderUtils: F } = e,
    { uiSettingsStore: T } = e;
  x();
  let { layoutStore: _ } = e;
  p();
  let U,
    { element: D } = e,
    E = null,
    V = "",
    j = [],
    I = [],
    Y = { collateral: [], noCollateral: [] },
    R = null,
    Q = 0,
    J = {},
    W = !0;
  const z = h();
  function A(t) {
    o.selectedPosition !== t.id
      ? (o.setSelectedPosition(t.id),
        L.symbol !== t.symbol && O.select(t.symbol),
        (null !== _.tradeCreate || _.tradeEdit) && k.setSelectedForEdit(t.id))
      : o.setSelectedPosition("");
  }
  function X(t) {
    o.selectedOrder !== t.order
      ? (o.setSelectedOrder(t.order),
        L.symbol !== t.symbol && O.select(t.symbol),
        (null !== _.tradeCreate || _.tradeEdit) &&
          k.setSelectedForEdit(t.order))
      : o.setSelectedOrder("");
  }
  return (
    q(() => {
      (null == E ? void 0 : E.scrollToId) &&
        E.scrollToId(o.selectedOrder || o.selectedPosition);
    }),
    (t.$$set = (t) => {
      ("symbolsStore" in t && n(23, (S = t.symbolsStore)),
        "positionsStore" in t && m(n(1, (b = t.positionsStore))),
        "ordersStore" in t && d(n(2, (C = t.ordersStore))),
        "interactionController" in t && n(24, (k = t.interactionController)),
        "interactionStore" in t && a(n(3, (N = t.interactionStore))),
        "chartController" in t && n(25, (O = t.chartController)),
        "accountStore" in t && n(4, (B = t.accountStore)),
        "configStore" in t && n(26, (L = t.configStore)),
        "orderUtils" in t && n(5, (F = t.orderUtils)),
        "uiSettingsStore" in t && x(n(6, (T = t.uiSettingsStore))),
        "layoutStore" in t && p(n(7, (_ = t.layoutStore))),
        "element" in t && n(0, (D = t.element)));
    }),
    (t.$$.update = () => {
      var e, s, i, c;
      (6144 & t.$$.dirty[0] &&
        ((s = Q),
        null !== (e = R)
          ? (l.setSort((null == (i = H[e]) ? void 0 : i.name[0]) ?? "", s),
            r.setSort((null == (c = H[e]) ? void 0 : c.name[1]) ?? "", s))
          : (l.setSort("", s), r.setSort("", s))),
        805307904 & t.$$.dirty[0] &&
          (n(10, (I = l.getSortedPositions())),
          (function () {
            const t = [];
            (n(14, (Y.collateral = []), Y),
              n(14, (Y.noCollateral = []), Y),
              n(
                14,
                (Y = I.reduce((e, n) => {
                  const o = S.getBySymbol(n.value.symbol);
                  return (
                    W && t.push(null == o ? void 0 : o.isCollateral),
                    e[
                      (null == o ? void 0 : o.isCollateral)
                        ? "collateral"
                        : "noCollateral"
                    ].push(n),
                    e
                  );
                }, Y)),
              ),
              n(17, (W = !1)));
          })(),
          n(9, (j = r.getSortedOrders())),
          n(15, (U = M(I, j, 16)))),
        134226176 & t.$$.dirty[0] &&
          (((o.selectedOrder && o.selectedOrder !== V) ||
            (o.selectedPosition && o.selectedPosition !== V)) &&
            (null == E ? void 0 : E.scrollToId) &&
            E.scrollToId(o.selectedOrder || o.selectedPosition),
          n(27, (V = o.selectedPosition || o.selectedOrder))));
    }),
    [
      D,
      b,
      C,
      N,
      B,
      F,
      T,
      _,
      E,
      j,
      I,
      R,
      Q,
      o,
      Y,
      U,
      J,
      W,
      s,
      i,
      z,
      A,
      X,
      S,
      k,
      O,
      L,
      V,
      r,
      l,
      function (e) {
        y.call(this, t, e);
      },
      (t) => {
        (A(t.value), n(16, (J = { position: t.value.id })), z("menu", J));
      },
      (t) => {
        (A(t.value), n(16, (J = { position: t.value.id })), z("menu", J));
      },
      (t) => {
        (X(t.value), n(16, (J = { order: t.value.order })), z("menu", J));
      },
      () => {
        s.setLayout({ tradeCreate: null !== s.tradeCreate ? null : 0 });
      },
      function (t) {
        ((R = t), n(11, R));
      },
      function (t) {
        ((Q = t), n(12, Q));
      },
      (t) => A(t.value),
      function (e) {
        y.call(this, t, e);
      },
      function (e) {
        y.call(this, t, e);
      },
      function (e) {
        y.call(this, t, e);
      },
      (t) => {
        n(16, (J = { position: t.value.id }));
      },
      (t) => A(t.value),
      function (e) {
        y.call(this, t, e);
      },
      function (e) {
        y.call(this, t, e);
      },
      function (e) {
        y.call(this, t, e);
      },
      (t) => {
        n(16, (J = { position: t.value.id }));
      },
      (t) => X(t.value),
      function (e) {
        y.call(this, t, e);
      },
      function (e) {
        y.call(this, t, e);
      },
      function (e) {
        y.call(this, t, e);
      },
      (t) => {
        n(16, (J = { order: t.value.order }));
      },
      function (t) {
        P[t ? "unshift" : "push"](() => {
          ((E = t), n(8, E));
        });
      },
      function (t) {
        P[t ? "unshift" : "push"](() => {
          ((D = t), n(0, D));
        });
      },
      () => {
        (z("menu", J), n(16, (J = {})));
      },
    ]
  );
}
class $n extends t {
  constructor(t) {
    (super(),
      e(
        this,
        t,
        an,
        cn,
        n,
        {
          symbolsStore: 23,
          positionsStore: 1,
          ordersStore: 2,
          interactionController: 24,
          interactionStore: 3,
          chartController: 25,
          accountStore: 4,
          configStore: 26,
          orderUtils: 5,
          uiSettingsStore: 6,
          layoutStore: 7,
          element: 0,
        },
        null,
        [-1, -1, -1],
      ));
  }
}
function dn(t, e, n) {
  const o = t.slice();
  return (
    (o[45] = e[n].visible),
    (o[46] = e[n].key),
    (o[47] = e),
    (o[48] = n),
    o
  );
}
function un(t) {
  let e,
    n = window.tr(window.lang.trade.table.menu.newOrder) + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p: w,
    d(t) {
      t && c(e);
    },
  };
}
function mn(t) {
  let e, n, a, $;
  return (
    (e = new ot({
      props: { $$slots: { default: [pn] }, $$scope: { ctx: t } },
    })),
    e.$on("click", t[21]),
    (a = new ot({
      props: { $$slots: { default: [gn] }, $$scope: { ctx: t } },
    })),
    a.$on("click", t[25]),
    {
      c() {
        (i(e.$$.fragment), (n = p()), i(a.$$.fragment));
      },
      m(t, o) {
        (s(e, t, o), d(t, n, o), s(a, t, o), ($ = !0));
      },
      p(t, n) {
        const o = {};
        (262144 & n[1] && (o.$$scope = { dirty: n, ctx: t }), e.$set(o));
        const r = {};
        (262144 & n[1] && (r.$$scope = { dirty: n, ctx: t }), a.$set(r));
      },
      i(t) {
        $ || (l(e.$$.fragment, t), l(a.$$.fragment, t), ($ = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), r(a.$$.fragment, t), ($ = !1));
      },
      d(t) {
        (t && c(n), o(e, t), o(a, t));
      },
    }
  );
}
function fn(t) {
  let e, n, a, $;
  return (
    (e = new ot({
      props: { $$slots: { default: [yn] }, $$scope: { ctx: t } },
    })),
    e.$on("click", t[21]),
    (a = new ot({
      props: { $$slots: { default: [wn] }, $$scope: { ctx: t } },
    })),
    a.$on("click", t[25]),
    {
      c() {
        (i(e.$$.fragment), (n = p()), i(a.$$.fragment));
      },
      m(t, o) {
        (s(e, t, o), d(t, n, o), s(a, t, o), ($ = !0));
      },
      p(t, n) {
        const o = {};
        (262144 & n[1] && (o.$$scope = { dirty: n, ctx: t }), e.$set(o));
        const r = {};
        (262144 & n[1] && (r.$$scope = { dirty: n, ctx: t }), a.$set(r));
      },
      i(t) {
        $ || (l(e.$$.fragment, t), l(a.$$.fragment, t), ($ = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), r(a.$$.fragment, t), ($ = !1));
      },
      d(t) {
        (t && c(n), o(e, t), o(a, t));
      },
    }
  );
}
function pn(t) {
  let e,
    n = window.tr(window.lang.trade.table.menu.modifyOrder) + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p: w,
    d(t) {
      t && c(e);
    },
  };
}
function gn(t) {
  let e,
    n = window.tr(window.lang.trade.table.menu.chart) + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p: w,
    d(t) {
      t && c(e);
    },
  };
}
function yn(t) {
  let e,
    n = window.tr(window.lang.trade.table.menu.modifyPosition) + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p: w,
    d(t) {
      t && c(e);
    },
  };
}
function wn(t) {
  let e,
    n = window.tr(window.lang.trade.table.menu.chart) + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p: w,
    d(t) {
      t && c(e);
    },
  };
}
function vn(t) {
  let e,
    n = window.tr(window.lang.trade.table.menu.columns) + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p: w,
    d(t) {
      t && c(e);
    },
  };
}
function hn(t) {
  let e,
    n = Q(t[46]).title + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p: w,
    d(t) {
      t && c(e);
    },
  };
}
function xn(t) {
  let e,
    n,
    a =
      t[45] &&
      (function (t) {
        let e, n, c;
        function a(e) {
          t[37](e, t[45]);
        }
        let $ = { toggle: !0, $$slots: { default: [hn] }, $$scope: { ctx: t } };
        return (
          void 0 !== t[18].quotesColumnsVisible[t[45]] &&
            ($.checked = t[18].quotesColumnsVisible[t[45]]),
          (e = new ot({ props: $ })),
          P.push(() => _(e, "checked", a)),
          {
            c() {
              i(e.$$.fragment);
            },
            m(t, n) {
              (s(e, t, n), (c = !0));
            },
            p(o, r) {
              t = o;
              const l = {};
              (262144 & r[1] && (l.$$scope = { dirty: r, ctx: t }),
                !n &&
                  262144 & r[0] &&
                  ((n = !0),
                  (l.checked = t[18].quotesColumnsVisible[t[45]]),
                  U(() => (n = !1))),
                e.$set(l));
            },
            i(t) {
              c || (l(e.$$.fragment, t), (c = !0));
            },
            o(t) {
              (r(e.$$.fragment, t), (c = !1));
            },
            d(t) {
              o(e, t);
            },
          }
        );
      })(t);
  return {
    c() {
      (a && a.c(), (e = x()));
    },
    m(t, o) {
      (a && a.m(t, o), d(t, e, o), (n = !0));
    },
    p(t, e) {
      t[45] && a.p(t, e);
    },
    i(t) {
      n || (l(a), (n = !0));
    },
    o(t) {
      (r(a), (n = !1));
    },
    d(t) {
      (t && c(e), a && a.d(t));
    },
  };
}
function Sn(t) {
  let e,
    n = window.tr(window.lang.trade.table.menu.resetAll) + "";
  return {
    c() {
      e = f(n);
    },
    m(t, n) {
      d(t, e, n);
    },
    p: w,
    d(t) {
      t && c(e);
    },
  };
}
function bn(t) {
  let e,
    n,
    a,
    $ = O(Y),
    u = [];
  for (let o = 0; o < $.length; o += 1) u[o] = xn(dn(t, $, o));
  const m = (t) =>
    r(u[t], 1, 1, () => {
      u[t] = null;
    });
  return (
    (n = new ot({
      props: { line: "top", $$slots: { default: [Sn] }, $$scope: { ctx: t } },
    })),
    n.$on("click", t[28]),
    n.$on("click", function () {
      E(t[44]) && t[44].apply(this, arguments);
    }),
    {
      c() {
        for (let t = 0; t < u.length; t += 1) u[t].c();
        ((e = p()), i(n.$$.fragment));
      },
      m(t, o) {
        for (let e = 0; e < u.length; e += 1) u[e] && u[e].m(t, o);
        (d(t, e, o), s(n, t, o), (a = !0));
      },
      p(o, r) {
        if (((t = o), 262144 & r[0])) {
          let n;
          for ($ = O(Y), n = 0; n < $.length; n += 1) {
            const o = dn(t, $, n);
            u[n]
              ? (u[n].p(o, r), l(u[n], 1))
              : ((u[n] = xn(o)), u[n].c(), l(u[n], 1), u[n].m(e.parentNode, e));
          }
          for (S(), n = $.length; n < u.length; n += 1) m(n);
          b();
        }
        const s = {};
        (262144 & r[1] && (s.$$scope = { dirty: r, ctx: t }), n.$set(s));
      },
      i(t) {
        if (!a) {
          for (let t = 0; t < $.length; t += 1) l(u[t]);
          (l(n.$$.fragment, t), (a = !0));
        }
      },
      o(t) {
        u = u.filter(Boolean);
        for (let e = 0; e < u.length; e += 1) r(u[e]);
        (r(n.$$.fragment, t), (a = !1));
      },
      d(t) {
        (t && c(e), B(u, t), o(n, t));
      },
    }
  );
}
function Cn(t) {
  let e, n, a, $, u, m, f;
  ((e = new ot({ props: { $$slots: { default: [un] }, $$scope: { ctx: t } } })),
    e.$on("click", t[20]));
  const g = [fn, mn],
    y = [];
  function w(t, e) {
    return t[16] ? 0 : t[15] ? 1 : -1;
  }
  return (
    ~(a = w(t)) && ($ = y[a] = g[a](t)),
    (m = new ot({
      props: {
        line: "top",
        $$slots: { submenu: [bn], default: [vn] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (i(e.$$.fragment), (n = p()), $ && $.c(), (u = p()), i(m.$$.fragment));
      },
      m(t, o) {
        (s(e, t, o),
          d(t, n, o),
          ~a && y[a].m(t, o),
          d(t, u, o),
          s(m, t, o),
          (f = !0));
      },
      p(t, n) {
        const o = {};
        (262144 & n[1] && (o.$$scope = { dirty: n, ctx: t }), e.$set(o));
        let s = a;
        ((a = w(t)),
          a === s
            ? ~a && y[a].p(t, n)
            : ($ &&
                (S(),
                r(y[s], 1, 1, () => {
                  y[s] = null;
                }),
                b()),
              ~a
                ? (($ = y[a]),
                  $ ? $.p(t, n) : (($ = y[a] = g[a](t)), $.c()),
                  l($, 1),
                  $.m(u.parentNode, u))
                : ($ = null)));
        const i = {};
        ((262144 & n[0]) | (270336 & n[1]) &&
          (i.$$scope = { dirty: n, ctx: t }),
          m.$set(i));
      },
      i(t) {
        f || (l(e.$$.fragment, t), l($), l(m.$$.fragment, t), (f = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), r($), r(m.$$.fragment, t), (f = !1));
      },
      d(t) {
        (t && (c(n), c(u)), o(e, t), ~a && y[a].d(t), o(m, t));
      },
    }
  );
}
function kn(t) {
  let e, n;
  return (
    (e = new rt({ props: { brokerName: t[13], userSettingsStore: t[8] } })),
    e.$on("close", t[26]),
    {
      c() {
        i(e.$$.fragment);
      },
      m(t, o) {
        (s(e, t, o), (n = !0));
      },
      p(t, n) {
        const o = {};
        (8192 & n[0] && (o.brokerName = t[13]),
          256 & n[0] && (o.userSettingsStore = t[8]),
          e.$set(o));
      },
      i(t) {
        n || (l(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (r(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        o(e, t);
      },
    }
  );
}
function Nn(t) {
  let e, n, a, $, u, m, f, g;
  ((e = new nt({
    props: {
      target: t[14],
      $$slots: {
        default: [
          Cn,
          ({ onHide: t }) => ({ 44: t }),
          ({ onHide: t }) => [0, t ? 8192 : 0],
        ],
      },
      $$scope: { ctx: t },
    },
  })),
    e.$on("close", t[27]));
  let y = !1;
  function w(e) {
    t[38](e);
  }
  let v = {
    symbolsStore: t[0],
    ordersStore: t[1],
    positionsStore: t[2],
    interactionStore: t[4],
    interactionController: t[5],
    chartController: t[6],
    accountStore: t[7],
    configStore: t[9],
    uiSettingsStore: t[10],
    layoutStore: t[11],
    orderUtils: t[12],
  };
  (void 0 !== t[14] && (v.element = t[14]),
    ($ = new $n({ props: v })),
    P.push(() => _($, "element", w)),
    $.$on("dblclick", t[21]),
    $.$on("close", t[22]),
    $.$on("removeLevel", t[23]),
    $.$on("menu", t[29]));
  let h = t[17] && kn(t);
  return {
    c() {
      (i(e.$$.fragment),
        (n = p()),
        (a = p()),
        i($.$$.fragment),
        (m = p()),
        h && h.c(),
        (f = x()));
    },
    m(t, o) {
      (s(e, t, o),
        d(t, n, o),
        d(t, a, o),
        s($, t, o),
        d(t, m, o),
        h && h.m(t, o),
        d(t, f, o),
        (g = !0));
    },
    p(t, n) {
      const o = {};
      (16384 & n[0] && (o.target = t[14]),
        (360448 & n[0]) | (270336 & n[1]) && (o.$$scope = { dirty: n, ctx: t }),
        e.$set(o));
      const s = {};
      (1 & n[0] && (s.symbolsStore = t[0]),
        2 & n[0] && (s.ordersStore = t[1]),
        4 & n[0] && (s.positionsStore = t[2]),
        16 & n[0] && (s.interactionStore = t[4]),
        32 & n[0] && (s.interactionController = t[5]),
        64 & n[0] && (s.chartController = t[6]),
        128 & n[0] && (s.accountStore = t[7]),
        512 & n[0] && (s.configStore = t[9]),
        1024 & n[0] && (s.uiSettingsStore = t[10]),
        2048 & n[0] && (s.layoutStore = t[11]),
        4096 & n[0] && (s.orderUtils = t[12]),
        !u &&
          16384 & n[0] &&
          ((u = !0), (s.element = t[14]), U(() => (u = !1))),
        $.$set(s),
        t[17]
          ? h
            ? (h.p(t, n), 131072 & n[0] && l(h, 1))
            : ((h = kn(t)), h.c(), l(h, 1), h.m(f.parentNode, f))
          : h &&
            (S(),
            r(h, 1, 1, () => {
              h = null;
            }),
            b()));
    },
    i(t) {
      g || (l(e.$$.fragment, t), l(y), l($.$$.fragment, t), l(h), (g = !0));
    },
    o(t) {
      (r(e.$$.fragment, t), r(y), r($.$$.fragment, t), r(h), (g = !1));
    },
    d(t) {
      (t && (c(n), c(a), c(m), c(f)), o(e, t), o($, t), h && h.d(t));
    },
  };
}
function qn(t, e, n) {
  let o,
    r,
    l,
    s,
    i,
    c,
    a,
    $,
    d = w,
    u = () => (d(), (d = v(Y, (t) => n(18, (o = t)))), Y),
    m = w,
    f = () => (m(), (m = v(U, (t) => n(33, (r = t)))), U),
    p = w,
    g = () => (p(), (p = v(M, (t) => n(39, (l = t)))), M),
    y = w,
    h = () => (y(), (y = v(I, (t) => n(19, (s = t)))), I),
    x = w,
    S = () => (x(), (x = v(R, (t) => n(40, (i = t)))), R),
    b = w,
    C = () => (b(), (b = v(F, (t) => n(34, (c = t)))), F),
    k = w,
    N = () => (k(), (k = v(L, (t) => n(35, (a = t)))), L),
    q = w,
    P = () => (q(), (q = v(T, (t) => n(36, ($ = t)))), T);
  (t.$$.on_destroy.push(() => d()),
    t.$$.on_destroy.push(() => m()),
    t.$$.on_destroy.push(() => p()),
    t.$$.on_destroy.push(() => y()),
    t.$$.on_destroy.push(() => x()),
    t.$$.on_destroy.push(() => b()),
    t.$$.on_destroy.push(() => k()),
    t.$$.on_destroy.push(() => q()));
  let { symbolsStore: O } = e,
    { symbolsController: B } = e,
    { ordersStore: L } = e;
  N();
  let { positionsStore: F } = e;
  C();
  let { tradeStore: T } = e;
  P();
  let { tradeController: _ } = e,
    { interactionStore: U } = e;
  f();
  let { interactionController: E } = e,
    { chartController: V } = e,
    { accountStore: j } = e,
    { userSettingsStore: I } = e;
  h();
  let { configStore: M } = e;
  g();
  let { uiSettingsStore: Y } = e;
  u();
  let { layoutStore: R } = e;
  S();
  let Q,
    H,
    { orderUtils: J } = e,
    { brokerName: W } = e,
    z = null,
    A = null,
    X = !1;
  function Z() {
    (K(), z ? E.setSelectedForEdit(z.order) : A && E.setSelectedForEdit(A.id));
  }
  async function G() {
    if ((await D(), 0 === s.oneClick)) return (n(17, (X = !0)), void et());
    if (2 !== s.oneClick) {
      if (A || z) {
        if (A) {
          const t = O.getBySymbol(A.symbol);
          if (!t) return;
          if (
            t.isRequestExecution ||
            (t.isInstantExecution &&
              t.maxInstantVolume &&
              A.volumeValue > t.maxInstantVolume)
          )
            return void Z();
          n(32, (H = _.closePosition(A.id, !0)));
        } else z && _.deleteOrder(z.order);
        ((r.selectedOrder !== r.selectedForEdit &&
          r.selectedPosition !== r.selectedForEdit) ||
          r.setSelectedForEdit(""),
          et());
      }
    } else Z();
  }
  function K() {
    const t =
      (null == z ? void 0 : z.symbol) ?? (null == A ? void 0 : A.symbol) ?? "";
    t && l.symbol !== t && V.select(t);
  }
  function tt({ order: t, position: e }) {
    t ? r.setSelectedOrder(t) : e ? r.setSelectedPosition(e) : et();
  }
  function et() {
    (r.setSelectedOrder(""), r.setSelectedPosition(""));
  }
  return (
    (t.$$set = (t) => {
      ("symbolsStore" in t && n(0, (O = t.symbolsStore)),
        "symbolsController" in t && n(30, (B = t.symbolsController)),
        "ordersStore" in t && N(n(1, (L = t.ordersStore))),
        "positionsStore" in t && C(n(2, (F = t.positionsStore))),
        "tradeStore" in t && P(n(3, (T = t.tradeStore))),
        "tradeController" in t && n(31, (_ = t.tradeController)),
        "interactionStore" in t && f(n(4, (U = t.interactionStore))),
        "interactionController" in t && n(5, (E = t.interactionController)),
        "chartController" in t && n(6, (V = t.chartController)),
        "accountStore" in t && n(7, (j = t.accountStore)),
        "userSettingsStore" in t && h(n(8, (I = t.userSettingsStore))),
        "configStore" in t && g(n(9, (M = t.configStore))),
        "uiSettingsStore" in t && u(n(10, (Y = t.uiSettingsStore))),
        "layoutStore" in t && S(n(11, (R = t.layoutStore))),
        "orderUtils" in t && n(12, (J = t.orderUtils)),
        "brokerName" in t && n(13, (W = t.brokerName)));
    }),
    (t.$$.update = () => {
      var e, o, l;
      if (34 & t.$$.dirty[1]) {
        const t = null == (e = $.quickTradeRequest) ? void 0 : e.action.id,
          r =
            null == (l = null == (o = $.quickTradeRequest) ? void 0 : o.result)
              ? void 0
              : l.code;
        t === H &&
          10009 === r &&
          (n(32, (H = void 0)), $.resetQuickTradeRequest());
      }
      28 & t.$$.dirty[1] &&
        (r.selectedOrder
          ? (n(15, (z = a.getOrder(r.selectedOrder))), n(16, (A = null)))
          : r.selectedPosition &&
            (n(16, (A = c.getPosition(r.selectedPosition))),
            n(15, (z = null))));
    }),
    [
      O,
      L,
      F,
      T,
      U,
      E,
      V,
      j,
      I,
      M,
      Y,
      R,
      J,
      W,
      Q,
      z,
      A,
      X,
      o,
      s,
      function () {
        (K(), i.setLayout({ tradeCreate: 0 }));
      },
      Z,
      function (t) {
        (tt(t.detail), G());
      },
      async function (t) {
        const { order: e, position: o, level: r } = t.detail;
        return 0 === s.oneClick
          ? (n(17, (X = !0)), void et())
          : 2 === s.oneClick
            ? (tt({ order: e, position: o }), await D(), void Z())
            : void (e && "string" == typeof e
                ? (function (t, e) {
                    const n = _.ordersStore.getOrder(t);
                    n &&
                      O.getBySymbol(n.symbol) &&
                      B.allowedTradeBySymbol(n.symbol) &&
                      (2 === n.type ||
                      3 === n.type ||
                      4 === n.type ||
                      5 === n.type
                        ? _.modifyLimitOrder({
                            type: n.type,
                            id: n.order,
                            sl: "sl" === e ? 0 : n.sl,
                            tp: "tp" === e ? 0 : n.tp,
                            price: n.price,
                            expiration: n.expiration,
                            date: n.date,
                            comment: n.comment,
                          })
                        : (7 !== n.type && 6 !== n.type) ||
                          _.modifyStopLimitOrder({
                            type: n.type,
                            id: n.order,
                            sl: "sl" === e ? 0 : n.sl,
                            tp: "tp" === e ? 0 : n.tp,
                            price: n.price,
                            trigger: n.priceTrigger ?? 0,
                            expiration: n.expiration,
                            date: n.date,
                            comment: n.comment,
                          }));
                  })(e, r)
                : o &&
                  "string" == typeof o &&
                  (function (t, e) {
                    const n = _.positionsStore.getPosition(t);
                    n &&
                      O.getBySymbol(n.symbol) &&
                      B.allowedTradeBySymbol(n.symbol) &&
                      _.modifyPosition({
                        id: n.id,
                        sl: "sl" === e ? 0 : n.sl,
                        tp: "tp" === e ? 0 : n.tp,
                        comment: n.comment,
                      });
                  })(o, r));
      },
      G,
      K,
      function (t) {
        const { agreement: e } = t.detail;
        (n(17, (X = !1)), e || Z());
      },
      et,
      function () {
        o.resetQuotesColumsVisible();
      },
      function (t) {
        tt(t.detail);
      },
      B,
      _,
      H,
      r,
      c,
      a,
      $,
      function (e, n) {
        t.$$.not_equal(o.quotesColumnsVisible[n], e) &&
          ((o.quotesColumnsVisible[n] = e), Y.set(o));
      },
      function (t) {
        ((Q = t), n(14, Q));
      },
    ]
  );
}
class Pn extends t {
  constructor(t) {
    (super(),
      e(
        this,
        t,
        qn,
        Nn,
        n,
        {
          symbolsStore: 0,
          symbolsController: 30,
          ordersStore: 1,
          positionsStore: 2,
          tradeStore: 3,
          tradeController: 31,
          interactionStore: 4,
          interactionController: 5,
          chartController: 6,
          accountStore: 7,
          userSettingsStore: 8,
          configStore: 9,
          uiSettingsStore: 10,
          layoutStore: 11,
          orderUtils: 12,
          brokerName: 13,
        },
        null,
        [-1, -1],
      ));
  }
}
export { Pn as default };
