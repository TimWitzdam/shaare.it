---
title: "ValueError: need at least one array to concatenate"
description: "What happens when calling concatenation functions with empty inputs."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## need at least one array to concatenate

```bash
$ python - <<'PY'
import numpy as np
arrs = []
np.concatenate(arrs)
PY
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
ValueError: need at least one array to concatenate
```

### Why this happens

`np.concatenate` requires at least one array to join. Passing an empty list or generator yields this error.

### Fix

Check inputs before calling concatenation. Provide a default array or skip the operation when the input is empty.

#### Wrong code

```python
import numpy as np
arrs = []
combined = np.concatenate(arrs)
```

#### Fixed code

```python
import numpy as np
arrs = []
if arrs:
    combined = np.concatenate(arrs)
else:
    combined = np.empty((0,))
```
