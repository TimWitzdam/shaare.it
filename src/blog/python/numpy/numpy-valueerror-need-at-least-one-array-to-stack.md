---
title: "ValueError: need at least one array to stack"
description: "np.stack requires at least one array and all inputs to have the same shape."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## need at least one array to stack

```bash
$ python - <<'PY'
import numpy as np
arrs = []
np.stack(arrs)
PY
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
ValueError: need at least one array to stack
```

### Why this happens

`np.stack` needs at least one array and all arrays must have the same shape so they can be stacked along a new axis.

### Fix

Ensure you pass a non-empty sequence and that all arrays share the same shape. Use `np.concatenate` or create a new array from individual items if shapes differ.

#### Wrong code

```python
import numpy as np
arrs = []
np.stack(arrs)
```

#### Fixed code

```python
import numpy as np
arrs = [np.zeros((2,2)), np.ones((2,2))]
stacked = np.stack(arrs)
```
