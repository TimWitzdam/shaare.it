---
title: "TypeError: rename expects a mapping or callable (not a list)"
description: "Why df.rename fails when you pass a list instead of a mapping or function, and how to rename correctly."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: rename expects a mapping or callable (not a list)

```bash
$ python - <<'PY'
import pandas as pd
df = pd.DataFrame({'a': [1, 2]})
df.rename(['b'])
PY
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: rename() must be a mapper or a callable
```

### Why this happens

`DataFrame.rename` expects either a mapping (like a dictionary) or a callable to transform labels. Passing a list causes pandas to interpret the argument incorrectly and raises a `TypeError`.

### Fix

Use a dictionary mapping old names to new names (preferred), or assign directly to `df.columns` if you want to replace all names with a list.

#### Wrong code

```python
import pandas as pd
df = pd.DataFrame({'a': [1, 2]})
# Passes a list instead of a mapping -> TypeError
df.rename(['b'])
```

#### Fixed code

```python
import pandas as pd
df = pd.DataFrame({'a': [1, 2]})
# Option 1: use mapping
df.rename(columns={'a': 'b'}, inplace=True)

# Option 2: assign a full list of column names
df.columns = ['b']
```
