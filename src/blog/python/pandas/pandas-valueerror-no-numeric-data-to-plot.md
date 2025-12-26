---
title: "ValueError: No numeric types to plot"
description: "Plotting errors when using DataFrame.plot() or Series.plot() without numeric columns — how to convert and pick the right columns."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: No numeric types to plot

```bash
$ python - <<'PY'
import pandas as pd

df = pd.DataFrame({'name': ['a', 'b'], 'label': ['x', 'y']})
print(df.plot())
PY
Traceback (most recent call last):
  File "<string>", line 5, in <module>
ValueError: No numeric types to plot
```

### Why this happens

Pandas plotting functions (which use matplotlib under the hood) expect numeric dtypes for the axes. If every column is non-numeric (string/object), pandas cannot infer how to plot and raises `ValueError`.

### Fix

- Select columns with numeric data explicitly: `df[['col1','col2']].plot()`.
- Convert columns to numeric type with `pd.to_numeric(df['col'])` or `df['col'] = df['col'].astype(float)`.
- For categorical plotting, use `value_counts()` or convert to a `category` and use `plot(kind='bar')`.

#### Wrong code

```python
import pandas as pd

# No numeric columns
df = pd.DataFrame({'name': ['a', 'b'], 'label': ['x', 'y']})
df.plot()  # ValueError
```

#### Fixed code

```python
import pandas as pd

# Option 1: convert data to numeric
df = pd.DataFrame({'x': ['1', '2'], 'y': ['3', '4']})
df = df.astype(float)
df.plot()  # Works

# Option 2: select numeric columns only
import numpy as np

mixed = pd.DataFrame({
    'name': ['a','b'],
    'value': [1, 2]
})
mixed[['value']].plot()

# Option 3: plot categorical data differently
counts = df['name'].value_counts()
counts.plot(kind='bar')
```

Notes:

- Use `df.select_dtypes(include=[np.number])` to choose numeric columns dynamically.
