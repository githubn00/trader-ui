#!/usr/bin/env python3
"""
Complete implementation of AnalysisAlerts class in b2TMcBQ2.js
Follows the engulfing-patterns template with proper lifecycle methods.
"""

import sys

def patch_alerts():
    with open("terminal/b2TMcBQ2.js", "r") as f:
        content = f.read()

    changes = 0

    # 1. Add ap as ApS import from Cj-wvwrR.js
    if "ap as ApS" not in content:
        if "ep as EpS," in content:
            content = content.replace(
                "ep as EpS,",
                "ap as ApS,\n  ep as EpS,"
            )
            print("[+] Added ApS import from Cj-wvwrR.js")
            changes += 1

    # 2. Add cache maps for alerts (after engulfBearMap)
    if "const alertBullMap" not in content and "const alertsBullMap" not in content:
        if "const engulfBearMap = new Map()," in content:
            cache_maps = """const alertsBullMap = new Map(),
  alertsBearMap = new Map(),
  alertsSlopeMap = new Map(),
  alertsBreakoutMap = new Map(),
"""
            content = content.replace(
                "const engulfBearMap = new Map(),",
                "const engulfBearMap = new Map(),\n  " + cache_maps[:-1] + ","
            )
            print("[+] Added alerts cache maps")
            changes += 1

    # 3. Add helper functions for MA computation
    if "function alertsEma(" not in content:
        ma_helpers = '''
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
  const closes = new Float64Array(bars.length);
  for (let i = 0; i < bars.length; i++) {
    closes[i] = bars[i].close;
  }
  return maType === 1 ? alertsSma(closes, period) : alertsEma(closes, period);
}

function alertsCalc(bull, bear, slope, breakout, bars, ma, params, update) {
  const usePrice = params && params.usePrice ? params.usePrice : 1;
  const useMaCross = params && params.useMaCross ? params.useMaCross : 1;
  const useMaSlope = params && params.useMaSlope ? params.useMaSlope : 1;
  const useBreakout = params && params.useBreakout ? params.useBreakout : 1;
  const maSlope = (params && params.maSlope) || 20;
  const breakoutPercent = (params && params.breakoutPercent) || 2;

  const start = update ? Math.max(0, bars.length - 10) : 0;

  for (let i = start; i < bars.length; i++) {
    bull[i] = 0; bear[i] = 0; slope[i] = 0; breakout[i] = 0;

    const bar = bars[i];
    const close = bar.close, high = bar.high, low = bar.low, open = bar.open;

    // Price Action Pattern (5-bar range breakout)
    if (usePrice && i >= 5) {
      let maxHigh = high, minLow = low;
      for (let j = i - 5; j < i; j++) {
        maxHigh = Math.max(maxHigh, bars[j].high);
        minLow = Math.min(minLow, bars[j].low);
      }
      if (close > maxHigh && high === close) bull[i] = low;
      if (close < minLow && low === close) bear[i] = high;
    }

    // MA Crossovers
    if (useMaCross && ma && i > 0) {
      const prevClose = bars[i - 1].close;
      const prevMa = ma[i - 1];
      if (prevClose <= prevMa && close > ma[i]) bull[i] = low;
      if (prevClose >= prevMa && close < ma[i]) bear[i] = high;
    }

    // MA Slope Changes
    if (useMaSlope && ma && i >= maSlope) {
      const slopeNow = ma[i] - ma[i - maSlope];
      const slopePrev = ma[i - 1] - ma[i - 1 - maSlope];
      if (slopePrev <= 0 && slopeNow > 0) {
        slope[i] = (high + low) / 2;
      } else if (slopePrev >= 0 && slopeNow < 0) {
        slope[i] = (high + low) / 2;
      }
    }

    // Breakout (rapid price move)
    if (useBreakout && i > 0) {
      const pctChange = ((close - bars[i - 1].close) / bars[i - 1].close) * 100;
      if (Math.abs(pctChange) > breakoutPercent) {
        breakout[i] = (high + low) / 2;
      }
    }
  }
}

function alertsDrawUp(t, s, e, i) {
  const a = 5, n = 3;
  t.moveTo(s - a, e + n);
  t.lineTo(s, e - n * 2);
  t.lineTo(s + a, e + n);
  t.closePath();
  t.fillStyle = "#" + i.color.toString(16).padStart(6, "0");
  t.fill();
}

function alertsDrawDn(t, s, e, i) {
  const a = 5, n = 3;
  t.moveTo(s - a, e - n);
  t.lineTo(s, e + n * 2);
  t.lineTo(s + a, e - n);
  t.closePath();
  t.fillStyle = "#" + i.color.toString(16).padStart(6, "0");
  t.fill();
}

function alertsDrawCircle(t, s, e, i) {
  t.beginPath();
  t.arc(s, e, 4, 0, Math.PI * 2);
  t.strokeStyle = "#" + i.color.toString(16).padStart(6, "0");
  t.lineWidth = i.thickness || 1;
  t.stroke();
}

function alertsDrawSquare(t, s, e, i) {
  const sz = 5;
  t.fillStyle = "#" + i.color.toString(16).padStart(6, "0");
  t.fillRect(s - sz / 2, e - sz / 2, sz, sz);
}
'''

        if "function engulfEma(" in content:
            insert_pos = content.find("function engulfEma(")
            content = content[:insert_pos] + ma_helpers + "\n" + content[insert_pos:]
            print("[+] Added alerts helper functions")
            changes += 1

    # 4. Add AnalysisAlerts class (before engulfing class Ee2)
    if "class Ae2 extends ce" not in content:
        alerts_class = '''class Ae2 extends ce {
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
    const p2 = this.settings.params;
    const maPeriod = (p2 && p2.maPeriod != null) ? p2.maPeriod : 50;
    const maType = (p2 && p2.maType) || 0;
    const e = [this.baseHash(), maPeriod, maType].join("-");
    let bull = alertsBullMap.get(e), bear = alertsBearMap.get(e);
    let sl = alertsSlopeMap.get(e), br = alertsBreakoutMap.get(e);
    const ma = maPeriod > 0 ? alertsMa(s, maPeriod, maType) : null;
    if (bull && bear && sl && br) {
      if (t) alertsCalc(bull, bear, sl, br, s, ma, p2, true);
    } else {
      (bull = new Float64Array(s.length)),
        (bear = new Float64Array(s.length)),
        (sl = new Float64Array(s.length)),
        (br = new Float64Array(s.length)),
        alertsCalc(bull, bear, sl, br, s, ma, p2, false),
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
    let o = i.startX();
    const c = i.getFrom();
    for (let g = c, u = c + i.getCount() + 1; g < u; g++) {
      if (g >= 0) {
        let p = this._aBull && this._aBull[g];
        if (p) alertsDrawUp(t, o, this.valueToY(p), a);
        p = this._aBear && this._aBear[g];
        if (p) alertsDrawDn(t, o, this.valueToY(p), n);
        p = this._aSlope && this._aSlope[g];
        if (p) alertsDrawCircle(t, o, this.valueToY(p), l);
        p = this._aBreakout && this._aBreakout[g];
        if (p) alertsDrawSquare(t, o, this.valueToY(p), r);
      }
      o += i.getStep();
    }
  }
  value(t) { return []; }
}
'''
        if "class Ee2 extends ce" in content:
            insert_pos = content.find("class Ee2 extends ce")
            content = content[:insert_pos] + alerts_class + "\n" + content[insert_pos:]
            print("[+] Added AnalysisAlerts class (Ae2)")
            changes += 1

    # 5. Replace stub in module object with references to real classes
    if changes > 0:
        # Remove stub class definitions if they exist
        if "AnalysisAlerts: class {" in content:
            # Find and replace the stub
            stub_start = content.find("AnalysisAlerts: class {")
            if stub_start > 0:
                stub_end = content.find("};", stub_start) + 2
                real_class = "AnalysisAlerts: Ae2"
                content = content[:stub_start] + real_class + content[stub_end:]
                print("[+] Replaced stub AnalysisAlerts with Ae2")
                changes += 1

        if "AnalysisAlertsSettings: class {" in content:
            # Find and replace the settings stub
            stub_start = content.find("AnalysisAlertsSettings: class {")
            if stub_start > 0:
                stub_end = content.find("};", stub_start) + 2
                real_class = "AnalysisAlertsSettings: ApS"
                content = content[:stub_start] + real_class + content[stub_end:]
                print("[+] Replaced stub AnalysisAlertsSettings with ApS")
                changes += 1

    if changes == 0:
        print("[-] No changes made (already patched or incompatible state)")
        return False

    with open("terminal/b2TMcBQ2.js", "w") as f:
        f.write(content)

    return True

if __name__ == "__main__":
    if patch_alerts():
        print("\n[+] patch_alerts_full_impl.py completed successfully")
        sys.exit(0)
    else:
        print("\n[-] patch_alerts_full_impl.py failed")
        sys.exit(1)
