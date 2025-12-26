---
title: "ValueError: num must be 1 <= num <= 30"
description: "Fixing the error when creating too many subplots with a single integer argument."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: num must be 1 <= num <= 30

```bash
$ python plot.py
Traceback (most recent call last):
  ...
ValueError: num must be 1 <= num <= 30
```

### Why this happens

This error is specific to `plt.subplot()` when using a single integer argument (e.g., `321`). The digits represent rows, columns, and index. If any digit is invalid or the combination is impossible within the single-integer syntax limits (historically limited), this error might appear, though modern Matplotlib usually raises `ValueError: Single argument to subplot must be a 3-digit integer` or similar for malformed inputs. This specific error message is older or related to specific backend limitations on figure numbers.

_Note: In newer Matplotlib versions, creating a figure with `plt.figure(num=...)` where `num` is an integer might have backend-specific limits, or this error refers to the subplot index being out of range for the grid specified._

### Fix

Use the three-argument form `plt.subplot(rows, cols, index)` to avoid ambiguity and limitations of the single-integer syntax, or ensure your figure number is within valid range if that's the cause.

#### Wrong code

```python
import matplotlib.pyplot as plt

# Trying to access the 35th subplot in a 6x6 grid using single integer
plt.subplot(6635)
```

#### Fixed code

```python
import matplotlib.pyplot as plt

# Use comma-separated arguments
plt.subplot(6, 6, 35)
```
