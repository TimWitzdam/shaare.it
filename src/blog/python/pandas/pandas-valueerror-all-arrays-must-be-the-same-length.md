---
title: "ValueError: All arrays must be the same length"
description: "Mixing arrays with different lengths when constructing a Pandas DataFrame or assigning columns causes this error."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: All arrays must be the same length

```bash
$ python -c "import pandas as pd; pd.DataFrame({'a': [1,2,3], 'b': [1,2]})"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: All arrays must be of the same length
```

### Why this happens

When creating a DataFrame from a dictionary of lists or assigning a column with an iterable, Pandas requires that each array or list has the same length so that rows are consistent. When lengths differ, Pandas cannot align items into a rectangular table.

### Fix

Provide arrays/lists of the same length. If you intentionally have missing values, provide NaN values for the missing entries, or build a DataFrame from lists of equal lengths or from a list-of-dicts where each dict may have missing keys.

#### Wrong code

```python
import pandas as pd

# Mismatched lengths for keys 'a' and 'b'

pd.DataFrame({'a': [1, 2, 3], 'b': [1, 2]})
```

#### Fixed code

```python
import pandas as pd

# Make sure both lists are the same length

pd.DataFrame({'a': [1, 2, 3], 'b': [10, 20, 30]})

# Or use None/NaN for missing values

pd.DataFrame({'a': [1, 2, 3], 'b': [10, 20, None]})

# Or construct from list-of-dicts when rows are irregular

pd.DataFrame([{'a': 1, 'b': 10}, {'a': 2}, {'a': 3, 'b': 30}])
```
