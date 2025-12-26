---
title: "TypeError: Roll/Window 'window' must be an int or a date offset"
description: "Why passing a non-integer 'window' to .rolling() or using a time-based window with a non-datetime index causes TypeError and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: 'float' object cannot be interpreted as an integer (rolling window)

```bash
$ python - <<'PY'
import pandas as pd
s = pd.Series([1, 2, 3, 4])
# passing a non-integer window size
s.rolling(window=2.5).sum()
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'float' object cannot be interpreted as an integer
```

### Why this happens

The `window` argument to `.rolling()` expects an integer (number of observations) or a string offset (like `'3D'`) when your index is a `DatetimeIndex`/`TimedeltaIndex`. Passing a float or a string that isn't a valid date offset leads to a `TypeError`. Similarly, using an offset string on a numeric index (non-`DatetimeIndex`) will raise an error because the rolling logic can't interpret a time offset against a non-time index.

### Fix

- If you want a fixed-size window by count of rows, pass an integer (e.g., `window=3`).
- If you want a time-based window, ensure the index is a DatetimeIndex and pass a frequency string (e.g., `window='3D'`). Convert the index with `pd.to_datetime` if needed.

#### Wrong code

```python
# wrong: passing float to window
s.rolling(window=2.5).sum()

# wrong: using a time offset string without a DatetimeIndex
s2 = pd.Series([1,2,3,4])
s2.rolling('3D').sum()
```

#### Fixed code

```python
# integer window for fixed number of rows
s.rolling(window=3).sum()

# For time-based windows, use a DatetimeIndex
s_time = pd.Series([1,2,3,4], index=pd.date_range('2020-01-01', periods=4))
s_time.rolling('3D').sum()
```

If you're unsure whether your index is datetime, check `s.index` and convert using `pd.to_datetime` when appropriate.
