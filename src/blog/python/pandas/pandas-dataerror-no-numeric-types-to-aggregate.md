---
title: "DataError: No numeric types to aggregate"
description: "Pandas raises DataError when aggregation functions are applied to non-numeric columns and no numeric data exists."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## pandas.core.base.DataError: No numeric types to aggregate

```bash
$ python - <<'PY'
import pandas as pd

df = pd.DataFrame({'group': ['a','a','b'], 'val': ['x','y','z']})
df.groupby('group').agg('mean')
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
pandas.core.base.DataError: No numeric types to aggregate
```

### Why this happens

Aggregation functions like `mean`, `sum`, and other numeric reducers require numeric dtypes. If the columns passed to `groupby().agg()` or `pivot_table` contain only object/string columns (or other non-numeric dtypes) that can't be coerced to numbers, pandas has nothing numeric to aggregate and raises this `DataError`.

### Fix

Convert relevant columns to numeric types using `pd.to_numeric` or `astype`, or apply a different aggregation that's valid for the column type (like `count`, `first`, or a custom aggregator). Use `errors='coerce'` with `to_numeric` if the invalid strings should become `NaN` and be handled accordingly.

#### Wrong code

```python
# applying mean to string columns
df.groupby('group')['val'].agg('mean')
```

#### Fixed code

```python
# Convert to numeric if the values are numeric stored as strings
df['val_num'] = pd.to_numeric(df['val'], errors='coerce')
# Then aggregate
df.groupby('group')['val_num'].mean()

# Or use a valid aggregator for strings
df.groupby('group')['val'].agg('first')
```

If conversion is not appropriate, pick an aggregator appropriate for your dtype or fix your input data upstream.
