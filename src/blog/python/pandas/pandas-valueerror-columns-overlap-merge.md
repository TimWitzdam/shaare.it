---
title: "ValueError: columns overlap but no suffix specified"
description: "Why overlapping column names during join/merge can raise a ValueError and how to resolve it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: columns overlap but no suffix specified

```bash
$ python -c "import pandas as pd; df1 = pd.DataFrame({'id':[1], 'a':[1]}).set_index('id'); df2 = pd.DataFrame({'id':[1], 'a':[2]}).set_index('id'); df1.join(df2)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: columns overlap but no suffix specified: Index(['a'], dtype='object')
```

### Why this happens

`DataFrame.join` (and in some cases `merge`) will raise a `ValueError` if the columns of the left and right DataFrames overlap and you didn't provide suffixes to disambiguate the names. Pandas refuses to silently overwrite columns with the same name.

### Fix

Provide `lsuffix` and `rsuffix` to keep both columns, rename columns before joining, or perform a `merge` and control suffixes with `suffixes`.

#### Wrong code

```python
import pandas as pd

# Two DataFrames share the same column name
left = pd.DataFrame({'id': [1], 'a': [1]}).set_index('id')
right = pd.DataFrame({'id': [1], 'a': [2]}).set_index('id')
# This raises ValueError
left.join(right)
```

#### Fixed code

```python
import pandas as pd

# Add suffixes to preserve both columns
left.join(right, lsuffix='_left', rsuffix='_right')

# Or rename columns before join
right_renamed = right.rename(columns={'a': 'a_right'})
left.join(right_renamed)

# Or if you mean to merge on an 'id' column, use merge with suffixes
left.reset_index().merge(right.reset_index(), on='id', suffixes=('_l', '_r'))
```
