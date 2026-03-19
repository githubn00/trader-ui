#!/usr/bin/env python3
"""
Patch script: Add alerts indicator settings class to Cj-wvwrR.js
"""

import sys

def patch_settings():
    with open("terminal/Cj-wvwrR.js", "r") as f:
        content = f.read()

    changes_made = 0

    # 1. Add case to the h() display-name function
    if 'case "alerts":' not in content:
        content = content.replace(
            'case "engulfing":\n      return "Engulfing Patterns";\n    default:',
            'case "engulfing":\n      return "Engulfing Patterns";\n    case "alerts":\n      return "Price & MA Alerts";\n    default:'
        )
        print("[+] Added alerts case to h() display-name function")
        changes_made += 1

    # 2. Add alerts settings class before "let ep2 = Ep2;"
    if 'let ap2 = Ap2;' not in content:
        alerts_class = '''const Ap2 = class s extends f {
  constructor(e) {
    super(
      e,
      {
        maPeriod: 50,
        maType: 0,
        maSlope: 20,
        breakoutPercent: 2,
        usePrice: 1,
        useMaCross: 1,
        useMaSlope: 1,
        useBreakout: 1,
      },
      {
        bullish: { color: 65280, thickness: 2 },
        bearish: { color: 16711680, thickness: 2 },
        maSlope: { color: 16776960, thickness: 1 },
        breakout: { color: 255, thickness: 2 },
      },
      s.type,
      s.category,
      s.digits,
      s.flags,
    );
  }
};
((Ap2.type = "alerts"), (Ap2.category = 6), (Ap2.digits = 0), (Ap2.flags = 0));
'''
        content = content.replace(
            "let ep2 = Ep2;",
            alerts_class + "let ap2 = Ap2;\nlet ep2 = Ep2;"
        )
        print("[+] Added Ap2 alerts settings class")
        changes_made += 1

    # 3. Add ap2 to exports
    if "ap2 as ap" not in content:
        content = content.replace(
            "ep2 as ep,",
            "ep2 as ep,\n  ap2 as ap,"
        )
        print("[+] Added ap2 to exports")
        changes_made += 1

    if changes_made == 0:
        print("[-] No changes made (already patched?)")
        return False

    with open("terminal/Cj-wvwrR.js", "w") as f:
        f.write(content)

    return True

if __name__ == "__main__":
    if patch_settings():
        print("\n[+] patch_alerts_settings.py completed successfully")
        sys.exit(0)
    else:
        print("\n[-] patch_alerts_settings.py failed")
        sys.exit(1)
