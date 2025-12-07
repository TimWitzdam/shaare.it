---
title: "ValueError: total size of new array must be unchanged"
description: "Why reshape with mismatched total size fails and how to fix it."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: total size of new array must be unchanged

```bash
$ python -c "import numpy as np; a=np.arange(6); a.reshape((4,2))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: total size of new array must be unchanged
```

### Why this happens

Reshape requires the product of the new dimensions equal the number of elements in the original array.

### Fix

Pick dimensions that multiply to the original size or use -1 to infer one dimension.

#### Wrong code

```python
import numpy as np
a = np.arange(6)
print(a.reshape((4,2)))
```

#### Fixed code

```python
import numpy as np
a = np.arange(6)
print(a.reshape((3,2)))

# or infer dimension
print(a.reshape((2,-1)))
```
