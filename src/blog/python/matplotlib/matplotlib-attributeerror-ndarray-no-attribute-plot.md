---
title: "AttributeError: 'numpy.ndarray' object has no attribute 'plot'"
description: "Understanding the return values of plt.subplots()."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## AttributeError: 'numpy.ndarray' object has no attribute 'plot'

```bash
$ python script.py
Traceback (most recent call last):
  ...
AttributeError: 'numpy.ndarray' object has no attribute 'plot'
```

### Why this happens

When you create multiple subplots, `plt.subplots()` returns an array of Axes objects. You are trying to call `.plot()` on the array itself, rather than on one of the Axes inside it.

### Fix

Iterate over the axes or access a specific one by index before calling `.plot()`.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots(2)
ax.plot([1, 2]) # ax is an array here
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots(2)
ax[0].plot([1, 2])
ax[1].plot([3, 4])
```
