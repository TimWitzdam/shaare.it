---
title: "TypeError: sequence item 0: expected str instance, int found (joining list-like values)"
description: "Why join/str.join raises a TypeError when elements are not strings (NaN, numbers) and how to fix by casting or filtering."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: sequence item 0: expected str instance, int found

```bash
$ python - <<'PY'
import pandas as pd

df = pd.DataFrame({'tags': [['a','b'], [1,2], None]})
# when joining list-like strings, but a list contains ints
df['joined'] = df['tags'].apply('|'.join)
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: sequence item 0: expected str instance, int found
```

### Why this happens

Python's `str.join()` expects all items in the iterable to be strings. When a list contains non-string types like `int` or `float` (or `None`), `join` raises a `TypeError`. In pandas code it's common to apply `join` across list-like cells; any non-string item in those lists will cause this error.

### Fix

Convert list elements to strings with `map(str)` or filter out/replace non-string (e.g., `None` or `NaN`) before joining. If the column is mixed (some lists, some scalars), normalize it first.

#### Wrong code

```python
# assumes each element is a list-of-strings
df['joined'] = df['tags'].apply('|'.join)
```

#### Fixed code

```python
# 1) Make items strings
df['joined'] = df['tags'].apply(lambda lst: '|'.join(map(str, lst)) if isinstance(lst, list) else '')

# 2) Filter out None/NaN and ensure all are strings
df['joined'] = df['tags'].apply(lambda lst: '|'.join(str(x) for x in lst if pd.notna(x)) if isinstance(lst, list) else '')

# 3) Use a safe join helper
import math

def safe_join(x):
    if isinstance(x, list):
        return '|'.join(str(i) for i in x if i is not None)
    return ''

df['joined'] = df['tags'].apply(safe_join)
```

Handle `NaN`/`None` carefully: use `pd.notna(x)` or fillna before applying.
