---
title: "TypeError: Conflict between tz_localize and tz_convert (timezone aware vs naive)"
description: "Why calling `tz_localize` on an already tz-aware index or `tz_convert` on tz-naive index raises errors and how to fix timezone-related issues in pandas."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: Already tz-aware / Cannot convert tz-naive index to timezone-aware

```bash
$ python - <<'PY'
import pandas as pd

idx = pd.date_range('2020-01-01', periods=2, tz='UTC')
s = pd.Series([1, 2], index=idx)
# Trying to localize an index that's already timezone-aware
s.tz_localize('Europe/Paris')
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: Already tz-aware, use tz_convert to convert timezone
```

And the converse:

```bash
$ python - <<'PY'
import pandas as pd

idx = pd.date_range('2020-01-01', periods=2)  # naive
s = pd.Series([1, 2], index=idx)
# Trying to convert a naive index
s.tz_convert('UTC')
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: Cannot convert tz-naive timestamps, use tz_localize to localize
```

### Why this happens

- `tz_localize` attaches a timezone to naive datetimes. Calling it on an already timezone-aware index is a mistake; pandas will raise a `TypeError` telling you to use `tz_convert` instead.
- `tz_convert` changes the timezone of timezone-aware timestamps. If you call it on a naive index, pandas doesn't know which timezone to convert from and will raise a `TypeError` telling you to `tz_localize` first.

### Fix

- If your index is timezone-aware and you want to switch zones, use `tz_convert`.
- If your index is tz-naive and you want to interpret it in a timezone, use `tz_localize`.
- Check `df.index.tz` (or `s.index.tz`) to see whether the index is timezone-aware (returns a timezone) or naive (`None`).

#### Wrong code

```python
# tz-aware index - this is wrong
df.index = pd.date_range('2020-01-01', periods=2, tz='UTC')
df.tz_localize('Europe/Paris')

# tz-naive index - wrong to use tz_convert
df.index = pd.date_range('2020-01-01', periods=2)
df.tz_convert('UTC')
```

#### Fixed code

```python
# Convert already aware index to different timezone
df.index = pd.date_range('2020-01-01', periods=2, tz='UTC')
df = df.tz_convert('Europe/Paris')

# Localize naive index first, then convert if needed
df.index = pd.date_range('2020-01-01', periods=2)
df = df.tz_localize('UTC').tz_convert('Europe/Paris')
```

Always inspect `df.index.tz` before calling `tz_localize` or `tz_convert`. Localizing or converting incorrectly can silently produce wrong results if not done as intended.
