---
title: "EmptyDataError: No columns to parse from file"
description: "Why pandas.errors.EmptyDataError happens and how to handle empty or whitespace-only files."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## pandas.errors.EmptyDataError: No columns to parse from file

```bash
$ python -c "import pandas as pd; from io import StringIO; s=''; pd.read_csv(StringIO(s))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
pandas.errors.EmptyDataError: No columns to parse from file
```

### Why this happens

Pandas raises `EmptyDataError` when a file has no data at all (empty), or only contains whitespace and no column/row data. This often happens with bad downloads, empty log files, or incorrect globbing that selects an empty file.

### Fix

Verify the source file or use a try/except to handle empty files gracefully. If the file can be empty by design, skip or create an empty DataFrame instead.

#### Wrong code

```python
import pandas as pd
from io import StringIO

s = ''
# Raises EmptyDataError when file has no content
pd.read_csv(StringIO(s))
```

#### Fixed code

```python
import pandas as pd
from io import StringIO

s = ''
try:
    df = pd.read_csv(StringIO(s))
except pd.errors.EmptyDataError:
    df = pd.DataFrame()  # handle gracefully

print(df)
```
