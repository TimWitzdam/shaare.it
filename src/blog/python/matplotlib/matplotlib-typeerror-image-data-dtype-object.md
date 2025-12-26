---
title: "TypeError: Image data of dtype object cannot be converted to float"
description: "Fixing data type errors when displaying images with imshow."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## TypeError: Image data of dtype object cannot be converted to float

```bash
$ python script.py
Traceback (most recent call last):
  ...
TypeError: Image data of dtype object cannot be converted to float
```

### Why this happens

You are trying to use `plt.imshow()` on a NumPy array that has `dtype=object`. Matplotlib expects numeric data (floats or integers) for image display. This often happens if your array contains mixed types or strings.

### Fix

Convert your array to a numeric type like `float` or `uint8` using `astype()`. Ensure the data is actually numeric.

#### Wrong code

```python
import matplotlib.pyplot as plt
import numpy as np
# Array with mixed types or strings becomes object dtype
data = np.array([[1, '2'], [3, 4]])
plt.imshow(data)
```

#### Fixed code

```python
import matplotlib.pyplot as plt
import numpy as np
data = np.array([[1, 2], [3, 4]])
# Ensure numeric type
plt.imshow(data.astype(float))
```
