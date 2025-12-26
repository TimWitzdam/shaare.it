---
title: "TypeError: custom formatter must return strings/scalars for DataFrame styling or plotting formatters"
description: "Why custom formatter functions passed to DataFrame.style.format or plotting formatters can raise TypeError if they return the wrong type or shape, and how to fix them."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: custom formatter functions must return strings/scalars

```bash
$ python - << 'PY'
import pandas as pd

# a custom formatter that returns a list (!) causes errors
try:
    df = pd.DataFrame({'a': [1.234]})
    def bad_formatter(x):
        return [f"{x:.2f}"]  # returns a list, not a scalar string
    s = df.style.format(bad_formatter)
    print(type(s).__name__)  # may not raise until displayed, but function is wrong
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

Functions passed to formatters (like `DataFrame.style.format` or plot `formatter` callbacks) must return a scalar (typically a string or number). If your function returns a list, tuple or other non-scalar value, the higher-level API may raise `TypeError` or `ValueError` (or render incorrectly) when it expects one scalar result per cell.

This also happens when a function returns an array (like `np.array`), a Series, or a DataFrame — which have incorrect shapes.

### Fix

- Make sure your formatter returns a single scalar value (often a formatted string).
- Use `applymap` or `format` with `subset` to apply scalar functions per cell.
- For plotting formatters, ensure the formatting function returns a string for each tick label.

#### Wrong code

```python
# Returns a list, not a scalar
def bad_formatter(x):
    return ["{:.2f}".format(x)]

df.style.format(bad_formatter)  # Wrong: function returns a list
```

#### Fixed code

```python
# Return a string per cell
def good_formatter(x):
    return "{:.2f}".format(x)

df.style.format(good_formatter)
```

#### Plot formatter example

```python
# Matplotlib expects a function that returns a string per tick
import matplotlib.pyplot as plt

x = [1,2,3]
y = [10,20,30]

fig, ax = plt.subplots()
ax.plot(x, y)
# Wrong formatter
try:
    ax.yaxis.set_major_formatter(lambda val, pos: [f"{val}"])
except Exception as e:
    print(type(e).__name__, e)
# Correct formatter
from matplotlib.ticker import FuncFormatter
ax.yaxis.set_major_formatter(FuncFormatter(lambda val, pos: f"{val:.0f}"))
```

If your formatter needs to return complex structures, transform your data first and pass a simpler scalar value to the formatter.
