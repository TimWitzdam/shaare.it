---
title: "TypeError / ValueError: invalid broadcast assignment"
description: "Errors when assigning arrays of incompatible shapes without proper broadcasting."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError/ValueError: invalid broadcast assignment

```bash
$ python -c "import numpy as np; a=np.zeros((2,3)); a[:,0]=np.array([1,2,3])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: could not broadcast input array from shape (3,) into shape (2,)
```

### Why this happens

You attempted to assign an array whose shape can't be broadcast to the target slice/array shape. Broadcasting requires compatible trailing dimensions or singleton dimensions.

### Fix

Reshape or expand dimensions to match, or ensure you assign an array with the correct shape.

#### Wrong code

```python
import numpy as np
a = np.zeros((2,3))
a[:,0] = np.array([1,2,3])
```

#### Fixed code

```python
import numpy as np
a = np.zeros((2,3))
a[:,0] = np.array([1,2])  # length 2 matches

# or reshape
vals = np.array([1,2,3]).reshape(3,1)
# assign to a compatible target
b = np.zeros((3,1))
b[:] = vals
```
