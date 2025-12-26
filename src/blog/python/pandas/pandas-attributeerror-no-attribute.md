---
title: "AttributeError: 'DataFrame' object has no attribute 'foo'"
description: "Missing function or attribute lookup errors in Pandas and how to resolve them."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## AttributeError: 'DataFrame' object has no attribute

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2]}); df.foo()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'DataFrame' object has no attribute 'foo'
```

### Why this happens

This error happens when you try to use a method or property that doesn't exist on the object. Common causes:

- Typo in the method name (e.g., `df.fo()` instead of `df.mean()`).
- Mistaking column access for method access (e.g., `df.colname` when the column name isn't a valid Python identifier).
- Expecting a function on the DataFrame/Series which is a NumPy method or only available on other types.
- Shadowing the `pandas` module with a file named `pandas.py` or a variable called `pandas` in your code.

### Fix

Check the code for typos, use the correct attribute access (`df['col']`) when a column name is not a valid identifier, and avoid shadowing the library name with a local module or variable.

#### Wrong code

```python
import pandas as pd

# Mistakenly treating a column name with a space as attribute access
df = pd.DataFrame({'some col': [1, 2]})
print(df.some col)
```

#### Fixed code

```python
import pandas as pd

# Use dict-style lookup for column names with spaces
df = pd.DataFrame({'some col': [1, 2]})
print(df['some col'])

# Example: calling a real method correctly
print(df.head())
```
