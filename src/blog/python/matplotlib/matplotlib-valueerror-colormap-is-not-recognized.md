---
title: "ValueError: Colormap is not recognized"
description: "Resolving errors when using invalid colormap names in Matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: Colormap is not recognized

```bash
$ python plot.py
Traceback (most recent call last):
  ...
ValueError: Colormap 'super_cool_map' is not recognized
```

### Why this happens

The colormap name you passed to `cmap` does not exist in the installed version of Matplotlib.

### Fix

Check for typos or use a valid colormap name like `'viridis'`, `'plasma'`, `'inferno'`, `'magma'`, `'cividis'`, `'Greys'`, etc.

#### Wrong code

```python
import matplotlib.pyplot as plt
import numpy as np

data = np.random.rand(10, 10)
plt.imshow(data, cmap='super_cool_map')
```

#### Fixed code

```python
import matplotlib.pyplot as plt
import numpy as np

data = np.random.rand(10, 10)
plt.imshow(data, cmap='viridis')
```
