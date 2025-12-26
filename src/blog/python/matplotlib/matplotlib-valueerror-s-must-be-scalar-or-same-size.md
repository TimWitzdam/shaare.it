---
title: "ValueError: s must be a scalar, or the same size as x and y"
description: "Fixing size mismatch errors for markers in scatter plots."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: s must be a scalar, or the same size as x and y

```bash
$ python script.py
Traceback (most recent call last):
  ...
ValueError: s must be a scalar, or the same size as x and y
```

### Why this happens

In `plt.scatter()`, the `s` argument controls the size of the markers. It must be either a single number (scalar) for all points, or an array of sizes matching the number of data points.

### Fix

Ensure the list or array passed to `s` has the same length as your `x` and `y` data.

#### Wrong code

```python
import matplotlib.pyplot as plt
x = [1, 2, 3]
y = [1, 2, 3]
sizes = [10, 20] # Too short
plt.scatter(x, y, s=sizes)
```

#### Fixed code

```python
import matplotlib.pyplot as plt
x = [1, 2, 3]
y = [1, 2, 3]
sizes = [10, 20, 30] # Matches length
plt.scatter(x, y, s=sizes)
```
