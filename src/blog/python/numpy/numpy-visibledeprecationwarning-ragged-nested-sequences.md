---
title: "VisibleDeprecationWarning: creating an ndarray from ragged nested sequences"
description: "Why NumPy warns about ragged nested sequences and what to do instead."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## VisibleDeprecationWarning: ragged nested sequences

```bash
$ python -c "import numpy as np; np.array([ [1,2], [3] ])"
/tmp/ipykernel_...:1: VisibleDeprecationWarning: Creating an ndarray from ragged nested sequences is deprecated. If you meant to do this, specify 'dtype=object' when creating the ndarray
  np.array([ [1,2], [3] ])
```

### Why this happens

NumPy prefers rectangular arrays. When nested lists have different lengths, NumPy emits this warning because future versions will make this behavior an explicit object-dtype array.

### Fix

Provide consistent-length nested sequences or pass dtype=object explicitly to indicate intent.

#### Wrong code

```python
import numpy as np
arr = np.array([[1,2],[3]])
```

#### Fixed code

```python
import numpy as np
arr = np.array([[1,2],[3,4]])

# or
arr = np.array([[1,2],[3]], dtype=object)
```
