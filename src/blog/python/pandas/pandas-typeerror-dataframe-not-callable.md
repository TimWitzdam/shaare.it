---
title: "TypeError: 'DataFrame' object is not callable"
description: "Why you get TypeError when you try to call a DataFrame like a function and how to avoid it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: 'DataFrame' object is not callable

```bash
$ python - <<'PY'
import pandas as pd

df = pd.DataFrame({'a': [1, 2, 3]})
print(df())
PY
Traceback (most recent call last):
  File "<string>", line 5, in <module>
TypeError: 'DataFrame' object is not callable
```

### Why this happens

This error is a plain Python `TypeError` that occurs when you use parentheses `()` after a `DataFrame`, which tells Python to call the object like a function. DataFrame objects are not callable; parentheses are used for function calls. It's commonly caused by accidental parentheses or shadowing function names.

Common causes:

- A simple typo: `df()` instead of `df.head()` or `df['col']`.
- Reassigning a name like `pd.DataFrame` to a variable, then attempting to call it.
- Overwriting a function name with a DataFrame or another non-callable object.

### Fix

- Check for accidental parentheses and replace with the intended method (e.g., `df.head()`, `df.info()`).
- Make sure you haven't overwritten built-in or library functions with non-callables.
- Choose clear variable names and avoid shadowing.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2, 3]})
# Typo: calling the DataFrame object as if it were a function
print(df())  # TypeError
```

#### Fixed code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2, 3]})
# Use a DataFrame method instead of calling it
print(df.head())
```

Notes:

- If you have shadowed a name, track the variable where shadowing happened (for example by using `print(type(df))` or `print(globals().keys())`) to find the culprit.
