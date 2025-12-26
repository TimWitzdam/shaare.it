---
title: "Read CSV delimiter mismatch and parser errors"
description: "How wrong delimiter or quoting in CSV files causes parser errors or incorrect data and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## read_csv delimiter mismatch and parser errors

```bash
$ python - <<'PY'
import pandas as pd
from io import StringIO
# File uses '|' as delimiter but we read with comma. No exception, but parsing is wrong.
print(pd.read_csv(StringIO('a|b\n1|2\n')))
PY
     a|b
0  1|2
```

```bash
# In other cases inconsistent quoting leads to ParserError
$ python - <<'PY'
import pandas as pd
from io import StringIO
pd.read_csv(StringIO('a,b\n1,"2,3\n'))
PY
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
pandas.errors.ParserError: Error tokenizing data. C error: EOF inside string starting at line 2
```

### Why this happens

If you use the wrong delimiter, `read_csv` can silently parse the entire line as a single column (no exception), producing incorrect results. If the file contains inconsistent quoting (commas inside quotes) or mixes delimiters, the underlying C parser can raise a `ParserError` with messages like "Expected X fields in line Y" or "EOF inside string".

### Fix

1. Confirm the delimiter and explicitly pass `sep='|'` or `delimiter='\t'`.
2. For tricky quoting or malformed CSVs, use `engine='python'` which is more tolerant or `on_bad_lines='skip'` to skip malformed records.
3. Pre-clean the file (fix quotes or escape them) if possible and export in a consistent format.

#### Wrong code

```python
import pandas as pd
# We assume comma, but the file is pipe-delimited
df = pd.read_csv('file_pipe_delim.csv')
```

#### Fixed code

```python
import pandas as pd
df = pd.read_csv('file_pipe_delim.csv', sep='|')

# For malformed quoting, use the python engine or skip bad lines
df = pd.read_csv('file_malformed.csv', engine='python', on_bad_lines='skip')
```
