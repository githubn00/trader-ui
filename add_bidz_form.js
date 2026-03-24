const fs = require('fs');
let src = fs.readFileSync('c:/Users/bcalderon/repo/trader-ui/terminal/YtNU6idj.js', 'utf8');

const q1 = "'";
const ds = '$$';

const bidzCode = `
// ── MACD_Fm / MAO_Fm (Bid Zero Cross extension) ───────────────────────────
function BidZeroChkWidget(cbIdx) {
  return function(t) {
    let chk, chkHandler;
    return {
      c() {},
      m(t2, s3) {
        chk = document.createElement(${q1}input${q1});
        chk.type = ${q1}checkbox${q1};
        chk.style.cssText = ${q1}display:inline-block!important;width:13px!important;height:13px!important;margin-right:4px!important;cursor:pointer!important;vertical-align:middle!important;opacity:1!important;visibility:visible!important;-webkit-appearance:checkbox!important;appearance:checkbox!important${q1};
        chk.checked = !!t[1].params.showBidZero;
        chk.addEventListener(${q1}change${q1}, chkHandler = function() { t[cbIdx](chk.checked ? 1 : 0); });
        t2.insertBefore(chk, s3 || null);
      },
      p(t2, drt) { if (2 & drt) chk.checked = !!t2[1].params.showBidZero; },
      i() {},
      o() {},
      d(t2) {
        if (chk) { chk.removeEventListener(${q1}change${q1}, chkHandler); if (t2 && chk.parentNode) chk.parentNode.removeChild(chk); }
      }
    };
  };
}
const _BidZeroChkW = BidZeroChkWidget(2);
const _BidZeroStW  = XoverStPicker(3, 4, 5, true, ${q1}bidZero${q1});
function MACD_FmOs(t, e, s) {
  let n, o2=M, l2=()=>(o2(), o2=W(i, (t2 => s(1, n=t2))), i);
  t.${ds}.on_destroy.push(()=>o2());
  let { settings: i } = e;
  return l2(), t.${ds}set = t2 => { ${q1}settings${q1} in t2 && l2(s(0, i=t2.settings)); }, [
    i, n,
    v => { t.${ds}.not_equal(n.params.showBidZero, v) && (n.params.showBidZero = v, i.set(n)); },
    v => { t.${ds}.not_equal(n.style.bidZero.visible, v) && (n.style.bidZero.visible = v, i.set(n)); },
    v => { t.${ds}.not_equal(n.style.bidZero.color, v) && (n.style.bidZero.color = v, i.set(n)); },
    v => { t.${ds}.not_equal(n.style.bidZero.thickness, v) && (n.style.bidZero.thickness = v, i.set(n)); },
  ];
}
function MACD_FmRs(t) {
  let e1, e2, e3, nn;
  const BizChk = BidZeroChkWidget(2);
  const BizSt  = XoverStPicker(3, 4, 5, true, ${q1}bidZero${q1});
  e1 = new Fs2({ props: { settings: t[0] } });
  e2 = new R({ props: { label: ${q1}Bid Zero Cross${q1}, ${ds}slots: { default: [BizChk] }, ${ds}scope: { ctx: t } } });
  e3 = new R({ props: { label: ${q1}Bid Zero Style${q1}, ${ds}slots: { default: [BizSt] }, ${ds}scope: { ctx: t } } });
  return {
    c() { _(e1.${ds}.fragment); _(e2.${ds}.fragment); _(e3.${ds}.fragment); },
    m(t2, ins) { k(e1, t2, ins); k(e2, t2, ins); k(e3, t2, ins); nn = !0; },
    p(t2, [drt]) {
      if (1 & drt) e1.${ds}set({ settings: t2[0] });
      if (2 & drt) { const sc = { ${ds}scope: { dirty: drt, ctx: t2 } }; e2.${ds}set(sc); e3.${ds}set(sc); }
    },
    i(t2) { nn || (l(e1.${ds}.fragment, t2), l(e2.${ds}.fragment, t2), l(e3.${ds}.fragment, t2), nn = !0); },
    o(t2) { o(e1.${ds}.fragment, t2); o(e2.${ds}.fragment, t2); o(e3.${ds}.fragment, t2); nn = !1; },
    d(t2) { b(e1, t2); b(e2, t2); b(e3, t2); }
  };
}
class MACD_Fm extends t { constructor(t2) { super(); e(this, t2, MACD_FmOs, MACD_FmRs, s, { settings: 0 }); } }
function MAO_FmOs(t, e, s) {
  let n, o2=M, l2=()=>(o2(), o2=W(i, (t2 => s(1, n=t2))), i);
  t.${ds}.on_destroy.push(()=>o2());
  let { settings: i } = e;
  return l2(), t.${ds}set = t2 => { ${q1}settings${q1} in t2 && l2(s(0, i=t2.settings)); }, [
    i, n,
    v => { t.${ds}.not_equal(n.params.showBidZero, v) && (n.params.showBidZero = v, i.set(n)); },
    v => { t.${ds}.not_equal(n.style.bidZero.visible, v) && (n.style.bidZero.visible = v, i.set(n)); },
    v => { t.${ds}.not_equal(n.style.bidZero.color, v) && (n.style.bidZero.color = v, i.set(n)); },
    v => { t.${ds}.not_equal(n.style.bidZero.thickness, v) && (n.style.bidZero.thickness = v, i.set(n)); },
  ];
}
function MAO_FmRs(t) {
  let e1, e2, e3, nn;
  const BizChk = BidZeroChkWidget(2);
  const BizSt  = XoverStPicker(3, 4, 5, true, ${q1}bidZero${q1});
  e1 = new MOsFm({ props: { settings: t[0] } });
  e2 = new R({ props: { label: ${q1}Bid Zero Cross${q1}, ${ds}slots: { default: [BizChk] }, ${ds}scope: { ctx: t } } });
  e3 = new R({ props: { label: ${q1}Bid Zero Style${q1}, ${ds}slots: { default: [BizSt] }, ${ds}scope: { ctx: t } } });
  return {
    c() { _(e1.${ds}.fragment); _(e2.${ds}.fragment); _(e3.${ds}.fragment); },
    m(t2, ins) { k(e1, t2, ins); k(e2, t2, ins); k(e3, t2, ins); nn = !0; },
    p(t2, [drt]) {
      if (1 & drt) e1.${ds}set({ settings: t2[0] });
      if (2 & drt) { const sc = { ${ds}scope: { dirty: drt, ctx: t2 } }; e2.${ds}set(sc); e3.${ds}set(sc); }
    },
    i(t2) { nn || (l(e1.${ds}.fragment, t2), l(e2.${ds}.fragment, t2), l(e3.${ds}.fragment, t2), nn = !0); },
    o(t2) { o(e1.${ds}.fragment, t2); o(e2.${ds}.fragment, t2); o(e3.${ds}.fragment, t2); nn = !1; },
    d(t2) { b(e1, t2); b(e2, t2); b(e3, t2); }
  };
}
class MAO_Fm extends t { constructor(t2) { super(); e(this, t2, MAO_FmOs, MAO_FmRs, s, { settings: 0 }); } }
// ── end MACD_Fm / MAO_Fm ─────────────────────────────────────────────────
`;

if (src.includes('class MACD_Fm')) {
  console.log('MACD_Fm already present, skipping injection.');
} else {
  const exportIdx = src.lastIndexOf('export{');
  src = src.substring(0, exportIdx) + bidzCode + src.substring(exportIdx);
  // Update export to add MACD_Fm as w and MAO_Fm as aa2
  src = src.replace('XoverFm as v}', 'XoverFm as v,MACD_Fm as w,MAO_Fm as aa2}');
}

fs.writeFileSync('c:/Users/bcalderon/repo/trader-ui/terminal/YtNU6idj.js', src);
console.log('Done, total length:', src.length);
