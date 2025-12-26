---
title: "Plot: duplicated legend labels or confusing legend entries"
description: "Why you may see duplicated legend labels or confusing legends when plotting with duplicate series names and how to fix or deduplicate legend entries."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## Plot duplicate legend entries when column labels are not unique

```bash
$ python - <<'PY'
import pandas as pd

# Two columns with the same name (duplicate labels)
cols = ['x', 's', 's']
df = pd.DataFrame([[1, 2, 3], [2, 3, 4]], columns=cols)
ax = df.plot()  # legend may show 's' twice which is confusing
PY
```

### Why this happens

Matplotlib legends use labels passed in from the plotting calls. If multiple plotted series share the same label (for example duplicate DataFrame column names), the legend will display the label multiple times — this is not an error, but it can be confusing. Similarly, if you intentionally pass identical labels in repeated plot calls, the legend will duplicate.

### Fix

- Ensure column names are unique before plotting (recommended): rename duplicated columns.
- Alternatively, deduplicate the legend entries after plotting by filtering handles & labels.

#### Wrong code

```python
# DataFrame has duplicate column names; df.plot duplicates legend entries
cols = ['x', 's', 's']
df = pd.DataFrame([[1,2,3],[2,3,4]], columns=cols)
df.plot()
```

#### Fixed code

```python
# 1) Rename duplicate columns
df.columns = ['x', 's_1', 's_2']
df.plot()

# 2) Deduplicate legend entries after plotting
import matplotlib.pyplot as plt
ax = df.plot()
handles, labels = ax.get_legend_handles_labels()
unique = dict(zip(labels, handles))  # keeps the last occurrence
ax.legend(unique.values(), unique.keys())
plt.show()
```

If duplicate labels are intentional but you just want a single legend entry, deduplicate the legend after plotting using `get_legend_handles_labels` and then create a filtered legend mapping.
