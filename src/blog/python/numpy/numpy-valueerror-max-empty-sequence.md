---
title: "ValueError: max() arg is an empty sequence"
description: "Reductions like max/min/argmax on empty arrays raise errors."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## max() arg is an empty sequence

```bash
$ python - <<'PY'
import numpy as np
arr = np.array([])
arr.max()
PY
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
ValueError: max() arg is an empty sequence
```

### Why this happens

Reductions require at least one element; calling them on empty arrays has no meaningful result.

### Fix

Check array size before reducing, or provide defaults using Python's `default` patterns or handle exceptions.

#### Wrong code

```python
import numpy as np
arr = np.array([])
arr.max()
```

#### Fixed code

```python
import numpy as np
arr = np.array([])
if arr.size:
    print(arr.max())
else:
    print('no data')
```
