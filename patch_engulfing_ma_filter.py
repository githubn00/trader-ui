"""
patch_engulfing_ma_filter.py — Add MA Slope Filter to Engulfing Patterns

Changes:
  1. Cj-wvwrR.js  — Add maPeriod:50, maType:0 params to Ep2 settings class
  2. b2TMcBQ2.js  — Add EMA/SMA helpers; MA-aware engulfCalc; update Ee2._calc + title
  3. YtNU6idj.js  — Replace EpFm form to include MA Period number input

MA Filter logic:
  - maPeriod > 0: only signal bullish if close > EMA(period), bearish if close < EMA(period)
  - maPeriod = 0: filter disabled — all patterns fire (original behaviour)
  - maType: 0 = EMA (default), 1 = SMA (no UI, settable programmatically)
"""

import re

# ─────────────────────────────────────────────────────────────────────────────
# 1. Cj-wvwrR.js  — Add params to Ep2 settings class
# ─────────────────────────────────────────────────────────────────────────────
with open('terminal/Cj-wvwrR.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_ep2_super = (
    '    super(\n'
    '      e,\n'
    '      {},\n'
    '      {\n'
    '        bullish: { color: 65280, thickness: 1 },'
)
new_ep2_super = (
    '    super(\n'
    '      e,\n'
    '      { maPeriod: 50, maType: 0 },\n'
    '      {\n'
    '        bullish: { color: 65280, thickness: 1 },'
)
assert content.count(old_ep2_super) == 1, f'Expected 1 match for Ep2 params, got {content.count(old_ep2_super)}'
content = content.replace(old_ep2_super, new_ep2_super, 1)

with open('terminal/Cj-wvwrR.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('Cj-wvwrR.js updated.')

# ─────────────────────────────────────────────────────────────────────────────
# 2. b2TMcBQ2.js  — MA helpers + updated engulfCalc + updated Ee2 methods
# ─────────────────────────────────────────────────────────────────────────────
with open('terminal/b2TMcBQ2.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 2a. Replace engulfCalc with MA-aware version + helper functions
old_engulf_calc = (
    'function engulfCalc(bull, bear, bars, update) {\n'
    '  const start = update ? Math.max(1, bars.length - 1) : 1;\n'
    '  for (let i = start; i < bars.length; i++) {\n'
    '    const curOpen = bars.open(i), curClose = bars.close(i);\n'
    '    const prevOpen = bars.open(i - 1), prevClose = bars.close(i - 1);\n'
    '    if (curClose > curOpen && prevClose < prevOpen && curOpen <= prevClose && curClose >= prevOpen)\n'
    '      bull[i] = bars.low(i);\n'
    '    if (curClose < curOpen && prevClose > prevOpen && curOpen >= prevClose && curClose <= prevOpen)\n'
    '      bear[i] = bars.high(i);\n'
    '  }\n'
    '}'
)
new_engulf_calc = r"""function engulfEma(prices, period) {
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
}"""

assert content.count(old_engulf_calc) == 1, f'Expected 1 match for engulfCalc, got {content.count(old_engulf_calc)}'
content = content.replace(old_engulf_calc, new_engulf_calc, 1)

# 2b. Replace _titleArguments, title, and _calc in Ee2
old_ee2_methods = (
    '  _titleArguments() { return []; }\n'
    '  title() { return this.settings.title || "Engulfing Patterns"; }\n'
    '  _calc(t) {\n'
    '    super._calc();\n'
    '    const s = this.chart.bars, e = this.baseHash();\n'
    '    let bull = engulfBullMap.get(e), bear = engulfBearMap.get(e);\n'
    '    if (bull && bear) {\n'
    '      if (t) engulfCalc(bull, bear, s, true);\n'
    '    } else {\n'
    '      (bull = new Float64Array(s.length)),\n'
    '        (bear = new Float64Array(s.length)),\n'
    '        engulfCalc(bull, bear, s, false),\n'
    '        engulfBullMap.set(e, bull),\n'
    '        engulfBearMap.set(e, bear);\n'
    '    }\n'
    '    (this._epBull = bull), (this._epBear = bear);\n'
    '  }'
)
new_ee2_methods = r"""  _titleArguments() { return []; }
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
  }"""

assert content.count(old_ee2_methods) == 1, f'Expected 1 match for Ee2 methods, got {content.count(old_ee2_methods)}'
content = content.replace(old_ee2_methods, new_ee2_methods, 1)

with open('terminal/b2TMcBQ2.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('b2TMcBQ2.js updated.')

# ─────────────────────────────────────────────────────────────────────────────
# 3. YtNU6idj.js  — Replace EpFm with version that includes MA Period input
# ─────────────────────────────────────────────────────────────────────────────
with open('terminal/YtNU6idj.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Locate the old EpFm block by comment anchors
ep_start_marker = '// ── Engulfing Patterns form (EpFm) ───────────────────────────────────────\n'
ep_end_marker   = '// ── end EpFm ──────────────────────────────────────────────────────────────\n'
assert ep_start_marker in content, 'EpFm start marker not found'
assert ep_end_marker   in content, 'EpFm end marker not found'

start_idx = content.index(ep_start_marker)
end_idx   = content.index(ep_end_marker) + len(ep_end_marker)
old_epfm_block = content[start_idx:end_idx]

# New EpFm block — adds EpWt slot fn for MA Period K input and updates EpEs/EpOs
new_epfm_block = (
    '// ── Engulfing Patterns form (EpFm) ───────────────────────────────────────\n'
    # EpWt: slot function for the "MA Period" R field — renders a K number input
    # State indices in context: 1=subscribed value, 8=maPeriod handler
    'function EpWt(t){'
    'let e,s,n;'
    'function a(e){t[8](e)}'
    'let r={type:"number",min:0,placeholder:"50"};'
    'void 0!==t[1].params&&void 0!==t[1].params.maPeriod&&(r.value=t[1].params.maPeriod),'
    'e=new K({props:r}),q.push((()=>x(e,"value",a)));'
    'return{c(){_(e.$$.fragment)},m(t,s){k(e,t,s),n=!0},'
    'p(t,n){const o={};!s&&2&n&&(s=!0,o.value=t[1].params.maPeriod,j((()=>s=!1))),e.$set(o)},'
    'i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){o(e.$$.fragment,t),n=!1},d(t){b(e,t)}}}\n'
    # EpEs: inner render — bullish xt, bearish xt, MA Period R+EpWt
    'function EpEs(t){'
    'let e,s,a,c,r,u,$,V,d,z,J,O,P;'
    'let A2={label:"Bullish"};'
    'function B2(e){t[2](e)}function C2(e){t[3](e)}function D2(e){t[4](e)}'
    'void 0!==t[1].style.bullish.visible&&(A2.visible=t[1].style.bullish.visible),'
    'void 0!==t[1].style.bullish.color&&(A2.color=t[1].style.bullish.color),'
    'void 0!==t[1].style.bullish.thickness&&(A2.thickness=t[1].style.bullish.thickness),'
    'e=new xt({props:A2}),'
    'q.push((()=>x(e,"visible",B2))),q.push((()=>x(e,"color",C2))),q.push((()=>x(e,"thickness",D2)));'
    'let E2={label:"Bearish"};'
    'function F2(e){t[5](e)}function G2(e){t[6](e)}function H2(e){t[7](e)}'
    'void 0!==t[1].style.bearish.visible&&(E2.visible=t[1].style.bearish.visible),'
    'void 0!==t[1].style.bearish.color&&(E2.color=t[1].style.bearish.color),'
    'void 0!==t[1].style.bearish.thickness&&(E2.thickness=t[1].style.bearish.thickness),'
    's=new xt({props:E2}),'
    'q.push((()=>x(s,"visible",F2))),q.push((()=>x(s,"color",G2))),q.push((()=>x(s,"thickness",H2)));'
    'a=new R({props:{label:"MA Period (0=off)",$$slots:{default:[EpWt]},$$scope:{ctx:t}}});'
    'return{c(){_(e.$$.fragment),c=h(),_(s.$$.fragment),r=h(),_(a.$$.fragment)},'
    'm(t,n){k(e,t,n),i(t,c,n),k(s,t,n),i(t,r,n),k(a,t,n),P=!0},'
    'p(t,n){'
    'const o={};'
    '!u&&2&n&&(u=!0,o.visible=t[1].style.bullish.visible,j((()=>u=!1))),'
    '!$&&2&n&&($=!0,o.color=t[1].style.bullish.color,j((()=>$=!1))),'
    '!V&&2&n&&(V=!0,o.thickness=t[1].style.bullish.thickness,j((()=>V=!1))),'
    'e.$set(o);'
    'const l2={};'
    '!d&&2&n&&(d=!0,l2.visible=t[1].style.bearish.visible,j((()=>d=!1))),'
    '!z&&2&n&&(z=!0,l2.color=t[1].style.bearish.color,j((()=>z=!1))),'
    '!J&&2&n&&(J=!0,l2.thickness=t[1].style.bearish.thickness,j((()=>J=!1))),'
    's.$set(l2);'
    'const m2={};2&n&&(m2.$$scope={dirty:n,ctx:t}),a.$set(m2)},'
    'i(t){P||(l(e.$$.fragment,t),l(s.$$.fragment,t),l(a.$$.fragment,t),P=!0)},'
    'o(t){o(e.$$.fragment,t),o(s.$$.fragment,t),o(a.$$.fragment,t),P=!1},'
    'd(t){t&&(n(c),n(r)),b(e,t),b(s,t),b(a,t)}}}\n'
    # EpRs: outer layout wrapper (unchanged)
    'function EpRs(t){let e,s;return e=new yt({props:{$$slots:{default:[EpEs]},$$scope:{ctx:t}}}),{c(){_(e.$$.fragment)},m(t,n){k(e,t,n),s=!0},p(t,[s]){const n={};2&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(l(e.$$.fragment,t),s=!0)},o(t){o(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}\n'
    # EpOs: logic — indices 0=store, 1=value, 2-7=style handlers, 8=maPeriod handler
    'function EpOs(t,e,s){let n,o2=M,l2=()=>(o2(),o2=W(i,(t=>s(1,n=t))),i);t.$$.on_destroy.push((()=>o2()));let{settings:i}=e;return l2(),t.$$set=t=>{"settings"in t&&l2(s(0,i=t.settings))},[i,n,'
    'function(e){t.$$.not_equal(n.style.bullish.visible,e)&&(n.style.bullish.visible=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bullish.color,e)&&(n.style.bullish.color=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bullish.thickness,e)&&(n.style.bullish.thickness=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bearish.visible,e)&&(n.style.bearish.visible=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bearish.color,e)&&(n.style.bearish.color=e,i.set(n))},'
    'function(e){t.$$.not_equal(n.style.bearish.thickness,e)&&(n.style.bearish.thickness=e,i.set(n))},'
    'function(e){n.params=n.params||{};t.$$.not_equal(n.params.maPeriod,e)&&(n.params.maPeriod=e,i.set(n))}'
    ']}\n'
    'class EpFm extends t{constructor(t){super(),e(this,t,EpOs,EpRs,s,{settings:0})}}\n'
    '// ── end EpFm ──────────────────────────────────────────────────────────────\n'
)

assert content.count(old_epfm_block) == 1, f'Expected 1 match for EpFm block, got {content.count(old_epfm_block)}'
content = content.replace(old_epfm_block, new_epfm_block, 1)

with open('terminal/YtNU6idj.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('YtNU6idj.js updated.')

print('\nAll files patched successfully.')
