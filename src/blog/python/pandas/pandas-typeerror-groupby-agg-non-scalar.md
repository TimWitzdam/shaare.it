---
title: "TypeError/ValueError: Aggregation function did not reduce — groupby/agg returning non-scalar results"
description: "Why groupby.agg fails when an aggregator returns lists or sequences and how to properly aggregate or apply to get multi-column results."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError/ValueError: Aggregation produced non-scalar values

```bash
$ python - <<'PY'
import pandas as pd

df = pd.DataFrame({'id': [1, 1, 2], 'v': [10, 20, 30]})
# Wrong: the function returns a list (non-scalar)
print(df.groupby('id').agg(lambda s: [s.min(), s.max()]))
PY
Traceback (most recent call last):
  File "<string>", line 6, in <module>
ValueError: Function does not reduce
```

### Why this happens

`groupby.agg` expects the aggregation function to return a scalar per group (e.g., a number or string). If your aggregator returns a list/array/Series, pandas cannot place that result in a single column; it will raise a `ValueError` or `TypeError` complaining the function did not reduce to a scalar.

### Fix

- If you want multiple aggregated stats, pass a list of functions to `agg`: `df.groupby('id')['v'].agg(['min', 'max'])`.
- If you need a custom multi-column result, use `groupby.apply` returning a `pd.Series` or `pd.DataFrame` or use `agg` with named aggregations.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'id': [1, 1, 2], 'v': [10, 20, 30]})
# This returns a list for each group; agg expects a scalar
df.groupby('id').agg(lambda s: [s.min(), s.max()])  # ValueError
```

#### Fixed code (use agg with multiple functions)

```python
import pandas as pd

df = pd.DataFrame({'id': [1, 1, 2], 'v': [10, 20, 30]})
# Use agg with a list of functions
out = df.groupby('id')['v'].agg(['min', 'max'])
print(out)
```

#### Fixed code (use apply and return Series)

```python
import pandas as pd

def min_max(s):
    return pd.Series({'min': s.min(), 'max': s.max()})

out2 = df.groupby('id')['v'].apply(min_max).unstack()
print(out2)
```

Notes:

- Avoid returning lists from your aggregator when using `agg`.
- `apply` is more flexible but slower; prefer `agg` for standard aggregations and known functions.
