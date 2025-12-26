---
title: "ValueError: invalid pad_width for np.pad"
description: "Errors caused by passing invalid pad_width shapes or types to np.pad."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: invalid pad_width for np.pad

```bash
$ python - <<'PY'
import numpy as np
arr = np.zeros((2,3))
# invalid pad_width: one tuple, but array has 2 dimensions
np.pad(arr, ((1, 2),))
PY
Traceback (most recent call last):
  File "<string>", line 4, in <module>
ValueError: padded shaping must be of length 2 for 2-dimensional array
```

### Why this happens

`np.pad` accepts several forms of `pad_width`:

- a single integer applied to every axis,
- a tuple of two integers applied to every axis,
- or a sequence of `(before, after)` tuples with one tuple per axis: `((before_0, after_0), (before_1, after_1), ...)`.

Supplying a `pad_width` that doesn't match the number of axes or the expected nested tuple format triggers a ValueError.

### Fix

Provide `pad_width` with one of the supported shapes. For an array with shape `(2, 3)`, use e.g. `((1, 1), (2, 2))`, `(1, 1)`, or single `1` depending on intent.

#### Wrong code

```python
import numpy as np
arr = np.zeros((2, 3))
np.pad(arr, ((1, 2),))  # Missing tuple for second dimension
```

#### Fixed code

```python
import numpy as np
arr = np.zeros((2, 3))
# provide a (before, after) tuple for each dimension
padded = np.pad(arr, ((1, 1), (2, 2)))
print(padded.shape)  # (2+1+1, 3+2+2) -> (4, 7)

# simpler: single value per axis
padded = np.pad(arr, (1, 1))  # same pad both axes with 1
```
