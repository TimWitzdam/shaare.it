---
title: "TypeError: 'AxesSubplot' object is not subscriptable"
description: "Fixing errors when trying to index a single Axes object."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## TypeError: 'AxesSubplot' object is not subscriptable

```bash
$ python script.py
Traceback (most recent call last):
  ...
TypeError: 'AxesSubplot' object is not subscriptable
```

### Why this happens

You created a single subplot (default behavior of `plt.subplots()`), so `ax` is a single object, not an array/list. You are trying to access it like `ax[0]`.

### Fix

Remove the index access `[0]` if you only have one subplot.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots() # Creates 1 axes
ax[0].plot([1, 2]) # Error
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.plot([1, 2]) # Correct
```
