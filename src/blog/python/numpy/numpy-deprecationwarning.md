---
title: "DeprecationWarning: deprecated NumPy feature"
description: "A warning that part of the NumPy API is deprecated and will be removed in a future version."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## DeprecationWarning: deprecated NumPy feature

```bash
$ python - <<'PY'
import numpy as np
np.int
PY
/tmp/...: DeprecationWarning: `np.int` is a deprecated alias for the builtin `int`.
```

### Why this happens

NumPy authors remove old aliases and behaviors to encourage clearer types and avoid ambiguity.

### Fix

Replace deprecated aliases with the recommended builtins or explicit dtypes (e.g., use `int`, `np.int_`).

#### Wrong code

```python
import numpy as np
arr = np.array([1,2], dtype=np.int)
```

#### Fixed code

```python
import numpy as np
arr = np.array([1,2], dtype=int)
```
