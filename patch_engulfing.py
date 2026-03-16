"""
patch_engulfing.py — Add Engulfing Patterns Signal Indicator

Files modified:
  terminal/Cj-wvwrR.js  — Add EngulfingPatterns settings class
  terminal/b2TMcBQ2.js  — Add AnalysisEngulfingPatterns class + switch case + exports
  terminal/C2M0l3R7.js  — Register indicator with category 6
  terminal/MnSignal.js  — Add "engulfing" to SIGNAL_TYPES set
"""

# ─────────────────────────────────────────────────────────────────────────────
# 1. Cj-wvwrR.js  — Settings class + export
# ─────────────────────────────────────────────────────────────────────────────
with open('terminal/Cj-wvwrR.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1a. Add "engulfing" case to the h() display-name function (before default:)
old_default = '    default:\n      return s;'
new_default = '    case "engulfing":\n      return "Engulfing Patterns";\n    default:\n      return s;'
assert content.count(old_default) == 1, f"Expected 1 match for h() default anchor, got {content.count(old_default)}"
content = content.replace(old_default, new_default, 1)

# 1b. Add the EngulfingPatterns settings class right before the export block
ep_class = '''const Ep2 = class s extends f {
  constructor(e) {
    super(
      e,
      {},
      {
        bullish: { color: 65280, thickness: 1 },
        bearish: { color: 16711680, thickness: 1 },
      },
      s.type,
      s.category,
      s.digits,
      s.flags,
    );
  }
};
((Ep2.type = "engulfing"), (Ep2.category = 6), (Ep2.digits = 0), (Ep2.flags = 0));
let ep2 = Ep2;
'''
old_export = 'let Ms = js;\nexport {'
new_export = 'let Ms = js;\n' + ep_class + 'export {'
assert content.count(old_export) == 1, f"Expected 1 match for export anchor, got {content.count(old_export)}"
content = content.replace(old_export, new_export, 1)

# 1c. Add ep2 to the export block (after Ms as F,)
old_export_entry = '  Ms as F,\n'
new_export_entry = '  Ms as F,\n  ep2 as ep,\n'
assert content.count(old_export_entry) == 1, f"Expected 1 match for export entry, got {content.count(old_export_entry)}"
content = content.replace(old_export_entry, new_export_entry, 1)

with open('terminal/Cj-wvwrR.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Cj-wvwrR.js updated.")

# ─────────────────────────────────────────────────────────────────────────────
# 2. b2TMcBQ2.js  — Analysis class + switch case + rn module + exports
# ─────────────────────────────────────────────────────────────────────────────
with open('terminal/b2TMcBQ2.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 2a. Import Ep2 (exported as ep) from Cj-wvwrR.js
old_import_end = '  t as le,\n} from "./Cj-wvwrR.js";'
new_import_end = '  t as le,\n  ep as EpS,\n} from "./Cj-wvwrR.js";'
assert content.count(old_import_end) == 1, f"Expected 1 match for import anchor, got {content.count(old_import_end)}"
content = content.replace(old_import_end, new_import_end, 1)

# 2b. Add the AnalysisEngulfingPatterns class and helper function/maps
#     Insert before `const Pe = new Map()`
ep_analysis_code = r"""const engulfBullMap = new Map(),
  engulfBearMap = new Map();
function engulfCalc(bull, bear, bars, update) {
  const start = update ? Math.max(1, bars.length - 1) : 1;
  for (let i = start; i < bars.length; i++) {
    const curOpen = bars.open(i), curClose = bars.close(i);
    const prevOpen = bars.open(i - 1), prevClose = bars.close(i - 1);
    if (curClose > curOpen && prevClose < prevOpen && curOpen <= prevClose && curClose >= prevOpen)
      bull[i] = bars.low(i);
    if (curClose < curOpen && prevClose > prevOpen && curOpen >= prevClose && curClose <= prevOpen)
      bear[i] = bars.high(i);
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
class Ee2 extends ce {
  _titleArguments() { return []; }
  title() { return this.settings.title || "Engulfing Patterns"; }
  _calc(t) {
    super._calc();
    const s = this.chart.bars, e = this.baseHash();
    let bull = engulfBullMap.get(e), bear = engulfBearMap.get(e);
    if (bull && bear) {
      if (t) engulfCalc(bull, bear, s, true);
    } else {
      (bull = new Float64Array(s.length)),
        (bear = new Float64Array(s.length)),
        engulfCalc(bull, bear, s, false),
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
        p && engulfDrawUp(t, l, this.valueToY(p), a);
        p = this._epBear && this._epBear[o];
        p && engulfDrawDn(t, l, this.valueToY(p), n);
      }
      l += i.getStep();
    }
  }
  value(t) { return []; }
}
"""
old_pe_map = 'const Pe = new Map(),'
assert content.count(old_pe_map) == 1, f"Expected 1 match for Pe anchor, got {content.count(old_pe_map)}"
content = content.replace(old_pe_map, ep_analysis_code + 'const Pe = new Map(),', 1)

# 2c. Add "engulfing" case in the switch (after the fractals case)
old_fractals_case = '''      case "fractals":
        (([h, r] = this.getOptions(o.AnalysisFractalsSettings.flags)),
          (l = new o.AnalysisFractalsSettings({ ...i, index: r })),
          (n = new o.AnalysisFractals(h, 5e3, l)));
        break;'''
new_fractals_case = old_fractals_case + '''
      case "engulfing":
        (([h, r] = this.getOptions(o.AnalysisEngulfingPatternsSettings.flags)),
          (l = new o.AnalysisEngulfingPatternsSettings({ ...i, index: r })),
          (n = new o.AnalysisEngulfingPatterns(h, 5e3, l)));
        break;'''
assert content.count(old_fractals_case) == 1, f"Expected 1 match for fractals case, got {content.count(old_fractals_case)}"
content = content.replace(old_fractals_case, new_fractals_case, 1)

# 2d. Add to rn module object (after AnalysisFractalsSettings entry)
old_rn_fractals = '      AnalysisFractals: je,\n      AnalysisFractalsSettings: Rs,'
new_rn_fractals = '      AnalysisFractals: je,\n      AnalysisFractalsSettings: Rs,\n      AnalysisEngulfingPatterns: Ee2,\n      AnalysisEngulfingPatternsSettings: EpS,'
assert content.count(old_rn_fractals) == 1, f"Expected 1 match for rn fractals, got {content.count(old_rn_fractals)}"
content = content.replace(old_rn_fractals, new_rn_fractals, 1)

# 2e. Add to exports (after AnalysisFractalsSettings export)
old_export_fractals = '  je as AnalysisFractals,\n  Rs as AnalysisFractalsSettings,'
new_export_fractals = '  je as AnalysisFractals,\n  Rs as AnalysisFractalsSettings,\n  Ee2 as AnalysisEngulfingPatterns,\n  EpS as AnalysisEngulfingPatternsSettings,'
assert content.count(old_export_fractals) == 1, f"Expected 1 match for export fractals, got {content.count(old_export_fractals)}"
content = content.replace(old_export_fractals, new_export_fractals, 1)

with open('terminal/b2TMcBQ2.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("b2TMcBQ2.js updated.")

# ─────────────────────────────────────────────────────────────────────────────
# 3. C2M0l3R7.js  — Indicator registry entry (category 6)
# ─────────────────────────────────────────────────────────────────────────────
with open('terminal/C2M0l3R7.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_fractals_reg = '  ["fractals", 4, "Fractals", "Fractals"],'
new_fractals_reg = '  ["fractals", 4, "Fractals", "Fractals"],\n  ["engulfing", 6, "Engulfing", "Engulfing Patterns"],'
assert content.count(old_fractals_reg) == 1, f"Expected 1 match for registry entry, got {content.count(old_fractals_reg)}"
content = content.replace(old_fractals_reg, new_fractals_reg, 1)

# Fix: Signals tab value must be 6 to match category 6 (not 5, which is Charts/Overlay)
old_tab = '  let _W = {\n    slim: t[2],\n    value: 5,\n    $$slots: { default: [Sn] },'
new_tab = '  let _W = {\n    slim: t[2],\n    value: 6,\n    $$slots: { default: [Sn] },'
assert content.count(old_tab) == 1, f"Expected 1 match for tab value, got {content.count(old_tab)}"
content = content.replace(old_tab, new_tab, 1)

# Add "engulfing" to the yt visible indicator list
old_yt_end = '    "mf",\n  ],'
new_yt_end = '    "mf",\n    "engulfing",\n  ],'
assert content.count(old_yt_end) == 1, f"Expected 1 match for yt end, got {content.count(old_yt_end)}"
content = content.replace(old_yt_end, new_yt_end, 1)

with open('terminal/C2M0l3R7.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("C2M0l3R7.js updated.")

# ─────────────────────────────────────────────────────────────────────────────
# 4. MnSignal.js  — Add "engulfing" to SIGNAL_TYPES set
# ─────────────────────────────────────────────────────────────────────────────
with open('terminal/MnSignal.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_vt = 'const Vt=new Set();'
new_vt = 'const Vt=new Set(["engulfing"]);'
assert content.count(old_vt) == 1, f"Expected 1 match for Vt set, got {content.count(old_vt)}"
content = content.replace(old_vt, new_vt, 1)

with open('terminal/MnSignal.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("MnSignal.js updated.")

print("\nAll files patched successfully.")
