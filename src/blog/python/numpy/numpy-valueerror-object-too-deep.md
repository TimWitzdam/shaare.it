---
title: "ValueError: object too deep for desired array"
description: "Occurs when creating arrays from irregular nested sequences (ragged)."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## object too deep for desired array

```bash
$ python - <<'PY'
import numpy as np
data = [[1, 2], [3, [4,5]]]
np.array(data)
PY
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
ValueError: object too deep for desired array
```

### Why this happens

When nested sequences have inconsistent depths or shapes, NumPy cannot form a regular n-dimensional array and raises this error.

### Fix

Make sequences regular (same depth and length) or use dtype=object to store irregular nested containers.

#### Wrong code

```python
import numpy as np
data = [[1, 2], [3, [4,5]]]
np.array(data)
```

#### Fixed code

```python
import numpy as np
data = [[1, 2], [3, 4]]
arr = np.array(data)

# or keep ragged structure as object
ragged = np.array([[1, 2], [3, [4,5]]], dtype=object)
```
