---
title: "TypeError: Object of type numpy.int64 is not JSON serializable"
description: "Python's json module can't serialize NumPy scalars and arrays by default. Convert to native Python types first."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: Object of type numpy.int64 is not JSON serializable

```bash
$ python - <<'PY'
import numpy as np
import json
json.dumps(np.int64(123))
PY
Traceback (most recent call last):
  File "<string>", line 3, in <module>
TypeError: Object of type int64 is not JSON serializable
```

### Why this happens

Python's `json` module works with built-in types (int, float, dict, list). NumPy scalars like `numpy.int64` and `numpy.float64`, and `ndarray` objects, are not plain Python types and thus aren't serializable by `json.dumps` out of the box.

### Fix

Convert NumPy scalars to Python scalars with `.item()` or `int()/float()`, and convert arrays to lists with `.tolist()` before serialization. Alternatively, provide a custom serializer by passing `default=` to `json.dumps`.

#### Wrong code

```python
import numpy as np
import json
arr = np.array([1, 2, 3])
json.dumps(arr)  # TypeError
```

#### Fixed code

```python
import numpy as np
import json
arr = np.array([1, 2, 3])
# Convert to native list
json_str = json.dumps(arr.tolist())
print(json_str)

# Convert a single numpy scalar
val = np.int64(123)
print(json.dumps(int(val)))

# Or use default serializer
json.dumps(arr, default=lambda o: o.tolist() if hasattr(o, 'tolist') else int(o))
```
