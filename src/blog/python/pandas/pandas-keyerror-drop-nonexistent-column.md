---
title: "KeyError: trying to drop non-existent column"
description: "Why `df.drop()` raises KeyError when you try to drop columns that aren't present, and how to handle it safely using `errors='ignore'` or checks."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## KeyError: trying to drop a column that doesn't exist

```bash
$ python - << 'PY'
import pandas as pd

df = pd.DataFrame({'a': [1, 2], 'b': [3, 4]})
try:
    print(df.drop(columns=['c']))
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

`DataFrame.drop()` refuses to drop columns or indexes that are not present unless you explicitly allow that by passing `errors='ignore'`. This is helpful to avoid silently ignoring typos in column names, but can also be surprising if you intentionally attempt to drop a column that isn't there.

### Fix

- Use `errors='ignore'` to safely attempt a drop without throwing an error.
- Or explicitly check for column existence first: `if col in df.columns: df.drop(columns=[col])`.

#### Wrong code

```python
# This raises a KeyError if 'c' is not present
df.drop(columns=['c'])
```

#### Fixed code: Use errors='ignore'

```python
# Ignore if the column does not exist
df.drop(columns=['c'], errors='ignore')
```

#### Fixed code: Check and drop

```python
# Check first
to_drop = [c for c in ['c', 'd'] if c in df.columns]
if to_drop:
    df = df.drop(columns=to_drop)
```

Use whichever approach fits your workflow: prefer explicit checks for critical column manipulations, and `errors='ignore'` for convenience when columns may or may not be present.
