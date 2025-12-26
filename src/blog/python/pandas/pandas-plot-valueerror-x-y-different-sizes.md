---
title: "ValueError: x and y must have the same first dimension when plotting"
description: "Why Matplotlib/Pandas raises errors when x and y data are of different lengths when plotting and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: x and y must have the same first dimension when plotting (Pandas/Matplotlib)

```bash
$ python - << 'PY'
import pandas as pd

# x and y have different lengths
try:
    df = pd.DataFrame({'x': [1, 2, 3], 'y': [1, 2]})
    df.plot(x='x', y='y')
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

When plotting, Matplotlib expects the `x` and `y` arrays to have the same length. If you pass mismatched arrays (for example, due to missing data, dropped rows, or misaligned indices), Pandas will forward those arrays to Matplotlib which raises a `ValueError` like `x and y must have same first dimension`.

### Fix

- Ensure the `x` and `y` arrays are aligned and of the same length. Use `dropna` or `reindex` to align, or pass grouped/filtered data that matches.
- If you inadvertently truncated one column, find and correct the cause (filtering/dropping rows without applying to all columns).

#### Wrong code

```python
df = pd.DataFrame({'x': [1, 2, 3], 'y': [1, 2]})
# mismatch -> raises ValueError
df.plot(x='x', y='y')
```

#### Fixed code

```python
# Make y the same length as x, e.g. by using NaN for missing values
df = pd.DataFrame({'x': [1, 2, 3], 'y': [1, 2, None]})
df.plot(x='x', y='y')

# Or ensure you use rows with both x and y present
df = pd.DataFrame({'x': [1, 2, 3], 'y': [1, 2, 3]})
df.plot(x='x', y='y')

# Or drop mismatched rows
aligned = df.dropna(subset=['x', 'y']).set_index('x')
aligned.plot(y='y')
```

If you're plotting grouped data, ensure each group's `x`/`y` series are of the same length for the plot type you choose.
