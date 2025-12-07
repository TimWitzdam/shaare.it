---
title: "TypeError: Cannot cast array from dtype('object') to dtype('float64') according to the rule 'safe'"
description: "Casting errors when NumPy won't implicitly convert between dtypes."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## cannot cast array

```bash
$ python - <<'PY'
import numpy as np
arr = np.array(['a', 'b', 'c'], dtype=object)
arr.astype(float)
PY
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
TypeError: float() argument must be a string or a number, not 'NoneType'
```

### Why this happens

NumPy uses rules for safe casting. Converting from one dtype to another can fail when values are incompatible or when attempting an unsafe implicit cast.

### Fix

Clean or pre-validate data before casting. Use `np.asarray(..., dtype=...)` or `pd.to_numeric` for robust conversion, or specify `errors='coerce'` in pandas. For explicit unsafe casts use `astype(new_dtype, casting='unsafe')` but be cautious.

#### Wrong code

```python
import numpy as np
arr = np.array(['a', '2', None], dtype=object)
arr.astype(float)
```

#### Fixed code

```python
import numpy as np
arr = np.array(['1.0', '2.5', '3.0'])
float_arr = arr.astype(float)

# or sanitize before cast
import math
obj = np.array(['1', '2', None], dtype=object)
clean = [float(x) for x in obj if x is not None]
arr2 = np.array(clean, dtype=float)
```
