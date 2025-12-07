---
title: "ValueError: cannot reshape array of size X into shape Y"
description: "Reshape errors when total size doesn't match and how to reshape correctly."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: cannot reshape array

```bash
$ python -c "import numpy as np; a=np.arange(10); a.reshape((3,4))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: cannot reshape array of size 10 into shape (3,4)
```

### Why this happens

Reshape requires the total number of elements to remain unchanged. 10 cannot be reshaped into 3\*4=12 elements.

### Fix

Choose a target shape whose product equals the number of elements, or use -1 to infer one dimension when possible.

#### Wrong code

```python
import numpy as np
a = np.arange(10)
print(a.reshape((3,4)))
```

#### Fixed code

```python
import numpy as np
a = np.arange(12)
print(a.reshape((3,4)))

# or infer
a = np.arange(10)
print(a.reshape((2, -1)))  # -> (2,5)
```
