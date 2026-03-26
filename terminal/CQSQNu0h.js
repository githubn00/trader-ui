var e,
  t,
  o,
  r,
  n,
  i,
  s,
  a,
  l,
  c,
  d,
  u,
  h,
  m,
  p,
  g,
  w,
  f,
  b,
  y,
  _,
  C,
  v,
  k,
  $,
  S,
  E,
  A,
  P,
  T,
  x,
  D,
  L,
  O,
  I,
  j,
  V,
  M,
  R,
  B,
  H,
  N,
  z,
  U,
  F,
  q,
  W,
  K,
  Z,
  G,
  Y = (e) => {
    throw TypeError(e);
  },
  J = (e, t, o) => t.has(e) || Y("Cannot " + o),
  Q = (e, t, o) => (
    J(e, t, "read from private field"),
    o ? o.call(e) : t.get(e)
  ),
  X = (e, t, o) =>
    t.has(e)
      ? Y("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, o),
  ee = (e, t, o, r) => (
    J(e, t, "write to private field"),
    r ? r.call(e, o) : t.set(e, o),
    o
  ),
  te = (e, t, o) => (J(e, t, "access private method"), o);
import {
  S as oe,
  i as re,
  s as ne,
  d as ie,
  t as se,
  g as ae,
  h as le,
  j as ce,
  b as de,
  D as ue,
  n as he,
  w as me,
  x as pe,
  y as ge,
  z as we,
  a4 as fe,
  m as be,
  aj as ye,
  c as _e,
  B as Ce,
  f as ve,
  l as ke,
  e as $e,
  r as Se,
  F as Ee,
  ai as Ae,
  G as Pe,
  u as Te,
  v as xe,
  k as De,
  o as Le,
  ao as Oe,
  O as Ie,
  X as je,
  C as Ve,
  E as Me,
  N as Re,
  L as Be,
  P as He,
  I as Ne,
  a2 as ze,
  a3 as Ue,
  Y as Fe,
  Z as qe,
  R as We,
  J as Ke,
  am as Ze,
  an as Ge,
  K as Ye,
  T as Je,
  a5 as Qe,
  aF as Xe,
  a as et,
  aJ as tt,
} from "./CHj1SSsY.js";
import {
  n as ot,
  i as rt,
  I as nt,
  b as it,
  L as st,
  d as at,
  P as lt,
  j as ct,
} from "./C8gngcK2.js";
const dt = (function () {
    const e =
      "undefined" != typeof document && document.createElement("link").relList;
    return e && e.supports && e.supports("modulepreload")
      ? "modulepreload"
      : "preload";
  })(),
  ut = {},
  ht = function (e, t, o) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      document.getElementsByTagName("link");
      const e = document.querySelector("meta[property=csp-nonce]"),
        o =
          (null == e ? void 0 : e.nonce) ||
          (null == e ? void 0 : e.getAttribute("nonce"));
      r = Promise.allSettled(
        t.map((e) => {
          if (
            (e = (function (e) {
              return "/terminal/" + e;
            })(e)) in ut
          )
            return;
          ut[e] = !0;
          const t = e.endsWith(".css"),
            r = t ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${e}"]${r}`)) return;
          const n = document.createElement("link");
          return (
            (n.rel = t ? "stylesheet" : dt),
            t || (n.as = "script"),
            (n.crossOrigin = ""),
            (n.href = e),
            o && n.setAttribute("nonce", o),
            document.head.appendChild(n),
            t
              ? new Promise((t, o) => {
                  (n.addEventListener("load", t),
                    n.addEventListener("error", () =>
                      o(new Error(`Unable to preload CSS for ${e}`)),
                    ));
                })
              : void 0
          );
        }),
      );
    }
    function n(e) {
      const t = new Event("vite:preloadError", { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (const e of t || []) "rejected" === e.status && n(e.reason);
      return e().catch(n);
    });
  },
  mt = (e) => ({}),
  pt = (e) => ({});
function gt(e) {
  let t;
  const o = e[7].default,
    r = me(o, e, e[6], null);
  return {
    c() {
      r && r.c();
    },
    m(e, o) {
      (r && r.m(e, o), (t = !0));
    },
    p(e, n) {
      r &&
        r.p &&
        (!t || 64 & n) &&
        pe(r, o, e, e[6], t ? we(o, e[6], n, null) : ge(e[6]), null);
    },
    i(e) {
      t || (ae(r, e), (t = !0));
    },
    o(e) {
      (se(r, e), (t = !1));
    },
    d(e) {
      r && r.d(e);
    },
  };
}
function wt(e) {
  let t;
  const o = e[7].risk,
    r = me(o, e, e[6], pt);
  return {
    c() {
      r && r.c();
    },
    m(e, o) {
      (r && r.m(e, o), (t = !0));
    },
    p(e, n) {
      r &&
        r.p &&
        (!t || 64 & n) &&
        pe(r, o, e, e[6], t ? we(o, e[6], n, mt) : ge(e[6]), pt);
    },
    i(e) {
      t || (ae(r, e), (t = !0));
    },
    o(e) {
      (se(r, e), (t = !1));
    },
    d(e) {
      r && r.d(e);
    },
  };
}
function ft(e) {
  let t, o, r, n;
  const i = [wt, gt],
    s = [];
  function a(e, t) {
    return e[2] ? 0 : 1;
  }
  return (
    (t = a(e)),
    (o = s[t] = i[t](e)),
    {
      c() {
        (o.c(), (r = ue()));
      },
      m(e, o) {
        (s[t].m(e, o), de(e, r, o), (n = !0));
      },
      p(e, [n]) {
        let l = t;
        ((t = a(e)),
          t === l
            ? s[t].p(e, n)
            : (le(),
              se(s[l], 1, 1, () => {
                s[l] = null;
              }),
              ce(),
              (o = s[t]),
              o ? o.p(e, n) : ((o = s[t] = i[t](e)), o.c()),
              ae(o, 1),
              o.m(r.parentNode, r)));
      },
      i(e) {
        n || (ae(o), (n = !0));
      },
      o(e) {
        (se(o), (n = !1));
      },
      d(e) {
        (e && ie(r), s[t].d(e));
      },
    }
  );
}
function bt(e, t, o) {
  let r,
    n,
    i = he,
    s = () => (i(), (i = fe(h, (e) => o(4, (r = e)))), h),
    a = he,
    l = () => (a(), (a = fe(u, (e) => o(5, (n = e)))), u);
  (e.$$.on_destroy.push(() => i()), e.$$.on_destroy.push(() => a()));
  let { $$slots: c = {}, $$scope: d } = t,
    { usersStore: u } = t;
  l();
  let { accountStore: h } = t;
  s();
  let m = null,
    p = !1;
  return (
    (e.$$set = (e) => {
      ("usersStore" in e && l(o(0, (u = e.usersStore))),
        "accountStore" in e && s(o(1, (h = e.accountStore))),
        "$$scope" in e && o(6, (d = e.$$scope)));
    }),
    (e.$$.update = () => {
      (32 & e.$$.dirty && o(3, (m = n.getCurrentUser())),
        24 & e.$$.dirty &&
          m &&
          o(
            2,
            (p = 1 === r.riskWarning && null === sessionStorage.getItem(m.id)),
          ));
    }),
    [u, h, p, m, r, n, d, c]
  );
}
class yt extends oe {
  constructor(e) {
    (super(), re(this, e, bt, ft, ne, { usersStore: 0, accountStore: 1 }));
  }
}
function _t(e) {
  if (e === 1 / 6) return "S10";
  switch (e) {
    case 1:
      return window.tr(window.lang.chart.period.short.M1);
    case 5:
      return window.tr(window.lang.chart.period.short.M5);
    case 15:
      return window.tr(window.lang.chart.period.short.M15);
    case 30:
      return window.tr(window.lang.chart.period.short.M30);
    case 60:
      return window.tr(window.lang.chart.period.short.H1);
    case 240:
      return window.tr(window.lang.chart.period.short.H4);
    case 1440:
      return window.tr(window.lang.chart.period.short.D1);
    case 10080:
      return window.tr(window.lang.chart.period.short.W1);
    case 43200:
      return window.tr(window.lang.chart.period.short.MN);
    default:
      return window.tr(window.lang.chart.period.short.Unknown);
  }
}
const Ct = (e) => ({ symbol: 1 & e }),
  vt = (e) => ({ symbol: e[0] });
function kt(e) {
  let t, o, r;
  document.title = t = e[4];
  const n = e[15].default,
    i = me(n, e, e[14], vt);
  return {
    c() {
      ((o = be()), i && i.c());
    },
    m(e, t) {
      (de(e, o, t), i && i.m(e, t), (r = !0));
    },
    p(e, [o]) {
      ((!r || 16 & o) && t !== (t = e[4]) && (document.title = t),
        i &&
          i.p &&
          (!r || 16385 & o) &&
          pe(i, n, e, e[14], r ? we(n, e[14], o, Ct) : ge(e[14]), vt));
    },
    i(e) {
      r || (ae(i, e), (r = !0));
    },
    o(e) {
      (se(i, e), (r = !1));
    },
    d(e) {
      (e && ie(o), i && i.d(e));
    },
  };
}
const $t = " - ";
function St(e, t, o) {
  let r,
    n,
    i,
    s,
    a = he,
    l = () => (a(), (a = fe(b, (e) => o(10, (r = e)))), b),
    c = he,
    d = () => (c(), (c = fe(_, (e) => o(11, (n = e)))), _),
    u = he,
    h = () => (u(), (u = fe(y, (e) => o(12, (i = e)))), y);
  (e.$$.on_destroy.push(() => a()),
    e.$$.on_destroy.push(() => c()),
    e.$$.on_destroy.push(() => u()));
  let { $$slots: m = {}, $$scope: p } = t,
    { ui: g } = t,
    { modules: w } = t;
  const { usersStore: f } = g.users;
  ye(e, f, (e) => o(13, (s = e)));
  let { accountStore: b } = w.account;
  l();
  let { symbolsStore: y } = w.symbols;
  h();
  let { configStore: _ } = w.configs;
  d();
  let C,
    v = "",
    k = "",
    $ = null;
  return (
    (e.$$set = (e) => {
      ("ui" in e && o(6, (g = e.ui)),
        "modules" in e && o(7, (w = e.modules)),
        "$$scope" in e && o(14, (p = e.$$scope)));
    }),
    (e.$$.update = () => {
      (128 & e.$$.dirty && l(o(1, (b = w.account.accountStore))),
        128 & e.$$.dirty && h(o(2, (y = w.symbols.symbolsStore))),
        128 & e.$$.dirty && d(o(3, (_ = w.configs.configStore))),
        8192 & e.$$.dirty && o(9, ($ = s.getCurrentUser())),
        6144 & e.$$.dirty && n.symbol && o(0, (C = i.getBySymbol(n.symbol))),
        2048 & e.$$.dirty && n.period && o(8, (k = _t(n.period))),
        1809 & e.$$.dirty &&
          (o(4, (v = "")),
          o(4, (v += r.login)),
          $ &&
            (o(4, (v += $t + $.server)),
            (r.isDemo || r.isContest) && o(4, (v += ": Demo account"))),
          o(4, (v += `${$t}${r.isHedgedMargin ? "Hedge" : "Netting"}`)),
          r.company && o(4, (v += $t + r.company)),
          (null == C ? void 0 : C.symbol) && k
            ? o(4, (v += `${$t}[${C.symbol}, ${k}]`))
            : (null == C ? void 0 : C.symbol) && !k
              ? o(4, (v += `${$t}[${C.symbol}]`))
              : !(null == C ? void 0 : C.symbol) &&
                k &&
                o(4, (v += `${$t}[${k}]`))));
    }),
    [C, b, y, _, v, f, g, w, k, $, r, n, i, s, p, m]
  );
}
class Et extends oe {
  constructor(e) {
    (super(), re(this, e, St, kt, ne, { ui: 6, modules: 7 }));
  }
}
function At(e) {
  const t = (65280 & e) >> 8,
    o = 255 & e;
  return `#${((16711680 & e) >> 16).toString(16).padStart(2, "0")}${t.toString(16).padStart(2, "0")}${o.toString(16).padStart(2, "0")}`;
}
function Pt(e) {
  return [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e].join(",");
}
function Tt() {}
const xt = [];
class Dt {
  constructor(e = Tt) {
    ((this.subscribers = []),
      (this._systemName = ""),
      (this.stop = null),
      (this.value = this),
      (this.start = e));
  }
  set(e) {
    if (
      ((t = this.value),
      (o = e),
      Boolean(
        t != t
          ? o == o
          : t !== o || (t && "object" == typeof t) || "function" == typeof t,
      ) && ((this.value = e), this.stop))
    ) {
      const e = !xt.length;
      for (let t = 0; t < this.subscribers.length; t += 1) {
        const e = this.subscribers[t];
        (e[1](), xt.push(e, this.value));
      }
      if (e) {
        for (let e = 0; e < xt.length; e += 2) xt[e][0](xt[e + 1]);
        xt.length = 0;
      }
    }
    var t, o;
  }
  update(e) {
    this.set(e(this.value));
  }
  subscribe(e, t = Tt) {
    const o = [e, t];
    return (
      this.subscribers.push(o),
      1 === this.subscribers.length && (this.stop = this.start(this.set) || Tt),
      e(this.value),
      () => {
        const e = this.subscribers.indexOf(o);
        (-1 !== e && this.subscribers.splice(e, 1),
          0 === this.subscribers.length &&
            this.stop &&
            (this.stop(), (this.stop = null)));
      }
    );
  }
  refresh() {
    this.update((e) => e);
  }
}
function Lt(e, t, o) {
  if (!o) return;
  const r = o.value;
  o.value = function (...e) {
    const t = r.apply(this, e);
    return (
      t instanceof Promise ? t.then(() => this.set(this)) : this.set(this),
      t
    );
  };
}
Symbol.toStringTag;
const Ot = {
    background: 16777215,
    border: 15263976,
    bottomPanel: 16250871,
    card: 16777215,
    icon: { default: 5590089, disabled: 13750737 },
    fill: {
      blue: 3245055,
      blueHover: 4953087,
      blueActive: 3045867,
      green: 3584843,
      greenHover: 4308566,
      greenActive: 3054913,
      red: 15354956,
      redHover: 16013657,
      redActive: 16075595,
      lightBlue: 15858175,
      lightBlueHover: 15070463,
      lightBlueActive: 14281204,
      lightRed: 16642545,
      lightRedHover: 16443624,
      lightRedActive: 16376803,
      orange: 15495191,
      orangeHover: 16746803,
      orangeActive: 14707994,
      lightYellow: 16644849,
      total: 15791609,
    },
    text: {
      default: 0,
      secondary: 8421504,
      inverted: 16777215,
      red: 14155776,
      blue: 750067,
      green: 2200372,
      orange: 12408606,
      disabled: 10989752,
    },
    input: {
      fill: { disabled: 16053750 },
      border: { default: 14540253, hover: 8899326, invalid: 12067876 },
    },
    button: { disabled: 13750737 },
    scroll: 10461087,
    chart: {
      backgroundColor: 16777215,
      gridColor: 16250360,
      titleColor: 0,
      descriptionColor: 8421504,
      graph: {
        upColor: 2533018,
        downColor: 15684432,
        lineColor: 45039,
        areaColor: 45039,
      },
      priceLines: {
        bidUp: 2533018,
        bidDown: 15684432,
        bidText: 16777215,
        ask: 13750738,
        askText: 0,
      },
      axis: { borderColor: 10461087, textColor: 0 },
      crosshair: {
        lineColor: 10461087,
        textColor: 16777215,
        textBackgroundColor: 10461087,
      },
      selected: {
        marker: { textColor: 0, backgroundColor: 13097950 },
        diff: { color: 13097950, alpha: 0.3 },
      },
      indicator: { titleColor: 8421504 },
      object: {
        point: {
          hover: { backgroundColor: 16777215, borderColor: 3245055 },
          focus: { backgroundColor: 16777215, borderColor: 4953087 },
          active: { backgroundColor: 16777215, borderColor: 3045867 },
        },
        text: { defaultBorderColor: 3245055 },
      },
      volume: { upColor: 110447, downColor: 16723968, lineColor: 45039 },
    },
    calendar: {
      button: { backgroundColor: 16777215, textColor: 0 },
      group: {
        borderColor: 15263976,
        backgroundColor: 16777215,
        title: {
          textColor: 8421504,
          backgroundColor: 16777215,
          linkColor: 750067,
        },
        event: { titleColor: 0, timeColor: 8421504, descriptionColor: 8421504 },
      },
    },
    tradeMark: {
      buyLine: 3245055,
      buyText: 4560895,
      buyArrow: 3245055,
      buyArrowBorder: 16777215,
      sellLine: 15354956,
      sellText: 16734296,
      sellArrow: 15354956,
      sellArrowBorder: 16777215,
      blurLine: 11908533,
      blurText: 8421504,
      blurArrow: 11908533,
      blurArrowBorder: 16777215,
      slLine: 15495191,
      slText: 16746051,
      slArrow: 15495191,
      slArrowBorder: 16777215,
      tpLine: 3584843,
      tpText: 4900447,
      tpArrow: 3584843,
      tpArrowBorder: 16777215,
    },
    dark: 0,
  },
  It = {
    greenRed: "greenRed",
    blueRed: "blueRed",
    blackWhite: "blackWhite",
    neutral: "neutral",
  },
  jt = {
    zIndex: {
      base: 1,
      mainScreen: 10,
      screenHeader: 30,
      bottomMenu: 40,
      popupScreen: 100,
      contextMenu: 150,
    },
    indent: 8,
    font: {
      family: "Trebuchet MS,Roboto,Ubuntu,sans-serif",
      big: 16,
      size: 14,
      small: 13,
      tiny: 12,
    },
    button: { radius: 3, font: { size: 15 } },
    menu: { shadow: "0px 3px 8px 2px rgba(0, 0, 0, 0.1)" },
    popup: { shadow: "0px 16px 46px 8px rgba(0, 0, 0, 0.12)" },
  },
  Vt = class e extends Dt {
    constructor(t, o, r) {
      (super(),
        (this._systemName = "ThemeStore"),
        (this.THEMES = e.THEMES),
        (this.sizes = jt),
        (this.theme = t),
        (this.mode = o),
        (this.colors = r));
    }
    setMode(e) {
      ((this.mode = e), this.refresh());
    }
    setTheme(e) {
      ((this.theme = e), this.refresh());
    }
    updateColors(e) {
      this.colors = Object.assign(this.colors, e);
    }
    updateSizes(e) {
      this.sizes = Object.assign(this.sizes, e);
    }
  };
Vt.THEMES = {
  [It.greenRed]: {
    id: It.greenRed,
    light: () => Promise.resolve(Ot),
    dark: async () =>
      (await ht(() => Promise.resolve().then(() => Ks), void 0)).default,
  },
  [It.blueRed]: {
    id: It.blueRed,
    light: async () =>
      (await ht(() => Promise.resolve().then(() => Zs), void 0)).default,
    dark: async () =>
      (await ht(() => Promise.resolve().then(() => Gs), void 0)).default,
  },
  [It.blackWhite]: {
    id: It.blackWhite,
    light: async () =>
      (await ht(() => Promise.resolve().then(() => Ys), void 0)).default,
    dark: async () =>
      (await ht(() => Promise.resolve().then(() => Js), void 0)).default,
  },
  [It.neutral]: {
    id: It.neutral,
    light: async () =>
      (await ht(() => Promise.resolve().then(() => Qs), void 0)).default,
    dark: async () =>
      (await ht(() => Promise.resolve().then(() => Xs), void 0)).default,
  },
};
let Mt = Vt;
function Rt(e) {
  const t = e.indexOf("//"),
    o = -1 !== t ? t + 2 : 0;
  return e.slice(o);
}
const Bt = {
  get: function (e) {
    return new URLSearchParams(window.self.location.search).get(e);
  },
  remove: function (e) {
    const t = new URLSearchParams(window.self.location.search);
    (t.delete(e),
      window.self.history.replaceState(
        null,
        "",
        t.size ? `/terminal?${t.toString()}` : "/terminal",
      ));
  },
  stringify: function (e, t = "?") {
    const o = [];
    return (
      Object.keys(e).forEach((t) => {
        const r = e[t];
        "boolean" == typeof r
          ? o.push(`${t}=${Number(r)}`)
          : (("number" == typeof r && !isNaN(r)) || r) && o.push(`${t}=${r}`);
      }),
      o.length ? `${t}${o.join("&")}` : ""
    );
  },
  parse: function (e = window.self.location.search) {
    const t = new URLSearchParams(e),
      o = {};
    return (
      t.forEach((e, t) => {
        o[t] = e;
      }),
      o
    );
  },
};
class Ht {
  constructor() {
    X(this, e, {});
  }
  getItem(t) {
    return Q(this, e)[t] ?? null;
  }
  setItem(t, o) {
    Q(this, e)[t] = o;
  }
  removeItem(t) {
    delete Q(this, e)[t];
  }
  clear() {
    ee(this, e, {});
  }
  get length() {
    return Object.keys(Q(this, e)).length;
  }
  key(t) {
    return Object.keys(Q(this, e))[t] ?? null;
  }
}
e = new WeakMap();
class Nt {
  constructor(e) {
    (X(this, t),
      (function (e) {
        try {
          return !!e && (e.setItem("a", "b"), e.removeItem("a"), !0);
        } catch (t) {
          return !1;
        }
      })(e)
        ? ee(this, t, e)
        : ee(this, t, new Ht()));
  }
  getItem(e) {
    return Q(this, t).getItem(e);
  }
  setItem(e, o) {
    Q(this, t).setItem(e, o);
  }
  removeItem(e) {
    Q(this, t).removeItem(e);
  }
}
t = new WeakMap();
const zt = new Nt(window.localStorage),
  Ut = new Nt(window.sessionStorage);
if ("undefined" != typeof window) {
  const e =
    (null == localStorage ? void 0 : localStorage.getItem("journal")) ?? "10";
  (e[0],
    e[1],
    e[2],
    e[3],
    null == localStorage || localStorage.getItem("f"),
    JSON.parse(
      (null == localStorage ? void 0 : localStorage.getItem("tags")) || "[]",
    ));
}
function Ft(...e) {
  return {
    log: () => {},
    second: () => {},
    repeat: () => {},
    warn: () => {},
    err: () => {},
  };
}
((o = new WeakMap()), (r = new WeakMap()));
let qt = class e {
  constructor(e, t) {
    (X(this, o),
      X(this, r, () => {
        const e = window.getComputedStyle(document.documentElement);
        (this.setVariables(e), this.setColors(e));
      }),
      ee(this, o, t ?? self.document.documentElement),
      (this.themeStore = e));
  }
  static init() {
    let e = 0,
      t = It.greenRed;
    const o = zt.getItem("theme-mode");
    if (1 === Number(o)) e = 1;
    else {
      const t = Bt.get("theme-mode");
      1 === Number(t) && (e = 1);
    }
    const r = zt.getItem("theme");
    if (
      r === It.greenRed ||
      r === It.blueRed ||
      r === It.blackWhite ||
      r === It.neutral
    )
      t = r;
    else {
      const e = (function () {
        switch ((Bt.get("theme") ?? "").toLowerCase()) {
          case It.greenRed.toLowerCase():
            return It.greenRed;
          case It.blueRed.toLowerCase():
            return It.blueRed;
          case It.blackWhite.toLowerCase():
            return It.blackWhite;
          case It.neutral.toLowerCase():
            return It.neutral;
          default:
            return "";
        }
      })();
      (e !== It.greenRed &&
        e !== It.blueRed &&
        e !== It.blackWhite &&
        e !== It.neutral) ||
        (t = e);
    }
    return { theme: t, mode: e };
  }
  static async load(e, t) {
    return 1 === e
      ? { ...(await Mt.THEMES[t].dark()) }
      : { ...(await Mt.THEMES[t].light()) };
  }
  init() {
    const { theme: t, mode: o } = e.init();
    (this.themeStore.subscribe(Q(this, r)), this.setThemeOptions(o, t));
  }
  setMode(e) {
    (zt.setItem("theme-mode", e.toString()),
      this.setThemeOptions(e, this.themeStore.theme));
  }
  setTheme(e) {
    (zt.setItem("theme", e), this.setThemeOptions(this.themeStore.mode, e));
  }
  async setThemeOptions(t, o) {
    const r = await e.load(t, o);
    this.themeStore.updateColors(r);
    const n = window.getComputedStyle(document.documentElement);
    (this.setColors(n),
      this.setVariables(n),
      this.themeStore.setMode(t),
      this.themeStore.setTheme(o));
  }
  setColors(e) {
    const t = this.themeStore.colors;
    [
      ["--color-background", `${At(t.background)}`],
      ["--color-bottomPanel", `${At(t.bottomPanel)}`],
      ["--color-border", `${At(t.border)}`],
      ["--color-card", `${At(t.card)}`],
      ["--color-icon-default", `${At(t.icon.default)}`],
      ["--color-icon-disabled", `${At(t.icon.disabled)}`],
      ["--color-fill-blue", `${At(t.fill.blue)}`],
      ["--color-fill-blueHover", `${At(t.fill.blueHover)}`],
      ["--color-fill-blueActive", `${At(t.fill.blueActive)}`],
      ["--color-fill-red", `${At(t.fill.red)}`],
      ["--color-fill-red-rgb", `${Pt(t.fill.red)}`],
      ["--color-fill-green", `${At(t.fill.green)}`],
      ["--color-fill-green-rgb", `${Pt(t.fill.green)}`],
      ["--color-fill-greenHover", `${At(t.fill.greenHover)}`],
      ["--color-fill-greenActive", `${At(t.fill.greenActive)}`],
      ["--color-fill-red", `${At(t.fill.red)}`],
      ["--color-fill-redHover", `${At(t.fill.redHover)}`],
      ["--color-fill-redActive", `${At(t.fill.redActive)}`],
      ["--color-fill-lightBlue", `${At(t.fill.lightBlue)}`],
      ["--color-fill-lightBlueHover", `${At(t.fill.lightBlueHover)}`],
      ["--color-fill-lightBlueActive", `${At(t.fill.lightBlueActive)}`],
      ["--color-fill-lightRed", `${At(t.fill.lightRed)}`],
      ["--color-fill-lightRedHover", `${At(t.fill.lightRedHover)}`],
      ["--color-fill-lightRedActive", `${At(t.fill.lightRedActive)}`],
      ["--color-fill-orange", `${At(t.fill.orange)}`],
      ["--color-fill-orangeHover", `${At(t.fill.orangeHover)}`],
      ["--color-fill-orangeActive", `${At(t.fill.orangeActive)}`],
      ["--color-fill-lightYellow", `${At(t.fill.lightYellow)}`],
      ["--color-fill-total", `${At(t.fill.total)}`],
      ["--color-text-default", `${At(t.text.default)}`],
      ["--color-text-secondary", `${At(t.text.secondary)}`],
      ["--color-text-inverted", `${At(t.text.inverted)}`],
      ["--color-text-red", `${At(t.text.red)}`],
      ["--color-text-blue", `${At(t.text.blue)}`],
      ["--color-text-green", `${At(t.text.green)}`],
      ["--color-text-orange", `${At(t.text.orange)}`],
      ["--color-text-disabled", `${At(t.text.disabled)}`],
      ["--color-input-fill-disabled", `${At(t.input.fill.disabled)}`],
      ["--color-input-border-default", `${At(t.input.border.default)}`],
      ["--color-input-border-hover", `${At(t.input.border.hover)}`],
      ["--color-input-border-invalid", `${At(t.input.border.invalid)}`],
      ["--color-button-disabled", `${At(t.button.disabled)}`],
      ["--color-scroll", `${At(t.scroll)}`],
      ["--color-dark", t.dark.toString()],
      ["--theme-mode", t.dark ? "dark" : "light"],
      ["--color-chart-title", `${At(t.chart.titleColor)}`],
      ["--color-chart-indicator-title", `${At(t.chart.indicator.titleColor)}`],
    ].forEach(([t, r]) => {
      e.getPropertyValue(t) !== r && Q(this, o).style.setProperty(t, r);
    });
  }
  setVariables(e) {
    const t = this.themeStore.sizes;
    [
      ["--indent", `${t.indent.toString(10)}px`],
      ["--indent2", "calc(var(--indent) * 2)"],
      ["--indent3", "calc(var(--indent) * 3)"],
      ["--indent-one-half", "calc(var(--indent) * 1.5)"],
      ["--indent-half", "calc(var(--indent) * 0.5)"],
      ["--font-family", t.font.family],
      ["--font-size", `${t.font.size}px`],
      ["--font-big", `${t.font.big}px`],
      ["--font-small", `${t.font.small}px`],
      ["--font-tiny", `${t.font.tiny}px`],
      ["--button-radius", `${t.button.radius.toString(10)}px`],
      ["--button-font-size", `${t.button.font.size}px`],
      ["--menu-shadow", t.menu.shadow],
      ["--popup-shadow", t.popup.shadow],
      [
        "--bot-bar-height",
        "calc(var(--indent) * 7 + 1px + env(safe-area-inset-bottom) / 2)",
      ],
      ["--m-screen-header-height", "calc(var(--indent) * 6 + 1px)"],
      ["--history-custom-period-height-mobile", "calc(var(--indent) * 6.5)"],
      ["--history-custom-period-height-desktop", "calc(var(--indent) * 4)"],
      ["--save-left", "env(safe-area-inset-left)"],
      ["--save-right", "env(safe-area-inset-right)"],
      ["--screen-width", "calc(100% - var(--save-left) - var(--save-right))"],
      ["--zIndex-base", `${t.zIndex.base}`],
      ["--zIndex-mainScreen", `${t.zIndex.base}`],
      ["--zIndex-screenHeader", `${t.zIndex.screenHeader}`],
      ["--zIndex-popupScreen", `${t.zIndex.popupScreen}`],
      ["--zIndex-contextMenu", `${t.zIndex.contextMenu}`],
    ].forEach(([t, r]) => {
      e.getPropertyValue(t) !== r && Q(this, o).style.setProperty(t, r);
    });
  }
};
const Wt = class e {
  constructor(e, t, o, r) {
    ((this.themeStore = new Mt(e, t, o)),
      (this.themeController = new qt(this.themeStore, r)));
  }
  static async create(t) {
    const { theme: o, mode: r } = qt.init(),
      n = await qt.load(r, o),
      i = new e(o, r, n, t);
    return (i.themeController.init(), i);
  }
};
((Wt.ThemeStore = Mt), (Wt.ThemeController = qt));
let Kt = Wt;
var Zt = ((e) => (
  (e[(e.Symbol = 0)] = "Symbol"),
  (e[(e.Bid = 1)] = "Bid"),
  (e[(e.Ask = 2)] = "Ask"),
  (e[(e.DailyChange = 3)] = "DailyChange"),
  (e[(e.High = 4)] = "High"),
  (e[(e.Low = 5)] = "Low"),
  (e[(e.Spread = 6)] = "Spread"),
  (e[(e.Time = 7)] = "Time"),
  (e[(e.BidHigh = 8)] = "BidHigh"),
  (e[(e.BidLow = 9)] = "BidLow"),
  (e[(e.AskHigh = 10)] = "AskHigh"),
  (e[(e.AskLow = 11)] = "AskLow"),
  (e[(e.PriceOpen = 12)] = "PriceOpen"),
  (e[(e.PriceClose = 13)] = "PriceClose"),
  (e[(e.Last = 14)] = "Last"),
  (e[(e.LastHigh = 15)] = "LastHigh"),
  (e[(e.LastLow = 16)] = "LastLow"),
  e
))(Zt || {});
const Gt = {},
  Yt = document.createElement("div");
function Jt(
  e,
  t = !1,
  o = 13,
  r = 400,
  n = "Trebuchet MS,Roboto,Ubuntu,sans-serif",
) {
  let i = String(e);
  if (
    (t && (i = i.replace(/\w/g, "0")),
    Gt[o] && Gt[o][r] && Gt[o][r][n] && Gt[o][r][n][i])
  )
    return Gt[o][r][n][i];
  ((Gt[o] = Gt[o] ?? {}),
    (Gt[o][r] = Gt[o][r] ?? {}),
    (Gt[o][r][n] = Gt[o][r][n] ?? {}),
    (Yt.innerText = i),
    (Yt.style.position = "absolute"),
    (Yt.style.fontSize = `${o}px`),
    (Yt.style.fontWeight = String(r)),
    (Yt.style.fontFamily = n),
    document.body.appendChild(Yt));
  const s = Yt.clientWidth;
  return (
    (Gt[o][r][n][i] = s),
    document.body.removeChild(Yt),
    (Yt.innerText = ""),
    s
  );
}
function Qt(e, t) {
  const o = ot(e, t).toFixed(t).split(".");
  return (
    (o[0] = o[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")),
    o.join(".")
  );
}
const Xt = { toMoney: Qt };
var eo = ((e) => (
  (e[(e.Symbol = 0)] = "Symbol"),
  (e[(e.Ticket = 1)] = "Ticket"),
  (e[(e.Time = 2)] = "Time"),
  (e[(e.Type = 3)] = "Type"),
  (e[(e.Volume = 4)] = "Volume"),
  (e[(e.Price = 5)] = "Price"),
  (e[(e.Sl = 6)] = "Sl"),
  (e[(e.Tp = 7)] = "Tp"),
  (e[(e.MarketPrice = 8)] = "MarketPrice"),
  (e[(e.Swap = 9)] = "Swap"),
  (e[(e.Profit = 10)] = "Profit"),
  (e[(e.Comment = 11)] = "Comment"),
  (e[(e.Controls = 12)] = "Controls"),
  e
))(eo || {});
function to(e) {
  switch (e) {
    case 0:
      return { title: window.tr(window.lang.trade.table.columns.symbol) };
    case 1:
      return { title: window.tr(window.lang.trade.table.columns.ticket) };
    case 2:
      return { title: window.tr(window.lang.trade.table.columns.time) };
    case 3:
      return { title: window.tr(window.lang.trade.table.columns.type) };
    case 4:
      return { title: window.tr(window.lang.trade.table.columns.volume) };
    case 5:
      return {
        title: window.tr(window.lang.trade.table.columns.priceOpen),
        description: window.tr(
          window.lang.trade.table.columns.priceOpenDescription,
        ),
      };
    case 6:
      return {
        title: "S / L",
        description: window.tr(window.lang.trade.table.columns.slDescription),
      };
    case 7:
      return {
        title: "T / P",
        description: window.tr(window.lang.trade.table.columns.tpDescription),
      };
    case 8:
      return {
        title: window.tr(window.lang.trade.table.columns.priceClose),
        description: window.tr(
          window.lang.trade.table.columns.priceCloseDescription,
        ),
      };
    case 9:
      return { title: window.tr(window.lang.trade.table.columns.swap) };
    case 10:
      return { title: window.tr(window.lang.trade.table.columns.profit) };
    case 11:
      return { title: window.tr(window.lang.trade.table.columns.comment) };
    default:
      return { title: "" };
  }
}
const oo = [
    { key: 0, name: ["symbol", "symbol"] },
    { visible: 1, key: 1, name: ["id", "order"], level: 3 },
    { visible: 2, key: 2, name: ["timeCreate", "timeSetup"] },
    { visible: 3, key: 3, name: ["typeName", "typeName"] },
    { visible: 4, key: 4, name: ["volumeValue", "volumeValue"], right: !0 },
    { key: 5, name: ["priceOpen", "price"], right: !0 },
    { visible: 6, key: 6, name: ["sl", "sl"], right: !0 },
    { visible: 7, key: 7, name: ["tp", "tp"], right: !0 },
    { visible: 8, key: 8, name: ["priceClose", "priceCurrent"], right: !0 },
    { visible: 9, key: 9, name: ["storage", ""], right: !0, level: 1 },
    { key: 10, name: ["profit", ""], right: !0 },
    { visible: 11, key: 11, name: ["comment", ""], level: 2 },
  ],
  ro = {};
function no(e, t, o) {
  let r = (function (e) {
    const t = e + 16;
    return {
      0: Jt(window.tr(window.lang.trade.table.columns.symbol), !1, 12) + t,
      1: Jt(window.tr(window.lang.trade.table.columns.ticket), !1, 12) + t,
      2: Jt(window.tr(window.lang.trade.table.columns.time), !1, 12) + t,
      3: Jt(window.tr(window.lang.trade.table.columns.type), !1, 12) + t,
      4: Jt(window.tr(window.lang.trade.table.columns.volume), !1, 12) + t,
      5: Jt(window.tr(window.lang.trade.table.columns.priceOpen), !1, 12) + t,
      6: Jt("S / L", !1, 12) + t,
      7: Jt("T / P", !1, 12) + t,
      8: Jt(window.tr(window.lang.trade.table.columns.priceClose), !1, 12) + t,
      9: Jt(window.tr(window.lang.trade.table.columns.swap), !1, 12) + t,
      10: Jt(window.tr(window.lang.trade.table.columns.profit), !1, 12) + t,
      11: Jt(window.tr(window.lang.trade.table.columns.comment), !1, 12) + t,
      12: 40 + t,
    };
  })(o);
  return (
    (r = (function (e, t, o = 0) {
      return (
        t.forEach(({ value: t }) => {
          const r = t;
          ((e[0] = Math.max(Jt(r.symbol) + o, e[0])),
            (e[1] = Math.max(Jt(r.id, !0) + o, e[0])),
            (e[2] = 100),
            (e[3] = Math.max(Jt(r.typeName) + o, e[3])),
            (e[4] = Math.max(Jt(r.volume) + o, e[4])),
            (e[5] = Math.max(Jt(Qt(r.priceOpen, r.digits), !0) + o, e[5])),
            (e[6] = Math.max(Jt(Qt(r.sl, r.digits), !0) + o, e[6])),
            (e[7] = Math.max(Jt(Qt(r.tp, r.digits), !0) + o, e[7])),
            (e[8] = Math.max(Jt(Qt(r.priceClose, r.digits), !0) + o, e[8])),
            (e[9] = Math.max((r.storage ? Jt(r.storage, !0) : 0) + o, e[9])),
            (e[10] = Math.max(
              Jt(Qt(r.profit, r.digitsCurrency), !0) + o,
              e[10],
            )),
            (e[11] = Math.max(Jt(r.comment) + o, e[11])),
            (e[12] = 40 + o));
        }),
        { ...e }
      );
    })(r, e, o)),
    (r = (function (e, t, o = 0) {
      return (
        t.forEach(({ value: t }) => {
          const r = t;
          ((e[0] = Math.max(Jt(r.symbol) + o, e[0])),
            (e[1] = Math.max(Jt(r.order, !0) + o, e[0])),
            (e[2] = 100),
            (e[3] = Math.max(Jt(r.typeName) + o, e[3])),
            (e[4] = Math.max(Jt(r.volume) + o, e[4])),
            (e[5] = Math.max(Jt(Qt(r.price, r.digits), !0) + o, e[5])),
            (e[6] = Math.max(
              (r.sl ? Jt(Qt(r.sl, r.digits), !0) : 0) + o,
              e[6],
            )),
            (e[7] = Math.max(
              (r.tp ? Jt(Qt(r.tp, r.digits), !0) : 0) + o,
              e[7],
            )),
            (e[8] = Math.max(Jt(Qt(r.priceCurrent, r.digits), !0) + o, e[8])),
            (e[9] = Math.max(o, e[9])),
            (e[10] = Math.max(Jt(r.state) + o, e[10])),
            (e[11] = Math.max(Jt(r.comment) + o, e[11])),
            (e[12] = 40 + o));
        }),
        e
      );
    })(r, t, o)),
    r
  );
}
oo.forEach((e) => {
  ro[e.key] = e;
});
const io = Object.freeze(
    "January February March April May June July August September October November December".split(
      " ",
    ),
  ),
  so = Object.freeze(
    "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
  ),
  ao = Object.freeze(
    "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
  ),
  lo = Object.freeze("Sun Mon Tue Wed Thu Fri Sat".split(" "));
function co(e, t = "DD.MM.YY hhhh:mm:ss", o = !0) {
  const r = new Date(e),
    n = o,
    i = n ? r.getUTCDate() : r.getDate(),
    s = n ? r.getUTCMonth() : r.getMonth(),
    a = n ? r.getUTCFullYear() : r.getFullYear(),
    l = n ? r.getUTCMinutes() : r.getMinutes(),
    c = n ? r.getUTCSeconds() : r.getSeconds(),
    d = n ? r.getUTCHours() : r.getHours(),
    u = n ? r.getUTCDay() : r.getDay(),
    h = n ? r.getUTCMilliseconds() : r.getMilliseconds();
  function m(e, o) {
    let r,
      n = 4;
    for (; n > 1; ) {
      if (((r = new Array(n + 1).join(o)), t.substring(e, e + n) === r))
        return r;
      n -= 1;
    }
    return o;
  }
  const p = new Map();
  (p.set("sss", h.toString().padStart(3, "0")),
    p.set("ss", c.toString().padStart(2, "0")),
    p.set("s", c),
    p.set("mm", l.toString().padStart(2, "0")),
    p.set("m", l),
    p.set("hhhh", d.toString().padStart(2, "0")),
    p.set("hhh", d),
    p.set(
      "hh",
      d > 12
        ? `${(24 - d).toString().padStart(2, "0")}PM`
        : `${d.toString().padStart(2, "0")}AM`,
    ),
    p.set("h", d > 12 ? 24 - d + "PM" : `${d}AM`),
    p.set("DDDD", ao[u]),
    p.set("DDD", lo[u]),
    p.set("DD", i.toString().padStart(2, "0")),
    p.set("D", i),
    p.set("MMMM", io[s]),
    p.set("MMM", so[s]),
    p.set("MM", (s + 1).toString().padStart(2, "0")),
    p.set("M", s + 1),
    p.set("YY", a),
    p.set("Y", a.toString().substring(2)));
  let g,
    w,
    f = "";
  for (let b = 0, y = t.length; b < y; b++)
    ((g = t.charAt(b)),
      (w = m(b, g)),
      p.has(w) ? ((f += p.get(w)), (b += w.length - 1)) : (f += g));
  return f;
}
var uo = ((e) => (
  (e.TimeOpen = "timeOpen"),
  (e.Id = "id"),
  (e.Type = "type"),
  (e.VolumeValue = "volumeValue"),
  (e.Symbol = "symbol"),
  (e.PriceOpen = "priceOpen"),
  (e.Sl = "sl"),
  (e.Tp = "tp"),
  (e.TimeClose = "timeClose"),
  (e.PriceClose = "priceClose"),
  (e.Commission = "commission"),
  (e.CommissionFee = "commissionFee"),
  (e.Storage = "storage"),
  (e.Profit = "profit"),
  (e.Comment = "comment"),
  e
))(uo || {});
function ho(e) {
  switch (e) {
    case "timeOpen":
      return {
        title: window.tr(window.lang.trade.history.positions.columns.timeOpen),
        description: window.tr(
          window.lang.trade.history.positions.columns.timeOpenDescription,
        ),
      };
    case "id":
      return {
        title: window.tr(window.lang.trade.history.positions.columns.ticket),
      };
    case "type":
      return {
        title: window.tr(window.lang.trade.history.positions.columns.type),
      };
    case "volumeValue":
      return {
        title: window.tr(window.lang.trade.history.positions.columns.volume),
      };
    case "symbol":
      return {
        title: window.tr(window.lang.trade.history.positions.columns.symbol),
      };
    case "priceOpen":
      return {
        title: window.tr(window.lang.trade.history.positions.columns.priceOpen),
        description: window.tr(
          window.lang.trade.history.positions.columns.priceOpenDescription,
        ),
      };
    case "sl":
      return {
        title: "S / L",
        description: window.tr(
          window.lang.trade.history.positions.columns.slDescription,
        ),
      };
    case "tp":
      return {
        title: "T / P",
        description: window.tr(
          window.lang.trade.history.positions.columns.tpDescription,
        ),
      };
    case "timeClose":
      return {
        title: window.tr(window.lang.trade.history.positions.columns.timeClose),
        description: window.tr(
          window.lang.trade.history.positions.columns.timeCloseDescription,
        ),
      };
    case "priceClose":
      return {
        title: window.tr(
          window.lang.trade.history.positions.columns.priceClose,
        ),
        description: window.tr(
          window.lang.trade.history.positions.columns.priceCloseDescription,
        ),
      };
    case "commission":
      return {
        title: window.tr(
          window.lang.trade.history.positions.columns.commission,
        ),
      };
    case "commissionFee":
      return {
        title: window.tr(window.lang.trade.history.positions.columns.fee),
      };
    case "storage":
      return {
        title: window.tr(window.lang.trade.history.positions.columns.swap),
      };
    case "profit":
      return {
        title: window.tr(window.lang.trade.history.positions.columns.profit),
      };
    case "comment":
      return {
        title: window.tr(window.lang.trade.history.positions.columns.comment),
      };
    default:
      return { title: "" };
  }
}
const mo = [
  { key: "timeOpen", left: !0, mobileSorting: !0 },
  { key: "id", level: 3, mobileSorting: !0 },
  { key: "type", mobileSorting: !0 },
  { key: "volumeValue", mobileSorting: !0 },
  { key: "symbol", left: !0, showAlways: !0, mobileSorting: !0 },
  { key: "priceOpen" },
  { key: "sl" },
  { key: "tp" },
  { key: "timeClose", mobileSorting: !0 },
  { key: "priceClose" },
  { key: "commission", level: 2 },
  { key: "commissionFee", level: 2 },
  { key: "storage", level: 1 },
  { key: "profit", showAlways: !0, mobileSorting: !0 },
  { key: "comment", level: 1 },
];
var po = ((e) => (
  (e.TimeSetup = "timeSetup"),
  (e.Order = "order"),
  (e.Symbol = "symbol"),
  (e.Type = "type"),
  (e.VolumeValue = "volumeValue"),
  (e.Price = "price"),
  (e.Sl = "sl"),
  (e.Tp = "tp"),
  (e.TimeDone = "timeDone"),
  (e.State = "state"),
  (e.Comment = "comment"),
  e
))(po || {});
function go(e) {
  switch (e) {
    case "timeSetup":
      return {
        title: window.tr(window.lang.trade.history.orders.columns.timeSetup),
        description: window.tr(
          window.lang.trade.history.orders.columns.timeSetupDescription,
        ),
      };
    case "order":
      return {
        title: window.tr(window.lang.trade.history.orders.columns.ticket),
      };
    case "symbol":
      return {
        title: window.tr(window.lang.trade.history.orders.columns.symbol),
      };
    case "type":
      return {
        title: window.tr(window.lang.trade.history.orders.columns.type),
      };
    case "volumeValue":
      return {
        title: window.tr(window.lang.trade.history.orders.columns.volume),
      };
    case "price":
      return {
        title: window.tr(window.lang.trade.history.orders.columns.price),
      };
    case "sl":
      return {
        title: "S / L",
        description: window.tr(
          window.lang.trade.history.orders.columns.slDescription,
        ),
      };
    case "tp":
      return {
        title: "T / P",
        description: window.tr(
          window.lang.trade.history.orders.columns.tpDescription,
        ),
      };
    case "timeDone":
      return {
        title: window.tr(window.lang.trade.history.orders.columns.timeDone),
        description: window.tr(
          window.lang.trade.history.orders.columns.timeDoneDescription,
        ),
      };
    case "state":
      return {
        title: window.tr(window.lang.trade.history.orders.columns.state),
      };
    case "comment":
      return {
        title: window.tr(window.lang.trade.history.orders.columns.comment),
      };
    default:
      return { title: "" };
  }
}
const wo = [
  { key: "timeSetup", left: !0, mobileSorting: !0 },
  { key: "order", level: 2, mobileSorting: !0 },
  { key: "symbol", left: !0, showAlways: !0, mobileSorting: !0 },
  { key: "type", showAlways: !0, mobileSorting: !0 },
  { key: "volumeValue", mobileSorting: !0 },
  { key: "price", showAlways: !0 },
  { key: "sl" },
  { key: "tp" },
  { key: "timeDone", mobileSorting: !0 },
  { key: "state", mobileSorting: !0 },
  { key: "comment", level: 1 },
];
var fo = ((e) => (
  (e.TimeCreate = "timeCreate"),
  (e.Deal = "deal"),
  (e.Order = "order"),
  (e.Symbol = "symbol"),
  (e.Action = "action"),
  (e.Entry = "entry"),
  (e.Volume = "volume"),
  (e.PriceClose = "priceClose"),
  (e.Commission = "commission"),
  (e.CommissionFee = "commissionFee"),
  (e.Storage = "storage"),
  (e.Profit = "profit"),
  (e.Comment = "comment"),
  e
))(fo || {});
function bo(e) {
  switch (e) {
    case "timeCreate":
      return window.tr(window.lang.trade.history.deals.columns.time);
    case "deal":
      return window.tr(window.lang.trade.history.deals.columns.ticket);
    case "order":
      return window.tr(window.lang.trade.history.deals.columns.order);
    case "symbol":
      return window.tr(window.lang.trade.history.deals.columns.symbol);
    case "action":
      return window.tr(window.lang.trade.history.deals.columns.type);
    case "entry":
      return window.tr(window.lang.trade.history.deals.columns.direction);
    case "volume":
      return window.tr(window.lang.trade.history.deals.columns.volume);
    case "priceClose":
      return window.tr(window.lang.trade.history.deals.columns.price);
    case "commission":
      return window.tr(window.lang.trade.history.deals.columns.commission);
    case "commissionFee":
      return window.tr(window.lang.trade.history.deals.columns.fee);
    case "storage":
      return window.tr(window.lang.trade.history.deals.columns.swap);
    case "profit":
      return window.tr(window.lang.trade.history.deals.columns.profit);
    case "comment":
      return window.tr(window.lang.trade.history.deals.columns.comment);
    default:
      return "";
  }
}
const yo = [
  { key: "timeCreate", left: !0, mobileSorting: !0 },
  { key: "deal", level: 3, mobileSorting: !0 },
  { key: "order" },
  { key: "symbol", left: !0, showAlways: !0, mobileSorting: !0 },
  { key: "action", mobileSorting: !0 },
  { key: "entry" },
  { key: "volume", mobileSorting: !0 },
  { key: "priceClose" },
  { key: "commission", level: 2 },
  { key: "commissionFee", level: 2 },
  { key: "storage" },
  { key: "profit", showAlways: !0, mobileSorting: !0 },
  { key: "comment", level: 1 },
];
function _o(e) {
  return e ? co(new Date(e), "YY.MM.DD hhhh:mm:ss") : "";
}
function Co(e) {
  return {
    [uo.TimeOpen]: Jt(ho(uo.TimeOpen).title, !1, 12) + e,
    [uo.Id]: Jt(ho(uo.Id).title, !1, 12) + e,
    [uo.Type]: Jt(ho(uo.Type).title, !1, 12) + e,
    [uo.VolumeValue]: Jt(ho(uo.VolumeValue).title, !1, 12) + e,
    [uo.Symbol]: Jt(ho(uo.Symbol).title, !1, 12) + e,
    [uo.PriceOpen]: Jt(ho(uo.PriceOpen).title, !1, 12) + e,
    [uo.Sl]: Jt(ho(uo.Sl).title, !1, 12) + e,
    [uo.Tp]: Jt(ho(uo.Tp).title, !1, 12) + e,
    [uo.TimeClose]: Jt(ho(uo.TimeClose).title, !1, 12) + e,
    [uo.PriceClose]: Jt(ho(uo.PriceClose).title, !1, 12) + e,
    [uo.Commission]: Jt(ho(uo.Commission).title, !1, 12) + e,
    [uo.CommissionFee]: Jt(ho(uo.CommissionFee).title, !1, 12) + e,
    [uo.Storage]: Jt(ho(uo.Storage).title, !1, 12) + e,
    [uo.Profit]: Jt(ho(uo.Profit).title, !1, 12) + e,
    [uo.Comment]: Jt(ho(uo.Comment).title, !1, 12) + e,
  };
}
function vo(e, t, o = 0) {
  const r = { ...Co(o) };
  return (
    t.forEach(({ value: t }) => {
      ((r[uo.TimeOpen] = Math.max(Jt(_o(t.timeOpen), !0) + o, r[uo.TimeOpen])),
        (r[uo.Id] = Math.max(Jt(t.id, !0) + o, r[uo.Id])),
        (r[uo.Type] = Math.max(Jt(e(t.type)) + o, r[uo.Type])),
        (r[uo.VolumeValue] = Math.max(Jt(t.volume, !0) + o, r[uo.VolumeValue])),
        (r[uo.Symbol] = Math.max(Jt(t.symbol) + o, r[uo.Symbol])),
        (r[uo.PriceOpen] = Math.max(
          Jt(Qt(t.priceOpen, t.digits), !0) + o,
          r[uo.PriceOpen],
        )),
        (r[uo.Sl] = Math.max(
          Jt(t.sl ? Qt(t.sl, t.digits) : "", !0) + o,
          r[uo.Sl],
        )),
        (r[uo.Tp] = Math.max(
          Jt(t.tp ? Qt(t.tp, t.digits) : "", !0) + o,
          r[uo.Tp],
        )),
        (r[uo.TimeClose] = Math.max(
          Jt(_o(t.timeClose), !0) + o,
          r[uo.TimeClose],
        )),
        (r[uo.PriceClose] = Math.max(
          Jt(Qt(t.priceClose, t.digits), !0) + o,
          r[uo.PriceClose],
        )),
        (r[uo.Commission] = Math.max(
          Jt(t.commission ? Qt(t.commission, t.digitsCurrency) : "", !0) + o,
          r[uo.Commission],
        )),
        (r[uo.CommissionFee] = Math.max(
          Jt(t.commissionFee ? Qt(t.commissionFee, t.digitsCurrency) : "", !0) +
            o,
          r[uo.CommissionFee],
        )),
        (r[uo.Storage] = Math.max(
          Jt(t.storage ? Qt(t.storage, t.digitsCurrency) : "", !0) + o,
          r[uo.Storage],
        )),
        (r[uo.Profit] = Math.max(
          Jt(Qt(t.profit ?? 0, t.digitsCurrency), !0) + o,
          r[uo.Profit],
        )),
        (r[uo.Comment] = Math.max(Jt(t.comment) + o, r[uo.Comment])));
    }),
    r
  );
}
function ko() {
  return {
    [uo.TimeOpen]: !0,
    [uo.Id]: !0,
    [uo.Type]: !0,
    [uo.VolumeValue]: !0,
    [uo.PriceOpen]: !0,
    [uo.Sl]: !0,
    [uo.Tp]: !0,
    [uo.TimeClose]: !0,
    [uo.PriceClose]: !0,
    [uo.Commission]: !0,
    [uo.CommissionFee]: !0,
    [uo.Storage]: !0,
  };
}
function $o(e) {
  return {
    [po.TimeSetup]: Jt(go(po.TimeSetup).title, !1, 12) + e,
    [po.Order]: Jt(go(po.Order).title, !1, 12) + e,
    [po.Symbol]: Jt(go(po.Symbol).title, !1, 12) + e,
    [po.Type]: Jt(go(po.Type).title, !1, 12) + e,
    [po.VolumeValue]: Jt(go(po.VolumeValue).title, !1, 12) + e,
    [po.Price]: Jt(go(po.Price).title, !1, 12) + e,
    [po.Sl]: Jt(go(po.Sl).title, !1, 12) + e,
    [po.Tp]: Jt(go(po.Tp).title, !1, 12) + e,
    [po.TimeDone]: Jt(go(po.TimeDone).title, !1, 12) + e,
    [po.State]: Jt(go(po.State).title, !1, 12) + e,
    [po.Comment]: Jt(go(po.Comment).title, !1, 12) + e,
  };
}
function So(e, t, o = 0) {
  const r = { ...$o(o) };
  return (
    t.forEach(({ value: t }) => {
      ((r[po.TimeSetup] = Math.max(
        Jt(_o(t.timeSetup), !0) + o,
        r[po.TimeSetup],
      )),
        (r[po.Order] = Math.max(Jt(t.order, !0) + o, r[po.Order])),
        (r[po.Symbol] = Math.max(Jt(t.symbol) + o, r[po.Symbol])),
        (r[po.Type] = Math.max(Jt(e.printType(t.type)) + o, r[po.Type])),
        (r[po.VolumeValue] = Math.max(
          Jt(t.volumeSize, !0) + o,
          r[po.VolumeValue],
        )),
        (r[po.Price] = Math.max(
          Jt(t.price ? Qt(t.price, t.digits) : "", !0) + o,
          r[po.Price],
        )),
        (r[po.Sl] = Math.max(
          Jt(t.sl ? Qt(t.sl, t.digits) : "", !0) + o,
          r[po.Sl],
        )),
        (r[po.Tp] = Math.max(
          Jt(t.tp ? Qt(t.tp, t.digits) : "", !0) + o,
          r[po.Tp],
        )),
        (r[po.TimeDone] = Math.max(Jt(_o(t.timeDone), !0) + o, r[po.TimeDone])),
        (r[po.State] = Math.max(
          Jt(e.printOrderStatus(t.state)) + o,
          r[po.State],
        )),
        (r[po.Comment] = Math.max(Jt(t.comment) + o, r[po.Comment])));
    }),
    r
  );
}
function Eo() {
  return {
    [po.TimeSetup]: !0,
    [po.Order]: !0,
    [po.VolumeValue]: !0,
    [po.Sl]: !0,
    [po.Tp]: !0,
    [po.TimeDone]: !0,
    [po.State]: !0,
    [po.Comment]: !0,
  };
}
function Ao(e) {
  return {
    [fo.TimeCreate]: Jt(bo(fo.TimeCreate), !1, 12) + e,
    [fo.Deal]: Jt(bo(fo.Deal), !1, 12) + e,
    [fo.Order]: Jt(bo(fo.Order), !1, 12) + e,
    [fo.Symbol]: Jt(bo(fo.Symbol), !1, 12) + e,
    [fo.Action]: Jt(bo(fo.Action), !1, 12) + e,
    [fo.Entry]: Jt(bo(fo.Entry), !1, 12) + e,
    [fo.Volume]: Jt(bo(fo.Volume), !1, 12) + e,
    [fo.PriceClose]: Jt(bo(fo.PriceClose), !1, 12) + e,
    [fo.Commission]: Jt(bo(fo.Commission), !1, 12) + e,
    [fo.CommissionFee]: Jt(bo(fo.CommissionFee), !1, 12) + e,
    [fo.Storage]: Jt(bo(fo.Storage), !1, 12) + e,
    [fo.Profit]: Jt(bo(fo.Profit), !1, 12) + e,
    [fo.Comment]: Jt(bo(fo.Comment), !1, 12) + e,
  };
}
function Po(e, t, o = 0) {
  const r = { ...Ao(o) };
  return (
    t.forEach(({ value: t }) => {
      ((r[fo.TimeCreate] = Math.max(
        Jt(_o(t.timeCreate), !0) + o,
        r[fo.TimeCreate],
      )),
        (r[fo.Deal] = Math.max(Jt(t.deal, !0) + o, r[fo.Deal])),
        (r[fo.Order] = Math.max(Jt(t.order, !0) + o, r[fo.Order])),
        (r[fo.Symbol] = Math.max(Jt(t.symbol) + o, r[fo.Symbol])),
        (r[fo.Action] = Math.max(Jt(e(t.action)) + o, r[fo.Action])),
        (r[fo.Entry] = Math.max(Jt(t.entry) + o, r[fo.Entry])),
        (r[fo.Volume] = Math.max(Jt(t.volume) + o, r[fo.Volume])),
        (r[fo.PriceClose] = Math.max(
          Jt(Qt(t.priceOpen, t.digits), !0) + o,
          r[fo.PriceClose],
        )),
        (r[fo.Commission] = Math.max(
          Jt(t.commission ? Qt(t.commission, t.digitsCurrency) : "", !0) + o,
          r[fo.Commission],
        )),
        (r[fo.CommissionFee] = Math.max(
          Jt(t.commissionFee ? Qt(t.commissionFee, t.digitsCurrency) : "", !0) +
            o,
          r[fo.CommissionFee],
        )),
        (r[fo.Storage] = Math.max(
          Jt(t.storage ? Qt(t.storage, t.digitsCurrency) : "", !0) + o,
          r[fo.Storage],
        )),
        (r[fo.Profit] = Math.max(
          Jt(Qt(t.profit ?? 0, t.digitsCurrency), !0) + o,
          r[fo.Profit],
        )),
        (r[fo.Comment] = Math.max(Jt(t.comment) + o, r[fo.Comment])));
    }),
    r
  );
}
function To() {
  return {
    [fo.TimeCreate]: !0,
    [fo.Deal]: !0,
    [fo.Order]: !0,
    [fo.Action]: !0,
    [fo.Entry]: !0,
    [fo.Volume]: !0,
    [fo.PriceClose]: !0,
    [fo.Commission]: !0,
    [fo.CommissionFee]: !0,
    [fo.Storage]: !0,
    [fo.Comment]: !0,
  };
}
const xo = "_name",
  Do = {
    layout: "layout",
    uiSettings: "ui_settings",
    users: "users",
    objects: "objects",
    indicators: "indicators",
    indicatorsByOrder: "indicatorsByOrder",
    configs: "configs",
    tradeBars: "trade_bars",
    marks: "marks",
    watchlist: "watchlist",
    userSettings: "user_settings",
    charts: "charts",
  };
var Lo = Object.defineProperty,
  Oo = Object.getOwnPropertyDescriptor,
  Io = (e, t, o, r) => {
    for (var n, i = Oo(t, o), s = e.length - 1; s >= 0; s--)
      (n = e[s]) && (i = n(t, o, i) || i);
    return (i && Lo(t, o, i), i);
  };
function jo() {
  return {
    [eo.Ticket]: !0,
    [eo.Time]: !0,
    [eo.Type]: !0,
    [eo.Volume]: !0,
    [eo.Sl]: !0,
    [eo.Tp]: !0,
    [eo.MarketPrice]: !0,
    [eo.Swap]: !0,
    [eo.Comment]: !0,
    [eo.Controls]: !0,
  };
}
class Vo extends Dt {
  constructor() {
    (super(),
      (this._systemName = Do.uiSettings),
      (this.firstChartDate = 0),
      (this.controlsOnChart = !0),
      (this.notifications = !0),
      (this.ohlc = !1),
      (this.grid = !0),
      (this.watchlistColumnsWidth = {}),
      (this.watchlistColumnsVisible = {
        [Zt.Symbol]: !0,
        [Zt.Bid]: !0,
        [Zt.Ask]: !0,
        [Zt.DailyChange]: !0,
        [Zt.High]: !1,
        [Zt.Low]: !1,
        [Zt.Spread]: !1,
        [Zt.Time]: !1,
        [Zt.BidHigh]: !1,
        [Zt.BidLow]: !1,
        [Zt.AskHigh]: !1,
        [Zt.AskLow]: !1,
        [Zt.PriceOpen]: !1,
        [Zt.PriceClose]: !1,
        [Zt.Last]: !1,
        [Zt.LastHigh]: !1,
        [Zt.LastLow]: !1,
      }),
      (this.quotesColumnsVisible = jo()),
      (this.watchlistSortDirection = 0),
      (this.historyPositionsColumnsVisible = ko()),
      (this.historyPositionsSortDirection = 0),
      (this.historyPositionsHorizontalScroll = !1),
      (this.historyOrdersColumnsVisible = Eo()),
      (this.historyOrdersSortDirection = 0),
      (this.historyOrdersHorizontalScroll = !1),
      (this.historyDealsColumnsVisible = To()),
      (this.historyDealsSortDirection = 0),
      (this.historyDealsHorizontalScroll = !1),
      (this.debugMode = !1),
      (this.quickTrade = !1),
      (this.quickTradePosition = !0),
      (this.crosshair = !1),
      (this.popupSizes = {}),
      (this.askPrice = !1),
      (this.barCountdown = !1),
      (this.chartMode = 0),
      (this.showCalendar = !1),
      (this.marketWatchTableView = !1));
  }
  resetQuotesColumsVisible() {
    this.quotesColumnsVisible = jo();
  }
  setSettings(e) {
    ("boolean" == typeof e.showCalendar && (this.showCalendar = e.showCalendar),
      "boolean" == typeof e.marketWatchTableView &&
        (this.marketWatchTableView = e.marketWatchTableView),
      "number" == typeof e.chartMode && (this.chartMode = e.chartMode),
      "number" == typeof e.firstChartDate &&
        (this.firstChartDate = e.firstChartDate),
      "boolean" == typeof e.controlsOnChart &&
        (this.controlsOnChart = e.controlsOnChart),
      "boolean" == typeof e.notifications &&
        (this.notifications = e.notifications),
      "boolean" == typeof e.ohlc && (this.ohlc = e.ohlc),
      "boolean" == typeof e.grid && (this.grid = e.grid),
      "boolean" == typeof e.debugMode && (this.debugMode = e.debugMode),
      "boolean" == typeof e.quickTrade && (this.quickTrade = e.quickTrade),
      "boolean" == typeof e.quickTradePosition &&
        (this.quickTradePosition = e.quickTradePosition),
      "boolean" == typeof e.askPrice && (this.askPrice = e.askPrice),
      "boolean" == typeof e.barCountdown && (this.barCountdown = e.barCountdown),
      this.timezone !== e.timezone &&
        "string" == typeof e.timezone &&
        (this.timezone = e.timezone),
      "boolean" == typeof e.crosshair && (this.crosshair = e.crosshair),
      "object" == typeof e.watchlistColumnsWidth &&
        (this.watchlistColumnsWidth = {
          ...this.watchlistColumnsWidth,
          ...e.watchlistColumnsWidth,
        }),
      e.watchlistColumnsVisible &&
        (this.watchlistColumnsVisible = {
          ...this.watchlistColumnsVisible,
          ...e.watchlistColumnsVisible,
        }),
      e.quotesColumnsVisible &&
        (this.quotesColumnsVisible = {
          ...this.quotesColumnsVisible,
          ...e.quotesColumnsVisible,
        }),
      (this.watchlistSortBy = e.watchlistSortBy ?? this.watchlistSortBy),
      (this.watchlistSortDirection =
        e.watchlistSortDirection ?? this.watchlistSortDirection),
      e.historyPositionsColumnsVisible &&
        (this.historyPositionsColumnsVisible = {
          ...this.historyPositionsColumnsVisible,
          ...e.historyPositionsColumnsVisible,
        }),
      (this.historyPositionsSortBy =
        e.historyPositionsSortBy ?? this.historyPositionsSortBy),
      (this.historyPositionsSortDirection =
        e.historyPositionsSortDirection ?? this.historyPositionsSortDirection),
      "boolean" == typeof e.historyPositionsHorizontalScroll &&
        (this.historyPositionsHorizontalScroll =
          e.historyPositionsHorizontalScroll),
      e.historyOrdersColumnsVisible &&
        (this.historyOrdersColumnsVisible = {
          ...this.historyOrdersColumnsVisible,
          ...e.historyOrdersColumnsVisible,
        }),
      (this.historyOrdersSortBy =
        e.historyOrdersSortBy ?? this.historyOrdersSortBy),
      (this.historyOrdersSortDirection =
        e.historyOrdersSortDirection ?? this.historyOrdersSortDirection),
      "boolean" == typeof e.historyOrdersHorizontalScroll &&
        (this.historyOrdersHorizontalScroll = e.historyOrdersHorizontalScroll),
      e.historyDealsColumnsVisible &&
        (this.historyDealsColumnsVisible = {
          ...this.historyDealsColumnsVisible,
          ...e.historyDealsColumnsVisible,
        }),
      (this.historyDealsSortBy =
        e.historyDealsSortBy ?? this.historyDealsSortBy),
      (this.historyDealsSortDirection =
        e.historyDealsSortDirection ?? this.historyDealsSortDirection),
      "boolean" == typeof e.historyDealsHorizontalScroll &&
        (this.historyDealsHorizontalScroll = e.historyDealsHorizontalScroll),
      "object" == typeof e.popupSizes && (this.popupSizes = e.popupSizes));
  }
  resetHistoryPositionsColumnsVisible() {
    this.setSettings({ historyPositionsColumnsVisible: ko() });
  }
  resetHistoryOrdersColumnsVisible() {
    this.setSettings({ historyOrdersColumnsVisible: Eo() });
  }
  resetHistoryDealsColumnsVisible() {
    this.setSettings({ historyDealsColumnsVisible: To() });
  }
  reset(e) {
    (delete e.timezone, this.setSettings(e));
  }
}
(Io([Lt], Vo.prototype, "resetQuotesColumsVisible"),
  Io([Lt], Vo.prototype, "setSettings"));
const Mo = [
    { tz: "UTC", offset: 0 },
    ...(function e(t) {
      const o = [];
      return (
        Object.values(t).forEach((t) => {
          if ("object" == typeof t) {
            const r = e(t);
            o.push(...r);
          } else o.push(t);
        }),
        o
      );
    })({
      africa: {
        cairo: "Africa/Cairo",
        casablanca: "Africa/Casablanca",
        johannesburg: "Africa/Johannesburg",
        lagos: "Africa/Lagos",
        nairobi: "Africa/Nairobi",
        tunis: "Africa/Tunis",
      },
      america: {
        anchorage: "America/Anchorage",
        bogota: "America/Bogota",
        buenosAires: "America/Buenos_Aires",
        caracas: "America/Caracas",
        chicago: "America/Chicago",
        denver: "America/Denver",
        elSalvador: "America/El_Salvador",
        juneau: "America/Juneau",
        lima: "America/Lima",
        losAngeles: "America/Los_Angeles",
        mexicoCity: "America/Mexico_City",
        newYork: "America/New_York",
        phoenix: "America/Phoenix",
        santiago: "America/Santiago",
        saoPaulo: "America/Sao_Paulo",
        toronto: "America/Toronto",
        vancouver: "America/Vancouver",
      },
      asia: {
        almaty: "Asia/Almaty",
        ashgabat: "Asia/Ashgabat",
        bahrain: "Asia/Bahrain",
        bangkok: "Asia/Bangkok",
        calcutta: "Asia/Calcutta",
        colombo: "Asia/Colombo",
        dhaka: "Asia/Dhaka",
        dubai: "Asia/Dubai",
        hongKong: "Asia/Hong_Kong",
        jakarta: "Asia/Jakarta",
        jerusalem: "Asia/Jerusalem",
        karachi: "Asia/Karachi",
        katmandu: "Asia/Katmandu",
        kuwait: "Asia/Kuwait",
        manila: "Asia/Manila",
        muscat: "Asia/Muscat",
        nicosia: "Asia/Nicosia",
        qatar: "Asia/Qatar",
        rangoon: "Asia/Rangoon",
        riyadh: "Asia/Riyadh",
        saigon: "Asia/Saigon",
        seoul: "Asia/Seoul",
        shanghai: "Asia/Shanghai",
        singapore: "Asia/Singapore",
        taipei: "Asia/Taipei",
        tehran: "Asia/Tehran",
        tokyo: "Asia/Tokyo",
      },
      atlantic: { reykjavik: "Atlantic/Reykjavik" },
      australia: {
        adelaide: "Australia/Adelaide",
        brisbane: "Australia/Brisbane",
        perth: "Australia/Perth",
        sydney: "Australia/Sydney",
      },
      europe: {
        amsterdam: "Europe/Amsterdam",
        athens: "Europe/Athens",
        belgrade: "Europe/Belgrade",
        berlin: "Europe/Berlin",
        bratislava: "Europe/Bratislava",
        brussels: "Europe/Brussels",
        bucharest: "Europe/Bucharest",
        budapest: "Europe/Budapest",
        copenhagen: "Europe/Copenhagen",
        dublin: "Europe/Dublin",
        helsinki: "Europe/Helsinki",
        istanbul: "Europe/Istanbul",
        lisbon: "Europe/Lisbon",
        london: "Europe/London",
        luxembourg: "Europe/Luxembourg",
        madrid: "Europe/Madrid",
        malta: "Europe/Malta",
        moscow: "Europe/Moscow",
        oslo: "Europe/Oslo",
        paris: "Europe/Paris",
        prague: "Europe/Prague",
        riga: "Europe/Riga",
        rome: "Europe/Rome",
        stockholm: "Europe/Stockholm",
        tallinn: "Europe/Tallinn",
        vienna: "Europe/Vienna",
        vilnius: "Europe/Vilnius",
        warsaw: "Europe/Warsaw",
        zurich: "Europe/Zurich",
      },
      pacific: {
        auckland: "Pacific/Auckland",
        chatham: "Pacific/Chatham",
        fakaofo: "Pacific/Fakaofo",
        honolulu: "Pacific/Honolulu",
        norfolk: "Pacific/Norfolk",
      },
    })
      .map((e) => ({ tz: e, offset: Bo(e) }))
      .sort((e, t) => e.offset - t.offset),
  ],
  Ro = {};
function Bo(e) {
  const t = new Date(),
    o = t.toLocaleString("en-US", { timeZone: e }),
    r = t.toLocaleString("en-US"),
    n = (Date.parse(r) - Date.parse(o)) / 6e4 + t.getTimezoneOffset();
  return 0 === n ? n : -n;
}
Mo.forEach((e) => {
  Ro[e.tz] = e;
});
class Ho {
  constructor(e, t, o) {
    (X(this, a),
      X(this, n),
      X(this, i),
      X(this, s),
      X(this, c, (e) => {
        Q(this, n).add({
          showCalendar: e.showCalendar,
          controlsOnChart: e.controlsOnChart,
          notifications: e.notifications,
          ohlc: e.ohlc,
          grid: e.grid,
          debugMode: e.debugMode,
          quickTrade: e.quickTrade,
          quickTradePosition: e.quickTradePosition,
          askPrice: e.askPrice,
          barCountdown: e.barCountdown,
          watchlistColumnsWidth: e.watchlistColumnsWidth,
          watchlistColumnsVisible: e.watchlistColumnsVisible,
          watchlistSortBy: e.watchlistSortBy,
          watchlistSortDirection: e.watchlistSortDirection,
          quotesColumnsVisible: e.quotesColumnsVisible,
          historyPositionsColumnsVisible: e.historyPositionsColumnsVisible,
          historyPositionsSortBy: e.historyPositionsSortBy,
          historyPositionsSortDirection: e.historyPositionsSortDirection,
          historyPositionsHorizontalScroll: e.historyPositionsHorizontalScroll,
          historyOrdersColumnsVisible: e.historyOrdersColumnsVisible,
          historyOrdersSortBy: e.historyOrdersSortBy,
          historyOrdersSortDirection: e.historyOrdersSortDirection,
          historyOrdersHorizontalScroll: e.historyOrdersHorizontalScroll,
          historyDealsColumnsVisible: e.historyDealsColumnsVisible,
          historyDealsSortBy: e.historyDealsSortBy,
          historyDealsSortDirection: e.historyDealsSortDirection,
          historyDealsHorizontalScroll: e.historyDealsHorizontalScroll,
          crosshair: e.crosshair,
          popupSizes: e.popupSizes,
        });
      }),
      (this.uiSettingsStore = t),
      ee(this, s, o),
      ee(this, n, e));
  }
  addHotkeys() {
    Q(this, s).addHandler(7, () =>
      this.uiSettingsStore.setSettings({
        quickTrade: !this.uiSettingsStore.quickTrade,
      }),
    );
  }
  async init() {
    const e = await Q(this, n).get(Do.uiSettings);
    (this.uiSettingsStore.reset(e || {}),
      te(this, a, l).call(this),
      Q(this, i) && (Q(this, i).call(this), ee(this, i, void 0)),
      ee(this, i, this.uiSettingsStore.subscribe(Q(this, c))));
  }
  toggleQuickTrade() {
    this.uiSettingsStore.setSettings({
      quickTrade: !this.uiSettingsStore.quickTrade,
    });
  }
}
((n = new WeakMap()),
  (i = new WeakMap()),
  (s = new WeakMap()),
  (a = new WeakSet()),
  (l = function () {
    if (this.uiSettingsStore.timezone) return;
    let e;
    try {
      const t = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (((e = Mo.find((e) => e.tz === t)), !e))
        throw new Error("Nothing is found");
    } catch (t) {
      const o = new Date().getTimezoneOffset() / 60;
      e = Mo.find((e) => e.offset === -o);
    }
    e
      ? this.uiSettingsStore.setSettings({ timezone: e.tz })
      : this.uiSettingsStore.setSettings({ timezone: Ro.UTC.tz });
  }),
  (c = new WeakMap()));
class No {
  constructor(e, t) {
    ((this.uiSettingsStore = new Vo()),
      (this.uiSettingsController = new Ho(e, this.uiSettingsStore, t)));
  }
}
const zo = { BOT: 224, RIGHT: 340, LEFT: 320 },
  Uo = {
    None: 0,
    Quotes: 1,
    Journal: 2,
    HistoryPositions: 3,
    HistoryOrders: 4,
    HistoryDeals: 5,
  },
  Fo = { None: 0, Connect: 1, OpenDemo: 2, OpenReal: 3 };
var qo = ((e) => (
  (e[(e.Main = 0)] = "Main"),
  (e[(e.Account = 1)] = "Account"),
  (e[(e.Chart = 2)] = "Chart"),
  e
))(qo || {});
class Wo {
  constructor(e, t, o) {
    (X(this, d),
      X(this, u),
      X(this, h),
      X(this, m, (e) => {
        Q(this, d).add({
          symbols: e.symbols,
          botPanel: e.botPanel,
          depthOfMarket: e.depthOfMarket,
          signals: e.signals,
          botPanelSize: e.botPanelSize,
          rightPanelSize: e.rightPanelSize,
          leftPanelSize: e.leftPanelSize,
          showLeftBar: e.showLeftBar,
          settingsPanel: e.settingsPanel,
        });
      }),
      (this.layoutStore = t),
      ee(this, u, o),
      ee(this, d, e),
      ee(this, h, !1));
  }
  async init(e) {
    const t = await Q(this, d).get(Do.layout);
    (this.layoutStore.reset(t || {}),
      "open_demo" === e && this.layoutStore.setLayout({ auth: Fo.OpenDemo }),
      Q(this, h) || (this.layoutStore.subscribe(Q(this, m)), ee(this, h, !0)));
  }
  addHotkeys() {
    (Q(this, u).addHandler(0, () =>
      this.layoutStore.setLayout({
        tradeCreate: null !== this.layoutStore.tradeCreate ? null : 0,
      }),
    ),
      Q(this, u).addHandler(5, () =>
        this.layoutStore.setLayout({
          indicators: !this.layoutStore.indicators,
        }),
      ),
      Q(this, u).addHandler(6, () =>
        this.layoutStore.setLayout({
          depthOfMarket: !this.layoutStore.depthOfMarket,
        }),
      ),
      Q(this, u).addHandler(8, () =>
        this.layoutStore.setLayout({ symbols: !this.layoutStore.symbols }),
      ),
      Q(this, u).addHandler(1, () =>
        this.layoutStore.setLayout({
          botPanel:
            this.layoutStore.botPanel === Uo.Quotes ? Uo.None : Uo.Quotes,
        }),
      ),
      Q(this, u).addHandler(2, () =>
        this.layoutStore.setLayout({
          botPanel:
            this.layoutStore.botPanel === Uo.HistoryPositions
              ? Uo.None
              : Uo.HistoryPositions,
        }),
      ),
      Q(this, u).addHandler(3, () => {
        this.layoutStore.setLayout({
          botPanel:
            this.layoutStore.botPanel === Uo.Journal ? Uo.None : Uo.Journal,
        });
      }),
      Q(this, u).addHandler(4, () =>
        this.layoutStore.setLayout({ tree: !this.layoutStore.tree }),
      ));
  }
}
((d = new WeakMap()),
  (u = new WeakMap()),
  (h = new WeakMap()),
  (m = new WeakMap()));
var Ko = Object.defineProperty,
  Zo = Object.getOwnPropertyDescriptor;
class Go extends Dt {
  constructor() {
    (super(),
      (this._systemName = Do.layout),
      (this.symbols = !0),
      (this.tradeCreate = null),
      (this.tradeEdit = !1),
      (this.botPanel = Uo.None),
      (this.isSafari = !1),
      (this.tree = !1),
      (this.signals = !1),
      (this.colors = !1),
      (this.indicators = !1),
      (this.auth = Fo.None),
      (this.depthOfMarket = !1),
      (this.botPanelSize = zo.BOT),
      (this.rightPanelSize = zo.RIGHT),
      (this.leftPanelSize = zo.LEFT),
      (this.hotkeys = !1),
      (this.showLeftBar = !1),
      (this.settingsPanel = !1),
      (this.settingsScreen = qo.Main),
      (this.otpForm = !1),
      (this.contacts = !1));
  }
  setLayout(e) {
    (void 0 !== e.symbols && (this.symbols = e.symbols),
      void 0 !== e.tradeCreate &&
        ((this.tradeCreate = e.tradeCreate),
        "number" == typeof this.tradeCreate && (this.tradeEdit = !1)),
      void 0 !== e.tradeEdit &&
        ((this.tradeEdit = e.tradeEdit ?? this.tradeEdit),
        this.tradeEdit && (this.tradeCreate = null)),
      void 0 !== e.botPanel && (this.botPanel = e.botPanel),
      void 0 !== e.tree && (this.tree = e.tree),
      void 0 !== e.signals && (this.signals = e.signals),
      void 0 !== e.colors && (this.colors = e.colors),
      void 0 !== e.indicators && (this.indicators = e.indicators),
      void 0 !== e.auth && (this.auth = e.auth),
      void 0 !== e.depthOfMarket && (this.depthOfMarket = e.depthOfMarket),
      e.botPanelSize && (this.botPanelSize = e.botPanelSize),
      e.rightPanelSize && (this.rightPanelSize = e.rightPanelSize),
      e.leftPanelSize && (this.leftPanelSize = e.leftPanelSize),
      void 0 !== e.hotkeys && (this.hotkeys = e.hotkeys),
      void 0 !== e.showLeftBar && (this.showLeftBar = e.showLeftBar),
      void 0 !== e.settingsPanel && (this.settingsPanel = e.settingsPanel),
      void 0 !== e.settingsScreen && (this.settingsScreen = e.settingsScreen),
      void 0 !== e.otpForm && (this.otpForm = e.otpForm),
      void 0 !== e.contacts && (this.contacts = e.contacts));
  }
  reset(e) {
    ((this.symbols = !0),
      (this.tradeCreate = null),
      (this.tradeEdit = !1),
      (this.botPanel = Uo.Quotes),
      (this.tree = !1),
      (this.signals = !1),
      (this.indicators = !1),
      (this.depthOfMarket = !1),
      (this.botPanelSize = zo.BOT),
      (this.rightPanelSize = zo.RIGHT),
      (this.leftPanelSize = zo.LEFT),
      (this.showLeftBar = !1),
      (this.settingsPanel = !1),
      (this.settingsScreen = qo.Main),
      (this.otpForm = !1),
      this.setLayout(e));
  }
}
((e, t, o) => {
  for (var r, n = Zo(t, o), i = e.length - 1; i >= 0; i--)
    (r = e[i]) && (n = r(t, o, n) || n);
  n && Ko(t, o, n);
})([Lt], Go.prototype, "setLayout");
class Yo {
  constructor(e, t) {
    ((this.layoutStore = new Go()),
      (this.layoutController = new Wo(e, this.layoutStore, t)));
  }
}
function Jo(e) {
  const t = [];
  for (let o = 0, r = e.length / 2; o < r; o++)
    t.push(Number(`0x${e.substring(2 * o, 2 * o + 2)}`));
  return new Uint8Array(t).buffer;
}
function Qo(e) {
  let t = "";
  for (let o = 0, r = e.length; o < r; o++)
    t += e.charCodeAt(o).toString(16).padStart(2, "0");
  return t;
}
function Xo(e) {
  const t = [];
  for (let o = 0; o < e.length; o++)
    28 === e.charCodeAt(o)
      ? t.push("&")
      : 23 === e.charCodeAt(o)
        ? t.push("!")
        : t.push(String.fromCharCode(e.charCodeAt(o) - 1));
  return t.join("");
}
const er = {
  hexToBuffer: Jo,
  toHex: Qo,
  obfuscation: Xo,
  trimZeros: function (e, t) {
    let o = e,
      r = o.length,
      n = 0;
    for (; r > 0 && "0" === o.charAt(r - 1) && n < t; ) ((r -= 1), (n += 1));
    return (
      (o = o.substring(0, r)),
      r > 0 && "." === o.charAt(r - 1) && (o = o.substring(0, r - 1)),
      o
    );
  },
};
function tr(e) {
  const t = [],
    o = new DataView(e);
  for (let r = 0; r < e.byteLength; r++) {
    let e = o.getUint8(r).toString(16);
    (e.length < 2 && (e = ["0", e].join("")), t.push(e));
  }
  return t.join("");
}
const or = (null == (p = globalThis.crypto) ? void 0 : p.subtle) ?? null,
  rr = "AES-CBC";
function nr() {
  return !!or;
}
async function ir(e) {
  if (!nr()) throw new Error("Error initializing crypto api");
  const t = { name: rr };
  return or.importKey("raw", e, t, !0, ["encrypt", "decrypt"]);
}
function sr(e, t) {
  const o = { name: rr, iv: new Uint8Array(16) };
  return or.encrypt(o, t, e);
}
function ar(e, t) {
  const o = { name: rr, iv: new Uint8Array(16) };
  return or.decrypt(o, t, e);
}
const lr = { available: nr, initKey: ir, enc: sr, dec: ar },
  cr =
    (function () {
      const { name: e } = window;
      if (e && Boolean(e.split("").find((e) => isNaN(parseInt(e, 10)))))
        return e.substring(0, 12);
      let t = document.cookie;
      if (
        t &&
        ((t = t.split(";").find((e) => 0 === e.indexOf("uniq="))),
        t && ((t = t.split("=")[1]), t))
      ) {
        if (((t = t.split("-")), 1 === t.length && t[0].length >= 12))
          return t[0].substring(0, 12);
        if (t.length > 1) return t[0] + t[1];
      }
      return "";
    })() || "111";
class dr {
  constructor(e, t) {
    (X(this, _),
      X(this, g),
      X(this, w),
      X(this, f),
      X(this, b),
      X(this, y, () => {
        Q(this, f)
          .getAll()
          .then(async (e) => {
            const t = this.usersStore.getAllUsers(),
              o = [];
            t.forEach((t) => {
              if (t.line) {
                const r = e.findIndex(({ id: e }) => e === t.id);
                (-1 !== r &&
                  e[r].line === t.line &&
                  e[r].name === t.name &&
                  e[r].currency === t.currency &&
                  e[r].profit === t.profit &&
                  e[r].balance === t.balance &&
                  e[r].leverage === t.leverage &&
                  e[r].type === t.type &&
                  e[r].isHedgedMargin === t.isHedgedMargin) ||
                  o.push(t);
              } else o.push(t);
            });
            const r = await this.encryptUsers(o);
            ((await Q(this, f).getAll()).forEach((e) => {
              -1 === r.findIndex((t) => e.id === t.id) &&
                Q(this, f).remove(e.id);
            }),
              Q(this, f).addMany(r));
          });
      }),
      (this.usersStore = t),
      ee(this, f, e));
  }
  async init() {
    if (
      (Q(this, b) && (Q(this, b).call(this), ee(this, b, void 0)), !Q(this, w))
    ) {
      const e = Jo(
          Xo(
            ":e4dd535gf:ddg7361613d6885fc6841ffd:4g:g498g8266dg:eff33886f738c",
          ),
        ),
        t = await te(this, _, E).call(this, await ir(e));
      (ee(this, g, await te(this, _, A).call(this, t)),
        ee(this, w, await te(this, _, P).call(this)));
    }
    const e = await Q(this, f).getAll(),
      t = [];
    e.forEach((e) => t.push(te(this, _, C).call(this, e)));
    const o = await Promise.all(t),
      r = [];
    (o.forEach((e) => {
      e && r.push(e);
    }),
      this.usersStore.reset(r),
      ee(this, b, this.usersStore.subscribe(Q(this, y))));
    const n = zt.getItem("ll");
    n && this.usersStore.setCurrentUser(n);
  }
  setCurrentUser(e) {
    (this.usersStore.setCurrentUser(e),
      e ? zt.setItem("ll", e) : zt.removeItem("ll"));
  }
  updateCurrentUser(e) {
    const t = this.usersStore.getUserByLogin(e.login),
      o = {};
    let r = !1;
    (t &&
      (t.name !== e.name && ((o.name = e.name), (r = !0)),
      t.currency !== e.currency && ((o.currency = e.currency), (r = !0)),
      t.balance !== e.balance && ((o.balance = e.balance), (r = !0)),
      t.profit !== e.profit && ((o.profit = e.profit), (r = !0)),
      t.leverage !== e.marginLeverage &&
        ((o.leverage = e.marginLeverage), (r = !0)),
      t.type !== e.type && ((o.type = e.type), (r = !0)),
      t.group !== e.group && ((o.group = e.group), (r = !0)),
      t.isHedgedMargin !== e.isHedgedMargin &&
        ((o.isHedgedMargin = e.isHedgedMargin), (r = !0))),
      r && this.usersStore.updateCurrentUser(e.login, o));
  }
  async addUser(e) {
    const t = await this.generateUserId(e.login, e.server);
    return (this.usersStore.addUser({ id: t, ...e }), t);
  }
  async encryptUsers(e) {
    const t = [];
    e.forEach((e) => {
      t.push(this.encryptUser(e));
    });
    const o = await Promise.all(t),
      r = [];
    return (
      o.forEach((e) => {
        e && r.push(e);
      }),
      r
    );
  }
  generateUserId(e, t) {
    return te(this, _, $).call(
      this,
      e,
      t,
      "8:8465cd9d9:138:49gb9gd:9b9:ed9:1c98178f5211e897b234818:df3:ebf2",
    );
  }
  async encryptUser(e) {
    const {
        login: t,
        server: o,
        password: r,
        name: n,
        currency: i,
        profit: s,
        balance: a,
        leverage: l,
        type: c,
        isHedgedMargin: d,
        savePassword: u = !0,
      } = e,
      [h, m] = await Promise.all([
        this.generateUserId(t, o),
        te(this, _, $).call(this, t, o, u ? r : ""),
      ]);
    if (h !== e.id) return null;
    const p = { id: h, line: m, updatedAt: Date.now() };
    return (
      n && (p.name = n),
      i && (p.currency = i),
      s && (p.profit = s),
      a && (p.balance = a),
      l && (p.leverage = l),
      void 0 !== c && (p.type = c),
      void 0 !== d && (p.isHedgedMargin = d),
      p
    );
  }
}
((g = new WeakMap()),
  (w = new WeakMap()),
  (f = new WeakMap()),
  (b = new WeakMap()),
  (y = new WeakMap()),
  (_ = new WeakSet()),
  (C = async function (e) {
    let t = null;
    try {
      t = await te(this, _, S).call(this, e.line);
    } catch (s) {
      t = null;
    }
    if (!t) return null;
    const { login: o, server: r, password: n } = t;
    let i;
    try {
      i = await this.generateUserId(o, r);
    } catch (s) {
      return null;
    }
    return {
      id: i,
      line: e.id,
      login: o,
      server: r,
      password: n,
      name: e.name,
      currency: e.currency,
      profit: e.profit,
      balance: e.balance,
      leverage: e.leverage,
      type: e.type,
      isHedgedMargin: e.isHedgedMargin,
      savePassword: Boolean(n),
    };
  }),
  (v = async function (e) {
    if (Q(this, w)) {
      const t = Jo(Qo(e)),
        o = await sr(t, Q(this, w));
      if (o) return tr(o);
    }
    return "";
  }),
  (k = async function (e) {
    if (Q(this, w)) {
      const t = Jo(e),
        o = await ar(t, Q(this, w));
      if (o) return new TextDecoder().decode(new Uint8Array(o));
    }
    return "";
  }),
  ($ = async function (e, t, o = "") {
    if (Q(this, g)) {
      const r = Jo(
          Qo([o ? await te(this, _, v).call(this, o) : "", e, t].join("\t")),
        ),
        n = await sr(r, Q(this, g));
      if (n) return tr(n);
    }
    return "";
  }),
  (S = async function (e) {
    if (Q(this, g) && e.length && e.length / 16 === Math.floor(e.length / 16)) {
      const t = Jo(e),
        o = await ar(t, Q(this, g));
      if (o) {
        const e = new TextDecoder().decode(new Uint8Array(o)).split("\t"),
          t = e[0] ? await te(this, _, k).call(this, e[0]) : "",
          r = Number(e[1]),
          n = e[2];
        return r < 0 ? null : { login: r, password: t, server: n };
      }
    }
    return null;
  }),
  (E = async function (e) {
    return sr(
      Jo(
        [cr, Xo("bfddfd:b:c5b5bdd976fbc::86dec9b:bfbc:685cgc7115389")].join(""),
      ),
      e,
    );
  }),
  (A = async function (e) {
    return ir(e);
  }),
  (P = async function () {
    return ir(
      Jo(
        Xo("987264ef98b:159fe89dd9bf986fc97ggcd7:27dg95dd28173b45f48b:d8e397"),
      ),
    );
  }));
var ur = Object.defineProperty,
  hr = Object.getOwnPropertyDescriptor,
  mr = (e, t, o, r) => {
    for (var n, i = hr(t, o), s = e.length - 1; s >= 0; s--)
      (n = e[s]) && (i = n(t, o, i) || i);
    return (i && ur(t, o, i), i);
  };
class pr extends Dt {
  constructor() {
    (super(),
      X(this, T),
      X(this, x),
      (this._systemName = Do.users),
      ee(this, T, new Map()));
  }
  setCurrentUser(e) {
    e ? Q(this, T).has(e) && ee(this, x, e) : ee(this, x, void 0);
  }
  updateCurrentUser(e, t) {
    const o = this.getUserByLogin(e);
    o &&
      (t.name && (o.name = t.name),
      t.currency && (o.currency = t.currency),
      t.balance && (o.balance = t.balance),
      t.profit && (o.profit = t.profit),
      t.leverage && (o.leverage = t.leverage),
      void 0 !== t.type && (o.type = t.type),
      void 0 !== t.isHedgedMargin && (o.isHedgedMargin = t.isHedgedMargin));
  }
  getAllUsers() {
    return Array.from(Q(this, T).values());
  }
  reset(e) {
    return (
      e &&
        (ee(this, T, new Map()),
        e.forEach((e) => {
          Q(this, T).set(e.id, e);
        })),
      this
    );
  }
  addUser(e) {
    const t = Q(this, T).get(e.id);
    return (Q(this, T).set(e.id, { ...(t ?? {}), ...e }), this);
  }
  removeUser(e) {
    Q(this, T).delete(e);
  }
  getUserById(e) {
    return Q(this, T).get(e) || null;
  }
  getUserByLogin(e) {
    return [...Q(this, T).values()].find((t) => Number(t.login) === Number(e));
  }
  getCurrentUser() {
    return Q(this, x) ? this.getUserById(Q(this, x)) : null;
  }
}
((T = new WeakMap()),
  (x = new WeakMap()),
  mr([Lt], pr.prototype, "setCurrentUser"),
  mr([Lt], pr.prototype, "updateCurrentUser"),
  mr([Lt], pr.prototype, "reset"),
  mr([Lt], pr.prototype, "addUser"),
  mr([Lt], pr.prototype, "removeUser"));
class gr {
  constructor(e) {
    ((this.usersStore = new pr()),
      (this.usersController = new dr(e, this.usersStore)));
  }
}
function wr(e) {
  return (
    e.objectStoreNames.contains(Do.layout) && e.deleteObjectStore(Do.layout),
    e.createObjectStore(Do.layout, { keyPath: xo })
  );
}
function fr(e) {
  return (
    e.objectStoreNames.contains(Do.uiSettings) &&
      e.deleteObjectStore(Do.uiSettings),
    e.createObjectStore(Do.uiSettings, { keyPath: xo })
  );
}
function br(e) {
  return (
    e.objectStoreNames.contains(Do.users) && e.deleteObjectStore(Do.users),
    e.createObjectStore(Do.users, { keyPath: "id" })
  );
}
let yr = null,
  _r = !1,
  Cr = () => {};
const vr = new Promise((e) => {
  Cr = e;
});
let kr = "";
function $r(e) {
  kr = e;
}
class Sr {
  constructor(e, t = []) {
    ((this.name = e), (this.keys = [...t]), (this.single = 0 === t.length));
  }
  getAll(e, t) {
    return _r
      ? new Promise((o) => {
          vr.then(() => {
            if (!yr) throw new Error("Database not ready");
            const r = yr
              .transaction(this.name, "readwrite")
              .objectStore(this.name);
            let n, i;
            (e && t && r.indexNames.contains(e)
              ? ((n = r.index(e)), (i = n.getAll([kr, t])))
              : r.indexNames.contains("userId")
                ? ((n = r.index("userId")), (i = n.getAll(kr)))
                : (i = r.getAll()),
              (i.onsuccess = () => o(i.result)));
          });
        })
      : Promise.resolve([]);
  }
  get(e) {
    return _r
      ? new Promise((t) => {
          vr.then(() => {
            if (!yr) throw new Error("Database not ready");
            const o = yr
              .transaction(this.name, "readwrite")
              .objectStore(this.name)
              .get(e);
            o.onsuccess = () => t(o.result);
          });
        })
      : Promise.resolve(void 0);
  }
  async add(e) {
    if (!_r) return;
    if ((await vr, !yr)) throw new Error("Database not ready");
    const t = yr.transaction(this.name, "readwrite").objectStore(this.name);
    t.indexNames.contains("userId")
      ? t.put({ userId: kr, ...e })
      : this.single
        ? t.put({ [xo]: this.name, ...e })
        : t.put(e);
  }
  async remove(e) {
    if (!_r) return;
    if ((await vr, !yr)) throw new Error("Database not ready");
    const t = yr.transaction(this.name, "readwrite").objectStore(this.name);
    t.indexNames.contains("userId") ? t.delete([kr, e]) : t.delete(e);
  }
  async removeByUserId(e) {
    if (!_r) return;
    if ((await vr, !yr)) throw new Error("Database not ready");
    const t = yr.transaction(this.name, "readwrite").objectStore(this.name),
      o = t.index("userId").getAllKeys(e);
    o.onsuccess = () => {
      o.result.forEach((e) => {
        t.delete(e);
      });
    };
  }
  async addMany(e) {
    if (!_r) return;
    if ((await vr, !yr)) throw new Error("Database not ready");
    const t = yr.transaction(this.name, "readwrite").objectStore(this.name);
    t.indexNames.contains("userId")
      ? e.forEach((e) => {
          const o = { userId: kr, ...e };
          t.put(o);
        })
      : e.forEach((e) => t.put(e));
  }
}
const Er = [
    new Sr(Do.layout, []),
    new Sr(Do.uiSettings, []),
    new Sr(Do.users, ["id"]),
    new Sr(Do.objects, ["userId", "uid", "symbol"]),
    new Sr(Do.indicators, ["userId", "uid", "symbol"]),
    new Sr(Do.configs, ["userId", "symbol"]),
    new Sr(Do.tradeBars, ["userId", "id"]),
    new Sr(Do.marks, ["userId"]),
    new Sr(Do.watchlist, ["userId"]),
    new Sr(Do.userSettings, ["userId"]),
    new Sr(Do.charts),
  ],
  Ar = {
    layout: Er[0],
    ui_settings: Er[1],
    users: Er[2],
    objects: Er[3],
    indicators: Er[4],
    configs: Er[5],
    trade_bars: Er[6],
    marks: Er[7],
    watchlist: Er[8],
    user_settings: Er[9],
  };
function Pr(e) {
  try {
    if (e instanceof Error) {
      const t = JSON.parse(e.message);
      return Array.isArray(t) &&
        2 === t.length &&
        t.every((e) => "number" == typeof e)
        ? [t[1], t[0]]
        : [e.message];
    }
  } catch {
    return [null];
  }
  return [null];
}
class Tr {
  constructor(e, t, o) {
    (X(this, I),
      X(this, D),
      X(this, L),
      X(this, O, (e) => {
        const [t, o] = Pr(e);
        "number" == typeof t &&
          (1 === t
            ? this.journalStore.err(3, "websocket returned internal error.", !0)
            : 2 === t
              ? this.journalStore.err(
                  3,
                  "websocket returned error: trade server is not available.",
                  !0,
                )
              : (3 !== t && 28 !== o) ||
                this.journalStore.err(
                  3,
                  "websocket returned error: authorization error on the trading server.",
                  !0,
                ));
      }),
      X(this, V, (e) => {
        const t = te(this, I, j).call(this);
        e.isInvestor
          ? this.journalStore.log(
              6,
              `${t}trading has been disabled - investor mode`,
            )
          : e.isTradeDisabled ||
            e.isReadOnly ||
            (e.isHedgedMargin
              ? this.journalStore.log(
                  6,
                  `${t}trading has been enabled - hedging mode`,
                )
              : this.journalStore.log(
                  6,
                  `${t}trading has been enabled - netting mode`,
                ));
      }),
      X(this, M, (e) => {
        e && this.journalStore.log(6, e);
      }),
      X(this, R, (e) => {
        var t;
        this.journalStore.log(
          3,
          (null == (t = e.event.event) ? void 0 : t.wasClean)
            ? "websocket connection was closed by the server-side (to create demo account)"
            : "websocket connection was suddenly closed (to create demo account)",
          !0,
        );
      }),
      X(this, B, () => {
        this.journalStore.log(
          3,
          `${te(this, I, j).call(this)}websocket connection is successfully established`,
          !0,
        );
      }),
      X(this, H, (e) => {
        this.journalStore.log(
          3,
          `${te(this, I, j).call(this)}token for authorization received (server: ${e})`,
          !0,
        );
      }),
      X(this, N, (e) => {
        this.journalStore.log(
          3,
          `${te(this, I, j).call(this)}authorized on ${e}`,
        );
      }),
      (this.journalStore = e),
      (this.usersController = o),
      ee(this, L, t));
  }
  async connectApi(e) {
    (this.disconnectApi(),
      ee(this, D, e),
      Q(this, D).on(11, Q(this, R)),
      Q(this, D).on(6, Q(this, M)),
      Q(this, D).on(10, Q(this, B)),
      Q(this, D).on(9, Q(this, H)),
      Q(this, D).on(12, Q(this, N)),
      Q(this, D).on(13, Q(this, V)),
      Q(this, D).on(15, Q(this, O)));
    const t = Q(this, L),
      o = t.servers && t.servers.map((e) => e.server).filter(Boolean);
    (this.journalStore.log(
      2,
      [
        "Initializing start (",
        `login: ${t.login || "not specified"}`,
        `, trade_server: ${t.tradeServerDemo || "not specified"}`,
        `, servers: ${o ? o.join(", ") : "not specified"})`,
      ].join(""),
      !0,
    ),
      this.journalStore.log(
        2,
        (() => {
          let e = "Initializing environment was successful (";
          const t = new Date().toString();
          return (
            (e += `Timezone: ${t.substring(t.indexOf("GMT"))}`),
            (e += `, cookie: ${String(Boolean(document.cookie))}`),
            (e += `, webGL: ${String(
              (function () {
                const e = document.createElement("canvas");
                if (e) {
                  const t = e.getContext("webgl");
                  if (null == t ? void 0 : t.createProgram) return !0;
                }
                return !1;
              })(),
            )}`),
            (e += `, user-Agent: ${navigator.userAgent}`),
            (e += ")"),
            e
          );
        })(),
        !0,
      ));
    const r = ir(
      Jo(
        Xo("13ef13b2b76dd8:5795gdcfb2fdc1ge85bf768f54773d22fff996e3ge75g5:75"),
      ),
    );
    r.then(() =>
      this.journalStore.log(2, "Initializing crypto api was successful", !0),
    ).catch(() =>
      this.journalStore.err(2, "Initializing crypto api failed", !0),
    );
    const n = vr;
    (n
      .then(() =>
        this.journalStore.log(2, "Initializing indexedDB was successful", !0),
      )
      .catch(() =>
        this.journalStore.err(2, "Initializing indexedDB was successful", !0),
      ),
      await Promise.all([r, n]),
      this.journalStore.log(2, "MetaTrader Web Trader started"));
  }
  err(e, t, o = !1) {
    this.journalStore.err(e, t, o);
  }
  warn(e, t, o = !1) {
    this.journalStore.warn(e, t, o);
  }
  log(e, t, o = !1) {
    this.journalStore.log(e, t, o);
  }
  attn(e, t, o = !1) {
    this.journalStore.attn(e, t, o);
  }
  disconnectApi() {
    Q(this, D) &&
      (Q(this, D).off(11, Q(this, R)),
      Q(this, D).off(6, Q(this, M)),
      Q(this, D).off(10, Q(this, B)),
      Q(this, D).off(9, Q(this, H)),
      Q(this, D).off(12, Q(this, N)),
      Q(this, D).off(13, Q(this, V)),
      Q(this, D).off(15, Q(this, O)));
  }
}
((D = new WeakMap()),
  (L = new WeakMap()),
  (O = new WeakMap()),
  (I = new WeakSet()),
  (j = function () {
    const e = this.usersController.usersStore.getCurrentUser();
    return (null == e ? void 0 : e.login)
      ? `${null == e ? void 0 : e.login}: `
      : "";
  }),
  (V = new WeakMap()),
  (M = new WeakMap()),
  (R = new WeakMap()),
  (B = new WeakMap()),
  (H = new WeakMap()),
  (N = new WeakMap()));
var xr = Object.defineProperty,
  Dr = Object.getOwnPropertyDescriptor,
  Lr = (e, t, o, r) => {
    for (var n, i = Dr(t, o), s = e.length - 1; s >= 0; s--)
      (n = e[s]) && (i = n(t, o, i) || i);
    return (i && xr(t, o, i), i);
  };
class Or extends Dt {
  constructor() {
    (super(),
      X(this, z),
      (this._systemName = "journal"),
      ee(this, z, []),
      (this.index = { code: {}, type: {} }),
      (this.add = this.add.bind(this)));
  }
  getList(e = !1) {
    return e
      ? [...Q(this, z)]
      : Q(this, z).filter((e) => !e.debug || 2 === e.code);
  }
  add(e) {
    var t, o;
    (Q(this, z).push(e),
      (this.index.code[e.code] = this.index.code[e.code] || []),
      null == (t = this.index.code[e.code]) || t.push(e),
      (this.index.type[e.type] = this.index.type[e.type] || []),
      null == (o = this.index.type[e.type]) || o.push(e));
  }
  log(e, t, o = !1) {
    this.add({ time: Date.now(), code: 0, message: t, type: e, debug: o });
  }
  warn(e, t, o = !1) {
    this.add({ time: Date.now(), code: 1, message: t, type: e, debug: o });
  }
  err(e, t, o = !1) {
    this.add({ time: Date.now(), code: 2, message: t, type: e, debug: o });
  }
  attn(e, t, o = !1) {
    this.add({ time: Date.now(), code: 3, message: t, type: e, debug: o });
  }
  clear() {
    (ee(this, z, []), (this.index = { code: {}, type: {} }));
  }
}
((z = new WeakMap()),
  Lr([Lt], Or.prototype, "add"),
  Lr([Lt], Or.prototype, "clear"));
class Ir {
  constructor(e, t) {
    ((this.journalStore = new Or()),
      (this.journalController = new Tr(this.journalStore, e, t)));
  }
}
function jr(e) {
  const {
    keyCode: t,
    ctrl: o = !1,
    alt: r = !1,
    shift: n = !1,
    meta: i = !1,
  } = e;
  return [t, o, r, n, i].join("-");
}
function Vr(e) {
  switch (e) {
    case 0:
      return window.tr(window.lang.trade.hotkeys.tradeForm);
    case 1:
      return window.tr(window.lang.trade.hotkeys.tradePanel);
    case 2:
      return window.tr(window.lang.trade.hotkeys.historyPanel);
    case 3:
      return window.tr(window.lang.trade.hotkeys.journalPanel);
    case 4:
      return window.tr(window.lang.ui.hotkeys.objectTreePanel);
    case 5:
      return window.tr(window.lang.ui.hotkeys.indicators);
    case 6:
      return window.tr(window.lang.ui.hotkeys.depthOfMarket);
    case 7:
      return window.tr(window.lang.trade.hotkeys.quickTrade);
    case 8:
      return window.tr(window.lang.trade.hotkeys.marketWatch);
    case 9:
      return window.tr(window.lang.chart.hotkeys.chartTypeBar);
    case 10:
      return window.tr(window.lang.chart.hotkeys.chartTypeCandle);
    case 11:
      return window.tr(window.lang.chart.hotkeys.chartTypeArea);
    case 12:
      return window.tr(window.lang.chart.hotkeys.chartTypeLine);
    case 13:
      return window.tr(window.lang.chart.hotkeys.realVolumes);
    case 14:
      return window.tr(window.lang.chart.hotkeys.tickVolumes);
    case 15:
      return window.tr(window.lang.chart.hotkeys.trendline);
    case 16:
      return window.tr(window.lang.chart.hotkeys.horizontalLine);
    case 17:
      return window.tr(window.lang.chart.hotkeys.verticalLine);
    case 18:
      return window.tr(window.lang.chart.hotkeys.infoLine);
    case 19:
      return window.tr(window.lang.chart.hotkeys.arrowLine);
    case 20:
      return window.tr(window.lang.chart.hotkeys.rayLine);
    case 21:
      return window.tr(window.lang.chart.hotkeys.extendedLine);
    case 22:
      return window.tr(window.lang.chart.hotkeys.crossLine);
    case 23:
      return window.tr(window.lang.ui.hotkeys.scrollRight);
    case 24:
      return window.tr(window.lang.ui.hotkeys.scrollLeft);
    case 27:
      return window.tr(window.lang.ui.hotkeys.scrollToStart);
    case 28:
      return window.tr(window.lang.ui.hotkeys.scrollToEnd);
    case 29:
      return window.tr(window.lang.ui.hotkeys.resetChartView);
    case 30:
      return window.tr(window.lang.ui.hotkeys.zoomOut);
    case 31:
      return window.tr(window.lang.ui.hotkeys.zoomIn);
    case 32:
      return window.tr(window.lang.ui.hotkeys.fullScreen);
    case 33:
      return window.tr(window.lang.ui.hotkeys.screenshot);
    case 34:
      return window.tr(window.lang.ui.hotkeys.escape);
    case 38:
      return window.tr(window.lang.chart.hotkeys.crosshairRuler);
    default:
      return "";
  }
}
const Mr = {
  none: "none",
  Mouse3: "Mouse Wheel Click",
  KeyA: "A",
  KeyB: "B",
  KeyC: "C",
  KeyD: "D",
  KeyE: "E",
  KeyF: "F",
  KeyG: "G",
  KeyH: "H",
  KeyI: "I",
  KeyJ: "J",
  KeyK: "K",
  KeyL: "L",
  KeyM: "M",
  KeyN: "N",
  KeyO: "O",
  KeyP: "P",
  KeyQ: "Q",
  KeyR: "R",
  KeyS: "S",
  KeyT: "T",
  KeyU: "U",
  KeyV: "V",
  KeyW: "W",
  KeyX: "X",
  KeyY: "Y",
  KeyZ: "Z",
  Digit0: "0",
  Digit1: "1",
  Digit2: "2",
  Digit3: "3",
  Digit4: "4",
  Digit5: "5",
  Digit6: "6",
  Digit7: "7",
  Digit8: "8",
  Digit9: "9",
  Equal: "+",
  Minus: "-",
  Numpad0: "Numpad 0",
  Numpad1: "Numpad 1",
  Numpad2: "Numpad 2",
  Numpad3: "Numpad 3",
  Numpad4: "Numpad 4",
  Numpad5: "Numpad 5",
  Numpad6: "Numpad 6",
  Numpad7: "Numpad 7",
  Numpad8: "Numpad 8",
  Numpad9: "Numpad 9",
  NumpadMultiply: "Numpad *",
  NumpadAdd: "Numpad +",
  NumpadSubtract: "Numpad —",
  NumpadDecimal: "Numpad .",
  NumpadDivide: "Numpad /",
  F1: "F1",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  Backspace: "Backspace",
  Tab: "Tab",
  Enter: "Enter",
  CapsLock: "CapsLock",
  Escape: "Escape",
  Space: "Space",
  PageUp: "PageUp",
  PageDown: "PageDown",
  End: "End",
  Home: "Home",
  ArrowLeft: "←",
  ArrowUp: "↑",
  ArrowRight: "→",
  ArrowDown: "↓",
  Insert: "Insert",
  Delete: "Delete",
  NumLock: "NumLock",
  ScrollLock: "ScrollLock",
};
class Rr {
  constructor(e, t) {
    (X(this, U, (e) => {
      const t = jr({
        keyCode: e.code,
        ctrl: e.ctrlKey,
        alt: e.altKey,
        shift: e.shiftKey,
        meta: e.metaKey,
      });
      this.hotkeysStore.handlersByHash.has(t) &&
        e.target === document.body &&
        (e.preventDefault(),
        e.stopPropagation(),
        this.hotkeysStore.handlersByHash.get(t)());
    }),
      (this.hotkeysStore = e),
      this.hotkeysStore.init(t),
      window.removeEventListener("keydown", Q(this, U)),
      window.addEventListener("keydown", Q(this, U)));
  }
  destroy() {
    (window.removeEventListener("keydown", Q(this, U)),
      this.hotkeysStore.clear());
  }
  addHandler(e, t) {
    this.hotkeysStore.addHandler(e, t);
  }
  getTitle(e) {
    if (void 0 === e) return "";
    const t = this.hotkeysStore.hotkeys[e];
    if (!t) return "";
    let o = "";
    const r = t[0];
    return (
      (null == r ? void 0 : r.ctrl) && (o += "Ctrl + "),
      (null == r ? void 0 : r.alt) && (o += (rt() ? "⌥" : "Alt") + " + "),
      (null == r ? void 0 : r.shift) && (o += "Shift + "),
      (null == r ? void 0 : r.meta) && (o += (rt() ? "⌘" : "WIN") + " + "),
      (o += Mr[r.keyCode]),
      o
    );
  }
}
U = new WeakMap();
class Br extends Dt {
  constructor() {
    (super(),
      (this._systemName = "hotkeys"),
      (this.hotkeys = {}),
      (this.handlersByHash = new Map()));
  }
  init(e) {
    (this.handlersByHash.clear(), (this.hotkeys = e));
  }
  addHandler(e, t) {
    const o = this.hotkeys[e];
    o &&
      o.forEach((e) => {
        const o = jr(e);
        this.handlersByHash.set(o, t);
      });
  }
  clear() {
    this.handlersByHash.clear();
  }
}
class Hr {
  constructor(e) {
    ((this.hotkeysStore = new Br()),
      (this.hotkeysController = new Rr(this.hotkeysStore, e)));
  }
}
const Nr = {
  34: [{ keyCode: "Escape" }],
  0: [{ keyCode: "F9" }],
  5: [{ keyCode: "KeyI", ctrl: !0 }],
  6: [{ keyCode: "KeyB", alt: !0 }],
  4: [{ keyCode: "KeyB", ctrl: !0 }],
  7: [{ keyCode: "KeyT", alt: !0 }],
  8: [{ keyCode: "KeyM", ctrl: !0 }],
  1: [{ keyCode: "KeyT", ctrl: !0, alt: !0 }],
  2: [{ keyCode: "KeyH", ctrl: !0, alt: !0 }],
  3: [{ keyCode: "KeyJ", ctrl: !0, alt: !0 }],
  9: [{ keyCode: "Digit1", alt: !0 }],
  10: [{ keyCode: "Digit2", alt: !0 }],
  11: [{ keyCode: "Digit3", alt: !0 }],
  12: [{ keyCode: "Digit4", alt: !0 }],
  13: [{ keyCode: "KeyK", ctrl: !0 }],
  14: [{ keyCode: "KeyL", ctrl: !0 }],
  15: [{ keyCode: "KeyL", alt: !0 }],
  16: [{ keyCode: "KeyH", alt: !0 }],
  17: [{ keyCode: "KeyV", alt: !0 }],
  18: [{ keyCode: "KeyI", alt: !0 }],
  19: [{ keyCode: "KeyA", alt: !0 }],
  20: [{ keyCode: "KeyR", alt: !0 }],
  21: [{ keyCode: "KeyE", alt: !0 }],
  22: [{ keyCode: "KeyC", alt: !0 }],
  38: [{ keyCode: "Mouse3", mouse: !0 }],
  23: [{ keyCode: "ArrowRight" }],
  24: [{ keyCode: "ArrowLeft" }],
  25: [{ keyCode: "PageDown" }, { keyCode: "ArrowRight", alt: !0 }],
  26: [{ keyCode: "PageUp" }, { keyCode: "ArrowLeft", alt: !0 }],
  27: [{ keyCode: "Home" }, { keyCode: "ArrowLeft", alt: !0, shift: !0 }],
  28: [{ keyCode: "End" }, { keyCode: "ArrowRight", alt: !0, shift: !0 }],
  29: [{ keyCode: "KeyR", alt: !0, shift: !0 }],
  31: [
    { keyCode: "Equal" },
    { keyCode: "NumpadAdd" },
    { keyCode: "Equal", shift: !0 },
  ],
  30: [
    { keyCode: "Minus" },
    { keyCode: "NumpadSubtract" },
    { keyCode: "Minus", shift: !0 },
  ],
  32: [{ keyCode: "F11" }],
  33: [{ keyCode: "KeyS", ctrl: !0 }],
  35: [{ keyCode: "KeyZ", ctrl: !0 }],
  36: [{ keyCode: "KeyZ", shift: !0, ctrl: !0 }],
  37: [{ keyCode: "KeyC", ctrl: !0 }],
};
F = new WeakMap();
let zr = class e {
  constructor(e, t, o, r) {
    (X(this, F),
      ee(this, F, r),
      (this.hotkeys = new Hr(Nr)),
      (this.theme = new Kt(e, t, o)),
      (this.users = new gr(Ar.users)),
      (this.layout = new Yo(Ar.layout, this.hotkeys.hotkeysController)),
      (this.uiSettings = new No(
        Ar.ui_settings,
        this.hotkeys.hotkeysController,
      )),
      (this.journal = new Ir(Q(this, F), this.users.usersController)));
  }
  async init() {
    var e;
    (await (async function () {
      const e = window.self.indexedDB.open("database", 14);
      return (
        (e.onerror = (e) => {
          ((_r = !1), Cr());
        }),
        (e.onsuccess = () => {
          ((_r = !0), (yr = e.result), Cr());
        }),
        (e.onupgradeneeded = (t) => {
          ((_r = !0),
            (function (e, t, o) {
              const r = e.result,
                { transaction: n } = e;
              t.oldVersion < 10
                ? (function (e, t) {
                    t.forEach((t) => {
                      if (
                        (e.objectStoreNames.contains(t.name) &&
                          e.deleteObjectStore(t.name),
                        t.keys.includes("userId"))
                      ) {
                        const o = t.keys.indexOf("userId"),
                          { keys: r } = t;
                        -1 !== o && r.splice(o, 1);
                        const n = e.createObjectStore(t.name, {
                          keyPath: ["userId", r[0]].filter(Boolean),
                        });
                        (n.createIndex("userId", "userId", { unique: !1 }),
                          r.forEach((e) => {
                            n.createIndex(e, ["userId", e], { unique: !1 });
                          }));
                      } else if (t.single)
                        e.createObjectStore(t.name, { keyPath: xo });
                      else {
                        const o = e.createObjectStore(t.name, {
                          keyPath: t.keys[0],
                        });
                        t.keys.length > 1 &&
                          t.keys.forEach((e) => {
                            o.createIndex(e, e, { unique: !1 });
                          });
                      }
                    });
                  })(r, o)
                : (t.oldVersion < 11 &&
                    (function (e) {
                      const t = e.createObjectStore(Do.indicatorsByOrder, {
                        keyPath: ["userId", "symbol"],
                      });
                      (t.createIndex("userId", "userId", { unique: !1 }),
                        t.createIndex("symbol", ["userId", "symbol"], {
                          unique: !1,
                        }));
                    })(r),
                  t.oldVersion < 12 &&
                    (function (e) {
                      e.createObjectStore(Do.marks, {
                        keyPath: ["userId"],
                      }).createIndex("userId", "userId", { unique: !1 });
                    })(r),
                  t.oldVersion < 13 &&
                    (function (e, t) {
                      if (
                        ((function (e) {
                          e.createObjectStore(Do.userSettings, {
                            keyPath: ["userId"],
                          }).createIndex("userId", "userId", { unique: !1 });
                        })(e),
                        !t)
                      )
                        return (wr(e), fr(e), void br(e));
                      (!(function (e, t) {
                        const o = t.objectStore(Do.layout).getAll();
                        ((o.onsuccess = () => {
                          const t = o.result[0],
                            r = wr(e);
                          (delete t.userId, r.add({ [xo]: Do.layout, ...t }));
                        }),
                          (o.onerror = () => wr(e)));
                      })(e, t),
                        (function (e, t) {
                          const o = t.objectStore(Do.uiSettings).getAll();
                          ((o.onsuccess = () => {
                            const t = o.result[0],
                              r = fr(e);
                            (delete t.userId,
                              r.add({ [xo]: Do.uiSettings, ...t }));
                          }),
                            (o.onerror = () => fr(e)));
                        })(e, t),
                        (function (e, t) {
                          const o = t.objectStore(Do.users).getAll();
                          ((o.onsuccess = () => {
                            const t = o.result,
                              r = br(e);
                            t.forEach((e) => {
                              const t = e.userId;
                              (delete e.userId, r.add({ ...e, id: t }));
                            });
                          }),
                            (o.onerror = () => br(e)));
                        })(e, t));
                    })(r, n),
                  t.oldVersion < 14 &&
                    (function (e, t) {
                      !(function (e, t) {
                        const o = (function (e) {
                          const t = e.createObjectStore(Do.charts, {
                            keyPath: ["userId", "symbol"],
                          });
                          return (
                            t.createIndex("userId", "userId", { unique: !1 }),
                            t.createIndex("symbol", ["userId", "symbol"], {
                              unique: !1,
                            }),
                            t
                          );
                        })(e);
                        if (t) {
                          const e = t.objectStore(Do.configs).getAll();
                          e.onsuccess = () => {
                            e.result.forEach((e) => {
                              if (e.userId && e.symbol) {
                                let t = 0;
                                ("realVolume" === e.volume
                                  ? (t = 2)
                                  : "tickVolume" === e.volume && (t = 1),
                                  o.put({
                                    userId: e.userId,
                                    symbol: e.symbol,
                                    volumeType: t,
                                    chartType: e.type ?? 1,
                                    xScale: e.xScale ?? 0.03336,
                                    hidden: Boolean(e.hidden),
                                    magnet: Boolean(e.magnet),
                                    locked: Boolean(e.locked),
                                  }));
                              }
                            });
                          };
                        }
                      })(e, t);
                    })(r, n));
            })(e, t, Er));
        }),
        vr
      );
    })(),
      this.theme.themeController.init(),
      await this.layout.layoutController.init(
        null == (e = Q(this, F)) ? void 0 : e.startupMode,
      ),
      await this.uiSettings.uiSettingsController.init(),
      await this.users.usersController.init(),
      this.addPostMessageListenter());
  }
  addPostMessageListenter() {
    window.self !== window.top &&
      window.addEventListener("message", (e) => {
        if (!e.data || "mt5_update" !== e.data.type) return;
        const t = e.data["theme-mode"];
        void 0 !== t &&
          (1 === t && this.theme.themeController.setMode(1),
          0 === t && this.theme.themeController.setMode(0));
      });
  }
  static async init(t) {
    const { theme: o, mode: r } = Kt.ThemeController.init(),
      n = await Kt.ThemeController.load(r, o);
    return new e(o, r, n, t);
  }
};
function Ur(e) {
  let t, o, r, n, i, s, a, l, c;
  return {
    c() {
      ((t = Ce("svg")),
        (o = Ce("path")),
        (r = Ce("path")),
        (n = Ce("path")),
        (i = Ce("path")),
        (s = Ce("path")),
        (a = Ce("path")),
        (l = Ce("path")),
        (c = Ce("path")),
        ve(o, "fill", "#CDFDDA"),
        ve(o, "fill-rule", "evenodd"),
        ve(
          o,
          "d",
          "M14.5 13.103c1.836 0 3.667.723 5.5 2.14V19l-10.5.5-.5-4.257c1.833-1.417 3.664-2.14 5.5-2.14Z",
        ),
        ve(o, "clip-rule", "evenodd"),
        ve(r, "fill", "#00AC00"),
        ve(r, "fill-rule", "evenodd"),
        ve(
          r,
          "d",
          "M9.53 15.469 9.5 19l10-.477v-3.032c-1.703-1.27-3.365-1.888-5-1.888-1.626 0-3.277.611-4.97 1.866Zm-.836-.622c1.895-1.465 3.83-2.244 5.806-2.244 1.975 0 3.91.78 5.806 2.244l.194.15v4.48l-12.03.545V15.02l.224-.173Z",
        ),
        ve(r, "clip-rule", "evenodd"),
        ve(n, "fill", "#CDFDDA"),
        ve(n, "fill-rule", "evenodd"),
        ve(
          n,
          "d",
          "m7.736 13.701-.734 2.345L7.001 20H4.5a1 1 0 0 1-1-1v-4c1.412-.669 2.824-1.102 4.236-1.299Z",
        ),
        ve(n, "clip-rule", "evenodd"),
        ve(i, "fill", "#00AC00"),
        ve(i, "fill-rule", "evenodd"),
        ve(
          i,
          "d",
          "m7.913 13.678-.475 1.086c-.988.111-1.87.308-2.646.59l-.29.11v3.529H7L7.002 20H4.5a1 1 0 0 1-1-1v-4c1.471-.697 2.942-1.138 4.413-1.322Z",
        ),
        ve(i, "clip-rule", "evenodd"),
        ve(s, "fill", "#CDFDDA"),
        ve(s, "d", "M14.5 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"),
        ve(a, "fill", "#00AC00"),
        ve(a, "fill-rule", "evenodd"),
        ve(
          a,
          "d",
          "M14.5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
        ),
        ve(a, "clip-rule", "evenodd"),
        ve(l, "fill", "#00AC00"),
        ve(
          l,
          "d",
          "M11.471 11.979A4.992 4.992 0 0 1 9.5 8c0-.67.131-1.308.37-1.891a3.5 3.5 0 1 0 1.601 5.87Z",
        ),
        ve(c, "fill", "#CDFDDA"),
        ve(
          c,
          "d",
          "M9.586 7.07a2.5 2.5 0 1 0 1.153 4.226A4.981 4.981 0 0 1 9.5 8c0-.318.03-.63.086-.93Z",
        ),
        ve(t, "xmlns", "http://www.w3.org/2000/svg"),
        ve(t, "width", "24"),
        ve(t, "height", "24"),
        ve(t, "fill", "none"));
    },
    m(e, d) {
      (de(e, t, d),
        _e(t, o),
        _e(t, r),
        _e(t, n),
        _e(t, i),
        _e(t, s),
        _e(t, a),
        _e(t, l),
        _e(t, c));
    },
    p: he,
    i: he,
    o: he,
    d(e) {
      e && ie(t);
    },
  };
}
class Fr extends oe {
  constructor(e) {
    (super(), re(this, e, null, Ur, ne, {}));
  }
}
function qr(e) {
  let t, o, r, n, i;
  return {
    c() {
      ((t = Ce("svg")),
        (o = Ce("path")),
        (r = Ce("path")),
        (n = Ce("path")),
        (i = Ce("path")),
        ve(o, "fill", "#FACE00"),
        ve(
          o,
          "d",
          "M17.287 8a3.429 3.429 0 1 1-6.857 0 3.429 3.429 0 0 1 6.857 0ZM8.145 16v3.429h11.428V16c-.571-.762-2.514-2.286-5.714-2.286-3.2 0-5.143 1.524-5.714 2.286Z",
        ),
        ve(r, "fill", "#D7FCDD"),
        ve(
          r,
          "d",
          "M8.823 6.939a5.127 5.127 0 0 0 1.416 4.716A2.857 2.857 0 1 1 8.823 6.94ZM3.57 16.343v3.085h2.857V15.15l.087-.139a3.48 3.48 0 0 1 .48-.591c-1.872.362-3.03 1.367-3.424 1.923Z",
        ),
        ve(n, "fill", "#C2850C"),
        ve(n, "fill-rule", "evenodd"),
        ve(
          n,
          "d",
          "M9.855 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2.857a2.857 2.857 0 1 0 0 5.714 2.857 2.857 0 0 0 0-5.714ZM7.685 15.657c.68-.907 2.793-2.514 6.171-2.514s5.491 1.607 6.171 2.514c.075.1.115.22.115.343v3.429a.571.571 0 0 1-.572.571H8.142a.571.571 0 0 1-.572-.571V16c0-.123.04-.244.115-.343Zm1.028.548v2.652H19v-2.652c-.599-.67-2.33-1.92-5.143-1.92-2.813 0-4.544 1.25-5.143 1.92Z",
        ),
        ve(n, "clip-rule", "evenodd"),
        ve(i, "fill", "#00A91C"),
        ve(
          i,
          "d",
          "M9.855 11.23a2.286 2.286 0 1 1-1.117-3.723c.037-.388.117-.763.235-1.12a3.429 3.429 0 1 0 1.695 5.648 5.18 5.18 0 0 1-.813-.806ZM3.105 16.013c.548-.774 2.162-2.096 4.726-2.278-.631.427-1.072.887-1.316 1.277l-.086.138c-1.179.366-1.945.991-2.286 1.39v2.317h2.286V20H3.57A.571.571 0 0 1 3 19.429v-3.086c0-.118.037-.234.105-.33Z",
        ),
        ve(t, "xmlns", "http://www.w3.org/2000/svg"),
        ve(t, "width", "24"),
        ve(t, "height", "24"),
        ve(t, "fill", "none"));
    },
    m(e, s) {
      (de(e, t, s), _e(t, o), _e(t, r), _e(t, n), _e(t, i));
    },
    p: he,
    i: he,
    o: he,
    d(e) {
      e && ie(t);
    },
  };
}
class Wr extends oe {
  constructor(e) {
    (super(), re(this, e, null, qr, ne, {}));
  }
}
function Kr(e) {
  let t, o, r, n, i, s, a, l, c;
  return {
    c() {
      ((t = Ce("svg")),
        (o = Ce("path")),
        (r = Ce("path")),
        (n = Ce("path")),
        (i = Ce("path")),
        (s = Ce("path")),
        (a = Ce("path")),
        (l = Ce("path")),
        (c = Ce("path")),
        ve(o, "fill", "#FC0"),
        ve(o, "fill-rule", "evenodd"),
        ve(
          o,
          "d",
          "M14.5 13.103c1.836 0 3.667.723 5.5 2.14V19l-10.5.5-.5-4.257c1.833-1.417 3.664-2.14 5.5-2.14Z",
        ),
        ve(o, "clip-rule", "evenodd"),
        ve(r, "fill", "#CE8200"),
        ve(r, "fill-rule", "evenodd"),
        ve(
          r,
          "d",
          "M9.53 15.469 9.5 19l10-.477v-3.032c-1.703-1.27-3.365-1.888-5-1.888-1.626 0-3.277.611-4.97 1.866Zm-.836-.622c1.895-1.465 3.83-2.244 5.806-2.244 1.975 0 3.91.78 5.806 2.244l.194.15v4.48l-12.03.545V15.02l.224-.173Z",
        ),
        ve(r, "clip-rule", "evenodd"),
        ve(n, "fill", "#FC0"),
        ve(n, "fill-rule", "evenodd"),
        ve(
          n,
          "d",
          "m7.736 13.701-.734 2.345L7.001 20H4.5a1 1 0 0 1-1-1v-4c1.412-.669 2.824-1.102 4.236-1.299Z",
        ),
        ve(n, "clip-rule", "evenodd"),
        ve(i, "fill", "#CE8200"),
        ve(i, "fill-rule", "evenodd"),
        ve(
          i,
          "d",
          "m7.913 13.678-.475 1.086c-.988.111-1.87.308-2.646.59l-.29.11v3.529H7L7.002 20H4.5a1 1 0 0 1-1-1v-4c1.471-.697 2.942-1.138 4.413-1.322Z",
        ),
        ve(i, "clip-rule", "evenodd"),
        ve(s, "fill", "#FC0"),
        ve(s, "d", "M14.5 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"),
        ve(a, "fill", "#CE8200"),
        ve(a, "fill-rule", "evenodd"),
        ve(
          a,
          "d",
          "M14.5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
        ),
        ve(a, "clip-rule", "evenodd"),
        ve(l, "fill", "#CE8200"),
        ve(
          l,
          "d",
          "M11.471 11.979A4.992 4.992 0 0 1 9.5 8c0-.67.131-1.308.37-1.891a3.5 3.5 0 1 0 1.601 5.87Z",
        ),
        ve(c, "fill", "#FC0"),
        ve(
          c,
          "d",
          "M9.586 7.07a2.5 2.5 0 1 0 1.153 4.226A4.981 4.981 0 0 1 9.5 8c0-.318.03-.63.086-.93Z",
        ),
        ve(t, "xmlns", "http://www.w3.org/2000/svg"),
        ve(t, "width", "24"),
        ve(t, "height", "24"),
        ve(t, "fill", "none"));
    },
    m(e, d) {
      (de(e, t, d),
        _e(t, o),
        _e(t, r),
        _e(t, n),
        _e(t, i),
        _e(t, s),
        _e(t, a),
        _e(t, l),
        _e(t, c));
    },
    p: he,
    i: he,
    o: he,
    d(e) {
      e && ie(t);
    },
  };
}
class Zr extends oe {
  constructor(e) {
    (super(), re(this, e, null, Kr, ne, {}));
  }
}
function Gr(e) {
  let t, o, r, n, i, s, a, l, c;
  return {
    c() {
      ((t = Ce("svg")),
        (o = Ce("path")),
        (r = Ce("path")),
        (n = Ce("path")),
        (i = Ce("path")),
        (s = Ce("path")),
        (a = Ce("path")),
        (l = Ce("path")),
        (c = Ce("path")),
        ve(o, "fill", "#CDDDFD"),
        ve(o, "fill-rule", "evenodd"),
        ve(
          o,
          "d",
          "M14.5 13.103c1.836 0 3.667.723 5.5 2.14V19l-10.5.5-.5-4.257c1.833-1.417 3.664-2.14 5.5-2.14Z",
        ),
        ve(o, "clip-rule", "evenodd"),
        ve(r, "fill", "#3183FF"),
        ve(r, "fill-rule", "evenodd"),
        ve(
          r,
          "d",
          "M9.53 15.469 9.5 19l10-.477v-3.032c-1.703-1.27-3.365-1.888-5-1.888-1.626 0-3.277.611-4.97 1.866Zm-.836-.622c1.895-1.465 3.83-2.244 5.806-2.244 1.975 0 3.91.78 5.806 2.244l.194.15v4.48l-12.03.545V15.02l.224-.173Z",
        ),
        ve(r, "clip-rule", "evenodd"),
        ve(n, "fill", "#CDDDFD"),
        ve(n, "fill-rule", "evenodd"),
        ve(
          n,
          "d",
          "m7.736 13.701-.734 2.345L7.001 20H4.5a1 1 0 0 1-1-1v-4c1.412-.669 2.824-1.102 4.236-1.299Z",
        ),
        ve(n, "clip-rule", "evenodd"),
        ve(i, "fill", "#3183FF"),
        ve(i, "fill-rule", "evenodd"),
        ve(
          i,
          "d",
          "m7.913 13.678-.475 1.086c-.988.111-1.87.308-2.646.59l-.29.11v3.529H7L7.002 20H4.5a1 1 0 0 1-1-1v-4c1.471-.697 2.942-1.138 4.413-1.322Z",
        ),
        ve(i, "clip-rule", "evenodd"),
        ve(s, "fill", "#CDDDFD"),
        ve(s, "d", "M14.5 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"),
        ve(a, "fill", "#3183FF"),
        ve(a, "fill-rule", "evenodd"),
        ve(
          a,
          "d",
          "M14.5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
        ),
        ve(a, "clip-rule", "evenodd"),
        ve(l, "fill", "#3183FF"),
        ve(
          l,
          "d",
          "M11.471 11.979A4.992 4.992 0 0 1 9.5 8c0-.67.131-1.308.37-1.891a3.5 3.5 0 1 0 1.601 5.87Z",
        ),
        ve(c, "fill", "#CDDDFD"),
        ve(
          c,
          "d",
          "M9.586 7.07a2.5 2.5 0 1 0 1.153 4.226A4.981 4.981 0 0 1 9.5 8c0-.318.03-.63.086-.93Z",
        ),
        ve(t, "xmlns", "http://www.w3.org/2000/svg"),
        ve(t, "width", "24"),
        ve(t, "height", "24"),
        ve(t, "fill", "none"));
    },
    m(e, d) {
      (de(e, t, d),
        _e(t, o),
        _e(t, r),
        _e(t, n),
        _e(t, i),
        _e(t, s),
        _e(t, a),
        _e(t, l),
        _e(t, c));
    },
    p: he,
    i: he,
    o: he,
    d(e) {
      e && ie(t);
    },
  };
}
class Yr extends oe {
  constructor(e) {
    (super(), re(this, e, null, Gr, ne, {}));
  }
}
function Jr(e) {
  let t, o;
  return {
    c() {
      ((t = Ce("svg")),
        (o = Ce("path")),
        ve(o, "fill-rule", "evenodd"),
        ve(o, "clip-rule", "evenodd"),
        ve(
          o,
          "d",
          "M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z",
        ),
        ve(t, "width", "24"),
        ve(t, "height", "24"),
        ve(t, "viewBox", "0 0 24 24"),
        ve(t, "xmlns", "http://www.w3.org/2000/svg"));
    },
    m(e, r) {
      (de(e, t, r), _e(t, o));
    },
    p: he,
    i: he,
    o: he,
    d(e) {
      e && ie(t);
    },
  };
}
class Qr extends oe {
  constructor(e) {
    (super(), re(this, e, null, Jr, ne, {}));
  }
}
function Xr(e) {
  let t, o;
  return {
    c() {
      ((t = Ce("svg")),
        (o = Ce("path")),
        ve(
          o,
          "d",
          "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
        ),
        ve(t, "viewBox", "0 0 24 24"),
        ve(t, "xmlns", "http://www.w3.org/2000/svg"));
    },
    m(e, r) {
      (de(e, t, r), _e(t, o));
    },
    p: he,
    i: he,
    o: he,
    d(e) {
      e && ie(t);
    },
  };
}
class en extends oe {
  constructor(e) {
    (super(), re(this, e, null, Xr, ne, {}));
  }
}
function tn(e) {
  let t, o, r;
  return {
    c() {
      ((t = Ce("svg")),
        (o = Ce("path")),
        (r = Ce("path")),
        ve(
          o,
          "d",
          "M20.092 3.829a4 4 0 0 0-5.657 0L10.9 7.364c-.346.621.93 1.898 2.087.741l2.862-2.862a2 2 0 0 1 2.829 2.828l-4.243 4.243-.11.102a2 2 0 0 1-2.819-.21l-.004.01c-.456-.55-1.908-.62-1.856.832a4 4 0 0 0 6.204.68l4.242-4.242a4 4 0 0 0 0-5.657Z",
        ),
        ve(
          r,
          "d",
          "M13.728 10.193a4 4 0 0 0-5.657 0L3.83 14.435a4 4 0 1 0 5.657 5.657l3.589-3.587c.163-.583-.511-1.572-1.827-1.003L8.07 18.678l-.109.102a2 2 0 0 1-2.719-2.93l4.243-4.243a2.004 2.004 0 0 1 2.582-.212l.017.015c.07.051.136.107.2.169l-.008-.006.037.034-.029-.028c.873.618 1.965.06 1.959-.682l.088.068a4.001 4.001 0 0 0-.604-.772Z",
        ),
        ve(t, "xmlns", "http://www.w3.org/2000/svg"),
        ve(t, "width", "24"),
        ve(t, "height", "24"));
    },
    m(e, n) {
      (de(e, t, n), _e(t, o), _e(t, r));
    },
    p: he,
    i: he,
    o: he,
    d(e) {
      e && ie(t);
    },
  };
}
class on extends oe {
  constructor(e) {
    (super(), re(this, e, null, tn, ne, {}));
  }
}
function rn(e) {
  let t, o;
  return {
    c() {
      ((t = Ce("svg")),
        (o = Ce("path")),
        ve(
          o,
          "d",
          "M7 8V10C6.48716 10 6.06449 10.386 6.00673 10.8834L6 11V18C6 18.5128 6.38604 18.9355 6.88338 18.9933L7 19H12C12.5128 19 12.9355 18.614 12.9933 18.1166L13 18H15V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V10C4 8.89543 4.89543 8 6 8H7ZM18 3C19.1046 3 20 3.89543 20 5V14C20 15.1046 19.1046 16 18 16H11C9.89543 16 9 15.1046 9 14V5C9 3.89543 9.89543 3 11 3H18ZM17 5H12C11.4872 5 11.0645 5.38604 11.0067 5.88338L11 6V13C11 13.5128 11.386 13.9355 11.8834 13.9933L12 14H17C17.5128 14 17.9355 13.614 17.9933 13.1166L18 13V6C18 5.48716 17.614 5.06449 17.1166 5.00673L17 5Z",
        ),
        ve(t, "width", "24"),
        ve(t, "height", "24"),
        ve(t, "viewBox", "0 0 24 24"),
        ve(t, "xmlns", "http://www.w3.org/2000/svg"));
    },
    m(e, r) {
      (de(e, t, r), _e(t, o));
    },
    p: he,
    i: he,
    o: he,
    d(e) {
      e && ie(t);
    },
  };
}
class nn extends oe {
  constructor(e) {
    (super(), re(this, e, null, rn, ne, {}));
  }
}
function sn(e) {
  let t, o;
  return {
    c() {
      ((t = Ce("svg")),
        (o = Ce("path")),
        ve(
          o,
          "d",
          "M6.46399 7.46738L6.96398 7.46461L6.52445 7.22625C6.6541 6.9872 6.78149 6.79785 6.929 6.66892C7.00918 6.59884 7.09969 6.54246 7.20305 6.50664C7.30598 6.47096 7.397 6.46435 7.46185 6.46399L7.46461 6.46397C7.7204 6.46397 7.97751 6.5633 8.17172 6.75751L12 10.5858L15.8283 6.75751C16.0236 6.56222 16.2796 6.46539 16.5326 6.46399L16.5354 6.96398L16.7737 6.52446C17.0128 6.6541 17.2021 6.78149 17.3311 6.92901C17.4011 7.00918 17.4575 7.09969 17.4934 7.20305C17.529 7.30598 17.5356 7.397 17.536 7.46185L17.536 7.46461C17.536 7.7204 17.4367 7.97751 17.2425 8.17172L13.4142 12L17.2425 15.8283C17.4378 16.0236 17.5346 16.2796 17.536 16.5326L17.536 16.5354C17.536 16.7912 17.4367 17.0483 17.2425 17.2425C17.0472 17.4378 16.7911 17.5346 16.5381 17.536L16.5354 17.536C16.2796 17.536 16.0225 17.4367 15.8283 17.2425L12 13.4142L8.17172 17.2425C7.97644 17.4378 7.72035 17.5346 7.46738 17.536L7.46461 17.536C7.20882 17.536 6.95171 17.4367 6.75751 17.2425C6.56223 17.0472 6.46539 16.7911 6.46399 16.5381L6.46398 16.5354C6.46398 16.2796 6.5633 16.0225 6.75751 15.8283L10.5858 12L6.7575 8.17172C6.56222 7.97644 6.46538 7.72035 6.46399 7.46738Z",
        ),
        ve(t, "width", "24"),
        ve(t, "height", "24"),
        ve(t, "viewBox", "0 0 24 24"),
        ve(t, "xmlns", "http://www.w3.org/2000/svg"));
    },
    m(e, r) {
      (de(e, t, r), _e(t, o));
    },
    p: he,
    i: he,
    o: he,
    d(e) {
      e && ie(t);
    },
  };
}
class an extends oe {
  constructor(e) {
    (super(), re(this, e, null, sn, ne, {}));
  }
}
function ln(e) {
  let t, o;
  const r = e[2].default,
    n = me(r, e, e[1], null);
  return {
    c() {
      ((t = $e("div")),
        n && n.c(),
        ve(t, "class", "error svelte-wrajc9"),
        ke(t, "warning", e[0]));
    },
    m(e, r) {
      (de(e, t, r), n && n.m(t, null), (o = !0));
    },
    p(e, [i]) {
      (n &&
        n.p &&
        (!o || 2 & i) &&
        pe(n, r, e, e[1], o ? we(r, e[1], i, null) : ge(e[1]), null),
        (!o || 1 & i) && ke(t, "warning", e[0]));
    },
    i(e) {
      o || (ae(n, e), (o = !0));
    },
    o(e) {
      (se(n, e), (o = !1));
    },
    d(e) {
      (e && ie(t), n && n.d(e));
    },
  };
}
function cn(e, t, o) {
  let { $$slots: r = {}, $$scope: n } = t,
    { warning: i = !1 } = t;
  return (
    (e.$$set = (e) => {
      ("warning" in e && o(0, (i = e.warning)),
        "$$scope" in e && o(1, (n = e.$$scope)));
    }),
    [i, n, r]
  );
}
let dn = class extends oe {
  constructor(e) {
    (super(), re(this, e, cn, ln, ne, { warning: 0 }));
  }
};
function un(e) {
  let t, o, r, n;
  return (
    (o = new dn({
      props: { warning: e[1], $$slots: { default: [hn] }, $$scope: { ctx: e } },
    })),
    {
      c() {
        ((t = $e("div")),
          xe(o.$$.fragment),
          ve(t, "class", "error svelte-1ontt5q"));
      },
      m(e, r) {
        (de(e, t, r), Te(o, t, null), (n = !0));
      },
      p(e, t) {
        const r = {};
        (2 & t && (r.warning = e[1]),
          5 & t && (r.$$scope = { dirty: t, ctx: e }),
          o.$set(r));
      },
      i(e) {
        n ||
          (ae(o.$$.fragment, e),
          Pe(() => {
            n && (r || (r = Ee(t, Ae, { duration: 250 }, !0)), r.run(1));
          }),
          (n = !0));
      },
      o(e) {
        (se(o.$$.fragment, e),
          r || (r = Ee(t, Ae, { duration: 250 }, !1)),
          r.run(0),
          (n = !1));
      },
      d(e) {
        (e && ie(t), Se(o), e && r && r.end());
      },
    }
  );
}
function hn(e) {
  let t;
  return {
    c() {
      t = Le(e[0]);
    },
    m(e, o) {
      de(e, t, o);
    },
    p(e, o) {
      1 & o && De(t, e[0]);
    },
    d(e) {
      e && ie(t);
    },
  };
}
function mn(e) {
  let t,
    o,
    r = e[0] && un(e);
  return {
    c() {
      (r && r.c(), (t = ue()));
    },
    m(e, n) {
      (r && r.m(e, n), de(e, t, n), (o = !0));
    },
    p(e, [o]) {
      e[0]
        ? r
          ? (r.p(e, o), 1 & o && ae(r, 1))
          : ((r = un(e)), r.c(), ae(r, 1), r.m(t.parentNode, t))
        : r &&
          (le(),
          se(r, 1, 1, () => {
            r = null;
          }),
          ce());
    },
    i(e) {
      o || (ae(r), (o = !0));
    },
    o(e) {
      (se(r), (o = !1));
    },
    d(e) {
      (e && ie(t), r && r.d(e));
    },
  };
}
function pn(e, t, o) {
  let { message: r = "" } = t,
    { warning: n = !1 } = t;
  return (
    (e.$$set = (e) => {
      ("message" in e && o(0, (r = e.message)),
        "warning" in e && o(1, (n = e.warning)));
    }),
    [r, n]
  );
}
class gn extends oe {
  constructor(e) {
    (super(), re(this, e, pn, mn, ne, { message: 0, warning: 1 }));
  }
}
function wn(e) {
  let t,
    o,
    r,
    n,
    i,
    s,
    a,
    l,
    c,
    d,
    u,
    h = !1;
  s = new nt({ props: { name: e[4] } });
  const m = e[6].default,
    p = me(m, e, e[5], null);
  return (
    (c = Oe(e[11][0])),
    {
      c() {
        ((t = $e("label")),
          (o = $e("input")),
          (r = be()),
          (n = $e("div")),
          (i = $e("div")),
          xe(s.$$.fragment),
          (a = be()),
          p && p.c(),
          (o.disabled = e[2]),
          ve(o, "name", "type"),
          ve(o, "type", "radio"),
          (o.__value = e[1]),
          je(o, o.__value),
          ve(o, "class", "svelte-1p0jxjr"),
          ve(i, "class", "icon svelte-1p0jxjr"),
          ve(n, "class", "label svelte-1p0jxjr"),
          ke(n, "selected", e[3]),
          ve(t, "class", "link svelte-1p0jxjr"),
          ke(t, "active", e[0] === e[1]),
          ke(t, "disabled", e[2]),
          c.p(o));
      },
      m(c, h) {
        (de(c, t, h),
          _e(t, o),
          (o.checked = o.__value === e[0]),
          _e(t, r),
          _e(t, n),
          _e(n, i),
          Te(s, i, null),
          _e(n, a),
          p && p.m(n, null),
          (l = !0),
          d ||
            ((u = [
              Ve(o, "change", e[10]),
              Ve(o, "change", e[9]),
              Ve(t, "dblclick", e[7]),
              Ve(t, "mouseenter", e[8]),
            ]),
            (d = !0)));
      },
      p(e, [r]) {
        ((!l || 4 & r) && (o.disabled = e[2]),
          (!l || 2 & r) && ((o.__value = e[1]), je(o, o.__value), (h = !0)),
          (h || 1 & r) && (o.checked = o.__value === e[0]));
        const i = {};
        (16 & r && (i.name = e[4]),
          s.$set(i),
          p &&
            p.p &&
            (!l || 32 & r) &&
            pe(p, m, e, e[5], l ? we(m, e[5], r, null) : ge(e[5]), null),
          (!l || 8 & r) && ke(n, "selected", e[3]),
          (!l || 3 & r) && ke(t, "active", e[0] === e[1]),
          (!l || 4 & r) && ke(t, "disabled", e[2]));
      },
      i(e) {
        l || (ae(s.$$.fragment, e), ae(p, e), (l = !0));
      },
      o(e) {
        (se(s.$$.fragment, e), se(p, e), (l = !1));
      },
      d(e) {
        (e && ie(t), Se(s), p && p.d(e), c.r(), (d = !1), Ie(u));
      },
    }
  );
}
function fn(e, t, o) {
  let { $$slots: r = {}, $$scope: n } = t,
    { value: i } = t,
    { disabled: s = !1 } = t,
    { group: a } = t,
    { selected: l = !1 } = t,
    { icon: c } = t;
  return (
    (e.$$set = (e) => {
      ("value" in e && o(1, (i = e.value)),
        "disabled" in e && o(2, (s = e.disabled)),
        "group" in e && o(0, (a = e.group)),
        "selected" in e && o(3, (l = e.selected)),
        "icon" in e && o(4, (c = e.icon)),
        "$$scope" in e && o(5, (n = e.$$scope)));
    }),
    [
      a,
      i,
      s,
      l,
      c,
      n,
      r,
      function (t) {
        Me.call(this, e, t);
      },
      function (t) {
        Me.call(this, e, t);
      },
      function (t) {
        Me.call(this, e, t);
      },
      function () {
        ((a = this.__value), o(0, a));
      },
      [[]],
    ]
  );
}
class bn extends oe {
  constructor(e) {
    (super(),
      re(this, e, fn, wn, ne, {
        value: 1,
        disabled: 2,
        group: 0,
        selected: 3,
        icon: 4,
      }));
  }
}
function yn(e) {
  let t,
    o,
    r,
    n,
    i,
    s,
    a,
    l,
    c,
    d,
    u,
    h,
    m = !1;
  s = new nt({ props: { name: e[5] } });
  const p = e[7].default,
    g = me(p, e, e[6], null);
  return (
    (d = Oe(e[12][0])),
    {
      c() {
        ((t = $e("label")),
          (o = $e("input")),
          (r = be()),
          (n = $e("div")),
          (i = $e("div")),
          xe(s.$$.fragment),
          (a = be()),
          (l = $e("div")),
          g && g.c(),
          (o.disabled = e[3]),
          ve(o, "name", "type"),
          ve(o, "type", "radio"),
          (o.__value = e[1]),
          je(o, o.__value),
          ve(o, "class", "svelte-cq5xlu"),
          ve(i, "class", "icon svelte-cq5xlu"),
          ve(l, "class", "title svelte-cq5xlu"),
          ve(n, "class", "label svelte-cq5xlu"),
          ke(n, "selected", e[4]),
          ve(t, "class", "link svelte-cq5xlu"),
          ke(t, "active", e[0] === e[1] || e[2]),
          ke(t, "disabled", e[3]),
          d.p(o));
      },
      m(d, m) {
        (de(d, t, m),
          _e(t, o),
          (o.checked = o.__value === e[0]),
          _e(t, r),
          _e(t, n),
          _e(n, i),
          Te(s, i, null),
          _e(n, a),
          _e(n, l),
          g && g.m(l, null),
          (c = !0),
          u ||
            ((h = [
              Ve(o, "change", e[11]),
              Ve(o, "change", e[10]),
              Ve(t, "dblclick", e[8]),
              Ve(t, "mouseenter", e[9]),
            ]),
            (u = !0)));
      },
      p(e, [r]) {
        ((!c || 8 & r) && (o.disabled = e[3]),
          (!c || 2 & r) && ((o.__value = e[1]), je(o, o.__value), (m = !0)),
          (m || 1 & r) && (o.checked = o.__value === e[0]));
        const i = {};
        (32 & r && (i.name = e[5]),
          s.$set(i),
          g &&
            g.p &&
            (!c || 64 & r) &&
            pe(g, p, e, e[6], c ? we(p, e[6], r, null) : ge(e[6]), null),
          (!c || 16 & r) && ke(n, "selected", e[4]),
          (!c || 7 & r) && ke(t, "active", e[0] === e[1] || e[2]),
          (!c || 8 & r) && ke(t, "disabled", e[3]));
      },
      i(e) {
        c || (ae(s.$$.fragment, e), ae(g, e), (c = !0));
      },
      o(e) {
        (se(s.$$.fragment, e), se(g, e), (c = !1));
      },
      d(e) {
        (e && ie(t), Se(s), g && g.d(e), d.r(), (u = !1), Ie(h));
      },
    }
  );
}
function _n(e, t, o) {
  let { $$slots: r = {}, $$scope: n } = t,
    { value: i } = t,
    { checked: s = !1 } = t,
    { disabled: a = !1 } = t,
    { group: l } = t,
    { selected: c = !1 } = t,
    { icon: d } = t;
  return (
    (e.$$set = (e) => {
      ("value" in e && o(1, (i = e.value)),
        "checked" in e && o(2, (s = e.checked)),
        "disabled" in e && o(3, (a = e.disabled)),
        "group" in e && o(0, (l = e.group)),
        "selected" in e && o(4, (c = e.selected)),
        "icon" in e && o(5, (d = e.icon)),
        "$$scope" in e && o(6, (n = e.$$scope)));
    }),
    [
      l,
      i,
      s,
      a,
      c,
      d,
      n,
      r,
      function (t) {
        Me.call(this, e, t);
      },
      function (t) {
        Me.call(this, e, t);
      },
      function (t) {
        Me.call(this, e, t);
      },
      function () {
        ((l = this.__value), o(0, l));
      },
      [[]],
    ]
  );
}
class Cn extends oe {
  constructor(e) {
    (super(),
      re(this, e, _n, yn, ne, {
        value: 1,
        checked: 2,
        disabled: 3,
        group: 0,
        selected: 4,
        icon: 5,
      }));
  }
}
function vn(e) {
  let t, o;
  return (
    (t = new nt({ props: { name: nn } })),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p: he,
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function kn(e) {
  let t, o, r, n, i;
  return (
    (n = new it({
      props: { $$slots: { default: [vn] }, $$scope: { ctx: e } },
    })),
    e[4](n),
    n.$on("copy", e[1]),
    {
      c() {
        ((t = $e("div")),
          (o = $e("div")),
          (o.textContent =
            "Please keep your username and passwords in a safe place"),
          (r = be()),
          xe(n.$$.fragment),
          ve(o, "class", "text svelte-c2557r"),
          ve(t, "class", "copy svelte-c2557r"));
      },
      m(e, s) {
        (de(e, t, s), _e(t, o), _e(t, r), Te(n, t, null), (i = !0));
      },
      p(e, [t]) {
        const o = {};
        (32 & t && (o.$$scope = { dirty: t, ctx: e }), n.$set(o));
      },
      i(e) {
        i || (ae(n.$$.fragment, e), (i = !0));
      },
      o(e) {
        (se(n.$$.fragment, e), (i = !1));
      },
      d(o) {
        (o && ie(t), e[4](null), Se(n));
      },
    }
  );
}
function $n(e, t, o) {
  let r,
    { user: n } = t,
    { investor: i } = t;
  return (
    (e.$$set = (e) => {
      ("user" in e && o(2, (n = e.user)),
        "investor" in e && o(3, (i = e.investor)));
    }),
    [
      r,
      function () {
        if (!n) return;
        let e = "";
        const {
          name: t,
          server: o,
          group: s,
          currency: a,
          login: l,
          password: c,
        } = n;
        ((e += t
          ? `${window.tr(window.lang.login.form.name.title)}: ${t}`
          : ""),
          (e += `\n${window.tr(window.lang.login.form.server)}: ${o}`),
          (e +=
            void 0 !== s && a
              ? `\n${window.tr(window.lang.login.form.type)}: ${s}`
              : ""),
          (e += `\n${window.tr(window.lang.login.form.login)}: ${l}`),
          (e += `\n${window.tr(window.lang.login.form.password)}: ${c}`),
          (e += i
            ? `\n${window.tr(window.lang.login.form.investor)}: ${i}`
            : ""),
          r.copy(e));
      },
      n,
      i,
      function (e) {
        Re[e ? "unshift" : "push"](() => {
          ((r = e), o(0, r));
        });
      },
    ]
  );
}
class Sn extends oe {
  constructor(e) {
    (super(), re(this, e, $n, kn, ne, { user: 2, investor: 3 }));
  }
}
function En(e) {
  const t = e[3].default;
  e[4] = t;
}
function An(e) {
  let t, o;
  return (
    En(e),
    (t = new e[4]({ props: { traderConfig: e[0] } })),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p(e, o) {
        En(e);
        const r = {};
        (1 & o && (r.traderConfig = e[0]), t.$set(r));
      },
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function Pn(e) {
  let t, o, r, n, i, s, a, l, c, d, u;
  return (
    (r = new nt({ props: { name: Qr } })),
    (l = new st({
      props: {
        module: Tn,
        $$slots: {
          default: [
            An,
            ({ module: e }) => ({ 3: e }),
            ({ module: e }) => (e ? 8 : 0),
          ],
        },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        ((t = $e("div")),
          (o = $e("button")),
          xe(r.$$.fragment),
          (n = be()),
          (i = $e("div")),
          (i.textContent = `${window.tr(window.lang.login.brokerInformation.title)}`),
          (s = be()),
          (a = $e("div")),
          xe(l.$$.fragment),
          ve(o, "class", "back svelte-e7iij9"),
          ve(o, "title", window.tr(window.lang.ui.screen.back)),
          ve(i, "class", "title svelte-e7iij9"),
          ve(t, "class", "header svelte-e7iij9"),
          ve(a, "class", "bi-content svelte-e7iij9"));
      },
      m(h, m) {
        (de(h, t, m),
          _e(t, o),
          Te(r, o, null),
          _e(t, n),
          _e(t, i),
          de(h, s, m),
          de(h, a, m),
          Te(l, a, null),
          (c = !0),
          d || ((u = Ve(o, "click", e[2])), (d = !0)));
      },
      p(e, [t]) {
        const o = {};
        (33 & t && (o.$$scope = { dirty: t, ctx: e }), l.$set(o));
      },
      i(e) {
        c || (ae(r.$$.fragment, e), ae(l.$$.fragment, e), (c = !0));
      },
      o(e) {
        (se(r.$$.fragment, e), se(l.$$.fragment, e), (c = !1));
      },
      d(e) {
        (e && (ie(t), ie(s), ie(a)), Se(r), Se(l), (d = !1), u());
      },
    }
  );
}
const Tn = () => ht(() => import("./B48bPHA_.js"), []);
function xn(e, t, o) {
  const r = Be();
  let { traderConfig: n } = t;
  return (
    (e.$$set = (e) => {
      "traderConfig" in e && o(0, (n = e.traderConfig));
    }),
    [n, r, () => r("back")]
  );
}
class Dn extends oe {
  constructor(e) {
    (super(), re(this, e, xn, Pn, ne, { traderConfig: 0 }));
  }
}
let Ln = null,
  On = !1;
const In = (function () {
  if (
    (On ||
      ((On = !0),
      Ln ||
        ((Ln = document.createElement("div")),
        (Ln.className = "GoogleAd Advertisment BannerAd"),
        (Ln.id = "yandex_ad"),
        (Ln.style.width = "1px"),
        (Ln.style.height = "1px"),
        (Ln.style.visibility = "hidden"),
        (Ln.style.position = "absolute"),
        document.body.appendChild(Ln))),
    !Ln)
  )
    return !1;
  const e = 0 === Ln.offsetHeight;
  try {
    document.body.removeChild(Ln);
  } catch (t) {}
  return ((Ln = null), e);
})();
function jn(e, t, o) {
  let r,
    n = "error";
  switch (e) {
    case 1:
      r = " Internal Error";
      break;
    case 2:
      r = " Server is not available";
      break;
    case 3:
      r = " Invalid account or password";
      break;
    case 4:
      r = " ";
      break;
    case 5:
      5 === t
        ? (r = " Invalid account OTP")
        : ((r = " Enter account OTP"), (n = "warning"));
      break;
    case 6:
      ((r = " Enable 2FA/TOTP"), (n = "warning"));
      break;
    case 201:
      r = " Invalid account OTP";
      break;
    case 7:
      r = " Invalid e-mail";
      break;
    case 8:
      r = " Invalid phone";
      break;
    case 9:
      r = " Authorization using SSL certificates is not supported";
      break;
    case 100:
      r = " No connection";
      break;
    case 104:
      r = In
        ? "No connection, try to disable AdBlockers"
        : "Connection closed or not established";
      break;
    case 408:
      r = " Server is not responding, please try again.";
      break;
    case 1031:
      r = " Invalid verification code";
      break;
    case 2e3:
      r = ` Use ${o ?? 8} or more characters.`;
      break;
    case 2001:
      r =
        " Password must include lower- and uppercase letters, numbers, and special symbols.";
      break;
    case 2005:
      r = " Current password is incorrect.";
      break;
    case 2006:
      r = " Passwords do not match.";
      break;
    case 2007:
      r = " Please enter the password.";
      break;
    case 2008:
      r = " Please enter the current password.";
      break;
    default:
      r = `Error (${e})`;
  }
  return { message: r, type: n, code: e };
}
Symbol.toStringTag;
const { Boolean: Vn } = We;
function Mn(e) {
  e[53] = e[50].Connect;
}
function Rn(e) {
  e[52] = e[50].Existing;
}
function Bn(e) {
  e[51] = e[50].Real;
}
function Hn(e) {
  e[49] = e[50].Demo;
}
function Nn(e, t, o) {
  const r = e.slice();
  return ((r[54] = t[o]), r);
}
function zn(e) {
  let t,
    o,
    r,
    n,
    i,
    s,
    a,
    l,
    c = window.tr(window.lang.login.tab.accounts) + "";
  return {
    c() {
      ((t = $e("div")),
        (o = $e("button")),
        (o.textContent = `${window.tr(window.lang.login.tab.loginRegister)}`),
        (r = be()),
        (n = $e("button")),
        (i = Le(c)),
        ve(o, "type", "button"),
        ve(o, "class", "tab svelte-1qopce8"),
        ke(o, "active", 1 === e[15]),
        ve(n, "type", "button"),
        ve(n, "class", "tab svelte-1qopce8"),
        (n.disabled = s = !e[14].length),
        ke(n, "active", 2 === e[15]),
        ve(t, "class", "tabs svelte-1qopce8"));
    },
    m(s, c) {
      (de(s, t, c),
        _e(t, o),
        _e(t, r),
        _e(t, n),
        _e(n, i),
        a || ((l = [Ve(o, "click", e[34]), Ve(n, "click", e[35])]), (a = !0)));
    },
    p(e, t) {
      (32768 & t[0] && ke(o, "active", 1 === e[15]),
        16384 & t[0] && s !== (s = !e[14].length) && (n.disabled = s),
        32768 & t[0] && ke(n, "active", 2 === e[15]));
    },
    d(e) {
      (e && ie(t), (a = !1), Ie(l));
    },
  };
}
function Un(e) {
  let t, o, r, n, i, s;
  function a(t) {
    e[36](t);
  }
  let l = {
    checked: !1,
    value: Fo.Connect,
    icon: on,
    disabled: e[16].otpForm,
    $$slots: { default: [Fn] },
    $$scope: { ctx: e },
  };
  (void 0 !== e[16].auth && (l.group = e[16].auth),
    (o = new Cn({ props: l })),
    Re.push(() => ze(o, "group", a)),
    o.$on("change", e[24]),
    o.$on("mouseenter", Di));
  let c = e[4].groups.demo.all.list.length && qn(e),
    d = e[4].groups.real.all.list.length && Kn(e);
  return {
    c() {
      ((t = $e("div")),
        xe(o.$$.fragment),
        (n = be()),
        c && c.c(),
        (i = be()),
        d && d.c(),
        ve(t, "class", "menu svelte-1qopce8"));
    },
    m(e, r) {
      (de(e, t, r),
        Te(o, t, null),
        _e(t, n),
        c && c.m(t, null),
        _e(t, i),
        d && d.m(t, null),
        (s = !0));
    },
    p(e, n) {
      const s = {};
      (65536 & n[0] && (s.checked = !1),
        65536 & n[0] && (s.disabled = e[16].otpForm),
        67108864 & n[1] && (s.$$scope = { dirty: n, ctx: e }),
        !r &&
          65536 & n[0] &&
          ((r = !0), (s.group = e[16].auth), Ue(() => (r = !1))),
        o.$set(s),
        e[4].groups.demo.all.list.length
          ? c
            ? (c.p(e, n), 16 & n[0] && ae(c, 1))
            : ((c = qn(e)), c.c(), ae(c, 1), c.m(t, i))
          : c &&
            (le(),
            se(c, 1, 1, () => {
              c = null;
            }),
            ce()),
        e[4].groups.real.all.list.length
          ? d
            ? (d.p(e, n), 16 & n[0] && ae(d, 1))
            : ((d = Kn(e)), d.c(), ae(d, 1), d.m(t, null))
          : d &&
            (le(),
            se(d, 1, 1, () => {
              d = null;
            }),
            ce()));
    },
    i(e) {
      s || (ae(o.$$.fragment, e), ae(c), ae(d), (s = !0));
    },
    o(e) {
      (se(o.$$.fragment, e), se(c), se(d), (s = !1));
    },
    d(e) {
      (e && ie(t), Se(o), c && c.d(), d && d.d());
    },
  };
}
function Fn(e) {
  let t,
    o = window.tr(window.lang.login.connect.title) + "";
  return {
    c() {
      t = Le(o);
    },
    m(e, o) {
      de(e, t, o);
    },
    p: he,
    d(e) {
      e && ie(t);
    },
  };
}
function qn(e) {
  let t, o, r;
  function n(t) {
    e[37](t);
  }
  let i = {
    value: Fo.OpenDemo,
    icon: Fr,
    disabled: e[16].otpForm,
    $$slots: { default: [Wn] },
    $$scope: { ctx: e },
  };
  return (
    void 0 !== e[16].auth && (i.group = e[16].auth),
    (t = new Cn({ props: i })),
    Re.push(() => ze(t, "group", n)),
    t.$on("change", e[24]),
    t.$on("mouseenter", Li),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, o) {
        (Te(t, e, o), (r = !0));
      },
      p(e, r) {
        const n = {};
        (65536 & r[0] && (n.disabled = e[16].otpForm),
          67108864 & r[1] && (n.$$scope = { dirty: r, ctx: e }),
          !o &&
            65536 & r[0] &&
            ((o = !0), (n.group = e[16].auth), Ue(() => (o = !1))),
          t.$set(n));
      },
      i(e) {
        r || (ae(t.$$.fragment, e), (r = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (r = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function Wn(e) {
  let t,
    o = window.tr(window.lang.login.demo.title) + "";
  return {
    c() {
      t = Le(o);
    },
    m(e, o) {
      de(e, t, o);
    },
    p: he,
    d(e) {
      e && ie(t);
    },
  };
}
function Kn(e) {
  let t, o, r;
  function n(t) {
    e[38](t);
  }
  let i = {
    value: Fo.OpenReal,
    icon: Zr,
    disabled: e[16].otpForm,
    $$slots: { default: [Zn] },
    $$scope: { ctx: e },
  };
  return (
    void 0 !== e[16].auth && (i.group = e[16].auth),
    (t = new Cn({ props: i })),
    Re.push(() => ze(t, "group", n)),
    t.$on("change", e[24]),
    t.$on("mouseenter", Oi),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, o) {
        (Te(t, e, o), (r = !0));
      },
      p(e, r) {
        const n = {};
        (65536 & r[0] && (n.disabled = e[16].otpForm),
          67108864 & r[1] && (n.$$scope = { dirty: r, ctx: e }),
          !o &&
            65536 & r[0] &&
            ((o = !0), (n.group = e[16].auth), Ue(() => (o = !1))),
          t.$set(n));
      },
      i(e) {
        r || (ae(t.$$.fragment, e), (r = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (r = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function Zn(e) {
  let t,
    o = window.tr(window.lang.login.real.title) + "";
  return {
    c() {
      t = Le(o);
    },
    m(e, o) {
      de(e, t, o);
    },
    p: he,
    d(e) {
      e && ie(t);
    },
  };
}
function Gn(e) {
  let t,
    o,
    r = Fe(e[14]),
    n = [];
  for (let s = 0; s < r.length; s += 1) n[s] = Jn(Nn(e, r, s));
  const i = (e) =>
    se(n[e], 1, 1, () => {
      n[e] = null;
    });
  return {
    c() {
      t = $e("div");
      for (let e = 0; e < n.length; e += 1) n[e].c();
      ve(t, "class", "accounts svelte-1qopce8");
    },
    m(e, r) {
      de(e, t, r);
      for (let o = 0; o < n.length; o += 1) n[o] && n[o].m(t, null);
      o = !0;
    },
    p(e, o) {
      if (16990208 & o[0]) {
        let s;
        for (r = Fe(e[14]), s = 0; s < r.length; s += 1) {
          const i = Nn(e, r, s);
          n[s]
            ? (n[s].p(i, o), ae(n[s], 1))
            : ((n[s] = Jn(i)), n[s].c(), ae(n[s], 1), n[s].m(t, null));
        }
        for (le(), s = r.length; s < n.length; s += 1) i(s);
        ce();
      }
    },
    i(e) {
      if (!o) {
        for (let e = 0; e < r.length; e += 1) ae(n[e]);
        o = !0;
      }
    },
    o(e) {
      n = n.filter(Vn);
      for (let t = 0; t < n.length; t += 1) se(n[t]);
      o = !1;
    },
    d(e) {
      (e && ie(t), qe(n, e));
    },
  };
}
function Yn(e) {
  var t;
  let o,
    r,
    n,
    i,
    s,
    a,
    l,
    c,
    d,
    u,
    h,
    m,
    p = e[54].name + "",
    g = e[54].login + "",
    w = Qt((null == (t = e[54]) ? void 0 : t.balance) ?? 0, 2) + "",
    f = (e[54].currency ?? "") + "";
  return {
    c() {
      ((o = $e("div")),
        (r = $e("div")),
        (n = Le(p)),
        (s = be()),
        (a = $e("div")),
        (l = Le(g)),
        (c = be()),
        (d = Le(w)),
        (u = be()),
        (h = Le(f)),
        (m = be()),
        ve(r, "class", "account-name svelte-1qopce8"),
        ve(r, "title", (i = e[54].name)),
        ve(a, "class", "account-info svelte-1qopce8"),
        ve(o, "class", "account-item svelte-1qopce8"));
    },
    m(e, t) {
      (de(e, o, t),
        _e(o, r),
        _e(r, n),
        _e(o, s),
        _e(o, a),
        _e(a, l),
        _e(a, c),
        _e(a, d),
        _e(a, u),
        _e(a, h),
        de(e, m, t));
    },
    p(e, t) {
      var o;
      (16384 & t[0] && p !== (p = e[54].name + "") && De(n, p),
        16384 & t[0] && i !== (i = e[54].name) && ve(r, "title", i),
        16384 & t[0] && g !== (g = e[54].login + "") && De(l, g),
        16384 & t[0] &&
          w !==
            (w = Qt((null == (o = e[54]) ? void 0 : o.balance) ?? 0, 2) + "") &&
          De(d, w),
        16384 & t[0] && f !== (f = (e[54].currency ?? "") + "") && De(h, f));
    },
    d(e) {
      e && (ie(o), ie(m));
    },
  };
}
function Jn(e) {
  var t;
  let o, r, n;
  function i(t) {
    e[39](t);
  }
  let s = {
    value: e[54].id,
    icon: Ti(e[54].type),
    disabled: e[16].otpForm,
    selected:
      (null == (t = e[17].modules) ? void 0 : t.account.accountStore.login) ===
      e[54].login,
    $$slots: { default: [Yn] },
    $$scope: { ctx: e },
  };
  return (
    void 0 !== e[16].auth && (s.group = e[16].auth),
    (o = new bn({ props: s })),
    Re.push(() => ze(o, "group", i)),
    o.$on("change", e[24]),
    o.$on("mouseenter", Ii),
    {
      c() {
        xe(o.$$.fragment);
      },
      m(e, t) {
        (Te(o, e, t), (n = !0));
      },
      p(e, t) {
        var n;
        const i = {};
        (16384 & t[0] && (i.value = e[54].id),
          16384 & t[0] && (i.icon = Ti(e[54].type)),
          65536 & t[0] && (i.disabled = e[16].otpForm),
          147456 & t[0] &&
            (i.selected =
              (null == (n = e[17].modules)
                ? void 0
                : n.account.accountStore.login) === e[54].login),
          (16384 & t[0]) | (67108864 & t[1]) &&
            (i.$$scope = { dirty: t, ctx: e }),
          !r &&
            65536 & t[0] &&
            ((r = !0), (i.group = e[16].auth), Ue(() => (r = !1))),
          o.$set(i));
      },
      i(e) {
        n || (ae(o.$$.fragment, e), (n = !0));
      },
      o(e) {
        (se(o.$$.fragment, e), (n = !1));
      },
      d(e) {
        Se(o, e);
      },
    }
  );
}
function Qn(e) {
  let t,
    o,
    r,
    n,
    i,
    s = new Date().getFullYear() + "";
  return {
    c() {
      ((t = $e("span")),
        (o = Le("© 2000 – ")),
        (r = Le(s)),
        (n = Le(", MetaQuotes Ltd.\r\n                ")),
        (i = $e("a")),
        (i.textContent = `${window.tr(window.lang.login.licenseAgreement)}`),
        ve(i, "target", "_blank"),
        ve(i, "href", "https://www.metaquotes.net/licenses/terminal/mt5"),
        ve(i, "class", "svelte-1qopce8"),
        ve(t, "class", "copyright svelte-1qopce8"));
    },
    m(e, s) {
      (de(e, t, s), _e(t, o), _e(t, r), _e(t, n), _e(t, i));
    },
    p: he,
    d(e) {
      e && ie(t);
    },
  };
}
function Xn(e) {
  let t,
    o,
    r,
    n,
    i = {
      ctx: e,
      current: null,
      token: null,
      hasCatch: !1,
      pending: si,
      then: ni,
      catch: ri,
      value: 50,
      blocks: [, , ,],
    };
  return (
    Ke(
      ht(() => import("./C4q1ypxK.js"), []),
      i,
    ),
    {
      c() {
        ((t = $e("div")),
          i.block.c(),
          ve(t, "class", "wrap-connect svelte-1qopce8"));
      },
      m(e, o) {
        (de(e, t, o),
          i.block.m(t, (i.anchor = null)),
          (i.mount = () => t),
          (i.anchor = null),
          (n = !0));
      },
      p(t, o) {
        Ye(i, (e = t), o);
      },
      i(e) {
        n ||
          (ae(i.block),
          e &&
            Pe(() => {
              n &&
                (r && r.end(1),
                (o = Ge(t, xi, { duration: Pi, main: !0 })),
                o.start());
            }),
          (n = !0));
      },
      o(e) {
        for (let t = 0; t < 3; t += 1) {
          const e = i.blocks[t];
          se(e);
        }
        (o && o.invalidate(), e && (r = Ze(t, xi, { duration: Pi })), (n = !1));
      },
      d(e) {
        (e && ie(t),
          i.block.d(),
          (i.token = null),
          (i = null),
          e && r && r.end());
      },
    }
  );
}
function ei(e) {
  let t,
    o,
    r = e[12].id,
    n = di(e);
  return {
    c() {
      (n.c(), (t = ue()));
    },
    m(e, r) {
      (n.m(e, r), de(e, t, r), (o = !0));
    },
    p(e, o) {
      4096 & o[0] && ne(r, (r = e[12].id))
        ? (le(),
          se(n, 1, 1, he),
          ce(),
          (n = di(e)),
          n.c(),
          ae(n, 1),
          n.m(t.parentNode, t))
        : n.p(e, o);
    },
    i(e) {
      o || (ae(n), (o = !0));
    },
    o(e) {
      (se(n), (o = !1));
    },
    d(e) {
      (e && ie(t), n.d(e));
    },
  };
}
function ti(e) {
  let t,
    o,
    r,
    n,
    i = {
      ctx: e,
      current: null,
      token: null,
      hasCatch: !1,
      pending: pi,
      then: hi,
      catch: ui,
      value: 50,
      blocks: [, , ,],
    };
  return (
    Ke(
      ht(() => import("./DyLlTbfr.js").then((e) => e.r), []),
      i,
    ),
    {
      c() {
        ((t = $e("div")),
          i.block.c(),
          ve(t, "class", "wrap-real wrap svelte-1qopce8"));
      },
      m(e, o) {
        (de(e, t, o),
          i.block.m(t, (i.anchor = null)),
          (i.mount = () => t),
          (i.anchor = null),
          (n = !0));
      },
      p(t, o) {
        Ye(i, (e = t), o);
      },
      i(e) {
        n ||
          (ae(i.block),
          e &&
            Pe(() => {
              n &&
                (r && r.end(1),
                (o = Ge(t, xi, { duration: Pi, main: !0 })),
                o.start());
            }),
          (n = !0));
      },
      o(e) {
        for (let t = 0; t < 3; t += 1) {
          const e = i.blocks[t];
          se(e);
        }
        (o && o.invalidate(), e && (r = Ze(t, xi, { duration: Pi })), (n = !1));
      },
      d(e) {
        (e && ie(t),
          i.block.d(),
          (i.token = null),
          (i = null),
          e && r && r.end());
      },
    }
  );
}
function oi(e) {
  let t,
    o,
    r,
    n,
    i = {
      ctx: e,
      current: null,
      token: null,
      hasCatch: !1,
      pending: bi,
      then: wi,
      catch: gi,
      value: 50,
      blocks: [, , ,],
    };
  return (
    Ke(
      ht(() => import("./D2ohBvnI.js"), []),
      i,
    ),
    {
      c() {
        ((t = $e("div")),
          i.block.c(),
          ve(t, "class", "wrap-demo wrap svelte-1qopce8"));
      },
      m(e, o) {
        (de(e, t, o),
          i.block.m(t, (i.anchor = null)),
          (i.mount = () => t),
          (i.anchor = null),
          (n = !0));
      },
      p(t, o) {
        Ye(i, (e = t), o);
      },
      i(e) {
        n ||
          (ae(i.block),
          e &&
            Pe(() => {
              n &&
                (r && r.end(1),
                (o = Ge(t, xi, { duration: Pi, main: !0 })),
                o.start());
            }),
          (n = !0));
      },
      o(e) {
        for (let t = 0; t < 3; t += 1) {
          const e = i.blocks[t];
          se(e);
        }
        (o && o.invalidate(), e && (r = Ze(t, xi, { duration: Pi })), (n = !1));
      },
      d(e) {
        (e && ie(t),
          i.block.d(),
          (i.token = null),
          (i = null),
          e && r && r.end());
      },
    }
  );
}
function ri(e) {
  return { c: he, m: he, p: he, i: he, o: he, d: he };
}
function ni(e) {
  let t, o, r;
  function n(t) {
    e[44](t);
  }
  Mn(e);
  let i = {
    traderConfig: e[4],
    usersStore: e[6],
    layoutStore: e[5],
    authController: e[9],
    authStore: e[8],
    $$slots: { default: [ii] },
    $$scope: { ctx: e },
  };
  return (
    void 0 !== e[13] && (i.showBrokerInfo = e[13]),
    (t = new e[53]({ props: i })),
    Re.push(() => ze(t, "showBrokerInfo", n)),
    t.$on("submit", e[22]),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, o) {
        (Te(t, e, o), (r = !0));
      },
      p(e, r) {
        Mn(e);
        const n = {};
        (16 & r[0] && (n.traderConfig = e[4]),
          64 & r[0] && (n.usersStore = e[6]),
          32 & r[0] && (n.layoutStore = e[5]),
          512 & r[0] && (n.authController = e[9]),
          256 & r[0] && (n.authStore = e[8]),
          (16 & r[0]) | (67108864 & r[1]) && (n.$$scope = { dirty: r, ctx: e }),
          !o &&
            8192 & r[0] &&
            ((o = !0), (n.showBrokerInfo = e[13]), Ue(() => (o = !1))),
          t.$set(n));
      },
      i(e) {
        r || (ae(t.$$.fragment, e), (r = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (r = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function ii(e) {
  let t, o;
  return (
    (t = new Dn({ props: { traderConfig: e[4] } })),
    t.$on("back", e[29]),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p(e, o) {
        const r = {};
        (16 & o[0] && (r.traderConfig = e[4]), t.$set(r));
      },
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function si(e) {
  let t, o, r;
  return (
    (o = new at({})),
    {
      c() {
        ((t = $e("div")),
          xe(o.$$.fragment),
          ve(t, "class", "wrap-connect loading svelte-1qopce8"));
      },
      m(e, n) {
        (de(e, t, n), Te(o, t, null), (r = !0));
      },
      p: he,
      i(e) {
        r || (ae(o.$$.fragment, e), (r = !0));
      },
      o(e) {
        (se(o.$$.fragment, e), (r = !1));
      },
      d(e) {
        (e && ie(t), Se(o));
      },
    }
  );
}
function ai(e) {
  return { c: he, m: he, p: he, i: he, o: he, d: he };
}
function li(e) {
  var t;
  let o, r, n;
  function i(t) {
    e[43](t);
  }
  Rn(e);
  let s = {
    user: e[12],
    current:
      (null == (t = e[17].modules) ? void 0 : t.account.accountStore.login) ===
      e[12].login,
    authStore: e[8],
    authController: e[9],
    layoutStore: e[5],
    usersController: e[7],
  };
  return (
    void 0 !== e[1] && (s.autoConnect = e[1]),
    (o = new e[52]({ props: s })),
    Re.push(() => ze(o, "autoConnect", i)),
    o.$on("connect", e[23]),
    o.$on("logout", e[27]),
    o.$on("remove", e[28]),
    {
      c() {
        xe(o.$$.fragment);
      },
      m(e, t) {
        (Te(o, e, t), (n = !0));
      },
      p(e, t) {
        var n;
        Rn(e);
        const i = {};
        (4096 & t[0] && (i.user = e[12]),
          135168 & t[0] &&
            (i.current =
              (null == (n = e[17].modules)
                ? void 0
                : n.account.accountStore.login) === e[12].login),
          256 & t[0] && (i.authStore = e[8]),
          512 & t[0] && (i.authController = e[9]),
          32 & t[0] && (i.layoutStore = e[5]),
          128 & t[0] && (i.usersController = e[7]),
          !r &&
            2 & t[0] &&
            ((r = !0), (i.autoConnect = e[1]), Ue(() => (r = !1))),
          o.$set(i));
      },
      i(e) {
        n || (ae(o.$$.fragment, e), (n = !0));
      },
      o(e) {
        (se(o.$$.fragment, e), (n = !1));
      },
      d(e) {
        Se(o, e);
      },
    }
  );
}
function ci(e) {
  let t, o, r;
  return (
    (o = new at({})),
    {
      c() {
        ((t = $e("div")),
          xe(o.$$.fragment),
          ve(t, "class", "wrap-existing loading svelte-1qopce8"));
      },
      m(e, n) {
        (de(e, t, n), Te(o, t, null), (r = !0));
      },
      p: he,
      i(e) {
        r || (ae(o.$$.fragment, e), (r = !0));
      },
      o(e) {
        (se(o.$$.fragment, e), (r = !1));
      },
      d(e) {
        (e && ie(t), Se(o));
      },
    }
  );
}
function di(e) {
  let t,
    o,
    r,
    n,
    i = {
      ctx: e,
      current: null,
      token: null,
      hasCatch: !1,
      pending: ci,
      then: li,
      catch: ai,
      value: 50,
      blocks: [, , ,],
    };
  return (
    Ke(
      ht(() => import("./C4q1ypxK.js"), []),
      i,
    ),
    {
      c() {
        ((t = $e("div")),
          i.block.c(),
          ve(t, "class", "wrap-existing wrap svelte-1qopce8"));
      },
      m(e, o) {
        (de(e, t, o),
          i.block.m(t, (i.anchor = null)),
          (i.mount = () => t),
          (i.anchor = null),
          (n = !0));
      },
      p(t, o) {
        Ye(i, (e = t), o);
      },
      i(e) {
        n ||
          (ae(i.block),
          e &&
            Pe(() => {
              n &&
                (r && r.end(1),
                (o = Ge(t, xi, { duration: Pi, main: !0 })),
                o.start());
            }),
          (n = !0));
      },
      o(e) {
        for (let t = 0; t < 3; t += 1) {
          const e = i.blocks[t];
          se(e);
        }
        (o && o.invalidate(), e && (r = Ze(t, xi, { duration: Pi })), (n = !1));
      },
      d(e) {
        (e && ie(t),
          i.block.d(),
          (i.token = null),
          (i = null),
          e && r && r.end());
      },
    }
  );
}
function ui(e) {
  return { c: he, m: he, p: he, i: he, o: he, d: he };
}
function hi(e) {
  let t, o, r;
  function n(t) {
    e[42](t);
  }
  Bn(e);
  let i = {
    traderConfig: e[4],
    usersController: e[7],
    $$slots: { default: [mi] },
    $$scope: { ctx: e },
  };
  return (
    void 0 !== e[13] && (i.showBrokerInfo = e[13]),
    (t = new e[51]({ props: i })),
    Re.push(() => ze(t, "showBrokerInfo", n)),
    t.$on("success", e[25]),
    t.$on("error", e[26]),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, o) {
        (Te(t, e, o), (r = !0));
      },
      p(e, r) {
        Bn(e);
        const n = {};
        (16 & r[0] && (n.traderConfig = e[4]),
          128 & r[0] && (n.usersController = e[7]),
          (16 & r[0]) | (67108864 & r[1]) && (n.$$scope = { dirty: r, ctx: e }),
          !o &&
            8192 & r[0] &&
            ((o = !0), (n.showBrokerInfo = e[13]), Ue(() => (o = !1))),
          t.$set(n));
      },
      i(e) {
        r || (ae(t.$$.fragment, e), (r = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (r = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function mi(e) {
  let t, o;
  return (
    (t = new Dn({ props: { traderConfig: e[4] } })),
    t.$on("back", e[29]),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p(e, o) {
        const r = {};
        (16 & o[0] && (r.traderConfig = e[4]), t.$set(r));
      },
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function pi(e) {
  let t, o, r;
  return (
    (o = new at({})),
    {
      c() {
        ((t = $e("div")),
          xe(o.$$.fragment),
          ve(t, "class", "wrap-real loading svelte-1qopce8"));
      },
      m(e, n) {
        (de(e, t, n), Te(o, t, null), (r = !0));
      },
      p: he,
      i(e) {
        r || (ae(o.$$.fragment, e), (r = !0));
      },
      o(e) {
        (se(o.$$.fragment, e), (r = !1));
      },
      d(e) {
        (e && ie(t), Se(o));
      },
    }
  );
}
function gi(e) {
  return { c: he, m: he, p: he, i: he, o: he, d: he };
}
function wi(e) {
  let t, o, r, n;
  function i(t) {
    e[40](t);
  }
  function s(t) {
    e[41](t);
  }
  Hn(e);
  let a = {
    traderConfig: e[4],
    configController: e[3],
    usersController: e[7],
    layoutStore: e[5],
    $$slots: { default: [fi] },
    $$scope: { ctx: e },
  };
  return (
    void 0 !== e[13] && (a.showBrokerInfo = e[13]),
    void 0 !== e[19] && (a.step = e[19]),
    (t = new e[49]({ props: a })),
    Re.push(() => ze(t, "showBrokerInfo", i)),
    Re.push(() => ze(t, "step", s)),
    t.$on("success", e[20]),
    t.$on("error", e[21]),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, o) {
        (Te(t, e, o), (n = !0));
      },
      p(e, n) {
        Hn(e);
        const i = {};
        (16 & n[0] && (i.traderConfig = e[4]),
          8 & n[0] && (i.configController = e[3]),
          128 & n[0] && (i.usersController = e[7]),
          32 & n[0] && (i.layoutStore = e[5]),
          (16 & n[0]) | (67108864 & n[1]) && (i.$$scope = { dirty: n, ctx: e }),
          !o &&
            8192 & n[0] &&
            ((o = !0), (i.showBrokerInfo = e[13]), Ue(() => (o = !1))),
          !r &&
            524288 & n[0] &&
            ((r = !0), (i.step = e[19]), Ue(() => (r = !1))),
          t.$set(i));
      },
      i(e) {
        n || (ae(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (n = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function fi(e) {
  let t, o;
  return (
    (t = new Dn({ props: { traderConfig: e[4] } })),
    t.$on("back", e[29]),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p(e, o) {
        const r = {};
        (16 & o[0] && (r.traderConfig = e[4]), t.$set(r));
      },
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function bi(e) {
  let t, o, r;
  return (
    (o = new at({})),
    {
      c() {
        ((t = $e("div")),
          xe(o.$$.fragment),
          ve(t, "class", "wrap-demo loading svelte-1qopce8"));
      },
      m(e, n) {
        (de(e, t, n), Te(o, t, null), (r = !0));
      },
      p: he,
      i(e) {
        r || (ae(o.$$.fragment, e), (r = !0));
      },
      o(e) {
        (se(o.$$.fragment, e), (r = !1));
      },
      d(e) {
        (e && ie(t), Se(o));
      },
    }
  );
}
function yi(e) {
  let t, o;
  return (
    (t = new at({ props: { overlay: !0 } })),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function _i(e) {
  let t, o, r, n;
  const i = [vi, Ci],
    s = [];
  function a(e, t) {
    var o, r, n;
    return e[17].connect.error ||
      e[10] ||
      e[11] ||
      (e[12] && (null == (o = e[17].existing[e[12].login]) ? void 0 : o.error))
      ? 0
      : (null == (r = e[17].createdUser) ? void 0 : r.investor) &&
          e[17].createdUser.id === (null == (n = e[12]) ? void 0 : n.id)
        ? 1
        : -1;
  }
  return (
    ~(o = a(e)) && (r = s[o] = i[o](e)),
    {
      c() {
        ((t = $e("div")), r && r.c(), ve(t, "class", "info svelte-1qopce8"));
      },
      m(e, r) {
        (de(e, t, r), ~o && s[o].m(t, null), (n = !0));
      },
      p(e, n) {
        let l = o;
        ((o = a(e)),
          o === l
            ? ~o && s[o].p(e, n)
            : (r &&
                (le(),
                se(s[l], 1, 1, () => {
                  s[l] = null;
                }),
                ce()),
              ~o
                ? ((r = s[o]),
                  r ? r.p(e, n) : ((r = s[o] = i[o](e)), r.c()),
                  ae(r, 1),
                  r.m(t, null))
                : (r = null)));
      },
      i(e) {
        n || (ae(r), (n = !0));
      },
      o(e) {
        (se(r), (n = !1));
      },
      d(e) {
        (e && ie(t), ~o && s[o].d());
      },
    }
  );
}
function Ci(e) {
  let t, o;
  return (
    (t = new Sn({
      props: { user: e[12], investor: e[17].createdUser.investor },
    })),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p(e, o) {
        const r = {};
        (4096 & o[0] && (r.user = e[12]),
          131072 & o[0] && (r.investor = e[17].createdUser.investor),
          t.$set(r));
      },
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function vi(e) {
  let t, o, r, n;
  const i = [Ei, Si, $i, ki],
    s = [];
  function a(e, t) {
    var o;
    return e[16].auth === Fo.Connect && e[17].connect.error
      ? 0
      : e[16].auth === Fo.OpenDemo && e[10]
        ? 1
        : e[16].auth === Fo.OpenReal && e[11]
          ? 2
          : e[12] &&
              (null == (o = e[17].existing[e[12].login]) ? void 0 : o.error)
            ? 3
            : -1;
  }
  return (
    ~(t = a(e)) && (o = s[t] = i[t](e)),
    {
      c() {
        (o && o.c(), (r = ue()));
      },
      m(e, o) {
        (~t && s[t].m(e, o), de(e, r, o), (n = !0));
      },
      p(e, n) {
        let l = t;
        ((t = a(e)),
          t === l
            ? ~t && s[t].p(e, n)
            : (o &&
                (le(),
                se(s[l], 1, 1, () => {
                  s[l] = null;
                }),
                ce()),
              ~t
                ? ((o = s[t]),
                  o ? o.p(e, n) : ((o = s[t] = i[t](e)), o.c()),
                  ae(o, 1),
                  o.m(r.parentNode, r))
                : (o = null)));
      },
      i(e) {
        n || (ae(o), (n = !0));
      },
      o(e) {
        (se(o), (n = !1));
      },
      d(e) {
        (e && ie(r), ~t && s[t].d(e));
      },
    }
  );
}
function ki(e) {
  var t, o;
  let r, n;
  return (
    (r = new gn({
      props: {
        message:
          null == (t = e[17].existing[e[12].login].error) ? void 0 : t.message,
        warning:
          "warning" ===
          (null == (o = e[17].existing[e[12].login].error) ? void 0 : o.type),
      },
    })),
    {
      c() {
        xe(r.$$.fragment);
      },
      m(e, t) {
        (Te(r, e, t), (n = !0));
      },
      p(e, t) {
        var o, n;
        const i = {};
        (135168 & t[0] &&
          (i.message =
            null == (o = e[17].existing[e[12].login].error)
              ? void 0
              : o.message),
          135168 & t[0] &&
            (i.warning =
              "warning" ===
              (null == (n = e[17].existing[e[12].login].error)
                ? void 0
                : n.type)),
          r.$set(i));
      },
      i(e) {
        n || (ae(r.$$.fragment, e), (n = !0));
      },
      o(e) {
        (se(r.$$.fragment, e), (n = !1));
      },
      d(e) {
        Se(r, e);
      },
    }
  );
}
function $i(e) {
  var t;
  let o, r;
  return (
    (o = new gn({
      props: {
        message: e[11].message,
        warning: "warning" === (null == (t = e[11]) ? void 0 : t.type),
      },
    })),
    {
      c() {
        xe(o.$$.fragment);
      },
      m(e, t) {
        (Te(o, e, t), (r = !0));
      },
      p(e, t) {
        var r;
        const n = {};
        (2048 & t[0] && (n.message = e[11].message),
          2048 & t[0] &&
            (n.warning = "warning" === (null == (r = e[11]) ? void 0 : r.type)),
          o.$set(n));
      },
      i(e) {
        r || (ae(o.$$.fragment, e), (r = !0));
      },
      o(e) {
        (se(o.$$.fragment, e), (r = !1));
      },
      d(e) {
        Se(o, e);
      },
    }
  );
}
function Si(e) {
  var t;
  let o, r;
  return (
    (o = new gn({
      props: {
        message: e[10].message,
        warning: "warning" === (null == (t = e[10]) ? void 0 : t.type),
      },
    })),
    {
      c() {
        xe(o.$$.fragment);
      },
      m(e, t) {
        (Te(o, e, t), (r = !0));
      },
      p(e, t) {
        var r;
        const n = {};
        (1024 & t[0] && (n.message = e[10].message),
          1024 & t[0] &&
            (n.warning = "warning" === (null == (r = e[10]) ? void 0 : r.type)),
          o.$set(n));
      },
      i(e) {
        r || (ae(o.$$.fragment, e), (r = !0));
      },
      o(e) {
        (se(o.$$.fragment, e), (r = !1));
      },
      d(e) {
        Se(o, e);
      },
    }
  );
}
function Ei(e) {
  let t, o;
  return (
    (t = new gn({
      props: {
        message: e[17].connect.error.message,
        warning: "warning" === e[17].connect.error.type,
      },
    })),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p(e, o) {
        const r = {};
        (131072 & o[0] && (r.message = e[17].connect.error.message),
          131072 & o[0] && (r.warning = "warning" === e[17].connect.error.type),
          t.$set(r));
      },
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function Ai(e) {
  let t,
    o,
    r,
    n,
    i,
    s,
    a,
    l,
    c,
    d,
    u,
    h,
    m,
    p,
    g,
    w = e[14].length > 1 && zn(e),
    f = 1 === e[15] && Un(e),
    b = (2 === e[15] || 1 === e[14].length) && Gn(e),
    y = 1 === e[15] && Qn();
  const _ = [oi, ti, ei, Xn],
    C = [];
  function v(e, t) {
    return e[16].auth === Fo.OpenDemo
      ? 0
      : e[16].auth === Fo.OpenReal
        ? 1
        : e[12]
          ? 2
          : 3;
  }
  ((c = v(e)), (d = C[c] = _[c](e)));
  let k = e[0] && yi(),
    $ = !e[0] && _i(e);
  return {
    c() {
      ((t = $e("div")),
        (o = $e("div")),
        w && w.c(),
        (r = be()),
        f && f.c(),
        (n = be()),
        b && b.c(),
        (i = be()),
        y && y.c(),
        (s = be()),
        (a = $e("div")),
        (l = $e("div")),
        d.c(),
        (h = be()),
        k && k.c(),
        (m = be()),
        $ && $.c(),
        (p = ue()),
        ve(o, "class", "login-nav svelte-1qopce8"),
        ve(l, "class", "content-inner svelte-1qopce8"),
        ve(a, "class", "content svelte-1qopce8"),
        Pe(() => e[45].call(a)),
        ve(t, "class", "login-content svelte-1qopce8"));
    },
    m(d, _) {
      (de(d, t, _),
        _e(t, o),
        w && w.m(o, null),
        _e(o, r),
        f && f.m(o, null),
        _e(o, n),
        b && b.m(o, null),
        _e(o, i),
        y && y.m(o, null),
        _e(t, s),
        _e(t, a),
        _e(a, l),
        C[c].m(l, null),
        (u = He(a, e[45].bind(a))),
        e[46](a),
        _e(t, h),
        k && k.m(t, null),
        de(d, m, _),
        $ && $.m(d, _),
        de(d, p, _),
        (g = !0));
    },
    p(e, s) {
      (e[14].length > 1
        ? w
          ? w.p(e, s)
          : ((w = zn(e)), w.c(), w.m(o, r))
        : w && (w.d(1), (w = null)),
        1 === e[15]
          ? f
            ? (f.p(e, s), 32768 & s[0] && ae(f, 1))
            : ((f = Un(e)), f.c(), ae(f, 1), f.m(o, n))
          : f &&
            (le(),
            se(f, 1, 1, () => {
              f = null;
            }),
            ce()),
        2 === e[15] || 1 === e[14].length
          ? b
            ? (b.p(e, s), 114688 & s[0] && ae(b, 1))
            : ((b = Gn(e)), b.c(), ae(b, 1), b.m(o, i))
          : b &&
            (le(),
            se(b, 1, 1, () => {
              b = null;
            }),
            ce()),
        1 === e[15]
          ? y
            ? y.p(e, s)
            : ((y = Qn()), y.c(), y.m(o, null))
          : y && (y.d(1), (y = null)));
      let a = c;
      ((c = v(e)),
        c === a
          ? C[c].p(e, s)
          : (le(),
            se(C[a], 1, 1, () => {
              C[a] = null;
            }),
            ce(),
            (d = C[c]),
            d ? d.p(e, s) : ((d = C[c] = _[c](e)), d.c()),
            ae(d, 1),
            d.m(l, null)),
        e[0]
          ? k
            ? 1 & s[0] && ae(k, 1)
            : ((k = yi()), k.c(), ae(k, 1), k.m(t, null))
          : k &&
            (le(),
            se(k, 1, 1, () => {
              k = null;
            }),
            ce()),
        e[0]
          ? $ &&
            (le(),
            se($, 1, 1, () => {
              $ = null;
            }),
            ce())
          : $
            ? ($.p(e, s), 1 & s[0] && ae($, 1))
            : (($ = _i(e)), $.c(), ae($, 1), $.m(p.parentNode, p)));
    },
    i(e) {
      g || (ae(f), ae(b), ae(d), ae(k), ae($), (g = !0));
    },
    o(e) {
      (se(f), se(b), se(d), se(k), se($), (g = !1));
    },
    d(o) {
      (o && (ie(t), ie(m), ie(p)),
        w && w.d(),
        f && f.d(),
        b && b.d(),
        y && y.d(),
        C[c].d(),
        u(),
        e[46](null),
        k && k.d(),
        $ && $.d(o));
    },
  };
}
const Pi = 120;
function Ti(e) {
  return 0 === e ? Zr : 3 === e ? Wr : 2 === e ? Yr : Fr;
}
function xi(
  e,
  { delay: t = 0, duration: o = 400, easing: r = Xe, main: n = !1 } = {},
) {
  const i = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: o,
    easing: r,
    css: (e) =>
      `opacity: ${e * i}; position: ${n ? "static" : "absolute"}; width: 100%;`,
  };
}
const Di = () => ht(() => import("./C4q1ypxK.js"), []),
  Li = () => ht(() => import("./D2ohBvnI.js"), []),
  Oi = () => ht(() => import("./DyLlTbfr.js").then((e) => e.r), []),
  Ii = () => ht(() => import("./C4q1ypxK.js"), []);
function ji(e, t, o) {
  let r,
    n,
    i,
    s = he,
    a = () => (s(), (s = fe(p, (e) => o(16, (r = e)))), p),
    l = he,
    c = () => (l(), (l = fe(g, (e) => o(33, (n = e)))), g),
    d = he,
    u = () => (d(), (d = fe(f, (e) => o(17, (i = e)))), f);
  (e.$$.on_destroy.push(() => s()),
    e.$$.on_destroy.push(() => l()),
    e.$$.on_destroy.push(() => d()));
  let { configController: h } = t,
    { traderConfig: m } = t,
    { layoutStore: p } = t;
  a();
  let { usersStore: g } = t;
  c();
  let { usersController: w } = t,
    { authStore: f } = t;
  u();
  let b,
    y,
    { authController: _ } = t,
    { autoConnect: C } = t,
    { loading: v = !1 } = t,
    { clientHeight: k = 0 } = t,
    { showMessage: $ = !1 } = t,
    S = null,
    E = null,
    A = null,
    P = !1,
    T = r.auth,
    x = [],
    D = 1;
  function L() {
    Qe(p, (r.auth = Fo.None), r);
  }
  async function O(e) {
    if (
      (o(15, (D = e)),
      1 === e && r.setLayout({ auth: Fo.Connect }),
      2 === e && x.length && "string" != typeof r.auth)
    ) {
      await Je();
      const e = n.getCurrentUser();
      C && e ? r.setLayout({ auth: e.id }) : r.setLayout({ auth: x[0].id });
    }
  }
  return (
    Ne(() => {
      x.length > 1 && O(2);
    }),
    (e.$$set = (e) => {
      ("configController" in e && o(3, (h = e.configController)),
        "traderConfig" in e && o(4, (m = e.traderConfig)),
        "layoutStore" in e && a(o(5, (p = e.layoutStore))),
        "usersStore" in e && c(o(6, (g = e.usersStore))),
        "usersController" in e && o(7, (w = e.usersController)),
        "authStore" in e && u(o(8, (f = e.authStore))),
        "authController" in e && o(9, (_ = e.authController)),
        "autoConnect" in e && o(1, (C = e.autoConnect)),
        "loading" in e && o(0, (v = e.loading)),
        "clientHeight" in e && o(2, (k = e.clientHeight)),
        "showMessage" in e && o(31, ($ = e.showMessage)));
    }),
    (e.$$.update = () => {
      var t, s;
      ((49152 & e.$$.dirty[0]) | (4 & e.$$.dirty[1]) &&
        (o(14, (x = n.getAllUsers())),
        x.length < 2 && 2 === D && o(15, (D = 1))),
        (73728 & e.$$.dirty[0]) | (2 & e.$$.dirty[1]) &&
          r.auth !== T &&
          (o(32, (T = r.auth)), P && o(13, (P = !1))),
        (65536 & e.$$.dirty[0]) | (4 & e.$$.dirty[1]) &&
          o(12, (A = "string" == typeof r.auth ? n.getUserById(r.auth) : null)),
        200704 & e.$$.dirty[0] &&
          o(
            0,
            (v = Boolean(
              (r.auth === Fo.Connect &&
                0 !== i.connect.status &&
                6 !== i.connect.status) ||
              (A &&
                i.existing[A.login] &&
                0 !== i.existing[A.login].status &&
                6 !== i.existing[A.login].status),
            )),
          ),
        203777 & e.$$.dirty[0] &&
          o(
            31,
            ($ = Boolean(
              !v &&
              ((r.auth === Fo.Connect && i.connect.error) ||
                (r.auth === Fo.OpenDemo && S) ||
                (r.auth === Fo.OpenReal && E) ||
                (A && (null == (t = i.existing[A.login]) ? void 0 : t.error)) ||
                ((null == (s = i.createdUser) ? void 0 : s.investor) &&
                  i.createdUser.id === (null == A ? void 0 : A.id))),
            )),
          ),
        65536 & e.$$.dirty[0] &&
          (async function () {
            (await Je(),
              b && k !== b.clientHeight && o(2, (k = b.clientHeight)));
          })());
    }),
    [
      v,
      C,
      k,
      h,
      m,
      p,
      g,
      w,
      f,
      _,
      S,
      E,
      A,
      P,
      x,
      D,
      r,
      i,
      b,
      y,
      function (e) {
        (o(19, (y = 0)),
          Qe(f, (i.createdUser = e.detail.response), i),
          p.setLayout({ auth: i.createdUser.id }),
          o(15, (D = 2)));
        const t = n.getUserById(i.createdUser.id);
        t &&
          n.updateCurrentUser(t.login, {
            isHedgedMargin: e.detail.isHedgedMargin,
          });
      },
      function (e) {
        o(10, (S = e.detail));
      },
      function () {
        var e;
        if (!i.connect.error) {
          if (
            (Qe(f, (i.createdUser = null), i),
            null == (e = i.modules)
              ? void 0
              : e.account.accountStore.isResetPass)
          ) {
            const e = g.getUserByLogin(i.modules.account.accountStore.login);
            e && r.setLayout({ auth: e.id });
          } else L();
          Qe(f, (i.connect.error = null), i);
        }
      },
      function () {
        var e;
        if (
          (Qe(f, (i.createdUser = null), i),
          null == (e = i.modules) ? void 0 : e.account.accountStore.isResetPass)
        ) {
          const e = g.getUserByLogin(i.modules.account.accountStore.login);
          e && r.setLayout({ auth: e.id });
        }
        L();
      },
      function () {
        Qe(f, (i.connect.error = null), i);
      },
      function (e) {
        (Qe(f, (i.createdUser = e.detail.response), i),
          p.setLayout({ auth: i.createdUser.id }),
          o(15, (D = 2)));
        const t = n.getUserById(i.createdUser.id);
        t &&
          n.updateCurrentUser(t.login, {
            isHedgedMargin: e.detail.isHedgedMargin,
          });
      },
      function (e) {
        o(11, (E = e.detail));
      },
      function () {
        _.logout();
      },
      async function () {
        if (!(null == A ? void 0 : A.login)) return;
        const e = x.findIndex((e) => e.id === (null == A ? void 0 : A.id));
        var t;
        (n.removeUser(A.id),
          (t = A.id),
          Ar.objects.removeByUserId(t),
          Ar.indicators.removeByUserId(t),
          Ar.configs.removeByUserId(t),
          Ar.trade_bars.removeByUserId(t),
          Ar.marks.removeByUserId(t),
          Ar.watchlist.removeByUserId(t),
          Ar.user_settings.removeByUserId(t),
          await Je(),
          -1 !== e && x.length
            ? x.length > e
              ? r.setLayout({ auth: x[e].id })
              : r.setLayout({ auth: x[x.length - 1].id })
            : r.setLayout({ auth: Fo.Connect }));
      },
      function () {
        o(13, (P = !1));
      },
      O,
      $,
      T,
      n,
      () => O(1),
      () => O(2),
      function (t) {
        e.$$.not_equal(r.auth, t) && ((r.auth = t), p.set(r));
      },
      function (t) {
        e.$$.not_equal(r.auth, t) && ((r.auth = t), p.set(r));
      },
      function (t) {
        e.$$.not_equal(r.auth, t) && ((r.auth = t), p.set(r));
      },
      function (t) {
        e.$$.not_equal(r.auth, t) && ((r.auth = t), p.set(r));
      },
      function (e) {
        ((P = e), o(13, P), o(16, r), o(32, T));
      },
      function (e) {
        ((y = e), o(19, y));
      },
      function (e) {
        ((P = e), o(13, P), o(16, r), o(32, T));
      },
      function (e) {
        ((C = e), o(1, C));
      },
      function (e) {
        ((P = e), o(13, P), o(16, r), o(32, T));
      },
      function () {
        ((k = this.clientHeight), o(2, k));
      },
      function (e) {
        Re[e ? "unshift" : "push"](() => {
          ((b = e), o(18, b));
        });
      },
    ]
  );
}
class Vi extends oe {
  constructor(e) {
    (super(),
      re(
        this,
        e,
        ji,
        Ai,
        ne,
        {
          configController: 3,
          traderConfig: 4,
          layoutStore: 5,
          usersStore: 6,
          usersController: 7,
          authStore: 8,
          authController: 9,
          autoConnect: 1,
          loading: 0,
          clientHeight: 2,
          showMessage: 31,
        },
        null,
        [-1, -1],
      ));
  }
}
function Mi(e) {
  let t, o;
  const r = e[4].default,
    n = me(r, e, e[5], null);
  return {
    c() {
      ((t = $e("div")),
        n && n.c(),
        ve(t, "class", "login svelte-1h20drg"),
        et(t, "height", e[2]));
    },
    m(e, r) {
      (de(e, t, r), n && n.m(t, null), (o = !0));
    },
    p(e, i) {
      (n &&
        n.p &&
        (!o || 32 & i) &&
        pe(n, r, e, e[5], o ? we(r, e[5], i, null) : ge(e[5]), null),
        4 & i && et(t, "height", e[2]));
    },
    i(e) {
      o || (ae(n, e), (o = !0));
    },
    o(e) {
      (se(n, e), (o = !1));
    },
    d(e) {
      (e && ie(t), n && n.d(e));
    },
  };
}
function Ri(e) {
  let t, o;
  return (
    (t = new nt({ props: { slot: "close", name: an } })),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p: he,
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function Bi(e) {
  let t, o;
  return (
    (t = new lt({
      props: {
        draggable: !0,
        hideCloseButton: e[1],
        title: e[0],
        $$slots: { close: [Ri], default: [Mi] },
        $$scope: { ctx: e },
      },
    })),
    t.$on("close", e[3]),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p(e, [o]) {
        const r = {};
        (2 & o && (r.hideCloseButton = e[1]),
          1 & o && (r.title = e[0]),
          36 & o && (r.$$scope = { dirty: o, ctx: e }),
          t.$set(r));
      },
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function Hi(e, t, o) {
  let { $$slots: r = {}, $$scope: n } = t;
  const i = Be();
  let { title: s } = t,
    { hideClose: a } = t,
    { height: l } = t;
  return (
    (e.$$set = (e) => {
      ("title" in e && o(0, (s = e.title)),
        "hideClose" in e && o(1, (a = e.hideClose)),
        "height" in e && o(2, (l = e.height)),
        "$$scope" in e && o(5, (n = e.$$scope)));
    }),
    [
      s,
      a,
      l,
      function () {
        i("close");
      },
      r,
      n,
    ]
  );
}
class Ni extends oe {
  constructor(e) {
    (super(), re(this, e, Hi, Bi, ne, { title: 0, hideClose: 1, height: 2 }));
  }
}
const zi = (e) => ({ modules: 128 & e }),
  Ui = (e) => ({ modules: e[7].modules });
function Fi(e) {
  let t,
    o,
    r = !e[7].modules.account.accountStore.isResetPass && qi(e);
  return {
    c() {
      (r && r.c(), (t = ue()));
    },
    m(e, n) {
      (r && r.m(e, n), de(e, t, n), (o = !0));
    },
    p(e, o) {
      e[7].modules.account.accountStore.isResetPass
        ? r &&
          (le(),
          se(r, 1, 1, () => {
            r = null;
          }),
          ce())
        : r
          ? (r.p(e, o), 128 & o && ae(r, 1))
          : ((r = qi(e)), r.c(), ae(r, 1), r.m(t.parentNode, t));
    },
    i(e) {
      o || (ae(r), (o = !0));
    },
    o(e) {
      (se(r), (o = !1));
    },
    d(e) {
      (e && ie(t), r && r.d(e));
    },
  };
}
function qi(e) {
  let t;
  const o = e[21].default,
    r = me(o, e, e[26], Ui);
  return {
    c() {
      r && r.c();
    },
    m(e, o) {
      (r && r.m(e, o), (t = !0));
    },
    p(e, n) {
      r &&
        r.p &&
        (!t || 67108992 & n) &&
        pe(r, o, e, e[26], t ? we(o, e[26], n, zi) : ge(e[26]), Ui);
    },
    i(e) {
      t || (ae(r, e), (t = !0));
    },
    o(e) {
      (se(r, e), (t = !1));
    },
    d(e) {
      r && r.d(e);
    },
  };
}
function Wi(e) {
  let t, o;
  return (
    (t = new Ni({
      props: {
        hideClose: e[9],
        title: e[17],
        height: e[10] ? `${e[10] + 40 * Number(e[8])}px` : "auto",
        $$slots: { default: [Ki] },
        $$scope: { ctx: e },
      },
    })),
    t.$on("close", e[18]),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p(e, o) {
        const r = {};
        (512 & o && (r.hideClose = e[9]),
          1280 & o &&
            (r.height = e[10] ? `${e[10] + 40 * Number(e[8])}px` : "auto"),
          67114335 & o && (r.$$scope = { dirty: o, ctx: e }),
          t.$set(r));
      },
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function Ki(e) {
  let t, o, r, n, i, s;
  function a(t) {
    e[22](t);
  }
  function l(t) {
    e[23](t);
  }
  function c(t) {
    e[24](t);
  }
  function d(t) {
    e[25](t);
  }
  let u = {
    traderConfig: e[16],
    configController: e[15],
    layoutStore: e[0],
    authController: e[3],
    authStore: e[4],
    usersController: e[1],
    usersStore: e[2],
  };
  return (
    void 0 !== e[12] && (u.autoConnect = e[12]),
    void 0 !== e[6] && (u.loading = e[6]),
    void 0 !== e[10] && (u.clientHeight = e[10]),
    void 0 !== e[8] && (u.showMessage = e[8]),
    (t = new Vi({ props: u })),
    Re.push(() => ze(t, "autoConnect", a)),
    Re.push(() => ze(t, "loading", l)),
    Re.push(() => ze(t, "clientHeight", c)),
    Re.push(() => ze(t, "showMessage", d)),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, o) {
        (Te(t, e, o), (s = !0));
      },
      p(e, s) {
        const a = {};
        (1 & s && (a.layoutStore = e[0]),
          8 & s && (a.authController = e[3]),
          16 & s && (a.authStore = e[4]),
          2 & s && (a.usersController = e[1]),
          4 & s && (a.usersStore = e[2]),
          !o &&
            4096 & s &&
            ((o = !0), (a.autoConnect = e[12]), Ue(() => (o = !1))),
          !r && 64 & s && ((r = !0), (a.loading = e[6]), Ue(() => (r = !1))),
          !n &&
            1024 & s &&
            ((n = !0), (a.clientHeight = e[10]), Ue(() => (n = !1))),
          !i &&
            256 & s &&
            ((i = !0), (a.showMessage = e[8]), Ue(() => (i = !1))),
          t.$set(a));
      },
      i(e) {
        s || (ae(t.$$.fragment, e), (s = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (s = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function Zi(e) {
  var t, o, r;
  let n,
    i,
    s,
    a = e[7].modules && Fi(e),
    l =
      (!e[7].modules ||
        e[13].auth !== Fo.None ||
        (null == (t = e[7].modules)
          ? void 0
          : t.account.accountStore.isResetPass) ||
        (e[11] &&
          5 ===
            (null ==
            (r = null == (o = e[7].existing[e[11].login]) ? void 0 : o.error)
              ? void 0
              : r.code))) &&
      Wi(e);
  return {
    c() {
      (a && a.c(), (n = be()), l && l.c(), (i = ue()));
    },
    m(e, t) {
      (a && a.m(e, t), de(e, n, t), l && l.m(e, t), de(e, i, t), (s = !0));
    },
    p(e, t) {
      var o, r, s;
      (e[7].modules
        ? a
          ? (a.p(e, t), 128 & t && ae(a, 1))
          : ((a = Fi(e)), a.c(), ae(a, 1), a.m(n.parentNode, n))
        : a &&
          (le(),
          se(a, 1, 1, () => {
            a = null;
          }),
          ce()),
        !e[7].modules ||
        e[13].auth !== Fo.None ||
        (null == (o = e[7].modules)
          ? void 0
          : o.account.accountStore.isResetPass) ||
        (e[11] &&
          5 ===
            (null ==
            (s = null == (r = e[7].existing[e[11].login]) ? void 0 : r.error)
              ? void 0
              : s.code))
          ? l
            ? (l.p(e, t), 10368 & t && ae(l, 1))
            : ((l = Wi(e)), l.c(), ae(l, 1), l.m(i.parentNode, i))
          : l &&
            (le(),
            se(l, 1, 1, () => {
              l = null;
            }),
            ce()));
    },
    i(e) {
      s || (ae(a), ae(l), (s = !0));
    },
    o(e) {
      (se(a), se(l), (s = !1));
    },
    d(e) {
      (e && (ie(n), ie(i)), a && a.d(e), l && l.d(e));
    },
  };
}
function Gi(e) {
  let t,
    o,
    r = e[14].language,
    n = Zi(e);
  return {
    c() {
      (n.c(), (t = ue()));
    },
    m(e, r) {
      (n.m(e, r), de(e, t, r), (o = !0));
    },
    p(e, [o]) {
      16384 & o && ne(r, (r = e[14].language))
        ? (le(),
          se(n, 1, 1, he),
          ce(),
          (n = Zi(e)),
          n.c(),
          ae(n, 1),
          n.m(t.parentNode, t))
        : n.p(e, o);
    },
    i(e) {
      o || (ae(n), (o = !0));
    },
    o(e) {
      (se(n), (o = !1));
    },
    d(e) {
      (e && ie(t), n.d(e));
    },
  };
}
const Yi = Bt.get("login");
function Ji(e, t, o) {
  let r,
    n,
    i,
    s,
    a = he,
    l = () => (a(), (a = fe(f, (e) => o(13, (r = e)))), f),
    c = he,
    d = () => (c(), (c = fe(y, (e) => o(20, (n = e)))), y),
    u = he,
    h = () => (u(), (u = fe(C, (e) => o(7, (i = e)))), C),
    m = he,
    p = () => (m(), (m = fe(k, (e) => o(14, (s = e)))), k);
  (e.$$.on_destroy.push(() => a()),
    e.$$.on_destroy.push(() => c()),
    e.$$.on_destroy.push(() => u()),
    e.$$.on_destroy.push(() => m()));
  let { $$slots: g = {}, $$scope: w } = t,
    { layoutStore: f } = t;
  l();
  let { usersController: b } = t,
    { usersStore: y } = t;
  d();
  let { authController: _ } = t,
    { authStore: C } = t;
  h();
  let { configModule: v } = t,
    { langReloadStore: k } = t;
  p();
  const { configController: $, configStore: S } = v;
  let E = !1,
    A = !1;
  const P = S.broker.name
    ? window.tr(window.lang.login.mainForm.titleWithName, {
        brokerName: S.broker.name,
      })
    : window.tr(window.lang.login.mainForm.title);
  let T,
    x = !0,
    D = n.getCurrentUser(),
    L = !1;
  return (
    Ne(() => {
      !(function () {
        const e = (function (e) {
          const t = Bt.get("mode");
          return "demo" === t && e.groups.demo.all.list.length
            ? Fo.OpenDemo
            : "real" === t && e.groups.real.all.list.length
              ? Fo.OpenReal
              : Fo.Connect;
        })(S);
        if (Yi && e === Fo.Connect) {
          const e = Number(Yi);
          if (!isNaN(e) && Number.isFinite(e)) {
            const t = n.getUserByLogin(e);
            t
              ? (r.setLayout({ auth: t.id }),
                o(12, (L = Boolean(t.savePassword))))
              : r.setLayout({ auth: Fo.Connect });
          }
        } else
          (r.setLayout({ auth: (null == D ? void 0 : D.id) ?? e }),
            o(12, (L = Boolean(null == D ? void 0 : D.id))));
      })();
    }),
    (e.$$set = (e) => {
      ("layoutStore" in e && l(o(0, (f = e.layoutStore))),
        "usersController" in e && o(1, (b = e.usersController)),
        "usersStore" in e && d(o(2, (y = e.usersStore))),
        "authController" in e && o(3, (_ = e.authController)),
        "authStore" in e && h(o(4, (C = e.authStore))),
        "configModule" in e && o(19, (v = e.configModule)),
        "langReloadStore" in e && p(o(5, (k = e.langReloadStore))),
        "$$scope" in e && o(26, (w = e.$$scope)));
    }),
    (e.$$.update = () => {
      var t;
      (192 & e.$$.dirty &&
        o(
          9,
          (x =
            !i.modules ||
            E ||
            (null == (t = i.modules)
              ? void 0
              : t.account.accountStore.isResetPass)),
        ),
        1048576 & e.$$.dirty && o(11, (D = n.getCurrentUser())));
    }),
    [
      f,
      b,
      y,
      _,
      C,
      k,
      E,
      i,
      A,
      x,
      T,
      D,
      L,
      r,
      s,
      $,
      S,
      P,
      function () {
        r.setLayout({ auth: Fo.None });
      },
      v,
      n,
      g,
      function (e) {
        ((L = e), o(12, L));
      },
      function (e) {
        ((E = e), o(6, E));
      },
      function (e) {
        ((T = e), o(10, T));
      },
      function (e) {
        ((A = e), o(8, A));
      },
      w,
    ]
  );
}
class Qi extends oe {
  constructor(e) {
    (super(),
      re(this, e, Ji, Gi, ne, {
        layoutStore: 0,
        usersController: 1,
        usersStore: 2,
        authController: 3,
        authStore: 4,
        configModule: 19,
        langReloadStore: 5,
      }));
  }
}
function Xi(e) {
  const t = e[10].default;
  e[11] = t;
}
function es(e) {
  e[8] = e[9].default;
}
function ts(e) {
  let t, o;
  return (
    (t = new Et({
      props: {
        ui: e[0],
        modules: e[6],
        $$slots: {
          default: [
            ls,
            ({ symbol: e }) => ({ 7: e }),
            ({ symbol: e }) => (e ? 128 : 0),
          ],
        },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p(e, o) {
        const r = {};
        (1 & o && (r.ui = e[0]),
          64 & o && (r.modules = e[6]),
          4303 & o && (r.$$scope = { dirty: o, ctx: e }),
          t.$set(r));
      },
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function os(e) {
  let t, o;
  return (
    Xi(e),
    (t = new e[11]({
      props: {
        symbol: e[7],
        ui: e[0],
        auth: e[2],
        traderConfig: e[1].configStore,
        modules: e[6],
        lang: e[3],
      },
    })),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p(e, o) {
        Xi(e);
        const r = {};
        (128 & o && (r.symbol = e[7]),
          1 & o && (r.ui = e[0]),
          4 & o && (r.auth = e[2]),
          2 & o && (r.traderConfig = e[1].configStore),
          64 & o && (r.modules = e[6]),
          8 & o && (r.lang = e[3]),
          t.$set(r));
      },
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function rs(e) {
  let t, o;
  return (
    (t = new st({
      props: {
        module: us,
        $$slots: {
          default: [
            os,
            ({ module: e }) => ({ 10: e }),
            ({ module: e }) => (e ? 1024 : 0),
          ],
        },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p(e, o) {
        const r = {};
        (4303 & o && (r.$$scope = { dirty: o, ctx: e }), t.$set(r));
      },
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function ns(e) {
  return { c: he, m: he, p: he, i: he, o: he, d: he };
}
function is(e) {
  let t, o;
  return (
    es(e),
    (t = new e[8]({
      props: {
        usersStore: e[0].users.usersStore,
        accountStore: e[6].account.accountStore,
        notifyController: e[6].notify.notifyController,
      },
    })),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p(e, o) {
        es(e);
        const r = {};
        (1 & o && (r.usersStore = e[0].users.usersStore),
          64 & o && (r.accountStore = e[6].account.accountStore),
          64 & o && (r.notifyController = e[6].notify.notifyController),
          t.$set(r));
      },
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function ss(e) {
  return { c: he, m: he, p: he, i: he, o: he, d: he };
}
function as(e) {
  let t,
    o,
    r = {
      ctx: e,
      current: null,
      token: null,
      hasCatch: !1,
      pending: ss,
      then: is,
      catch: ns,
      value: 9,
      blocks: [, , ,],
    };
  return (
    Ke(
      ht(() => import("./BexPfrIW.js"), []),
      r,
    ),
    {
      c() {
        ((t = ue()), r.block.c());
      },
      m(e, n) {
        (de(e, t, n),
          r.block.m(e, (r.anchor = n)),
          (r.mount = () => t.parentNode),
          (r.anchor = t),
          (o = !0));
      },
      p(t, o) {
        Ye(r, (e = t), o);
      },
      i(e) {
        o || (ae(r.block), (o = !0));
      },
      o(e) {
        for (let t = 0; t < 3; t += 1) {
          const e = r.blocks[t];
          se(e);
        }
        o = !1;
      },
      d(e) {
        (e && ie(t), r.block.d(e), (r.token = null), (r = null));
      },
    }
  );
}
function ls(e) {
  let t, o;
  return (
    (t = new yt({
      props: {
        usersStore: e[0].users.usersStore,
        accountStore: e[6].account.accountStore,
        $$slots: { risk: [as], default: [rs] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p(e, o) {
        const r = {};
        (1 & o && (r.usersStore = e[0].users.usersStore),
          64 & o && (r.accountStore = e[6].account.accountStore),
          4303 & o && (r.$$scope = { dirty: o, ctx: e }),
          t.$set(r));
      },
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
function cs(e) {
  let t,
    o,
    r = e[6] && !e[6].disabled && ts(e);
  return {
    c() {
      (r && r.c(), (t = ue()));
    },
    m(e, n) {
      (r && r.m(e, n), de(e, t, n), (o = !0));
    },
    p(e, o) {
      e[6] && !e[6].disabled
        ? r
          ? (r.p(e, o), 64 & o && ae(r, 1))
          : ((r = ts(e)), r.c(), ae(r, 1), r.m(t.parentNode, t))
        : r &&
          (le(),
          se(r, 1, 1, () => {
            r = null;
          }),
          ce());
    },
    i(e) {
      o || (ae(r), (o = !0));
    },
    o(e) {
      (se(r), (o = !1));
    },
    d(e) {
      (e && ie(t), r && r.d(e));
    },
  };
}
function ds(e) {
  let t, o;
  return (
    (t = new Qi({
      props: {
        langReloadStore: e[3].langReloadStore,
        layoutStore: e[4],
        usersController: e[0].users.usersController,
        usersStore: e[0].users.usersStore,
        authStore: e[2].authStore,
        authController: e[2].authController,
        configModule: e[1],
        $$slots: {
          default: [
            cs,
            ({ modules: e }) => ({ 6: e }),
            ({ modules: e }) => (e ? 64 : 0),
          ],
        },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        xe(t.$$.fragment);
      },
      m(e, r) {
        (Te(t, e, r), (o = !0));
      },
      p(e, [o]) {
        const r = {};
        (8 & o && (r.langReloadStore = e[3].langReloadStore),
          1 & o && (r.usersController = e[0].users.usersController),
          1 & o && (r.usersStore = e[0].users.usersStore),
          4 & o && (r.authStore = e[2].authStore),
          4 & o && (r.authController = e[2].authController),
          2 & o && (r.configModule = e[1]),
          4175 & o && (r.$$scope = { dirty: o, ctx: e }),
          t.$set(r));
      },
      i(e) {
        o || (ae(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        (se(t.$$.fragment, e), (o = !1));
      },
      d(e) {
        Se(t, e);
      },
    }
  );
}
const us = () => ht(() => import("./CezRPkQL.js").then((e) => e.r), []);
function hs(e, t, o) {
  let r,
    { ui: n } = t,
    { configModule: i } = t,
    { auth: s } = t,
    { lang: a } = t;
  const { layoutStore: l } = n.layout;
  return (
    ye(e, l, (e) => o(5, (r = e))),
    Qe(l, (r.isSafari = void 0 !== window.safari), r),
    (e.$$set = (e) => {
      ("ui" in e && o(0, (n = e.ui)),
        "configModule" in e && o(1, (i = e.configModule)),
        "auth" in e && o(2, (s = e.auth)),
        "lang" in e && o(3, (a = e.lang)));
    }),
    document.body.classList.remove("mobile"),
    document.body.classList.add("desktop"),
    [n, i, s, a, l]
  );
}
class ms extends oe {
  constructor(e) {
    (super(),
      re(this, e, hs, ds, ne, { ui: 0, configModule: 1, auth: 2, lang: 3 }));
  }
}
window.tr = function (e, t) {
  return t ? e.replace(/\{(\w+)\}/g, (e, o) => String(t[o])) : e;
};
class ps {
  constructor(e, t, o) {
    (X(this, q),
      X(this, W),
      (this.langStore = e),
      (this.langReloadStore = t),
      ee(this, W, o));
  }
  async init() {
    (await Q(this, W).call(this, this.langStore.language),
      Q(this, q) ||
        ee(
          this,
          q,
          this.langStore.subscribe(() => {
            this.langStore.language !== this.langReloadStore.language &&
              this.init();
          }),
        ),
      this.langReloadStore.setLanguage(this.langStore.language));
  }
  setLanguage(e) {
    (zt.setItem("lang", e), this.langStore.setLanguage(e));
  }
}
((q = new WeakMap()), (W = new WeakMap()));
class gs extends Dt {
  constructor(e) {
    (super(), (this._systemName = "LangStore"), (this.language = e));
  }
  setLanguage(e) {
    ((this.language = e), this.refresh());
  }
}
const ws = [
  { id: "en", name: "English", local: "English", short: "en" },
  { id: "ar", name: "Arabic", local: "العربية", short: "ar" },
  { id: "bg", name: "Bulgarian", local: "Български език ", short: "bg" },
  { id: "zh", name: "Chinese Simplified", local: "简体中文", short: "zh" },
  { id: "zt", name: "Chinese Traditional", local: "中國傳統的", short: "zt" },
  { id: "cs", name: "Czech", local: "Čeština", short: "cs" },
  { id: "nl", name: "Dutch", local: "Nederlands", short: "nl" },
  { id: "fr", name: "French", local: "Français", short: "fr" },
  { id: "de", name: "German", local: "Deutsch", short: "de" },
  { id: "el", name: "Greek", local: "Ελληνικά", short: "el" },
  { id: "hi", name: "Hindi", local: "हिन्दी", short: "hi" },
  { id: "hu", name: "Hungarian", local: "Magyar", short: "hu" },
  { id: "id", name: "Indonesian", local: "Bahasa Indonesia", short: "id" },
  { id: "it", name: "Italian", local: "Italiano", short: "it" },
  { id: "ja", name: "Japanese", local: "日本語", short: "ja" },
  { id: "ko", name: "Korean", local: "한국어", short: "ko" },
  { id: "ms", name: "Malay", local: "Bahasa Melayu", short: "ms" },
  { id: "fa", name: "Persian", local: "فارسی", short: "fa" },
  { id: "pl", name: "Polish", local: "Polski", short: "pl" },
  { id: "pt", name: "Portuguese", local: "Portuguê", short: "pt" },
  { id: "ru", name: "Russian", local: "Русский", short: "ru" },
  { id: "es", name: "Spanish", local: "Español", short: "es" },
  { id: "th", name: "Thai", local: "ภาษาไทย", short: "th" },
  { id: "tr", name: "Turkish", local: "Türkçe", short: "tr" },
  { id: "uk", name: "Ukrainian", local: "Українська", short: "uk" },
  { id: "uz", name: "Uzbek", local: "Oʻzbek", short: "uz" },
  { id: "vi", name: "Vietnamese", local: "Tiếng Việt Nam", short: "vi" },
];
function fs(e = "en") {
  return (
    zt.getItem("lang") ??
    (function () {
      var e;
      const t = Bt.get("lang");
      return t
        ? null == (e = ws.find((e) => e.id === t))
          ? void 0
          : e.id
        : void 0;
    })() ??
    (function () {
      var e;
      let t = navigator.language.slice(0, 2).toLowerCase();
      return (
        "zh-Hans" === navigator.language && (t = "zh"),
        "zh-Hant" === navigator.language && (t = "zt"),
        t ? (null == (e = ws.find((e) => e.id === t)) ? void 0 : e.id) : void 0
      );
    })() ??
    e
  );
}
const bs = new (class {
  constructor(e) {
    const t = fs();
    ((this.langStore = new gs(t)),
      (this.langReloadStore = new gs(t)),
      (this.langController = new ps(this.langStore, this.langReloadStore, e)));
  }
})(async function (e) {
  let t;
  switch (e) {
    case "ar":
      t = await Promise.all([
        ht(() => import("./QFdW5rY8.js").then((e) => e.a), []),
        ht(() => import("./QFdW5rY8.js").then((e) => e.b), []),
        ht(() => import("./QFdW5rY8.js").then((e) => e.c), []),
        ht(() => import("./QFdW5rY8.js").then((e) => e.d), []),
      ]);
      break;
    case "bg":
      t = await Promise.all([
        ht(() => import("./C8X47GEB.js").then((e) => e.b), []),
        ht(() => import("./C8X47GEB.js").then((e) => e.a), []),
        ht(() => import("./C8X47GEB.js").then((e) => e.c), []),
        ht(() => import("./C8X47GEB.js").then((e) => e.d), []),
      ]);
      break;
    case "zh":
      t = await Promise.all([
        ht(() => import("./CEBxGNRi.js").then((e) => e.z), []),
        ht(() => import("./CEBxGNRi.js").then((e) => e.a), []),
        ht(() => import("./CEBxGNRi.js").then((e) => e.b), []),
        ht(() => import("./CEBxGNRi.js").then((e) => e.c), []),
      ]);
      break;
    case "zt":
      t = await Promise.all([
        ht(() => import("./CrwoOuDk.js").then((e) => e.z), []),
        ht(() => import("./CrwoOuDk.js").then((e) => e.a), []),
        ht(() => import("./CrwoOuDk.js").then((e) => e.b), []),
        ht(() => import("./CrwoOuDk.js").then((e) => e.c), []),
      ]);
      break;
    case "hr":
      t = await Promise.all([
        ht(() => import("./CfDzpeLx.js").then((e) => e.h), []),
        ht(() => import("./CfDzpeLx.js").then((e) => e.a), []),
        ht(() => import("./CfDzpeLx.js").then((e) => e.b), []),
        ht(() => import("./CfDzpeLx.js").then((e) => e.c), []),
      ]);
      break;
    case "cs":
      t = await Promise.all([
        ht(() => import("./OuARYbqT.js").then((e) => e.c), []),
        ht(() => import("./OuARYbqT.js").then((e) => e.a), []),
        ht(() => import("./OuARYbqT.js").then((e) => e.b), []),
        ht(() => import("./OuARYbqT.js").then((e) => e.d), []),
      ]);
      break;
    case "da":
      t = await Promise.all([
        ht(() => import("./BTVNZWX4.js").then((e) => e.d), []),
        ht(() => import("./BTVNZWX4.js").then((e) => e.a), []),
        ht(() => import("./BTVNZWX4.js").then((e) => e.b), []),
        ht(() => import("./BTVNZWX4.js").then((e) => e.c), []),
      ]);
      break;
    case "nl":
      t = await Promise.all([
        ht(() => import("./Cn5gz8bv.js").then((e) => e.n), []),
        ht(() => import("./Cn5gz8bv.js").then((e) => e.a), []),
        ht(() => import("./Cn5gz8bv.js").then((e) => e.b), []),
        ht(() => import("./Cn5gz8bv.js").then((e) => e.c), []),
      ]);
      break;
    case "et":
      t = await Promise.all([
        ht(() => import("./5C4xcwZ1.js").then((e) => e.e), []),
        ht(() => import("./5C4xcwZ1.js").then((e) => e.a), []),
        ht(() => import("./5C4xcwZ1.js").then((e) => e.b), []),
        ht(() => import("./5C4xcwZ1.js").then((e) => e.c), []),
      ]);
      break;
    case "fi":
      t = await Promise.all([
        ht(() => import("./CSqu-vS8.js").then((e) => e.f), []),
        ht(() => import("./CSqu-vS8.js").then((e) => e.a), []),
        ht(() => import("./CSqu-vS8.js").then((e) => e.b), []),
        ht(() => import("./CSqu-vS8.js").then((e) => e.c), []),
      ]);
      break;
    case "fr":
      t = await Promise.all([
        ht(() => import("./Bov7Oh6C.js").then((e) => e.f), []),
        ht(() => import("./Bov7Oh6C.js").then((e) => e.a), []),
        ht(() => import("./Bov7Oh6C.js").then((e) => e.b), []),
        ht(() => import("./Bov7Oh6C.js").then((e) => e.c), []),
      ]);
      break;
    case "ka":
      t = await Promise.all([
        ht(() => import("./ajs3Q87i.js").then((e) => e.k), []),
        ht(() => import("./ajs3Q87i.js").then((e) => e.a), []),
        ht(() => import("./ajs3Q87i.js").then((e) => e.b), []),
        ht(() => import("./ajs3Q87i.js").then((e) => e.c), []),
      ]);
      break;
    case "de":
      t = await Promise.all([
        ht(() => import("./DDt_3CrL.js").then((e) => e.d), []),
        ht(() => import("./DDt_3CrL.js").then((e) => e.a), []),
        ht(() => import("./DDt_3CrL.js").then((e) => e.b), []),
        ht(() => import("./DDt_3CrL.js").then((e) => e.c), []),
      ]);
      break;
    case "el":
      t = await Promise.all([
        ht(() => import("./mhd_ykhE.js").then((e) => e.e), []),
        ht(() => import("./mhd_ykhE.js").then((e) => e.a), []),
        ht(() => import("./mhd_ykhE.js").then((e) => e.b), []),
        ht(() => import("./mhd_ykhE.js").then((e) => e.c), []),
      ]);
      break;
    case "he":
      t = await Promise.all([
        ht(() => import("./DAwJ_JA2.js").then((e) => e.h), []),
        ht(() => import("./DAwJ_JA2.js").then((e) => e.a), []),
        ht(() => import("./DAwJ_JA2.js").then((e) => e.b), []),
        ht(() => import("./DAwJ_JA2.js").then((e) => e.c), []),
      ]);
      break;
    case "hi":
      t = await Promise.all([
        ht(() => import("./COplcjLO.js").then((e) => e.h), []),
        ht(() => import("./COplcjLO.js").then((e) => e.a), []),
        ht(() => import("./COplcjLO.js").then((e) => e.b), []),
        ht(() => import("./COplcjLO.js").then((e) => e.c), []),
      ]);
      break;
    case "hu":
      t = await Promise.all([
        ht(() => import("./BRVajms_.js").then((e) => e.h), []),
        ht(() => import("./BRVajms_.js").then((e) => e.a), []),
        ht(() => import("./BRVajms_.js").then((e) => e.b), []),
        ht(() => import("./BRVajms_.js").then((e) => e.c), []),
      ]);
      break;
    case "id":
      t = await Promise.all([
        ht(() => import("./DlJdILKE.js").then((e) => e.i), []),
        ht(() => import("./DlJdILKE.js").then((e) => e.a), []),
        ht(() => import("./DlJdILKE.js").then((e) => e.b), []),
        ht(() => import("./DlJdILKE.js").then((e) => e.c), []),
      ]);
      break;
    case "it":
      t = await Promise.all([
        ht(() => import("./CalOJY_b.js").then((e) => e.i), []),
        ht(() => import("./CalOJY_b.js").then((e) => e.a), []),
        ht(() => import("./CalOJY_b.js").then((e) => e.b), []),
        ht(() => import("./CalOJY_b.js").then((e) => e.c), []),
      ]);
      break;
    case "ja":
      t = await Promise.all([
        ht(() => import("./gLANo-AL.js").then((e) => e.j), []),
        ht(() => import("./gLANo-AL.js").then((e) => e.a), []),
        ht(() => import("./gLANo-AL.js").then((e) => e.b), []),
        ht(() => import("./gLANo-AL.js").then((e) => e.c), []),
      ]);
      break;
    case "ko":
      t = await Promise.all([
        ht(() => import("./CdXpeTSF.js").then((e) => e.k), []),
        ht(() => import("./CdXpeTSF.js").then((e) => e.a), []),
        ht(() => import("./CdXpeTSF.js").then((e) => e.b), []),
        ht(() => import("./CdXpeTSF.js").then((e) => e.c), []),
      ]);
      break;
    case "lv":
      t = await Promise.all([
        ht(() => import("./Dz1mGmqL.js").then((e) => e.l), []),
        ht(() => import("./Dz1mGmqL.js").then((e) => e.a), []),
        ht(() => import("./Dz1mGmqL.js").then((e) => e.b), []),
        ht(() => import("./Dz1mGmqL.js").then((e) => e.c), []),
      ]);
      break;
    case "lt":
      t = await Promise.all([
        ht(() => import("./CdpnN4RA.js").then((e) => e.l), []),
        ht(() => import("./CdpnN4RA.js").then((e) => e.a), []),
        ht(() => import("./CdpnN4RA.js").then((e) => e.b), []),
        ht(() => import("./CdpnN4RA.js").then((e) => e.c), []),
      ]);
      break;
    case "ms":
      t = await Promise.all([
        ht(() => import("./DdDz2IUG.js").then((e) => e.m), []),
        ht(() => import("./DdDz2IUG.js").then((e) => e.a), []),
        ht(() => import("./DdDz2IUG.js").then((e) => e.b), []),
        ht(() => import("./DdDz2IUG.js").then((e) => e.c), []),
      ]);
      break;
    case "mn":
      t = await Promise.all([
        ht(() => import("./D7vOSrug.js").then((e) => e.m), []),
        ht(() => import("./D7vOSrug.js").then((e) => e.a), []),
        ht(() => import("./D7vOSrug.js").then((e) => e.b), []),
        ht(() => import("./D7vOSrug.js").then((e) => e.c), []),
      ]);
      break;
    case "fa":
      t = await Promise.all([
        ht(() => import("./CsBPPhHS.js").then((e) => e.f), []),
        ht(() => import("./CsBPPhHS.js").then((e) => e.a), []),
        ht(() => import("./CsBPPhHS.js").then((e) => e.b), []),
        ht(() => import("./CsBPPhHS.js").then((e) => e.c), []),
      ]);
      break;
    case "pl":
      t = await Promise.all([
        ht(() => import("./CL6HiNn9.js").then((e) => e.p), []),
        ht(() => import("./CL6HiNn9.js").then((e) => e.a), []),
        ht(() => import("./CL6HiNn9.js").then((e) => e.b), []),
        ht(() => import("./CL6HiNn9.js").then((e) => e.c), []),
      ]);
      break;
    case "pt":
      t = await Promise.all([
        ht(() => import("./qlGaGSfE.js").then((e) => e.p), []),
        ht(() => import("./qlGaGSfE.js").then((e) => e.a), []),
        ht(() => import("./qlGaGSfE.js").then((e) => e.b), []),
        ht(() => import("./qlGaGSfE.js").then((e) => e.c), []),
      ]);
      break;
    case "ro":
      t = await Promise.all([
        ht(() => import("./CVF-3l9C.js").then((e) => e.r), []),
        ht(() => import("./CVF-3l9C.js").then((e) => e.a), []),
        ht(() => import("./CVF-3l9C.js").then((e) => e.b), []),
        ht(() => import("./CVF-3l9C.js").then((e) => e.c), []),
      ]);
      break;
    case "ru":
      t = await Promise.all([
        ht(() => import("./DvfNLo0m.js").then((e) => e.r), []),
        ht(() => import("./DvfNLo0m.js").then((e) => e.a), []),
        ht(() => import("./DvfNLo0m.js").then((e) => e.b), []),
        ht(() => import("./DvfNLo0m.js").then((e) => e.c), []),
      ]);
      break;
    case "sr":
      t = await Promise.all([
        ht(() => import("./CnSw3SKD.js").then((e) => e.s), []),
        ht(() => import("./CnSw3SKD.js").then((e) => e.a), []),
        ht(() => import("./CnSw3SKD.js").then((e) => e.b), []),
        ht(() => import("./CnSw3SKD.js").then((e) => e.c), []),
      ]);
      break;
    case "sk":
      t = await Promise.all([
        ht(() => import("./BKOaBSzs.js").then((e) => e.s), []),
        ht(() => import("./BKOaBSzs.js").then((e) => e.a), []),
        ht(() => import("./BKOaBSzs.js").then((e) => e.b), []),
        ht(() => import("./BKOaBSzs.js").then((e) => e.c), []),
      ]);
      break;
    case "sl":
      t = await Promise.all([
        ht(() => import("./psyetGaP.js").then((e) => e.s), []),
        ht(() => import("./psyetGaP.js").then((e) => e.a), []),
        ht(() => import("./psyetGaP.js").then((e) => e.b), []),
        ht(() => import("./psyetGaP.js").then((e) => e.c), []),
      ]);
      break;
    case "es":
      t = await Promise.all([
        ht(() => import("./CAi373X7.js").then((e) => e.e), []),
        ht(() => import("./CAi373X7.js").then((e) => e.a), []),
        ht(() => import("./CAi373X7.js").then((e) => e.b), []),
        ht(() => import("./CAi373X7.js").then((e) => e.c), []),
      ]);
      break;
    case "sv":
      t = await Promise.all([
        ht(() => import("./B_gzaws3.js").then((e) => e.s), []),
        ht(() => import("./B_gzaws3.js").then((e) => e.a), []),
        ht(() => import("./B_gzaws3.js").then((e) => e.b), []),
        ht(() => import("./B_gzaws3.js").then((e) => e.c), []),
      ]);
      break;
    case "tg":
      t = await Promise.all([
        ht(() => import("./BNo3iAyu.js").then((e) => e.t), []),
        ht(() => import("./BNo3iAyu.js").then((e) => e.a), []),
        ht(() => import("./BNo3iAyu.js").then((e) => e.b), []),
        ht(() => import("./BNo3iAyu.js").then((e) => e.c), []),
      ]);
      break;
    case "th":
      t = await Promise.all([
        ht(() => import("./BKrIy7a4.js").then((e) => e.t), []),
        ht(() => import("./BKrIy7a4.js").then((e) => e.a), []),
        ht(() => import("./BKrIy7a4.js").then((e) => e.b), []),
        ht(() => import("./BKrIy7a4.js").then((e) => e.c), []),
      ]);
      break;
    case "tr":
      t = await Promise.all([
        ht(() => import("./Btm1G9e5.js").then((e) => e.t), []),
        ht(() => import("./Btm1G9e5.js").then((e) => e.a), []),
        ht(() => import("./Btm1G9e5.js").then((e) => e.b), []),
        ht(() => import("./Btm1G9e5.js").then((e) => e.c), []),
      ]);
      break;
    case "uk":
      t = await Promise.all([
        ht(() => import("./DFOHfYBN.js").then((e) => e.u), []),
        ht(() => import("./DFOHfYBN.js").then((e) => e.a), []),
        ht(() => import("./DFOHfYBN.js").then((e) => e.b), []),
        ht(() => import("./DFOHfYBN.js").then((e) => e.c), []),
      ]);
      break;
    case "uz":
      t = await Promise.all([
        ht(() => import("./Bh-a-uuy.js").then((e) => e.u), []),
        ht(() => import("./Bh-a-uuy.js").then((e) => e.a), []),
        ht(() => import("./Bh-a-uuy.js").then((e) => e.b), []),
        ht(() => import("./Bh-a-uuy.js").then((e) => e.c), []),
      ]);
      break;
    case "vi":
      t = await Promise.all([
        ht(() => import("./DY0jJwXq.js").then((e) => e.v), []),
        ht(() => import("./DY0jJwXq.js").then((e) => e.a), []),
        ht(() => import("./DY0jJwXq.js").then((e) => e.b), []),
        ht(() => import("./DY0jJwXq.js").then((e) => e.c), []),
      ]);
      break;
    default:
      t = await Promise.all([
        ht(() => import("./CBg_RnCD.js").then((e) => e.e), []),
        ht(() => import("./CBg_RnCD.js").then((e) => e.a), []),
        ht(() => import("./CBg_RnCD.js").then((e) => e.b), []),
        ht(() => import("./CBg_RnCD.js").then((e) => e.c), []),
      ]);
  }
  window.lang = {
    chart: t[0].chart,
    login: t[1].login,
    trade: t[2].trade,
    ui: t[3].ui,
  };
});
class ys {
  constructor(e) {
    (X(this, K),
      (this.accountAuto = !1),
      (this.accountUrl = ""),
      (this.traderCountry = ""),
      (this.traderCurrency = ""),
      (this.status = 0),
      (this.resolve = () => {}),
      (this.demoGroupsStatus = -1),
      (this.realGroupsStatus = -1),
      (this.ready = new Promise((e) => {
        this.resolve = () => {
          e();
        };
      })),
      (this.tradeServerDemo = e.trade_server_demo),
      (this.tradeServerReal = e.trade_server_real),
      (this.broker = {
        name: e.broker.name,
        url: e.broker.url,
        address: e.broker.address,
        email: e.broker.email,
        phone: e.broker.phone,
        desktop_setup_url: e.broker.desktop_setup_url,
      }),
      (this.servers = e.servers.map((e) => ({
        server: e.server,
        type: e.type,
        groups: e.groups.map((e) => ({
          name: e.name,
          group: e.group,
          account_type: e.account_type,
          leverages: e.leverages,
          default_deposit: e.default_deposit,
          currency: e.currency,
          flags: e.flags,
          agreements: e.agreements,
          real: e.real,
          countries: e.countries,
        })),
      }))),
      (this.startupMode = e.startup_mode),
      (this.login = e.login || ""),
      (this.accountAuto = Boolean(e.account_auto)),
      (this.accountUrl = e.account_url || ""),
      ([this.groups, this.realGroupsStatus, this.demoGroupsStatus] = te(
        this,
        K,
        Z,
      ).call(this)),
      (this.build = e.build));
  }
  setTraderParams(e) {
    (([this.traderCountry, this.traderCurrency] = e),
      ([this.groups, this.realGroupsStatus, this.demoGroupsStatus] = te(
        this,
        K,
        Z,
      ).call(this)),
      (this.status = 2),
      this.resolve());
  }
  getCaptionTypeTitle(e) {
    switch (e) {
      case 1:
        return "Client agreement";
      case 2:
        return "Risk disclosure";
      case 3:
        return "Client agreement and risk disclosure";
      case 4:
        return "Complaints handling procedure";
      case 5:
        return "Order execution policy";
      case 6:
        return "Client categorisation notice";
      case 7:
        return "Conflicts of interest policy";
      case 8:
        return "Data Protection Policy";
      default:
        return "";
    }
  }
  isHedgeGroup(e) {
    return 2 === e.account_type;
  }
}
((K = new WeakSet()),
  (Z = function () {
    var e;
    const t = (null == (e = this.servers[0]) ? void 0 : e.groups) ?? [],
      o = {
        all: { list: [], index: {} },
        real: {
          all: { list: [], index: {} },
          hedging: { list: [], index: {} },
          netting: { list: [], index: {} },
        },
        demo: {
          all: { list: [], index: {} },
          hedging: { list: [], index: {} },
          netting: { list: [], index: {} },
        },
      };
    return (
      t.forEach((e) => {
        (o.all.list.push(e),
          (o.all.index[e.group] = e),
          e.real
            ? (o.real.all.list.push(e),
              (o.real.all.index[e.group] = e),
              this.isHedgeGroup(e)
                ? (o.real.hedging.list.push(e),
                  (o.real.hedging.index[e.group] = e))
                : (o.real.netting.list.push(e),
                  (o.real.netting.index[e.group] = e)))
            : (o.demo.all.list.push(e),
              (o.demo.all.index[e.group] = e),
              this.isHedgeGroup(e)
                ? (o.demo.hedging.list.push(e),
                  (o.demo.hedging.index[e.group] = e))
                : (o.demo.netting.list.push(e),
                  (o.demo.netting.index[e.group] = e))));
      }),
      [o, te(this, K, G).call(this, o.real), te(this, K, G).call(this, o.demo)]
    );
  }),
  (G = function (e) {
    const t = e.hedging.list.length > 0,
      o = e.netting.list.length > 0;
    return t && !o ? 1 : !t && o ? 0 : -1;
  }));
class _s {
  constructor(e) {
    this.configStore = e;
  }
  async getTraderParams() {
    if (0 === this.configStore.status) {
      this.configStore.status = 1;
      const e = await ht(() => import("./Bte0Q9TL.js"), []);
      await e.default.config.init();
      const t = await e.default.config.traderParams();
      t
        ? this.configStore.setTraderParams(t)
        : this.configStore.setTraderParams(["", ""]);
    }
  }
}
const Cs = {
    NOT_STRING: 1,
    NOT_NUMBER: 2,
    NOT_BOOLEAN: 3,
    NOT_INSTANCE: 4,
    NEVER: 5,
    REQUIRED: 6,
    NOT_EMAIL: 7,
    NOT_PHONE: 8,
    NOT_BIRTH_DATE: 9,
    NOT_INT: 10,
    NOT_ENUM: 11,
    REGEXP: 12,
    UNKNOWN: 13,
    MIN_LENGTH: 14,
    MAX_LENGTH: 15,
    MIN_VALUE: 16,
    MAX_VALUE: 17,
  },
  vs = (e, t) => (
    (e.map = (t) => vs((o, r, n) => t(e(o, r, n), r, n))),
    (e.or = (t) =>
      vs((o, r, n) => {
        try {
          return e(o, r, n);
        } catch (i) {
          return t(o, r, n);
        }
      })),
    e
  );
class ks extends Error {
  constructor(e) {
    (super("Validation error"), (this.code = e));
  }
}
const $s = (e = Cs.UNKNOWN) => {
    throw new ks(e);
  },
  Ss = (e) => vs((t) => (e.includes(t) ? t : $s(Cs.NOT_ENUM))),
  Es = (e, t) =>
    vs((o, r, n) =>
      typeof o == typeof e ? o : t ? $s(t()) : r ? $s(r()) : $s(),
    ),
  As = (e = () => Cs.NOT_STRING) => Es("", e),
  Ps = (e = () => Cs.NOT_NUMBER) => Es(0, e),
  Ts = (e = () => Cs.NOT_BOOLEAN) => Es(!0, e),
  xs = () => Es(),
  Ds = (e, t = () => Cs.NOT_INSTANCE) =>
    ((e, t = () => Cs.NOT_INSTANCE) =>
      vs((o, r, n) => (o instanceof e ? o : t ? $s(t()) : r ? $s(r()) : $s())))(
      e,
      t,
    ),
  Ls = (e) =>
    Ds(Object).map((t) => {
      const o = {},
        r = {};
      for (const i in e)
        try {
          const r = e[i](t[i], void 0, t);
          void 0 !== r && (o[i] = r);
        } catch (n) {
          n instanceof ks && (r[i] = n.code);
        }
      if (Object.keys(r).length) throw r;
      return o;
    }),
  Os = (e) => Ds(Array).map((t) => t.map((o, r) => e(o, void 0, t))),
  Is = (e) => {
    return "" === (t = e) || null == t ? $s(Cs.REQUIRED) : e;
    var t;
  },
  js = (e) => (/^\d*$/.test(e) ? e : $s(Cs.NOT_INT)),
  Vs = (e) => (/\S+@\S+\.\S+/.test(e) ? e : $s(Cs.NOT_EMAIL)),
  Ms = (e) => (/^\s*\+?[\s\d]{7,15}$/.test(e) ? e : $s(Cs.NOT_PHONE)),
  Rs = (e) => (t) => (e.test(t) ? t : $s(Cs.REGEXP)),
  Bs = (e) => (t) => (t.length >= e ? t : $s(Cs.MIN_LENGTH)),
  Hs = (e, t) => (o) => {
    const r = new Date(),
      n = new Date();
    (r.setUTCFullYear(r.getUTCFullYear() - e),
      n.setUTCFullYear(n.getUTCFullYear() - t));
    const i = new Date(o),
      s = i.getTime() - r.getTime(),
      a = i.getTime() - n.getTime();
    return s > 0 || a < 0 ? $s(Cs.NOT_BIRTH_DATE) : o;
  };
function Ns(e) {
  return window.JSON.parse(window.JSON.stringify(e));
}
function zs(e, t) {
  const o = {};
  let r = !1;
  return (
    Object.keys(e).forEach((n) => {
      const i = n;
      if (null !== t[i] && void 0 !== t[i] && t[i] !== e[i]) {
        let n = t[i];
        ("object" == typeof n && (n = zs(e[i], t[i])),
          null != n && ((o[i] = n), (r = !0)));
      }
    }),
    r ? o : null
  );
}
function Us(e, t) {
  return (
    Object.keys(t).forEach((o) => {
      Fs(t[o])
        ? ((e[o] && Fs(e[o])) || (e[o] = {}), (e[o] = Us(e[o], t[o])))
        : null === t[o]
          ? ((e[o] = null), delete e[o])
          : (e[o] = t[o]);
    }),
    e
  );
}
function Fs(e) {
  return e instanceof Object || Array.isArray(e);
}
Symbol.toStringTag;
const qs =
  (Symbol.toStringTag,
  new (class {
    constructor() {
      ((this.configStore = new ys(window.__terminal_params)),
        (this.configController = new _s(this.configStore)));
    }
  })());
async function Ws() {
  const e = await zr.init(qs.configStore);
  e.theme.themeController.init();
  const t = bs.langController.init(),
    o = e.init(),
    r = ht(() => import("./C4q1ypxK.js"), []),
    [n] = await Promise.all([r, t, o]);
  document.body.classList.remove("loader");
  const i = document.getElementById("initial-loader-style");
  null == i || i.remove();
  const s = new n.AuthModule(qs.configStore.build, e);
  return { lang: bs, ui: e, configModule: qs, auth: s };
}
(document.body.classList.toggle("win", ct()),
  (async function () {
    return new ms({ target: document.body, props: await Ws() });
  })().then((e) => e));
const Ks = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: {
          background: 988960,
          border: 2831683,
          bottomPanel: 1381653,
          card: 2502463,
          icon: { default: 13750738, disabled: 6582657 },
          fill: {
            blue: 3245055,
            blueHover: 4953087,
            blueActive: 3045867,
            green: 3584843,
            greenHover: 4308566,
            greenActive: 3054913,
            red: 15354956,
            redHover: 16013657,
            redActive: 16075595,
            lightBlue: 2107699,
            lightBlueHover: 2437180,
            lightBlueActive: 3356216,
            lightRed: 3943470,
            lightRedHover: 4402480,
            lightRedActive: 4929081,
            orange: 15495191,
            orangeHover: 16746803,
            orangeActive: 14707994,
            lightYellow: 3943470,
            total: 2831683,
          },
          text: {
            default: 16777215,
            secondary: 9413304,
            inverted: 16777215,
            red: 16734296,
            blue: 4560895,
            green: 4900447,
            orange: 16746051,
            disabled: 10989752,
          },
          input: {
            fill: { disabled: 3026994 },
            border: { default: 14540253, hover: 8899326, invalid: 12067876 },
          },
          button: { disabled: 3026994 },
          scroll: 6580601,
          chart: {
            backgroundColor: 988960,
            gridColor: 2107186,
            titleColor: 16777215,
            descriptionColor: 9413304,
            graph: {
              upColor: 2533018,
              downColor: 15684432,
              lineColor: 45039,
              areaColor: 45039,
            },
            priceLines: {
              bidUp: 2533018,
              bidDown: 15684432,
              bidText: 16777215,
              ask: 13750738,
              askText: 0,
            },
            axis: { borderColor: 6580601, textColor: 10461087 },
            crosshair: {
              lineColor: 6580601,
              textColor: 16777215,
              textBackgroundColor: 6580601,
            },
            selected: {
              marker: { textColor: 0, backgroundColor: 13097950 },
              diff: { color: 13097950, alpha: 0.3 },
            },
            indicator: { titleColor: 9413304 },
            object: {
              point: {
                hover: { backgroundColor: 988960, borderColor: 3245055 },
                focus: { backgroundColor: 988960, borderColor: 4953087 },
                active: { backgroundColor: 988960, borderColor: 3045867 },
              },
              text: { defaultBorderColor: 3245055 },
            },
            volume: { upColor: 110447, downColor: 16723968, lineColor: 45039 },
          },
          calendar: {
            button: { backgroundColor: 988960, textColor: 16777215 },
            group: {
              borderColor: 2833488,
              backgroundColor: 988960,
              title: {
                textColor: 9413304,
                backgroundColor: 988960,
                linkColor: 4560895,
              },
              event: {
                titleColor: 16777215,
                timeColor: 9413304,
                descriptionColor: 9413304,
              },
            },
          },
          tradeMark: {
            buyLine: 3245055,
            buyText: 4560895,
            buyArrow: 3245055,
            buyArrowBorder: 16777215,
            sellLine: 15354956,
            sellText: 16734296,
            sellArrow: 15354956,
            sellArrowBorder: 16777215,
            blurLine: 11908533,
            blurText: 9413304,
            blurArrow: 11908533,
            blurArrowBorder: 16777215,
            slLine: 15495191,
            slText: 16746051,
            slArrow: 15495191,
            slArrowBorder: 16777215,
            tpLine: 3584843,
            tpText: 4900447,
            tpArrow: 3584843,
            tpArrowBorder: 16777215,
          },
          dark: 1,
        },
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Zs = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: {
          background: 16777215,
          border: 15263976,
          bottomPanel: 16250871,
          card: 16777215,
          icon: { default: 5590089, disabled: 13750737 },
          fill: {
            blue: 4676090,
            blueHover: 7372543,
            blueActive: 2439664,
            green: 3584843,
            greenHover: 4308566,
            greenActive: 3054913,
            red: 15219761,
            redHover: 16013657,
            redActive: 16075595,
            lightBlue: 15858175,
            lightBlueHover: 15070463,
            lightBlueActive: 14281204,
            lightRed: 16642545,
            lightRedHover: 16443624,
            lightRedActive: 16376803,
            orange: 15495191,
            orangeHover: 16746803,
            orangeActive: 14707994,
            lightYellow: 16644849,
            total: 15791609,
          },
          text: {
            default: 0,
            secondary: 8224125,
            inverted: 16777215,
            red: 12850967,
            blue: 4676090,
            green: 2200372,
            orange: 12408606,
            disabled: 10989752,
          },
          input: {
            fill: { disabled: 16053750 },
            border: { default: 14540253, hover: 5737714, invalid: 12067876 },
          },
          button: { disabled: 13750737 },
          scroll: 10461087,
          chart: {
            backgroundColor: 16777215,
            gridColor: 15263976,
            titleColor: 0,
            descriptionColor: 8421504,
            graph: {
              upColor: 5737714,
              downColor: 15219761,
              lineColor: 4676090,
              areaColor: 4676090,
            },
            priceLines: {
              bidUp: 5737714,
              bidDown: 15219761,
              bidText: 16777215,
              ask: 13750738,
              askText: 0,
            },
            axis: { borderColor: 10461087, textColor: 0 },
            crosshair: {
              lineColor: 10461087,
              textColor: 16777215,
              textBackgroundColor: 10461087,
            },
            selected: {
              marker: { textColor: 0, backgroundColor: 13097950 },
              diff: { color: 13097950, alpha: 0.3 },
            },
            indicator: { titleColor: 8421504 },
            object: {
              point: {
                hover: { backgroundColor: 16777215, borderColor: 3045867 },
                focus: { backgroundColor: 16777215, borderColor: 4953087 },
                active: { backgroundColor: 16777215, borderColor: 3045867 },
              },
              text: { defaultBorderColor: 3245055 },
            },
            volume: {
              upColor: 4676090,
              downColor: 16723968,
              lineColor: 4676090,
            },
          },
          calendar: {
            button: { backgroundColor: 16777215, textColor: 0 },
            group: {
              borderColor: 15263976,
              backgroundColor: 16777215,
              title: {
                textColor: 8421504,
                backgroundColor: 16777215,
                linkColor: 750067,
              },
              event: {
                titleColor: 0,
                timeColor: 8421504,
                descriptionColor: 8421504,
              },
            },
          },
          tradeMark: {
            buyLine: 3245055,
            buyText: 4560895,
            buyArrow: 3245055,
            buyArrowBorder: 16777215,
            sellLine: 15354956,
            sellText: 16734296,
            sellArrow: 15354956,
            sellArrowBorder: 16777215,
            blurLine: 11908533,
            blurText: 8421504,
            blurArrow: 11908533,
            blurArrowBorder: 16777215,
            slLine: 15495191,
            slText: 16746051,
            slArrow: 15495191,
            slArrowBorder: 16777215,
            tpLine: 3584843,
            tpText: 4900447,
            tpArrow: 3584843,
            tpArrowBorder: 16777215,
          },
          dark: 0,
        },
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Gs = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: {
          background: 988960,
          border: 2831683,
          bottomPanel: 1381653,
          card: 2502463,
          icon: { default: 13750738, disabled: 6582657 },
          fill: {
            blue: 5737714,
            blueHover: 7381759,
            blueActive: 3107802,
            green: 3584843,
            greenHover: 4308566,
            greenActive: 3054913,
            red: 16734029,
            redHover: 16739942,
            redActive: 15353662,
            lightBlue: 2107699,
            lightBlueHover: 2437180,
            lightBlueActive: 3356216,
            lightRed: 3943470,
            lightRedHover: 4402480,
            lightRedActive: 4929081,
            orange: 15495191,
            orangeHover: 16746803,
            orangeActive: 14707994,
            lightYellow: 3943470,
            total: 2831683,
          },
          text: {
            default: 16777215,
            secondary: 9413304,
            inverted: 16777215,
            red: 16734296,
            blue: 9349119,
            green: 4900447,
            orange: 16746051,
            disabled: 16777215,
          },
          input: {
            fill: { disabled: 3026994 },
            border: { default: 14540253, hover: 8899326, invalid: 12067876 },
          },
          button: { disabled: 3026994 },
          scroll: 6580601,
          chart: {
            backgroundColor: 988960,
            gridColor: 2831683,
            titleColor: 16777215,
            descriptionColor: 9413304,
            graph: {
              upColor: 5737714,
              downColor: 16734029,
              lineColor: 5737714,
              areaColor: 5737714,
            },
            priceLines: {
              bidUp: 5737714,
              bidDown: 16734029,
              bidText: 16777215,
              ask: 13750738,
              askText: 0,
            },
            axis: { borderColor: 6580601, textColor: 10461087 },
            crosshair: {
              lineColor: 6580601,
              textColor: 16777215,
              textBackgroundColor: 6580601,
            },
            selected: {
              marker: { textColor: 0, backgroundColor: 13097950 },
              diff: { color: 13097950, alpha: 0.3 },
            },
            indicator: { titleColor: 9413304 },
            object: {
              point: {
                hover: { backgroundColor: 988960, borderColor: 3245055 },
                focus: { backgroundColor: 988960, borderColor: 4953087 },
                active: { backgroundColor: 988960, borderColor: 3045867 },
              },
              text: { defaultBorderColor: 3245055 },
            },
            volume: { upColor: 5737714, downColor: 16734029, lineColor: 45039 },
          },
          calendar: {
            button: { backgroundColor: 988960, textColor: 988960 },
            group: {
              borderColor: 2833488,
              backgroundColor: 988960,
              title: {
                textColor: 9413304,
                backgroundColor: 988960,
                linkColor: 4560895,
              },
              event: {
                titleColor: 16777215,
                timeColor: 9413304,
                descriptionColor: 9413304,
              },
            },
          },
          tradeMark: {
            buyLine: 3245055,
            buyText: 4560895,
            buyArrow: 3245055,
            buyArrowBorder: 16777215,
            sellLine: 15354956,
            sellText: 16734296,
            sellArrow: 15354956,
            sellArrowBorder: 16777215,
            blurLine: 11908533,
            blurText: 9413304,
            blurArrow: 11908533,
            blurArrowBorder: 16777215,
            slLine: 15495191,
            slText: 16746051,
            slArrow: 15495191,
            slArrowBorder: 16777215,
            tpLine: 3584843,
            tpText: 4900447,
            tpArrow: 3584843,
            tpArrowBorder: 16777215,
          },
          dark: 1,
        },
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ys = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: {
          background: 16777215,
          border: 15263976,
          bottomPanel: 16250871,
          card: 16777215,
          icon: { default: 5590089, disabled: 13750737 },
          fill: {
            blue: 3245055,
            blueHover: 4953087,
            blueActive: 3045867,
            green: 3584843,
            greenHover: 4308566,
            greenActive: 3054913,
            red: 15354956,
            redHover: 16013657,
            redActive: 16075595,
            lightBlue: 15858175,
            lightBlueHover: 15070463,
            lightBlueActive: 14281204,
            lightRed: 16642545,
            lightRedHover: 16443624,
            lightRedActive: 16376803,
            orange: 15495191,
            orangeHover: 16746803,
            orangeActive: 14707994,
            lightYellow: 16644849,
            total: 15791609,
          },
          text: {
            default: 0,
            secondary: 8421504,
            inverted: 16777215,
            red: 14155776,
            blue: 750067,
            green: 2200372,
            orange: 12408606,
            disabled: 10989752,
          },
          input: {
            fill: { disabled: 16053750 },
            border: { default: 14540253, hover: 8899326, invalid: 12067876 },
          },
          button: { disabled: 13750737 },
          scroll: 10461087,
          chart: {
            backgroundColor: 16777215,
            gridColor: 15263976,
            titleColor: 0,
            descriptionColor: 8421504,
            graph: {
              upColor: 0,
              downColor: 11908533,
              lineColor: 0,
              areaColor: 0,
            },
            priceLines: {
              bidUp: 0,
              bidDown: 11908533,
              bidText: 16777215,
              ask: 13750738,
              askText: 0,
            },
            axis: { borderColor: 10461087, textColor: 0 },
            crosshair: {
              lineColor: 10461087,
              textColor: 16777215,
              textBackgroundColor: 10461087,
            },
            selected: {
              marker: { textColor: 0, backgroundColor: 13097950 },
              diff: { color: 13097950, alpha: 0.3 },
            },
            indicator: { titleColor: 8421504 },
            object: {
              point: {
                hover: { backgroundColor: 16777215, borderColor: 3245055 },
                focus: { backgroundColor: 16777215, borderColor: 4953087 },
                active: { backgroundColor: 16777215, borderColor: 3045867 },
              },
              text: { defaultBorderColor: 3245055 },
            },
            volume: { upColor: 13750737, downColor: 6184542, lineColor: 0 },
          },
          calendar: {
            button: { backgroundColor: 16777215, textColor: 0 },
            group: {
              borderColor: 15263976,
              backgroundColor: 16777215,
              title: {
                textColor: 8421504,
                backgroundColor: 16777215,
                linkColor: 750067,
              },
              event: {
                titleColor: 0,
                timeColor: 8421504,
                descriptionColor: 8421504,
              },
            },
          },
          tradeMark: {
            buyLine: 3245055,
            buyText: 4560895,
            buyArrow: 3245055,
            buyArrowBorder: 16777215,
            sellLine: 15354956,
            sellText: 16734296,
            sellArrow: 15354956,
            sellArrowBorder: 16777215,
            blurLine: 11908533,
            blurText: 8421504,
            blurArrow: 11908533,
            blurArrowBorder: 16777215,
            slLine: 15495191,
            slText: 16746051,
            slArrow: 15495191,
            slArrowBorder: 16777215,
            tpLine: 3584843,
            tpText: 4900447,
            tpArrow: 3584843,
            tpArrowBorder: 16777215,
          },
          dark: 0,
        },
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Js = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: {
          background: 0,
          border: 2831683,
          bottomPanel: 1381653,
          card: 2502463,
          icon: { default: 13750738, disabled: 6582657 },
          fill: {
            blue: 3245055,
            blueHover: 4953087,
            blueActive: 3045867,
            green: 3584843,
            greenHover: 4308566,
            greenActive: 3054913,
            red: 15354956,
            redHover: 16013657,
            redActive: 16075595,
            lightBlue: 2107699,
            lightBlueHover: 2437180,
            lightBlueActive: 3356216,
            lightRed: 3943470,
            lightRedHover: 4402480,
            lightRedActive: 4929081,
            orange: 15495191,
            orangeHover: 16746803,
            orangeActive: 14707994,
            lightYellow: 3943470,
            total: 2831683,
          },
          text: {
            default: 16777215,
            secondary: 9413304,
            inverted: 16777215,
            red: 16734296,
            blue: 4560895,
            green: 4900447,
            orange: 16746051,
            disabled: 10989752,
          },
          input: {
            fill: { disabled: 3026994 },
            border: { default: 14540253, hover: 8899326, invalid: 12067876 },
          },
          button: { disabled: 3026994 },
          scroll: 6580601,
          chart: {
            backgroundColor: 0,
            gridColor: 2831683,
            titleColor: 16777215,
            descriptionColor: 9413304,
            graph: {
              upColor: 16777215,
              downColor: 8026746,
              lineColor: 16777215,
              areaColor: 16777215,
            },
            priceLines: {
              bidUp: 16777215,
              bidDown: 8026746,
              bidText: 0,
              ask: 13750738,
              askText: 0,
            },
            axis: { borderColor: 6580601, textColor: 10461087 },
            crosshair: {
              lineColor: 6580601,
              textColor: 16777215,
              textBackgroundColor: 6580601,
            },
            selected: {
              marker: { textColor: 0, backgroundColor: 13097950 },
              diff: { color: 13097950, alpha: 0.3 },
            },
            indicator: { titleColor: 9413304 },
            object: {
              point: {
                hover: { backgroundColor: 988960, borderColor: 3245055 },
                focus: { backgroundColor: 988960, borderColor: 4953087 },
                active: { backgroundColor: 988960, borderColor: 3045867 },
              },
              text: { defaultBorderColor: 3245055 },
            },
            volume: {
              upColor: 16777215,
              downColor: 8026746,
              lineColor: 16777215,
            },
          },
          calendar: {
            button: { backgroundColor: 988960, textColor: 988960 },
            group: {
              borderColor: 2833488,
              backgroundColor: 988960,
              title: {
                textColor: 9413304,
                backgroundColor: 988960,
                linkColor: 4560895,
              },
              event: {
                titleColor: 16777215,
                timeColor: 9413304,
                descriptionColor: 9413304,
              },
            },
          },
          tradeMark: {
            buyLine: 3245055,
            buyText: 4560895,
            buyArrow: 3245055,
            buyArrowBorder: 16777215,
            sellLine: 15354956,
            sellText: 16734296,
            sellArrow: 15354956,
            sellArrowBorder: 16777215,
            blurLine: 11908533,
            blurText: 9413304,
            blurArrow: 11908533,
            blurArrowBorder: 16777215,
            slLine: 15495191,
            slText: 16746051,
            slArrow: 15495191,
            slArrowBorder: 16777215,
            tpLine: 3584843,
            tpText: 4900447,
            tpArrow: 3584843,
            tpArrowBorder: 16777215,
          },
          dark: 1,
        },
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Qs = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: {
          background: 16777215,
          border: 15263976,
          bottomPanel: 16250871,
          card: 16777215,
          icon: { default: 5590089, disabled: 13750737 },
          fill: {
            blue: 7777413,
            blueHover: 6857080,
            blueActive: 5474402,
            green: 3584843,
            greenHover: 4308566,
            greenActive: 3054913,
            red: 13665669,
            redHover: 11430763,
            redActive: 12284530,
            lightBlue: 15857142,
            lightBlueHover: 15528691,
            lightBlueActive: 14937069,
            lightRed: 16642545,
            lightRedHover: 16443624,
            lightRedActive: 16376803,
            orange: 15495191,
            orangeHover: 16746803,
            orangeActive: 14707994,
            lightYellow: 16644849,
            total: 15857142,
          },
          text: {
            default: 0,
            secondary: 8421504,
            inverted: 16777215,
            red: 12667209,
            blue: 4416588,
            green: 2200372,
            orange: 12408606,
            disabled: 10989752,
          },
          input: {
            fill: { disabled: 16053750 },
            border: { default: 14540253, hover: 11390647, invalid: 12067876 },
          },
          button: { disabled: 13750737 },
          scroll: 10461087,
          chart: {
            backgroundColor: 16777215,
            gridColor: 15263976,
            titleColor: 0,
            descriptionColor: 8421504,
            graph: {
              upColor: 7777413,
              downColor: 13665669,
              lineColor: 7183527,
              areaColor: 7183527,
            },
            priceLines: {
              bidUp: 7777413,
              bidDown: 13665669,
              bidText: 16777215,
              ask: 13750738,
              askText: 0,
            },
            axis: { borderColor: 10461087, textColor: 0 },
            crosshair: {
              lineColor: 10461087,
              textColor: 16777215,
              textBackgroundColor: 10461087,
            },
            selected: {
              marker: { textColor: 0, backgroundColor: 13097950 },
              diff: { color: 13097950, alpha: 0.3 },
            },
            indicator: { titleColor: 8421504 },
            object: {
              point: {
                hover: { backgroundColor: 16777215, borderColor: 3245055 },
                focus: { backgroundColor: 16777215, borderColor: 4953087 },
                active: { backgroundColor: 16777215, borderColor: 3045867 },
              },
              text: { defaultBorderColor: 3245055 },
            },
            volume: { upColor: 7777413, downColor: 13665669, lineColor: 45039 },
          },
          calendar: {
            button: { backgroundColor: 16777215, textColor: 0 },
            group: {
              borderColor: 15263976,
              backgroundColor: 16777215,
              title: {
                textColor: 8421504,
                backgroundColor: 16777215,
                linkColor: 750067,
              },
              event: {
                titleColor: 0,
                timeColor: 8421504,
                descriptionColor: 8421504,
              },
            },
          },
          tradeMark: {
            buyLine: 3245055,
            buyText: 4560895,
            buyArrow: 3245055,
            buyArrowBorder: 16777215,
            sellLine: 15354956,
            sellText: 16734296,
            sellArrow: 15354956,
            sellArrowBorder: 16777215,
            blurLine: 11908533,
            blurText: 8421504,
            blurArrow: 11908533,
            blurArrowBorder: 16777215,
            slLine: 15495191,
            slText: 16746051,
            slArrow: 15495191,
            slArrowBorder: 16777215,
            tpLine: 3584843,
            tpText: 4900447,
            tpArrow: 3584843,
            tpArrowBorder: 16777215,
          },
          dark: 0,
        },
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Xs = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: {
          background: 988960,
          border: 2831683,
          bottomPanel: 1381653,
          card: 2502463,
          icon: { default: 13750738, disabled: 6582657 },
          fill: {
            blue: 7777413,
            blueHover: 7645827,
            blueActive: 5867622,
            green: 7777413,
            greenHover: 7645827,
            greenActive: 5867622,
            red: 13134442,
            redHover: 11753046,
            redActive: 11358802,
            lightBlue: 2107699,
            lightBlueHover: 2437180,
            lightBlueActive: 3356216,
            lightRed: 3943470,
            lightRedHover: 4402480,
            lightRedActive: 4929081,
            orange: 15495191,
            orangeHover: 16746803,
            orangeActive: 14707994,
            lightYellow: 3943470,
            total: 2831683,
          },
          text: {
            default: 16777215,
            secondary: 9413304,
            inverted: 16777215,
            red: 16748431,
            blue: 10800816,
            green: 4900447,
            orange: 16746051,
            disabled: 16777215,
          },
          input: {
            fill: { disabled: 3026994 },
            border: { default: 14540253, hover: 8899326, invalid: 12067876 },
          },
          button: { disabled: 3026994 },
          scroll: 6580601,
          chart: {
            backgroundColor: 988960,
            gridColor: 2831683,
            titleColor: 16777215,
            descriptionColor: 9413304,
            graph: {
              upColor: 7777413,
              downColor: 13134442,
              lineColor: 7183527,
              areaColor: 7183527,
            },
            priceLines: {
              bidUp: 7777413,
              bidDown: 13134442,
              bidText: 16777215,
              ask: 13750738,
              askText: 0,
            },
            axis: { borderColor: 6580601, textColor: 10461087 },
            crosshair: {
              lineColor: 6580601,
              textColor: 16777215,
              textBackgroundColor: 6580601,
            },
            selected: {
              marker: { textColor: 0, backgroundColor: 13097950 },
              diff: { color: 13097950, alpha: 0.3 },
            },
            indicator: { titleColor: 9413304 },
            object: {
              point: {
                hover: { backgroundColor: 988960, borderColor: 3245055 },
                focus: { backgroundColor: 988960, borderColor: 4953087 },
                active: { backgroundColor: 988960, borderColor: 3045867 },
              },
              text: { defaultBorderColor: 3245055 },
            },
            volume: {
              upColor: 7777413,
              downColor: 13134442,
              lineColor: 7183527,
            },
          },
          calendar: {
            button: { backgroundColor: 988960, textColor: 988960 },
            group: {
              borderColor: 2833488,
              backgroundColor: 988960,
              title: {
                textColor: 9413304,
                backgroundColor: 988960,
                linkColor: 4560895,
              },
              event: {
                titleColor: 16777215,
                timeColor: 9413304,
                descriptionColor: 9413304,
              },
            },
          },
          tradeMark: {
            buyLine: 3245055,
            buyText: 4560895,
            buyArrow: 3245055,
            buyArrowBorder: 16777215,
            sellLine: 15354956,
            sellText: 16734296,
            sellArrow: 15354956,
            sellArrowBorder: 16777215,
            blurLine: 11908533,
            blurText: 9413304,
            blurArrow: 11908533,
            blurArrowBorder: 16777215,
            slLine: 15495191,
            slText: 16746051,
            slArrow: 15495191,
            slArrowBorder: 16777215,
            tpLine: 3584843,
            tpText: 4900447,
            tpArrow: 3584843,
            tpArrowBorder: 16777215,
          },
          dark: 1,
        },
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ea = (e) => window.tr(window.lang.trade.errors[e]) || "";
export {
  Po as $,
  Qr as A,
  Lt as B,
  nn as C,
  an as D,
  fs as E,
  At as F,
  on as G,
  Fr as H,
  Zr as I,
  Qt as J,
  Mr as K,
  Fo as L,
  ea as M,
  Ut as N,
  $r as O,
  no as P,
  Bt as Q,
  oo as R,
  Dt as S,
  eo as T,
  to as U,
  Cs as V,
  ro as W,
  _o as X,
  yo as Y,
  bo as Z,
  ht as _,
  js as a,
  mo as a0,
  ho as a1,
  vo as a2,
  wo as a3,
  go as a4,
  So as a5,
  Uo as a6,
  fo as a7,
  po as a8,
  uo as a9,
  Zt as aa,
  Do as ab,
  zt as ac,
  _t as ad,
  Ar as ae,
  Xt as af,
  Ft as ag,
  er as ah,
  lr as ai,
  Ro as aj,
  zo as ak,
  jn as b,
  Os as c,
  Ts as d,
  Vr as e,
  $s as f,
  Rt as g,
  co as h,
  Is as i,
  ws as j,
  Us as k,
  Ns as l,
  zs as m,
  en as n,
  Ls as o,
  Pr as p,
  Ds as q,
  Ss as r,
  As as s,
  xs as t,
  Bs as u,
  Ps as v,
  Ms as w,
  Vs as x,
  Rs as y,
  Hs as z,
};
