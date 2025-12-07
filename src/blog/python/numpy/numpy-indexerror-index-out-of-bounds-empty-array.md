---
title: "IndexError: index 0 is out of bounds for axis 0 with size 0"
description: "Indexing into empty arrays and how to guard against it."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## IndexError: index 0 is out of bounds for axis 0 with size 0

```bash
$ python -c "import numpy as np; a=np.array([]); print(a[0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
IndexError: index 0 is out of bounds for axis 0 with size 0
```

### Why this happens

You're trying to index an element from an array that has no elements.

### Fix

Check array size before indexing, or use try/except to handle empty arrays.

#### Wrong code

```python
import numpy as np
a = np.array([])
print(a[0])
```

#### Fixed code

```python
import numpy as np
a = np.array([])
if a.size > 0:
    print(a[0])
else:
    print('empty array')
```
