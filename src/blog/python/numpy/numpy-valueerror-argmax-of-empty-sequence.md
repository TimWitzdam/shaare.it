---
title: "ValueError: attempt to get argmax of an empty sequence"
description: "What happens when you call argmax/argmin on empty arrays and how to guard against it."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: attempt to get argmax of an empty sequence

```bash
$ python -c "import numpy as np; np.argmax(np.array([]))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: attempt to get argmax of an empty sequence
```

### Why this happens

argmax/argmin need at least one element to compare. Passing an empty array produces this ValueError.

### Fix

Check array size before calling argmax/argmin or provide a default strategy for empty inputs.

#### Wrong code

```python
import numpy as np
arr = np.array([])
idx = np.argmax(arr)
```

#### Fixed code

```python
import numpy as np
arr = np.array([])
if arr.size == 0:
    idx = None
else:
    idx = np.argmax(arr)
```
