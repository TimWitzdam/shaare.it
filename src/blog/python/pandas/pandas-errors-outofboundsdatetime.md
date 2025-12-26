---
title: "OutOfBoundsDatetime: Out of bounds nanosecond timestamp"
description: "Why Pandas raises OutOfBoundsDatetime when converting dates outside the datetime64[ns] range and how to handle them."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## OutOfBoundsDatetime: Out of bounds nanosecond timestamp

```bash
$ python - <<'PY'
import pandas as pd
# A date far in the future
pd.to_datetime('30000-01-01')
PY
Traceback (most recent call last):
  File "<string>", line 4, in <module>
pandas._libs.tslibs.np_datetime.OutOfBoundsDatetime: Out of bounds nanosecond timestamp: 30000-01-01 00:00:00
```

### Why this happens

Pandas uses `numpy.datetime64[ns]` (nanosecond resolution) to represent datetime values in many operations, and that type has a limited valid range — roughly between the years 1677 and 2262 (the exact bounds depend on precision and platform). Dates outside that range cannot be represented and result in `OutOfBoundsDatetime`.

### Fix

- If the date must be kept exactly, keep it as `str` or `object` dtype rather than converting to datetime.
- Coerce invalid dates to `NaT` using `pd.to_datetime(values, errors='coerce')`.
- If possible, clip or normalize dates to a supported range before conversion.

#### Wrong code

```python
import pandas as pd
# This raises an OutOfBoundsDatetime error for dates outside numpy datetime64[ns] range
dates = ['2020-01-01', '30000-01-01']
pd.to_datetime(dates)
```

#### Fixed code

```python
import pandas as pd
# Option A: coerce out-of-range dates to NaT
dates = ['2020-01-01', '30000-01-01']
print(pd.to_datetime(dates, errors='coerce'))

# Option B: keep large dates as strings and parse only supported values
import numpy as np
arr = np.array(dates, dtype=object)
# parse conditionally or keep as strings
```

Notes:

- If you need to persist very large historic/future dates, use a text-based column (string) or store as Python `datetime` objects in object dtype (with some loss of vectorized performance).
