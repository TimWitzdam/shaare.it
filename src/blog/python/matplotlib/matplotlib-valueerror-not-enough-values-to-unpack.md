---
title: "ValueError: not enough values to unpack (expected 2, got 1)"
description: "Fixing unpacking errors with plt.subplots()."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: not enough values to unpack (expected 2, got 1)

```bash
$ python script.py
Traceback (most recent call last):
  ...
ValueError: not enough values to unpack (expected 2, got 1)
```

### Why this happens

This often happens if you confuse `plt.subplots()` (which returns `fig, ax`) with `plt.subplot()` (which returns just `ax`). If you try to unpack the result of `plt.subplot()` into two variables, it fails.

### Fix

Use `plt.subplots()` if you want the figure and axes, or assign the result of `plt.subplot()` to a single variable.

#### Wrong code

```python
import matplotlib.pyplot as plt
# subplot returns only ax
fig, ax = plt.subplot(111)
```

#### Fixed code

```python
import matplotlib.pyplot as plt
# subplots returns tuple (fig, ax)
fig, ax = plt.subplots()
```
