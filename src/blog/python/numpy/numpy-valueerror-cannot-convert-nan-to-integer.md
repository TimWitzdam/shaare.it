---
title: "ValueError: Cannot convert NaN to integer"
description: "Errors when casting arrays containing NaN to integer dtype."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## Cannot convert NaN to integer

```bash
$ python - <<'PY'
import numpy as np
arr = np.array([1.0, np.nan, 3.0])
arr.astype(int)
PY
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
ValueError: Cannot convert float NaN to integer
```

### Why this happens

NaN is a floating-point sentinel for missing values and has no integer representation; casting to integer fails.

### Fix

Handle or impute missing values before casting. Use `np.nan_to_num`, fill with a sentinel, or use masked arrays or pandas nullable integer types.

#### Wrong code

```python
import numpy as np
arr = np.array([1.0, np.nan, 3.0])
arr.astype(int)
```

#### Fixed code

```python
import numpy as np
arr = np.array([1.0, np.nan, 3.0])
# replace NaN with a value (e.g., 0) before cast
clean = np.nan_to_num(arr, nan=0.0)
clean.astype(int)

# or use pandas for nullable integers
import pandas as pd
pd.Series(arr).astype('Int64')
```
