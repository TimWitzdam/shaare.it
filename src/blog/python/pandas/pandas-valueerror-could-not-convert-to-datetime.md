---
title: "ValueError: could not convert to datetime"
description: "Errors parsing dates into datetime with `pd.to_datetime` or read_csv date parsing."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: Unknown string format / could not convert to datetime

```bash
$ python -c "import pandas as pd; pd.to_datetime(['not a date'])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Unknown string format: 'not a date'
```

### Why this happens

Date parsing relies on synonyms, patterns, and sometimes strict formats. If your strings are not recognized as valid dates (or you provided a wrong `format`), Pandas raises a ValueError when it can't interpret a value as a date/time.

### Fix

Use `pd.to_datetime(..., errors='coerce')` to coerce invalid values to `NaT`, clean or normalize noisy date strings, or provide a specific `format` string (faster and stricter). When reading CSVs, use `parse_dates` carefully and set `dayfirst` if needed.

#### Wrong code

```python
import pandas as pd

# Bad input strings
pd.to_datetime(['January 1st', 'not a date'])  # raises unknown string format error
```

#### Fixed code

```python
import pandas as pd

# Coerce invalid values to NaT
pd.to_datetime(['January 1st', 'not a date'], errors='coerce')

# Provide a strict format when you know it
pd.to_datetime(['2025-12-07', '2025-12-08'], format='%Y-%m-%d')

# Clean noisy strings first
vals = ['Jan 1 2025', '1/2/25']
# Use dayfirst option or infer datetime format if necessary
pd.to_datetime(vals, dayfirst=False, infer_datetime_format=True)
```
