---
title: "RuntimeWarning: All-NaN slice encountered"
description: "When a reduction operation only encounters NaN values, NumPy warns that the slice is all-NaN."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## RuntimeWarning: All-NaN slice encountered

```bash
$ python - <<'PY'
import numpy as np
arr = np.array([np.nan, np.nan])
np.nanmin(arr)
PY
# RuntimeWarning: All-NaN slice encountered
```

### Why this happens

This warning occurs when a reduction (e.g., `np.nanmin`, `np.nanmax`, `np.nanmean`) operates over an array or slice that contains only NaN values. NumPy can't compute a meaningful numeric result for such operations.

### Fix

Handle NaNs before calling reductions. You can filter NaNs or provide a fallback (e.g., `np.nan_to_num` or conditionals that return a default). Alternatively, use masked arrays which keep NaN masked values separate from computations.

#### Wrong code

```python
import numpy as np
arr = np.array([np.nan, np.nan])
print(np.nanmin(arr))
```

#### Fixed code

```python
import numpy as np
arr = np.array([np.nan, np.nan])
# Provide fallback
if np.all(np.isnan(arr)):
    print("no valid numbers")
else:
    print(np.nanmin(arr))

# or use masked arrays
masked = np.ma.masked_invalid(arr)
print(masked.min())
```
