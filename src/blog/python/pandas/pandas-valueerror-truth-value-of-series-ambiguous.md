---
title: "ValueError: The truth value of a Series is ambiguous"
description: "How boolean evaluation of Pandas Series/Index is ambiguous and how to use any/all or bitwise operations correctly."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: The truth value of a Series is ambiguous

```bash
$ python -c "import pandas as pd; s = pd.Series([True, False]); print(bool(s))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: The truth value of a Series is ambiguous. Use a.empty, a.bool(), a.item(), a.any() or a.all().
```

### Why this happens

A Pandas Series represents a vector of boolean values. Evaluating a vector's truth value (`if series:`) is ambiguous: should the condition be true if any value is true, all values are true, or something else? Pandas prevents this ambiguity and raises an error.

### Fix

Be explicit: use `.any()` or `.all()` for aggregates, or use element-wise boolean operations with bitwise operators (`&`, `|`) and parentheses. If you need a single boolean scalar, use `.any()` or `.all()`.

#### Wrong code

```python
import pandas as pd

s = pd.Series([True, False])
# Ambiguous boolean evaluation
if s:
    print('true')
```

#### Fixed code

```python
import pandas as pd

s = pd.Series([True, False])
# Use .any() or .all() to make intent explicit
if s.any():
    print('At least one True')
if s.all():
    print('All True')

# Use bitwise ops for element-wise combination
mask = (df['a'] > 0) & (df['b'] < 10)
```
