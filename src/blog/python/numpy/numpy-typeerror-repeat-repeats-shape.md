---
title: "TypeError/ValueError: repeats must have same length as the array in np.repeat"
description: "np.repeat requires `repeats` to be either a scalar or an array with the same length as the axis being repeated."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError/ValueError: repeats must have same length as the array in np.repeat

```bash
$ python - <<'PY'
import numpy as np
np.repeat(np.arange(3), repeats=[1, 2])
PY
Traceback (most recent call last):
  File "<string>", line 3, in <module>
ValueError: 'repeats' must have the same length as 'array' when 'repeats' is an array
```

### Why this happens

When `repeats` is an array-like, `np.repeat` expects its length to match the array's length along the axis being repeated. This gives a per-element repeat count. Passing a mismatched-length `repeats` raises an error.

### Fix

Provide either a scalar `repeats` (one value applied to all elements) or an array of integers whose length matches `arr.shape[axis]`.

#### Wrong code

```python
import numpy as np
arr = np.arange(3)  # length 3
np.repeat(arr, repeats=[1, 2])  # ValueError
```

#### Fixed code

```python
import numpy as np
arr = np.arange(3)
# scalar repeats
print(np.repeat(arr, 2))  # [0 0 1 1 2 2]
# array-like repeats with same length as arr
print(np.repeat(arr, [1, 2, 3]))  # [0, 1, 1, 2, 2, 2]
```
