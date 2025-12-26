---
title: "ValueError: x and y must have same first dimension"
description: "Understanding and fixing dimension mismatch errors in Matplotlib plots."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: x and y must have same first dimension

```bash
$ python script.py
Traceback (most recent call last):
  ...
ValueError: x and y must have same first dimension, but have shapes (3,) and (4,)
```

### Why this happens

You are trying to plot two arrays (x and y) against each other, but they have different lengths. Matplotlib requires x and y to have the same number of elements.

### Fix

Ensure that the input arrays for x and y axes have the exact same length.

#### Wrong code

```python
import matplotlib.pyplot as plt
x = [1, 2, 3]
y = [10, 20, 30, 40]
plt.plot(x, y)
```

#### Fixed code

```python
import matplotlib.pyplot as plt
x = [1, 2, 3, 4] # Match length of y
y = [10, 20, 30, 40]
plt.plot(x, y)
```
