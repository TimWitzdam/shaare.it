---
title: "AttributeError: 'AxesSubplot' object has no attribute 'show'"
description: "Fixing the error when trying to call show() on an Axes object."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## AttributeError: 'AxesSubplot' object has no attribute 'show'

```bash
$ python plot.py
Traceback (most recent call last):
  ...
AttributeError: 'AxesSubplot' object has no attribute 'show'
```

### Why this happens

The `show()` method is part of the `pyplot` interface (`plt.show()`) or the Figure manager, but not the `Axes` object itself.

### Fix

Use `plt.show()` to display the figure.

#### Wrong code

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([1, 2, 3], [1, 4, 9])
ax.show()
```

#### Fixed code

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([1, 2, 3], [1, 4, 9])
plt.show()
```
