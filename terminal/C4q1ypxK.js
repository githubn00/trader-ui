var t,
  e,
  o,
  n,
  s = (t) => {
    throw TypeError(t);
  },
  r = (t, e, o) => e.has(t) || s("Cannot " + o),
  i = (t, e, o) => (
    r(t, e, "read from private field"),
    o ? o.call(t) : e.get(t)
  ),
  a = (t, e, o) =>
    e.has(t)
      ? s("Cannot add the same private member more than once")
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, o),
  c = (t, e, o, n) => (
    r(t, e, "write to private field"),
    n ? n.call(t, o) : e.set(t, o),
    o
  );
import {
  S as l,
  o as u,
  s as d,
  d as p,
  a as g,
  i as $,
  B as f,
  Q as w,
  _ as v,
  L as h,
  J as m,
  f as x,
  b as C,
  M as y,
  N as S,
  O as b,
  p as P,
} from "./CQSQNu0h.js";
import {
  S as O,
  i as _,
  s as E,
  d as k,
  t as j,
  g as I,
  h as U,
  j as T,
  b as D,
  D as N,
  n as q,
  L as M,
  a5 as z,
  M as R,
  r as L,
  u as A,
  v as B,
  w as V,
  x as H,
  y as W,
  z as F,
  a4 as J,
  N as G,
  a2 as Q,
  a3 as Y,
  k as K,
  c as X,
  e as Z,
  m as tt,
  o as et,
  f as ot,
  C as nt,
  l as st,
  I as rt,
  E as it,
} from "./CHj1SSsY.js";
import {
  L as at,
  F as ct,
  a as lt,
  G as ut,
  B as dt,
  C as pt,
} from "./C8gngcK2.js";
var gt = Object.defineProperty,
  $t = Object.getOwnPropertyDescriptor,
  ft = (t, e, o, n) => {
    for (var s, r = $t(e, o), i = t.length - 1; i >= 0; i--)
      (s = t[i]) && (r = s(e, o, r) || r);
    return (r && gt(e, o, r), r);
  };
const wt = u({
  login: d().map($).map(g),
  server: d().map($),
  password: d().map($),
  savePassword: p(),
  otp: d().map(g),
});
class vt extends l {
  constructor() {
    (super(...arguments),
      (this.createdUser = null),
      (this.connect = {
        values: {
          login: "",
          password: "",
          server: "",
          savePassword: !0,
          otp: "",
        },
        status: 0,
        error: null,
        errors: {},
        showOtp: !1,
        showOtpConnect: !1,
        focus: "",
      }),
      (this.existing = {}),
      (this.modules = null));
  }
  getExisting(t) {
    return (
      this.existing[String(t)] || (this.createExisting(t), this.refresh()),
      this.existing[String(t)] || {
        values: { otp: "", password: "", savePassword: !0 },
        status: 0,
        error: null,
        errors: {},
        showOtp: !1,
        showOtpConnect: !1,
        showChangePassword: !1,
        focus: "",
      }
    );
  }
  createExisting(t) {
    const e = String(t);
    this.existing[e] = this.existing[e] || {
      values: { otp: "", password: "", savePassword: !0 },
      status: 0,
      error: null,
      errors: {},
      showOtp: !1,
      showOtpConnect: !1,
      showChangePassword: !1,
      focus: "",
    };
  }
  setExisting(t, e) {
    const o = String(t);
    (this.createExisting(t),
      "number" == typeof e.status && (this.existing[o].status = e.status),
      void 0 !== e.error && (this.existing[o].error = e.error),
      void 0 !== e.errors && (this.existing[o].errors = e.errors),
      "boolean" == typeof e.showOtp &&
        (Object.values(this.existing).forEach((t) => {
          t.showOtp = !1;
        }),
        (this.existing[o].showOtp = e.showOtp)),
      "boolean" == typeof e.showOtpConnect &&
        (Object.values(this.existing).forEach((t) => {
          t.showOtpConnect = !1;
        }),
        (this.existing[o].showOtpConnect = e.showOtpConnect)),
      "boolean" == typeof e.showChangePassword &&
        (this.existing[o].showChangePassword = e.showChangePassword),
      "string" == typeof e.focus && (this.existing[o].focus = e.focus),
      "boolean" == typeof e.showOtpDisconnect &&
        (this.existing[o].showOtpDisconnect = e.showOtpDisconnect),
      e.values &&
        (e.values.otp &&
          Object.values(this.existing).forEach((t) => {
            t.values.otp = "";
          }),
        (this.existing[o].values = {
          ...this.existing[o].values,
          ...e.values,
        })));
  }
  clearUnsavedPasswords() {
    Object.values(this.existing).forEach((t) => {
      t.values.savePassword || (t.values.password = "");
    });
  }
  setConnect(t) {
    ("number" == typeof t.status && (this.connect.status = t.status),
      void 0 !== t.error && (this.connect.error = t.error),
      void 0 !== t.errors && (this.connect.errors = t.errors),
      "boolean" == typeof t.showOtp && (this.connect.showOtp = t.showOtp),
      "boolean" == typeof t.showOtpConnect &&
        (this.connect.showOtpConnect = t.showOtpConnect),
      "string" == typeof t.focus && (this.connect.focus = t.focus),
      t.values &&
        (this.connect.values = { ...this.connect.values, ...t.values }));
  }
  setModules(t) {
    this.modules = t;
  }
  setCreatedUser(t = null) {
    this.createdUser = t;
  }
}
function ht(t) {
  const e = t[26].default;
  t[27] = e;
}
function mt(t) {
  let e, o;
  return (
    (e = new ct({
      props: {
        $$slots: { footer: [jt], title: [Et], default: [_t] },
        $$scope: { ctx: t },
      },
    })),
    e.$on("submit", t[7]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, n) {
        (A(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (1048608 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (I(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function xt(t) {
  let e;
  const o = t[12].default,
    n = V(o, t, t[20], null);
  return {
    c() {
      n && n.c();
    },
    m(t, o) {
      (n && n.m(t, o), (e = !0));
    },
    p(t, s) {
      n &&
        n.p &&
        (!e || 1048576 & s) &&
        H(n, o, t, t[20], e ? F(o, t[20], s, null) : W(t[20]), null);
    },
    i(t) {
      e || (I(n, t), (e = !0));
    },
    o(t) {
      (j(n, t), (e = !1));
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function Ct(t) {
  let e, o;
  return (
    (e = new at({
      props: {
        module: Dt,
        $$slots: {
          default: [
            It,
            ({ module: t }) => ({ 26: t }),
            ({ module: t }) => (t ? 67108864 : 0),
          ],
        },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, n) {
        (A(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (1048616 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (I(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function yt(t) {
  let e,
    o = window.tr(window.lang.login.connect.savePassword) + "";
  return {
    c() {
      e = et(o);
    },
    m(t, o) {
      D(t, e, o);
    },
    p: q,
    d(t) {
      t && k(e);
    },
  };
}
function St(t) {
  let e, o, n, s, r, i, a, c;
  function l(e) {
    t[15](e);
  }
  function u(e) {
    t[16](e);
  }
  let d = {
    width: 41,
    name: "password",
    type: "password",
    placeholder: window.tr(window.lang.login.connect.passwordPlaceholder),
    invalid: t[5].connect.errors.password,
  };
  function p(e) {
    t[17](e);
  }
  (void 0 !== t[5].connect.values.password &&
    (d.value = t[5].connect.values.password),
    void 0 !== t[5].connect.focus && (d.focus = t[5].connect.focus),
    (o = new lt({ props: d })),
    G.push(() => Q(o, "value", l)),
    G.push(() => Q(o, "focus", u)),
    o.$on("input", Tt));
  let g = { $$slots: { default: [yt] }, $$scope: { ctx: t } };
  return (
    void 0 !== t[5].connect.values.savePassword &&
      (g.checked = t[5].connect.values.savePassword),
    (i = new pt({ props: g })),
    G.push(() => Q(i, "checked", p)),
    {
      c() {
        ((e = Z("div")),
          B(o.$$.fragment),
          (r = tt()),
          B(i.$$.fragment),
          ot(e, "class", "password svelte-dl5boa"));
      },
      m(t, n) {
        (D(t, e, n), A(o, e, null), X(e, r), A(i, e, null), (c = !0));
      },
      p(t, e) {
        const r = {};
        (32 & e && (r.invalid = t[5].connect.errors.password),
          !n &&
            32 & e &&
            ((n = !0),
            (r.value = t[5].connect.values.password),
            Y(() => (n = !1))),
          !s &&
            32 & e &&
            ((s = !0), (r.focus = t[5].connect.focus), Y(() => (s = !1))),
          o.$set(r));
        const c = {};
        (1048576 & e && (c.$$scope = { dirty: e, ctx: t }),
          !a &&
            32 & e &&
            ((a = !0),
            (c.checked = t[5].connect.values.savePassword),
            Y(() => (a = !1))),
          i.$set(c));
      },
      i(t) {
        c || (I(o.$$.fragment, t), I(i.$$.fragment, t), (c = !0));
      },
      o(t) {
        (j(o.$$.fragment, t), j(i.$$.fragment, t), (c = !1));
      },
      d(t) {
        (t && k(e), L(o), L(i));
      },
    }
  );
}
function bt(t) {
  let e, o, n, s, r, i;
  return {
    c() {
      ((e = Z("div")),
        (o = Z("span")),
        (o.textContent = `${window.tr(window.lang.login.connect.forgotPassword)}`),
        (n = tt()),
        (s = Z("button")),
        (s.textContent = `${window.tr(window.lang.login.connect.contactBroker)}`),
        ot(o, "class", "secondary svelte-dl5boa"),
        ot(s, "type", "button"),
        ot(s, "class", "svelte-dl5boa"),
        ot(e, "class", "recovery svelte-dl5boa"));
    },
    m(a, c) {
      (D(a, e, c),
        X(e, o),
        X(e, n),
        X(e, s),
        r || ((i = nt(s, "click", t[6])), (r = !0)));
    },
    p: q,
    d(t) {
      (t && k(e), (r = !1), i());
    },
  };
}
function Pt(t) {
  let e, o, n, s;
  return (
    (e = new ut({
      props: { $$slots: { default: [St] }, $$scope: { ctx: t } },
    })),
    (n = new ut({
      props: { $$slots: { default: [bt] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        (B(e.$$.fragment), (o = tt()), B(n.$$.fragment));
      },
      m(t, r) {
        (A(e, t, r), D(t, o, r), A(n, t, r), (s = !0));
      },
      p(t, o) {
        const s = {};
        (1048608 & o && (s.$$scope = { dirty: o, ctx: t }), e.$set(s));
        const r = {};
        (1048576 & o && (r.$$scope = { dirty: o, ctx: t }), n.$set(r));
      },
      i(t) {
        s || (I(e.$$.fragment, t), I(n.$$.fragment, t), (s = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), j(n.$$.fragment, t), (s = !1));
      },
      d(t) {
        (t && k(o), L(e, t), L(n, t));
      },
    }
  );
}
function Ot(t) {
  let e, o, n, s, r, i;
  function a(e) {
    t[18](e);
  }
  function c(e) {
    t[19](e);
  }
  let l = {
    name: "otp",
    placeholder: window.tr(window.lang.login.otp.placeholder),
    invalid: t[5].connect.errors.otp,
  };
  return (
    void 0 !== t[5].connect.values.otp && (l.value = t[5].connect.values.otp),
    void 0 !== t[5].connect.focus && (l.focus = t[5].connect.focus),
    (n = new lt({ props: l })),
    G.push(() => Q(n, "value", a)),
    G.push(() => Q(n, "focus", c)),
    {
      c() {
        ((e = Z("div")),
          (e.textContent = "OTP"),
          (o = tt()),
          B(n.$$.fragment),
          ot(e, "class", "field svelte-dl5boa"));
      },
      m(t, s) {
        (D(t, e, s), D(t, o, s), A(n, t, s), (i = !0));
      },
      p(t, e) {
        const o = {};
        (32 & e && (o.invalid = t[5].connect.errors.otp),
          !s &&
            32 & e &&
            ((s = !0), (o.value = t[5].connect.values.otp), Y(() => (s = !1))),
          !r &&
            32 & e &&
            ((r = !0), (o.focus = t[5].connect.focus), Y(() => (r = !1))),
          n.$set(o));
      },
      i(t) {
        i || (I(n.$$.fragment, t), (i = !0));
      },
      o(t) {
        (j(n.$$.fragment, t), (i = !1));
      },
      d(t) {
        (t && (k(e), k(o)), L(n, t));
      },
    }
  );
}
function _t(t) {
  let e,
    o,
    n,
    s,
    r,
    i,
    a,
    c,
    l,
    u,
    d,
    p,
    g,
    $,
    f,
    w,
    v,
    h = t[5].connect.values.server + "";
  function m(e) {
    t[13](e);
  }
  function x(e) {
    t[14](e);
  }
  let C = {
    name: "login",
    autocomplete: "username",
    width: 41,
    placeholder: window.tr(window.lang.login.connect.loginPlaceholder),
    invalid: t[5].connect.errors.login,
  };
  (void 0 !== t[5].connect.values.login &&
    (C.value = t[5].connect.values.login),
    void 0 !== t[5].connect.focus && (C.focus = t[5].connect.focus),
    (n = new lt({ props: C })),
    G.push(() => Q(n, "value", m)),
    G.push(() => Q(n, "focus", x)),
    n.$on("input", Tt),
    (l = new ut({
      props: { gap: 1, $$slots: { default: [Pt] }, $$scope: { ctx: t } },
    })));
  let y = t[5].connect.showOtp && Ot(t);
  return {
    c() {
      ((e = Z("div")),
        (e.textContent = `${window.tr(window.lang.login.form.login)}`),
        (o = tt()),
        B(n.$$.fragment),
        (i = tt()),
        (a = Z("div")),
        (a.textContent = `${window.tr(window.lang.login.form.password)}`),
        (c = tt()),
        B(l.$$.fragment),
        (u = tt()),
        (d = Z("div")),
        (d.textContent = `${window.tr(window.lang.login.form.server)}`),
        (p = tt()),
        (g = Z("div")),
        ($ = Z("input"),
        $.type = "text",
        $.value = window.__mt5_host || h,
        $.style.cssText = "background:transparent;border:none;border-bottom:1px solid currentColor;color:inherit;font:inherit;width:100%;outline:none;",
        $.addEventListener("input", function(){ t[5].connect.values.server = $.value; window.__mt5_host = window.__resolveHost ? window.__resolveHost($.value) : $.value; })),
        (f = tt()),
        y && y.c(),
        (w = N()),
        ot(e, "class", "field svelte-dl5boa"),
        ot(a, "class", "field svelte-dl5boa"),
        ot(d, "class", "field svelte-dl5boa"),
        ot(g, "class", "field svelte-dl5boa"));
    },
    m(t, s) {
      (D(t, e, s),
        D(t, o, s),
        A(n, t, s),
        D(t, i, s),
        D(t, a, s),
        D(t, c, s),
        A(l, t, s),
        D(t, u, s),
        D(t, d, s),
        D(t, p, s),
        D(t, g, s),
        X(g, $),
        D(t, f, s),
        y && y.m(t, s),
        D(t, w, s),
        (v = !0));
    },
    p(t, e) {
      const o = {};
      (32 & e && (o.invalid = t[5].connect.errors.login),
        !s &&
          32 & e &&
          ((s = !0), (o.value = t[5].connect.values.login), Y(() => (s = !1))),
        !r &&
          32 & e &&
          ((r = !0), (o.focus = t[5].connect.focus), Y(() => (r = !1))),
        n.$set(o));
      const i = {};
      (1048608 & e && (i.$$scope = { dirty: e, ctx: t }),
        l.$set(i),
        (!v || 32 & e) &&
          (h = t[5].connect.values.server + ""),
        t[5].connect.showOtp
          ? y
            ? (y.p(t, e), 32 & e && I(y, 1))
            : ((y = Ot(t)), y.c(), I(y, 1), y.m(w.parentNode, w))
          : y &&
            (U(),
            j(y, 1, 1, () => {
              y = null;
            }),
            T()));
    },
    i(t) {
      v || (I(n.$$.fragment, t), I(l.$$.fragment, t), I(y), (v = !0));
    },
    o(t) {
      (j(n.$$.fragment, t), j(l.$$.fragment, t), j(y), (v = !1));
    },
    d(t) {
      (t && (k(e), k(o), k(i), k(a), k(c), k(u), k(d), k(p), k(g), k(f), k(w)),
        L(n, t),
        L(l, t),
        y && y.d(t));
    },
  };
}
function Et(t) {
  let e,
    o = window.tr(window.lang.login.connect.title) + "";
  return {
    c() {
      e = et(o);
    },
    m(t, o) {
      D(t, e, o);
    },
    p: q,
    d(t) {
      t && k(e);
    },
  };
}
function kt(t) {
  let e,
    o = window.tr(window.lang.login.connect.btnConnect) + "";
  return {
    c() {
      e = et(o);
    },
    m(t, o) {
      D(t, e, o);
    },
    p: q,
    d(t) {
      t && k(e);
    },
  };
}
function jt(t) {
  let e, o, n;
  return (
    (o = new dt({
      props: {
        type: "submit",
        disabled: !1,
        active: !0,
        $$slots: { default: [kt] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        ((e = Z("div")),
          B(o.$$.fragment),
          ot(e, "class", "footer svelte-dl5boa"));
      },
      m(t, s) {
        (D(t, e, s), A(o, e, null), (n = !0));
      },
      p(t, e) {
        const n = {};
        (1048576 & e && (n.$$scope = { dirty: e, ctx: t }), o.$set(n));
      },
      i(t) {
        n || (I(o.$$.fragment, t), (n = !0));
      },
      o(t) {
        (j(o.$$.fragment, t), (n = !1));
      },
      d(t) {
        (t && k(e), L(o));
      },
    }
  );
}
function It(t) {
  let e, o;
  return (
    ht(t),
    (e = new t[27]({
      props: {
        login: Number(t[5].connect.values.login),
        server: t[5].connect.values.server,
        password: t[5].connect.values.password,
        authController: t[3],
      },
    })),
    e.$on("success", t[8]),
    e.$on("error", t[9]),
    e.$on("cancel", t[10]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, n) {
        (A(e, t, n), (o = !0));
      },
      p(t, o) {
        ht(t);
        const n = {};
        (32 & o && (n.login = Number(t[5].connect.values.login)),
          32 & o && (n.server = t[5].connect.values.server),
          32 & o && (n.password = t[5].connect.values.password),
          8 & o && (n.authController = t[3]),
          e.$set(n));
      },
      i(t) {
        o || (I(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function Ut(t) {
  let e, o, n, s;
  const r = [Ct, xt, mt],
    i = [];
  function a(t, e) {
    return t[5].connect.showOtpConnect ? 0 : t[0] ? 1 : 2;
  }
  return (
    (e = a(t)),
    (o = i[e] = r[e](t)),
    {
      c() {
        (o.c(), (n = N()));
      },
      m(t, o) {
        (i[e].m(t, o), D(t, n, o), (s = !0));
      },
      p(t, [s]) {
        let c = e;
        ((e = a(t)),
          e === c
            ? i[e].p(t, s)
            : (U(),
              j(i[c], 1, 1, () => {
                i[c] = null;
              }),
              T(),
              (o = i[e]),
              o ? o.p(t, s) : ((o = i[e] = r[e](t)), o.c()),
              I(o, 1),
              o.m(n.parentNode, n)));
      },
      i(t) {
        s || (I(o), (s = !0));
      },
      o(t) {
        (j(o), (s = !1));
      },
      d(t) {
        (t && k(n), i[e].d(t));
      },
    }
  );
}
function Tt() {}
(ft([f], vt.prototype, "createExisting"),
  ft([f], vt.prototype, "setExisting"),
  ft([f], vt.prototype, "setConnect"),
  ft([f], vt.prototype, "setModules"),
  ft([f], vt.prototype, "setCreatedUser"));
const Dt = () => v(() => import("./BwQoDeX9.js"), []);
function Nt(t, e, o) {
  let n,
    s,
    r,
    i = q,
    a = () => (i(), (i = J(x, (t) => o(5, (n = t)))), x),
    c = q,
    l = () => (c(), (c = J(v, (t) => o(21, (s = t)))), v),
    u = q,
    d = () => (u(), (u = J(f, (t) => o(22, (r = t)))), f);
  (t.$$.on_destroy.push(() => i()),
    t.$$.on_destroy.push(() => c()),
    t.$$.on_destroy.push(() => u()));
  let { $$slots: p = {}, $$scope: g } = e,
    { traderConfig: $ } = e,
    { usersStore: f } = e;
  d();
  let { layoutStore: v } = e;
  l();
  let { authController: m } = e,
    { authStore: x } = e;
  a();
  let { showBrokerInfo: C = !1 } = e;
  const y = M(),
    S = r.getCurrentUser(),
    b = w.get("login");
  async function P() {
    try {
      (wt(n.connect.values),
        (await m.connect()) &&
          (s.setLayout({ auth: h.None }), w.remove("login"), y("submit")));
    } catch (t) {
      z(x, (n.connect.errors = t), n);
      const e = Object.keys(n.connect.errors);
      e.length > 0 && z(x, ([n.connect.focus] = e), n);
    }
  }
  return (
    z(x, (n.connect.values.login = b || $.login || ""), n),
    z(
      x,
      (n.connect.values.server = b
        ? $.tradeServerReal
        : ((null == S ? void 0 : S.server) ?? $.tradeServerReal)),
      n,
    ),
    z(
      x,
      (n.connect.values.savePassword = S
        ? Boolean(null == S ? void 0 : S.password)
        : n.connect.values.savePassword),
      n,
    ),
    R(() => {
      (z(x, (n.connect.showOtp = !1), n),
        z(x, (n.connect.showOtpConnect = !1), n));
    }),
    (t.$$set = (t) => {
      ("traderConfig" in t && o(11, ($ = t.traderConfig)),
        "usersStore" in t && d(o(1, (f = t.usersStore))),
        "layoutStore" in t && l(o(2, (v = t.layoutStore))),
        "authController" in t && o(3, (m = t.authController)),
        "authStore" in t && a(o(4, (x = t.authStore))),
        "showBrokerInfo" in t && o(0, (C = t.showBrokerInfo)),
        "$$scope" in t && o(20, (g = t.$$scope)));
    }),
    [
      C,
      f,
      v,
      m,
      x,
      n,
      function () {
        o(0, (C = !0));
      },
      P,
      function () {
        (z(x, (n.connect.showOtpConnect = !1), n), P());
      },
      function (t) {
        z(x, (n.connect.error = t.detail), n);
      },
      function () {
        z(x, (n.connect.showOtpConnect = !1), n);
      },
      $,
      p,
      function (e) {
        t.$$.not_equal(n.connect.values.login, e) &&
          ((n.connect.values.login = e), x.set(n));
      },
      function (e) {
        t.$$.not_equal(n.connect.focus, e) && ((n.connect.focus = e), x.set(n));
      },
      function (e) {
        t.$$.not_equal(n.connect.values.password, e) &&
          ((n.connect.values.password = e), x.set(n));
      },
      function (e) {
        t.$$.not_equal(n.connect.focus, e) && ((n.connect.focus = e), x.set(n));
      },
      function (e) {
        t.$$.not_equal(n.connect.values.savePassword, e) &&
          ((n.connect.values.savePassword = e), x.set(n));
      },
      function (e) {
        t.$$.not_equal(n.connect.values.otp, e) &&
          ((n.connect.values.otp = e), x.set(n));
      },
      function (e) {
        t.$$.not_equal(n.connect.focus, e) && ((n.connect.focus = e), x.set(n));
      },
      g,
    ]
  );
}
class qt extends O {
  constructor(t) {
    (super(),
      _(this, t, Nt, Ut, E, {
        traderConfig: 11,
        usersStore: 1,
        layoutStore: 2,
        authController: 3,
        authStore: 4,
        showBrokerInfo: 0,
      }));
  }
}
const Mt = (t) => ({}),
  zt = (t) => ({});
function Rt(t) {
  var e;
  let o,
    n,
    s = (null == (e = t[5]) ? void 0 : e.isHedgedMargin) ? "Hedge" : "Netting";
  return {
    c() {
      ((o = et("- ")), (n = et(s)));
    },
    m(t, e) {
      (D(t, o, e), D(t, n, e));
    },
    p(t, e) {
      var o;
      32 & e &&
        s !==
          (s = (null == (o = t[5]) ? void 0 : o.isHedgedMargin)
            ? "Hedge"
            : "Netting") &&
        K(n, s);
    },
    d(t) {
      t && (k(o), k(n));
    },
  };
}
function Lt(t) {
  let e, o, n, s, r, i, a, c, l, u;
  function d(e) {
    t[13](e);
  }
  function p(e) {
    t[14](e);
  }
  let g = {
    name: "password",
    type: "password",
    invalid: t[2].password,
    placeholder: window.tr(window.lang.login.connect.passwordPlaceholder),
  };
  function $(e) {
    t[15](e);
  }
  (void 0 !== t[1] && (g.focus = t[1]),
    void 0 !== t[3] && (g.value = t[3]),
    (s = new lt({ props: g })),
    G.push(() => Q(s, "focus", d)),
    G.push(() => Q(s, "value", p)));
  let f = { $$slots: { default: [At] }, $$scope: { ctx: t } };
  return (
    void 0 !== t[4] && (f.checked = t[4]),
    (c = new pt({ props: f })),
    G.push(() => Q(c, "checked", $)),
    {
      c() {
        ((e = Z("div")),
          (e.textContent = `${window.tr(window.lang.login.form.password)}`),
          (o = tt()),
          (n = Z("div")),
          B(s.$$.fragment),
          (a = tt()),
          B(c.$$.fragment),
          ot(e, "class", "field-large svelte-14zisab"),
          ot(n, "class", "password field-large svelte-14zisab"));
      },
      m(t, r) {
        (D(t, e, r),
          D(t, o, r),
          D(t, n, r),
          A(s, n, null),
          X(n, a),
          A(c, n, null),
          (u = !0));
      },
      p(t, e) {
        const o = {};
        (4 & e && (o.invalid = t[2].password),
          !r && 2 & e && ((r = !0), (o.focus = t[1]), Y(() => (r = !1))),
          !i && 8 & e && ((i = !0), (o.value = t[3]), Y(() => (i = !1))),
          s.$set(o));
        const n = {};
        (524288 & e && (n.$$scope = { dirty: e, ctx: t }),
          !l && 16 & e && ((l = !0), (n.checked = t[4]), Y(() => (l = !1))),
          c.$set(n));
      },
      i(t) {
        u || (I(s.$$.fragment, t), I(c.$$.fragment, t), (u = !0));
      },
      o(t) {
        (j(s.$$.fragment, t), j(c.$$.fragment, t), (u = !1));
      },
      d(t) {
        (t && (k(e), k(o), k(n)), L(s), L(c));
      },
    }
  );
}
function At(t) {
  let e,
    o = window.tr(window.lang.login.connect.savePassword) + "";
  return {
    c() {
      e = et(o);
    },
    m(t, o) {
      D(t, e, o);
    },
    p: q,
    d(t) {
      t && k(e);
    },
  };
}
function Bt(t) {
  let e, o, n, s, r, i, a, c;
  function l(e) {
    t[16](e);
  }
  function u(e) {
    t[17](e);
  }
  function d(e) {
    t[18](e);
  }
  let p = {
    name: "otp",
    placeholder: window.tr(window.lang.login.otp.placeholder),
    invalid: t[2].otp,
  };
  return (
    void 0 !== t[0] && (p.value = t[0]),
    void 0 !== t[2] && (p.errors = t[2]),
    void 0 !== t[1] && (p.focus = t[1]),
    (s = new lt({ props: p })),
    G.push(() => Q(s, "value", l)),
    G.push(() => Q(s, "errors", u)),
    G.push(() => Q(s, "focus", d)),
    {
      c() {
        ((e = Z("div")),
          (e.textContent = "OTP"),
          (o = tt()),
          (n = Z("div")),
          B(s.$$.fragment),
          ot(e, "class", "field svelte-14zisab"));
      },
      m(t, r) {
        (D(t, e, r), D(t, o, r), D(t, n, r), A(s, n, null), (c = !0));
      },
      p(t, e) {
        const o = {};
        (4 & e && (o.invalid = t[2].otp),
          !r && 1 & e && ((r = !0), (o.value = t[0]), Y(() => (r = !1))),
          !i && 4 & e && ((i = !0), (o.errors = t[2]), Y(() => (i = !1))),
          !a && 2 & e && ((a = !0), (o.focus = t[1]), Y(() => (a = !1))),
          s.$set(o));
      },
      i(t) {
        c || (I(s.$$.fragment, t), (c = !0));
      },
      o(t) {
        (j(s.$$.fragment, t), (c = !1));
      },
      d(t) {
        (t && (k(e), k(o), k(n)), L(s));
      },
    }
  );
}
function Vt(t) {
  let e,
    o,
    n,
    s,
    r,
    i,
    a,
    c,
    l,
    u,
    d,
    p,
    g,
    $,
    f,
    w,
    v,
    h,
    m = t[5].name + "",
    x = t[5].server + "",
    C = t[5].login + "";
  const y = t[12].default,
    S = V(y, t, t[19], null),
    b =
      S ||
      (function (t) {
        let e,
          o,
          n = t[8] && !t[6] && Lt(t);
        return {
          c() {
            (n && n.c(), (e = N()));
          },
          m(t, s) {
            (n && n.m(t, s), D(t, e, s), (o = !0));
          },
          p(t, o) {
            t[8] && !t[6]
              ? n
                ? (n.p(t, o), 320 & o && I(n, 1))
                : ((n = Lt(t)), n.c(), I(n, 1), n.m(e.parentNode, e))
              : n &&
                (U(),
                j(n, 1, 1, () => {
                  n = null;
                }),
                T());
          },
          i(t) {
            o || (I(n), (o = !0));
          },
          o(t) {
            (j(n), (o = !1));
          },
          d(t) {
            (t && k(e), n && n.d(t));
          },
        };
      })(t);
  let P = t[6] && Bt(t);
  return {
    c() {
      ((e = Z("div")),
        (e.textContent = `${window.tr(window.lang.login.form.name.title)}`),
        (o = tt()),
        (n = Z("div")),
        (s = et(m)),
        (r = tt()),
        (i = Z("div")),
        (i.textContent = `${window.tr(window.lang.login.form.server)}`),
        (a = tt()),
        (c = Z("div")),
        (l = et(x)),
        (u = tt()),
        (d = Z("div")),
        (d.textContent = `${window.tr(window.lang.login.form.login)}`),
        (p = tt()),
        (g = Z("div")),
        ($ = et(C)),
        (f = tt()),
        b && b.c(),
        (w = tt()),
        P && P.c(),
        (v = N()),
        ot(e, "class", "field-slim svelte-14zisab"),
        ot(n, "class", "field-slim svelte-14zisab"),
        ot(i, "class", "field-slim svelte-14zisab"),
        ot(c, "class", "field-slim svelte-14zisab"),
        ot(d, "class", "field-slim svelte-14zisab"),
        ot(g, "class", "field-slim svelte-14zisab"));
    },
    m(t, m) {
      (D(t, e, m),
        D(t, o, m),
        D(t, n, m),
        X(n, s),
        D(t, r, m),
        D(t, i, m),
        D(t, a, m),
        D(t, c, m),
        X(c, l),
        D(t, u, m),
        D(t, d, m),
        D(t, p, m),
        D(t, g, m),
        X(g, $),
        D(t, f, m),
        b && b.m(t, m),
        D(t, w, m),
        P && P.m(t, m),
        D(t, v, m),
        (h = !0));
    },
    p(t, e) {
      ((!h || 32 & e) && m !== (m = t[5].name + "") && K(s, m),
        (!h || 32 & e) && x !== (x = t[5].server + "") && K(l, x),
        (!h || 32 & e) && C !== (C = t[5].login + "") && K($, C),
        S
          ? S.p &&
            (!h || 524288 & e) &&
            H(S, y, t, t[19], h ? F(y, t[19], e, null) : W(t[19]), null)
          : b && b.p && (!h || 350 & e) && b.p(t, h ? e : -1),
        t[6]
          ? P
            ? (P.p(t, e), 64 & e && I(P, 1))
            : ((P = Bt(t)), P.c(), I(P, 1), P.m(v.parentNode, v))
          : P &&
            (U(),
            j(P, 1, 1, () => {
              P = null;
            }),
            T()));
    },
    i(t) {
      h || (I(b, t), I(P), (h = !0));
    },
    o(t) {
      (j(b, t), j(P), (h = !1));
    },
    d(t) {
      (t &&
        (k(e),
        k(o),
        k(n),
        k(r),
        k(i),
        k(a),
        k(c),
        k(u),
        k(d),
        k(p),
        k(g),
        k(f),
        k(w),
        k(v)),
        b && b.d(t),
        P && P.d(t));
    },
  };
}
function Ht(t) {
  let e,
    o = window.tr(window.lang.login.connect.btnConnect) + "";
  return {
    c() {
      e = et(o);
    },
    m(t, o) {
      D(t, e, o);
    },
    p: q,
    d(t) {
      t && k(e);
    },
  };
}
function Wt(t) {
  let e, o;
  return (
    (e = new dt({
      props: { red: !0, $$slots: { default: [Jt] }, $$scope: { ctx: t } },
    })),
    e.$on("click", t[11]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, n) {
        (A(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (524288 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (I(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function Ft(t) {
  let e, o;
  return (
    (e = new dt({
      props: { red: !0, $$slots: { default: [Gt] }, $$scope: { ctx: t } },
    })),
    e.$on("click", t[10]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, n) {
        (A(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (524288 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (I(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function Jt(t) {
  let e,
    o = window.tr(window.lang.login.form.btn.remove) + "";
  return {
    c() {
      e = et(o);
    },
    m(t, o) {
      D(t, e, o);
    },
    p: q,
    d(t) {
      t && k(e);
    },
  };
}
function Gt(t) {
  let e,
    o = window.tr(window.lang.login.form.btn.signOut) + "";
  return {
    c() {
      e = et(o);
    },
    m(t, o) {
      D(t, e, o);
    },
    p: q,
    d(t) {
      t && k(e);
    },
  };
}
function Qt(t) {
  let e, o, n, s, r, i, a;
  const c = t[12].footer,
    l = V(c, t, t[19], zt);
  n = new dt({
    props: {
      active: !0,
      type: "submit",
      disabled: t[7] && !t[6],
      $$slots: { default: [Ht] },
      $$scope: { ctx: t },
    },
  });
  const u = [Ft, Wt],
    d = [];
  function p(t, e) {
    return t[7] ? 0 : 1;
  }
  return (
    (r = p(t)),
    (i = d[r] = u[r](t)),
    {
      c() {
        ((e = Z("div")),
          l && l.c(),
          (o = tt()),
          B(n.$$.fragment),
          (s = tt()),
          i.c(),
          ot(e, "class", "footer svelte-14zisab"),
          ot(e, "slot", "footer"));
      },
      m(t, i) {
        (D(t, e, i),
          l && l.m(e, null),
          X(e, o),
          A(n, e, null),
          X(e, s),
          d[r].m(e, null),
          (a = !0));
      },
      p(t, o) {
        l &&
          l.p &&
          (!a || 524288 & o) &&
          H(l, c, t, t[19], a ? F(c, t[19], o, Mt) : W(t[19]), zt);
        const s = {};
        (192 & o && (s.disabled = t[7] && !t[6]),
          524288 & o && (s.$$scope = { dirty: o, ctx: t }),
          n.$set(s));
        let g = r;
        ((r = p(t)),
          r === g
            ? d[r].p(t, o)
            : (U(),
              j(d[g], 1, 1, () => {
                d[g] = null;
              }),
              T(),
              (i = d[r]),
              i ? i.p(t, o) : ((i = d[r] = u[r](t)), i.c()),
              I(i, 1),
              i.m(e, null)));
      },
      i(t) {
        a || (I(l, t), I(n.$$.fragment, t), I(i), (a = !0));
      },
      o(t) {
        (j(l, t), j(n.$$.fragment, t), j(i), (a = !1));
      },
      d(t) {
        (t && k(e), l && l.d(t), L(n), d[r].d());
      },
    }
  );
}
function Yt(t) {
  var e, o;
  let n,
    s,
    r,
    i,
    a,
    c,
    l,
    u,
    d,
    p,
    g,
    $,
    f,
    w,
    v,
    h,
    x,
    C,
    y,
    S,
    b,
    P = (t[5].name ?? "") + "",
    O = m((null == (e = t[5]) ? void 0 : e.balance) ?? 0, 2) + "",
    _ = (t[5].currency ?? "") + "",
    E = t[5].login + "",
    U = t[5].server + "",
    T = void 0 !== (null == (o = t[5]) ? void 0 : o.isHedgedMargin) && Rt(t);
  return (
    (S = new ct({
      props: { $$slots: { footer: [Qt], default: [Vt] }, $$scope: { ctx: t } },
    })),
    S.$on("submit", t[9]),
    {
      c() {
        ((n = Z("div")),
          (s = Z("h2")),
          (r = Z("div")),
          (i = et(P)),
          (c = tt()),
          (l = Z("div")),
          (u = et(O)),
          (d = tt()),
          (p = et(_)),
          (g = tt()),
          ($ = Z("div")),
          (f = Z("div")),
          (w = et(E)),
          (v = et(" - ")),
          (h = et(U)),
          (x = tt()),
          T && T.c(),
          (C = tt()),
          (y = Z("div")),
          B(S.$$.fragment),
          ot(r, "class", "name svelte-14zisab"),
          ot(r, "title", (a = t[5].name ?? "")),
          ot(s, "class", "title svelte-14zisab"),
          ot($, "class", "info svelte-14zisab"),
          ot(n, "class", "header"),
          ot(y, "class", "layout svelte-14zisab"),
          st(y, "mobile", !1));
      },
      m(t, e) {
        (D(t, n, e),
          X(n, s),
          X(s, r),
          X(r, i),
          X(s, c),
          X(s, l),
          X(l, u),
          X(l, d),
          X(l, p),
          X(n, g),
          X(n, $),
          X($, f),
          X(f, w),
          X(f, v),
          X(f, h),
          X(f, x),
          T && T.m(f, null),
          D(t, C, e),
          D(t, y, e),
          A(S, y, null),
          (b = !0));
      },
      p(t, [e]) {
        var o, n;
        ((!b || 32 & e) && P !== (P = (t[5].name ?? "") + "") && K(i, P),
          (!b || (32 & e && a !== (a = t[5].name ?? ""))) && ot(r, "title", a),
          (!b || 32 & e) &&
            O !==
              (O = m((null == (o = t[5]) ? void 0 : o.balance) ?? 0, 2) + "") &&
            K(u, O),
          (!b || 32 & e) && _ !== (_ = (t[5].currency ?? "") + "") && K(p, _),
          (!b || 32 & e) && E !== (E = t[5].login + "") && K(w, E),
          (!b || 32 & e) && U !== (U = t[5].server + "") && K(h, U),
          void 0 !== (null == (n = t[5]) ? void 0 : n.isHedgedMargin)
            ? T
              ? T.p(t, e)
              : ((T = Rt(t)), T.c(), T.m(f, null))
            : T && (T.d(1), (T = null)));
        const s = {};
        (524799 & e && (s.$$scope = { dirty: e, ctx: t }), S.$set(s));
      },
      i(t) {
        b || (I(S.$$.fragment, t), (b = !0));
      },
      o(t) {
        (j(S.$$.fragment, t), (b = !1));
      },
      d(t) {
        (t && (k(n), k(C), k(y)), T && T.d(), L(S));
      },
    }
  );
}
function Kt(t, e, o) {
  let { $$slots: n = {}, $$scope: s } = e,
    { user: r } = e,
    { otp: i = "" } = e,
    { showOtp: a = !1 } = e,
    { focus: c = "" } = e,
    { errors: l } = e,
    { current: u } = e,
    { password: d } = e,
    { savePassword: p } = e,
    g = !1;
  const $ = M();
  return (
    rt(() => {
      (p && o(3, (d = r.password)), p || o(1, (c = "password")));
    }),
    (t.$$set = (t) => {
      ("user" in t && o(5, (r = t.user)),
        "otp" in t && o(0, (i = t.otp)),
        "showOtp" in t && o(6, (a = t.showOtp)),
        "focus" in t && o(1, (c = t.focus)),
        "errors" in t && o(2, (l = t.errors)),
        "current" in t && o(7, (u = t.current)),
        "password" in t && o(3, (d = t.password)),
        "savePassword" in t && o(4, (p = t.savePassword)),
        "$$scope" in t && o(19, (s = t.$$scope)));
    }),
    (t.$$.update = () => {
      32 & t.$$.dirty && o(8, (g = !r.savePassword));
    }),
    [
      i,
      c,
      l,
      d,
      p,
      r,
      a,
      u,
      g,
      function () {
        $("login");
      },
      function () {
        $("logout");
      },
      function () {
        $("remove");
      },
      n,
      function (t) {
        ((c = t), o(1, c));
      },
      function (t) {
        ((d = t), o(3, d));
      },
      function (t) {
        ((p = t), o(4, p));
      },
      function (t) {
        ((i = t), o(0, i));
      },
      function (t) {
        ((l = t), o(2, l));
      },
      function (t) {
        ((c = t), o(1, c));
      },
      s,
    ]
  );
}
class Xt extends O {
  constructor(t) {
    (super(),
      _(this, t, Kt, Yt, E, {
        user: 5,
        otp: 0,
        showOtp: 6,
        focus: 1,
        errors: 2,
        current: 7,
        password: 3,
        savePassword: 4,
      }));
  }
}
function Zt(t) {
  let e;
  return {
    c() {
      ((e = Z("div")),
        (e.textContent = "Not Saved"),
        ot(e, "class", "status off svelte-12cee4v"));
    },
    m(t, o) {
      D(t, e, o);
    },
    d(t) {
      t && k(e);
    },
  };
}
function te(t) {
  let e;
  return {
    c() {
      ((e = Z("div")),
        (e.textContent = "Saved"),
        ot(e, "class", "status on svelte-12cee4v"));
    },
    m(t, o) {
      D(t, e, o);
    },
    d(t) {
      t && k(e);
    },
  };
}
function ee(t) {
  let e, o, n;
  return {
    c() {
      ((e = Z("button")),
        (e.textContent = "Change password"),
        ot(e, "class", "otp svelte-12cee4v"),
        ot(e, "type", "button"));
    },
    m(s, r) {
      (D(s, e, r), o || ((n = nt(e, "click", t[12])), (o = !0)));
    },
    p: q,
    d(t) {
      (t && k(e), (o = !1), n());
    },
  };
}
function oe(t) {
  let e, o, n;
  function s(t, e) {
    return t[9] ? se : ne;
  }
  let r = s(t),
    i = r(t);
  return {
    c() {
      ((e = Z("div")),
        (e.textContent = "2FA/TOTP"),
        (o = tt()),
        (n = Z("div")),
        i.c(),
        ot(n, "class", "settings svelte-12cee4v"));
    },
    m(t, s) {
      (D(t, e, s), D(t, o, s), D(t, n, s), i.m(n, null));
    },
    p(t, e) {
      r === (r = s(t)) && i
        ? i.p(t, e)
        : (i.d(1), (i = r(t)), i && (i.c(), i.m(n, null)));
    },
    d(t) {
      (t && (k(e), k(o), k(n)), i.d());
    },
  };
}
function ne(t) {
  let e, o, n, s, r;
  return {
    c() {
      ((e = Z("div")),
        (e.textContent = "Disabled"),
        (o = tt()),
        (n = Z("button")),
        (n.textContent = "Enable 2FA/TOTP"),
        ot(e, "class", "status off svelte-12cee4v"),
        ot(n, "class", "otp svelte-12cee4v"),
        ot(n, "type", "button"));
    },
    m(i, a) {
      (D(i, e, a),
        D(i, o, a),
        D(i, n, a),
        s || ((r = nt(n, "click", t[14])), (s = !0)));
    },
    p: q,
    d(t) {
      (t && (k(e), k(o), k(n)), (s = !1), r());
    },
  };
}
function se(t) {
  let e, o, n, s, r;
  return {
    c() {
      ((e = Z("div")),
        (e.textContent = "Enabled"),
        (o = tt()),
        (n = Z("button")),
        (n.textContent = "Disable 2FA/TOTP"),
        ot(e, "class", "status on svelte-12cee4v"),
        ot(n, "class", "otp svelte-12cee4v"),
        ot(n, "type", "button"));
    },
    m(i, a) {
      (D(i, e, a),
        D(i, o, a),
        D(i, n, a),
        s || ((r = nt(n, "click", t[13])), (s = !0)));
    },
    p: q,
    d(t) {
      (t && (k(e), k(o), k(n)), (s = !1), r());
    },
  };
}
function re(t) {
  let e,
    o,
    n,
    s,
    r,
    i,
    a = !t[8].isInvestor && !t[8].isReadOnly();
  function c(t, e) {
    return t[5].savePassword ? te : Zt;
  }
  let l = c(t),
    u = l(t),
    d = a && ee(t),
    p = t[7] && t[5].login === t[8].login && 0 !== t[8].otpStatus && oe(t);
  return {
    c() {
      ((e = Z("div")),
        (e.textContent = "Password"),
        (o = tt()),
        (n = Z("div")),
        u.c(),
        (s = tt()),
        d && d.c(),
        (r = tt()),
        p && p.c(),
        (i = N()),
        ot(n, "class", "settings svelte-12cee4v"));
    },
    m(t, a) {
      (D(t, e, a),
        D(t, o, a),
        D(t, n, a),
        u.m(n, null),
        X(n, s),
        d && d.m(n, null),
        D(t, r, a),
        p && p.m(t, a),
        D(t, i, a));
    },
    p(t, e) {
      (l !== (l = c(t)) && (u.d(1), (u = l(t)), u && (u.c(), u.m(n, s))),
        256 & e && (a = !t[8].isInvestor && !t[8].isReadOnly()),
        a
          ? d
            ? d.p(t, e)
            : ((d = ee(t)), d.c(), d.m(n, null))
          : d && (d.d(1), (d = null)),
        t[7] && t[5].login === t[8].login && 0 !== t[8].otpStatus
          ? p
            ? p.p(t, e)
            : ((p = oe(t)), p.c(), p.m(i.parentNode, i))
          : p && (p.d(1), (p = null)));
    },
    d(t) {
      (t && (k(e), k(o), k(n), k(r), k(i)), u.d(), d && d.d(), p && p.d(t));
    },
  };
}
function ie(t) {
  let e;
  return {
    c() {
      e = et("Save password");
    },
    m(t, o) {
      D(t, e, o);
    },
    d(t) {
      t && k(e);
    },
  };
}
function ae(t) {
  let e, o, n;
  return (
    (o = new pt({
      props: {
        checked: t[5].savePassword,
        $$slots: { default: [ie] },
        $$scope: { ctx: t },
      },
    })),
    o.$on("change", t[11]),
    {
      c() {
        ((e = Z("div")),
          B(o.$$.fragment),
          ot(e, "slot", "footer"),
          ot(e, "class", "save-password svelte-12cee4v"));
      },
      m(t, s) {
        (D(t, e, s), A(o, e, null), (n = !0));
      },
      p(t, e) {
        const n = {};
        (32 & e && (n.checked = t[5].savePassword),
          8388608 & e && (n.$$scope = { dirty: e, ctx: t }),
          o.$set(n));
      },
      i(t) {
        n || (I(o.$$.fragment, t), (n = !0));
      },
      o(t) {
        (j(o.$$.fragment, t), (n = !1));
      },
      d(t) {
        (t && k(e), L(o));
      },
    }
  );
}
function ce(t) {
  let e, o, n, s, r, i;
  function a(e) {
    t[15](e);
  }
  function c(e) {
    t[16](e);
  }
  function l(e) {
    t[17](e);
  }
  function u(e) {
    t[18](e);
  }
  let d = {
    user: t[5],
    savePassword: !0,
    showOtp: t[6],
    current: t[7],
    $$slots: { footer: [ae], default: [re] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[3] && (d.password = t[3]),
    void 0 !== t[0] && (d.otp = t[0]),
    void 0 !== t[1] && (d.focus = t[1]),
    void 0 !== t[2] && (d.errors = t[2]),
    (e = new Xt({ props: d })),
    G.push(() => Q(e, "password", a)),
    G.push(() => Q(e, "otp", c)),
    G.push(() => Q(e, "focus", l)),
    G.push(() => Q(e, "errors", u)),
    e.$on("login", t[19]),
    e.$on("logout", t[20]),
    e.$on("remove", t[21]),
    e.$on("removePassword", t[22]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, o) {
        (A(e, t, o), (i = !0));
      },
      p(t, [i]) {
        const a = {};
        (32 & i && (a.user = t[5]),
          64 & i && (a.showOtp = t[6]),
          128 & i && (a.current = t[7]),
          8389536 & i && (a.$$scope = { dirty: i, ctx: t }),
          !o && 8 & i && ((o = !0), (a.password = t[3]), Y(() => (o = !1))),
          !n && 1 & i && ((n = !0), (a.otp = t[0]), Y(() => (n = !1))),
          !s && 2 & i && ((s = !0), (a.focus = t[1]), Y(() => (s = !1))),
          !r && 4 & i && ((r = !0), (a.errors = t[2]), Y(() => (r = !1))),
          e.$set(a));
      },
      i(t) {
        i || (I(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (i = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function le(t, e, o) {
  let n,
    s = q,
    r = () => (s(), (s = J(i, (t) => o(8, (n = t)))), i);
  t.$$.on_destroy.push(() => s());
  let { accountStore: i } = e;
  r();
  const a = M();
  let { user: c } = e,
    { otp: l = "" } = e,
    { showOtp: u = !1 } = e,
    { focus: d = "" } = e,
    { errors: p } = e,
    { current: g } = e,
    { password: $ } = e,
    f = !1;
  return (
    (t.$$set = (t) => {
      ("accountStore" in t && r(o(4, (i = t.accountStore))),
        "user" in t && o(5, (c = t.user)),
        "otp" in t && o(0, (l = t.otp)),
        "showOtp" in t && o(6, (u = t.showOtp)),
        "focus" in t && o(1, (d = t.focus)),
        "errors" in t && o(2, (p = t.errors)),
        "current" in t && o(7, (g = t.current)),
        "password" in t && o(3, ($ = t.password)));
    }),
    (t.$$.update = () => {
      256 & t.$$.dirty && o(9, (f = 2 === n.otpStatus));
    }),
    [
      l,
      d,
      p,
      $,
      i,
      c,
      u,
      g,
      n,
      f,
      a,
      function (t) {
        t.detail.checked ? a("savePassword") : a("removePassword");
      },
      () => a("changePassword"),
      () => a("otpDisable"),
      () => a("otpEnable"),
      function (t) {
        (($ = t), o(3, $));
      },
      function (t) {
        ((l = t), o(0, l));
      },
      function (t) {
        ((d = t), o(1, d));
      },
      function (t) {
        ((p = t), o(2, p));
      },
      function (e) {
        it.call(this, t, e);
      },
      function (e) {
        it.call(this, t, e);
      },
      function (e) {
        it.call(this, t, e);
      },
      function (e) {
        it.call(this, t, e);
      },
    ]
  );
}
class ue extends O {
  constructor(t) {
    (super(),
      _(this, t, le, ce, E, {
        accountStore: 4,
        user: 5,
        otp: 0,
        showOtp: 6,
        focus: 1,
        errors: 2,
        current: 7,
        password: 3,
      }));
  }
}
function de(t) {
  let e,
    o,
    n,
    s,
    r = t[0].group + "";
  return {
    c() {
      ((e = Z("div")),
        (e.textContent = `${window.tr(window.lang.login.form.accountType)}`),
        (o = tt()),
        (n = Z("div")),
        (s = et(r)),
        ot(e, "class", "label svelte-lcy7e"));
    },
    m(t, r) {
      (D(t, e, r), D(t, o, r), D(t, n, r), X(n, s));
    },
    p(t, e) {
      1 & e && r !== (r = t[0].group + "") && K(s, r);
    },
    d(t) {
      t && (k(e), k(o), k(n));
    },
  };
}
function pe(t) {
  var e;
  let o,
    n,
    s,
    r = m((null == (e = t[0]) ? void 0 : e.balance) ?? 0, 0) + "",
    i = t[0].currency + "";
  return {
    c() {
      ((o = et(r)), (n = tt()), (s = et(i)));
    },
    m(t, e) {
      (D(t, o, e), D(t, n, e), D(t, s, e));
    },
    p(t, e) {
      var n;
      (1 & e &&
        r !== (r = m((null == (n = t[0]) ? void 0 : n.balance) ?? 0, 0) + "") &&
        K(o, r),
        1 & e && i !== (i = t[0].currency + "") && K(s, i));
    },
    d(t) {
      t && (k(o), k(n), k(s));
    },
  };
}
function ge(t) {
  let e,
    o = t[0].password + "";
  return {
    c() {
      e = et(o);
    },
    m(t, o) {
      D(t, e, o);
    },
    p(t, n) {
      1 & n && o !== (o = t[0].password + "") && K(e, o);
    },
    d(t) {
      t && k(e);
    },
  };
}
function $e(t) {
  let e;
  return {
    c() {
      e = et("********");
    },
    m(t, o) {
      D(t, e, o);
    },
    p: q,
    d(t) {
      t && k(e);
    },
  };
}
function fe(t) {
  let e,
    o,
    n,
    s,
    r,
    i,
    a,
    c,
    l,
    u,
    d,
    p,
    g,
    $,
    f,
    w,
    v,
    h,
    m,
    x,
    C,
    y,
    S,
    b,
    P,
    O,
    _,
    E,
    U,
    T,
    N,
    q,
    M,
    z = t[0].name + "",
    R = t[0].server + "",
    V = t[0].login + "",
    H = (t[1] ?? "") + "",
    W = window.tr(window.lang.login.form.passwordReadOnly) + "",
    F = void 0 !== t[0].group && t[0].currency && de(t);
  function J(t, e) {
    return t[0].password.length > 32 ? $e : ge;
  }
  $ = new ut({
    props: { marginBottom: 3, $$slots: { default: [pe] }, $$scope: { ctx: t } },
  });
  let G = J(t),
    Q = G(t);
  return {
    c() {
      ((e = Z("div")),
        (e.textContent = `${window.tr(window.lang.login.form.name.title)}`),
        (o = tt()),
        (n = Z("div")),
        (s = et(z)),
        (r = tt()),
        (i = Z("div")),
        (i.textContent = `${window.tr(window.lang.login.form.server)}`),
        (a = tt()),
        (c = Z("div")),
        (l = et(R)),
        (u = tt()),
        F && F.c(),
        (d = tt()),
        (p = Z("div")),
        (p.textContent = `${window.tr(window.lang.login.form.deposit)}`),
        (g = tt()),
        B($.$$.fragment),
        (f = tt()),
        (w = Z("div")),
        (w.textContent = `${window.tr(window.lang.login.form.login)}`),
        (v = tt()),
        (h = Z("div")),
        (m = et(V)),
        (x = tt()),
        (C = Z("div")),
        (C.textContent = `${window.tr(window.lang.login.form.password)}`),
        (y = tt()),
        (S = Z("div")),
        Q.c(),
        (b = tt()),
        (P = Z("div")),
        (P.textContent = `${window.tr(window.lang.login.form.investor)}`),
        (O = tt()),
        (_ = Z("div")),
        (E = Z("span")),
        (U = et(H)),
        (T = et("\r\n         (")),
        (N = et(W)),
        (q = et(")")),
        ot(e, "class", "label svelte-lcy7e"),
        ot(i, "class", "label svelte-lcy7e"),
        ot(p, "class", "label svelte-lcy7e"),
        ot(w, "class", "label svelte-lcy7e"),
        ot(h, "class", "private svelte-lcy7e"),
        ot(C, "class", "label svelte-lcy7e"),
        ot(S, "class", "private svelte-lcy7e"),
        ot(P, "class", "label svelte-lcy7e"),
        ot(E, "class", "private svelte-lcy7e"));
    },
    m(t, k) {
      (D(t, e, k),
        D(t, o, k),
        D(t, n, k),
        X(n, s),
        D(t, r, k),
        D(t, i, k),
        D(t, a, k),
        D(t, c, k),
        X(c, l),
        D(t, u, k),
        F && F.m(t, k),
        D(t, d, k),
        D(t, p, k),
        D(t, g, k),
        A($, t, k),
        D(t, f, k),
        D(t, w, k),
        D(t, v, k),
        D(t, h, k),
        X(h, m),
        D(t, x, k),
        D(t, C, k),
        D(t, y, k),
        D(t, S, k),
        Q.m(S, null),
        D(t, b, k),
        D(t, P, k),
        D(t, O, k),
        D(t, _, k),
        X(_, E),
        X(E, U),
        X(_, T),
        X(_, N),
        X(_, q),
        (M = !0));
    },
    p(t, e) {
      ((!M || 1 & e) && z !== (z = t[0].name + "") && K(s, z),
        (!M || 1 & e) && R !== (R = t[0].server + "") && K(l, R),
        void 0 !== t[0].group && t[0].currency
          ? F
            ? F.p(t, e)
            : ((F = de(t)), F.c(), F.m(d.parentNode, d))
          : F && (F.d(1), (F = null)));
      const o = {};
      (17 & e && (o.$$scope = { dirty: e, ctx: t }),
        $.$set(o),
        (!M || 1 & e) && V !== (V = t[0].login + "") && K(m, V),
        G === (G = J(t)) && Q
          ? Q.p(t, e)
          : (Q.d(1), (Q = G(t)), Q && (Q.c(), Q.m(S, null))),
        (!M || 2 & e) && H !== (H = (t[1] ?? "") + "") && K(U, H));
    },
    i(t) {
      M || (I($.$$.fragment, t), (M = !0));
    },
    o(t) {
      (j($.$$.fragment, t), (M = !1));
    },
    d(t) {
      (t &&
        (k(e),
        k(o),
        k(n),
        k(r),
        k(i),
        k(a),
        k(c),
        k(u),
        k(d),
        k(p),
        k(g),
        k(f),
        k(w),
        k(v),
        k(h),
        k(x),
        k(C),
        k(y),
        k(S),
        k(b),
        k(P),
        k(O),
        k(_)),
        F && F.d(t),
        L($, t),
        Q.d());
    },
  };
}
function we(t) {
  let e,
    o = window.tr(window.lang.login.accountInfo.newAccountOpened) + "";
  return {
    c() {
      e = et(o);
    },
    m(t, o) {
      D(t, e, o);
    },
    p: q,
    d(t) {
      t && k(e);
    },
  };
}
function ve(t) {
  let e,
    o = window.tr(window.lang.login.accountInfo.btnStart) + "";
  return {
    c() {
      e = et(o);
    },
    m(t, o) {
      D(t, e, o);
    },
    p: q,
    d(t) {
      t && k(e);
    },
  };
}
function he(t) {
  let e, o;
  return (
    (e = new dt({
      props: { active: !0, $$slots: { default: [ve] }, $$scope: { ctx: t } },
    })),
    e.$on("click", t[2]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, n) {
        (A(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (16 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (I(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function me(t) {
  let e, o;
  return (
    (e = new ct({
      props: {
        $$slots: { footer: [he], title: [we], default: [fe] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, n) {
        (A(e, t, n), (o = !0));
      },
      p(t, [o]) {
        const n = {};
        (19 & o && (n.$$scope = { dirty: o, ctx: t }), e.$set(n));
      },
      i(t) {
        o || (I(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function xe(t, e, o) {
  let { user: n } = e,
    { investor: s } = e;
  const r = M();
  return (
    (t.$$set = (t) => {
      ("user" in t && o(0, (n = t.user)),
        "investor" in t && o(1, (s = t.investor)));
    }),
    [
      n,
      s,
      function () {
        r("login");
      },
    ]
  );
}
class Ce extends O {
  constructor(t) {
    (super(), _(this, t, xe, me, E, { user: 0, investor: 1 }));
  }
}
function ye(t) {
  let e,
    o,
    n,
    s,
    r = t[5].login + "";
  return {
    c() {
      ((e = Z("div")),
        (e.textContent = `${window.tr(window.lang.login.form.login)}`),
        (o = tt()),
        (n = Z("div")),
        (s = et(r)));
    },
    m(t, r) {
      (D(t, e, r), D(t, o, r), D(t, n, r), X(n, s));
    },
    p(t, e) {
      32 & e && r !== (r = t[5].login + "") && K(s, r);
    },
    d(t) {
      t && (k(e), k(o), k(n));
    },
  };
}
function Se(t) {
  let e,
    o,
    n,
    s,
    r,
    i,
    a,
    c,
    l,
    u,
    d,
    p,
    g,
    $,
    f,
    w,
    v,
    h,
    m,
    x,
    C,
    y = t[5].login && ye(t);
  function S(e) {
    t[9](e);
  }
  function b(e) {
    t[10](e);
  }
  let P = {
    name: "current",
    type: "password",
    autocomplete: "current-password",
    placeholder: "Enter current password",
    invalid: t[3].current,
    width: 60,
  };
  function O(e) {
    t[11](e);
  }
  function _(e) {
    t[12](e);
  }
  (void 0 !== t[2].current && (P.value = t[2].current),
    void 0 !== t[4] && (P.focus = t[4]),
    (r = new lt({ props: P })),
    G.push(() => Q(r, "value", S)),
    G.push(() => Q(r, "focus", b)));
  let E = {
    name: "password",
    type: "password",
    autocomplete: "new-password",
    placeholder: "Enter new password",
    invalid: t[3].password,
    width: 60,
  };
  function U(e) {
    t[13](e);
  }
  function T(e) {
    t[14](e);
  }
  (void 0 !== t[2].password && (E.value = t[2].password),
    void 0 !== t[4] && (E.focus = t[4]),
    (d = new lt({ props: E })),
    G.push(() => Q(d, "value", O)),
    G.push(() => Q(d, "focus", _)));
  let N = {
    name: "confirm",
    autocomplete: "new-password",
    placeholder: "Confirm password",
    type: "password",
    invalid: t[3].confirm,
    width: 60,
  };
  return (
    void 0 !== t[2].confirm && (N.value = t[2].confirm),
    void 0 !== t[4] && (N.focus = t[4]),
    (h = new lt({ props: N })),
    G.push(() => Q(h, "value", U)),
    G.push(() => Q(h, "focus", T)),
    {
      c() {
        (y && y.c(),
          (e = tt()),
          (o = Z("div")),
          (o.textContent = "Current Password"),
          (n = tt()),
          (s = Z("div")),
          B(r.$$.fragment),
          (c = tt()),
          (l = Z("div")),
          (l.textContent = `${window.tr(window.lang.login.changePassword.newPassword)}`),
          (u = tt()),
          B(d.$$.fragment),
          ($ = tt()),
          (f = Z("div")),
          (f.textContent = `${window.tr(window.lang.login.changePassword.confirmPassword)}`),
          (w = tt()),
          (v = Z("div")),
          B(h.$$.fragment),
          ot(o, "class", "field svelte-1s1516b"),
          ot(s, "class", "current svelte-1s1516b"),
          ot(l, "class", "field svelte-1s1516b"),
          ot(f, "class", "field svelte-1s1516b"),
          ot(v, "class", "last svelte-1s1516b"));
      },
      m(t, i) {
        (y && y.m(t, i),
          D(t, e, i),
          D(t, o, i),
          D(t, n, i),
          D(t, s, i),
          A(r, s, null),
          D(t, c, i),
          D(t, l, i),
          D(t, u, i),
          A(d, t, i),
          D(t, $, i),
          D(t, f, i),
          D(t, w, i),
          D(t, v, i),
          A(h, v, null),
          (C = !0));
      },
      p(t, o) {
        t[5].login
          ? y
            ? y.p(t, o)
            : ((y = ye(t)), y.c(), y.m(e.parentNode, e))
          : y && (y.d(1), (y = null));
        const n = {};
        (8 & o && (n.invalid = t[3].current),
          !i &&
            4 & o &&
            ((i = !0), (n.value = t[2].current), Y(() => (i = !1))),
          !a && 16 & o && ((a = !0), (n.focus = t[4]), Y(() => (a = !1))),
          r.$set(n));
        const s = {};
        (8 & o && (s.invalid = t[3].password),
          !p &&
            4 & o &&
            ((p = !0), (s.value = t[2].password), Y(() => (p = !1))),
          !g && 16 & o && ((g = !0), (s.focus = t[4]), Y(() => (g = !1))),
          d.$set(s));
        const c = {};
        (8 & o && (c.invalid = t[3].confirm),
          !m &&
            4 & o &&
            ((m = !0), (c.value = t[2].confirm), Y(() => (m = !1))),
          !x && 16 & o && ((x = !0), (c.focus = t[4]), Y(() => (x = !1))),
          h.$set(c));
      },
      i(t) {
        C ||
          (I(r.$$.fragment, t),
          I(d.$$.fragment, t),
          I(h.$$.fragment, t),
          (C = !0));
      },
      o(t) {
        (j(r.$$.fragment, t),
          j(d.$$.fragment, t),
          j(h.$$.fragment, t),
          (C = !1));
      },
      d(t) {
        (t &&
          (k(e), k(o), k(n), k(s), k(c), k(l), k(u), k($), k(f), k(w), k(v)),
          y && y.d(t),
          L(r),
          L(d, t),
          L(h));
      },
    }
  );
}
function be(t) {
  let e,
    o = window.tr(window.lang.login.changePassword.title) + "";
  return {
    c() {
      e = et(o);
    },
    m(t, o) {
      D(t, e, o);
    },
    p: q,
    d(t) {
      t && k(e);
    },
  };
}
function Pe(t) {
  let e,
    o = window.tr(window.lang.login.changePassword.btnChange) + "";
  return {
    c() {
      e = et(o);
    },
    m(t, o) {
      D(t, e, o);
    },
    p: q,
    d(t) {
      t && k(e);
    },
  };
}
function Oe(t) {
  let e,
    o = window.tr(window.lang.login.form.btn.cancel) + "";
  return {
    c() {
      e = et(o);
    },
    m(t, o) {
      D(t, e, o);
    },
    p: q,
    d(t) {
      t && k(e);
    },
  };
}
function _e(t) {
  var e;
  let o, n, s, r, i;
  return (
    (n = new dt({
      props: {
        active: !0,
        type: "submit",
        $$slots: { default: [Pe] },
        $$scope: { ctx: t },
      },
    })),
    (r = new dt({
      props: {
        disabled: !(null == (e = t[1]) ? void 0 : e.id),
        $$slots: { default: [Oe] },
        $$scope: { ctx: t },
      },
    })),
    r.$on("click", t[7]),
    {
      c() {
        ((o = Z("div")),
          B(n.$$.fragment),
          (s = tt()),
          B(r.$$.fragment),
          ot(o, "class", "footer1"),
          ot(o, "slot", "footer"));
      },
      m(t, e) {
        (D(t, o, e), A(n, o, null), X(o, s), A(r, o, null), (i = !0));
      },
      p(t, e) {
        var o;
        const s = {};
        (131072 & e && (s.$$scope = { dirty: e, ctx: t }), n.$set(s));
        const i = {};
        (2 & e && (i.disabled = !(null == (o = t[1]) ? void 0 : o.id)),
          131072 & e && (i.$$scope = { dirty: e, ctx: t }),
          r.$set(i));
      },
      i(t) {
        i || (I(n.$$.fragment, t), I(r.$$.fragment, t), (i = !0));
      },
      o(t) {
        (j(n.$$.fragment, t), j(r.$$.fragment, t), (i = !1));
      },
      d(t) {
        (t && k(o), L(n), L(r));
      },
    }
  );
}
function Ee(t) {
  let e, o, n;
  return (
    (o = new ct({
      props: {
        $$slots: { footer: [_e], title: [be], default: [Se] },
        $$scope: { ctx: t },
      },
    })),
    o.$on("submit", t[6]),
    {
      c() {
        ((e = Z("div")),
          B(o.$$.fragment),
          ot(e, "class", "layout svelte-1s1516b"));
      },
      m(t, s) {
        (D(t, e, s), A(o, e, null), (n = !0));
      },
      p(t, [e]) {
        const n = {};
        (131134 & e && (n.$$scope = { dirty: e, ctx: t }), o.$set(n));
      },
      i(t) {
        n || (I(o.$$.fragment, t), (n = !0));
      },
      o(t) {
        (j(o.$$.fragment, t), (n = !1));
      },
      d(t) {
        (t && k(e), L(o));
      },
    }
  );
}
function ke(t, e, o) {
  let n,
    s = q,
    r = () => (s(), (s = J(c, (t) => o(5, (n = t)))), c);
  t.$$.on_destroy.push(() => s());
  const i = M();
  let { accountController: a } = e,
    { accountStore: c } = e;
  r();
  let { user: l } = e;
  const p = { current: "", password: "", confirm: "" },
    g = u({
      current: d().map((t) => t || (i("error", 2008), x("Error"))),
      password: d().map((t) => {
        const e = a.checkPassword(p.password);
        return e ? (i("error", e), x("Error")) : t;
      }),
      confirm: d().map((t) =>
        t !== p.password ? (i("error", 2006), x("Error")) : t,
      ),
    });
  let $ = {},
    f = "current";
  return (
    (t.$$set = (t) => {
      ("accountController" in t && o(8, (a = t.accountController)),
        "accountStore" in t && r(o(0, (c = t.accountStore))),
        "user" in t && o(1, (l = t.user)));
    }),
    [
      c,
      l,
      p,
      $,
      f,
      n,
      async function () {
        try {
          g(p);
        } catch (t) {
          o(3, ($ = t));
          const e = Object.keys($);
          return void (e[0] && o(4, (f = e[0])));
        }
        if (await a.changePassword(p.password, p.current, n.passwordMin))
          return (
            o(2, (p.current = ""), p),
            o(3, ($ = { current: "Error" })),
            o(4, (f = "current")),
            void i("error", 2005)
          );
        i("success", p.password);
      },
      function () {
        i("cancel");
      },
      a,
      function (e) {
        t.$$.not_equal(p.current, e) && ((p.current = e), o(2, p));
      },
      function (t) {
        ((f = t), o(4, f));
      },
      function (e) {
        t.$$.not_equal(p.password, e) && ((p.password = e), o(2, p));
      },
      function (t) {
        ((f = t), o(4, f));
      },
      function (e) {
        t.$$.not_equal(p.confirm, e) && ((p.confirm = e), o(2, p));
      },
      function (t) {
        ((f = t), o(4, f));
      },
    ]
  );
}
class je extends O {
  constructor(t) {
    (super(),
      _(this, t, ke, Ee, E, {
        accountController: 8,
        accountStore: 0,
        user: 1,
      }));
  }
}
function Ie(t) {
  const e = t[40].default;
  t[42] = e;
}
function Ue(t) {
  const e = t[40].default;
  t[41] = e;
}
function Te(t) {
  let e, o, n, s;
  const r = [Re, ze, Me, qe, Ne, De],
    i = [];
  function a(t, e) {
    var o;
    return t[5].modules &&
      t[5].modules.account.accountStore.login === t[3].login &&
      (t[5].modules.account.accountStore.isResetPass ||
        t[5].existing[t[3].login].showChangePassword)
      ? 0
      : t[5].existing[t[3].login].showOtpConnect
        ? 1
        : t[5].existing[t[3].login].showOtpDisconnect && t[5].modules
          ? 2
          : (null == (o = t[5].createdUser) ? void 0 : o.investor) &&
              t[5].createdUser.id === t[3].id
            ? 3
            : t[5].modules &&
                t[5].modules.account.accountStore.login === t[3].login
              ? 4
              : 5;
  }
  return (
    (e = a(t)),
    (o = i[e] = r[e](t)),
    {
      c() {
        (o.c(), (n = N()));
      },
      m(t, o) {
        (i[e].m(t, o), D(t, n, o), (s = !0));
      },
      p(t, s) {
        let c = e;
        ((e = a(t)),
          e === c
            ? i[e].p(t, s)
            : (U(),
              j(i[c], 1, 1, () => {
                i[c] = null;
              }),
              T(),
              (o = i[e]),
              o ? o.p(t, s) : ((o = i[e] = r[e](t)), o.c()),
              I(o, 1),
              o.m(n.parentNode, n)));
      },
      i(t) {
        s || (I(o), (s = !0));
      },
      o(t) {
        (j(o), (s = !1));
      },
      d(t) {
        (t && k(n), i[e].d(t));
      },
    }
  );
}
function De(t) {
  let e, o, n, s, r, i, a;
  function c(e) {
    t[31](e);
  }
  function l(e) {
    t[32](e);
  }
  function u(e) {
    t[33](e);
  }
  function d(e) {
    t[34](e);
  }
  function p(e) {
    t[35](e);
  }
  let g = {
    user: t[3],
    showOtp: t[5].existing[t[3].login].showOtp,
    current: t[4],
  };
  return (
    void 0 !== t[5].existing[t[3].login].values.otp &&
      (g.otp = t[5].existing[t[3].login].values.otp),
    void 0 !== t[5].existing[t[3].login].focus &&
      (g.focus = t[5].existing[t[3].login].focus),
    void 0 !== t[5].existing[t[3].login].errors &&
      (g.errors = t[5].existing[t[3].login].errors),
    void 0 !== t[5].existing[t[3].login].values.password &&
      (g.password = t[5].existing[t[3].login].values.password),
    void 0 !== t[5].existing[t[3].login].values.savePassword &&
      (g.savePassword = t[5].existing[t[3].login].values.savePassword),
    (e = new Xt({ props: g })),
    G.push(() => Q(e, "otp", c)),
    G.push(() => Q(e, "focus", l)),
    G.push(() => Q(e, "errors", u)),
    G.push(() => Q(e, "password", d)),
    G.push(() => Q(e, "savePassword", p)),
    e.$on("login", t[36]),
    e.$on("logout", t[6]),
    e.$on("remove", t[7]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, o) {
        (A(e, t, o), (a = !0));
      },
      p(t, a) {
        const c = {};
        (8 & a[0] && (c.user = t[3]),
          40 & a[0] && (c.showOtp = t[5].existing[t[3].login].showOtp),
          16 & a[0] && (c.current = t[4]),
          !o &&
            40 & a[0] &&
            ((o = !0),
            (c.otp = t[5].existing[t[3].login].values.otp),
            Y(() => (o = !1))),
          !n &&
            40 & a[0] &&
            ((n = !0),
            (c.focus = t[5].existing[t[3].login].focus),
            Y(() => (n = !1))),
          !s &&
            40 & a[0] &&
            ((s = !0),
            (c.errors = t[5].existing[t[3].login].errors),
            Y(() => (s = !1))),
          !r &&
            40 & a[0] &&
            ((r = !0),
            (c.password = t[5].existing[t[3].login].values.password),
            Y(() => (r = !1))),
          !i &&
            40 & a[0] &&
            ((i = !0),
            (c.savePassword = t[5].existing[t[3].login].values.savePassword),
            Y(() => (i = !1))),
          e.$set(c));
      },
      i(t) {
        a || (I(e.$$.fragment, t), (a = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (a = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function Ne(t) {
  let e, o, n, s, r, i;
  function a(e) {
    t[26](e);
  }
  function c(e) {
    t[27](e);
  }
  function l(e) {
    t[28](e);
  }
  function u(e) {
    t[29](e);
  }
  let d = {
    accountStore: t[5].modules.account.accountStore,
    user: t[3],
    showOtp: t[5].existing[t[3].login].showOtp,
    current: t[4],
  };
  return (
    void 0 !== t[5].existing[t[3].login].values.otp &&
      (d.otp = t[5].existing[t[3].login].values.otp),
    void 0 !== t[5].existing[t[3].login].focus &&
      (d.focus = t[5].existing[t[3].login].focus),
    void 0 !== t[5].existing[t[3].login].errors &&
      (d.errors = t[5].existing[t[3].login].errors),
    void 0 !== t[5].existing[t[3].login].values.password &&
      (d.password = t[5].existing[t[3].login].values.password),
    (e = new ue({ props: d })),
    G.push(() => Q(e, "otp", a)),
    G.push(() => Q(e, "focus", c)),
    G.push(() => Q(e, "errors", l)),
    G.push(() => Q(e, "password", u)),
    e.$on("login", t[30]),
    e.$on("logout", t[6]),
    e.$on("remove", t[7]),
    e.$on("otpEnable", t[17]),
    e.$on("otpDisable", t[18]),
    e.$on("removePassword", t[19]),
    e.$on("savePassword", t[20]),
    e.$on("changePassword", t[12]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, o) {
        (A(e, t, o), (i = !0));
      },
      p(t, i) {
        const a = {};
        (32 & i[0] && (a.accountStore = t[5].modules.account.accountStore),
          8 & i[0] && (a.user = t[3]),
          40 & i[0] && (a.showOtp = t[5].existing[t[3].login].showOtp),
          16 & i[0] && (a.current = t[4]),
          !o &&
            40 & i[0] &&
            ((o = !0),
            (a.otp = t[5].existing[t[3].login].values.otp),
            Y(() => (o = !1))),
          !n &&
            40 & i[0] &&
            ((n = !0),
            (a.focus = t[5].existing[t[3].login].focus),
            Y(() => (n = !1))),
          !s &&
            40 & i[0] &&
            ((s = !0),
            (a.errors = t[5].existing[t[3].login].errors),
            Y(() => (s = !1))),
          !r &&
            40 & i[0] &&
            ((r = !0),
            (a.password = t[5].existing[t[3].login].values.password),
            Y(() => (r = !1))),
          e.$set(a));
      },
      i(t) {
        i || (I(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (i = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function qe(t) {
  let e, o;
  return (
    (e = new Ce({
      props: { user: t[3], investor: t[5].createdUser.investor },
    })),
    e.$on("login", t[25]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, n) {
        (A(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (8 & o[0] && (n.user = t[3]),
          32 & o[0] && (n.investor = t[5].createdUser.investor),
          e.$set(n));
      },
      i(t) {
        o || (I(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function Me(t) {
  let e, o;
  return (
    (e = new at({
      props: {
        module: He,
        $$slots: {
          default: [
            Le,
            ({ module: t }) => ({ 40: t }),
            ({ module: t }) => [0, t ? 512 : 0],
          ],
        },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, n) {
        (A(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        ((40 & o[0]) | (4096 & o[1]) && (n.$$scope = { dirty: o, ctx: t }),
          e.$set(n));
      },
      i(t) {
        o || (I(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function ze(t) {
  let e, o;
  return (
    (e = new at({
      props: {
        module: Ve,
        $$slots: {
          default: [
            Ae,
            ({ module: t }) => ({ 40: t }),
            ({ module: t }) => [0, t ? 512 : 0],
          ],
        },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, n) {
        (A(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        ((10 & o[0]) | (4096 & o[1]) && (n.$$scope = { dirty: o, ctx: t }),
          e.$set(n));
      },
      i(t) {
        o || (I(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function Re(t) {
  let e, o;
  return (
    (e = new je({
      props: {
        user: t[3],
        accountController: t[5].modules.account.accountController,
        accountStore: t[5].modules.account.accountStore,
      },
    })),
    e.$on("success", t[9]),
    e.$on("error", t[10]),
    e.$on("cancel", t[11]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, n) {
        (A(e, t, n), (o = !0));
      },
      p(t, o) {
        const n = {};
        (8 & o[0] && (n.user = t[3]),
          32 & o[0] &&
            (n.accountController = t[5].modules.account.accountController),
          32 & o[0] && (n.accountStore = t[5].modules.account.accountStore),
          e.$set(n));
      },
      i(t) {
        o || (I(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function Le(t) {
  let e, o;
  return (
    Ie(t),
    (e = new t[42]({
      props: {
        accountController: t[5].modules.account.accountController,
        accountStore: t[5].modules.account.accountStore,
        user: t[3],
      },
    })),
    e.$on("success", t[14]),
    e.$on("cancel", t[15]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, n) {
        (A(e, t, n), (o = !0));
      },
      p(t, o) {
        Ie(t);
        const n = {};
        (32 & o[0] &&
          (n.accountController = t[5].modules.account.accountController),
          32 & o[0] && (n.accountStore = t[5].modules.account.accountStore),
          8 & o[0] && (n.user = t[3]),
          e.$set(n));
      },
      i(t) {
        o || (I(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function Ae(t) {
  let e, o;
  return (
    Ue(t),
    (e = new t[41]({
      props: {
        login: t[3].login,
        server: t[3].server,
        password: t[3].password,
        authController: t[1],
      },
    })),
    e.$on("success", t[13]),
    e.$on("cancel", t[16]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, n) {
        (A(e, t, n), (o = !0));
      },
      p(t, o) {
        Ue(t);
        const n = {};
        (8 & o[0] && (n.login = t[3].login),
          8 & o[0] && (n.server = t[3].server),
          8 & o[0] && (n.password = t[3].password),
          2 & o[0] && (n.authController = t[1]),
          e.$set(n));
      },
      i(t) {
        o || (I(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (o = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function Be(t) {
  let e,
    o,
    n = t[5].existing[t[3].login] && Te(t);
  return {
    c() {
      (n && n.c(), (e = N()));
    },
    m(t, s) {
      (n && n.m(t, s), D(t, e, s), (o = !0));
    },
    p(t, o) {
      t[5].existing[t[3].login]
        ? n
          ? (n.p(t, o), 40 & o[0] && I(n, 1))
          : ((n = Te(t)), n.c(), I(n, 1), n.m(e.parentNode, e))
        : n &&
          (U(),
          j(n, 1, 1, () => {
            n = null;
          }),
          T());
    },
    i(t) {
      o || (I(n), (o = !0));
    },
    o(t) {
      (j(n), (o = !1));
    },
    d(t) {
      (t && k(e), n && n.d(t));
    },
  };
}
const Ve = () => v(() => import("./BwQoDeX9.js"), []),
  He = () => v(() => import("./ChCuAyQw.js"), []);
function We(t, e, o) {
  let n,
    s,
    r = q,
    i = () => (r(), (r = J(l, (t) => o(5, (n = t)))), l),
    a = q,
    c = () => (a(), (a = J($, (t) => o(37, (s = t)))), $);
  (t.$$.on_destroy.push(() => r()), t.$$.on_destroy.push(() => a()));
  let { authStore: l } = e;
  i();
  let { authController: g } = e,
    { layoutStore: $ } = e;
  c();
  let { usersController: f } = e,
    { autoConnect: v } = e,
    { user: m } = e,
    { current: y } = e;
  const S = M(),
    b = d().map((t) =>
      n.existing[m.login].showOtp
        ? t
          ? 6 !== t.length
            ? x("6 characters")
            : /^\d+$/.test(String(t))
              ? t
              : x("only numbers")
          : x("required")
        : t,
    ),
    P = u({ otp: b }),
    O = u({
      otp: b,
      password: d().map((t) => t || x("Error")),
      savePassword: p(),
    });
  async function _(t) {
    var e;
    try {
      m.savePassword
        ? P(n.existing[m.login].values)
        : O(n.existing[m.login].values);
    } catch (o) {
      z(l, (n.existing[m.login].errors = o), n);
      const t = Object.keys(n.existing[m.login].errors);
      return void (t[0] && z(l, (n.existing[m.login].focus = t[0]), n));
    }
    (t &&
      n.existing[m.login] &&
      z(l, (n.existing[m.login].values.password = ""), n),
      (await g.existing(t ? { ...m, password: t } : m)) &&
        ((null == (e = n.modules)
          ? void 0
          : e.account.accountStore.isResetPass) ||
          (w.remove("login"), s.setLayout({ auth: h.None })),
        z(l, (n.existing[m.login].showChangePassword = !1), n)));
  }
  return (
    rt(() => {
      (n.setExisting(m.login, {
        values: { otp: "", password: "", savePassword: !!m.savePassword },
      }),
        v && (o(21, (v = !1)), m.savePassword && _()));
    }),
    (t.$$set = (t) => {
      ("authStore" in t && i(o(0, (l = t.authStore))),
        "authController" in t && o(1, (g = t.authController)),
        "layoutStore" in t && c(o(2, ($ = t.layoutStore))),
        "usersController" in t && o(22, (f = t.usersController)),
        "autoConnect" in t && o(21, (v = t.autoConnect)),
        "user" in t && o(3, (m = t.user)),
        "current" in t && o(4, (y = t.current)));
    }),
    [
      l,
      g,
      $,
      m,
      y,
      n,
      function () {
        S("logout", m.id);
      },
      function () {
        S("remove", m.id);
      },
      _,
      function (t) {
        _(t.detail);
      },
      function (t) {
        z(l, (n.existing[m.login].error = C(t.detail)), n);
      },
      function () {
        var t;
        ((null == (t = n.modules)
          ? void 0
          : t.account.accountStore.isResetPass) && S("logout"),
          z(l, (n.existing[m.login].showChangePassword = !1), n));
      },
      function () {
        z(l, (n.existing[m.login].showChangePassword = !0), n);
      },
      function () {
        (z(l, (n.existing[m.login].showOtpConnect = !1), n),
          z(l, (n.createdUser = null), n),
          _());
      },
      function () {
        (z(l, (n.existing[m.login].showOtpDisconnect = !1), n),
          z(l, (n.createdUser = null), n),
          _());
      },
      function () {
        z(l, (n.existing[m.login].showOtpDisconnect = !1), n);
      },
      function () {
        z(l, (n.existing[m.login].showOtpConnect = !1), n);
      },
      function () {
        z(l, (n.existing[m.login].showOtpConnect = !0), n);
      },
      function () {
        z(l, (n.existing[m.login].showOtpDisconnect = !0), n);
      },
      async function () {
        await f.addUser({
          login: m.login,
          server: m.server,
          password: m.password,
          savePassword: !1,
        });
      },
      async function () {
        await f.addUser({
          login: m.login,
          server: m.server,
          password: m.password,
          savePassword: !0,
        });
      },
      v,
      f,
      P,
      O,
      () => _(),
      function (e) {
        t.$$.not_equal(n.existing[m.login].values.otp, e) &&
          ((n.existing[m.login].values.otp = e), l.set(n));
      },
      function (e) {
        t.$$.not_equal(n.existing[m.login].focus, e) &&
          ((n.existing[m.login].focus = e), l.set(n));
      },
      function (e) {
        t.$$.not_equal(n.existing[m.login].errors, e) &&
          ((n.existing[m.login].errors = e), l.set(n));
      },
      function (e) {
        t.$$.not_equal(n.existing[m.login].values.password, e) &&
          ((n.existing[m.login].values.password = e), l.set(n));
      },
      () => _(),
      function (e) {
        t.$$.not_equal(n.existing[m.login].values.otp, e) &&
          ((n.existing[m.login].values.otp = e), l.set(n));
      },
      function (e) {
        t.$$.not_equal(n.existing[m.login].focus, e) &&
          ((n.existing[m.login].focus = e), l.set(n));
      },
      function (e) {
        t.$$.not_equal(n.existing[m.login].errors, e) &&
          ((n.existing[m.login].errors = e), l.set(n));
      },
      function (e) {
        t.$$.not_equal(n.existing[m.login].values.password, e) &&
          ((n.existing[m.login].values.password = e), l.set(n));
      },
      function (e) {
        t.$$.not_equal(n.existing[m.login].values.savePassword, e) &&
          ((n.existing[m.login].values.savePassword = e), l.set(n));
      },
      () => _(),
    ]
  );
}
class Fe extends O {
  constructor(t) {
    (super(),
      _(
        this,
        t,
        We,
        Be,
        E,
        {
          authStore: 0,
          authController: 1,
          layoutStore: 2,
          usersController: 22,
          autoConnect: 21,
          user: 3,
          current: 4,
          existingConnectSchema: 23,
          existingConnectWithPasswordSchema: 24,
        },
        null,
        [-1, -1],
      ));
  }
  get existingConnectSchema() {
    return this.$$.ctx[23];
  }
  get existingConnectWithPasswordSchema() {
    return this.$$.ctx[24];
  }
}
function Je(t) {
  let e, o, n;
  function s(e) {
    t[7](e);
  }
  let r = {
    authStore: t[1],
    authController: t[2],
    layoutStore: t[3],
    usersController: t[4],
    user: t[5],
    current: t[6],
  };
  return (
    void 0 !== t[0] && (r.autoConnect = t[0]),
    (e = new Fe({ props: r })),
    G.push(() => Q(e, "autoConnect", s)),
    e.$on("connect", t[8]),
    e.$on("logout", t[9]),
    e.$on("remove", t[10]),
    {
      c() {
        B(e.$$.fragment);
      },
      m(t, o) {
        (A(e, t, o), (n = !0));
      },
      p(t, [n]) {
        const s = {};
        (2 & n && (s.authStore = t[1]),
          4 & n && (s.authController = t[2]),
          8 & n && (s.layoutStore = t[3]),
          16 & n && (s.usersController = t[4]),
          32 & n && (s.user = t[5]),
          64 & n && (s.current = t[6]),
          !o && 1 & n && ((o = !0), (s.autoConnect = t[0]), Y(() => (o = !1))),
          e.$set(s));
      },
      i(t) {
        n || (I(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        (j(e.$$.fragment, t), (n = !1));
      },
      d(t) {
        L(e, t);
      },
    }
  );
}
function Ge(t, e, o) {
  let { authStore: n } = e,
    { authController: s } = e,
    { layoutStore: r } = e,
    { usersController: i } = e,
    { autoConnect: a } = e,
    { user: c } = e,
    { current: l } = e;
  return (
    (t.$$set = (t) => {
      ("authStore" in t && o(1, (n = t.authStore)),
        "authController" in t && o(2, (s = t.authController)),
        "layoutStore" in t && o(3, (r = t.layoutStore)),
        "usersController" in t && o(4, (i = t.usersController)),
        "autoConnect" in t && o(0, (a = t.autoConnect)),
        "user" in t && o(5, (c = t.user)),
        "current" in t && o(6, (l = t.current)));
    }),
    [
      a,
      n,
      s,
      r,
      i,
      c,
      l,
      function (t) {
        ((a = t), o(0, a));
      },
      function (e) {
        it.call(this, t, e);
      },
      function (e) {
        it.call(this, t, e);
      },
      function (e) {
        it.call(this, t, e);
      },
    ]
  );
}
class Qe extends O {
  constructor(t) {
    (super(),
      _(this, t, Ge, Je, E, {
        authStore: 1,
        authController: 2,
        layoutStore: 3,
        usersController: 4,
        autoConnect: 0,
        user: 5,
        current: 6,
      }));
  }
}
class Ye {
  constructor(n, s, r) {
    (a(this, o),
      a(this, t),
      a(this, e),
      c(this, e, n),
      (this.authStore = s),
      c(this, t, r));
  }
  async login(s) {
    const a = await v(() => import("./Bte0Q9TL.js"), []),
      c = v(() => import("./Ca-rt9XF.js"), []),
      l = (function (t) {
        const e = document.createElement("a");
        return ((e.href = t), e);
      })(document.referrer).hostname;
    let u;
    try {
      const t = (function (t) {
        try {
          const e = JSON.parse(S.getItem("s") ?? "{}");
          if ("object" == typeof e && e[String(t)]) return BigInt(e[t]);
        } catch (e) {
          return BigInt(0);
        }
        return BigInt(0);
      })(s.login);
      u = await a.default.login(
        i(this, e),
        s.login,
        s.server,
        s.password,
        l,
        t,
        y,
        s.otp,
        s.token,
      );
    } catch (d) {
      throw d;
    }
    return async () => {
      let l;
      try {
        l = await u();
      } catch (d) {
        throw d;
      }
      return async () => {
        let u, p, g;
        try {
          const t = await l();
          (([p, g, u] = t),
            g
              ? S.setItem("s", JSON.stringify({ [s.login]: g.toString() }))
              : S.removeItem("s"),
            u.on(
              11,
              (($ = o), (f = n), r(this, $, "access private method"), f).bind(
                this,
                u,
              ),
            ));
        } catch (d) {
          throw d;
        }
        var $, f;
        return async () => {
          let o;
          try {
            (this.authStore.clearUnsavedPasswords(),
              (o = await i(this, t).users.usersController.addUser({
                login: s.login,
                password: p,
                server: s.server,
                savePassword: s.savePassword,
              })),
              i(this, t).users.usersController.setCurrentUser(o),
              b(o));
          } catch (d) {
            throw d;
          }
          return async () => {
            try {
              const { Modules: o } = await c,
                n = v(() => import("./D0D07eam.js"), []),
                s = v(() => import("./BLCxo5ZN.js").then((t) => t.o), []),
                r = v(() => import("./b2TMcBQ2.js"), []),
                { Chart: l } = await n,
                { ObjectManager: d } = await s,
                { AnalysisManager: p } = await r,
                g = new o(i(this, e), i(this, t), u, a.default.utils, l, p, d);
              return (await g.init(), g);
            } catch (d) {
              throw d;
            }
          };
        };
      };
    };
  }
  async setModules(t) {
    var e;
    try {
      await (null == (e = this.authStore.modules) ? void 0 : e.destroy());
    } catch (o) {}
    this.authStore.setModules(t);
  }
  async connectOtp(t, e, o, n, s) {
    const r = await v(() => import("./Bte0Q9TL.js"), []);
    await r.default.connectOtp(t, e, o, n, s);
  }
  async connect() {
    var e, o, n;
    this.authStore.setConnect({ status: 1 });
    try {
      const o = await this.login({
        login: Number(this.authStore.connect.values.login),
        password: this.authStore.connect.values.password,
        server: this.authStore.connect.values.server,
        savePassword: this.authStore.connect.values.savePassword,
        otp: this.authStore.connect.values.otp,
      });
      this.authStore.setConnect({ status: 2 });
      const n = await o();
      this.authStore.setConnect({ status: 3 });
      const s = await n();
      this.authStore.setConnect({ status: 4 });
      const r = await s();
      (this.authStore.setConnect({ status: 5 }),
        await (null == (e = this.authStore.modules) ? void 0 : e.destroy()));
      const a = await r();
      return (
        this.logout(!0),
        await this.setModules(a),
        this.authStore.setConnect({ status: 6 }),
        this.authStore.createdUser && this.authStore.setCreatedUser(),
        i(this, t).journal.journalController.log(
          3,
          `${this.authStore.connect.values.login} authorized on ${this.authStore.connect.values.server}`,
        ),
        !0
      );
    } catch (s) {
      this.authStore.setConnect({ status: 0 });
      let e = "Unknown error";
      const [r] = P(s);
      if ("number" == typeof r) {
        (201 === r
          ? this.authStore.setConnect({
              errors: { otp: "Invalid account OTP" },
              focus: "otp",
            })
          : 5 === r
            ? (this.authStore.setConnect({ focus: "otp" }),
              (null == (o = this.authStore.connect.error) ? void 0 : o.code) ===
                r &&
                this.authStore.setConnect({
                  errors: { otp: "Invalid account OTP" },
                }),
              this.authStore.setConnect({ showOtp: !0 }))
            : 6 === r
              ? this.authStore.setConnect({ showOtpConnect: !0 })
              : this.authStore.setConnect({ showOtp: !1 }),
          this.authStore.setConnect({ values: { otp: "" } }));
        const e = C(
          r,
          null == (n = this.authStore.connect.error) ? void 0 : n.code,
        );
        (this.authStore.setConnect({ error: e }),
          "error" === e.type &&
            i(this, t).journal.journalController.err(3, e.message));
      } else
        "string" == typeof r &&
          ((e = r),
          this.authStore.setConnect({ error: { message: r, type: "error" } }));
      return (
        this.authStore.connect.error ||
          (this.authStore.connect.error = { message: e, type: "error" }),
        !1
      );
    }
  }
  async existing(e, o = 0, n) {
    var s, r, a;
    this.authStore.setExisting(e.login, { status: 1 });
    try {
      const o = await this.login({
        login: e.login,
        password:
          this.authStore.existing[e.login].values.password || e.password,
        server: e.server,
        savePassword: this.authStore.existing[e.login].values.savePassword,
        otp: this.authStore.existing[e.login].values.otp,
        token: n,
      });
      this.authStore.setExisting(e.login, { status: 2 });
      const r = await o();
      this.authStore.setExisting(e.login, { status: 3 });
      const a = await r();
      this.authStore.setExisting(e.login, { status: 4 });
      const c = await a();
      (this.authStore.setExisting(e.login, { status: 5 }),
        await (null == (s = this.authStore.modules) ? void 0 : s.destroy()));
      const l = await c();
      return (
        this.logout(!0),
        await this.setModules(l),
        this.authStore.setExisting(e.login, {
          showOtp: !1,
          showOtpConnect: !1,
          values: { otp: "", password: "", savePassword: !0 },
        }),
        this.authStore.setExisting(e.login, { status: 6 }),
        this.authStore.createdUser && this.authStore.setCreatedUser(),
        this.authStore.setExisting(e.login, { error: null }),
        i(this, t).journal.journalController.log(
          3,
          `${e.login} authorized on ${e.server}`,
        ),
        !0
      );
    } catch (c) {
      this.authStore.setExisting(e.login, { status: 0 });
      let s = "Unknown error";
      const [l] = P(c);
      if ("number" == typeof l) {
        (201 === l
          ? this.authStore.setExisting(e.login, {
              errors: { otp: "Invalid account OTP" },
              focus: "otp",
            })
          : 5 === l
            ? (this.authStore.setExisting(e.login, { focus: "otp" }),
              (null == (r = this.authStore.existing[e.login].error)
                ? void 0
                : r.code) === l &&
                this.authStore.setExisting(e.login, {
                  errors: { otp: "Invalid account OTP" },
                }),
              this.authStore.setExisting(e.login, { showOtp: !0 }))
            : 6 === l
              ? this.authStore.setExisting(e.login, { showOtpConnect: !0 })
              : this.authStore.setExisting(e.login, { showOtp: !1 }),
          this.authStore.setExisting(e.login, {
            values: { otp: "", password: "", savePassword: !0 },
          }));
        const s = C(
          l,
          null == (a = this.authStore.existing[e.login].error)
            ? void 0
            : a.code,
        );
        if (
          (this.authStore.setExisting(e.login, { error: s }),
          "error" === s.type &&
            i(this, t).journal.journalController.err(3, s.message),
          (100 === l || 2 === l) && o > 0)
        )
          return this.existing(e, o - 1, n);
        this.setModules(null);
      } else
        "string" == typeof l &&
          ((s = l),
          this.authStore.setExisting(e.login, {
            error: { message: l, type: "error" },
          }));
      return (
        this.authStore.existing[e.login].error ||
          (this.authStore.existing[e.login].error = {
            message: s,
            type: "error",
          }),
        !1
      );
    }
  }
  async logout(e = !1) {
    var o;
    const n = i(this, t).users.usersController.usersStore.getCurrentUser();
    (n &&
      this.authStore.setExisting(null == n ? void 0 : n.login, {
        values: { otp: "", password: "", savePassword: !0 },
      }),
      e || i(this, t).users.usersController.setCurrentUser());
    const s = this.authStore.modules;
    s &&
      (this.authStore.setModules(null),
      await (null == (o = null == s ? void 0 : s.account)
        ? void 0
        : o.accountController.logout()));
  }
}
((t = new WeakMap()),
  (e = new WeakMap()),
  (o = new WeakSet()),
  (n = function (e, o) {
    var n;
    null == e || e.destroy();
    const s = i(this, t).users.usersController.usersStore.getCurrentUser();
    s &&
      s.login === o.login &&
      (null == (n = this.authStore.modules) ? void 0 : n.api) === e &&
      this.existing(s, 5, o.event.token).then((e) => {
        e ||
          i(this, t).layout.layoutController.layoutStore.setLayout({
            auth: s.id,
          });
      });
  }));
class Ke {
  constructor(t, e) {
    ((this.authStore = new vt()),
      (this.authController = new Ye(t, this.authStore, e)));
  }
}
export { Ke as AuthModule, qt as Connect, Qe as Existing };
