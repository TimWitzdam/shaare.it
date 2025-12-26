---
title: "ValueError: Z must be a 2D array for contour"
description: "Provide a 2D grid of values for contour plots."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: Z must be a 2D array for contour

```bash
$ python -c "import numpy as np, matplotlib.pyplot as plt; plt.contour([1,2,3])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Input Z must be a 2D array
```

### Why this happens

Contour requires a 2D grid (height map) for Z.

### Fix

Provide a 2D array.

#### Wrong code

```python
import numpy as np
import matplotlib.pyplot as plt
plt.contour(np.array([1,2,3]))
```

#### Fixed code

```python
import numpy as np
import matplotlib.pyplot as plt
Z = np.array([[1,2,3],[4,5,6],[7,8,9]])
plt.contour(Z)
plt.show()
```
