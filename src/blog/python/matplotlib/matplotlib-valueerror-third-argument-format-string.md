---
title: "ValueError: third argument must be a format string"
description: "Correcting format string errors in Matplotlib plot command."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: third argument must be a format string

```bash
$ python script.py
Traceback (most recent call last):
  ...
ValueError: third argument must be a format string
```

### Why this happens

In `plt.plot(x, y, fmt)`, the third positional argument is expected to be a format string (like `'ro-'` for red circles with lines). If you pass data or something else as the third argument without specifying keywords, this error occurs.

### Fix

If you intended to plot multiple lines, ensure you follow the `x, y, fmt, x2, y2, fmt2` pattern or use keyword arguments for properties like `color` or `label`.

#### Wrong code

```python
import matplotlib.pyplot as plt
x = [1, 2]
y = [3, 4]
z = [5, 6]
# 'z' is interpreted as format string
plt.plot(x, y, z)
```

#### Fixed code

```python
import matplotlib.pyplot as plt
x = [1, 2]
y = [3, 4]
z = [5, 6]
# Explicitly plot two lines
plt.plot(x, y)
plt.plot(x, z)
```
