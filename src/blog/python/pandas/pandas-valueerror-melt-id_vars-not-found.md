---
title: "ValueError / KeyError: id_vars / value_vars not found when using pd.melt"
description: "How pd.melt raises errors when `id_vars` or `value_vars` contains column names that are not present, and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError / KeyError: id_vars / value_vars not found (pd.melt)

```bash
$ python - << 'PY'
import pandas as pd

df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
try:
    # 'id' doesn't exist in the DataFrame
    print(pd.melt(df, id_vars=['id'], value_vars=['B']))
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

`pd.melt` reshapes a DataFrame from wide to long format by using columns passed in `id_vars` (kept as identifier columns) and `value_vars` (the columns to unpivot). If you mistakenly pass names that don't exist in the DataFrame, pandas will raise a `KeyError` (or `ValueError` depending on context) because it can't find the requested columns.

This happens often after renaming columns, reading CSVs with unexpected headers, or when you accidentally pass a variable that contains the wrong column name or a list of names instead of a single name.

### Fix

Ensure that `id_vars` and `value_vars` refer to existing columns in the DataFrame. Use `df.columns` to inspect available columns, or pass the correct names; also handle unexpected headers when reading files.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
# 'id' doesn't exist
pd.melt(df, id_vars=['id'], value_vars=['B'])  # KeyError or ValueError
```

#### Fixed code

```python
import pandas as pd

df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
# use actual column names
print(pd.melt(df, id_vars=['A'], value_vars=['B']))

# If column names are dynamic or you are unsure, check columns
print(df.columns)

# If you read a file and the header is not where you expect, pass header parameter to read_csv
# df = pd.read_csv('file.csv', header=0)  # set header row properly
```

### Extra tips

- If you're building `id_vars`/`value_vars` dynamically, use `list(set(id_vars) & set(df.columns))` to only pass columns that exist.
- When your DataFrame has a MultiIndex on columns, make sure you pass tuples of labels or use `df.columns.get_level_values` to inspect levels.
