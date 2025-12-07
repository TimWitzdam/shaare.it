---
title: "DeprecationWarning: elementwise comparison failed"
description: "Why elementwise comparisons can fail and the recommended fixes."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## elementwise comparison failed

```bash
$ python - <<'PY'
import numpy as np
arr = np.array([1,2,3])
if arr == [1,2,3]:
    print('equal')
PY
DeprecationWarning: elementwise comparison failed; this will raise in a future version of numpy."
```

### Why this happens

Comparing arrays to scalars or lists may trigger elementwise comparisons that produce arrays of booleans. Using that result in a context expecting a single boolean is ambiguous. In some cases comparisons with incompatible types fall back to object-level comparisons and raise warnings.

### Fix

Use `np.array_equal`, `np.allclose`, `arr.tolist()` or explicit elementwise checks depending on whether you need exact equality or approximate.

#### Wrong code

```python
import numpy as np
arr = np.array([1,2,3])
if arr == [1,2,3]:
    print('equal')
```

#### Fixed code

```python
import numpy as np
arr = np.array([1,2,3])
if np.array_equal(arr, [1,2,3]):
    print('exactly equal')

# or for floats
if np.allclose(arr.astype(float), [1.,2.,3.]):
    print('approximately equal')
```
