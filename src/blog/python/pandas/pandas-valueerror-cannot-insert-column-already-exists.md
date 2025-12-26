---
title: "ValueError: cannot insert 'col', already exists"
description: "Trying to insert a column with `df.insert` using a name that already exists."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: cannot insert 'col', already exists

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2]}); df.insert(0, 'a', [3,4])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: cannot insert a, already exists
```

### Why this happens

`df.insert` is strict: it refuses to create a new column if a column with the same name already exists. This prevents accidental column overwrites.

### Fix

Either assign directly to the existing column, rename the new column, or drop the existing column before inserting. If you intentionally want to replace the column, use assignment (`df['a'] = values`).

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
# Attempt to insert a column where 'a' already exists

df.insert(0, 'a', [10, 20])
```

#### Fixed code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
# Replace existing column using assignment (this doesn’t raise)
df['a'] = [10, 20]

# Or insert a column with a new name

df.insert(0, 'new_a', [10, 20])

# Or drop the old column then insert

# df = df.drop(columns=['a'])
# df.insert(0, 'a', [10, 20])
```
