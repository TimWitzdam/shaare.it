---
title: "AttributeError: 'Axes' object has no attribute 'xlabel'"
description: "Correctly setting labels on Matplotlib Axes objects."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## AttributeError: 'Axes' object has no attribute 'xlabel'

```bash
$ python script.py
Traceback (most recent call last):
  ...
AttributeError: 'AxesSubplot' object has no attribute 'xlabel'
```

### Why this happens

When using the object-oriented interface (working with `ax` objects), the method names are slightly different from the `plt` interface. `plt.xlabel()` becomes `ax.set_xlabel()`.

### Fix

Use `set_xlabel()` instead of `xlabel()` when working with an Axes object.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.xlabel("Time")
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.set_xlabel("Time")
```
