with open('terminal/CBg_RnCD.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add signals tab to chart.indicators.tabs
old_tabs = '              volumes: "Volumes",\n            },'
new_tabs = '              volumes: "Volumes",\n              signals: "Signals",\n            },'
assert content.count(old_tabs) == 1, f"Expected 1 match for tabs anchor, got {content.count(old_tabs)}"
content = content.replace(old_tabs, new_tabs, 1)

# 2. Add chart.signals section before chart.tree
old_tree = '          tree: {\n            close: "Close",\n            empty: "You don\'t have any objects on the chart",'
new_tree = '          signals: {\n            close: "Close",\n            empty: "You don\'t have any signals on the chart",\n            title: "Manage Signals",\n          },\n          tree: {\n            close: "Close",\n            empty: "You don\'t have any objects on the chart",'
assert content.count(old_tree) == 1, f"Expected 1 match for tree anchor, got {content.count(old_tree)}"
content = content.replace(old_tree, new_tree, 1)

with open('terminal/CBg_RnCD.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done. CBg_RnCD.js updated.")
