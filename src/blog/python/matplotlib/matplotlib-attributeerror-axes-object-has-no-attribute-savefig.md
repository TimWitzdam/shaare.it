---
title: "AttributeError: 'AxesSubplot' object has no attribute 'savefig'"
description: "Understanding why you cannot call savefig on an Axes object and how to fix it."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## AttributeError: 'AxesSubplot' object has no attribute 'savefig'

```bash
$ python plot.py
Traceback (most recent call last):
  ...
AttributeError: 'AxesSubplot' object has no attribute 'savefig'
```

### Why this happens

The `savefig` method belongs to the `Figure` object or the `pyplot` module, not the `Axes` object. You are trying to save a specific subplot instead of the whole figure.

### Fix

Call `savefig` on the figure object (`fig`) or use `plt.savefig()`.

#### Wrong code

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([1, 2, 3], [1, 2, 3])
ax.savefig("plot.png")
```

#### Fixed code

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([1, 2, 3], [1, 2, 3])
fig.savefig("plot.png")
# OR
# plt.savefig("plot.png")
```
