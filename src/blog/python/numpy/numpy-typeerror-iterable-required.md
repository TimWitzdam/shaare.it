---
title: "TypeError: 'iterable required' or similar when passing wrong argument types"
description: "Errors when functions expect iterables (e.g., np.concatenate) but receive scalars or None."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: iterable required

```bash
$ python -c "import numpy as np; np.concatenate(1)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'int' object is not iterable
```

### Why this happens

You passed a non-iterable to a function that expects an iterable of arrays (like np.concatenate, np.vstack).

### Fix

Wrap single arrays in a list/tuple, or pass the correct iterable type.

#### Wrong code

```python
import numpy as np
np.concatenate(np.array([1,2,3]))
```

#### Fixed code

```python
import numpy as np
np.concatenate([np.array([1,2,3])])
```
