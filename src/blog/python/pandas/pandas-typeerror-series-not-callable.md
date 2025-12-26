---
title: "TypeError: 'Series' object is not callable"
description: "Trying to call a Series like a function (using parentheses) leads to this TypeError."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: 'Series' object is not callable

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2]}); df['a'](1)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'Series' object is not callable
```

### Why this happens

A Pandas Series is not a function; using parentheses attempts to call the object. Common causes are accidental parentheses after a Series name, or overshadowing a function or variable.

### Fix

Use the appropriate Series method or function. For element-wise operations, consider `.apply`, broadcasting, or vectorized operations. If you intended to call a function, ensure you are referencing the function, not a Series with the same name.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
# Trying to call the Series as if it was a function
result = df['a'](1)
```

#### Fixed code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
# Use vectorized operations
result = df['a'] + 1

# Or apply a function to every element
result = df['a'].apply(lambda x: x + 1)

# If you named a variable the same as a function, rename the variable
# func = some_callable
# var = df['a']
# func(1)  # keep function calls separate from Series access
```
