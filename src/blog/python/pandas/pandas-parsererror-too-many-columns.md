---
title: "ParserError: Too many columns in CSV (delimited file mismatch)"
description: "What causes ParserError due to inconsistent number of fields per line and how to fix CSV parsing issues."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ParserError: Too many columns / Error tokenizing data

```bash
$ python - <<'PY'
import pandas as pd
from io import StringIO
pd.read_csv(StringIO('a,b\n1,2,3\n'))
PY
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
pandas.errors.ParserError: Error tokenizing data. C error: Expected 2 fields in line 2, saw 3
```

### Why this happens

This `ParserError` typically occurs when the CSV (or any delimited text) file's rows do not have the same number of columns as the header or expected number of fields. Common causes: wrong delimiter, stray delimiters inside quoted fields, inconsistent quoting, or broken lines.

### Fix

Inspect the file for malformed lines or the wrong delimiter. Use `sep` to specify the correct delimiter, `quoting` to change how quotes are treated, or `engine='python'` for more permissive parsing. For broken data, skip corrupted lines (`error_bad_lines=False` in older pandas, `on_bad_lines='warn'/'skip'` in newer pandas).

#### Wrong code

```python
import pandas as pd
# Data has 3 fields on row 2 but header has 2
pd.read_csv('file_with_bad_rows.csv')
```

#### Fixed code

```python
import pandas as pd
from io import StringIO
data = 'a;b\n1;2;3\n'
# 1) Specify the proper delimiter
pd.read_csv(StringIO(data), sep=';')

# 2) Skip problematic lines (use with caution)
pd.read_csv(StringIO('a,b\n1,2,3\n'), on_bad_lines='skip')

# 3) Use the python engine for complex quoting
pd.read_csv(StringIO('a,b\n"1,2",3\n'), engine='python')
```
