---
title: "IndexError: too many indices for array"
description: "Occurs when you index a lower-dimensional array with too many indices."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## IndexError: too many indices for array

```bash
$ python -c "import numpy as np; a = np.arange(5); print(a[0,0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
IndexError: too many indices for array: array is 1-dimensional, but 2 were indexed
```

### Why this happens

You used more index dimensions than the array actually has (e.g. using 2D indexing on a 1D array).

### Fix

Use the correct number of indices for the array's dimensionality, or reshape the array to the desired dimensions first.

#### Wrong code

```python
import numpy as np
a = np.arange(5)
print(a[0, 0])
```

#### Fixed code

```python
import numpy as np
a = np.arange(5)
print(a[0])          # correct for 1D

# or reshape to 2D first
a2 = a.reshape((1, 5))
print(a2[0, 0])
```
