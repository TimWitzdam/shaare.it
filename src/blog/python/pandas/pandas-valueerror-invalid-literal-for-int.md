---
title: "ValueError: invalid literal for int() with base 10"
description: "Why converting string columns to int sometimes fails and how to handle invalid values."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: invalid literal for int() with base 10

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':['1','x','3']}); df['a'].astype(int)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: invalid literal for int() with base 10: 'x'
```

### Why this happens

Pandas uses Python's built-in conversion to cast strings to integer. If any string is not a valid numeric literal (e.g., `'x'`, `'1.0'`, `'1,000'`), Python raises a `ValueError`.

### Fix

Use `pd.to_numeric(..., errors='coerce')` to coerce invalid parsing to `NaN` and then fill or drop them as needed. Or clean strings (remove commas, trim whitespace) before casting.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': ['1', 'x', '3']})
# Raises ValueError on invalid string
print(df['a'].astype(int))
```

#### Fixed code

```python
import pandas as pd

# Convert safely; invalid items become NaN
df['a'] = pd.to_numeric(df['a'], errors='coerce')
# Now either drop or fill NaNs
print(df['a'].fillna(0).astype(int))

# Or clean strings first
clean = df['a'].str.replace(',', '').str.strip()
print(pd.to_numeric(clean, errors='coerce'))
```
