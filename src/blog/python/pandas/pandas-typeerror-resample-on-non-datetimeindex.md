---
title: "TypeError: Only valid with DatetimeIndex, TimedeltaIndex or PeriodIndex"
description: "Raised when calling resample on a DataFrame whose index isn't a datetimelike index — how to fix by setting the correct index or converting column types."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: Only valid with DatetimeIndex, TimedeltaIndex or PeriodIndex

```bash
$ python - <<'PY'
import pandas as pd

df = pd.DataFrame({'val': [1, 2, 3]}, index=[0, 1, 2])
print(df.resample('D').sum())
PY
Traceback (most recent call last):
  File "<string>", line 6, in <module>
TypeError: Only valid with DatetimeIndex, TimedeltaIndex or PeriodIndex, but got an index of type RangeIndex
```

### Why this happens

`DataFrame.resample()` is a time-series operation that requires the index to be a `DatetimeIndex`, `TimedeltaIndex`, or `PeriodIndex`. If the index is a `RangeIndex` or other non-datetime index, pandas cannot resample by time frequency.

Common causes:

- Using `resample` on a DataFrame with a default integer index.
- The time/datetime column is present but not set as the index.
- The column used as a new index wasn't converted to datetime dtype (`datetime64[ns]`).

### Fix

- Convert the column to datetime dtype with `pd.to_datetime` and set it as index: `df.set_index(pd.to_datetime(df['date']), inplace=True)`.
- Then call `resample` on that datetime index.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'date': ['2021-01-01', '2021-01-02'], 'val': [1, 2]})
# Wrong: resample on default RangeIndex
print(df.resample('D').sum())  # raises TypeError
```

#### Fixed code

```python
import pandas as pd

df = pd.DataFrame({'date': ['2021-01-01', '2021-01-02'], 'val': [1, 2]})
# Convert date column and set as index
df['date'] = pd.to_datetime(df['date'])
df = df.set_index('date')
print(df.resample('D').sum())  # Works
```

Notes:

- If you prefer not to modify the original index, use `df.set_index('date').resample('D')` instead.
