---
title: "ValueError: array split does not result in an equal division"
description: "Error thrown by np.split when the number of sections doesn't divide the array length evenly."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: array split does not result in an equal division

```bash
$ python -c "import numpy as np; np.split(np.arange(5), 2)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: array split does not result in an equal division
```

### Why this happens

`np.split` with an integer `indices_or_sections` expects the array to be evenly divisible into that many sections. If the array length isn't divisible by the number you request, NumPy raises this ValueError.

### Fix

Use `np.array_split` if you need non-equal splits. Alternatively, choose a different number of sections or reshape/pad your array before splitting.

#### Wrong code

```python
import numpy as np
np.split(np.arange(5), 2)
```

#### Fixed code

```python
import numpy as np
# Accept uneven splits:
parts = np.array_split(np.arange(5), 2)
print(parts)  # [array([0,1,2]), array([3,4])]

# Or split evenly by choosing a divisor:
parts = np.split(np.arange(6), 2)
print(parts)  # [array([0,1,2]), array([3,4,5])]
```
