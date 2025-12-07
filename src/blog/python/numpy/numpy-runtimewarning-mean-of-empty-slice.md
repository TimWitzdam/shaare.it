---
title: "RuntimeWarning: Mean of empty slice"
description: "When computing statistics on empty arrays, NumPy warns and returns NaN."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## RuntimeWarning: Mean of empty slice

```bash
$ python -c "import numpy as np; np.mean(np.array([]))"
/tmp/...: RuntimeWarning: Mean of empty slice.
  np.mean(np.array([]))
```

### Why this happens

Statistical reductions like mean or std are undefined for empty inputs, so NumPy emits a RuntimeWarning and returns NaN.

### Fix

Guard against empty inputs or provide `initial`/`where` parameters where supported, or handle NaN results explicitly.

#### Wrong code

```python
import numpy as np
print(np.mean(np.array([])))
```

#### Fixed code

```python
import numpy as np
arr = np.array([])
if arr.size == 0:
    print(0.0)  # or appropriate default
else:
    print(np.mean(arr))

# or use np.nanmean and handle NaN
print(np.nanmean(arr))
```
