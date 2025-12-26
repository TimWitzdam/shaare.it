---
title: "ValueError: bins must be monotonically increasing"
description: "Fixing histogram bin errors in Matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: bins must be monotonically increasing

```bash
$ python plot.py
Traceback (most recent call last):
  ...
ValueError: bins must be monotonically increasing or equal
```

### Why this happens

When defining custom bins for a histogram using `plt.hist()`, the array of bin edges must be sorted in ascending order.

### Fix

Sort your bins array before passing it to the histogram function.

#### Wrong code

```python
import matplotlib.pyplot as plt

data = [1, 2, 3, 4, 5]
bins = [0, 5, 2, 10] # Not sorted
plt.hist(data, bins=bins)
```

#### Fixed code

```python
import matplotlib.pyplot as plt

data = [1, 2, 3, 4, 5]
bins = [0, 2, 5, 10] # Sorted
plt.hist(data, bins=bins)
```
