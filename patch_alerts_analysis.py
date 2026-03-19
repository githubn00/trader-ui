#!/usr/bin/env python3
"""
Patch script: Add alerts indicator analysis class to b2TMcBQ2.js
Simpler version - focuses on critical additions
"""

import sys

def patch_analysis():
    with open("terminal/b2TMcBQ2.js", "r") as f:
        content = f.read()

    changes_made = 0

    # 1. Import ApS (alerts settings)
    if "ap as ApS" not in content:
        if "ep as EpS," in content:
            content = content.replace(
                "ep as EpS,",
                "ep as EpS,\n  ap as ApS,"
            )
            print("[+] Added ApS import from Cj-wvwrR.js")
            changes_made += 1

    # 2. Register alerts in switch case
    if 'case "alerts":' not in content:
        switch_code = '''    case "alerts":
      (([h, r] = this.getOptions(o.AnalysisAlertsSettings.flags)),
        (l = new o.AnalysisAlertsSettings({ ...i, index: r })),
        (n = new o.AnalysisAlerts(h, 5e3, l)));
      break;
'''
        # Insert before engulfing case
        if 'case "engulfing":' in content:
            content = content.replace(
                '    case "engulfing":',
                switch_code + '    case "engulfing":'
            )
            print("[+] Added alerts switch case")
            changes_made += 1

    # 3. Add stub classes to handle alerts
    if "class AnalysisAlerts" not in content:
        stub_code = '''
// Alerts support classes (simplified)
const AnalysisAlerts = class {
  constructor(a, b, c) {
    this.ctx = a; this.debounce = b; this.settings = c;
    this._aBull = new Map(); this._aBear = new Map();
    this._aSlope = new Map(); this._aBreakout = new Map();
  }
  get yMin() { return this.chart?.state?.extrema?.[0] ?? 0; }
  get yMax() { return this.chart?.state?.extrema?.[1] ?? 0; }
  _calc(t) {}
  _drawGraph(t) {}
  title() { return this.settings?.title ?? "Alerts"; }
  value() { return []; }
};

const AnalysisAlertsSettings = class {
  constructor(a = {}) { this.type = "alerts"; Object.assign(this, a); }
};
'''
        if "const AnalysisAlertsSettings" not in content:
            insert_pos = content.rfind("export {")
            if insert_pos > 0:
                content = content[:insert_pos] + stub_code + "\n" + content[insert_pos:]
                print("[+] Added AnalysisAlerts stub classes")
                changes_made += 1

    # 4. Add to module exports
    if "AnalysisAlerts," not in content and "AnalysisAlertsSettings," not in content:
        # Find export section and add
        if "AnalysisEngulfingPatterns," in content:
            content = content.replace(
                "AnalysisEngulfingPatterns,",
                "AnalysisEngulfingPatterns,\n  AnalysisAlerts,\n  AnalysisAlertsSettings,"
            )
            print("[+] Added AnalysisAlerts exports")
            changes_made += 1

    if changes_made == 0:
        print("[-] No changes made (already patched?)")
        return False

    with open("terminal/b2TMcBQ2.js", "w") as f:
        f.write(content)

    return True

if __name__ == "__main__":
    if patch_analysis():
        print("\n[+] patch_alerts_analysis.py completed successfully")
        sys.exit(0)
    else:
        print("\n[-] patch_alerts_analysis.py failed")
        sys.exit(1)
