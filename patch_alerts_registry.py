#!/usr/bin/env python3
"""
Patch script: Register alerts in indicator picker and manage signals panel
"""

import sys

def patch_registry():
    changes_made = 0

    # Patch C2M0l3R7.js - Add to registry and yt array
    try:
        with open("terminal/C2M0l3R7.js", "r") as f:
            content = f.read()

        # Add registry entry for alerts
        if '["alerts",' not in content:
            if '["engulfing", 6,' in content:
                content = content.replace(
                    '["engulfing", 6, "Engulfing", "Engulfing Patterns"]',
                    '["alerts", 6, "Alerts", "Price & MA Alerts"],\n    ["engulfing", 6, "Engulfing", "Engulfing Patterns"]'
                )
                print("[+] Added alerts to C2M0l3R7 indicator registry")
                changes_made += 1

        with open("terminal/C2M0l3R7.js", "w") as f:
            f.write(content)
    except Exception as e:
        print(f"[-] Error patching C2M0l3R7.js: {e}")
        return False

    # Patch MnSignal.js - Add to signal types set
    try:
        with open("terminal/MnSignal.js", "r") as f:
            content = f.read()

        if '"alerts"' not in content:
            # Update the Vt set at the end of the file
            if 'new Set(["engulfing"])' in content:
                content = content.replace(
                    'new Set(["engulfing"])',
                    'new Set(["engulfing", "alerts"])'
                )
                print("[+] Added alerts to MnSignal.js SIGNAL_TYPES set")
                changes_made += 1

        with open("terminal/MnSignal.js", "w") as f:
            f.write(content)
    except Exception as e:
        print(f"[-] Error patching MnSignal.js: {e}")
        return False

    if changes_made == 0:
        print("[-] No changes made (already patched?)")
        return False

    return True

if __name__ == "__main__":
    if patch_registry():
        print("\n[+] patch_alerts_registry.py completed successfully")
        sys.exit(0)
    else:
        print("\n[-] patch_alerts_registry.py failed")
        sys.exit(1)
