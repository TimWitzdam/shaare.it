---
title: "TypeError: Can only use .str accessor with string values!"
description: "Why using the `.str` accessor on non-string Series raises an error and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: Can only use .str accessor with string values!

```bash
$ python -c "import pandas as pd; s = pd.Series([1,2,3]); s.str.lower()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: Can only use .str accessor with string values!
```

### Why this happens

The `.str` accessor is only valid for string values. If your Series dtype is numeric or contains non-string types, using `.str` will raise a `TypeError`.

### Fix

Convert the Series to string values first using `.astype(str)` or ensure the column contains strings before using the `.str` accessor. Alternatively handle non-string values before calling `.str`.

#### Wrong code

```python
import pandas as pd

s = pd.Series([1, 2, 3])
# Raises TypeError because these are not strings
s.str.lower()
```

#### Fixed code

```python
import pandas as pd

s = pd.Series([1, 2, 3])
# Convert values to strings first
print(s.astype(str).str.zfill(2))

# Or check dtype and only apply .str when appropriate
if s.dtype == 'O' or s.dtype == 'string':
    print(s.str.lower())
else:
    print(s.astype(str).str.lower())
```
