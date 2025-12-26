---
title: "ValueError: invalid einsum subscripts / shape mismatch"
description: "Errors from using invalid subscripts or mismatching array shapes with np.einsum."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: invalid einsum subscripts / shape mismatch

```bash
$ python - <<'PY'
import numpy as np
# Wrong shapes for 'ij,jk->ik' (j dims differ)
a = np.zeros((2,3))
b = np.zeros((4,2))
np.einsum('ij,jk->ik', a, b)
PY
Traceback (most recent call last):
  File "<string>", line 6, in <module>
ValueError: shapes (2, 3) and (4, 2) not aligned: 3 (dim 1) != 4 (dim 0)
```

### Why this happens

`np.einsum` uses a compact subscript notation to represent how arrays are multiplied, summed, and rearranged. If you provide subscripts that indicate dimensions should be matched (e.g., the `j` index above), the corresponding dimensions of the input arrays must have equal lengths. If they do not match, NumPy raises a ValueError.

### Fix

- Check your subscripts for typos.
- Ensure array shapes match the subscripts you write, adjusting axes with `np.transpose` or reshaping as necessary.
- If you only want to broadcast arrays, use `np.tensordot`, `np.matmul`, or adjust your indices.

#### Wrong code

```python
import numpy as np
# `j` does not match between a and b
a = np.zeros((2,3))
b = np.zeros((4,2))
np.einsum('ij,jk->ik', a, b)  # ValueError
```

#### Fixed code

```python
import numpy as np
# Make b shape (3,4) so the shared axis j has length 3
a = np.zeros((2,3))
b = np.zeros((3,4))
print(np.einsum('ij,jk->ik', a, b).shape)  # (2, 4)

# Or use transpose to align axes
b = np.zeros((2,4)).T  # (4,2) -> transpose to (2,4) then reshape/broadcast as needed
```
