---
title: "TypeError: '<' not supported between instances of 'str' and 'int' when sorting"
description: "Sorting a column with mixed types (ints and strs) can raise TypeError in Pandas. Convert or clean data before sorting."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: '<' not supported between instances of 'str' and 'int'

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1, '2', 3]}); df.sort_values('a')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: '<' not supported between instances of 'str' and 'int'
```

### Why this happens

Python 3 does not support comparing strings and integers directly. Pandas will raise this TypeError when it attempts to compare values of different types during sorting.

### Fix

Coerce values to a common type before sorting: use `.astype(int)` or `.astype(str)` depending on the desired behavior. Use `pd.to_numeric(..., errors='coerce')` where appropriate to safely convert strings to numbers, and handle NaNs that might be produced.

#### Wrong code

```python
import pandas as pd

# Mixed numeric and string values

df = pd.DataFrame({'a': [1, '2', 3]})
# This raises TypeError in Python 3 because ints and strs cannot be compared
print(df.sort_values('a'))
```

#### Fixed code

```python
import pandas as pd

# Convert the whole column to numeric (coerce errors if needed) then sort

df = pd.DataFrame({'a': [1, '2', 3]})
df['a'] = pd.to_numeric(df['a'], errors='coerce')
print(df.sort_values('a'))  # numeric sort

# Or convert to string for lexicographic sort

df['a_str'] = df['a'].astype(str)
print(df.sort_values('a_str'))
```
