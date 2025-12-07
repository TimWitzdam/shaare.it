---
title: "ValueError: invalid literal for int() with base 10"
description: "Converting string arrays to integers when some strings aren't valid integers."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## invalid literal for int() with base 10

```bash
$ python - <<'PY'
import numpy as np
arr = np.array(['1', '2', 'three'])
arr.astype(int)
PY
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
ValueError: invalid literal for int() with base 10: 'three'
```

### Why this happens

Some strings can't be parsed as integers; `astype(int)` attempts direct Python conversion and fails on invalid literals.

### Fix

Clean or validate data before converting. Use `np.char.isdigit`, list comprehensions, or pandas `to_numeric` with coercion.

#### Wrong code

```python
import numpy as np
arr = np.array(['1', '2', 'three'])
arr.astype(int)
```

#### Fixed code

```python
import numpy as np
arr = np.array(['1', '2', 'three'])
from pandas import to_numeric
clean = to_numeric(arr, errors='coerce')
clean.astype('Int64')

# or filter
valid = [int(x) for x in arr if x.isdigit()]
```
