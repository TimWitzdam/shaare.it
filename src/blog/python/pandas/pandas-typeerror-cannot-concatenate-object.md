---
title: "TypeError: cannot concatenate object of type '<class ...>'"
description: "Why pd.concat raises TypeError when given non-DataFrame/Series objects and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: cannot concatenate object of type '<class ...>'

```bash
$ python -c "import pandas as pd; pd.concat([pd.DataFrame({'a':[1]}), 1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: cannot concatenate object of type '<class 'int'>'; only Series and DataFrame objs are valid
```

### Why this happens

`pd.concat` expects a sequence (e.g., list or tuple) of pandas `Series` or `DataFrame` objects. Passing a plain Python object (int/str/list) instead of a DataFrame/Series raises a TypeError.

### Fix

Ensure every item passed to `pd.concat` is a pandas `Series` or `DataFrame`. Convert or wrap Python objects into a DataFrame first.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
print(pd.concat([df, 3]))  # TypeError: cannot concatenate
```

#### Fixed code

```python
import pandas as pd

# Convert the friend object to a DataFrame first
new_row = pd.DataFrame({'a': [3]})
print(pd.concat([df, new_row], ignore_index=True))
```
