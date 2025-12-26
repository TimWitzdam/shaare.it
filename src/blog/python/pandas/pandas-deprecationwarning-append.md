---
title: "DeprecationWarning: DataFrame.append is deprecated"
description: "Why the DataFrame.append method is deprecated in pandas and how to migrate to pd.concat."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## DeprecationWarning: DataFrame.append is deprecated

```bash
$ python -W default -c "import pandas as pd; df1 = pd.DataFrame({'a':[1]}); df2 = pd.DataFrame({'a':[2]}); df1.append(df2)"
/usr/lib/python3/dist-packages/pandas/core/frame.py:...: FutureWarning: DataFrame.append is deprecated and will be removed from pandas in a future version. Use pd.concat instead.
  warnings.warn(...)
```

### Why this happens

Pandas' `DataFrame.append` creates a new object on each call and is inefficient for building DataFrames in a loop, and the API was slated for removal. Pandas now recommends using `pd.concat` which is clearer and faster for combining multiple DataFrames.

### Fix

Replace uses of `df.append` with `pd.concat` (or build a list of DataFrames and call `pd.concat` once). Also prefer `ignore_index=True` if you want a fresh index.

#### Wrong code

```python
import pandas as pd
df = pd.DataFrame()
for i in range(10):
    new_row = pd.DataFrame({'a':[i]})
    df = df.append(new_row)
```

#### Fixed code

```python
import pandas as pd
frames = []
for i in range(10):
    frames.append(pd.DataFrame({'a':[i]}))
df = pd.concat(frames, ignore_index=True)
```

Also, for merging two DataFrames once, use `pd.concat([df1, df2])` instead of `df1.append(df2)`.
