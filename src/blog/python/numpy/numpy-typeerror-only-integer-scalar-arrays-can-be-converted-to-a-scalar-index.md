---
title: "TypeError: only integer scalar arrays can be converted to a scalar index"
description: "Indexing errors when passing arrays where scalars expected and how to fix them."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: only integer scalar arrays can be converted to a scalar index

```bash
$ python -c "import numpy as np; a=np.arange(5); a[np.array([1])]"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: only integer scalar arrays can be converted to a scalar index
```

### Why this happens

You're supplying an array where NumPy expects a scalar index. Using array indices must follow advanced indexing rules — single-element integer arrays aren't automatically converted to scalars in some contexts.

### Fix

Extract the scalar from the array (e.g., idx.item() or int(idx)) or use array-style indexing properly.

#### Wrong code

```python
import numpy as np
a = np.arange(5)
idx = np.array([2])
print(a[idx])  # may raise in specific contexts
```

#### Fixed code

```python
import numpy as np
a = np.arange(5)
idx = np.array([2])
print(a[int(idx)])

# or use idx.item()
print(a[idx.item()])
```
