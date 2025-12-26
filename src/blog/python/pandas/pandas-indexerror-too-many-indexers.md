---
title: "IndexError: Too many indexers"
description: "Indexing with more dimensions than the object supports (e.g., using multiple indices on a Series)."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## IndexError: Too many indexers

```bash
$ python -c "import pandas as pd; s = pd.Series([1,2]); print(s[1, 0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
IndexError: Too many indexers
```

### Why this happens

A Pandas Series is a 1-dimensional object, so indexing it with more than one index (as if it were a 2-D array) causes an IndexError. Similar errors occur when indexing arrays or DataFrames in a way that does not match their dimensionality.

### Fix

Use the correct indexing method appropriate for the object: 1D objects use single indexes (e.g., `s.iloc[0]` or `s.loc[key]`), while DataFrames support 2D indexers like `df.iloc[row, col]` or `df.loc[row, 'col']`.

#### Wrong code

```python
import pandas as pd

s = pd.Series([1, 2])
# Series is 1D; using two indices causes an IndexError
print(s[1, 0])
```

#### Fixed code

```python
import pandas as pd

# Access a Series element with a single index
s = pd.Series([1, 2])
print(s.iloc[1])

# For 2D indexing, use a DataFrame

df = pd.DataFrame({'a': [10, 20], 'b': [30, 40]})
print(df.iloc[1, 0])  # row 1, col 0
print(df.loc[1, 'a'])
```
