---
title: "SettingWithCopyWarning: A value is trying to be set on a copy of a slice"
description: "Why Pandas warns about chained assignment and how to correctly assign values."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## SettingWithCopyWarning: A value is trying to be set on a copy of a slice from a DataFrame

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2,3]}); df2 = df[df['a']>1]; df2['b'] = 1"
/usr/local/lib/python3.X/site-packages/pandas/core/indexing.py:XXX: SettingWithCopyWarning:
A value is trying to be set on a copy of a slice from a DataFrame.
Try using .loc[row_indexer,col_indexer] = value instead
  df2['b'] = 1
```

### Why this happens

Pandas may return a view _or_ a copy when you filter a DataFrame. Assigning to a DataFrame slice (chained indexing) might modify a copy instead of the original; Pandas warns you to prevent quiet bugs where the assignment doesn't affect the original DataFrame.

### Fix

Prefer a single `.loc` indexer on the original DataFrame to assign safely. Alternatively, explicitly create a copy with `.copy()` if you intentionally want a separate object.

#### Wrong code (chained indexing)

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2, 3]})
sub = df[df['a'] > 1]
# Might trigger SettingWithCopyWarning
sub['b'] = 1
```

#### Fixed code (use .loc or .copy())

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2, 3]})
# Assign directly on the original DataFrame
df.loc[df['a'] > 1, 'b'] = 1

# Or explicitly take a copy if you don't want to modify the original
sub = df[df['a'] > 1].copy()
sub['b'] = 1  # no warning
```
