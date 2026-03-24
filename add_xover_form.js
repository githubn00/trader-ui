const fs = require('fs');
let src = fs.readFileSync('c:/Users/bcalderon/repo/trader-ui/terminal/YtNU6idj.js', 'utf8');

const q1 = "'";
const q2 = '"';
const dl = '`';
const ds = '$$';

const xoverCode = `
// ── XoverFm ──────────────────────────────────────────────────────────────
function XoverNumWidget(cbIdx, paramKey, min2, max2) {
  return function(t) {
    let e, s2, n;
    function a(v) { t[cbIdx](v); }
    let r = { type: ${q1}number${q1}, min: min2 != null ? min2 : 0, max: max2 != null ? max2 : 999 };
    const cur = t[1].params[paramKey]; if (cur != null) r.value = cur;
    e = new K({ props: r }); q.push((() => x(e, ${q1}value${q1}, a)));
    return {
      c() { _(e.${ds}.fragment); },
      m(t2, s3) { k(e, t2, s3); n = !0; },
      p(t2, drt) { const o = {}; if (!s2 && 2 & drt) { s2 = !0; const v2 = t2[1].params[paramKey]; if (v2 != null) o.value = v2; j((() => s2 = !1)); } e.${ds}set(o); },
      i(t2) { n || (l(e.${ds}.fragment, t2), n = !0); },
      o(t2) { o(e.${ds}.fragment, t2); n = !1; },
      d(t2) { b(e, t2); }
    };
  };
}
const XoverWtFP  = XoverNumWidget(2,  ${q1}fastPeriod${q1}, 1, 500);
const XoverWtSP  = XoverNumWidget(4,  ${q1}slowPeriod${q1}, 1, 500);
const XoverWtVL  = XoverNumWidget(6,  ${q1}velocityLookback${q1}, 1, 20);
const XoverWtBA  = XoverNumWidget(7,  ${q1}barsBeforeAlert${q1}, 1, 100);
const XoverWtNt  = XoverNumWidget(8,  ${q1}notifications${q1}, 0, 1);
const XoverWtMF  = XoverNumWidget(9,  ${q1}useMacdFilter${q1}, 0, 1);
const XoverWtMFa = XoverNumWidget(10, ${q1}macdFast${q1}, 1, 500);
const XoverWtMFs = XoverNumWidget(11, ${q1}macdSlow${q1}, 1, 500);
const XoverWtMFg = XoverNumWidget(12, ${q1}macdSignal${q1}, 1, 200);
const XoverWtSym = XoverNumWidget(13, ${q1}sameSymbol${q1}, 0, 1);
const XoverWtSTF = XoverNumWidget(15, ${q1}sameTimeframe${q1}, 0, 1);
function XoverTypeWidget(cbIdx, paramKey) {
  return function(t) {
    let el, handler;
    return {
      c() {
        el = m(${q1}select${q1});
        el.innerHTML = ${q2}<option value="0">EMA</option><option value="1">SMA</option>${q2};
        el.style.cssText = ${q1}background:#1a1a2e;color:#ccc;border:1px solid #444;font-size:11px;padding:2px;border-radius:3px;cursor:pointer${q1};
      },
      m(r, s3) {
        i(r, el, s3);
        const v = t[1].params[paramKey]; if (v != null) el.value = String(v);
        el.addEventListener(${q1}change${q1}, handler = function() { t[cbIdx](+el.value); });
      },
      p(t2, drt) { if (2 & drt) { const v = t2[1].params[paramKey]; if (v != null) el.value = String(v); } },
      d(r) { r && n(el); el.removeEventListener(${q1}change${q1}, handler); }
    };
  };
}
const XoverWtFT = XoverTypeWidget(3, ${q1}fastType${q1});
const XoverWtST = XoverTypeWidget(5, ${q1}slowType${q1});
function XoverTfWidget(t) {
  const TF = [[1,${q1}M1${q1}],[2,${q1}M5${q1}],[4,${q1}M15${q1}],[8,${q1}M30${q1}],[16,${q1}H1${q1}],[32,${q1}H4${q1}],[64,${q1}D1${q1}],[128,${q1}W1${q1}],[256,${q1}MN${q1}]];
  let el, handler;
  return {
    c() {
      el = m(${q1}select${q1});
      el.innerHTML = TF.map(([v, lbl]) => ${q2}<option value="${q2} + v + ${q2}">${q2} + lbl + ${q2}</option>${q2}).join(${q1}${q1});
      el.style.cssText = ${q1}background:#1a1a2e;color:#ccc;border:1px solid #444;font-size:11px;padding:2px;border-radius:3px;cursor:pointer${q1};
    },
    m(r, s3) {
      i(r, el, s3);
      if (t[1].params.sourceTimeframe != null) el.value = String(t[1].params.sourceTimeframe);
      el.addEventListener(${q1}change${q1}, handler = function() { t[16](+el.value); });
    },
    p(t2, drt) { if (2 & drt && t2[1].params.sourceTimeframe != null) el.value = String(t2[1].params.sourceTimeframe); },
    d(r) { r && n(el); el.removeEventListener(${q1}change${q1}, handler); }
  };
}
function XoverSymWidget(t) {
  let el, handler;
  return {
    c() {
      el = m(${q1}input${q1}); el.type = ${q1}text${q1}; el.placeholder = ${q1}e.g. EURUSD${q1};
      el.style.cssText = ${q1}background:#1a1a2e;color:#ccc;border:1px solid #444;font-size:11px;padding:2px 4px;border-radius:3px;width:80px${q1};
    },
    m(r, s3) {
      i(r, el, s3);
      if (t[1].params.sourceSymbol != null) el.value = t[1].params.sourceSymbol;
      el.addEventListener(${q1}input${q1}, handler = function() { t[14](el.value); });
    },
    p(t2, drt) { if (2 & drt && t2[1].params.sourceSymbol != null) el.value = t2[1].params.sourceSymbol; },
    d(r) { r && n(el); el.removeEventListener(${q1}input${q1}, handler); }
  };
}
function XoverStPicker(vCb, colCb, thkCb, useLineType, styleKey) {
  return function(t) {
    let e, Z1 = !1, Z2 = !1, Z3 = !1, nn;
    let chk, chkHandler;
    let r = {};
    const st = t[1].style[styleKey];
    void 0 !== st.visible && (r.visible = st.visible);
    void 0 !== st.color && (r.color = st.color);
    void 0 !== st.thickness && (r.thickness = st.thickness);
    if (useLineType) void 0 !== st.lineType && (r.lineType = st.lineType);
    e = new xt({ props: r });
    q.push((() => x(e, ${q1}visible${q1}, v2 => t[vCb](v2))));
    q.push((() => x(e, ${q1}color${q1}, v2 => t[colCb](v2))));
    q.push((() => x(e, ${q1}thickness${q1}, v2 => t[thkCb](v2))));
    if (useLineType) q.push((() => x(e, ${q1}lineType${q1}, function(v2) { t[1].style[styleKey].lineType = v2; t[0].set(t[1]); })));
    return {
      c() { _(e.${ds}.fragment); },
      m(t2, s3) {
        chk = m(${q1}input${q1}); chk.type = ${q1}checkbox${q1};
        chk.style.cssText = ${q1}margin-right:4px;cursor:pointer;vertical-align:middle${q1};
        chk.checked = !!t[1].style[styleKey].visible;
        chk.addEventListener(${q1}change${q1}, chkHandler = function() { t[vCb](chk.checked); });
        i(t2, chk, s3);
        k(e, t2, s3); nn = !0;
      },
      p(t2, drt) {
        if (2 & drt) chk.checked = !!t2[1].style[styleKey].visible;
        const o = {};
        !Z1 && 2 & drt && (Z1 = !0, o.visible = t2[1].style[styleKey].visible, j((() => Z1 = !1)));
        !Z2 && 2 & drt && (Z2 = !0, o.color = t2[1].style[styleKey].color, j((() => Z2 = !1)));
        !Z3 && 2 & drt && (Z3 = !0, o.thickness = t2[1].style[styleKey].thickness, j((() => Z3 = !1)));
        e.${ds}set(o);
      },
      i(t2) { nn || (l(e.${ds}.fragment, t2), nn = !0); },
      o(t2) { o(e.${ds}.fragment, t2); nn = !1; },
      d(t2) { if (t2) n(chk); chk.removeEventListener(${q1}change${q1}, chkHandler); b(e, t2); }
    };
  };
}
const XoverFaSt = XoverStPicker(17, 18, 19, true,  ${q1}fast${q1});
const XoverSlSt = XoverStPicker(20, 21, 22, true,  ${q1}slow${q1});
const XoverAlSt = XoverStPicker(23, 24, 25, false, ${q1}alert${q1});
function XoverEs(t) {
  const rows = [
    new R({ props: { label: ${q1}Same Symbol (1=chart)${q1}, ${ds}slots: { default: [XoverWtSym] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}Source Symbol${q1},         ${ds}slots: { default: [XoverSymWidget] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}Same Timeframe (1=chart)${q1}, ${ds}slots: { default: [XoverWtSTF] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}Source Timeframe${q1},      ${ds}slots: { default: [XoverTfWidget] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}Fast Period${q1},           ${ds}slots: { default: [XoverWtFP] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}Fast Type${q1},             ${ds}slots: { default: [XoverWtFT] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}Slow Period${q1},           ${ds}slots: { default: [XoverWtSP] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}Slow Type${q1},             ${ds}slots: { default: [XoverWtST] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}Velocity Lookback${q1},     ${ds}slots: { default: [XoverWtVL] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}Bars Before Alert${q1},     ${ds}slots: { default: [XoverWtBA] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}Notifications (1=on)${q1},  ${ds}slots: { default: [XoverWtNt] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}MACD Filter (1=on)${q1},    ${ds}slots: { default: [XoverWtMF] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}MACD Fast${q1},             ${ds}slots: { default: [XoverWtMFa] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}MACD Slow${q1},             ${ds}slots: { default: [XoverWtMFs] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}MACD Signal${q1},           ${ds}slots: { default: [XoverWtMFg] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}Fast MA Style${q1},         ${ds}slots: { default: [XoverFaSt] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}Slow MA Style${q1},         ${ds}slots: { default: [XoverSlSt] }, ${ds}scope: { ctx: t } } }),
    new R({ props: { label: ${q1}Alert Marker${q1},          ${ds}slots: { default: [XoverAlSt] }, ${ds}scope: { ctx: t } } }),
  ];
  const seps = rows.slice(0, -1).map(() => h());
  return {
    c() { for (const r of rows) _(r.${ds}.fragment); },
    m(t2, ins) { for (let ii = 0; ii < rows.length; ii++) { k(rows[ii], t2, ins); if (ii < seps.length) i(t2, seps[ii], ins); } },
    p(t2, drt) { const sc = { ${ds}scope: { dirty: drt, ctx: t2 } }; for (const r of rows) r.${ds}set({ ...sc }); },
    i(t2) { for (const r of rows) l(r.${ds}.fragment, t2); },
    o(t2) { for (const r of rows) o(r.${ds}.fragment, t2); },
    d(t2) { if (t2) for (const sp of seps) n(sp); for (const r of rows) b(r, t2); }
  };
}
function XoverRs(t) {
  let e, nn;
  e = new yt({ props: { ${ds}slots: { default: [XoverEs] }, ${ds}scope: { ctx: t } } });
  return {
    c() { _(e.${ds}.fragment); },
    m(t2, ins) { k(e, t2, ins); nn = !0; },
    p(t2, [drt]) { const sc = {}; 2 & drt && (sc.${ds}scope = { dirty: drt, ctx: t2 }); e.${ds}set(sc); },
    i(t2) { nn || (l(e.${ds}.fragment, t2), nn = !0); },
    o(t2) { o(e.${ds}.fragment, t2); nn = !1; },
    d(t2) { b(e, t2); }
  };
}
function XoverOs(t, e, s) {
  let n2, o2 = M, l2 = () => (o2(), o2 = W(i, (t2 => s(1, n2 = t2))), i);
  t.${ds}.on_destroy.push((() => o2()));
  let { settings: i } = e;
  return l2(), t.${ds}set = t2 => { ${q1}settings${q1} in t2 && l2(s(0, i = t2.settings)); }, [
    i, n2,
    v => { t.${ds}.not_equal(n2.params.fastPeriod, v) && (n2.params.fastPeriod = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.params.fastType, v) && (n2.params.fastType = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.params.slowPeriod, v) && (n2.params.slowPeriod = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.params.slowType, v) && (n2.params.slowType = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.params.velocityLookback, v) && (n2.params.velocityLookback = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.params.barsBeforeAlert, v) && (n2.params.barsBeforeAlert = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.params.notifications, v) && (n2.params.notifications = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.params.useMacdFilter, v) && (n2.params.useMacdFilter = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.params.macdFast, v) && (n2.params.macdFast = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.params.macdSlow, v) && (n2.params.macdSlow = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.params.macdSignal, v) && (n2.params.macdSignal = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.params.sameSymbol, v) && (n2.params.sameSymbol = v, i.set(n2)); },
    v => { n2.params.sourceSymbol !== v && (n2.params.sourceSymbol = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.params.sameTimeframe, v) && (n2.params.sameTimeframe = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.params.sourceTimeframe, v) && (n2.params.sourceTimeframe = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.style.fast.visible, v) && (n2.style.fast.visible = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.style.fast.color, v) && (n2.style.fast.color = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.style.fast.thickness, v) && (n2.style.fast.thickness = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.style.slow.visible, v) && (n2.style.slow.visible = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.style.slow.color, v) && (n2.style.slow.color = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.style.slow.thickness, v) && (n2.style.slow.thickness = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.style.alert.visible, v) && (n2.style.alert.visible = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.style.alert.color, v) && (n2.style.alert.color = v, i.set(n2)); },
    v => { t.${ds}.not_equal(n2.style.alert.thickness, v) && (n2.style.alert.thickness = v, i.set(n2)); },
  ];
}
class XoverFm extends t { constructor(t2) { super(); e(this, t2, XoverOs, XoverRs, s, { settings: 0 }); } }
// ── end XoverFm ──────────────────────────────────────────────────────────
`;

if (src.includes('class XoverFm')) {
  // Already injected — update XoverStPicker in place
  src = src.replace(
    /function XoverStPicker\([\s\S]*?\n\}\nconst XoverFaSt/,
    xoverCode.match(/function XoverStPicker[\s\S]*?\n\}\nconst XoverFaSt/)[0]
  );
} else {
  const exportIdx = src.lastIndexOf('export{');
  src = src.substring(0, exportIdx) + xoverCode + src.substring(exportIdx);
  src = src.replace('MOsFm as t2,AfFm as u}', 'MOsFm as t2,AfFm as u,XoverFm as v}');
}
fs.writeFileSync('c:/Users/bcalderon/repo/trader-ui/terminal/YtNU6idj.js', src);
console.log('Done, total length:', src.length);
