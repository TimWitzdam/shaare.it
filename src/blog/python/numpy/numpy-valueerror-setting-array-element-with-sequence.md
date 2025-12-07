---
title: "ValueError: setting an array element with a sequence"
description: "Why NumPy raises 'setting an array element with a sequence' and how to fix it."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: setting an array element with a sequence

```bash
$ python -c "import numpy as np; np.array([1, [2,3]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: setting an array element with a sequence.
```

### Why this happens

NumPy arrays require a regular shape and uniform element size. If you try to create an array from nested sequences of different lengths (a ragged sequence), NumPy can't place the elements into a rectangular array of a single dtype and raises this ValueError.

### Fix

Make the input into a regular rectangular shape (nested lists with consistent lengths) or explicitly create an object-dtype array if ragged structure is intended.

#### Wrong code

```python
import numpy as np
a = np.array([1, [2, 3]])
print(a)
```

#### Fixed code (rectangular)

```python
import numpy as np
a = np.array([[1, 2], [3, 4]])
print(a)
```

#### Alternative (keep ragged structure)

```python
import numpy as np
a = np.array([1, [2, 3]], dtype=object)
print(a)  # array([1, list([2, 3])], dtype=object)
```
