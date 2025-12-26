---
title: "ValueError: 'c' argument must be a color, a sequence of colors, or a sequence of numbers"
description: "Resolving color argument errors in Matplotlib scatter plots."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: 'c' argument must be a color...

```bash
$ python script.py
Traceback (most recent call last):
  ...
ValueError: 'c' argument must be a color, a sequence of colors, or a sequence of numbers...
```

### Why this happens

This error often happens in `scatter` plots when the `c` (color) argument has a shape that doesn't match the data `x` and `y`, or contains invalid color values. It can also happen if you pass a list of strings that aren't valid color names.

### Fix

Ensure `c` is a valid color string, or an array of the same length as your data points if mapping colors to values.

#### Wrong code

```python
import matplotlib.pyplot as plt
x = [1, 2, 3]
y = [1, 2, 3]
# 'c' has different length than x/y
plt.scatter(x, y, c=[1, 2])
```

#### Fixed code

```python
import matplotlib.pyplot as plt
x = [1, 2, 3]
y = [1, 2, 3]
# 'c' matches length of x/y
plt.scatter(x, y, c=[10, 20, 30])
```
