---
title: "ValueError / ParserError: Error parsing dates with pd.to_datetime"
description: "Common date parsing errors in Pandas and how to avoid or fix them."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError / ParserError while parsing dates

```bash
$ python -c "import pandas as pd; pd.to_datetime(['2021-13-01'])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
  File "/usr/local/lib/python3.X/site-packages/pandas/core/tools/datetimes.py", line XXX, in to_datetime
    raise e
ValueError: month must be in 1..12
```

### Why this happens

Date parsing issues occur when input strings don't match an expected date format, contain invalid values (like month 13), or use locale-specific separators. By default Pandas tries to infer formats and will raise if it cannot parse given strings.

### Fix

- Provide an explicit `format` to `pd.to_datetime` when you know the expected format.
- Use `errors='coerce'` to turn unparsable values into `NaT`.
- Validate and clean inputs before parsing (remove timezones, commas, or stray characters).

#### Wrong code

```python
import pandas as pd

# Input string has an invalid month -> ValueError
pd.to_datetime(['2021-13-01'])
```

#### Fixed code

```python
import pandas as pd

# Coerce errors to NaT
print(pd.to_datetime(['2021-13-01'], errors='coerce'))

# Or explicitly provide a format if known and validate
print(pd.to_datetime(['2021-12-01'], format='%Y-%m-%d'))

# Clean inputs before parsing
s = pd.Series(['01/12/2021', '02/11/2021'])
s = s.str.replace('/', '-')
print(pd.to_datetime(s, format='%d-%m-%Y'))
```
