---
title: "ValueError: image size too large"
description: "Extremely large images exceed backend limits or memory."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: image size too large

```bash
$ python -c "import numpy as np, matplotlib.pyplot as plt; plt.imshow(np.zeros((50000,50000)))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Image size too large
```

### Why this happens

The array dimensions exceed memory or backend limits.

### Fix

Downsample, tile, or use a more memory-efficient representation.

#### Wrong code

```python
import numpy as np
import matplotlib.pyplot as plt
plt.imshow(np.zeros((50000, 50000)))
```

#### Fixed code

```python
import numpy as np
import matplotlib.pyplot as plt
img = np.zeros((1000, 1000))
plt.imshow(img)
plt.show()
```
