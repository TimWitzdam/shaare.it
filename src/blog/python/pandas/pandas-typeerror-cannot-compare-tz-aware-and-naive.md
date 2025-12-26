---
title: "TypeError: Cannot compare tz-aware and tz-naive timestamps"
description: "Pandas raises TypeError when comparing timezone-aware and timezone-naive timestamps — how to unify timezones or drop tz info."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: Cannot compare tz-aware and tz-naive timestamps

```bash
$ python - <<'PY'
import pandas as pd

a = pd.Timestamp('2020-01-01', tz='UTC')
b = pd.Timestamp('2020-01-01')
print(a > b)
PY
Traceback (most recent call last):
  File "<string>", line 5, in <module>
TypeError: Cannot compare tz-aware and tz-naive timestamps
```

### Why this happens

A timezone-aware `Timestamp` has timezone information (e.g., `UTC`), while a naive `Timestamp` does not. Pandas is strict about comparisons between these two kinds because the comparison result depends on whether you consider the timezone offset. To avoid silent incorrect comparisons, pandas raises a `TypeError`.

### Fix

Convert both timestamps to the same timezone or remove timezone info using `tz_localize(None)` (which makes them naive) or use `tz_convert('UTC')` to align.

#### Wrong code

```python
import pandas as pd

# One timezone-aware and one timezone-naive
a = pd.Timestamp('2020-01-01', tz='UTC')
b = pd.Timestamp('2020-01-01')
print(a > b)  # TypeError
```

#### Fixed code

```python
import pandas as pd

# Option A: make both timezone-aware
a = pd.Timestamp('2020-01-01', tz='UTC')
b = pd.Timestamp('2020-01-01', tz='UTC')
print(a > b)

# Option B: make both timezone-naive
a = a.tz_localize(None)
b = b.tz_localize(None)  # no-op if already naive
print(a > b)

# Option C: convert a naive timezone-localized column in a DataFrame
# df['time'] = pd.to_datetime(df['time']).dt.tz_localize('UTC')
```

Notes:

- When handling timezone-aware data at scale, prefer keeping timestamps timezone-aware and using `tz_convert` to normalize.
- `tz_localize` converts naive timestamps to timezone-aware; `tz_convert` changes the timezone of an already aware timestamp.
