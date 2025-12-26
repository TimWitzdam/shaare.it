---
title: "ParserError: Error tokenizing data"
description: "CSV parsing errors when rows have different numbers of fields, wrong quoting or separator."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ParserError: Error tokenizing data

```bash
$ python -c "import pandas as pd; from io import StringIO; s = 'a,b\n1,2\n3,4,5'; pd.read_csv(StringIO(s))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
pandas.errors.ParserError: Error tokenizing data. C error: Expected 2 fields in line 3, saw 3
```

### Why this happens

Pandas' CSV parser expects the same number of fields in every row. Errors occur when rows have extra or missing delimiters, when quoting is incorrect, or the delimiter is wrong. This commonly happens with corrupted or hand-generated CSV files, or when separators differ (tabs vs commas).

### Fix

Fix the CSV source if possible. If not, instruct pandas how to handle bad lines with `on_bad_lines='skip'` (Pandas 1.3+) or specify the correct `sep`/`quotechar` options. Alternatively, pre-process the file to keep rows well-formed.

#### Wrong code

```python
import pandas as pd
from io import StringIO

s = 'a,b\n1,2\n3,4,5'
# This will raise ParserError because the last row has 3 columns
pd.read_csv(StringIO(s))
```

#### Fixed code

```python
import pandas as pd
from io import StringIO

s = 'a,b\n1,2\n3,4,5'
# Skip bad lines instead of raising
pd.read_csv(StringIO(s), on_bad_lines='skip')

# Or fix the malformed row before parsing
s_fixed = 'a,b\n1,2\n3,4'
pd.read_csv(StringIO(s_fixed))
```
