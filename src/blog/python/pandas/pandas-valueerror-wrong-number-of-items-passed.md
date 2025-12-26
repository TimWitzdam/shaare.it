---
title: "ValueError: Wrong number of items passed X, placement implies Y"
description: "When assigning multiple columns or creating a DataFrame with mismatched shapes in Pandas."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: Wrong number of items passed

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2]}); df[['b','c']] = [1,2]"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Wrong number of items passed 2, placement implies 1
```

### Why this happens

Pandas expects the right-hand side to be the same shape as the target columns. When you assign to two columns with a single list (or mismatched nested lists), Pandas tries to broadcast and fails because the number of items doesn't match the number of columns or rows.

### Fix

Provide a 2-D structure that matches the target column count and row count. Use a DataFrame, nested lists, or a NumPy array with the correct shape. Alternatively assign each column separately.

#### Wrong code

```python
import pandas as pd

# Trying to assign a single list to two target columns

df = pd.DataFrame({'a': [1, 2]})
df[['b', 'c']] = [1, 2]
```

#### Fixed code (use nested lists)

```python
import pandas as pd

# Use nested lists or a DataFrame to match shape

df = pd.DataFrame({'a': [1, 2]})
df[['b', 'c']] = [[10, 20], [30, 40]]  # shape (2,2) -> works
# or
import numpy as np
df[['b', 'c']] = np.array([[10,20],[30,40]])
# or assign columns individually
# df['b'] = [10, 30]
# df['c'] = [20, 40]
```
