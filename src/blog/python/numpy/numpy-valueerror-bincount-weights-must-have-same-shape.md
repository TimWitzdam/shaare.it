---
title: "ValueError: weights must have the same length as x in np.bincount"
description: "When calling np.bincount with a weights array, the weights length must match the input array length."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: weights must have the same length as x in np.bincount

```bash
$ python - <<'PY'
import numpy as np
np.bincount(np.array([0, 1, 1]), weights=np.array([1.0, 2.0]))
PY
Traceback (most recent call last):
  File "<string>", line 3, in <module>
ValueError: weights and x must have same length
```

### Why this happens

`np.bincount(x, weights)` expects `weights` to be a one-to-one mapping to the input `x`. If `weights` has a different length than `x`, NumPy cannot align each `x` value with a corresponding weight and raises a ValueError.

### Fix

Provide a `weights` array with the exact same length as `x`, or call `np.bincount` without weights and post-process if you need different aggregation behavior.

#### Wrong code

```python
import numpy as np
x = np.array([0, 1, 1])
weights = np.array([1.0, 2.0])
np.bincount(x, weights=weights)  # ValueError
```

#### Fixed code

```python
import numpy as np
x = np.array([0, 1, 1])
weights = np.array([1.0, 2.0, 1.0])
print(np.bincount(x, weights=weights))  # [1.0, 3.0]

# or call without weights if you want counts
print(np.bincount(x))  # [1 2]
```
