---
title: "ValueError: could not convert string to float"
description: "When casting string values to floats in Pandas fails due to invalid string contents."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: could not convert string to float: 'abc'

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':['1.2','two','3.4']}); df['a'].astype(float)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: could not convert string to float: 'two'
```

### Why this happens

A `ValueError: could not convert string to float` means at least one value in the column cannot be parsed as a numeric value. Common causes: non-numeric text, thousands separators (commas), stray characters, or localized decimal separators.

### Fix

Use `pd.to_numeric(..., errors='coerce')` to convert invalid values to `NaN`, clean the strings (`str.replace` to remove commas), or use `locale`-aware parsing if necessary.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': ['1.2', 'two', '3.4']})
# raises ValueError
print(df['a'].astype(float))
```

#### Fixed code

```python
import pandas as pd

# Convert safely by coercing errors to NaN
df['num'] = pd.to_numeric(df['a'], errors='coerce')
print(df['num'])

# Or clean strings first (remove thousands separators etc.)
df['clean'] = df['a'].str.replace(',', '').astype(float)
print(df['clean'])
```
