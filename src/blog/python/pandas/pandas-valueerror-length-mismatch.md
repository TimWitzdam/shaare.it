---
title: "ValueError: Length mismatch"
description: "When assigned values don't match the axis length in Pandas."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: Length mismatch: Expected axis has X elements, new values have Y elements

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2]}); df['b'] = [1,2,3]"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Length mismatch: Expected axis has 2 elements, new values have 3 elements
```

### Why this happens

You get this error when you assign a list/array/Series with a different length than the DataFrame axis (rows) you're assigning to. Pandas requires the number of items to match unless you're assigning a scalar or using broadcasting.

### Fix

Make sure the new values match the length of the DataFrame's index, or align a `Series` by index. Use `df['col'] = pd.Series(values, index=df.index)` when lengths differ but indexes match, or `np.repeat`/broadcast if appropriate.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
# This list has 3 items; df has 2 rows -> ValueError
 df['b'] = [10, 20, 30]
```

#### Fixed code

```python
import pandas as pd
import numpy as np

df = pd.DataFrame({'a': [1, 2]})
# Same length -> OK
 df['b'] = [10, 20]

# Or align via Series with df.index
 df['c'] = pd.Series([10, 20, 30], index=[0,1,2]).reindex(df.index)  # will align and introduce NaN for missing

# Or broadcast a scalar
 df['d'] = 0  # OK (same value for every row)
```
