---
title: "ValueError: No axis named X for object of type DataFrame"
description: "Using an invalid axis value in Pandas methods causes this ValueError."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: No axis named X for object of type DataFrame

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2]}); df.sum(axis=2)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: No axis named 2 for object of type DataFrame
```

### Why this happens

Most Pandas DataFrame methods accept axis arguments limited to 0, 1 or the corresponding string labels `'index'` and `'columns'`. Passing an axis integer that doesn't exist (e.g., `2`) or a misspelled string causes this error.

### Fix

Use a valid axis value (`axis=0` for rows/index, `axis=1` for columns) or the equivalent string `'index'` or `'columns'`. Check the method’s documentation for valid axis arguments.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2], 'b': [3, 4]})
# axis 2 doesn't exist for a 2-dimensional DataFrame
s = df.sum(axis=2)
```

#### Fixed code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2], 'b': [3, 4]})
# Sum across rows (index)
s = df.sum(axis=0)  # or df.sum(axis='index')
# Sum across columns
t = df.sum(axis=1)  # or df.sum(axis='columns')
```
