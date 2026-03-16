"""Create MnSignal.js from cNlpOkCc.js with the following changes:
1. Replace chart.tree.title -> chart.signals.title
2. Replace chart.tree.close -> chart.signals.close
3. Replace chart.tree.empty -> chart.signals.empty
4. Add SIGNAL_TYPES set and filter indicators by type
"""

with open('terminal/cNlpOkCc.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update title string reference
old_title = 'window.lang.chart.tree.title'
new_title = 'window.lang.chart.signals.title'
assert content.count(old_title) >= 1, f"Expected title references, got {content.count(old_title)}"
content = content.replace(old_title, new_title)

# 2. Update close string reference
old_close = 'window.lang.chart.tree.close'
new_close = 'window.lang.chart.signals.close'
assert content.count(old_close) >= 1, f"Expected close references, got {content.count(old_close)}"
content = content.replace(old_close, new_close)

# 3. Update empty string reference
old_empty = 'window.lang.chart.tree.empty'
new_empty = 'window.lang.chart.signals.empty'
assert content.count(old_empty) >= 1, f"Expected empty references, got {content.count(old_empty)}"
content = content.replace(old_empty, new_empty)

# 4. Add SIGNAL_TYPES set before the wt class and filter indicators by it
old_filter = 'u.data.filter((t=>!(16&t.settings.flags)))'
new_filter = 'u.data.filter((t=>Vt.has(t.settings.type)&&!(16&t.settings.flags)))'
assert content.count(old_filter) == 1, f"Expected 1 match for filter, got {content.count(old_filter)}"
content = content.replace(old_filter, new_filter, 1)

# Add SIGNAL_TYPES const before the wt class
old_class = 'class wt extends t{'
new_class = 'const Vt=new Set();class wt extends t{'
assert content.count(old_class) == 1, f"Expected 1 match for class, got {content.count(old_class)}"
content = content.replace(old_class, new_class, 1)

with open('terminal/MnSignal.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done. MnSignal.js created.")
print(f"File length: {len(content)}")
