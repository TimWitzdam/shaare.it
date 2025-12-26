---
title: "TypeError: data type not understood"
description: "NumPy raises TypeError when you pass an invalid dtype string or an unsupported dtype to array/astype/dtype."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: data type not understood

```bash
$ python -c "import numpy as np; np.array([1, 2], dtype='floatx')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: data type 'floatx' not understood
```

### Why this happens

You likely passed an invalid dtype string or used a custom dtype name that NumPy doesn't recognize. Valid dtype names include `float32`, `float64`, `int32`, `int64`, and the NumPy-provided aliases like `np.int32`.

### Fix

Use a valid dtype name or NumPy type object. Avoid typos and deprecated aliases.

#### Wrong code

```python
import numpy as np
arr = np.array([1, 2], dtype='floatx')  # typographical error
```

#### Fixed code

```python
import numpy as np
arr = np.array([1, 2], dtype=np.float64)
# or
arr = np.array([1, 2], dtype='float64')
```
