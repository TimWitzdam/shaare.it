---
title: "ValueError: x and y must be the same size"
description: "Fixing the dimension mismatch error when plotting data with Matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: x and y must be the same size

```bash
$ python plot.py
Traceback (most recent call last):
  ...
ValueError: x and y must be the same size
```

### Why this happens

This error occurs when you try to plot two arrays (x and y) against each other, but they have different lengths. Matplotlib requires a one-to-one mapping between x and y coordinates.

### Fix

Ensure that both arrays have the exact same number of elements. Check your data generation or filtering logic.

#### Wrong code

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [10, 20, 30]  # Missing one element
plt.plot(x, y)
plt.show()
```

#### Fixed code

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [10, 20, 30, 40]
plt.plot(x, y)
plt.show()
```
