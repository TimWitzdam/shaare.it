---
title: "ValueError: cannot reindex from a duplicate axis"
description: "Why reindexing (or aligning) fails when the axis has duplicate labels and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: cannot reindex from a duplicate axis

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2]}); df.index = [0,0]; df.reindex([0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: cannot reindex from a duplicate axis
```

### Why this happens

Pandas expects unique axis labels for some operations like `reindex` and certain alignments. If the index (or columns) contains duplicates, Pandas cannot resolve how to map new labels to existing ones and throws this ValueError.

### Fix

Ensure the axis is unique before reindexing. Options:

- Reset the index to make it unique: `df.reset_index(drop=True)`
- Use `groupby`/`aggregate` to combine duplicate rows
- Remove duplicates or use `df.loc[df.index.duplicated()]` to inspect

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
# force duplicate index
df.index = [0, 0]
# Raises ValueError
df.reindex([0, 1])
```

#### Fixed code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
# Prefer resetting or making the index unique
fixed = df.reset_index(drop=True)
print(fixed.reindex([0, 1]))

# Or group duplicates to a single row
grouped = df.groupby(df.index).first()
print(grouped.reindex([0, 1]))
```
