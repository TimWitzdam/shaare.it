---
title: "IndexError: single positional indexer is out-of-bounds"
description: "Why IndexError occurs with .iloc and .iat positional indexing and how to avoid it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## IndexError: single positional indexer is out-of-bounds

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2]}); print(df.iloc[10])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
  File "<__array_function__ internals>", line X, in iloc
  File "/usr/local/lib/pythonX.X/site-packages/pandas/core/indexing.py", line Y, in __getitem__
IndexError: single positional indexer is out-of-bounds
```

### Why this happens

This error occurs when you attempt to access a row by a positional index that doesn't exist. `.iloc` and `.iat` are zero-based integer positional indexers — if you try to access `df.iloc[10]` but the DataFrame has only 2 rows, you get this IndexError.

### Fix

Check the DataFrame length before indexing or use safe methods: `.head()`, `.tail()` or combine label-based `.loc` with known indices. Alternatively use `.reindex` or `get`-style patterns with fallbacks.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
# Wrong: DataFrame only has 2 rows
print(df.iloc[10])
```

#### Fixed code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
# Check bounds
if len(df) > 10:
    print(df.iloc[10])
else:
    print('index out of bounds')

# Or use safe ways
print(df.iloc[-1])  # last row
```
