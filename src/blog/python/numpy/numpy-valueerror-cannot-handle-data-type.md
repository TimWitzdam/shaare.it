---
title: "ValueError: Cannot handle data type"
description: "When a ufunc or function cannot operate on the provided dtype (e.g., object dtype)."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## Cannot handle data type

```bash
$ python - <<'PY'
import numpy as np
arr = np.array([{'a':1}, {'b':2}], dtype=object)
np.sum(arr)
PY
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
ValueError: Cannot handle data type
```

### Why this happens

NumPy's binary and reduction ufuncs expect numeric or well-defined dtypes. Object arrays carry arbitrary Python objects which many ufuncs don't know how to reduce or operate on.

### Fix

Convert data to concrete numeric types before calling ufuncs, or perform Python-level operations (list comprehensions) when working with objects.

#### Wrong code

```python
import numpy as np
arr = np.array([{'a':1}, {'b':2}], dtype=object)
np.sum(arr)
```

#### Fixed code

```python
import numpy as np
arr = np.array([1, 2, 3])
np.sum(arr)

# or convert object contents explicitly
obj = np.array(['1', '2', '3'], dtype=object)
num = obj.astype(int)
np.sum(num)
```
