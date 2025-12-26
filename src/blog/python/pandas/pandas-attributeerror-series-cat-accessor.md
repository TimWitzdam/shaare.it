---
title: "AttributeError: Series.cat accessor only for categorical dtype"
description: "Why `.cat` accessor fails on Series that aren't categorical and how to convert to `category` dtype to use it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## AttributeError: `.cat` accessor can only be used with a categorical dtype

```bash
$ python - << 'PY'
import pandas as pd

s = pd.Series(['a', 'b', 'a'])
try:
    print(s.cat.codes)
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

The `Series.cat` accessor provides categorical-specific methods (like `.codes`, `.categories`, `.add_categories`) and is available only when the Series dtype is `category`. If you try to access `.cat` on a Series with object/string dtype (or other non-categorical dtypes), pandas raises an error.

### Fix

Convert the Series to `category` first (if appropriate), then use the `.cat` accessor.

#### Wrong code

```python
# Series has object dtype by default
s = pd.Series(['a', 'b', 'a'])
# This raises a pandas error: the cat accessor requires category dtype
s.cat.codes
```

#### Fixed code

```python
# Convert to categorical dtype
s = s.astype('category')
print(s.cat.codes)  # now works

# Or build a Categorical directly
s2 = pd.Categorical(['a', 'b', 'a'])
print(pd.Series(s2).cat.codes)

# If the dtype is not categorical by design, consider whether using cat is appropriate
# Otherwise use unique() or factorize() for code-like behavior
print(pd.factorize(pd.Series(['a', 'b', 'a']))[0])
```
