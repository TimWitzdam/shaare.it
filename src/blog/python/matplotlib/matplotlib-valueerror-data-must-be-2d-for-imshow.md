---
title: "ValueError: data must be 2D for imshow"
description: "imshow requires 2D grayscale or 3D color data."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: data must be 2D for imshow

```bash
$ python -c "import numpy as np, matplotlib.pyplot as plt; plt.imshow(np.array([1,2,3]))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Invalid shape (3,) for image data
```

### Why this happens

You passed a 1D array to `imshow`.

### Fix

Reshape to 2D or 3D array.

#### Wrong code

```python
import numpy as np
import matplotlib.pyplot as plt
plt.imshow(np.array([1,2,3]))
```

#### Fixed code

```python
import numpy as np
import matplotlib.pyplot as plt
img = np.array([[1,2,3],[4,5,6]])
plt.imshow(img)
plt.show()
```
