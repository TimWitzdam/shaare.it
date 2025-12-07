---
title: "RuntimeError: output array is read-only"
description: "Attempting to write into arrays that are read-only, often via the out= parameter or views."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## output array is read-only

```bash
$ python - <<'PY'
import numpy as np
data = np.arange(4)
view = data.view()
view.setflags(write=False)
np.add(data, 1, out=view)
PY
Traceback (most recent call last):
  File "<stdin>", line 6, in <module>
RuntimeError: output array is read-only
```

### Why this happens

You passed an array flagged as non-writeable (or a view of a read-only buffer) as the destination for an operation using `out=`. NumPy prevents in-place writes to protect memory safety.

### Fix

Ensure the destination array is writeable (remove read-only flag or copy the array) or avoid using `out=` and assign the result to a new array.

#### Wrong code

```python
import numpy as np
data = np.arange(4)
view = data.view()
view.setflags(write=False)
np.add(data, 1, out=view)
```

#### Fixed code

```python
import numpy as np
data = np.arange(4)
view = data.view()
# make a copy or set flags if appropriate
copy = view.copy()
np.add(data, 1, out=copy)

# or make writeable (only if you control ownership)
# view.setflags(write=True)
```
