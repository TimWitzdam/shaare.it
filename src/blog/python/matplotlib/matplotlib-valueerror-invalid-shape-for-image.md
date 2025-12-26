---
title: "ValueError: invalid shape for image"
description: "Images must be 2D (grayscale) or 3D (H, W, C) arrays."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: invalid shape for image

```bash
$ python -c "import numpy as np, matplotlib.pyplot as plt; plt.imshow(np.array([1,2,3,4,5]))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: invalid shape for image data
```

### Why this happens

`imshow` expects 2D (H×W) or 3D (H×W×C) arrays; a 1D array is invalid.

### Fix

Reshape to valid image dimensions.

#### Wrong code

```python
import numpy as np
import matplotlib.pyplot as plt
plt.imshow(np.array([1,2,3,4]))
```

#### Fixed code

```python
import numpy as np
import matplotlib.pyplot as plt
img = np.array([[1,2],[3,4]])  # 2D
plt.imshow(img, cmap='gray')
plt.show()
```
