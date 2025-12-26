---
title: "AttributeError: Can only use .dt accessor with datetimelike values"
description: "Using the .dt accessor on non-datetime Series raises an AttributeError — how to convert and fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## AttributeError: Can only use .dt accessor with datetimelike values

```bash
$ python - <<'PY'
import pandas as pd
s = pd.Series(['2020-01-01', '2020-02-01'])
print(s.dt.year)
PY
Traceback (most recent call last):
  File "<string>", line 4, in <module>
AttributeError: Can only use .dt accessor with datetimelike values
```

### Why this happens

The `.dt` accessor is available only on Series with datetimelike dtypes (datetime64, period, timedelta). If your Series contains strings or objects that look like datetimes, `.dt` can't be used until the dtype is converted.

### Fix

Convert the Series to datetime using `pd.to_datetime` and then use `.dt`: `s = pd.to_datetime(s)`.

#### Wrong code

```python
import pandas as pd
s = pd.Series(['2020-01-01', '2020-02-01'])
# Raises AttributeError because dtype is object (strings), not datetime
print(s.dt.year)
```

#### Fixed code

```python
import pandas as pd
s = pd.Series(['2020-01-01', '2020-02-01'])
# Convert strings to datetime first
s = pd.to_datetime(s)
print(s.dt.year)  # Works: prints Series of years
```

Optional considerations:

- Use `errors='coerce'` with `pd.to_datetime` for malformed dates to get NaT rather than an exception.
- If the Series is part of a DataFrame column, assign back: `df['date'] = pd.to_datetime(df['date'])`.
