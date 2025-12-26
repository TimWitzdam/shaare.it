---
title: "TypeError: explode() expected list-like values"
description: "Why Series/DataFrame.explode errors happen when entries aren't list-like and how to fix them."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError / ValueError: explode() expected list-like values

```bash
$ python - << 'PY'
import pandas as pd

# One row contains an int, which is not list-like (iterable)
df = pd.DataFrame({'tags': [['a', 'b'], 1, None]})
try:
    print(df.explode('tags'))
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

`Series.explode()` (and `DataFrame.explode`) expects cells to contain list-like items (lists, tuples, arrays) so it can expand them into multiple rows. When a cell contains a scalar that is not list-like (for example, an `int` or `float`), Python treats it as a non-iterable and `explode` will raise a `TypeError` (e.g., `'int' object is not iterable`). Strings are technically iterable, so `explode` will split them character-by-character — another source of surprising output.

### Fix

Normalize the column so every cell is a list-like (or `NaN`/`None`) before calling `explode`. Convert scalars to single-item lists, and treat strings specially if you don't want them split into characters.

#### Wrong code

```python
# Fails if some rows are scalars
df = pd.DataFrame({'tags': [['a', 'b'], 1, None]})
df.explode('tags')  # TypeError: 'int' object is not iterable
```

#### Fixed code

```python
import pandas as pd
import numpy as np

df = pd.DataFrame({'tags': [['a','b'], 1, None, 'hello']})

# Normalize so each value is list-like, but avoid splitting strings into characters

def ensure_list_like(x):
    if pd.isna(x):
        return np.nan
    if isinstance(x, list) or isinstance(x, tuple):
        return list(x)
    # Detect strings and convert them to a single-item list if desired
    if isinstance(x, str):
        return [x]
    # For scalars, wrap them in a list
    return [x]

# Apply normalization and then explode
s = df['tags'].apply(ensure_list_like)
print(s)
df['tags'] = s
print(df.explode('tags'))
```

Other options:

- Use `apply` with `pd.notna(x)` and conditional wrapping.
- When strings should be exploded into characters, treat them as list-like on purpose. Otherwise wrap strings too.
