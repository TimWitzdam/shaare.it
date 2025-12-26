---
title: "ValueError: Unaligned boolean Series provided as indexer"
description: "What causes the unaligned boolean mask error and how to use boolean indexing correctly in Pandas."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: Unaligned boolean Series provided as indexer

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2]}); mask = pd.Series([True, False], index=[10,11]); print(df[mask])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Unaligned boolean Series provided as indexer (index of the boolean Series and of the indexed object do not match)
```

### Why this happens

Boolean indexing requires that the boolean Series has the same index as the DataFrame/Series you're indexing. If the indexes don't match, Pandas can't align the True/False values to the rows and raises this `ValueError`.

### Fix

Ensure the mask is aligned to the DataFrame's index. Use a positional boolean array (numpy array), reindex the mask to the DataFrame's index, or construct the mask directly from the DataFrame.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
# Mask has a different index -> ValueError
mask = pd.Series([True, False], index=[10, 11])
print(df[mask])
```

#### Fixed code

```python
import pandas as pd

# Create mask aligned with df index
mask = pd.Series([True, False], index=df.index)
print(df[mask])

# Or use df-generated mask (preferred)
mask = df['a'] > 1
print(df[mask])

# Or use positional numpy boolean array
import numpy as np
print(df[np.array([True, False])])
```
