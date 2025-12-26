---
title: "ValueError: Single argument to subplot must be a 3-digit integer"
description: "Correcting the subplot argument format in Matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: Single argument to subplot must be a 3-digit integer

```bash
$ python plot.py
Traceback (most recent call last):
  ...
ValueError: Single argument to subplot must be a 3-digit integer
```

### Why this happens

You passed a single integer to `plt.subplot()` that does not have exactly 3 digits (e.g., `12` or `1234`). The shorthand syntax requires `nrows`, `ncols`, and `index` to be single digits packed into one integer (e.g., `221`).

### Fix

Ensure the integer has 3 digits, or better yet, use the comma-separated syntax `plt.subplot(nrows, ncols, index)`.

#### Wrong code

```python
import matplotlib.pyplot as plt

plt.subplot(12) # Only 2 digits
```

#### Fixed code

```python
import matplotlib.pyplot as plt

plt.subplot(1, 2, 1) # Explicit arguments
# OR
plt.subplot(121) # 3 digits
```
