---
title: "ValueError: Axis limits cannot be NaN or Inf"
description: "Handling NaN or Inf values when setting axis limits in Matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: Axis limits cannot be NaN or Inf

```bash
$ python plot.py
Traceback (most recent call last):
  ...
ValueError: Axis limits cannot be NaN or Inf
```

### Why this happens

You are trying to set the x or y limits of the plot to `NaN` (Not a Number) or `Inf` (Infinity), or the data being plotted results in auto-scaled limits that are invalid.

### Fix

Check your data for `NaN` or `Inf` values before plotting, or ensure that `xlim` and `ylim` are set to finite numbers.

#### Wrong code

```python
import matplotlib.pyplot as plt
import numpy as np

plt.plot([1, 2, 3])
plt.xlim(0, np.nan) # Invalid limit
```

#### Fixed code

```python
import matplotlib.pyplot as plt
import numpy as np

plt.plot([1, 2, 3])
plt.xlim(0, 5) # Valid finite limits
```
