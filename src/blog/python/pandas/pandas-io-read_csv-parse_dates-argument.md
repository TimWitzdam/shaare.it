---
title: "ValueError / TypeError: parse_dates / date_parser misuse in read_csv"
description: "Common mistakes when using `parse_dates` and `date_parser` with pd.read_csv, including mis-specified signatures and expected inputs."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: date_parser receives unexpected number of arguments

```bash
$ python - <<'PY'
import pandas as pd
from io import StringIO

csv = "year,month,day,val\n2020,1,1,10\n2020,1,2,20\n"
# date_parser expects a single string but parse_dates combines multiple cols
pd.read_csv(StringIO(csv), parse_dates=[[0,1,2]], date_parser=lambda x: pd.to_datetime(x))
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: <lambda>() takes 1 positional argument but 3 were given
```

### Why this happens

When `parse_dates` combines multiple columns into one (e.g., `parse_dates=[[0,1,2]]`), pandas will pass multiple values to the `date_parser` function (one per column). If your `date_parser` function is defined to accept a single argument (a string) it will fail. Conversely, `date_parser` can receive a 1-D array per row if called vectorized, or multiple args depending on the environment/pandas version.

### Fix

- Accept multiple arguments in your `date_parser` function signature (e.g., `def parse(y, m, d): ...`) or accept a single vector and handle it accordingly (use `lambda x: pd.to_datetime(x[0] + '-' + x[1] + '-' + x[2])`).
- Or combine columns yourself using `df['date'] = pd.to_datetime(df['year'].astype(str) + '-' + df['month'].astype(str) + '-' + df['day'].astype(str))` after reading.
- Or pass `parse_dates` as a list of column names instead of nested lists if combining is not required.

#### Wrong code

```python
# date_parser expects a single string but pandas passes multiple column values
df = pd.read_csv(StringIO(csv), parse_dates=[[0,1,2]], date_parser=lambda s: pd.to_datetime(s))
```

#### Fixed code

```python
# Option 1: Accept multiple args
def parse_ymd(y, m, d):
    return pd.to_datetime(f"{y}-{m}-{d}")

df = pd.read_csv(StringIO(csv), parse_dates=[[0,1,2]], date_parser=parse_ymd)

# Option 2: Combine columns after reading
df = pd.read_csv(StringIO(csv))
df['date'] = pd.to_datetime(df['year'].astype(str) + '-' + df['month'].astype(str) + '-' + df['day'].astype(str))
```

If you need to support both older and newer pandas signature styles, write a parser that accepts `*args` and handles both vector and multi-arg inputs.
