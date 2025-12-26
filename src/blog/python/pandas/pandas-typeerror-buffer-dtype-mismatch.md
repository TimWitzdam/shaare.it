---
title: "ValueError/TypeError: Buffer dtype mismatch"
description: "Why buffer dtype mismatch happens when numpy/pandas memory buffers differ and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError / TypeError: Buffer dtype mismatch

```bash
$ python -c "import pandas as pd, numpy as np; s = pd.Series([1,2,3], dtype=np.int32); np.frombuffer(s.values, dtype=np.int64)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Buffer dtype mismatch, expected 'long long' but got 'long'
```

### Why this happens

The underlying memory buffer (the raw bytes backing a NumPy/Pandas array) has a specific dtype and element size. Attempting to interpret those bytes as a different dtype with incompatible element sizes leads to a buffer dtype mismatch.

This frequently occurs when passing arrays between libraries, using low-level buffer APIs, or when code expects 64-bit types but receives 32-bit data.

### Fix

Convert the array to the expected dtype before providing its buffer, or use higher-level APIs (e.g., `.to_numpy(dtype=...)`) to ensure the proper dtype and size. Avoid misusing `np.frombuffer` on arrays with incompatible memory layouts.

#### Wrong code

```python
import pandas as pd
import numpy as np

s = pd.Series([1, 2, 3], dtype=np.int32)
# Interpreting int32 bytes as int64 -> error
np.frombuffer(s.values, dtype=np.int64)
```

#### Fixed code

```python
import pandas as pd
import numpy as np

s = pd.Series([1, 2, 3], dtype=np.int32)
# Convert to the expected dtype first
arr = s.to_numpy(dtype=np.int64)
print(arr)

# Or use astype to change dtype with copy
arr2 = s.astype(np.int64).to_numpy()
print(arr2)
```
