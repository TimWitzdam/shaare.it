---
title: "ValueError: bottom must be a scalar or array-like"
description: "How to fix the ValueError for the 'bottom' argument in Matplotlib's bar charts."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: bottom must be a scalar or array-like

This error occurs when using `plt.bar()` or `ax.bar()` to create stacked bar charts, and the `bottom` argument is provided in an incorrect format. Matplotlib expects `bottom` to be either a single number (scalar) or a list/array of numbers (array-like) with the same length as the x-coordinates.

```bash
$ python -c "import matplotlib.pyplot as plt; plt.bar(x=['A', 'B'], height=[10, 12], bottom='invalid')"
Traceback (most recent call last):
  ...
ValueError: bottom must be a scalar or array-like
```

### Why this happens

The `bottom` parameter in a bar chart specifies the y-coordinate(s) from which to start drawing the bars. This is essential for creating stacked bar charts, where each new bar is placed on top of the previous one.

The error arises if the value passed to `bottom` is not a numeric type (like an integer or float) or a sequence of numeric types (like a list or NumPy array). For example, passing a string or a multi-dimensional array will cause this `ValueError`.

### Fix

Ensure that the `bottom` argument is either a single number (if all bars start from the same y-level) or a 1D array-like object (list, tuple, or NumPy array) containing the y-positions for the bottom of each bar. When stacking bars, `bottom` should typically be the cumulative sum of the heights of the bars below.

#### Wrong code

In this example, a string is passed to the `bottom` argument, which is invalid.

```python
import matplotlib.pyplot as plt

categories = ['X', 'Y', 'Z']
values1 = [10, 15, 20]
values2 = [5, 8, 12]

# This will fail because 'values1' is not a valid type for the bottom argument
plt.bar(categories, values1, label='Series 1')
plt.bar(categories, values2, bottom='values1', label='Series 2')

plt.title('Invalid Stacked Bar Chart')
plt.legend()
plt.show()
```

#### Fixed code

The corrected code passes the actual `values1` list to the `bottom` argument for the second series of bars, creating a proper stacked chart.

```python
import matplotlib.pyplot as plt
import numpy as np

categories = ['X', 'Y', 'Z']
values1 = np.array([10, 15, 20])
values2 = np.array([5, 8, 12])

# Plot the first series
plt.bar(categories, values1, label='Series 1')

# Plot the second series on top of the first
# The 'bottom' for the second series is the height of the first series
plt.bar(categories, values2, bottom=values1, label='Series 2')

# For a third series, the bottom would be values1 + values2
# values3 = np.array([2, 4, 6])
# plt.bar(categories, values3, bottom=values1 + values2, label='Series 3')

plt.title('Correct Stacked Bar Chart')
plt.legend()
plt.show()
```
