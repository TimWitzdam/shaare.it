---
title: "ValueError: Dimensions of A must be at least 2-D"
description: "Contour and image functions need 2D arrays, not 1D."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: Dimensions of A must be at least 2-D

```bash
$ python -c "import numpy as np, matplotlib.pyplot as plt; plt.contour(np.array([1,2,3]))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Dimensions of A must be at least 2-D
```

### Why this happens

`contour`, `imshow`, etc. require 2D input arrays.

### Fix

Reshape to 2D or use appropriate 1D plotting functions like `plot`.

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
Z = np.array([[1,2],[3,4]])
plt.contour(Z)
plt.show()
```
