---
title: "TypeError / ValueError when reindexing with mixed dtypes in index"
description: "Why reindexing or alignment fails if the index contains mixed data types (strings, datetimes) and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError / ValueError when reindexing with mixed dtypes in index

```bash
$ python - <<'PY'
import pandas as pd
idx = pd.Index([pd.Timestamp('2020-01-01'), '2020-01-02'])
df = pd.DataFrame({'a':[1,2]}, index=idx)
df.reindex([pd.Timestamp('2020-01-01')])
PY
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: '<' not supported between instances of 'str' and 'Timestamp'
```

### Why this happens

Pandas expects index values to be comparable. If an `Index` contains mixed Python types (strings and `Timestamp`s, or numbers and strings), some operations—especially those which sort or compare labels like `reindex`, `sort_index`, or label-based slicing—attempt to compare incompatible types and raise `TypeError`.

### Fix

Make the index homogeneous by converting all values to the correct dtype (e.g., convert all to `datetime` using `pd.to_datetime`), or use a separate column for the mixed data and reindex by a uniform column.

#### Wrong code

```python
import pandas as pd
idx = pd.Index([pd.Timestamp('2020-01-01'), '2020-01-02'])
df = pd.DataFrame({'a':[1,2]}, index=idx)
df.reindex([pd.Timestamp('2020-01-01')])
```

#### Fixed code

```python
import pandas as pd
idx = pd.Index([pd.Timestamp('2020-01-01'), '2020-01-02'])
df = pd.DataFrame({'a':[1,2]}, index=idx)
# Convert to a single, valid dtype
df.index = pd.to_datetime(df.index, errors='coerce')
df.reindex([pd.Timestamp('2020-01-01')])
```

If you have values that can't be converted, use `errors='coerce'` and handle `NaT` values accordingly.
