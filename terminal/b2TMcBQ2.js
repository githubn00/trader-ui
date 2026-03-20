var t,
  s,
  e,
  i,
  a,
  n,
  l,
  h,
  r,
  o,
  c,
  g,
  u,
  d,
  p,
  w,
  y,
  m,
  f,
  A,
  M,
  v,
  b,
  _,
  k,
  x,
  F,
  S,
  W,
  T,
  H,
  j,
  O,
  P,
  I,
  D,
  E,
  G,
  L,
  C,
  V,
  Y,
  R,
  B,
  N,
  X,
  U,
  K,
  q,
  z,
  $,
  J,
  Q,
  Z,
  tt,
  st,
  et,
  it,
  at,
  nt,
  lt,
  ht,
  rt,
  ot,
  ct,
  gt,
  ut,
  dt,
  pt,
  wt,
  yt,
  mt,
  ft,
  At,
  Mt,
  vt,
  bt,
  _t,
  kt,
  xt,
  Ft,
  St,
  Wt,
  Tt,
  Ht,
  jt,
  Ot,
  Pt,
  It,
  Dt,
  Et,
  Gt,
  Lt,
  Ct,
  Vt,
  Yt,
  Rt,
  Bt,
  Nt,
  Xt,
  Ut,
  Kt,
  qt,
  zt,
  $t,
  Jt,
  Qt,
  Zt,
  ts,
  ss,
  es,
  is,
  as,
  ns,
  ls,
  hs,
  rs,
  os,
  cs,
  gs,
  us,
  ds,
  ps,
  ws,
  ys,
  ms,
  fs,
  As = (t) => {
    throw TypeError(t);
  },
  Ms = (t, s, e) => s.has(t) || As("Cannot " + e),
  vs = (t, s, e) => (
    Ms(t, s, "read from private field"),
    e ? e.call(t) : s.get(t)
  ),
  bs = (t, s, e) =>
    s.has(t)
      ? As("Cannot add the same private member more than once")
      : s instanceof WeakSet
        ? s.add(t)
        : s.set(t, e),
  _s = (t, s, e, i) => (
    Ms(t, s, "write to private field"),
    i ? i.call(t, e) : s.set(t, e),
    e
  ),
  ks = (t, s, e) => (Ms(t, s, "access private method"), e);
import { _ as xs } from "./CQSQNu0h.js";
import { b as Fs, B as Ss, a as Ws } from "./Y63yw9rt.js";
import "./CRNNNCwz.js";
import "./CHj1SSsY.js";
import "./C8gngcK2.js";
import {
  u as Ts,
  C as Hs,
  b as js,
  g as Os,
  a as Ps,
  c as Is,
  v as Ds,
  h as Es,
  i as Gs,
  j as Ls,
  k as Cs,
  w as Vs,
  l as Ys,
  d as Rs,
  e as Bs,
  x as Ns,
  m as Xs,
  G as Xs2,
  H as Xs2b,
  n as Us,
  y as Ks,
  D as qs,
  f as zs,
  o as $s,
  E as Js,
  z as Qs,
  p as Zs,
  q as te,
  B as se,
  r as ee,
  A as ie,
  s as ae,
  F as ne,
  t as le,
  ap as ApS,
  ep as EpS,
  xp as XpS,
} from "./Cj-wvwrR.js";
class he extends Fs {
  constructor() {
    (super(...arguments),
      bs(this, s),
      bs(this, t),
      (this.data = []),
      _s(this, t, {}));
  }
  get(s) {
    const e = vs(this, t)[s];
    return this.data[e];
  }
  setVisible(t, s) {
    const e = this.get(t);
    e &&
      ((e.settings.visible = s), e.settings.refresh(), this.trigger("208", t));
  }
  setPeriodMask(t, s) {
    const e = this.get(t);
    e &&
      ((e.settings.mask.period = s),
      e.settings.refresh(),
      this.trigger("208", t));
  }
  up(t) {
    ks(this, s, i).call(this, t, -1);
  }
  down(t) {
    ks(this, s, i).call(this, t, 1);
  }
  async init(t = []) {
    (ks(this, s, a).call(this), (this.inited = !0));
    for (let s = 0; s < t.length; s++) {
      const e = t[s];
      e && (await this.add(e.type, e));
    }
    return Promise.resolve();
  }
  getOptions(t) {
    if (4 & t) {
      const t = this.chart.sections.add();
      return [this.chart.createOptions(t), this.chart.sections.getIndex(t.uid)];
    }
    return [this.chart.createOptions(this.chart.sections.getByIndex(0)), 0];
  }
  async add(t, i) {
    const a = this.chart;
    if (!this.inited) return null;
    let n, l, h, r;
    const o = await xs(() => Promise.resolve().then(() => rn), void 0);
    switch (t) {
      case "alligator":
        (([h, r] = this.getOptions(o.AnalysisAlligatorSettings.flags)),
          (l = new o.AnalysisAlligatorSettings({ ...i, index: r })),
          (n = new o.AnalysisAlligator(h, 5e3, l)));
        break;
      case "ao":
        (([h, r] = this.getOptions(o.AnalysisAOSettings.flags)),
          (l = new o.AnalysisAOSettings({ ...i, index: r })),
          (n = new o.AnalysisAO(h, 5e3, l)));
        break;
      case "awesome":
        (([h, r] = this.getOptions(o.AnalysisAwesomeSettings.flags)),
          (l = new o.AnalysisAwesomeSettings({ ...i, index: r })),
          (n = new o.AnalysisAwesome(h, 5e3, l)));
        break;
      case "fractals":
        (([h, r] = this.getOptions(o.AnalysisFractalsSettings.flags)),
          (l = new o.AnalysisFractalsSettings({ ...i, index: r })),
          (n = new o.AnalysisFractals(h, 5e3, l)));
        break;
      case "alerts":
        (([h, r] = this.getOptions(o.AnalysisAlertsSettings.flags)),
          (l = new o.AnalysisAlertsSettings({ ...i, index: r })),
          (n = new o.AnalysisAlerts(h, 5e3, l)));
        break;
      case "xover":
        (([h, r] = this.getOptions(o.AnalysisXoverSettings.flags)),
          (l = new o.AnalysisXoverSettings({ ...i, index: r })),
          (n = new o.AnalysisXover(h, 5e3, l)));
        break;
      case "engulfing":
        (([h, r] = this.getOptions(o.AnalysisEngulfingPatternsSettings.flags)),
          (l = new o.AnalysisEngulfingPatternsSettings({ ...i, index: r })),
          (n = new o.AnalysisEngulfingPatterns(h, 5e3, l)));
        break;
      case "go":
        (([h, r] = this.getOptions(o.AnalysisGOSettings.flags)),
          (l = new o.AnalysisGOSettings({ ...i, index: r })),
          (n = new o.AnalysisGO(h, 5e3, l)));
        break;
      case "mf":
        (([h, r] = this.getOptions(o.AnalysisMFSettings.flags)),
          (l = new o.AnalysisMFSettings({ ...i, index: r })),
          (n = new o.AnalysisMF(h, 5e3, l)));
        break;
      case "atr":
        (([h, r] = this.getOptions(o.AnalysisATRSettings.flags)),
          (l = new o.AnalysisATRSettings({ ...i, index: r })),
          (n = new o.AnalysisATR(h, 5e3, l)));
        break;
      case "bears":
        (([h, r] = this.getOptions(o.AnalysisBearsSettings.flags)),
          (l = new o.AnalysisBearsSettings({ ...i, index: r })),
          (n = new o.AnalysisBears(h, 5e3, l)));
        break;
      case "bulls":
        (([h, r] = this.getOptions(o.AnalysisBullsSettings.flags)),
          (l = new o.AnalysisBullsSettings({ ...i, index: r })),
          (n = new o.AnalysisBulls(h, 5e3, l)));
        break;
      case "cci":
        (([h, r] = this.getOptions(o.AnalysisCCISettings.flags)),
          (l = new o.AnalysisCCISettings({ ...i, index: r })),
          (n = new o.AnalysisCCI(h, 5e3, l)));
        break;
      case "demarker":
        (([h, r] = this.getOptions(o.AnalysisDeMarkerSettings.flags)),
          (l = new o.AnalysisDeMarkerSettings({ ...i, index: r })),
          (n = new o.AnalysisDeMarker(h, 5e3, l)));
        break;
      case "fi":
        (([h, r] = this.getOptions(o.AnalysisFISettings.flags)),
          (l = new o.AnalysisFISettings({ ...i, index: r })),
          (n = new o.AnalysisFI(h, 5e3, l)));
        break;
      case "macd":
        (([h, r] = this.getOptions(o.AnalysisMACDSettings.flags)),
          (l = new o.AnalysisMACDSettings({ ...i, index: r })),
          (n = new o.AnalysisMACD(h, 5e3, l)));
        break;
      case "macd_":
        (([h, r] = this.getOptions(o.AnalysisMACD_Settings.flags)),
          (l = new o.AnalysisMACD_Settings({ ...i, index: r })),
          (n = new o.AnalysisMACD_(h, 5e3, l)));
        break;
      case "mao":
        (([h, r] = this.getOptions(o.AnalysisMAOSettings.flags)),
          (l = new o.AnalysisMAOSettings({ ...i, index: r })),
          (n = new o.AnalysisMAO(h, 5e3, l)));
        break;
      case "mao_":
        (([h, r] = this.getOptions(o.AnalysisMAO_Settings.flags)),
          (l = new o.AnalysisMAO_Settings({ ...i, index: r })),
          (n = new o.AnalysisMAO_(h, 5e3, l)));
        break;
      case "momentum":
        (([h, r] = this.getOptions(o.AnalysisMomentumSettings.flags)),
          (l = new o.AnalysisMomentumSettings({ ...i, index: r })),
          (n = new o.AnalysisMomentum(h, 5e3, l)));
        break;
      case "rsi":
        (([h, r] = this.getOptions(o.AnalysisRSISettings.flags)),
          (l = new o.AnalysisRSISettings({ ...i, index: r })),
          (n = new o.AnalysisRSI(h, 5e3, l)));
        break;
      case "rvi":
        (([h, r] = this.getOptions(o.AnalysisRVISettings.flags)),
          (l = new o.AnalysisRVISettings({ ...i, index: r })),
          (n = new o.AnalysisRVI(h, 5e3, l)));
        break;
      case "so":
        (([h, r] = this.getOptions(o.AnalysisSOSettings.flags)),
          (l = new o.AnalysisSOSettings({ ...i, index: r })),
          (n = new o.AnalysisSO(h, 5e3, l)));
        break;
      case "tea":
        (([h, r] = this.getOptions(o.AnalysisTEASettings.flags)),
          (l = new o.AnalysisTEASettings({ ...i, index: r })),
          (n = new o.AnalysisTEA(h, 5e3, l)));
        break;
      case "wpr":
        (([h, r] = this.getOptions(o.AnalysisWPRSettings.flags)),
          (l = new o.AnalysisWPRSettings({ ...i, index: r })),
          (n = new o.AnalysisWPR(h, 5e3, l)));
        break;
      case "admi":
        (([h, r] = this.getOptions(o.AnalysisADMISettings.flags)),
          (l = new o.AnalysisADMISettings({ ...i, index: r })),
          (n = new o.AnalysisADMI(h, 5e3, l)));
        break;
      case "bb":
        (([h, r] = this.getOptions(o.AnalysisBBSettings.flags)),
          (l = new o.AnalysisBBSettings({ ...i, index: r })),
          (n = new o.AnalysisBB(h, 5e3, l)));
        break;
      case "envelopes":
        (([h, r] = this.getOptions(o.AnalysisEnvelopesSettings.flags)),
          (l = new o.AnalysisEnvelopesSettings({ ...i, index: r })),
          (n = new o.AnalysisEnvelopes(h, 5e3, l)));
        break;
      case "ikh":
        (([h, r] = this.getOptions(o.AnalysisIKHSettings.flags)),
          (l = new o.AnalysisIKHSettings({ ...i, index: r })),
          (n = new o.AnalysisIKH(h, 5e3, l)));
        break;
      case "ma":
        (([h, r] = this.getOptions(o.AnalysisMASettings.flags)),
          (l = new o.AnalysisMASettings({ ...i, index: r })),
          (n = new o.AnalysisMA(h, 5e3, l)));
        break;
      case "psar":
        (([h, r] = this.getOptions(o.AnalysisPSARSettings.flags)),
          (l = new o.AnalysisPSARSettings({ ...i, index: r })),
          (n = new o.AnalysisPSAR(h, 5e3, l)));
        break;
      case "sd":
        (([h, r] = this.getOptions(o.AnalysisSDSettings.flags)),
          (l = new o.AnalysisSDSettings({ ...i, index: r })),
          (n = new o.AnalysisSD(h, 5e3, l)));
        break;
      case "ad":
        (([h, r] = this.getOptions(o.AnalysisADSettings.flags)),
          (l = new o.AnalysisADSettings({ ...i, index: r })),
          (n = new o.AnalysisAD(h, 5e3, l)));
        break;
      case "mfi":
        (([h, r] = this.getOptions(o.AnalysisMFISettings.flags)),
          (l = new o.AnalysisMFISettings({ ...i, index: r })),
          (n = new o.AnalysisMFI(h, 5e3, l)));
        break;
      case "obv":
        (([h, r] = this.getOptions(o.AnalysisOBVSettings.flags)),
          (l = new o.AnalysisOBVSettings({ ...i, index: r })),
          (n = new o.AnalysisOBV(h, 5e3, l)));
        break;
      case "volumes":
        (([h, r] = this.getOptions(o.AnalysisVolumesSettings.flags)),
          (l = new o.AnalysisVolumesSettings({ ...i, index: r })),
          (n = new o.AnalysisVolumes(h, 5e3, l)));
        break;
      default:
        return null;
    }
    return (
      4 & l.flags &&
        ((h.section.indicator = n),
        "number" == typeof l.digits && h.section.setDigits(l.digits)),
      this.data.push(n),
      a.sections.resize(),
      ks(this, s, e).call(this),
      this.trigger("201", l.uid),
      l.uid
    );
  }
  remove(i) {
    if (!this.inited) return;
    const a = vs(this, t)[i],
      l = this.data[a];
    if (!l) return;
    const h = this.chart,
      r = h.sections.getIndex(l.section.uid);
    (l.destroy(),
      this.data.splice(a, 1),
      ks(this, s, e).call(this),
      r > 0 &&
        !ks(this, s, n).call(this, r) &&
        (h.sections.remove(r), h.objects.removeByParentUid(i)),
      this.trigger("202", i));
  }
  getByType(t) {
    return this.data.filter((s) => s.settings.type === t);
  }
  destroy() {
    (this.data.forEach((t) => t.destroy()), super.destroy());
  }
}
function re(t) {
  switch (t) {
    case 0:
      return "Close";
    case 1:
      return "Open";
    case 2:
      return "High";
    case 3:
      return "Low";
    case 4:
      return "HL/2";
    case 5:
      return "HLC/3";
    case 6:
      return "HLCC/4";
    default:
      return "Unknown";
  }
}
((t = new WeakMap()),
  (s = new WeakSet()),
  (e = function () {
    _s(this, t, {});
    const s = [];
    (this.data.forEach((t) => {
      const e = this.chart.sections.getIndex(t.section.uid);
      t.settings.index !== e &&
        ((t.settings.index = e), s.push(t.settings.uid));
    }),
      this.data.sort((t, s) => t.settings.index - s.settings.index),
      this.data.forEach((s, e) => {
        vs(this, t)[s.settings.uid] = e;
      }),
      s.forEach((t) => this.trigger("208", t)));
  }),
  (i = function (i, a) {
    const n = vs(this, t)[i],
      l = this.data[n];
    if (!l) return;
    const h = this.chart.sections.getIndex(l.section.uid);
    this.chart.sections.move(h, h + a);
    const r = { uid: i, from: n, to: n + a };
    (ks(this, s, e).call(this), this.trigger("203", r));
  }),
  (a = function () {
    this.inited &&
      ((this.data = this.data.filter(
        (t) => !!(8 & t.settings.flags) || (t.destroy(), !1),
      )),
      ks(this, s, e).call(this));
  }),
  (n = function (t) {
    const { chart: s } = this,
      e = s.sections.getByIndex(t);
    return !!e && this.data.find((t) => t.section === e);
  }));
const oe = new Map();
function drawDashSegment(t, x1, y1, x2, y2, dashLen, gapLen, phase) {
  const dx = x2-x1, dy = y2-y1, dist = Math.sqrt(dx*dx+dy*dy);
  if (!dist) return phase;
  const ux = dx/dist, uy = dy/dist, cycle = dashLen+gapLen;
  let pos = 0, phaseCur = phase % cycle;
  while (pos < dist) {
    const inDash = phaseCur < dashLen;
    const segEnd = inDash ? dashLen : cycle;
    const step = Math.min(segEnd - phaseCur, dist - pos);
    const nx = x1+ux*(pos+step), ny = y1+uy*(pos+step);
    inDash ? t.lineTo(nx, ny) : t.moveTo(nx, ny);
    pos += step; phaseCur += step;
    if (phaseCur >= cycle) phaseCur -= cycle;
  }
  return phaseCur;
}
function drawDashedLine(t, pts, lineType) {
  const [dashLen, gapLen] = lineType === 2 ? [2, 4] : [8, 4];
  let phase = 0, prevP = null;
  for (const p of pts) {
    if (!p) { prevP = null; phase = 0; continue; }
    if (prevP) phase = drawDashSegment(t, prevP[0], prevP[1], p[0], p[1], dashLen, gapLen, phase);
    else t.moveTo(p[0], p[1]);
    prevP = p;
  }
}
class ce extends Ss {
  constructor(t, s = 5e3, e) {
    (super(t, s, e),
      bs(this, l),
      (this._yMin = 0),
      (this._yMax = 0),
      (this.section = t.section));
  }
  get yMin() {
    return this._yMin;
  }
  get yMax() {
    return this._yMax;
  }
  title() {
    return `${this.settings.title || "Unknown"} (${this._titleArguments().join(", ")})`;
  }
  isCollapsed() {
    return !(this.settings.visible && this.isDrawingAllowed());
  }
  _titleArguments() {
    const { params: t } = this.settings;
    return [t.distance, re(t.apply)];
  }
  isDrawingAllowed() {
    let t = super.isDrawingAllowed();
    if (t) {
      const { params: s } = this.settings;
      if (void 0 !== s.distance && s.distance < 1) return !1;
      t = !0;
    }
    return t;
  }
  _calcExtremum(...t) {
    let s = t;
    (s && s.length) || !this.data || (s = [this.data]);
    const { state: e } = this.chart,
      i = e.getFrom(),
      a = Math.max(0, i),
      n = Math.max(0, i + e.getCount() + 1);
    let l = Number.MAX_SAFE_INTEGER,
      h = Number.MIN_SAFE_INTEGER;
    (s.forEach((t) => {
      for (let s = a; s <= n; s++) {
        const e = t[s];
        null != e && ((l = Math.min(l, e)), (h = Math.max(h, e)));
      }
    }),
      (this._yMin = l),
      (this._yMax = h));
  }
  _getPrices(t) {
    const { params: s } = this.settings,
      e = this.chart.bars,
      i = this.baseHash();
    let a = oe.get(i);
    if (a) {
      if (t) {
        const t = a.length - 1;
        a[t] = ge(e, t, s.apply);
      }
    } else
      ((a = (function (t, s) {
        const e = new Float64Array(t.length);
        for (let i = 0, a = t.length; i < a; i++) e[i] = ge(t, i, s);
        return e;
      })(e, s.apply)),
        oe.set(i, a),
        vs(this, l) && oe.delete(vs(this, l)),
        _s(this, l, i));
    return a;
  }
  _getPrice(t) {
    const s = this.chart.bars,
      { apply: e } = this.settings.params;
    return ge(s, t, e);
  }
  baseHash() {
    const { settings: t } = this,
      s = this.chart.bars,
      { params: e } = t;
    return [
      t.type,
      s.symbol,
      s.period,
      e.apply,
      s.length,
      Ws(s.time(0), s.period),
      Ws(s.time(s.length - 1), s.period),
    ].join("-");
  }
  drawLine(t, s, e, i = 0) {
    const { state: a } = this.chart,
      n = a.getFrom();
    let l = a.startX(),
      h = !1;
    t.lineStyle(e.thickness, e.color);
    const lineType = e.lineType || 0;
    if (lineType === 0) {
      for (let r = n, o = n + a.getCount() + 1 + i; r < o; r++) {
        if (r >= 0) {
          const e = s[r - i];
          if (e) {
            const s = this.valueToY(e);
            h ? t.lineTo(l, s) : (t.moveTo(l, s), (h = !0));
          } else h = !1;
        }
        l += a.getStep();
      }
    } else {
      const pts = [];
      for (let r = n, o = n + a.getCount() + 1 + i; r < o; r++) {
        if (r >= 0) {
          const v = s[r - i];
          pts.push(v ? [l, this.valueToY(v)] : null);
        }
        l += a.getStep();
      }
      drawDashedLine(t, pts, lineType);
    }
  }
  drawHistogram(t, s, e) {
    const { state: i } = this.chart,
      a = i.getFrom();
    let n = i.startX();
    const l = Math.max(1, Math.floor(e.thickness)),
      h = -Math.ceil(0.5 * l);
    t.beginFill(e.color);
    for (let r = a, o = a + i.getCount() + 1; r < o; r++) {
      if (r >= 0) {
        const e = s[r];
        if (e) {
          const s = this.valueToY(e),
            i = this.valueToY(0);
          t.drawRect(
            Math.ceil(n + h),
            Math.min(s, i),
            l,
            Math.max(s, i) - Math.min(s, i),
          );
        }
      }
      n += i.getStep();
    }
    t.endFill();
  }
  _drawValueLine(t, s, e) {
    const { section: i, container: a, settings: n } = this,
      l = this.valueToY(s);
    if (l > 0 && l < i.height) {
      const { color: h } = e,
        r = this.createPriceLine(t, h, this.chart.invert(h, !0), h);
      ((r.y = i.y + l), a.addChild(r), this.updatePriceLine(t, s, n.digits));
    }
  }
}
function ge(t, s, e) {
  const i = t.open(s),
    a = t.high(s),
    n = t.low(s),
    l = t.close(s);
  switch (e) {
    case 1:
      return i;
    case 2:
      return a;
    case 3:
      return n;
    case 0:
      return l;
    case 4:
      return (a + n) / 2;
    case 5:
      return (a + n + l) / 3;
    case 6:
      return (a + n + l + l) / 4;
    default:
      return 0;
  }
}
function ue(t, s, e, i, a = !1) {
  if (!s || e < 1) return null;
  if (s.length < e && 1 !== i) return null;
  switch (i) {
    case 0:
      return (function (t, s, e, i = !1) {
        const a = t.length;
        let n = 0,
          l = e - 1;
        i && (l = a - e - 1);
        const h = l - (e - 1);
        for (let r = h; r <= l; r++) n += s[r] || 0;
        t[l] = n / e;
        for (let r = l + 1, o = h; r < a; r++, o++)
          ((n -= s[o] || 0), (n += s[r] || 0), (t[r] = n / e));
        return t;
      })(t, s, e, a);
    case 1:
      return (function (t, s, e, i = !1) {
        const a = 2 / (e + 1);
        let n = 1;
        (i && (n = t.length - e - 1), 1 === n && (t[0] = s[0]));
        for (let l = n, h = t.length; l < h; l++)
          t[l] = s[l] * a + t[l - 1] * (1 - a);
        return t;
      })(t, s, e, a);
    case 2:
      return (function (t, s, e, i = !1) {
        let a = 0,
          n = e - 1;
        i && (n = t.length - e - 1);
        for (let l = n, h = t.length; l < h; l++) {
          if (l === e - 1) {
            a = 0;
            for (let t = l + 1 - e; t <= l; t++) a += s[t];
          } else a = (t[l - 1] || 0) * (e - 1) + s[l];
          t[l] = a / e;
        }
        return t;
      })(t, s, e, a);
    case 3:
      return (function (t, s, e, i = !1) {
        let a = 0,
          n = 0,
          l = 0,
          h = e - 1;
        i && (h = t.length - e - 1);
        const r = h - (e - 1);
        for (let o = r, c = 1; o <= h; o++, c++) {
          const t = s[o];
          ((a += t * c), (n += t), (l += c));
        }
        t[h] = a / l;
        for (let o = h + 1, c = r, g = t.length; o < g; o++, c++) {
          const i = s[o];
          ((a = a - n + i * e), (n -= s[c]), (n += i), (t[o] = a / l));
        }
        return t;
      })(t, s, e, a);
    default:
      return null;
  }
}
l = new WeakMap();
const de = new Map(),
  pe = new Map(),
  we = new Map();
class ye extends ce {
  constructor() {
    (super(...arguments),
      bs(this, g),
      bs(this, h),
      bs(this, r),
      bs(this, o),
      bs(this, c));
  }
  get yMin() {
    return this.chart.state.extrema[0] / this.getYDigits();
  }
  get yMax() {
    return this.chart.state.extrema[1] / this.getYDigits();
  }
  _titleArguments() {
    const { params: t } = this.settings;
    return [t.jaws.distance, t.teeth.distance, t.lips.distance, re(t.apply)];
  }
  value(t) {
    const { style: s } = this.settings,
      e = this.chart.digits;
    return ["jaws", "teeth", "lips"]
      .map((i) =>
        "jaws" === i && vs(this, h) && "number" == typeof vs(this, h)[t]
          ? { value: vs(this, h)[t].toFixed(e), color: s.jaws.color }
          : "teeth" === i && vs(this, r) && "number" == typeof vs(this, r)[t]
            ? { value: vs(this, r)[t].toFixed(e), color: s.teeth.color }
            : "lips" === i && vs(this, o) && "number" == typeof vs(this, o)[t]
              ? { value: vs(this, o)[t].toFixed(e), color: s.lips.color }
              : void 0,
      )
      .filter(Boolean);
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = ks(this, g, u).call(this);
    let i = de.get(e),
      a = pe.get(e),
      n = we.get(e);
    if (i && a && n) {
      if (t) {
        const e = this._getPrices(t);
        (ue(i, e, s.jaws.distance, s.method, !0),
          ue(a, e, s.teeth.distance, s.method, !0),
          ue(n, e, s.lips.distance, s.method, !0));
      }
    } else {
      const t = this._getPrices();
      ((i = new Float64Array(t.length)),
        (a = new Float64Array(t.length)),
        (n = new Float64Array(t.length)),
        ue(i, t, s.jaws.distance, s.method),
        ue(a, t, s.teeth.distance, s.method),
        ue(n, t, s.lips.distance, s.method),
        de.set(e, i),
        pe.set(e, a),
        we.set(e, n));
      const l = vs(this, c);
      (l && (de.delete(l), pe.delete(l), we.delete(l)), _s(this, c, e));
    }
    (_s(this, h, i), _s(this, r, a), _s(this, o, n));
  }
  _drawGraph(t) {
    const { settings: s } = this,
      { style: e, params: i } = s;
    (vs(this, h) &&
      e.jaws.visible &&
      this.drawLine(t, vs(this, h), e.jaws, i.jaws.shift),
      vs(this, r) &&
        e.teeth.visible &&
        this.drawLine(t, vs(this, r), e.teeth, i.teeth.shift),
      vs(this, o) &&
        e.lips.visible &&
        this.drawLine(t, vs(this, o), e.lips, i.lips.shift));
  }
}
((h = new WeakMap()),
  (r = new WeakMap()),
  (o = new WeakMap()),
  (c = new WeakMap()),
  (g = new WeakSet()),
  (u = function () {
    const { params: t } = this.settings;
    return [
      t.jaws.distance,
      t.jaws.shift,
      t.teeth.distance,
      t.teeth.shift,
      t.lips.distance,
      t.lips.shift,
      t.method,
      this.baseHash(),
    ].join("-");
  }));
const me = new Map(),
  fe = new Map(),
  Ae = new Map(),
  Me = new Map();
class ve extends ce {
  constructor() {
    (super(...arguments), bs(this, d), bs(this, p), bs(this, w));
  }
  title() {
    return this.settings.title;
  }
  value(t) {
    const { settings: s } = this,
      { style: e, digits: i } = s,
      a = [];
    if (vs(this, d)) {
      const s = vs(this, d)[t];
      if (s) {
        const { color: t } = e.up;
        return (a.push({ value: s.toFixed(i), color: t }), a);
      }
    }
    if (vs(this, p)) {
      const s = vs(this, p)[t];
      if (s) {
        const { color: t } = e.down;
        return (a.push({ value: s.toFixed(i), color: t }), a);
      }
    }
    return a;
  }
  _calc(t) {
    super._calc();
    const s = this.baseHash();
    let e = me.get(s),
      i = fe.get(s),
      a = Ae.get(s),
      n = Me.get(s);
    if (e && i && a && n) t && be(e, i, a, n, this._getPrices(t), !0);
    else {
      const t = this._getPrices();
      ((e = new Float64Array(t.length)),
        (i = new Float64Array(t.length)),
        (a = new Float64Array(t.length)),
        (n = new Float64Array(t.length)),
        be(e, i, a, n, t),
        me.set(s, e),
        fe.set(s, i),
        Ae.set(s, a),
        Me.set(s, n),
        vs(this, w) &&
          (me.delete(vs(this, w)),
          fe.delete(vs(this, w)),
          Ae.delete(vs(this, w)),
          Me.delete(vs(this, w))),
        _s(this, w, s));
    }
    (_s(this, d, e), _s(this, p, i), this._calcExtremum(e, i));
  }
  _drawGraph(t) {
    const { settings: s } = this,
      { style: e } = s;
    (vs(this, d) && this.drawHistogram(t, vs(this, d), e.up),
      vs(this, p) && this.drawHistogram(t, vs(this, p), e.down));
  }
}
function be(t, s, e, i, a, n = !1) {
  (ue(e, a, 34, 0, n), ue(i, a, 5, 0, n));
  let l = 37,
    h = e.length;
  n && (l = h - 38);
  const r = new Float64Array(a.length),
    o = new Float64Array(a.length);
  for (; l < h; ) ((r[l] = i[l] - (e[l] || 0)), (l += 1));
  (ue(o, r, 5, 0, n), (l = 38), (h = e.length));
  let c = 0;
  for (n && ((l = h - 2), (c = t[l - 1] || s[l - 1] || 0)); l < h; ) {
    const e = r[l] - (o[l] || 0);
    (e > c ? ((t[l] = e), (s[l] = 0)) : ((s[l] = e), (t[l] = 0)),
      (c = e),
      (l += 1));
  }
}
((d = new WeakMap()), (p = new WeakMap()), (w = new WeakMap()));
const _e = new Map(),
  ke = new Map(),
  xe = new Map(),
  Fe = new Map();
class Se extends ce {
  constructor() {
    (super(...arguments), bs(this, y), bs(this, m), bs(this, f));
  }
  title() {
    return this.settings.title;
  }
  value(t) {
    const { settings: s } = this,
      { style: e, digits: i } = s,
      a = [];
    if (vs(this, y)) {
      const s = vs(this, y)[t];
      if (s) {
        const { color: t } = e.up;
        a.push({ value: s.toFixed(i), color: t });
      }
    }
    if (vs(this, m)) {
      const s = vs(this, m)[t];
      if (s) {
        const { color: t } = e.down;
        a.push({ value: s.toFixed(i), color: t });
      }
    }
    return a;
  }
  _calc(t) {
    super._calc();
    const s = this.baseHash();
    let e = _e.get(s),
      i = ke.get(s),
      a = xe.get(s),
      n = Fe.get(s);
    if (e && i && a && n) t && We(e, i, a, n, this._getPrices(t), !0);
    else {
      const t = this._getPrices();
      ((e = new Float64Array(t.length)),
        (i = new Float64Array(t.length)),
        (a = new Float64Array(t.length)),
        (n = new Float64Array(t.length)),
        We(e, i, a, n, t),
        _e.set(s, e),
        ke.set(s, i),
        xe.set(s, a),
        Fe.set(s, n),
        vs(this, f) &&
          (_e.delete(vs(this, f)),
          ke.delete(vs(this, f)),
          xe.delete(vs(this, f)),
          Fe.delete(vs(this, f))),
        _s(this, f, s));
    }
    (_s(this, y, e), _s(this, m, i), this._calcExtremum(e, i));
  }
  _drawGraph(t) {
    const { settings: s } = this,
      { style: e } = s;
    (vs(this, y) && this.drawHistogram(t, vs(this, y), e.up),
      vs(this, m) && this.drawHistogram(t, vs(this, m), e.down));
  }
}
function We(t, s, e, i, a, n = !1) {
  (ue(e, a, 34, 0, n), ue(i, a, 5, 0, n));
  let l = 33;
  const h = e.length;
  let r = 0;
  for (n && ((l = h - 34), (r = t[l - 1] || s[l - 1] || 0)); l < h; ) {
    const a = i[l] - e[l] || 0;
    (a > r ? (t[l] = a) : (s[l] = a), (r = a), (l += 1));
  }
}
((y = new WeakMap()), (m = new WeakMap()), (f = new WeakMap()));
const Te = new Map(),
  He = new Map();
class je extends ce {
  constructor() {
    (super(...arguments), bs(this, b), bs(this, A), bs(this, M), bs(this, v));
  }
  get yMin() {
    return this.chart.state.extrema[0] / this.getYDigits();
  }
  get yMax() {
    return this.chart.state.extrema[1] / this.getYDigits();
  }
  _titleArguments() {
    const { params: t } = this.settings;
    return [(t && t.left) || 2, (t && t.right) || 2];
  }
  _calc(t) {
    super._calc();
    const s = this.chart.bars,
      { params: p2 } = this.settings,
      left = (p2 && p2.left) || 2,
      right = (p2 && p2.right) || 2,
      e = [this.baseHash(), left, right].join("-");
    let i = Te.get(e),
      a = He.get(e);
    if (i && a) t && Oe(i, a, s, left, right, !0);
    else {
      ((i = new Float64Array(s.length)),
        (a = new Float64Array(s.length)),
        Oe(i, a, s, left, right),
        Te.set(e, i),
        He.set(e, a));
      const t = vs(this, v);
      (t && (Te.delete(t), He.delete(t)), _s(this, v, e));
    }
    (_s(this, A, i), _s(this, M, a));
  }
  _drawGraph(t) {
    const { settings: s, chart: e } = this,
      { state: i } = e,
      { line: a } = s.style;
    let n = i.startX();
    const l = i.getFrom();
    for (let h = l, r = l + i.getCount() + 1; h < r; h++) {
      if (h >= 0) {
        let s = vs(this, A) && vs(this, A)[h];
        (s && ks(this, b, _).call(this, t, n, this.valueToY(s), a),
          (s = vs(this, M) && vs(this, M)[h]),
          s && ks(this, b, k).call(this, t, n, this.valueToY(s), a));
      }
      n += i.getStep();
    }
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
}
function Oe(t, s, e, left, right, i = !1) {
  const start = i ? Math.max(left, e.length - right - 1) : left;
  for (let n = start, l = e.length - right; n < l; n++) {
    let hUp = true, lDn = true;
    for (let r = 1; r <= right && hUp; r++) { if (e.high(n) <= e.high(n + r)) hUp = false; }
    for (let r = 1; r <= right && lDn; r++) { if (e.low(n) >= e.low(n + r)) lDn = false; }
    for (let r = 1; r <= left && hUp; r++) { if (e.high(n) < e.high(n - r)) hUp = false; }
    for (let r = 1; r <= left && lDn; r++) { if (e.low(n) > e.low(n - r)) lDn = false; }
    if (hUp) t[n] = e.high(n);
    if (lDn) s[n] = e.low(n);
  }
}
((A = new WeakMap()),
  (M = new WeakMap()),
  (v = new WeakMap()),
  (b = new WeakSet()),
  (_ = function (t, s, e, i) {
    const a = 5 + 2 * i.thickness,
      n = e - a;
    (t.lineStyle(1, i.color),
      t.moveTo(s, n),
      t.lineTo(s, n - a),
      t.lineTo(s + a * Math.sin(Math.PI / 3), n + a * Math.cos(Math.PI / 3)),
      t.lineTo(s, n),
      t.beginFill(i.color),
      t.moveTo(s, n),
      t.lineTo(s, n - a),
      t.lineTo(s - a * Math.sin(Math.PI / 3), n + a * Math.cos(Math.PI / 3)),
      t.endFill());
  }),
  (k = function (t, s, e, i) {
    const a = 5 + 2 * i.thickness,
      n = e + a;
    (t.lineStyle(1, i.color),
      t.moveTo(s, n),
      t.lineTo(s, n + a),
      t.lineTo(s - a * Math.sin(Math.PI / 3), n - a * Math.cos(Math.PI / 3)),
      t.lineTo(s, n),
      t.beginFill(i.color),
      t.moveTo(s, n),
      t.lineTo(s, n + a),
      t.lineTo(s + a * Math.sin(Math.PI / 3), n - a * Math.cos(Math.PI / 3)),
      t.endFill());
  }));
const engulfBullMap = new Map(),
  engulfBearMap = new Map(),
  alertsBullMap = new Map(),
  alertsBearMap = new Map(),
  alertsSlopeMap = new Map(),
  alertsBreakoutMap = new Map();

function alertsEma(prices, period) {
  const ema = new Float64Array(prices.length);
  const k = 2 / (period + 1);
  let e = prices[0];
  ema[0] = e;
  for (let i = 1; i < prices.length; i++) {
    e = prices[i] * k + e * (1 - k);
    ema[i] = e;
  }
  return ema;
}

function alertsSma(prices, period) {
  const sma = new Float64Array(prices.length);
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
    if (i >= period - 1) {
      sma[i] = sum / period;
      if (i >= period) sum -= prices[i - period + 1];
    }
  }
  return sma;
}

function alertsMa(bars, period, maType) {
  if (!bars || bars.length === 0) return null;
  const closes = new Float64Array(bars.length);
  for (let i = 0; i < bars.length; i++) closes[i] = bars.close(i);
  return maType === 1 ? alertsSma(closes, period) : alertsEma(closes, period);
}

function alertsCalc(bull, bear, slope, breakout, bars, ma, params, update, fracHi, fracLo) {
  const usePrice = params && params.usePrice ? params.usePrice : 1;
  const useMaCross = params && params.useMaCross ? params.useMaCross : 1;
  const useMaSlope = params && params.useMaSlope ? params.useMaSlope : 1;
  const useBreakout = params && params.useBreakout ? params.useBreakout : 1;
  const maSlopeN = (params && params.maSlope) || 20;
  const breakoutPercent = (params && params.breakoutPercent) || 2;
  const useFractals = params && params.useFractals ? 1 : 0;
  const fracLookback = 10;

  const start = update ? Math.max(1, bars.length - 10) : 1;

  for (let i = start; i < bars.length; i++) {
    bull[i] = 0; bear[i] = 0; slope[i] = 0; breakout[i] = 0;

    const close = bars.close(i), high = bars.high(i), low = bars.low(i), open = bars.open(i);
    if (!close || !high || !low) continue;

    // Price Action Pattern (5-bar range breakout)
    if (usePrice && i >= 5) {
      let maxHigh = high, minLow = low;
      for (let j = i - 5; j < i; j++) {
        maxHigh = Math.max(maxHigh, bars.high(j));
        minLow = Math.min(minLow, bars.low(j));
      }
      if (close > maxHigh) bull[i] = low;
      if (close < minLow) bear[i] = high;
    }

    // MA Crossovers
    if (useMaCross && ma && i > 0) {
      const prevClose = bars.close(i - 1);
      if (prevClose && ma[i - 1]) {
        if (prevClose <= ma[i - 1] && close > ma[i]) bull[i] = low;
        if (prevClose >= ma[i - 1] && close < ma[i]) bear[i] = high;
      }
    }

    // MA Slope Changes
    if (useMaSlope && ma && i >= maSlopeN && (i - 1 - maSlopeN) >= 0) {
      const slopeNow = ma[i] - ma[i - maSlopeN];
      const slopePrev = ma[i - 1] - ma[i - 1 - maSlopeN];
      if (slopePrev <= 0 && slopeNow > 0) {
        slope[i] = (high + low) / 2;
      } else if (slopePrev >= 0 && slopeNow < 0) {
        slope[i] = (high + low) / 2;
      }
    }

    // Breakout (rapid price move)
    if (useBreakout && i > 0) {
      const prevClose = bars.close(i - 1);
      if (prevClose) {
        const pctChange = ((close - prevClose) / prevClose) * 100;
        if (Math.abs(pctChange) > breakoutPercent) {
          breakout[i] = (high + low) / 2;
        }
      }
    }

    // Fractal confirmation filter: suppress bull/bear signals without nearby fractal support/resistance
    if (useFractals && fracHi && fracLo) {
      if (bull[i]) {
        let confirmed = false;
        for (let f = Math.max(0, i - fracLookback); f <= i; f++) {
          if (fracLo[f]) { confirmed = true; break; }
        }
        if (!confirmed) bull[i] = 0;
      }
      if (bear[i]) {
        let confirmed = false;
        for (let f = Math.max(0, i - fracLookback); f <= i; f++) {
          if (fracHi[f]) { confirmed = true; break; }
        }
        if (!confirmed) bear[i] = 0;
      }
    }
  }
}

function alertsDrawUp(t, s, e, i) {
  const a = 5 + 2 * (i.thickness || 1), n = e - a;
  t.lineStyle(1, i.color);
  t.beginFill(i.color);
  t.moveTo(s, n);
  t.lineTo(s + a, n + a);
  t.lineTo(s - a, n + a);
  t.lineTo(s, n);
  t.endFill();
}

function alertsDrawDn(t, s, e, i) {
  const a = 5 + 2 * (i.thickness || 1), n = e + a;
  t.lineStyle(1, i.color);
  t.beginFill(i.color);
  t.moveTo(s, n);
  t.lineTo(s + a, n - a);
  t.lineTo(s - a, n - a);
  t.lineTo(s, n);
  t.endFill();
}

function alertsDrawCircle(t, s, e, i) {
  const r = 3 + (i.thickness || 1);
  t.lineStyle(i.thickness || 1, i.color);
  t.drawCircle(s, e, r);
}

function alertsDrawSquare(t, s, e, i) {
  const sz = 4 + 2 * (i.thickness || 1);
  t.lineStyle(1, i.color);
  t.beginFill(i.color);
  t.drawRect(s - sz / 2, e - sz / 2, sz, sz);
  t.endFill();
}

function engulfEma(prices, period) {
  const out = new Float64Array(prices.length), k = 2 / (period + 1);
  for (let i = 0; i < prices.length; i++)
    out[i] = i === 0 ? prices[i] : prices[i] * k + out[i - 1] * (1 - k);
  return out;
}
function engulfSma(prices, period) {
  const out = new Float64Array(prices.length);
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
    if (i >= period) sum -= prices[i - period];
    out[i] = sum / Math.min(i + 1, period);
  }
  return out;
}
function engulfMa(bars, period, maType) {
  const prices = new Float64Array(bars.length);
  for (let i = 0; i < bars.length; i++) prices[i] = bars.close(i);
  return maType === 1 ? engulfSma(prices, period) : engulfEma(prices, period);
}
function engulfCalc(bull, bear, bars, ma, update) {
  const start = update ? Math.max(1, bars.length - 1) : 1;
  for (let i = start; i < bars.length; i++) {
    bull[i] = 0; bear[i] = 0;
    const curOpen = bars.open(i), curClose = bars.close(i);
    const prevOpen = bars.open(i - 1), prevClose = bars.close(i - 1);
    if (curClose > curOpen && prevClose < prevOpen && curOpen <= prevClose && curClose >= prevOpen)
      if (!ma || curClose > ma[i]) bull[i] = bars.low(i);
    if (curClose < curOpen && prevClose > prevOpen && curOpen >= prevClose && curClose <= prevOpen)
      if (!ma || curClose < ma[i]) bear[i] = bars.high(i);
  }
}
function engulfDrawUp(t, s, e, i) {
  const a = 5 + 2 * i.thickness, n = e - a;
  (t.lineStyle(1, i.color),
    t.moveTo(s, n), t.lineTo(s, n - a),
    t.lineTo(s + a * Math.sin(Math.PI / 3), n + a * Math.cos(Math.PI / 3)),
    t.lineTo(s, n), t.beginFill(i.color),
    t.moveTo(s, n), t.lineTo(s, n - a),
    t.lineTo(s - a * Math.sin(Math.PI / 3), n + a * Math.cos(Math.PI / 3)),
    t.endFill());
}
function engulfDrawDn(t, s, e, i) {
  const a = 5 + 2 * i.thickness, n = e + a;
  (t.lineStyle(1, i.color),
    t.moveTo(s, n), t.lineTo(s, n + a),
    t.lineTo(s - a * Math.sin(Math.PI / 3), n - a * Math.cos(Math.PI / 3)),
    t.lineTo(s, n), t.beginFill(i.color),
    t.moveTo(s, n), t.lineTo(s, n + a),
    t.lineTo(s + a * Math.sin(Math.PI / 3), n - a * Math.cos(Math.PI / 3)),
    t.endFill());
}
class Ae2 extends ce {
  get yMin() { return this.chart.state.extrema[0] / this.getYDigits(); }
  get yMax() { return this.chart.state.extrema[1] / this.getYDigits(); }
  _titleArguments() { return []; }
  title() {
    const p2 = this.settings.params;
    const mp = (p2 && p2.maPeriod != null) ? p2.maPeriod : 50;
    const mt = (p2 && p2.maType) || 0;
    const base = this.settings.title || "Price & MA Alerts";
    return mp > 0 ? base + " (" + mp + (mt === 1 ? " SMA" : " EMA") + ")" : base;
  }
  _calc(t) {
    super._calc();
    const s = this.chart.bars;
    if (!s || s.length === 0) return;
    const p2 = this.settings.params;
    const maPeriod = (p2 && p2.maPeriod != null) ? p2.maPeriod : 50;
    const maType = (p2 && p2.maType) || 0;
    const useFrac = p2 && p2.useFractals ? 1 : 0;
    const fLeft = (p2 && p2.fractalLeft) || 5;
    const fRight = (p2 && p2.fractalRight) || 5;
    const e = [this.baseHash(), maPeriod, maType, useFrac, fLeft, fRight].join("-");
    let bull = alertsBullMap.get(e), bear = alertsBearMap.get(e);
    let sl = alertsSlopeMap.get(e), br = alertsBreakoutMap.get(e);
    const ma = maPeriod > 0 ? alertsMa(s, maPeriod, maType) : null;
    let fracHi = null, fracLo = null;
    if (useFrac) {
      fracHi = new Float64Array(s.length);
      fracLo = new Float64Array(s.length);
      Oe(fracHi, fracLo, s, fLeft, fRight, !!t);
    }
    if (bull && bear && sl && br) {
      if (t) alertsCalc(bull, bear, sl, br, s, ma, p2, true, fracHi, fracLo);
    } else {
      (bull = new Float64Array(s.length)),
        (bear = new Float64Array(s.length)),
        (sl = new Float64Array(s.length)),
        (br = new Float64Array(s.length)),
        alertsCalc(bull, bear, sl, br, s, ma, p2, false, fracHi, fracLo),
        alertsBullMap.set(e, bull),
        alertsBearMap.set(e, bear),
        alertsSlopeMap.set(e, sl),
        alertsBreakoutMap.set(e, br);
    }
    (this._aBull = bull), (this._aBear = bear), (this._aSlope = sl), (this._aBreakout = br);
  }
  _drawGraph(t) {
    const { settings: s, chart: e } = this, { state: i } = e;
    const { bullish: a, bearish: n, maSlope: l, breakout: r } = s.style;
    const showLabels = s.params && s.params.showLabels;
    let o = i.startX();
    const c = i.getFrom();
    for (let g = c, u = c + i.getCount() + 1; g < u; g++) {
      if (g >= 0) {
        let p = this._aBull && this._aBull[g];
        if (p) {
          const y = this.valueToY(p);
          alertsDrawUp(t, o, y, a);
          if (showLabels) { const tx = this.createText("Bull"); tx.tint = a.color; tx.x = o + 6; tx.y = y - 14; t.addChild(tx); }
        }
        p = this._aBear && this._aBear[g];
        if (p) {
          const y = this.valueToY(p);
          alertsDrawDn(t, o, y, n);
          if (showLabels) { const tx = this.createText("Bear"); tx.tint = n.color; tx.x = o + 6; tx.y = y + 2; t.addChild(tx); }
        }
        p = this._aSlope && this._aSlope[g];
        if (p) {
          const y = this.valueToY(p);
          alertsDrawCircle(t, o, y, l);
          if (showLabels) { const tx = this.createText("Slope"); tx.tint = l.color; tx.x = o + 6; tx.y = y - 8; t.addChild(tx); }
        }
        p = this._aBreakout && this._aBreakout[g];
        if (p) {
          const y = this.valueToY(p);
          alertsDrawSquare(t, o, y, r);
          if (showLabels) { const tx = this.createText("Brk"); tx.tint = r.color; tx.x = o + 6; tx.y = y - 8; t.addChild(tx); }
        }
      }
      o += i.getStep();
    }
  }
  value(t) { return []; }
}


// ── xover helpers ──────────────────────────────────────────────────────────
function xoverMa(prices, period, type) {
  return type === 1 ? alertsSma(prices, period) : alertsEma(prices, period);
}
const _notifyCooldown = new Map();
function fireNotification(title, body) {
  const key = title + '|' + body;
  if (_notifyCooldown.has(key)) return;
  _notifyCooldown.set(key, 1);
  setTimeout(() => _notifyCooldown.delete(key), 60000);
  if (typeof Notification === 'undefined') return;
  if (Notification.permission === 'granted') {
    new Notification(title, { body });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(p => { if (p === 'granted') new Notification(title, { body }); });
  }
}
const xoverCacheMap = new Map();
let _xoverPrevKey;
// ── Xe2 class ───────────────────────────────────────────────────────────────
class Xe2 extends ce {
  constructor() { super(...arguments); this._prevInZone = false; this._barsToX = null; }
  get yMin() { return this.chart.state.extrema[0] / this.getYDigits(); }
  get yMax() { return this.chart.state.extrema[1] / this.getYDigits(); }
  _titleArguments() { return []; }
  title() {
    const p = this.settings.params;
    const f = p.fastPeriod || 12, s = p.slowPeriod || 26;
    const ft = p.fastType ? 'SMA' : 'EMA', st = p.slowType ? 'SMA' : 'EMA';
    return 'MA Crossover Forecast (' + ft + f + '/' + st + s + ')';
  }
  _hash() {
    const { params: p } = this.settings;
    return [p.fastPeriod, p.fastType, p.slowPeriod, p.slowType, p.sameTimeframe, p.sourceTimeframe, this.baseHash()].join('-');
  }
  _calc(update) {
    super._calc();
    const bars = this.chart.bars;
    if (!bars || bars.length === 0) return;
    const p = this.settings.params;
    const hash = this._hash();
    let cached = xoverCacheMap.get(hash);
    let fastArr, slowArr;
    if (cached) {
      fastArr = cached.fast; slowArr = cached.slow;
    } else {
      const len = bars.length;
      const tfMs = (!p.sameTimeframe && p.sourceTimeframe) ? Ni2(p.sourceTimeframe) * 60000 : 0;
      if (tfMs) {
        const htCl = [], htBarMap = new Int32Array(len);
        let cs = -1, htIdx = -1;
        for (let j = 0; j < len; j++) {
          const bc = Math.floor(bars.time(j) / tfMs) * tfMs;
          if (bc !== cs) { cs = bc; htIdx++; htCl.push(bars.close(j)); }
          else { htCl[htIdx] = bars.close(j); }
          htBarMap[j] = htIdx;
        }
        const htLen = htCl.length;
        const htP = new Float64Array(htLen);
        for (let j = 0; j < htLen; j++) htP[j] = htCl[j];
        const htFast = xoverMa(htP, p.fastPeriod || 12, p.fastType || 0);
        const htSlow = xoverMa(htP, p.slowPeriod || 26, p.slowType || 0);
        fastArr = new Float64Array(len); slowArr = new Float64Array(len);
        for (let j = 0; j < len; j++) { fastArr[j] = htFast[htBarMap[j]]; slowArr[j] = htSlow[htBarMap[j]]; }
      } else {
        const closes = new Float64Array(len);
        for (let j = 0; j < len; j++) closes[j] = bars.close(j);
        fastArr = xoverMa(closes, p.fastPeriod || 12, p.fastType || 0);
        slowArr = xoverMa(closes, p.slowPeriod || 26, p.slowType || 0);
      }
      xoverCacheMap.set(hash, { fast: fastArr, slow: slowArr });
      if (_xoverPrevKey && _xoverPrevKey !== hash) xoverCacheMap.delete(_xoverPrevKey);
      _xoverPrevKey = hash;
    }
    this._fast = fastArr; this._slow = slowArr;
    // Estimate crossover at last bar
    const i = bars.length - 1;
    const N = Math.max(2, p.velocityLookback || 3);
    if (i >= N) {
      // Linear regression slope of the gap over the lookback window
      // More robust than 2-point endpoint velocity — resists short-term noise
      let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
      for (let k = 0; k <= N; k++) {
        const gk = fastArr[i - N + k] - slowArr[i - N + k];
        sumX += k; sumY += gk; sumXY += k * gk; sumX2 += k * k;
      }
      const M = N + 1;
      const dr = (M * sumXY - sumX * sumY) / (M * sumX2 - sumX * sumX);
      const gap = fastArr[i] - slowArr[i];
      const barsToX = dr !== 0 ? -gap / dr : Infinity;
      const threshold = p.barsBeforeAlert || 5;
      const inZone = isFinite(barsToX) && barsToX > 0 && barsToX <= threshold;
      console.log('[Xover]', { barsLen: bars.length, fast: fastArr[i].toFixed(5), slow: slowArr[i].toFixed(5), gap: gap.toFixed(5), dr: dr.toFixed(6), barsToX: isFinite(barsToX) ? barsToX.toFixed(2) : 'Inf', threshold, inZone });
      // MACD filter: require histogram to have peaked/bottomed before alerting
      if (inZone && p.useMacdFilter) {
        const mf = p.macdFast || 12, ms2 = p.macdSlow || 26, mSig = p.macdSignal || 9;
        const closes2 = new Float64Array(bars.length);
        for (let j = 0; j < bars.length; j++) closes2[j] = bars.close(j);
        const mFastArr = xoverMa(closes2, mf, 0), mSlowArr = xoverMa(closes2, ms2, 0);
        const macdLine = new Float64Array(bars.length);
        for (let j = 0; j < bars.length; j++) macdLine[j] = mFastArr[j] - mSlowArr[j];
        const sigArr = xoverMa(macdLine, mSig, 0);
        const hist0 = macdLine[i] - sigArr[i];
        const hist1 = macdLine[i - 1] - sigArr[i - 1];
        const hist2 = i >= 2 ? macdLine[i - 2] - sigArr[i - 2] : hist1;
        // peaked = hist was rising then falling (for positive hist), or bottomed (negative)
        const peaked = (hist2 < hist1 && hist1 > hist0);   // bull xover: fast was above slow
        const bottomed = (hist2 > hist1 && hist1 < hist0); // bear xover: fast was below slow
        const filterPass = gap > 0 ? peaked : bottomed;
        if (!filterPass) { this._prevInZone = false; this._barsToX = null; return; }
      }
      if (inZone && !this._prevInZone && p.notifications !== 0) {
        const dir = gap > 0 ? 'bearish' : 'bullish';
        const sym = (bars.symbol || 'Chart').toUpperCase();
        fireNotification('MA Crossover Alert: ' + sym, dir + ' crossover in ~' + Math.round(barsToX) + ' bar' + (Math.round(barsToX) !== 1 ? 's' : ''));
      }
      this._prevInZone = inZone;
      this._barsToX = inZone ? barsToX : null;
    } else {
      this._prevInZone = false; this._barsToX = null;
    }
  }
  _drawGraph(ctx) {
    const { settings: s } = this, { state: st } = this.chart;
    const { fast: fa, slow: sl, alert: al } = s.style;
    if (fa.visible && this._fast) this.drawLine(ctx, this._fast, fa);
    if (sl.visible && this._slow) this.drawLine(ctx, this._slow, sl);
    if (this._barsToX != null && al.visible) {
      // Mark the current bar + draw estimated crossover bar
      const step = st.getStep(), from = st.getFrom(), count = st.getCount();
      const curBarIdx = from + count; // last visible bar index
      const curX = st.startX() + count * step;
      const estX = curX + Math.round(this._barsToX) * step;
      const yTop = this.valueToY(this.yMax);
      const yBot = this.valueToY(this.yMin);
      ctx.lineStyle(al.thickness || 2, al.color);
      ctx.moveTo(curX, yTop); ctx.lineTo(curX, yBot); // current bar vertical line
      // Dashed line to estimated crossover bar
      if (estX > curX && estX < curX + 30 * step) {
        ctx.moveTo(curX, (yTop + yBot) / 2); ctx.lineTo(estX, (yTop + yBot) / 2);
        ctx.moveTo(estX, yTop); ctx.lineTo(estX, yBot);
      }
      const tx = this.createText('X~' + Math.round(this._barsToX));
      if (tx) { tx.tint = al.color; tx.x = curX + 4; tx.y = yTop + 4; ctx.addChild(tx); }
    }
  }
  value(t) { return []; }
}

class Ee2 extends ce {
  get yMin() { return this.chart.state.extrema[0] / this.getYDigits(); }
  get yMax() { return this.chart.state.extrema[1] / this.getYDigits(); }
  _titleArguments() { return []; }
  title() {
    const p2 = this.settings.params;
    const mp = (p2 && p2.maPeriod != null) ? p2.maPeriod : 50;
    const mt = (p2 && p2.maType) || 0;
    const base = this.settings.title || "Engulfing Patterns";
    return mp > 0 ? base + " (" + mp + (mt === 1 ? " SMA" : " EMA") + ")" : base;
  }
  _calc(t) {
    super._calc();
    const s = this.chart.bars;
    const p2 = this.settings.params;
    const maPeriod = (p2 && p2.maPeriod != null) ? p2.maPeriod : 50;
    const maType = (p2 && p2.maType) || 0;
    const e = [this.baseHash(), maPeriod, maType].join("-");
    let bull = engulfBullMap.get(e), bear = engulfBearMap.get(e);
    const ma = maPeriod > 0 ? engulfMa(s, maPeriod, maType) : null;
    if (bull && bear) {
      if (t) engulfCalc(bull, bear, s, ma, true);
    } else {
      (bull = new Float64Array(s.length)),
        (bear = new Float64Array(s.length)),
        engulfCalc(bull, bear, s, ma, false),
        engulfBullMap.set(e, bull),
        engulfBearMap.set(e, bear);
    }
    (this._epBull = bull), (this._epBear = bear);
  }
  _drawGraph(t) {
    const { settings: s, chart: e } = this, { state: i } = e;
    const { bullish: a, bearish: n } = s.style;
    let l = i.startX();
    const r = i.getFrom();
    for (let o = r, c = r + i.getCount() + 1; o < c; o++) {
      if (o >= 0) {
        let p = this._epBull && this._epBull[o];
        if (p) engulfDrawUp(t, l, this.valueToY(p), a);
        p = this._epBear && this._epBear[o];
        if (p) engulfDrawDn(t, l, this.valueToY(p), n);
      }
      l += i.getStep();
    }
  }
  value(t) { return []; }
}
const Pe = new Map(),
  Ie = new Map(),
  De = new Map(),
  Ee = new Map(),
  Ge = new Map(),
  Le = new Map(),
  Ce = new Map();
class Ve extends ce {
  constructor() {
    (super(...arguments),
      bs(this, H),
      bs(this, x),
      bs(this, F),
      bs(this, S),
      bs(this, W),
      bs(this, T));
  }
  _titleArguments() {
    const { params: t } = this.settings;
    return [t.jaws.distance, t.teeth.distance, t.lips.distance];
  }
  value(t) {
    const { settings: s } = this,
      { style: e, digits: i } = s,
      a = [];
    if (vs(this, x) && vs(this, F)) {
      const s = vs(this, x)[t],
        n = vs(this, F)[t];
      if (s) {
        const { color: t } = e.up;
        a.push({ value: s.toFixed(i), color: t });
      } else if (n) {
        const { color: t } = e.down;
        a.push({ value: n.toFixed(i), color: t });
      }
    }
    if (vs(this, S) && vs(this, W)) {
      const s = vs(this, S)[t],
        n = vs(this, W)[t];
      if (s) {
        const { color: t } = e.up;
        a.push({ value: s.toFixed(i), color: t });
      } else if (n) {
        const { color: t } = e.down;
        a.push({ value: n.toFixed(i), color: t });
      }
    }
    return a;
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = ks(this, H, j).call(this);
    let i = Pe.get(e),
      a = Ie.get(e),
      n = De.get(e),
      l = Ee.get(e),
      h = Ge.get(e),
      r = Le.get(e),
      o = Ce.get(e);
    if (h && r && o && i && a && n && l)
      t && Ye(i, a, n, l, h, r, o, this._getPrices(t), s, !0);
    else {
      const t = this._getPrices();
      ((i = new Float64Array(t.length)),
        (a = new Float64Array(t.length)),
        (n = new Float64Array(t.length)),
        (l = new Float64Array(t.length)),
        (h = new Float64Array(t.length)),
        (r = new Float64Array(t.length)),
        (o = new Float64Array(t.length)),
        Ye(i, a, n, l, h, r, o, t, s),
        Pe.set(e, i),
        Ie.set(e, a),
        De.set(e, n),
        Ee.set(e, l),
        Ge.set(e, h),
        Le.set(e, r),
        Ce.set(e, o));
      const c = vs(this, T);
      (c &&
        (Pe.delete(c),
        Ie.delete(c),
        De.delete(c),
        Ee.delete(c),
        Ge.delete(c),
        Le.delete(c),
        Ce.delete(c)),
        _s(this, T, e));
    }
    (_s(this, x, i),
      _s(this, F, a),
      _s(this, S, n),
      _s(this, W, l),
      this._calcExtremum(i, a, n, l));
  }
  _drawGraph(t) {
    const { settings: s } = this,
      { style: e } = s;
    (vs(this, x) && this.drawHistogram(t, vs(this, x), e.up),
      vs(this, F) && this.drawHistogram(t, vs(this, F), e.down),
      vs(this, S) && this.drawHistogram(t, vs(this, S), e.up),
      vs(this, W) && this.drawHistogram(t, vs(this, W), e.down));
  }
}
function Ye(t, s, e, i, a, n, l, h, r, o = !1) {
  (ue(a, h, r.jaws.distance, r.method, o),
    ue(n, h, r.teeth.distance, r.method, o),
    ue(l, h, r.lips.distance, r.method, o));
  const c = r.jaws.shift,
    g = r.teeth.shift,
    u = r.lips.shift;
  let d = 0,
    p = a.length,
    w = 0;
  for (
    o &&
    ((d = p - Math.max(r.jaws.distance, r.teeth.distance)),
    (w = t[d - 1] || s[d - 1] || 0));
    d < p;
    d++
  ) {
    const e = Math.abs(a[d - c] - n[d - g]);
    (e > w ? ((t[d] = e), (s[d] = 0)) : ((t[d] = 0), (s[d] = e)), (w = e));
  }
  for (
    d = 0,
      p = n.length,
      w = 0,
      o &&
        ((d = p - Math.max(r.lips.distance, r.teeth.distance)),
        (w = e[d - 1] || i[d - 1] || 0));
    d < p;
    d++
  ) {
    const t = -Math.abs(n[d - g] - l[d - u]);
    (t < w ? ((e[d] = t), (i[d] = 0)) : ((e[d] = 0), (i[d] = t)), (w = t));
  }
}
((x = new WeakMap()),
  (F = new WeakMap()),
  (S = new WeakMap()),
  (W = new WeakMap()),
  (T = new WeakMap()),
  (H = new WeakSet()),
  (j = function () {
    const { params: t } = this.settings;
    return [
      t.jaws.distance,
      t.jaws.shift,
      t.teeth.distance,
      t.teeth.shift,
      t.lips.distance,
      t.lips.shift,
      t.method,
      this.baseHash(),
    ].join("-");
  }));
const Re = new Map(),
  Be = new Map(),
  Ne = new Map(),
  Xe = new Map(),
  Ue = new Map();
class Ke extends ce {
  constructor() {
    (super(...arguments),
      bs(this, G),
      bs(this, O),
      bs(this, P),
      bs(this, I),
      bs(this, D),
      bs(this, E));
  }
  get yMin() {
    return 0;
  }
  get yMax() {
    return (super.yMax * (this.yHeight + 40)) / this.yHeight;
  }
  get yHeight() {
    return this.section.height;
  }
  title() {
    return this.settings.title;
  }
  value(t) {
    const { settings: s } = this,
      { style: e, digits: i } = s;
    if (vs(this, O)) {
      const s = vs(this, O)[t];
      if (s) {
        const { color: t } = e.upUp;
        return [{ value: s.toFixed(i), color: t }];
      }
    }
    if (vs(this, P)) {
      const s = vs(this, P)[t];
      if (s) {
        const { color: t } = e.downDown;
        return [{ value: s.toFixed(i), color: t }];
      }
    }
    if (vs(this, I)) {
      const s = vs(this, I)[t];
      if (s) {
        const { color: t } = e.upDown;
        return [{ value: s.toFixed(i), color: t }];
      }
    }
    if (vs(this, D)) {
      const s = vs(this, D)[t];
      if (s) {
        const { color: t } = e.downUp;
        return [{ value: s.toFixed(i), color: t }];
      }
    }
    return [];
  }
  _calc(t) {
    super._calc();
    const { params: s, digits: e } = this.settings,
      i = this.chart.bars,
      a = ks(this, G, L).call(this);
    let n = Re.get(a),
      l = Be.get(a),
      h = Ne.get(a),
      r = Xe.get(a),
      o = Ue.get(a);
    if (n && l && h && r && o) t && qe(n, l, h, r, o, i, e, s.volumes, !0);
    else {
      ((n = new Float64Array(i.length)),
        (l = new Float64Array(i.length)),
        (h = new Float64Array(i.length)),
        (r = new Float64Array(i.length)),
        (o = new Float64Array(i.length)),
        qe(n, l, h, r, o, i, e, s.volumes),
        Re.set(a, n),
        Be.set(a, l),
        Ne.set(a, h),
        Xe.set(a, r),
        Ue.set(a, o));
      const t = vs(this, E);
      (t &&
        (Re.delete(t), Be.delete(t), Ne.delete(t), Xe.delete(t), Ue.delete(t)),
        _s(this, E, a));
    }
    ((this.data = n),
      _s(this, O, l),
      _s(this, P, h),
      _s(this, I, r),
      _s(this, D, o),
      this._calcExtremum());
  }
  _before() {
    (super._before(), (this.yNull = this.section.height));
  }
  _drawGraph(t) {
    const { settings: s } = this,
      { style: e } = s;
    (vs(this, O) && this.drawHistogram(t, vs(this, O), e.upUp),
      vs(this, P) && this.drawHistogram(t, vs(this, P), e.downDown),
      vs(this, I) && this.drawHistogram(t, vs(this, I), e.upDown),
      vs(this, D) && this.drawHistogram(t, vs(this, D), e.downUp));
  }
}
function qe(t, s, e, i, a, n, l, h, r = !1) {
  let o = 0;
  const c = n.length;
  r && (o = c - 1);
  const g = 10 ** l;
  for (; o < c; ) {
    const l = ((n.high(o) - n.low(o)) * g) / ze(n, h, o);
    t[o] = l;
    const r = l > (o > 0 ? t[o - 1] : 0),
      c = o > 0 && ze(n, h, o) > ze(n, h, o - 1);
    (r && c && (s[o] = l),
      r || c || (e[o] = l),
      r && !c && (i[o] = l),
      !r && c && (a[o] = l),
      (o += 1));
  }
}
function ze(t, s, e) {
  switch (s) {
    case 0:
      return t.tickVolume(e);
    case 1:
      return t.realVolume(e);
    default:
      return 0;
  }
}
((O = new WeakMap()),
  (P = new WeakMap()),
  (I = new WeakMap()),
  (D = new WeakMap()),
  (E = new WeakMap()),
  (G = new WeakSet()),
  (L = function () {
    const { params: t } = this.settings;
    return [this.baseHash(), t.volumes].join("-");
  }));
const $e = new Map(),
  Je = new Map();
class Qe extends ce {
  constructor() {
    (super(...arguments), bs(this, V), bs(this, C));
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _titleArguments() {
    return [this.settings.params.distance];
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = this.chart.bars,
      i = ks(this, V, Y).call(this);
    let a = $e.get(i),
      n = Je.get(i);
    (a
      ? t && a && n && Ze(a, n, e, s.distance, !0)
      : ((a = new Float64Array(e.length)),
        (n = new Float64Array(e.length)),
        Ze(a, n, e, s.distance),
        $e.set(i, a),
        Je.set(i, n),
        vs(this, C) && ($e.delete(vs(this, C)), Je.delete(vs(this, C))),
        _s(this, C, i)),
      (this.data = a),
      this._calcExtremum());
  }
  _drawGraph(t) {
    const { data: s, settings: e } = this,
      { style: i } = e;
    s && this.drawLine(t, s, i.line);
  }
}
function Ze(t, s, e, i, a = !1) {
  let n = i;
  const l = e.length;
  for (a && (n = l - 1); n < l; )
    ((s[n] = Math.max(
      e.high(n) - e.low(n),
      e.close(n - 1) - e.high(n),
      e.close(n - 1) - e.low(n),
    )),
      (n += 1));
  ue(t, s, i, 0, a);
}
((C = new WeakMap()),
  (V = new WeakSet()),
  (Y = function () {
    const { params: t } = this.settings;
    return [this.baseHash(), t.distance].join("-");
  }));
const ti = new Map(),
  si = new Map();
class ei extends ce {
  constructor() {
    (super(...arguments), bs(this, B), bs(this, R));
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _titleArguments() {
    return [this.settings.params.distance];
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = this.chart.bars,
      i = ks(this, B, N).call(this);
    let a = ti.get(i),
      n = si.get(i);
    if (a && n) t && ii(a, n, this._getPrices(t), e, s.distance, !0);
    else {
      const t = this._getPrices();
      ((a = new Float64Array(t.length)),
        (n = new Float64Array(t.length)),
        ii(a, n, t, e, s.distance),
        ti.set(i, a),
        si.set(i, n));
      const l = vs(this, R);
      (l && (ti.delete(l), si.delete(l)), _s(this, R, i));
    }
    ((this.data = a), this._calcExtremum());
  }
  _drawGraph(t) {
    const { data: s, settings: e } = this,
      { style: i } = e;
    s && this.drawHistogram(t, s, i.line);
  }
}
function ii(t, s, e, i, a, n = !1) {
  ue(s, e, a, 1, n);
  let l = a;
  const h = e.length;
  for (n && (l = h - 1); l < h; ) ((t[l] = i.low(l) - s[l]), (l += 1));
}
((R = new WeakMap()),
  (B = new WeakSet()),
  (N = function () {
    const { params: t } = this.settings;
    return [this.baseHash(), t.distance].join("-");
  }));
const ai = new Map(),
  ni = new Map();
class li extends ce {
  constructor() {
    (super(...arguments), bs(this, U), bs(this, X));
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _titleArguments() {
    return [this.settings.params.distance];
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = this.chart.bars,
      i = ks(this, U, K).call(this);
    let a = ai.get(i),
      n = ni.get(i);
    if (a && n) t && hi(a, n, this._getPrices(t), e, s.distance, !0);
    else {
      const t = this._getPrices();
      ((a = new Float64Array(t.length)),
        (n = new Float64Array(t.length)),
        hi(a, n, t, e, s.distance),
        ai.set(i, a),
        ni.set(i, n));
      const l = vs(this, X);
      (l && (ai.delete(l), ni.delete(l)), _s(this, X, i));
    }
    ((this.data = a), this._calcExtremum());
  }
  _drawGraph(t) {
    const { data: s, settings: e } = this,
      { style: i } = e;
    s && this.drawHistogram(t, s, i.line);
  }
}
function hi(t, s, e, i, a, n = !1) {
  ue(s, e, a, 1, n);
  let l = a;
  const h = e.length;
  for (n && (l = h - 1); l < h; ) ((t[l] = i.high(l) - s[l]), (l += 1));
}
((X = new WeakMap()),
  (U = new WeakSet()),
  (K = function () {
    const { params: t } = this.settings;
    return [t.distance, this.baseHash()].join("-");
  }));
const ri = new Map(),
  oi = new Map(),
  ci = new Map(),
  gi = new Map();
class ui extends ce {
  constructor() {
    (super(...arguments), bs(this, z), bs(this, q));
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = this.chart.bars,
      i = ks(this, z, $).call(this);
    let a = ri.get(i),
      n = oi.get(i),
      l = ci.get(i),
      h = gi.get(i);
    if (a && n && l && h)
      t && di(a, n, l, h, this._getPrices(t), s.apply, s.distance, !0);
    else {
      const t = this._getPrices();
      ((a = new Float64Array(e.length)),
        (n = new Float64Array(e.length)),
        (l = new Float64Array(e.length)),
        (h = new Float64Array(e.length)),
        di(a, n, l, h, t, s.apply, s.distance),
        ri.set(i, a),
        oi.set(i, n),
        ci.set(i, l),
        gi.set(i, h));
      const r = vs(this, q);
      (r && (ri.delete(r), oi.delete(r), ci.delete(r), gi.delete(r)),
        _s(this, q, r));
    }
    ((this.data = a), this._calcExtremum());
  }
  _drawGraph(t) {
    const { chart: s, data: e, settings: i } = this,
      { state: a } = s,
      { style: n } = i;
    if (n.background.visible) {
      const s = this.valueToY(100),
        e = this.valueToY(-100) - s;
      (t.beginFill(n.background.color, n.background.alpha),
        t.drawRect(0, s, a.graphWidth, e),
        t.endFill());
    }
    (n.up.visible && this._drawValueLine("up", 100, n.up),
      n.down.visible && this._drawValueLine("down", -100, n.up),
      e && this.drawLine(t, e, n.line));
  }
}
function di(t, s, e, i, a, n, l, h = !1) {
  let r;
  const o = a.length;
  (ue(s, a, l, n, h), (r = l - 1), h && (r = o - 2));
  const c = 0.015 / l;
  for (; r < o; ) {
    let n = 0,
      h = r + 1 - l;
    for (; h <= r; ) ((n += Math.abs(a[h] - s[r])), (h += 1));
    ((e[r] = n * c),
      (i[r] = a[r] - s[r]),
      0 === e[r] ? (t[r] = 0) : (t[r] = i[r] / e[r]),
      (r += 1));
  }
}
function pi(t, s, e) {
  let i = 0;
  if (t >= s - 1 && s > 0) {
    for (let a = 0; a < s; a++) i += e[t - a];
    i /= s;
  }
  return i;
}
((q = new WeakMap()),
  (z = new WeakSet()),
  ($ = function () {
    const { params: t } = this.settings;
    return [t.distance, this.baseHash()].join("-");
  }));
const wi = new Map(),
  yi = new Map(),
  mi = new Map();
class fi extends ce {
  constructor() {
    (super(...arguments), bs(this, Q), bs(this, J));
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _titleArguments() {
    return [this.settings.params.distance];
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = this.chart.bars,
      i = ks(this, Q, Z).call(this);
    let a = wi.get(i),
      n = yi.get(i),
      l = mi.get(i);
    if (a && n && l) t && Ai(a, n, l, e, s.distance, !0);
    else {
      ((a = new Float64Array(e.length)),
        (n = new Float64Array(e.length)),
        (l = new Float64Array(e.length)),
        Ai(a, n, l, e, s.distance),
        wi.set(i, a),
        yi.set(i, n),
        mi.set(i, l));
      const t = vs(this, J);
      (t && (wi.delete(t), yi.delete(t), mi.delete(t)), _s(this, J, t));
    }
    ((this.data = a), this._calcExtremum());
  }
  _drawGraph(t) {
    const { chart: s, data: e, settings: i } = this,
      { style: a } = i;
    if (a.background.visible) {
      const e = this.valueToY(0.7),
        i = this.valueToY(0.3) - e;
      (t.beginFill(a.background.color, a.background.alpha),
        t.drawRect(0, e, s.state.graphWidth, i),
        t.endFill());
    }
    (a.up.visible && this._drawValueLine("up", 0.7, a.up),
      a.down.visible && this._drawValueLine("down", 0.3, a.down),
      e && this.drawLine(t, e, a.line));
  }
}
function Ai(t, s, e, i, a, n = !1) {
  let l = a;
  const h = i.length;
  if (n) l = h - 1;
  else
    for (let r = 1, o = a - 1; r < o; r++)
      ((e[l] = Math.max(0, i.high(r) - i.high(r - 1))),
        (s[l] = Math.max(0, i.low(r - 1) - i.low(r))));
  for (; l < h; ) {
    ((e[l] = Math.max(0, i.high(l) - i.high(l - 1))),
      (s[l] = Math.max(0, i.low(l - 1) - i.low(l))));
    const n = pi(l, a, e),
      h = pi(l, a, s);
    ((t[l] = n / (n + h)), (l += 1));
  }
}
((J = new WeakMap()),
  (Q = new WeakSet()),
  (Z = function () {
    const { params: t } = this.settings;
    return [t.distance, this.baseHash()].join("-");
  }));
const Mi = new Map(),
  vi = new Map();
class bi extends ce {
  constructor() {
    (super(...arguments), bs(this, st), bs(this, tt));
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _titleArguments() {
    return [this.settings.params.distance];
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = this.chart.bars,
      i = ks(this, st, et).call(this);
    let a = Mi.get(i),
      n = vi.get(i);
    if (a && n)
      t && _i(a, n, this._getPrices(t), e, s.distance, s.method, s.volumes, !0);
    else {
      const t = this._getPrices();
      ((a = new Float64Array(e.length)),
        (n = new Float64Array(e.length)),
        _i(a, n, t, e, s.distance, s.method, s.volumes),
        Mi.set(i, a),
        vi.set(i, n));
      const l = vs(this, tt);
      (l && (Mi.delete(l), vi.delete(l)), _s(this, tt, l));
    }
    ((this.data = a), this._calcExtremum());
  }
  _drawGraph(t) {
    const { data: s, settings: e } = this,
      { style: i } = e;
    (i.null.visible && this._drawValueLine("null", 0, i.null),
      s && this.drawLine(t, s, i.line));
  }
}
function _i(t, s, e, i, a, n, l, h = !1) {
  let r = a;
  const o = e.length;
  for (h && (r = o - 1), ue(s, e, a, n, h); r < o; ) {
    let e;
    switch (l) {
      case 0:
        e = i.tickVolume(r);
        break;
      case 1:
        e = i.realVolume(r);
        break;
      default:
        e = 0;
    }
    ((t[r] = e * (s[r] - s[r - 1])), (r += 1));
  }
}
((tt = new WeakMap()),
  (st = new WeakSet()),
  (et = function () {
    const { params: t } = this.settings;
    return [t.distance, t.method, t.volumes, this.baseHash()].join("-");
  }));
const ki = new Map(),
  xi = new Map(),
  Fi = new Map(),
  Si = new Map();
class Wi extends ce {
  constructor() {
    (super(...arguments), bs(this, nt), bs(this, it), bs(this, at));
  }
  _titleArguments() {
    const { params: t } = this.settings;
    return [t.fast, t.slow, t.macd, re(t.apply)];
  }
  value(t) {
    const { data: s, settings: e } = this,
      { style: i, digits: a } = e,
      n = [];
    if (s) {
      const e = s[t];
      null != e && n.push({ value: e.toFixed(a), color: i.line.color });
    }
    if (vs(this, it)) {
      const s = vs(this, it)[t];
      null != s && n.push({ value: s.toFixed(a), color: i.signal.color });
    }
    return n;
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = ks(this, nt, lt).call(this);
    let i = ki.get(e),
      a = xi.get(e),
      n = Fi.get(e),
      l = Si.get(e);
    if (i && a && n && l)
      t && Ti(i, a, n, l, this._getPrices(t), s.fast, s.slow, s.macd, !0);
    else {
      const t = this._getPrices();
      ((i = new Float64Array(t.length)),
        (a = new Float64Array(t.length)),
        (n = new Float64Array(t.length)),
        (l = new Float64Array(t.length)),
        Ti(i, a, n, l, t, s.fast, s.slow, s.macd),
        ki.set(e, i),
        xi.set(e, a),
        Fi.set(e, n),
        Si.set(e, l));
      const h = vs(this, at);
      (h && (ki.delete(h), xi.delete(h), Si.delete(h), Fi.delete(h)),
        _s(this, at, e));
    }
    ((this.data = i), _s(this, it, a), this._calcExtremum(i, a));
  }
  _drawGraph(t) {
    const { data: s, settings: e } = this,
      { style: i } = e;
    (i.line.visible && s && this.drawHistogram(t, s, i.line),
      i.signal.visible &&
        vs(this, it) &&
        this.drawLine(t, vs(this, it), i.signal));
  }
}
function Ti(t, s, e, i, a, n, l, h, r = !1) {
  const o = Math.max(1, Math.min(n, 4e3)),
    c = Math.max(1, Math.min(l, 4e3)),
    g = Math.max(1, Math.min(h, 4e3));
  if (o !== c) {
    (ue(e, a, o, 1, r), ue(i, a, c, 1, r));
    for (let s = r ? e.length - Math.max(c, o) : 0, a = e.length; s < a; s++)
      t[s] = e[s] - i[s];
    ue(s, t, g, 0, r);
  }
}
((it = new WeakMap()),
  (at = new WeakMap()),
  (nt = new WeakSet()),
  (lt = function () {
    const { params: t } = this.settings;
    return [t.fast, t.slow, t.macd, this.baseHash()].join("-");
  }));

// bitToMinutes: converts period bitmask value to minutes
function Ni2(b){const m={1:1,2:5,4:15,8:30,16:60,32:240,64:1440,128:10080,256:43200};return m[b]||0;}
// applyPrice: compute apply-based price from OHLC values
function Ni2b(o,h,l,c,a){switch(a){case 0:return c;case 1:return o;case 2:return h;case 3:return l;case 4:return(h+l)/2;case 5:return(h+l+c)/3;case 6:return(h+l+c+c)/4;default:return c;}}
// Cache maps for Wi2
const ki2=new Map(),xi2=new Map(),Fi2=new Map(),Si2=new Map();
let it2=new WeakMap(),at2=new WeakMap(),nt2=new WeakSet(),lt2;
class Wi2 extends ce{
  constructor(){(super(...arguments),bs(this,nt2),bs(this,it2),bs(this,at2));}
  _titleArguments(){const{params:t}=this.settings;return[t.fast,t.slow,t.macd,re(t.apply)];}
  value(t){const{data:s,settings:e}=this,{style:i,digits:a}=e,n=[];if(s){const e=s[t];null!=e&&n.push({value:e.toFixed(a),color:i.line.color});}if(vs(this,it2)){const s=vs(this,it2)[t];null!=s&&n.push({value:s.toFixed(a),color:i.signal.color});}return n;}
  _calc(t){
    super._calc();
    const{params:s}=this.settings,e=ks(this,nt2,lt2).call(this);
    let i=ki2.get(e),a=xi2.get(e),n=Fi2.get(e),l=Si2.get(e);
    if(s.sameTimeframeSource){
      // Same-TF path: standard MACD (mirrors Wi)
      const prices=this._getPrices(t||void 0);
      if(i&&a&&n&&l){t&&Ti(i,a,n,l,prices,s.fast,s.slow,s.macd,!0);}
      else{((i=new Float64Array(prices.length)),(a=new Float64Array(prices.length)),(n=new Float64Array(prices.length)),(l=new Float64Array(prices.length)),Ti(i,a,n,l,prices,s.fast,s.slow,s.macd),ki2.set(e,i),xi2.set(e,a),Fi2.set(e,n),Si2.set(e,l));const h=vs(this,at2);(h&&(ki2.delete(h),xi2.delete(h),Fi2.delete(h),Si2.delete(h)),_s(this,at2,e));}
    }else{
      // MTF path: compute MACD at HT resolution, then expand to current-TF bars
      const bars=this.chart.bars,len=bars.length,tfMs=Ni2(s.sourceTimeframe)*60000;
      if(!tfMs){
        // sourceTimeframe not set, fall back to same-TF
        const prices=this._getPrices(t||void 0);
        if(i&&a&&n&&l){t&&Ti(i,a,n,l,prices,s.fast,s.slow,s.macd,!0);}
        else{((i=new Float64Array(prices.length)),(a=new Float64Array(prices.length)),(n=new Float64Array(prices.length)),(l=new Float64Array(prices.length)),Ti(i,a,n,l,prices,s.fast,s.slow,s.macd),ki2.set(e,i),ki2.set(e,i),xi2.set(e,a),Fi2.set(e,n),Si2.set(e,l));const h=vs(this,at2);(h&&(ki2.delete(h),xi2.delete(h),Fi2.delete(h),Si2.delete(h)),_s(this,at2,e));}
      }else{
        // Step 1: build HT candle open/high/low/close and record which LT bar ends each HT candle
        const htOp=[],htHi=[],htLo=[],htCl=[],htBarMap=new Int32Array(len);
        let cs=-1,cO=0,cH=-Infinity,cL=Infinity,htIdx=-1;
        for(let j=0;j<len;j++){
          const bc=Math.floor(bars.time(j)/tfMs)*tfMs;
          if(bc!==cs){cs=bc;cO=bars.open(j);cH=bars.high(j);cL=bars.low(j);htIdx++;htOp.push(cO);htHi.push(cH);htLo.push(cL);htCl.push(bars.close(j));}
          else{if(bars.high(j)>cH){cH=bars.high(j);htHi[htIdx]=cH;}if(bars.low(j)<cL){cL=bars.low(j);htLo[htIdx]=cL;}htCl[htIdx]=bars.close(j);}
          htBarMap[j]=htIdx;
        }
        const htLen=htOp.length;
        // Step 2: build HT price series
        const htPrices=new Float64Array(htLen);
        for(let j=0;j<htLen;j++)htPrices[j]=Ni2b(htOp[j],htHi[j],htLo[j],htCl[j],s.apply);
        // Step 3: compute MACD on HT prices
        const htMACD=new Float64Array(htLen),htSig=new Float64Array(htLen),htF=new Float64Array(htLen),htS=new Float64Array(htLen);
        Ti(htMACD,htSig,htF,htS,htPrices,s.fast,s.slow,s.macd);
        // Step 4: expand HT MACD values back to LT bar positions
        i=new Float64Array(len);a=new Float64Array(len);
        for(let j=0;j<len;j++){const hi=htBarMap[j];i[j]=htMACD[hi];a[j]=htSig[hi];}
        ki2.set(e,i);xi2.set(e,a);
        // reuse n/l slots for the HT intermediates (not needed for expand, clear old)
        const dummy=new Float64Array(0);Fi2.set(e,dummy);Si2.set(e,dummy);
        const h=vs(this,at2);(h&&(ki2.delete(h),xi2.delete(h),Fi2.delete(h),Si2.delete(h)),_s(this,at2,e));
      }
    }
    ((this.data=i),_s(this,it2,a),this._calcExtremum(i,a));
  }
  _drawGraph(t){const{data:s,settings:e}=this,{style:i}=e;(i.line.visible&&s&&this.drawHistogram(t,s,i.line),i.signal.visible&&vs(this,it2)&&this.drawLine(t,vs(this,it2),i.signal));}
}
((it2=new WeakMap()),(at2=new WeakMap()),(nt2=new WeakSet()),(lt2=function(){const{params:t}=this.settings;return[t.fast,t.slow,t.macd,t.sameTimeframeSource,t.sourceTimeframe,this.baseHash()].join("-");}));
const Hi = new Map(),
  ji = new Map(),
  Oi = new Map(),
  Pi = new Map(),
  Ii = new Map();
class Di extends ce {
  constructor() {
    (super(...arguments), bs(this, rt), bs(this, ht));
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _titleArguments() {
    const { params: t } = this.settings;
    return [t.fast, t.slow, t.macd, re(t.apply)];
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = ks(this, rt, ot).call(this);
    let i = Hi.get(e),
      a = ji.get(e),
      n = Oi.get(e),
      l = Pi.get(e),
      h = Ii.get(e);
    if (i && a && n && l && h)
      t && Ei(i, a, n, l, h, this._getPrices(t), s.fast, s.slow, s.macd, !0);
    else {
      const t = this._getPrices();
      ((i = new Float64Array(t.length)),
        (a = new Float64Array(t.length)),
        (n = new Float64Array(t.length)),
        (l = new Float64Array(t.length)),
        (h = new Float64Array(t.length)),
        Ei(i, a, n, l, h, t, s.fast, s.slow, s.macd),
        Hi.set(e, i),
        ji.set(e, a),
        Oi.set(e, n),
        Pi.set(e, l),
        Ii.set(e, h));
      const r = vs(this, ht);
      (r &&
        (Hi.delete(r), ji.delete(r), Oi.delete(r), Pi.delete(r), Ii.delete(r)),
        _s(this, ht, e));
    }
    ((this.data = i), this._calcExtremum());
  }
  _drawGraph(t) {
    const { data: s, settings: e } = this,
      { style: i } = e;
    s && this.drawHistogram(t, s, i.line);
  }
}
function Ei(t, s, e, i, a, n, l, h, r, o = !1) {
  const c = Math.max(1, Math.min(l, 4e3)),
    g = Math.max(1, Math.min(h, 4e3)),
    u = Math.max(1, Math.min(r, 4e3));
  if (c !== g) {
    (ue(s, n, c, 1, o), ue(e, n, g, 1, o));
    for (let t = o ? s.length - Math.max(g, c) : 0, a = s.length; t < a; t++)
      i[t] = s[t] - e[t];
    ue(a, i, u, 0, o);
    for (let e = o ? s.length - Math.max(g, c, u) : 0, n = s.length; e < n; e++)
      t[e] = i[e] - a[e];
  }
}

// ── AnalysisMAO_ — OsMA with same-timeframe-source / MTF support ─────────
const Hi2=new Map(),ji2=new Map(),Oi2=new Map(),Pi2=new Map(),Ii2=new Map();
let ht2=new WeakMap(),rt2=new WeakSet(),ot2;
class Di2 extends ce{
  constructor(){(super(...arguments),bs(this,rt2),bs(this,ht2));}
  value(t){return this.data&&this.data[t]?[{color:this.settings.style.line.color,value:this.data[t].toFixed(this.settings.digits)}]:[];}
  _titleArguments(){const{params:t}=this.settings;return[t.fast,t.slow,t.macd,re(t.apply)];}
  _calc(t){
    super._calc();
    const{params:s}=this.settings,e=ks(this,rt2,ot2).call(this);
    let i=Hi2.get(e),a=ji2.get(e),n=Oi2.get(e),l=Pi2.get(e),h=Ii2.get(e);
    if(s.sameTimeframeSource){
      // Same-TF path: standard OsMA (mirrors Di exactly)
      const prices=this._getPrices(t||void 0);
      if(i&&a&&n&&l&&h){t&&Ei(i,a,n,l,h,prices,s.fast,s.slow,s.macd,!0);}
      else{((i=new Float64Array(prices.length)),(a=new Float64Array(prices.length)),(n=new Float64Array(prices.length)),(l=new Float64Array(prices.length)),(h=new Float64Array(prices.length)),Ei(i,a,n,l,h,prices,s.fast,s.slow,s.macd),Hi2.set(e,i),ji2.set(e,a),Oi2.set(e,n),Pi2.set(e,l),Ii2.set(e,h));const r=vs(this,ht2);(r&&(Hi2.delete(r),ji2.delete(r),Oi2.delete(r),Pi2.delete(r),Ii2.delete(r)),_s(this,ht2,e));}
    }else{
      // MTF path: compute OsMA at HT resolution, then expand to current-TF bars
      const bars=this.chart.bars,len=bars.length,tfMs=Ni2(s.sourceTimeframe)*60000;
      if(!tfMs){
        // sourceTimeframe not set — fall back to same-TF
        const prices=this._getPrices(t||void 0);
        if(i&&a&&n&&l&&h){t&&Ei(i,a,n,l,h,prices,s.fast,s.slow,s.macd,!0);}
        else{((i=new Float64Array(prices.length)),(a=new Float64Array(prices.length)),(n=new Float64Array(prices.length)),(l=new Float64Array(prices.length)),(h=new Float64Array(prices.length)),Ei(i,a,n,l,h,prices,s.fast,s.slow,s.macd),Hi2.set(e,i),ji2.set(e,a),Oi2.set(e,n),Pi2.set(e,l),Ii2.set(e,h));const r=vs(this,ht2);(r&&(Hi2.delete(r),ji2.delete(r),Oi2.delete(r),Pi2.delete(r),Ii2.delete(r)),_s(this,ht2,e));}
      }else{
        // Step 1: build HT candles
        const htOp=[],htHi=[],htLo=[],htCl=[],htBarMap=new Int32Array(len);
        let cs=-1,cO=0,cH=-Infinity,cL=Infinity,htIdx=-1;
        for(let j=0;j<len;j++){
          const bc=Math.floor(bars.time(j)/tfMs)*tfMs;
          if(bc!==cs){cs=bc;cO=bars.open(j);cH=bars.high(j);cL=bars.low(j);htIdx++;htOp.push(cO);htHi.push(cH);htLo.push(cL);htCl.push(bars.close(j));}
          else{if(bars.high(j)>cH){cH=bars.high(j);htHi[htIdx]=cH;}if(bars.low(j)<cL){cL=bars.low(j);htLo[htIdx]=cL;}htCl[htIdx]=bars.close(j);}
          htBarMap[j]=htIdx;
        }
        const htLen=htOp.length;
        // Step 2: build HT price series
        const htPrices=new Float64Array(htLen);
        for(let j=0;j<htLen;j++)htPrices[j]=Ni2b(htOp[j],htHi[j],htLo[j],htCl[j],s.apply);
        // Step 3: compute OsMA entirely on HT prices
        const htOsMA=new Float64Array(htLen),htF=new Float64Array(htLen),htS=new Float64Array(htLen),htMACD=new Float64Array(htLen),htSig=new Float64Array(htLen);
        Ei(htOsMA,htF,htS,htMACD,htSig,htPrices,s.fast,s.slow,s.macd);
        // Step 4: expand OsMA back to LT bar positions
        i=new Float64Array(len);
        for(let j=0;j<len;j++)i[j]=htOsMA[htBarMap[j]];
        Hi2.set(e,i);
        const dummy=new Float64Array(0);ji2.set(e,dummy);Oi2.set(e,dummy);Pi2.set(e,dummy);Ii2.set(e,dummy);
        const r=vs(this,ht2);(r&&(Hi2.delete(r),ji2.delete(r),Oi2.delete(r),Pi2.delete(r),Ii2.delete(r)),_s(this,ht2,e));
      }
    }
    ((this.data=i),this._calcExtremum());
  }
  _drawGraph(t){const{data:s,settings:e}=this,{style:i}=e;s&&this.drawHistogram(t,s,i.line);}
}
((ht2=new WeakMap()),(rt2=new WeakSet()),(ot2=function(){const{params:t}=this.settings;return[t.fast,t.slow,t.macd,t.sameTimeframeSource,t.sourceTimeframe,this.baseHash()].join("-");}));
((ht = new WeakMap()),
  (rt = new WeakSet()),
  (ot = function () {
    const { params: t } = this.settings;
    return [t.fast, t.slow, t.macd, this.baseHash()].join("-");
  }));
const Gi = new Map();
class Li extends ce {
  constructor() {
    (super(...arguments), bs(this, gt), bs(this, ct));
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _titleArguments() {
    const { params: t } = this.settings;
    return [t.distance, re(t.apply)];
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = ks(this, gt, ut).call(this);
    let i = Gi.get(e);
    if (i) t && Ci(i, this._getPrices(t), s.distance, !0);
    else {
      const t = this._getPrices();
      ((i = new Float64Array(t.length)),
        Ci(i, t, s.distance),
        Gi.set(e, i),
        vs(this, ct) && Gi.delete(vs(this, ct)),
        _s(this, ct, e));
    }
    ((this.data = i), this._calcExtremum());
  }
  _drawGraph(t) {
    const { state: s } = this.chart,
      { style: e } = this.settings,
      i = this.data;
    let a = s.startX();
    const n = s.getFrom();
    let l = !1;
    t.lineStyle(e.line.thickness, e.line.color);
    for (let h = n, r = n + s.getCount() + 1; h < r; h++) {
      if (h >= 0) {
        const s = i && i[h];
        if (s) {
          const e = this.valueToY(s);
          l ? t.lineTo(a, e) : (t.moveTo(a, e), (l = !0));
        }
      }
      a += s.getStep();
    }
  }
}
function Ci(t, s, e, i = !1) {
  let a = e;
  const n = t.length;
  for (i && (a = t.length - 1); a < n; )
    ((t[a] = (100 * s[a]) / s[a - e]), (a += 1));
}
((ct = new WeakMap()),
  (gt = new WeakSet()),
  (ut = function () {
    const { params: t } = this.settings;
    return [t.distance, this.baseHash()].join("-");
  }));
const Vi = new Map(),
  Yi = new Map(),
  Ri = new Map();
class Bi extends ce {
  constructor() {
    (super(...arguments), bs(this, pt), bs(this, dt));
  }
  get yMin() {
    return 0;
  }
  get yMax() {
    return 100;
  }
  get yHeight() {
    return this.section.height - 20;
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = ks(this, pt, wt).call(this);
    let i = Vi.get(e),
      a = Yi.get(e),
      n = Ri.get(e);
    if (i && a && n) t && Ni(i, a, n, this._getPrices(t), s.distance, !0);
    else {
      const t = this._getPrices();
      ((i = new Float64Array(t.length)),
        (a = new Float64Array(t.length)),
        (n = new Float64Array(t.length)),
        Ni(i, a, n, t, s.distance),
        Vi.set(e, i),
        Yi.set(e, a),
        Ri.set(e, n));
      const l = vs(this, dt);
      (l && (Vi.delete(l), Yi.delete(l), Ri.delete(l)), _s(this, dt, l));
    }
    this.data = i;
  }
  _drawGraph(t) {
    const { chart: s, data: e, settings: i } = this,
      { state: a } = s,
      { style: n } = i;
    if (n.background.visible) {
      const s = this.valueToY(70),
        e = this.valueToY(30) - s;
      (t.beginFill(n.background.color, n.background.alpha),
        t.drawRect(0, s, a.graphWidth, e),
        t.endFill());
    }
    (n.up.visible && this._drawValueLine("up", 70, n.up),
      n.down.visible && this._drawValueLine("down", 30, n.down),
      e && this.drawLine(t, e, n.line));
  }
}
function Ni(t, s, e, i, a, n = !1) {
  let l = a - 1;
  const h = i.length;
  for (n && (l = h - 2); l < h; ) {
    let n = 0,
      h = 0,
      r = l + 1 - a;
    if (l === a) {
      for (; r <= l; ) {
        const t = i[r] - i[r - 1];
        (t > 0 ? (h += t) : (n -= t), (r += 1));
      }
      ((s[l] = h / a), (e[l] = n / a));
    } else {
      const t = i[l] - i[l - 1];
      (t > 0 ? (h = t) : (n = -t),
        (s[l] = (s[l - 1] * (a - 1) + h) / a),
        (e[l] = (e[l - 1] * (a - 1) + n) / a));
    }
    (0 === e[l] ? (t[l] = 0) : (t[l] = 100 - 100 / (1 + s[l] / e[l])),
      (l += 1));
  }
}
((dt = new WeakMap()),
  (pt = new WeakSet()),
  (wt = function () {
    const { params: t } = this.settings;
    return [t.distance, this.baseHash()].join("-");
  }));
const Xi = new Map(),
  Ui = new Map();
class Ki extends ce {
  constructor() {
    (super(...arguments),
      bs(this, At),
      bs(this, yt),
      bs(this, mt),
      bs(this, ft));
  }
  _titleArguments() {
    return [this.settings.params.distance];
  }
  value(t) {
    const { settings: s } = this,
      { style: e, digits: i } = s,
      a = [];
    if (vs(this, yt)) {
      const s = vs(this, yt)[t];
      null != s && a.push({ value: s.toFixed(i), color: e.rvi.color });
    }
    if (vs(this, mt)) {
      const s = vs(this, mt)[t];
      null != s && a.push({ value: s.toFixed(i), color: e.signal.color });
    }
    return a;
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = ks(this, At, Mt).call(this),
      i = this.chart.bars;
    let a = Xi.get(e),
      n = Ui.get(e);
    if (a && n) t && qi(a, n, i, s.distance, !0);
    else {
      ((a = new Float64Array(i.length)),
        (n = new Float64Array(i.length)),
        qi(a, n, i, s.distance),
        Xi.set(e, a),
        Ui.set(e, n));
      const t = vs(this, ft);
      (t && (Xi.delete(t), Ui.delete(t)), _s(this, ft, t));
    }
    (_s(this, yt, a), _s(this, mt, n), this._calcExtremum(a, n));
  }
  _drawGraph(t) {
    const { settings: s } = this,
      { style: e } = s;
    (e.null.visible && this._drawValueLine("null", 0, e.null),
      e.rvi.visible && vs(this, yt) && this.drawLine(t, vs(this, yt), e.rvi),
      e.signal.visible &&
        vs(this, mt) &&
        this.drawLine(t, vs(this, mt), e.signal));
  }
}
function qi(t, s, e, i, a = !1) {
  let n = i + 3;
  const l = e.length;
  for (a && (n = l - 2); n < l; ) {
    let s = 0,
      a = 0;
    for (let t = n - i + 1; t <= n; t++)
      ((s +=
        (e.close(t) -
          e.open(t) +
          2 * (e.close(t - 1) - e.open(t - 1)) +
          2 * (e.close(t - 2) - e.open(t - 2)) +
          (e.close(t - 3) - e.open(t - 3))) /
        6),
        (a +=
          (e.high(t) -
            e.low(t) +
            2 * (e.high(t - 1) - e.low(t - 1)) +
            2 * (e.high(t - 2) - e.low(t - 2)) +
            (e.high(t - 3) - e.low(t - 3))) /
          6));
    ((t[n] = 0 !== a ? s / a : s), (n += 1));
  }
  for (n = i + 4, a && (n = l - 1); n < l; )
    ((s[n] = (t[n] + 2 * t[n - 1] + 2 * t[n - 2] + t[n - 3]) / 6), (n += 1));
}
((yt = new WeakMap()),
  (mt = new WeakMap()),
  (ft = new WeakMap()),
  (At = new WeakSet()),
  (Mt = function () {
    const { params: t } = this.settings;
    return [t.distance, this.baseHash()].join("-");
  }));
const zi = new Map(),
  $i = new Map(),
  Ji = new Map(),
  Qi = new Map();
class Zi extends ce {
  constructor() {
    (super(...arguments), bs(this, _t), bs(this, vt), bs(this, bt));
  }
  get yMin() {
    return Math.min(this._yMin, 20);
  }
  get yMax() {
    return Math.max(this._yMax, 80);
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _titleArguments() {
    const { params: t } = this.settings;
    return [t.distanceK, t.distanceD, t.slowing];
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = this.chart.bars,
      i = ks(this, _t, kt).call(this);
    let a = zi.get(i),
      n = $i.get(i),
      l = Ji.get(i),
      h = Qi.get(i);
    if (a && n && l && h)
      t &&
        ta(
          a,
          n,
          l,
          h,
          e,
          s.distanceK,
          s.distanceD,
          s.slowing,
          s.price,
          s.method,
          !0,
        );
    else {
      ((a = new Float64Array(e.length)),
        (n = new Float64Array(e.length)),
        (l = new Float64Array(e.length)),
        (h = new Float64Array(e.length)),
        ta(
          a,
          n,
          l,
          h,
          e,
          s.distanceK,
          s.distanceD,
          s.slowing,
          s.price,
          s.method,
        ),
        zi.set(i, a),
        $i.set(i, n),
        Ji.set(i, l),
        Qi.set(i, h));
      const t = vs(this, bt);
      (t && (zi.delete(t), $i.delete(t), Ji.delete(t), Qi.delete(t)),
        _s(this, bt, t));
    }
    ((this.data = a), _s(this, vt, n), this._calcExtremum(a, n));
  }
  _drawGraph(t) {
    const { chart: s, data: e, settings: i } = this,
      { state: a } = s,
      { style: n } = i;
    if (n.background.visible) {
      const s = this.valueToY(80),
        e = this.valueToY(20) - s;
      (t.beginFill(n.background.color, n.background.alpha),
        t.drawRect(0, s, a.graphWidth, e),
        t.endFill());
    }
    (n.up.visible && this._drawValueLine("up", 80, n.up),
      n.down.visible && this._drawValueLine("down", 20, n.down),
      n.line.visible && e && this.drawLine(t, e, n.line),
      n.signal.visible &&
        vs(this, vt) &&
        this.drawLine(t, vs(this, vt), n.signal));
  }
}
function ta(t, s, e, i, a, n, l, h, r, o, c = !1) {
  let g = n;
  const u = a.length;
  for (c && (g = u - 2); g < u; ) {
    let t = Number.MAX_VALUE,
      s = Number.MIN_VALUE,
      l = g - n + 1;
    for (; l <= g; ) {
      let e = sa(a, l, r);
      (t > e && (t = e), (e = ea(a, l, r)), s < e && (s = e), (l += 1));
    }
    ((e[g] = t), (i[g] = s), (g += 1));
  }
  for (g = n + h, c && (g = u - 2); g < u; ) {
    let s = 0,
      n = 0,
      l = g - h + 1;
    for (l < 0 && (l = 0); l <= g; l++)
      ((s += a.close(l) - e[l]), (n += i[l] - e[l]));
    ((t[g] = 0 === n ? 100 : (s / n) * 100), (g += 1));
  }
  ue(s, t, l, o, c);
}
function sa(t, s, e) {
  switch (e) {
    case 0:
      return t.low(s);
    case 1:
      return t.close(s);
    default:
      return 0;
  }
}
function ea(t, s, e) {
  switch (e) {
    case 0:
      return t.high(s);
    case 1:
      return t.close(s);
    default:
      return 0;
  }
}
((vt = new WeakMap()),
  (bt = new WeakMap()),
  (_t = new WeakSet()),
  (kt = function () {
    const { params: t } = this.settings;
    return [
      t.distanceK,
      t.distanceD,
      t.slowing,
      t.price,
      t.method,
      this.baseHash(),
    ].join("-");
  }));
const ia = new Map(),
  aa = new Map(),
  na = new Map(),
  la = new Map();
class ha extends ce {
  constructor() {
    (super(...arguments), bs(this, Ft), bs(this, xt));
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _titleArguments() {
    return [this.settings.params.distance];
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = ks(this, Ft, St).call(this);
    let i = ia.get(e),
      a = aa.get(e),
      n = na.get(e),
      l = la.get(e);
    if (i && a && n && l)
      t && ra(i, a, n, l, this._getPrices(t), s.distance, !0);
    else {
      const t = this._getPrices();
      ((i = new Float64Array(t.length)),
        (a = new Float64Array(t.length)),
        (n = new Float64Array(t.length)),
        (l = new Float64Array(t.length)),
        ra(i, a, n, l, t, s.distance),
        ia.set(e, i),
        aa.set(e, a),
        na.set(e, n),
        la.set(e, l));
      const h = vs(this, xt);
      (h && (ia.delete(h), aa.delete(h), na.delete(h), la.delete(h)),
        _s(this, xt, h));
    }
    ((this.data = i), this._calcExtremum());
  }
  _drawGraph(t) {
    const { data: s, settings: e } = this,
      { style: i } = e;
    (i.null.visible && this._drawValueLine("null", 0, i.null),
      s && this.drawLine(t, s, i.line));
  }
}
function ra(t, s, e, i, a, n, l = !1) {
  (ue(s, a, n, 1, l), ue(e, s, n, 1, l), ue(i, e, n, 1, l));
  let h = 3 * (n - 1);
  l && (h = a.length - 2);
  for (let r = h, o = a.length; r < o; r++)
    0 !== i[r - 1] ? (t[r] = (i[r] - i[r - 1]) / i[r - 1]) : (t[r] = 0);
}
((xt = new WeakMap()),
  (Ft = new WeakSet()),
  (St = function () {
    const { params: t } = this.settings;
    return [t.distance, this.baseHash()].join("-");
  }));
const oa = new Map();
class ca extends ce {
  constructor() {
    (super(...arguments), bs(this, Tt), bs(this, Wt));
  }
  get yMin() {
    return -100;
  }
  get yMax() {
    return 0;
  }
  get yHeight() {
    return this.section.height - 20;
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _titleArguments() {
    return [this.settings.params.distance];
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = this.chart.bars,
      i = ks(this, Tt, Ht).call(this);
    let a = oa.get(i);
    if (a) t && ga(a, e, s.distance, !0);
    else {
      ((a = new Float64Array(e.length)), ga(a, e, s.distance), oa.set(i, a));
      const t = vs(this, Wt);
      (t && oa.delete(t), _s(this, Wt, t));
    }
    this.data = a;
  }
  _drawGraph(t) {
    const { chart: s, data: e, settings: i } = this,
      { style: a } = i;
    if (a.background.visible) {
      const e = this.valueToY(-80),
        i = this.valueToY(-20) - e;
      (t.beginFill(a.background.color, a.background.alpha),
        t.drawRect(0, e, s.state.graphWidth, i),
        t.endFill());
    }
    (a.up.visible && this._drawValueLine("down", -20, a.down),
      a.down.visible && this._drawValueLine("up", -80, a.up),
      e && this.drawLine(t, e, a.line));
  }
}
function ga(t, s, e, i = !1) {
  let a = e;
  const n = s.length;
  for (i && (a = n - 1); a < n; ) {
    let i = Number.MIN_VALUE,
      n = Number.MAX_VALUE,
      l = a - e + 1;
    for (; l <= a; )
      ((n = Math.min(n, s.low(l))), (i = Math.max(i, s.high(l))), (l += 1));
    ((t[a] = ((i - s.close(a)) / (i - n)) * -100), (a += 1));
  }
}
((Wt = new WeakMap()),
  (Tt = new WeakSet()),
  (Ht = function () {
    const { params: t } = this.settings;
    return [t.distance, this.baseHash()].join("-");
  }));
const ua = new Map(),
  da = new Map(),
  pa = new Map();
function wa(t, s, e) {
  if (t > 0) {
    const i = 2 / (t + 1);
    return e * i + s * (1 - i);
  }
  return 0;
}
class ya extends ce {
  constructor() {
    (super(...arguments),
      bs(this, Dt),
      bs(this, jt),
      bs(this, Ot),
      bs(this, Pt),
      bs(this, It));
  }
  _titleArguments() {
    return [this.settings.params.distance];
  }
  value(t) {
    const { settings: s, chart: e } = this,
      { style: i, flags: a } = s,
      n = 4 & a ? s.digits : e.digits,
      l = [];
    if (vs(this, jt) && vs(this, Ot) && vs(this, Pt)) {
      let s;
      ((s = vs(this, jt)[t]),
        null != s && l.push({ color: i.base.color, value: s.toFixed(n) }),
        (s = vs(this, Ot)[t]),
        null != s && l.push({ color: i.minus.color, value: s.toFixed(n) }),
        (s = vs(this, Pt)[t]),
        null != s && l.push({ color: i.plus.color, value: s.toFixed(n) }));
    }
    return l;
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = ks(this, Dt, Et).call(this);
    let i = ua.get(e),
      a = da.get(e),
      n = pa.get(e);
    const l = this.chart.bars;
    (i && a && n
      ? t && ma(i, a, n, l, s.distance, !0)
      : ((i = new Float64Array(l.length)),
        (a = new Float64Array(l.length)),
        (n = new Float64Array(l.length)),
        ma(i, a, n, l, s.distance),
        ua.set(e, i),
        da.set(e, a),
        pa.set(e, n),
        vs(this, It) &&
          (ua.delete(vs(this, It)),
          da.delete(vs(this, It)),
          pa.delete(vs(this, It))),
        _s(this, It, e)),
      _s(this, jt, i),
      _s(this, Ot, a),
      _s(this, Pt, n),
      this._calcExtremum(i, a, n));
  }
  _drawGraph(t) {
    const { settings: s } = this,
      { style: e } = s;
    (e.base.visible && vs(this, jt) && this.drawLine(t, vs(this, jt), e.base),
      e.plus.visible && vs(this, Pt) && this.drawLine(t, vs(this, Pt), e.plus),
      e.minus.visible &&
        vs(this, Ot) &&
        this.drawLine(t, vs(this, Ot), e.minus));
  }
}
function ma(t, s, e, i, a, n = !1) {
  let l = 1;
  n && (l = i.length - 1);
  for (let h = l, r = i.length; h < r; h++) {
    const n = i.high(h),
      l = i.low(h),
      r = i.high(h - 1),
      o = i.low(h - 1),
      c = i.close(h - 1);
    let g = Math.max(n - r, 0),
      u = Math.max(o - l, 0);
    g > u ? (u = 0) : g < u ? (g = 0) : ((g = 0), (u = 0));
    const d = Math.max(
      Math.max(Math.abs(n - l), Math.abs(n - c)),
      Math.abs(l - c),
    );
    let p, w;
    (0 !== d ? ((p = (g / d) * 100), (w = (u / d) * 100)) : ((p = 0), (w = 0)),
      (e[h] = wa(a, e[h - 1], p)),
      (s[h] = wa(a, s[h - 1], w)));
    let y = e[h] + s[h];
    ((y = 0 !== y ? 100 * Math.abs((e[h] - s[h]) / y) : 0),
      (t[h] = wa(a, t[h - 1], y)));
  }
}
((jt = new WeakMap()),
  (Ot = new WeakMap()),
  (Pt = new WeakMap()),
  (It = new WeakMap()),
  (Dt = new WeakSet()),
  (Et = function () {
    return [this.settings.params.distance, this.baseHash()].join("-");
  }));
const fa = new Map();
class Aa extends ce {
  constructor() {
    (super(...arguments), bs(this, Gt));
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = this._averageHash();
    let i = fa.get(e);
    if (i) t && ue(i, this._getPrices(t), s.distance, s.method, !0);
    else {
      const t = this._getPrices();
      ((i = new Float64Array(t.length)),
        ue(i, t, s.distance, s.method),
        fa.set(e, i),
        vs(this, Gt) && fa.delete(vs(this, Gt)),
        _s(this, Gt, e));
    }
    this.data = i;
  }
  isDrawingAllowed() {
    const { params: t } = this.settings,
      s = this.chart.bars;
    let e = super.isDrawingAllowed();
    if (e) {
      if (s.length < t.distance && 1 !== t.method) return !1;
      e = !0;
    }
    return e;
  }
  _averageHash() {
    const { params: t } = this.settings;
    return [t.method, t.shift, t.distance, this.baseHash()].join("-");
  }
}
Gt = new WeakMap();
const Ma = new Map();
class va extends Aa {
  constructor() {
    (super(...arguments), bs(this, Vt), bs(this, Lt), bs(this, Ct));
  }
  get yMin() {
    return this.chart.state.extrema[0] / this.getYDigits();
  }
  get yMax() {
    return this.chart.state.extrema[1] / this.getYDigits();
  }
  value(t) {
    const { style: s } = this.settings,
      e = this.chart.digits,
      i = [],
      a = this.data,
      n = vs(this, Lt);
    if (a && n) {
      let l = a[t];
      const h = n[t];
      if (null != l) {
        let t = s.base.color;
        (i.push({ color: t, value: l.toFixed(e) }),
          (t = s.up.color),
          (l += h),
          i.push({ color: t, value: l.toFixed(e) }),
          (t = s.down.color),
          (l -= h),
          i.push({ color: t, value: l.toFixed(e) }));
      }
    }
    return i;
  }
  _calc(t) {
    if ((super._calc(t), !this.data)) return;
    const s = ks(this, Vt, Rt).call(this);
    let e = Ma.get(s);
    (e
      ? t && ks(this, Vt, Yt).call(this, e, this.data, !0)
      : ((e = new Float64Array(this.data.length)),
        ks(this, Vt, Yt).call(this, e, this.data),
        Ma.set(s, e),
        vs(this, Ct) && Ma.delete(vs(this, Ct)),
        _s(this, Ct, s)),
      _s(this, Lt, e));
  }
  _drawGraph(t) {
    const { chart: s, settings: e } = this,
      { state: i } = s,
      { style: a } = e,
      n = this.data,
      l = vs(this, Lt);
    let h = i.startX(),
      r = !1;
    const { shift: o } = e.params;
    let c = null,
      g = null,
      u = null,
      d = null;
    (a.up.visible &&
      ((c = this._createGraphics("up")),
      c.lineStyle(a.up.thickness, a.up.color),
      t.addChild(c)),
      a.down.visible &&
        ((g = this._createGraphics("down")),
        g.lineStyle(a.down.thickness, a.down.color),
        t.addChild(g)),
      a.base.visible &&
        ((u = this._createGraphics("base")),
        u.lineStyle(a.base.thickness, a.base.color),
        t.addChild(u)),
      a.background.visible &&
        ((d = this._createGraphics("bg")),
        d.beginFill(a.background.color, a.background.alpha),
        t.addChild(d)));
    const p = [],
      w = [],
      y = i.getFrom();
    for (let m = y, f = y + i.getCount() + 1 + o; m < f; m++) {
      if (m >= 0) {
        const t = n && n[m - o];
        if (t) {
          const s = l && l[m - o];
          if (s) {
            const e = this.valueToY(t),
              i = this.valueToY(t - s),
              a = this.valueToY(t + s);
            (d && ((p[p.length] = [h, a]), (w[w.length] = [h, i])),
              r
                ? (u && u.lineTo(h, e),
                  g && g.lineTo(h, i),
                  c && c.lineTo(h, a))
                : (u && u.moveTo(h, e),
                  g && g.moveTo(h, i),
                  c && c.moveTo(h, a),
                  (r = !0)));
          }
        }
      }
      h += i.getStep();
    }
    d &&
      (p.concat(w.reverse()).forEach((t, s) => {
        d && (s > 0 ? d.lineTo(t[0], t[1]) : d.moveTo(t[0], t[1]));
      }),
      d.endFill());
  }
}
((Lt = new WeakMap()),
  (Ct = new WeakMap()),
  (Vt = new WeakSet()),
  (Yt = function (t, s, e = !1) {
    const i = this.chart.bars,
      { deviation: a, distance: n } = this.settings.params,
      l = i.length;
    let h = n - 1;
    e && (h = i.length - n - 1);
    for (let r = h; r < l; r++) {
      let e = 0;
      const i = s[r];
      let l = r + 1 - n;
      for (; l <= r; ) {
        const t = this._getPrice(l) - i;
        ((l += 1), (e += t * t));
      }
      t[r] = a * Math.sqrt(e / n);
    }
  }),
  (Rt = function () {
    const { params: t } = this.settings;
    return [
      t.method,
      t.shift,
      t.distance,
      t.deviation,
      this.baseHash(),
      t.deviation,
    ].join("-");
  }));
class ba extends Aa {
  constructor() {
    (super(...arguments), bs(this, Bt));
  }
  get yMin() {
    return this.chart.state.extrema[0] / this.getYDigits();
  }
  get yMax() {
    return this.chart.state.extrema[1] / this.getYDigits();
  }
  value(t) {
    const { style: s } = this.settings,
      e = this.chart.digits,
      i = [],
      a = this.data;
    if (a) {
      let n = a[t];
      if (null != n) {
        const t = ks(this, Bt, Nt).call(this);
        let a = s.base.color;
        (i.push({ color: a, value: n.toFixed(e) }),
          (a = s.up.color),
          (n += t),
          i.push({ color: a, value: n.toFixed(e) }),
          (a = s.up.color),
          (n -= 2 * t),
          i.push({ color: a, value: n.toFixed(e) }));
      }
    }
    return i;
  }
  _drawGraph(t) {
    const { chart: s, settings: e } = this,
      { state: i } = s,
      { style: a } = e;
    let n = i.startX(),
      l = !1;
    const { shift: h } = e.params,
      r = ks(this, Bt, Nt).call(this);
    let o = null,
      c = null,
      g = null,
      u = null;
    (a.up.visible &&
      ((o = this._createGraphics("up")),
      o.lineStyle(a.up.thickness, a.up.color),
      t.addChild(o)),
      a.down.visible &&
        ((c = this._createGraphics("down")),
        c.lineStyle(a.down.thickness, a.down.color),
        t.addChild(c)),
      a.base.visible &&
        ((g = this._createGraphics("base")),
        g.lineStyle(a.base.thickness, a.base.color),
        t.addChild(g)),
      a.background.visible &&
        ((u = this._createGraphics("bg")),
        u.beginFill(a.background.color, a.background.alpha),
        t.addChild(u)));
    const d = [],
      p = [],
      w = i.getFrom();
    for (let y = w, m = w + i.getCount() + 1 + h; y < m; y++) {
      if (y >= 0) {
        const t = this.data && this.data[y - h];
        if (t) {
          const s = this.valueToY(t),
            e = this.valueToY(t - r),
            i = this.valueToY(t + r);
          (u && ((d[d.length] = [n, i]), (p[p.length] = [n, e])),
            l
              ? (g && g.lineTo(n, s), c && c.lineTo(n, e), o && o.lineTo(n, i))
              : (g && g.moveTo(n, s),
                c && c.moveTo(n, e),
                o && o.moveTo(n, i),
                (l = !0)));
        }
      }
      n += i.getStep();
    }
    u &&
      (d.concat(p.reverse()).forEach((t, s) => {
        u && (s > 0 ? u.lineTo(t[0], t[1]) : u.moveTo(t[0], t[1]));
      }),
      u.endFill());
  }
  _averageHash() {
    const { params: t } = this.settings;
    return [super._averageHash(), t.deviation].join("-");
  }
}
((Bt = new WeakSet()),
  (Nt = function () {
    const { dataMaxValue: t } = this.chart.state,
      { deviation: s } = this.settings.params;
    return (t / 100) * s;
  }));
const _a = new Map(),
  ka = new Map(),
  xa = new Map(),
  Fa = new Map(),
  Sa = new Map();
class Wa extends ce {
  constructor() {
    (super(...arguments),
      bs(this, Jt),
      bs(this, Xt),
      bs(this, Ut),
      bs(this, Kt),
      bs(this, qt),
      bs(this, zt),
      bs(this, $t));
  }
  get yMin() {
    return this.chart.state.extrema[0] / this.getYDigits();
  }
  get yMax() {
    return this.chart.state.extrema[1] / this.getYDigits();
  }
  _titleArguments() {
    const { params: t } = this.settings;
    return [t.tenkan, t.kijun, t.senkou];
  }
  value(t) {
    const { settings: s } = this,
      { style: e, flags: i } = s,
      a = 4 & i ? s.digits : this.chart.digits,
      n = [];
    if (
      vs(this, Xt) &&
      vs(this, Ut) &&
      vs(this, Kt) &&
      vs(this, qt) &&
      vs(this, zt)
    ) {
      let s;
      ((s = vs(this, Xt)[t]),
        null != s && n.push({ color: e.tenkan.color, value: s.toFixed(a) }),
        (s = vs(this, Ut)[t]),
        null != s && n.push({ color: e.kijun.color, value: s.toFixed(a) }),
        (s = vs(this, Kt)[t]),
        null != s && n.push({ color: e.chikou.color, value: s.toFixed(a) }),
        (s = vs(this, qt)[t]),
        null != s && n.push({ color: e.up.line.color, value: s.toFixed(a) }),
        (s = vs(this, zt)[t]),
        null != s && n.push({ color: e.down.line.color, value: s.toFixed(a) }));
    }
    return n;
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = ks(this, Jt, ss).call(this);
    let i = _a.get(e),
      a = ka.get(e),
      n = xa.get(e),
      l = Fa.get(e),
      h = Sa.get(e);
    const r = this.chart.bars;
    if (i && a && n && l && h)
      t && Ha(i, a, n, l, h, r, s.tenkan, s.kijun, s.senkou, !0);
    else {
      ((i = new Float64Array(r.length)),
        (a = new Float64Array(r.length)),
        (n = new Float64Array(r.length)),
        (l = new Float64Array(r.length)),
        (h = new Float64Array(r.length)),
        Ha(i, a, n, l, h, r, s.tenkan, s.kijun, s.senkou),
        _a.set(e, i),
        ka.set(e, a),
        xa.set(e, n),
        Fa.set(e, l),
        Sa.set(e, h));
      const t = vs(this, $t);
      (t &&
        (_a.delete(t), ka.delete(t), xa.delete(t), Fa.delete(t), Sa.delete(t)),
        _s(this, $t, e));
    }
    (_s(this, Xt, i),
      _s(this, Kt, a),
      _s(this, Ut, n),
      _s(this, qt, l),
      _s(this, zt, h));
  }
  _drawGraph(t) {
    (ks(this, Jt, Qt).call(this, t),
      ks(this, Jt, Zt).call(this, t),
      ks(this, Jt, ts).call(this, t));
  }
}
function Ta(t, s) {
  let e, i, a;
  for (let n = 0, l = s.length; n < l; n++)
    ((e = s[n]),
      (i = e[0]),
      (a = Math.min(e[1][0], e[1][1])),
      0 === n ? t.moveTo(i, a) : t.lineTo(i, a));
  for (let n = s.length - 1; n >= 0; n--)
    ((e = s[n]), (i = e[0]), (a = Math.max(e[1][0], e[1][1])), t.lineTo(i, a));
}
function Ha(t, s, e, i, a, n, l, h, r, o = !1) {
  let c = 1;
  o && (c = n.length - 1);
  for (let g = c, u = n.length; g < u; g++) {
    let o, c;
    ((s[g] = n.close(g)),
      (o = ja(n, l, g)),
      (c = Oa(n, l, g)),
      (t[g] = (o + c) / 2),
      (o = ja(n, h, g)),
      (c = Oa(n, h, g)),
      (e[g] = (o + c) / 2),
      (i[g] = (t[g] + e[g]) / 2),
      (o = ja(n, r, g)),
      (c = Oa(n, r, g)),
      (a[g] = (o + c) / 2));
  }
}
function ja(t, s, e) {
  let i, a;
  i = t.high(e);
  for (let n = e; n > e - s && n >= 0; n--) ((a = t.high(n)), i < a && (i = a));
  return i;
}
function Oa(t, s, e) {
  let i, a;
  i = t.low(e);
  for (let n = e; n > e - s && n >= 0; n--) ((a = t.low(n)), i > a && (i = a));
  return i;
}
((Xt = new WeakMap()),
  (Ut = new WeakMap()),
  (Kt = new WeakMap()),
  (qt = new WeakMap()),
  (zt = new WeakMap()),
  ($t = new WeakMap()),
  (Jt = new WeakSet()),
  (Qt = function (t) {
    const { style: s } = this.settings;
    let e, i;
    (s.tenkan.visible &&
      ((e = this._createGraphics("tenkan")),
      e.lineStyle(s.tenkan.thickness, s.tenkan.color),
      t.addChild(e)),
      s.kijun.visible &&
        ((i = this._createGraphics("kijun")),
        i.lineStyle(s.kijun.thickness, s.kijun.color),
        t.addChild(i)));
    let a = this.chart.state.startX(),
      n = !1;
    const l = this.chart.state.getFrom() + this.chart.state.getCount() + 1;
    for (let h = this.chart.state.getFrom(); h < l; h++) {
      if (h >= 0) {
        const t = vs(this, Xt) && vs(this, Xt)[h],
          s = vs(this, Ut) && vs(this, Ut)[h];
        if ("number" == typeof t && "number" == typeof s) {
          const l = this.valueToY(t),
            h = this.valueToY(s);
          n
            ? (e && e.lineTo(a, l), i && i.lineTo(a, h))
            : (e && e.moveTo(a, l), i && i.moveTo(a, h), (n = !0));
        }
      }
      a += this.chart.state.getStep();
    }
  }),
  (Zt = function (t) {
    const { style: s } = this.settings;
    let e;
    s.chikou.visible &&
      ((e = this._createGraphics("chikou")),
      e.lineStyle(s.chikou.thickness, s.chikou.color),
      t.addChild(e));
    let i = this.chart.state.startX(),
      a = !1;
    const n =
      this.chart.state.getFrom() +
      this.chart.state.getCount() +
      this.settings.params.kijun +
      1;
    for (let l = this.chart.state.getFrom(); l < n; l++) {
      if (l >= 0) {
        const t = vs(this, Kt) && vs(this, Kt)[l];
        if ("number" == typeof t && e) {
          const s = this.valueToY(t),
            n = i - this.chart.state.getStep() * this.settings.params.kijun;
          a ? e.lineTo(n, s) : (e.moveTo(n, s), (a = !0));
        }
      }
      i += this.chart.state.getStep();
    }
  }),
  (ts = function (t) {
    const { style: s } = this.settings;
    let e,
      i,
      a,
      n = !0;
    const l = [],
      h = [];
    let r = [];
    (s.up.line.visible &&
      ((e = this._createGraphics("up")),
      e.lineStyle(s.up.line.thickness, s.up.line.color),
      t.addChild(e)),
      s.down.line.visible &&
        ((i = this._createGraphics("down")),
        i.lineStyle(s.down.line.thickness, s.down.line.color),
        t.addChild(i)),
      (s.up.background.visible || s.down.background.visible) &&
        ((a = this._createGraphics("cloud")), t.addChild(a)));
    const { state: o } = this.chart;
    let c = o.startX() - o.getStep() * (this.settings.params.kijun + 1),
      g = !1;
    const u = this.chart.state.getFrom() + this.chart.state.getCount() + 1;
    for (
      let d = this.chart.state.getFrom() - this.settings.params.kijun - 1;
      d < u;
      d++
    ) {
      if (d >= 0) {
        const t = vs(this, qt) && vs(this, qt)[d],
          s = vs(this, zt) && vs(this, zt)[d];
        if ("number" == typeof t && "number" == typeof s) {
          const a = this.valueToY(t),
            o = this.valueToY(s),
            u = c + this.chart.state.getStep() * this.settings.params.kijun;
          (g
            ? (e && e.lineTo(u, a), i && i.lineTo(u, o))
            : (e && e.moveTo(u, a), i && i.moveTo(u, o), (g = !0)),
            a >= o !== n &&
              (r.push([u, [a, o]]),
              n ? h.push(r) : l.push(r),
              (n = a >= o),
              (r = [])),
            r.push([u, [a, o]]));
        }
      }
      c += this.chart.state.getStep();
    }
    (n ? h.push(r) : l.push(r),
      a &&
        (s.up.background.visible &&
          l.forEach((t) => {
            a &&
              (a.beginFill(s.up.background.color, s.up.background.alpha),
              Ta(a, t),
              a.endFill());
          }),
        s.down.background.visible &&
          h.forEach((t) => {
            a &&
              (a.beginFill(s.down.background.color, s.down.background.alpha),
              Ta(a, t),
              a.endFill());
          })));
  }),
  (ss = function () {
    const { params: t } = this.settings;
    return [t.tenkan, t.kijun, t.senkou, this.baseHash()].join("-");
  }));
class Pa extends Aa {
  get yMin() {
    return this.chart.state.extrema[0] / this.getYDigits();
  }
  get yMax() {
    return this.chart.state.extrema[1] / this.getYDigits();
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _drawGraph(t) {
    this.data &&
      this.drawLine(
        t,
        this.data,
        this.settings.style.line,
        this.settings.params.shift,
      );
  }
}
const Ia = new Map(),
  Da = new Map(),
  Ea = new Map();
class Ga extends ce {
  constructor() {
    (super(...arguments), bs(this, is), bs(this, es));
  }
  get yMin() {
    return this.chart.state.extrema[0] / this.getYDigits();
  }
  get yMax() {
    return this.chart.state.extrema[1] / this.getYDigits();
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _titleArguments() {
    const { params: t } = this.settings;
    return [t.step, t.max];
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = this.chart.bars,
      i = ks(this, is, as).call(this);
    let a = Ia.get(i),
      n = Da.get(i),
      l = Ea.get(i);
    if (a && n && l) t && La(a, n, l, e, s.step, s.max, !0);
    else {
      ((a = new Float64Array(e.length)),
        (n = new Float64Array(e.length)),
        (l = new Float64Array(e.length)),
        La(a, n, l, e, s.step, s.max),
        Ia.set(i, a),
        Da.set(i, n),
        Ea.set(i, l));
      const t = vs(this, es);
      (t && (Ia.delete(t), Ia.delete(t), Ia.delete(t)), _s(this, es, t));
    }
    this.data = a;
  }
  _drawGraph(t) {
    const { chart: s, settings: e } = this,
      { state: i } = s,
      { style: a } = e,
      n = this.data;
    let l = i.startX();
    const h = i.getFrom(),
      r = a.line.thickness + 1;
    t.beginFill(a.line.color);
    for (let o = h, c = h + i.getCount() + 1; o < c; o++) {
      if (o >= 0) {
        const s = n && n[o];
        if (s) {
          const e = this.valueToY(s);
          t.drawCircle(l, e, r);
        }
      }
      l += i.getStep();
    }
    t.endFill();
  }
}
function La(t, s, e, i, a, n, l = !1) {
  let h,
    r = i.length - 2,
    o = 0;
  l ||
    ((r = 1),
    (o = 0),
    (h = !1),
    (e[0] = a),
    (e[1] = a),
    (t[0] = i.high(0)),
    (t[1] = Ca(i, r, o)),
    (s[0] = i.low(r)),
    (s[1] = s[0]));
  for (let c = r; c < i.length - 1; c++) {
    const l = i.high(c),
      r = i.low(c),
      g = i.high(c - 1),
      u = i.low(c - 1);
    (h
      ? t[c] > r &&
        ((t[c] = Ca(i, o, c)), (s[c] = r), (e[c] = a), (o = c), (h = !1))
      : t[c] < l &&
        ((t[c] = Va(i, o, c)), (s[c] = l), (e[c] = a), (o = c), (h = !0)),
      h
        ? (l > s[c - 1] && c !== o
            ? ((s[c] = l), (e[c] = e[c - 1] + a), (e[c] = Math.min(e[c], n)))
            : c !== o && ((e[c] = e[c - 1]), (s[c] = s[c - 1])),
          (t[c + 1] = t[c] + e[c] * (s[c] - t[c])),
          (t[c + 1] > r || t[c + 1] > u) && (t[c + 1] = Math.min(r, u)))
        : (r < s[c - 1] && c !== o
            ? ((s[c] = r), (e[c] = e[c - 1] + a), (e[c] = Math.min(e[c], n)))
            : c !== o && ((e[c] = e[c - 1]), (s[c] = s[c - 1])),
          (t[c + 1] = t[c] + e[c] * (s[c] - t[c])),
          (t[c + 1] < l || t[c + 1] < g) && (t[c + 1] = Math.max(l, g))));
  }
}
function Ca(t, s, e) {
  let i = t.high(s);
  for (let a = s; a <= e; a++) {
    const s = t.high(a);
    i < s && (i = s);
  }
  return i;
}
function Va(t, s, e) {
  let i = t.low(s);
  for (let a = s; a <= e; a++) {
    const s = t.low(a);
    i > s && (i = s);
  }
  return i;
}
((es = new WeakMap()),
  (is = new WeakSet()),
  (as = function () {
    const { params: t } = this.settings;
    return [t.step, t.max, this.baseHash()].join("-");
  }));
const Ya = new Map();
class Ra extends Aa {
  constructor() {
    (super(...arguments), bs(this, ns));
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _calc(t) {
    super._calc(t);
    const { params: s } = this.settings,
      e = this.data,
      i = this._averageHash();
    let a = Ya.get(i);
    if (!a && e) {
      const t = this._getPrices();
      ((a = new Float64Array(t.length)),
        Ba(a, e, t, s.distance),
        Ya.set(i, a),
        vs(this, ns) && Ya.delete(vs(this, ns)),
        _s(this, ns, i));
    } else t && e && a && Ba(a, e, this._getPrices(t), s.distance, !0);
    ((this.data = a), a && this._calcExtremum(a));
  }
  _drawGraph(t) {
    this.data &&
      this.drawLine(
        t,
        this.data,
        this.settings.style.line,
        this.settings.params.shift,
      );
  }
}
function Ba(t, s, e, i, a = !1) {
  let n = i - 1;
  a && (n = e.length - 1);
  for (let l = n, h = e.length; l < h; l++) t[l] = Na(s, e, i, l);
}
function Na(t, s, e, i) {
  let a = 0;
  for (let n = 0; n < e; n++) a += (s[i - n] - t[i]) ** 2;
  return Math.sqrt(a / e);
}
ns = new WeakMap();
const Xa = new Map();
class Ua extends ce {
  constructor() {
    (super(...arguments), bs(this, hs), bs(this, ls));
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  title() {
    return this.settings.title;
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = this.chart.bars,
      i = ks(this, hs, rs).call(this);
    let a = Xa.get(i);
    (a
      ? t && Ka(a, e, s.volumes, !0)
      : ((a = new Float64Array(e.length)),
        Ka(a, e, s.volumes),
        Xa.set(i, a),
        vs(this, ls) && Xa.delete(vs(this, ls)),
        _s(this, ls, i)),
      (this.data = a),
      this._calcExtremum(a));
  }
  _drawGraph(t) {
    const { data: s, settings: e } = this,
      { style: i } = e;
    s && this.drawLine(t, s, i.line);
  }
}
function Ka(t, s, e, i = !1) {
  let a = 0;
  const n = t.length;
  for (i && (a = t.length - 1); a < n; ) {
    const i = s.close(a),
      n = s.high(a),
      l = s.low(a);
    let h;
    switch (e) {
      case 0:
        h = s.tickVolume(a);
        break;
      case 1:
        h = s.realVolume(a);
        break;
      default:
        h = 0;
    }
    let r = i - l - (n - i);
    (0 !== r && (r = n === l ? 0 : (r / (n - l)) * (h || 0)),
      a > 0 && (r += t[a - 1] || 0),
      (t[a] = r || 0),
      (a += 1));
  }
}
((ls = new WeakMap()),
  (hs = new WeakSet()),
  (rs = function () {
    const { params: t } = this.settings;
    return [this.baseHash(), t.volumes].join("-");
  }));
const qa = new Map();
class za extends ce {
  constructor() {
    (super(...arguments), bs(this, os));
  }
  get yMin() {
    return Math.min(20, this._yMin);
  }
  get yMax() {
    return Math.max(80, this._yMax);
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  _titleArguments() {
    return [this.settings.params.distance];
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = this.chart.bars,
      i = ks(this, os, cs).call(this);
    let a = qa.get(i);
    if (a) t && $a(a, this._getPrices(t), e, s.distance, s.volumes, !0);
    else {
      const t = this._getPrices();
      ((a = new Float64Array(e.length)),
        $a(a, t, e, s.distance, s.volumes),
        qa.set(i, a));
      const n = this._activeMFIHash;
      (n && qa.delete(n), (this._activeMFIHash = n));
    }
    ((this.data = a), this._calcExtremum(a));
  }
  _drawGraph(t) {
    const { chart: s, data: e, settings: i } = this,
      { state: a } = s,
      { style: n } = i;
    if (n.background.visible) {
      const s = this.valueToY(80),
        e = this.valueToY(20) - s;
      (t.beginFill(n.background.color, n.background.alpha),
        t.drawRect(0, s, a.graphWidth, e),
        t.endFill());
    }
    (n.up.visible && this._drawValueLine("up", 80, n.up),
      n.down.visible && this._drawValueLine("down", 20, n.down),
      e && this.drawLine(t, e, n.line));
  }
}
function $a(t, s, e, i, a, n = !1) {
  let l = i;
  const h = e.length;
  for (n && (l = h - 1); l < h; l++) {
    let n = 0,
      h = 0,
      r = s[l];
    for (let t = 1; t <= i; t++) {
      const i = l - t,
        o = s[i];
      (r > o && (n += Ja(e, a, i + 1) * r),
        r < o && (h += Ja(e, a, i + 1) * r),
        (r = o));
    }
    t[l] = 0 !== h ? 100 - 100 / (1 + n / h) : 100;
  }
}
function Ja(t, s, e) {
  switch (s) {
    case 0:
      return t.tickVolume(e);
    case 1:
      return t.realVolume(e);
    default:
      return 0;
  }
}
((os = new WeakSet()),
  (cs = function () {
    const { params: t } = this.settings;
    return [t.distance, t.volumes, this.baseHash()].join("-");
  }));
const Qa = new Map();
class Za extends ce {
  constructor() {
    (super(...arguments), bs(this, us), bs(this, gs));
  }
  value(t) {
    return this.data && this.data[t]
      ? [
          {
            color: this.settings.style.line.color,
            value: this.data[t].toFixed(this.settings.digits),
          },
        ]
      : [];
  }
  title() {
    return this.settings.title;
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = this.chart.bars,
      i = ks(this, us, ds).call(this);
    let a = Qa.get(i);
    if (a) t && tn(a, e, this._getPrices(t), s.volumes, !0);
    else {
      const t = this._getPrices();
      ((a = new Float64Array(e.length)),
        tn(a, e, t, s.volumes),
        Qa.set(i, a),
        vs(this, gs) && Qa.delete(vs(this, gs)),
        _s(this, gs, i));
    }
    ((this.data = a), this._calcExtremum());
  }
  _drawGraph(t) {
    const { data: s, settings: e } = this,
      { style: i } = e;
    s && this.drawLine(t, s, i.line);
  }
}
function tn(t, s, e, i, a = !1) {
  let n;
  const l = e.length;
  for (a ? (n = l - 1) : ((n = 1), (t[0] = sn(s, i, 0))); n < l; n++) {
    const e = sn(s, i, n) || 0,
      a = s.close(n - 1) || 0,
      l = s.close(n) || 0;
    t[n] = l < a ? t[n - 1] - e : l > a ? t[n - 1] + e : t[n - 1];
  }
}
function sn(t, s, e) {
  switch (s) {
    case 0:
      return t.tickVolume(e);
    case 1:
      return t.realVolume(e);
    default:
      return 0;
  }
}
((gs = new WeakMap()),
  (us = new WeakSet()),
  (ds = function () {
    const { params: t } = this.settings;
    return [this.baseHash(), t.volumes].join("-");
  }));
const en = new Map(),
  an = new Map();
class nn extends ce {
  constructor() {
    (super(...arguments),
      bs(this, ms),
      bs(this, ps),
      bs(this, ws),
      bs(this, ys));
  }
  get yMin() {
    return 0;
  }
  get yMax() {
    return (super.yMax * (this.yHeight + 40)) / this.yHeight;
  }
  get yHeight() {
    return this.section.height;
  }
  title() {
    return this.settings.title;
  }
  value(t) {
    const { settings: s } = this,
      { style: e, digits: i } = s,
      a = [];
    if (vs(this, ps)) {
      const s = vs(this, ps)[t];
      if (s > 0) {
        const { color: t } = e.up;
        a.push({ value: s.toFixed(i), color: t });
      }
    }
    if (vs(this, ws)) {
      const s = vs(this, ws)[t];
      if (s > 0) {
        const { color: t } = e.down;
        a.push({ value: s.toFixed(i), color: t });
      }
    }
    return a;
  }
  _before() {
    (super._before(), (this.yNull = this.section.height));
  }
  _calc(t) {
    super._calc();
    const { params: s } = this.settings,
      e = this.chart.bars,
      i = ks(this, ms, fs).call(this);
    let a = en.get(i),
      n = an.get(i);
    if (a && n) t && ln(a, n, e, s.volumes, !0);
    else {
      ((a = new Float64Array(e.length)),
        (n = new Float64Array(e.length)),
        ln(a, n, e, s.volumes),
        en.set(i, a),
        an.set(i, n));
      const t = vs(this, ys);
      (t && (en.delete(t), an.delete(t)), _s(this, ys, t));
    }
    (_s(this, ps, a), _s(this, ws, n), this._calcExtremum(a, n));
  }
  _drawGraph(t) {
    const { settings: s } = this,
      { style: e } = s;
    (vs(this, ps) && this.drawHistogram(t, vs(this, ps), e.up),
      vs(this, ws) && this.drawHistogram(t, vs(this, ws), e.down));
  }
}
function ln(t, s, e, i, a = !1) {
  let n = 0;
  const l = e.length;
  for (a && (n = l - 1); n < l; n++) {
    const a = hn(e, i, n);
    a >= (n > 0 ? hn(e, i, n - 1) : 0) ? (t[n] = a) : (s[n] = a);
  }
}
function hn(t, s, e) {
  switch (s) {
    case 0:
      return t.tickVolume(e);
    case 1:
      return t.realVolume(e);
    default:
      return 0;
  }
}
((ps = new WeakMap()),
  (ws = new WeakMap()),
  (ys = new WeakMap()),
  (ms = new WeakSet()),
  (fs = function () {
    const { params: t } = this.settings;
    return [t.volumes, this.baseHash()].join("-");
  }));
const rn = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      AnalysisAD: Ua,
      AnalysisADMI: ya,
      AnalysisADMISettings: Ts,
      AnalysisADSettings: Hs,
      AnalysisAO: ve,
      AnalysisAOSettings: js,
      AnalysisATR: Qe,
      AnalysisATRSettings: Os,
      AnalysisAlligator: ye,
      AnalysisAlligatorSettings: Ps,
      AnalysisAwesome: Se,
      AnalysisAwesomeSettings: Is,
      AnalysisBB: va,
      AnalysisBBSettings: Ds,
      AnalysisBears: ei,
      AnalysisBearsSettings: Es,
      AnalysisBulls: li,
      AnalysisBullsSettings: Gs,
      AnalysisCCI: ui,
      AnalysisCCISettings: Ls,
      AnalysisDeMarker: fi,
      AnalysisDeMarkerSettings: Cs,
      AnalysisEnvelopes: ba,
      AnalysisEnvelopesSettings: Vs,
      AnalysisFI: bi,
      AnalysisFISettings: Ys,
      AnalysisFractals: je,
      AnalysisFractalsSettings: Rs,
      AnalysisEngulfingPatterns: Ee2,
      AnalysisEngulfingPatternsSettings: EpS,
      AnalysisAlerts: Ae2,
      AnalysisAlertsSettings: ApS,
      AnalysisXover: Xe2,
      AnalysisXoverSettings: XpS,
      AnalysisGO: Ve,
      AnalysisGOSettings: Bs,
      AnalysisIKH: Wa,
      AnalysisIKHSettings: Ns,
      AnalysisMA: Pa,
      AnalysisMABase: Aa,
      AnalysisMACD: Wi,
      AnalysisMACDSettings: Xs,
      AnalysisMACD_: Wi2,
      AnalysisMACD_Settings: Xs2,
      AnalysisMAO: Di,
      AnalysisMAOSettings: Us,
      AnalysisMAO_: Di2,
      AnalysisMAO_Settings: Xs2b,
      AnalysisMASettings: Ks,
      AnalysisMF: Ke,
      AnalysisMFI: za,
      AnalysisMFISettings: qs,
      AnalysisMFSettings: zs,
      AnalysisManager: he,
      AnalysisMomentum: Li,
      AnalysisMomentumSettings: $s,
      AnalysisOBV: Za,
      AnalysisOBVSettings: Js,
      AnalysisPSAR: Ga,
      AnalysisPSARSettings: Qs,
      AnalysisRSI: Bi,
      AnalysisRSISettings: Zs,
      AnalysisRVI: Ki,
      AnalysisRVISettings: te,
      AnalysisSD: Ra,
      AnalysisSDSettings: se,
      AnalysisSO: Zi,
      AnalysisSOSettings: ee,
      AnalysisSettings: ie,
      AnalysisTEA: ha,
      AnalysisTEASettings: ae,
      AnalysisVolumes: nn,
      AnalysisVolumesSettings: ne,
      AnalysisWPR: ca,
      AnalysisWPRSettings: le,
      BaseAnalysis: ce,
      calcMAData: ue,
      exponentialMA: wa,
      getApplyShortName: re,
      simpleMA: pi,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
export {
  Ua as AnalysisAD,
  ya as AnalysisADMI,
  Ts as AnalysisADMISettings,
  Hs as AnalysisADSettings,
  ve as AnalysisAO,
  js as AnalysisAOSettings,
  Qe as AnalysisATR,
  Os as AnalysisATRSettings,
  ye as AnalysisAlligator,
  Ps as AnalysisAlligatorSettings,
  Se as AnalysisAwesome,
  Is as AnalysisAwesomeSettings,
  va as AnalysisBB,
  Ds as AnalysisBBSettings,
  ei as AnalysisBears,
  Es as AnalysisBearsSettings,
  li as AnalysisBulls,
  Gs as AnalysisBullsSettings,
  ui as AnalysisCCI,
  Ls as AnalysisCCISettings,
  fi as AnalysisDeMarker,
  Cs as AnalysisDeMarkerSettings,
  ba as AnalysisEnvelopes,
  Vs as AnalysisEnvelopesSettings,
  bi as AnalysisFI,
  Ys as AnalysisFISettings,
  je as AnalysisFractals,
  Rs as AnalysisFractalsSettings,
  Ee2 as AnalysisEngulfingPatterns,
  EpS as AnalysisEngulfingPatternsSettings,
  Ae2 as AnalysisAlerts,
  ApS as AnalysisAlertsSettings,
  Ve as AnalysisGO,
  Bs as AnalysisGOSettings,
  Wa as AnalysisIKH,
  Ns as AnalysisIKHSettings,
  Pa as AnalysisMA,
  Aa as AnalysisMABase,
  Wi as AnalysisMACD,
  Xs as AnalysisMACDSettings,
  Wi2 as AnalysisMACD_,
  Xs2 as AnalysisMACD_Settings,
  Di as AnalysisMAO,
  Us as AnalysisMAOSettings,
  Di2 as AnalysisMAO_,
  Xs2b as AnalysisMAO_Settings,
  Ks as AnalysisMASettings,
  Ke as AnalysisMF,
  za as AnalysisMFI,
  qs as AnalysisMFISettings,
  zs as AnalysisMFSettings,
  he as AnalysisManager,
  Li as AnalysisMomentum,
  $s as AnalysisMomentumSettings,
  Za as AnalysisOBV,
  Js as AnalysisOBVSettings,
  Ga as AnalysisPSAR,
  Qs as AnalysisPSARSettings,
  Bi as AnalysisRSI,
  Zs as AnalysisRSISettings,
  Ki as AnalysisRVI,
  te as AnalysisRVISettings,
  Ra as AnalysisSD,
  se as AnalysisSDSettings,
  Zi as AnalysisSO,
  ee as AnalysisSOSettings,
  ie as AnalysisSettings,
  ha as AnalysisTEA,
  ae as AnalysisTEASettings,
  nn as AnalysisVolumes,
  ne as AnalysisVolumesSettings,
  ca as AnalysisWPR,
  le as AnalysisWPRSettings,
  ce as BaseAnalysis,
  ue as calcMAData,
  wa as exponentialMA,
  re as getApplyShortName,
  pi as simpleMA,
};
