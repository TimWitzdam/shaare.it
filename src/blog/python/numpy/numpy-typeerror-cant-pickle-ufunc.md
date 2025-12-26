---
title: "TypeError: can't pickle ufunc objects"
description: "Error raised when you try to pickle NumPy ufuncs (universal functions)."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: can't pickle ufunc objects

```bash
$ python - <<'PY'
import numpy as np
import pickle
pickle.dumps(np.add)
PY
# TypeError: can't pickle ufunc objects
```

### Why this happens

NumPy ufuncs are C-level function pointers and are not picklable by default. The Python pickle module cannot serialize C-level functions like `np.add`, `np.multiply`, or other ufunc objects.

### Fix

Avoid pickling ufuncs directly. Instead, pickle a string name or an enum describing the operation and map it back to a ufunc at load time. Alternatively, use `dill` or custom serialization for complex objects, or wrap the operation in a Python-level callable that can be pickled.

#### Wrong code

```python
import numpy as np
import pickle
# Trying to pickle a ufunc directly
pickle.dumps(np.add)
```

#### Fixed code

```python
import numpy as np
import pickle
# Serialize a reference to the function by name
pickled = pickle.dumps('add')
name = pickle.loads(pickled)
ufunc = getattr(np, name)
print(ufunc(1, 2))  # 3

# Or use Python wrapper that is picklable
def add(x, y):
    return np.add(x, y)
print(pickle.dumps(add))
```
