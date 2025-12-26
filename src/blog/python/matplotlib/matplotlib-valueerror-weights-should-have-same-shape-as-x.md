---
title: "ValueError: weights should have the same shape as x"
description: "Resolving shape mismatch errors when using weights in histograms."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: weights should have the same shape as x

```bash
$ python plot.py
Traceback (most recent call last):
  ...
ValueError: weights should have the same shape as x
```

### Why this happens

When creating a histogram with `plt.hist(x, weights=w)`, the `weights` array `w` must have the same number of elements as the data array `x`.

### Fix

Ensure that the weights array matches the length of the data array.

#### Wrong code

```python
import matplotlib.pyplot as plt

data = [1, 2, 3]
weights = [0.5, 0.5] # Length 2, data length 3
plt.hist(data, weights=weights)
```

#### Fixed code

```python
import matplotlib.pyplot as plt

data = [1, 2, 3]
weights = [0.5, 0.5, 1.0] # Length 3
plt.hist(data, weights=weights)
```
