---
title: "ValueError: wrong number of columns (fmt vs data) in np.savetxt"
description: "When using np.savetxt with a fmt that doesn't match the number of columns in your data."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: wrong number of columns (fmt vs data) in np.savetxt

```bash
$ python - <<'PY'
import numpy as np
arr = np.array([[1,2],[3,4]])
np.savetxt('out.txt', arr, fmt='%d %d %d')
PY
Traceback (most recent call last):
  File "<string>", line 4, in <module>
ValueError: several format specifiers provided for each row, but array has fewer columns
```

### Why this happens

`np.savetxt` uses the `fmt` parameter to format each row. If `fmt` includes more (or fewer) format specifiers than the number of columns in the 2D array, NumPy can't map the placeholders to column values and raises a ValueError.

### Fix

Adjust the `fmt` string to match the number of columns. For a 2D array with N columns, provide N format fields (or a single conversion specifier that applies to all columns when the array is 1D), or reshape/transposed appropriately.

#### Wrong code

```python
import numpy as np
arr = np.array([[1, 2], [3, 4]])
# fmt has three specifiers, but arr has 2 columns
np.savetxt('out.txt', arr, fmt='%d %d %d')
```

#### Fixed code

```python
import numpy as np
arr = np.array([[1, 2], [3, 4]])
# fmt has exactly 2 specifiers
np.savetxt('out.txt', arr, fmt='%d %d')
# or use a single format for each column if you prefer
np.savetxt('out.txt', arr, fmt='%d')
```
