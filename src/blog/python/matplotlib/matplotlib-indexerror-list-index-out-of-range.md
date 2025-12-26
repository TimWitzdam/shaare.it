---
title: "IndexError: list index out of range (subplots)"
description: "Handling indexing errors when accessing subplots in Matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## IndexError: list index out of range

```bash
$ python script.py
Traceback (most recent call last):
  ...
IndexError: list index out of range
```

### Why this happens

This commonly occurs when you create a grid of subplots (e.g., 1 row, 2 columns) but try to access an index that doesn't exist, or you treat a 1D array of axes as 2D.

### Fix

Check the shape of your `axes` object. If you have 1 row or 1 column, `axes` is 1D. If you have 1x1, `axes` is a single object (not a list).

#### Wrong code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots(1, 2)
# Trying to access a 3rd subplot that doesn't exist
ax[2].plot([1, 2])
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots(1, 2)
ax[0].plot([1, 2])
ax[1].plot([3, 4])
```
