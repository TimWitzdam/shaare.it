---
title: "OverflowError: In draw_path: Exceeded cell block limit"
description: "Handling OverflowError when plotting extremely large datasets."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## OverflowError: In draw_path: Exceeded cell block limit

```bash
$ python script.py
Traceback (most recent call last):
  ...
OverflowError: In draw_path: Exceeded cell block limit
```

### Why this happens

This error occurs when you try to plot a line with an extremely large number of points or very large coordinates that exceed the internal limits of the renderer (often the Agg backend).

### Fix

Downsample your data before plotting, or use a different backend if applicable. Plotting millions of points is usually visually indistinguishable from a downsampled version.

#### Wrong code

```python
import matplotlib.pyplot as plt
import numpy as np
# Too many points for some renderers
x = np.arange(10**7)
y = np.random.randn(10**7)
plt.plot(x, y)
plt.savefig("test.png")
```

#### Fixed code

```python
import matplotlib.pyplot as plt
import numpy as np
x = np.arange(10**7)
y = np.random.randn(10**7)
# Downsample: take every 100th point
plt.plot(x[::100], y[::100])
plt.savefig("test.png")
```
