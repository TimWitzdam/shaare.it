---
title: "KeyError: 'column_name'"
description: "Pandas KeyError when trying to access a non-existent column and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## KeyError: 'column_name'

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2]}); print(df['b'])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
KeyError: 'b'
```

### Why this happens

A KeyError is raised when you try to access a column that doesn't exist in the DataFrame. This commonly happens because of typos in column names, wrong assumptions about the data, or accidental column renaming.

### Fix

Verify column names with `df.columns` and use safe accessors. Use `df.get('col')` or `df.reindex` when you expect missing columns. Check for casing and whitespace differences.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
print(df['b'])  # raises KeyError
```

#### Fixed code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
# Safely access without raising
print(df.get('b'))  # None if column missing

# Or check before accessing
if 'b' in df.columns:
    print(df['b'])
else:
    print('column b is missing')
```
