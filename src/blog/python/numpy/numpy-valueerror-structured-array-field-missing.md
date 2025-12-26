---
title: "ValueError: field not found in structured array"
description: "Errors when you try to access a non-existent field on a structured NumPy array."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: field not found in structured array

```bash
$ python - <<'PY'
import numpy as np
dtype = [('x', 'i4'), ('y', 'f4')]
a = np.array([(1, 1.0)], dtype=dtype)
print(a['z'])
PY
# ValueError: field named 'z' not found
```

### Why this happens

Structured arrays use named fields defined by the dtype. Attempting to access a field name that wasn't defined in the dtype will raise a ValueError. This commonly happens when typoing the field name or misunderstanding the dtype layout.

### Fix

Check the structured dtype (e.g., `a.dtype.names`) and use the correct field name. If you need a new field, you can create a new structured dtype or use recfunctions to append fields.

#### Wrong code

```python
import numpy as np
dtype = [('x', 'i4'), ('y', 'f4')]
a = np.array([(1, 1.0)], dtype=dtype)
# Typo or wrong field
print(a['z'])
```

#### Fixed code

```python
import numpy as np
from numpy.lib import recfunctions as rfn
dtype = [('x', 'i4'), ('y', 'f4')]
a = np.array([(1, 1.0)], dtype=dtype)
print(a['x'])  # correct name

# Or add a new field:
b = rfn.append_fields(a, 'z', np.array([42]), usemask=False)
print(b['z'])
```
