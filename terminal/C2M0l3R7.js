import {
  S as t,
  i as n,
  s as e,
  n as s,
  d as a,
  l as r,
  b as $,
  e as i,
  f as o,
  L as g,
  Y as l,
  Z as c,
  D as m,
  c as f,
  B as p,
  m as u,
  o as d,
  k as w,
  C as y,
  t as M,
  g as h,
  h as v,
  j as b,
  r as k,
  u as x,
  v as A,
  N as T,
  a2 as I,
  a3 as C,
  T as j,
  E as O,
  O as B,
  X as R,
  a4 as S,
} from "./CHj1SSsY.js";
import { D } from "./CQSQNu0h.js";
import { S as F } from "./Y63yw9rt.js";
import { P as E, I as P } from "./C8gngcK2.js";
import {
  A as _,
  V as L,
  B as V,
  E as W,
  I as H,
  M as X,
  P as z,
  a as G,
  b as N,
  c as q,
  C as Y,
  D as J,
  F as K,
  d as U,
  e as Z,
  f as Q,
  R as tt,
  g as nt,
  S as et,
  T as st,
  W as at,
  h as rt,
  i as $t,
  j as it,
  O as ot,
  k as gt,
  l as lt,
  m as ct,
  n as mt,
  G as ft,
  o as pt,
  p as ne2c,
  q as Fs2c,
  r as FrFmc
} from "./YtNU6idj.js";
import "./CezRPkQL.js";
import { T as ut, a as dt, F as wt } from "./u3aYl0h9.js";
import "./CRNNNCwz.js";
import "./CSht1uUK.js";
import "./BmK36PA1.js";
import "./BLCxo5ZN.js";
const yt = [
    "admi",
    "bb",
    "envelopes",
    "ikh",
    "ma",
    "psar",
    "sd",
    "atr",
    "bears",
    "bulls",
    "cci",
    "demarker",
    "fi",
    "macd",
    "macd_",
    "mao",
    "momentum",
    "rsi",
    "rvi",
    "so",
    "tea",
    "wpr",
    "ad",
    "mfi",
    "obv",
    "volumes",
    "alligator",
    "ao",
    "awesome",
    "fractals",
    "go",
    "mf",
    "engulfing",
  ],
  Mt = {};
[
  ["area", 5, "Area"],
  ["lines", 5, "Line"],
  ["quotes", 5, "Candles"],
  ["bars", 5, "Bars"],
  ["alligator", 4, "Alligator"],
  ["ao", 4, "AC", "Accelerator Oscillator"],
  ["awesome", 4, "AO", "Awesome Oscillator"],
  ["fractals", 4, "Fractals", "Fractals"],
  ["engulfing", 6, "Engulfing", "Engulfing Patterns"],
  ["go", 4, "Gator", "Gator Oscillator"],
  ["mf", 4, "BW MFI", "Market Facilitation Index"],
  ["atr", 2, "ATR", "Average True Range"],
  ["bears", 2, "Bears", "Bears Power"],
  ["bulls", 2, "Bulls", "Bulls Power"],
  ["cci", 2, "CCI", "Commodity Channel Index"],
  ["demarker", 2, "DeMarker"],
  ["fi", 2, "Force", "Force Index"],
  ["macd", 2, "MACD"],
  ["macd_", 2, "MACD_"],
  ["mao", 2, "OsMA", "Moving Average of Oscillator"],
  ["momentum", 2, "Momentum"],
  ["rsi", 2, "RSI", "Relative Strength Index"],
  ["rvi", 2, "RVI", "Relative Vigor Index"],
  ["so", 2, "Stoch", "Stochastic Oscillator"],
  ["tea", 2, "TRIX", "Triple Exponential Average"],
  ["wpr", 2, "%R", "Williams’ Percent Range"],
  ["admi", 1, "ADX", "Average Directional Movement Index"],
  ["bb", 1, "Bollinger Bands"],
  ["envelopes", 1, "Envelopes"],
  ["ikh", 1, "Ichimoku Kinko Hyo"],
  ["ma", 1, "Moving Average"],
  ["psar", 1, "Parabolic SAR"],
  ["sd", 1, "Standard Deviation"],
  ["ad", 3, "Accumulation/Distribution"],
  ["mfi", 3, "Money Flow Index"],
  ["obv", 3, "On Balance Volume"],
  ["volumes", 3, "Volumes"],
  ["calendar", 0, "Economic Calendar"],
  ["orders_trade_mark", -1, "Orders Trade Mark"],
  ["positions_trade_mark", -1, "Positions Trade Mark"],
  ["history_trade_mark", -1, "History Trade Mark"],
].forEach(([t, n, e, s]) => {
  Mt[t] = { type: t, category: n, title: e, fullTitle: s ?? e };
});
const ht = Mt;
function vt(t, n, e) {
  const s = t.slice();
  return ((s[5] = n[e]), s);
}
function bt(t) {
  let n,
    e,
    r,
    g,
    l,
    c,
    m,
    w,
    y,
    M,
    h = window.tr(window.lang.chart.indicators.search.empty) + "",
    v = window.tr(window.lang.chart.indicators.search.tryAnother) + "";
  return {
    c() {
      ((n = p("svg")),
        (e = p("path")),
        (r = p("path")),
        (g = u()),
        (l = i("div")),
        (c = d(h)),
        (m = u()),
        (w = i("br")),
        (y = u()),
        (M = d(v)),
        o(e, "fill", "#1472E6"),
        o(
          e,
          "d",
          "M32.1507 15.5587c-.5417.394-.9994.9593-1.1806 1.6838-.1639.6556-.4848 1.8344-.876 3.2575H33v2h-3.4565l-.1418.5152c-.688 2.5019-1.4349 5.2406-1.9316 7.2273-.515 2.0601-1.2114 3.5947-2.4951 4.5575-1.2744.9558-2.9341 1.2-4.975 1.2v-2c1.9591 0 3.0494-.2558 3.775-.8.7163-.5372 1.2699-1.5026 1.7549-3.4425.5023-2.0092 1.2534-4.7634 1.9392-7.2575H24.5v-2h3.5198c.4562-1.6575.8314-3.0279 1.0101-3.7425.3188-1.2755 1.1111-2.2102 1.9444-2.8162C31.7823 13.3537 32.7338 13 33.5 13h3v2h-3c-.2338 0-.7823.1463-1.3493.5587z",
        ),
        o(r, "fill-rule", "evenodd"),
        o(r, "clip-rule", "evenodd"),
        o(r, "fill", "#1472E6"),
        o(
          r,
          "d",
          "M52 24C52 10.7452 41.2548 0 28 0 14.7451 0 3.99996 10.7452 3.99996 24c0 6.6495 2.70421 12.6674 7.07284 17.0139L.0118408 52.0749 1.42605 53.4891 12.5493 42.3658C16.7242 45.8816 22.1147 48 28 48c13.2548 0 24-10.7452 24-24zM28 2c12.1502 0 22 9.8497 22 22s-9.8498 22-22 22C15.8497 46 5.99996 36.1503 5.99996 24S15.8497 2 28 2z",
        ),
        o(n, "width", "53"),
        o(n, "height", "54"),
        o(n, "fill", "none"),
        o(n, "xmlns", "http://www.w3.org/2000/svg"),
        o(l, "class", "message svelte-l09kw1"));
    },
    m(t, s) {
      ($(t, n, s),
        f(n, e),
        f(n, r),
        $(t, g, s),
        $(t, l, s),
        f(l, c),
        f(l, m),
        f(l, w),
        f(l, y),
        f(l, M));
    },
    p: s,
    d(t) {
      t && (a(n), a(g), a(l));
    },
  };
}
function kt(t) {
  let n,
    e = l(t[0]),
    s = [];
  for (let a = 0; a < e.length; a += 1) s[a] = xt(vt(t, e, a));
  return {
    c() {
      for (let t = 0; t < s.length; t += 1) s[t].c();
      n = m();
    },
    m(t, e) {
      for (let n = 0; n < s.length; n += 1) s[n] && s[n].m(t, e);
      $(t, n, e);
    },
    p(t, a) {
      if (7 & a) {
        let r;
        for (e = l(t[0]), r = 0; r < e.length; r += 1) {
          const $ = vt(t, e, r);
          s[r]
            ? s[r].p($, a)
            : ((s[r] = xt($)), s[r].c(), s[r].m(n.parentNode, n));
        }
        for (; r < s.length; r += 1) s[r].d(1);
        s.length = e.length;
      }
    },
    d(t) {
      (t && a(n), c(s, t));
    },
  };
}
function xt(t) {
  let n,
    e,
    s,
    g,
    l = ht[t[5]].fullTitle + "";
  function c() {
    return t[3](t[5]);
  }
  return {
    c() {
      ((n = i("div")),
        (e = d(l)),
        o(n, "class", "item svelte-l09kw1"),
        r(n, "active", t[5] === t[1]));
    },
    m(t, a) {
      ($(t, n, a), f(n, e), s || ((g = y(n, "click", c)), (s = !0)));
    },
    p(s, a) {
      ((t = s),
        1 & a && l !== (l = ht[t[5]].fullTitle + "") && w(e, l),
        3 & a && r(n, "active", t[5] === t[1]));
    },
    d(t) {
      (t && a(n), (s = !1), g());
    },
  };
}
function At(t) {
  let n;
  function e(t, n) {
    return t[0].length ? kt : bt;
  }
  let g = e(t),
    l = g(t);
  return {
    c() {
      ((n = i("div")),
        l.c(),
        o(n, "class", "list svelte-l09kw1"),
        r(n, "empty", !t[0].length));
    },
    m(t, e) {
      ($(t, n, e), l.m(n, null));
    },
    p(t, [s]) {
      (g === (g = e(t)) && l
        ? l.p(t, s)
        : (l.d(1), (l = g(t)), l && (l.c(), l.m(n, null))),
        1 & s && r(n, "empty", !t[0].length));
    },
    i: s,
    o: s,
    d(t) {
      (t && a(n), l.d());
    },
  };
}
function Tt(t, n, e) {
  let { list: s } = n,
    { active: a } = n;
  const r = g();
  function $(t) {
    r("select", t);
  }
  return (
    (t.$$set = (t) => {
      ("list" in t && e(0, (s = t.list)),
        "active" in t && e(1, (a = t.active)));
    }),
    [s, a, $, (t) => $(t)]
  );
}
class It extends t {
  constructor(t) {
    (super(), n(this, t, Tt, At, e, { list: 0, active: 1 }));
  }
}
function Ct(t) {
  let n, e, s, r;
  return (
    (n = new pt({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function jt(t) {
  let n, e, s, r;
  return (
    (n = new ft({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Ot(t) {
  let n, e, s, r;
  return (
    (n = new FrFmc({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Bt(t) {
  let n, e, s, r;
  return (
    (n = new ct({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Rt(t) {
  let n, e, s, r;
  return (
    (n = new lt({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function St(t) {
  let n, e, s, r;
  return (
    (n = new gt({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Dt(t) {
  let n, e, s, r;
  return (
    (n = new ot({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Ft(t) {
  let n, e, s, r;
  return (
    (n = new it({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Et(t) {
  let n, e, s, r;
  return (
    (n = new $t({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Pt(t) {
  let n, e, s, r;
  return (
    (n = new rt({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function _t(t) {
  let n, e, s, r;
  return (
    (n = new at({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Lt(t) {
  let n, e, s, r;
  return (
    (n = new st({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Vt(t) {
  let n, e, s, r;
  return (
    (n = new et({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Wt(t) {
  let n, e, s, r;
  return (
    (n = new nt({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Ht(t) {
  let n, e, s, r;
  return (
    (n = new tt({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Xt(t) {
  let n, e, s, r;
  return (
    (n = new Q({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function zt(t) {
  let n, e, s, r;
  return (
    (n = new Z({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Gt(t) {
  let n, e, s, r;
  return (
    (n = new U({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Nt(t) {
  let n, e, s, r;
  return (
    (n = new K({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function qt(t) {
  let n, e, s, r;
  return (
    (n = new J({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Yt(t) {
  let n, e, s, r;
  return (
    (n = new Y({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Jt(t) {
  let n, e, s, r;
  return (
    (n = new q({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Kt(t) {
  let n, e, s, r;
  return (
    (n = new N({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Ut(t) {
  let n, e, s, r;
  return (
    (n = new G({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Zt(t) {
  let n, e, s, r;
  return (
    (n = new X({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Qt(t) {
  let n, e, s, r;
  return (
    (n = new z({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function tn(t) {
  let n, e, s, r;
  return (
    (n = new X({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function nn(t) {
  let n, e, s, r;
  return (
    (n = new H({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function en(t) {
  let n, e, s, r;
  return (
    (n = new W({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function sn(t) {
  let n, e, s, r;
  return (
    (n = new V({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function an(t) {
  let n, e, s, r;
  return (
    (n = new _({ props: { settings: t[0] } })),
    (s = new L({ props: { analysisManager: t[1], settings: t[0] } })),
    {
      c() {
        (A(n.$$.fragment), (e = u()), A(s.$$.fragment));
      },
      m(t, a) {
        (x(n, t, a), $(t, e, a), x(s, t, a), (r = !0));
      },
      p(t, e) {
        const a = {};
        (1 & e && (a.settings = t[0]), n.$set(a));
        const r = {};
        (2 & e && (r.analysisManager = t[1]),
          1 & e && (r.settings = t[0]),
          s.$set(r));
      },
      i(t) {
        r || (h(n.$$.fragment, t), h(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), M(s.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(e), k(n, t), k(s, t));
      },
    }
  );
}
function Gt2(t){let n,e,s,r;return(n=new Fs2c({props:{settings:t[0]}}),s=new ne2c({props:{analysisManager:t[1],settings:t[0]}}),{c(){(A(n.$$.fragment),(e=u()),A(s.$$.fragment))},m(t,a){(x(n,t,a),$(t,e,a),x(s,t,a),(r=!0))},p(t,e){const a={};(1&e&&(a.settings=t[0]),n.$set(a));const r={};(2&e&&(r.analysisManager=t[1]),1&e&&(r.settings=t[0]),s.$set(r))},i(t){r||(h(n.$$.fragment,t),h(s.$$.fragment,t),(r=!0))},o(t){(M(n.$$.fragment,t),M(s.$$.fragment,t),(r=!1))},d(t){(t&&a(e),k(n,t),k(s,t))}})}
function rn(t) {
  let n, e, s, r;
  const i = [
      an,
      sn,
      en,
      nn,
      tn,
      Qt,
      Zt,
      Ut,
      Kt,
      Jt,
      Yt,
      qt,
      Nt,
      Gt,
      zt,
      Xt,
      Ht,
      Wt,
      Vt,
      Lt,
      _t,
      Pt,
      Et,
      Ft,
      Dt,
      St,
      Rt,
      Bt,
      Ot,
      jt,
      Ct,
      Gt2,
    ],
    o = [];
  function g(t, n) {
    return "admi" === t[0].type
      ? 0
      : "bb" === t[0].type
        ? 1
        : "envelopes" === t[0].type
          ? 2
          : "ikh" === t[0].type
            ? 3
            : "ma" === t[0].type
              ? 4
              : "psar" === t[0].type
                ? 5
                : "sd" === t[0].type
                  ? 6
                  : "atr" === t[0].type
                    ? 7
                    : "bears" === t[0].type
                      ? 8
                      : "bulls" === t[0].type
                        ? 9
                        : "cci" === t[0].type
                          ? 10
                          : "demarker" === t[0].type
                            ? 11
                            : "fi" === t[0].type
                              ? 12
                              : "macd" === t[0].type
                                ? 13
                                : "momentum" === t[0].type
                                  ? 14
                                  : "mao" === t[0].type
                                    ? 15
                                    : "rsi" === t[0].type
                                      ? 16
                                      : "rvi" === t[0].type
                                        ? 17
                                        : "so" === t[0].type
                                          ? 18
                                          : "tea" === t[0].type
                                            ? 19
                                            : "wpr" === t[0].type
                                              ? 20
                                              : "volumes" === t[0].type
                                                ? 21
                                                : "ad" === t[0].type
                                                  ? 22
                                                  : "mfi" === t[0].type
                                                    ? 23
                                                    : "obv" === t[0].type
                                                      ? 24
                                                      : "ao" === t[0].type
                                                        ? 25
                                                        : "alligator" ===
                                                            t[0].type
                                                          ? 26
                                                          : "awesome" ===
                                                              t[0].type
                                                            ? 27
                                                            : "fractals" ===
                                                                t[0].type
                                                              ? 28
                                                              : "go" ===
                                                                  t[0].type
                                                                ? 29
                                                                : "mf" ===
                                                                    t[0].type
                                                                  ? 30
                                                                  : "macd_" === t[0].type
                                                                  ? 31
                                                                  : -1;
  }
  return (
    ~(n = g(t)) && (e = o[n] = i[n](t)),
    {
      c() {
        (e && e.c(), (s = m()));
      },
      m(t, e) {
        (~n && o[n].m(t, e), $(t, s, e), (r = !0));
      },
      p(t, [a]) {
        let r = n;
        ((n = g(t)),
          n === r
            ? ~n && o[n].p(t, a)
            : (e &&
                (v(),
                M(o[r], 1, 1, () => {
                  o[r] = null;
                }),
                b()),
              ~n
                ? ((e = o[n]),
                  e ? e.p(t, a) : ((e = o[n] = i[n](t)), e.c()),
                  h(e, 1),
                  e.m(s.parentNode, s))
                : (e = null)));
      },
      i(t) {
        r || (h(e), (r = !0));
      },
      o(t) {
        (M(e), (r = !1));
      },
      d(t) {
        (t && a(s), ~n && o[n].d(t));
      },
    }
  );
}
function $n(t, n, e) {
  let { settings: s } = n,
    { analysisManager: a } = n;
  return (
    (t.$$set = (t) => {
      ("settings" in t && e(0, (s = t.settings)),
        "analysisManager" in t && e(1, (a = t.analysisManager)));
    }),
    [s, a]
  );
}
class on extends t {
  constructor(t) {
    (super(), n(this, t, $n, rn, e, { settings: 0, analysisManager: 1 }));
  }
}
function gn(t) {
  let n,
    e = window.tr(window.lang.chart.indicators.tabs.all) + "";
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
function ln(t) {
  let n,
    e = window.tr(window.lang.chart.indicators.tabs.trend) + "";
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
function cn(t) {
  let n,
    e = window.tr(window.lang.chart.indicators.tabs.oscillators) + "";
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
function mn(t) {
  let n,
    e = window.tr(window.lang.chart.indicators.tabs.volumes) + "";
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
function fn(t) {
  let n,
    e = window.tr(window.lang.chart.indicators.tabs.billWilliams) + "";
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
function Sn(t) {
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
function pn(t) {
  let n, e, s, r, i, o, g, l, c, m, f, p, d, w, y, A2, q, Z2;
  function v(n) {
    t[4](n);
  }
  let b = {
    slim: t[2],
    value: 0,
    $$slots: { default: [gn] },
    $$scope: { ctx: t },
  };
  function j(n) {
    t[5](n);
  }
  (void 0 !== t[0] && (b.group = t[0]),
    (n = new dt({ props: b })),
    T.push(() => I(n, "group", v)));
  let O = {
    slim: t[2],
    value: 1,
    $$slots: { default: [ln] },
    $$scope: { ctx: t },
  };
  function B(n) {
    t[6](n);
  }
  (void 0 !== t[0] && (O.group = t[0]),
    (r = new dt({ props: O })),
    T.push(() => I(r, "group", j)));
  let R = {
    slim: t[2],
    value: 2,
    $$slots: { default: [cn] },
    $$scope: { ctx: t },
  };
  function S(n) {
    t[7](n);
  }
  (void 0 !== t[0] && (R.group = t[0]),
    (g = new dt({ props: R })),
    T.push(() => I(g, "group", B)));
  let D = {
    slim: t[2],
    value: 3,
    $$slots: { default: [mn] },
    $$scope: { ctx: t },
  };
  function F(n) {
    t[8](n);
  }
  (void 0 !== t[0] && (D.group = t[0]),
    (m = new dt({ props: D })),
    T.push(() => I(m, "group", S)));
  let E = {
    slim: t[2],
    value: 4,
    $$slots: { default: [fn] },
    $$scope: { ctx: t },
  };
  function G(n) {
    t[9](n);
  }
  let _W = {
    slim: t[2],
    value: 6,
    $$slots: { default: [Sn] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[0] && (E.group = t[0]),
    (d = new dt({ props: E })),
    T.push(() => I(d, "group", F)),
    void 0 !== t[0] && (_W.group = t[0]),
    (A2 = new dt({ props: _W })),
    T.push(() => I(A2, "group", G)),
    {
      c() {
        (A(n.$$.fragment),
          (s = u()),
          A(r.$$.fragment),
          (o = u()),
          A(g.$$.fragment),
          (c = u()),
          A(m.$$.fragment),
          (p = u()),
          A(d.$$.fragment),
          (Z2 = u()),
          A(A2.$$.fragment));
      },
      m(t, e) {
        (x(n, t, e),
          $(t, s, e),
          x(r, t, e),
          $(t, o, e),
          x(g, t, e),
          $(t, c, e),
          x(m, t, e),
          $(t, p, e),
          x(d, t, e),
          $(t, Z2, e),
          x(A2, t, e),
          (y = !0));
      },
      p(t, s) {
        const a = {};
        (4 & s && (a.slim = t[2]),
          512 & s && (a.$$scope = { dirty: s, ctx: t }),
          !e && 1 & s && ((e = !0), (a.group = t[0]), C(() => (e = !1))),
          n.$set(a));
        const $ = {};
        (4 & s && ($.slim = t[2]),
          512 & s && ($.$$scope = { dirty: s, ctx: t }),
          !i && 1 & s && ((i = !0), ($.group = t[0]), C(() => (i = !1))),
          r.$set($));
        const o = {};
        (4 & s && (o.slim = t[2]),
          512 & s && (o.$$scope = { dirty: s, ctx: t }),
          !l && 1 & s && ((l = !0), (o.group = t[0]), C(() => (l = !1))),
          g.$set(o));
        const c = {};
        (4 & s && (c.slim = t[2]),
          512 & s && (c.$$scope = { dirty: s, ctx: t }),
          !f && 1 & s && ((f = !0), (c.group = t[0]), C(() => (f = !1))),
          m.$set(c));
        const p = {};
        (4 & s && (p.slim = t[2]),
          512 & s && (p.$$scope = { dirty: s, ctx: t }),
          !w && 1 & s && ((w = !0), (p.group = t[0]), C(() => (w = !1))),
          d.$set(p));
        const _hs = {};
        (4 & s && (_hs.slim = t[2]),
          512 & s && (_hs.$$scope = { dirty: s, ctx: t }),
          !q && 1 & s && ((q = !0), (_hs.group = t[0]), C(() => (q = !1))),
          A2.$set(_hs));
      },
      i(t) {
        y ||
          (h(n.$$.fragment, t),
          h(r.$$.fragment, t),
          h(g.$$.fragment, t),
          h(m.$$.fragment, t),
          h(d.$$.fragment, t),
          h(A2.$$.fragment, t),
          (y = !0));
      },
      o(t) {
        (M(n.$$.fragment, t),
          M(r.$$.fragment, t),
          M(g.$$.fragment, t),
          M(m.$$.fragment, t),
          M(d.$$.fragment, t),
          M(A2.$$.fragment, t),
          (y = !1));
      },
      d(t) {
        (t && (a(s), a(o), a(c), a(p), a(Z2)),
          k(n, t),
          k(r, t),
          k(g, t),
          k(m, t),
          k(d, t),
          k(A2, t));
      },
    }
  );
}
function un(t) {
  let n, e, s;
  return (
    (e = new ut({
      props: { center: t[1], $$slots: { default: [pn] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        ((n = i("div")),
          A(e.$$.fragment),
          o(n, "class", "tabs svelte-qxv56r"),
          r(n, "sticky", t[3]));
      },
      m(t, a) {
        ($(t, n, a), x(e, n, null), (s = !0));
      },
      p(t, [a]) {
        const $ = {};
        (2 & a && ($.center = t[1]),
          517 & a && ($.$$scope = { dirty: a, ctx: t }),
          e.$set($),
          (!s || 8 & a) && r(n, "sticky", t[3]));
      },
      i(t) {
        s || (h(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        (M(e.$$.fragment, t), (s = !1));
      },
      d(t) {
        (t && a(n), k(e));
      },
    }
  );
}
function dn(t, n, e) {
  let { group: s } = n,
    { center: a = !1 } = n,
    { slim: r = !1 } = n,
    { sticky: $ = !1 } = n;
  return (
    (t.$$set = (t) => {
      ("group" in t && e(0, (s = t.group)),
        "center" in t && e(1, (a = t.center)),
        "slim" in t && e(2, (r = t.slim)),
        "sticky" in t && e(3, ($ = t.sticky)));
    }),
    [
      s,
      a,
      r,
      $,
      function (t) {
        ((s = t), e(0, s));
      },
      function (t) {
        ((s = t), e(0, s));
      },
      function (t) {
        ((s = t), e(0, s));
      },
      function (t) {
        ((s = t), e(0, s));
      },
      function (t) {
        ((s = t), e(0, s));
      },
      function (t) {
        ((s = t), e(0, s));
      },
    ]
  );
}
class wn extends t {
  constructor(t) {
    (super(),
      n(this, t, dn, un, e, { group: 0, center: 1, slim: 2, sticky: 3 }));
  }
}
function yn(t) {
  let n, e, s, r, g, l, c;
  return (
    (r = new P({ props: { name: D } })),
    {
      c() {
        ((n = i("input")),
          (e = u()),
          (s = i("button")),
          A(r.$$.fragment),
          o(n, "type", "text"),
          o(
            n,
            "placeholder",
            window.tr(window.lang.chart.indicators.search.title),
          ),
          o(n, "class", "svelte-ppeli"),
          o(s, "class", "clear svelte-ppeli"),
          o(s, "title", window.tr(window.lang.chart.indicators.close)));
      },
      m(a, i) {
        ($(a, n, i),
          t[24](n),
          R(n, t[2]),
          $(a, e, i),
          $(a, s, i),
          x(r, s, null),
          (g = !0),
          l ||
            ((c = [
              y(n, "input", t[25]),
              y(n, "input", t[16]),
              y(n, "keydown", t[17]),
              y(n, "keypress", t[18]),
              y(n, "mouseup", t[19]),
              y(n, "mousedown", t[20]),
              y(n, "focus", t[21]),
              y(n, "blur", t[22]),
              y(s, "click", t[13]),
            ]),
            (l = !0)));
      },
      p(t, e) {
        4 & e && n.value !== t[2] && R(n, t[2]);
      },
      i(t) {
        g || (h(r.$$.fragment, t), (g = !0));
      },
      o(t) {
        (M(r.$$.fragment, t), (g = !1));
      },
      d($) {
        ($ && (a(n), a(e), a(s)), t[24](null), k(r), (l = !1), B(c));
      },
    }
  );
}
function Mn(t) {
  let n, e, r, g, l;
  return (
    (e = new P({ props: { name: F } })),
    {
      c() {
        ((n = i("button")),
          A(e.$$.fragment),
          o(n, "class", "icon svelte-ppeli"));
      },
      m(s, a) {
        ($(s, n, a),
          x(e, n, null),
          (r = !0),
          g || ((l = y(n, "click", t[12])), (g = !0)));
      },
      p: s,
      i(t) {
        r || (h(e.$$.fragment, t), (r = !0));
      },
      o(t) {
        (M(e.$$.fragment, t), (r = !1));
      },
      d(t) {
        (t && a(n), k(e), (g = !1), l());
      },
    }
  );
}
function hn(t) {
  let n, e, s;
  return (
    (e = new on({ props: { analysisManager: t[0].analysis, settings: t[3] } })),
    {
      c() {
        ((n = i("div")), A(e.$$.fragment), o(n, "class", "edit svelte-ppeli"));
      },
      m(t, a) {
        ($(t, n, a), x(e, n, null), (s = !0));
      },
      p(t, n) {
        const s = {};
        (1 & n && (s.analysisManager = t[0].analysis),
          8 & n && (s.settings = t[3]),
          e.$set(s));
      },
      i(t) {
        s || (h(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        (M(e.$$.fragment, t), (s = !1));
      },
      d(t) {
        (t && a(n), k(e));
      },
    }
  );
}
function vn(t) {
  let n, e, s, r, g, l, c, m, p, d, w, y, j, O;
  function B(n) {
    t[23](n);
  }
  let R = {};
  (void 0 !== t[1] && (R.group = t[1]),
    (e = new wn({ props: R })),
    T.push(() => I(e, "group", B)));
  const S = [Mn, yn],
    D = [];
  function F(t, n) {
    return t[7] ? 1 : 0;
  }
  ((l = F(t)),
    (c = D[l] = S[l](t)),
    (d = new It({ props: { list: t[4], active: t[5] } })),
    d.$on("select", t[11]));
  let E = t[3] && t[8] && hn(t);
  return (
    (j = new wt({
      props: {
        label: window.tr(window.lang.chart.indicators.btnAddIndicator),
        disabled: !t[5],
      },
    })),
    j.$on("cancel", t[10]),
    j.$on("update", t[9]),
    {
      c() {
        ((n = i("div")),
          A(e.$$.fragment),
          (r = u()),
          (g = i("div")),
          c.c(),
          (m = u()),
          (p = i("div")),
          A(d.$$.fragment),
          (w = u()),
          E && E.c(),
          (y = u()),
          A(j.$$.fragment),
          o(g, "class", "search svelte-ppeli"),
          o(n, "class", "header svelte-ppeli"),
          o(p, "class", "content svelte-ppeli"));
      },
      m(t, s) {
        ($(t, n, s),
          x(e, n, null),
          f(n, r),
          f(n, g),
          D[l].m(g, null),
          $(t, m, s),
          $(t, p, s),
          x(d, p, null),
          f(p, w),
          E && E.m(p, null),
          $(t, y, s),
          x(j, t, s),
          (O = !0));
      },
      p(t, n) {
        const a = {};
        (!s && 2 & n && ((s = !0), (a.group = t[1]), C(() => (s = !1))),
          e.$set(a));
        let r = l;
        ((l = F(t)),
          l === r
            ? D[l].p(t, n)
            : (v(),
              M(D[r], 1, 1, () => {
                D[r] = null;
              }),
              b(),
              (c = D[l]),
              c ? c.p(t, n) : ((c = D[l] = S[l](t)), c.c()),
              h(c, 1),
              c.m(g, null)));
        const $ = {};
        (16 & n && ($.list = t[4]),
          32 & n && ($.active = t[5]),
          d.$set($),
          t[3] && t[8]
            ? E
              ? (E.p(t, n), 264 & n && h(E, 1))
              : ((E = hn(t)), E.c(), h(E, 1), E.m(p, null))
            : E &&
              (v(),
              M(E, 1, 1, () => {
                E = null;
              }),
              b()));
        const i = {};
        (32 & n && (i.disabled = !t[5]), j.$set(i));
      },
      i(t) {
        O ||
          (h(e.$$.fragment, t),
          h(c),
          h(d.$$.fragment, t),
          h(E),
          h(j.$$.fragment, t),
          (O = !0));
      },
      o(t) {
        (M(e.$$.fragment, t),
          M(c),
          M(d.$$.fragment, t),
          M(E),
          M(j.$$.fragment, t),
          (O = !1));
      },
      d(t) {
        (t && (a(n), a(m), a(p), a(y)),
          k(e),
          D[l].d(),
          k(d),
          E && E.d(),
          k(j, t));
      },
    }
  );
}
function bn(t) {
  let n, e;
  return (
    (n = new P({ props: { slot: "close", name: D } })),
    {
      c() {
        A(n.$$.fragment);
      },
      m(t, s) {
        (x(n, t, s), (e = !0));
      },
      p: s,
      i(t) {
        e || (h(n.$$.fragment, t), (e = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), (e = !1));
      },
      d(t) {
        k(n, t);
      },
    }
  );
}
function kn(t) {
  let n, e;
  return (
    (n = new E({
      props: {
        title: window.tr(window.lang.chart.indicators.title),
        draggable: !0,
        $$slots: { close: [bn], default: [vn] },
        $$scope: { ctx: t },
      },
    })),
    n.$on("close", t[10]),
    {
      c() {
        A(n.$$.fragment);
      },
      m(t, s) {
        (x(n, t, s), (e = !0));
      },
      p(t, [e]) {
        const s = {};
        (268435967 & e && (s.$$scope = { dirty: e, ctx: t }), n.$set(s));
      },
      i(t) {
        e || (h(n.$$.fragment, t), (e = !0));
      },
      o(t) {
        (M(n.$$.fragment, t), (e = !1));
      },
      d(t) {
        k(n, t);
      },
    }
  );
}
function xn(t, n, e) {
  let a,
    r = s;
  t.$$.on_destroy.push(() => r());
  const $ = g();
  let i,
    o,
    { chart: l } = n,
    c = 0,
    m = yt.sort((t, n) =>
      ht[t].fullTitle > ht[n].fullTitle
        ? 1
        : ht[t].fullTitle < ht[n].fullTitle
          ? -1
          : 0,
    ),
    f = "",
    p = "",
    u = null,
    d = !1,
    w = null;
  function y() {
    null !== w && (l.analysis.remove(w), e(15, (w = null)));
  }
  return (
    (t.$$set = (t) => {
      "chart" in t && e(0, (l = t.chart));
    }),
    (t.$$.update = () => {
      if (49153 & t.$$.dirty && null !== w) {
        const t = l.analysis.get(w);
        t &&
          (e(14, (i = t)),
          e(3, (o = (null == i ? void 0 : i.settings) ?? null)),
          r(),
          (r = S(o, (t) => e(8, (a = t)))));
      }
      (9 & t.$$.dirty && null !== o && l.refresh(),
        6 & t.$$.dirty &&
          e(
            4,
            (m = yt.filter(
              (t) =>
                (!c || ht[t].category === c) &&
                -1 !== ht[t].fullTitle.toLowerCase().indexOf(p.toLowerCase()),
            )),
          ));
    }),
    [
      l,
      c,
      p,
      o,
      m,
      f,
      u,
      d,
      a,
      function () {
        null !== o && $("add", o);
      },
      function () {
        ($("close"), y());
      },
      function (t) {
        const n = t.detail;
        (y(),
          n === f
            ? e(5, (f = ""))
            : l.analysis.add(n).then((t) => {
                (e(15, (w = t)), e(5, (f = n)));
              }));
      },
      async function () {
        (e(7, (d = !0)), await j(), null == u || u.focus());
      },
      function () {
        (e(2, (p = "")), e(7, (d = !1)));
      },
      i,
      w,
      function (n) {
        O.call(this, t, n);
      },
      function (n) {
        O.call(this, t, n);
      },
      function (n) {
        O.call(this, t, n);
      },
      function (n) {
        O.call(this, t, n);
      },
      function (n) {
        O.call(this, t, n);
      },
      function (n) {
        O.call(this, t, n);
      },
      function (n) {
        O.call(this, t, n);
      },
      function (t) {
        ((c = t), e(1, c));
      },
      function (t) {
        T[t ? "unshift" : "push"](() => {
          ((u = t), e(6, u));
        });
      },
      function () {
        ((p = this.value), e(2, p));
      },
    ]
  );
}
class An extends t {
  constructor(t) {
    (super(), n(this, t, xn, kn, e, { chart: 0 }));
  }
}
export { An as default };
