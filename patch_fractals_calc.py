"""
Patch: Make the Fractals indicator calculation use the left/right bar params.

Changes:
  terminal/b2TMcBQ2.js
    - Oe(): accept left/right args, replace hardcoded-2 comparisons with loops
    - je._calc(): read params.left/right, include them in the cache key,
      pass them through to Oe()
"""

with open('terminal/b2TMcBQ2.js', 'r', encoding='utf-8') as f:
    content = f.read()

# ── 1. Replace Oe() ────────────────────────────────────────────────────────
old_oe = '''function Oe(t, s, e, i = !1) {
  let a = e.length - 5;
  i || (a = 2);
  for (let n = a, l = e.length - 2; n < l; n++)
    (e.high(n) > e.high(n + 1) &&
      e.high(n) > e.high(n + 2) &&
      e.high(n) >= e.high(n - 1) &&
      e.high(n) >= e.high(n - 2) &&
      (t[n] = e.high(n)),
      e.low(n) < e.low(n + 1) &&
        e.low(n) < e.low(n + 2) &&
        e.low(n) <= e.low(n - 1) &&
        e.low(n) <= e.low(n - 2) &&
        (s[n] = e.low(n)));
}'''

new_oe = '''function Oe(t, s, e, left, right, i = !1) {
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
}'''

assert content.count(old_oe) == 1, f'Expected 1 Oe match, got {content.count(old_oe)}'
content = content.replace(old_oe, new_oe, 1)

# ── 2. Replace je._calc() ──────────────────────────────────────────────────
old_calc = '''  _calc(t) {
    super._calc();
    const s = this.chart.bars,
      e = this.baseHash();
    let i = Te.get(e),
      a = He.get(e);
    if (i && a) t && Oe(i, a, s, !0);
    else {
      ((i = new Float64Array(s.length)),
        (a = new Float64Array(s.length)),
        Oe(i, a, s),
        Te.set(e, i),
        He.set(e, a));
      const t = vs(this, v);
      (t && (Te.delete(t), He.delete(t)), _s(this, v, e));
    }
    (_s(this, A, i), _s(this, M, a));
  }'''

new_calc = '''  _calc(t) {
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
  }'''

assert content.count(old_calc) == 1, f'Expected 1 _calc match, got {content.count(old_calc)}'
content = content.replace(old_calc, new_calc, 1)

with open('terminal/b2TMcBQ2.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done.')
print(f'New file length: {len(content)}')
