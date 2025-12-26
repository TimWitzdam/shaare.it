---
title: "ValueError: x must be a 1D or 2D array"
description: "Troubleshooting the ValueError that occurs when passing incorrectly shaped data to Matplotlib functions."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: x must be a 1D or 2D array

This error typically occurs with plotting functions that expect array-like data for the x-axis, such as `plt.plot()` or `plt.scatter()`, but receive data in an unsupported format or dimension (e.g., a 3D array or a non-array-like object).

```bash
$ python -c "import matplotlib.pyplot as plt; import numpy as np; plt.plot(np.zeros((2,2,2)), np.zeros((2,2,2)))"
Traceback (most recent call last):
  ...
ValueError: x must be a 1D or 2D array
```

### Why this happens

Matplotlib's plotting functions are designed to work with one-dimensional data (for standard line plots) or two-dimensional data (for images or contour plots). When you pass a NumPy array with more than two dimensions, or an object that cannot be converted into a suitable array, Matplotlib cannot interpret how to map the data to the plot's axes.

### Fix

Ensure that the data you are passing for the `x` (and `y`) coordinates is a 1D or 2D NumPy array, a list, or another sequence that Matplotlib can interpret as an array. If you have higher-dimensional data, you may need to slice, flatten, or reshape it before plotting.

#### Wrong code

In this example, a 3D NumPy array is passed to `plt.plot()`, which is not a valid input shape.

```python
import matplotlib.pyplot as plt
import numpy as np

# Create a 3D array, which is not valid for plt.plot()
x_data = np.arange(8).reshape((2, 2, 2))
y_data = np.arange(8).reshape((2, 2, 2))

# This will raise a ValueError
plt.plot(x_data, y_data)
plt.title('Invalid 3D Data Plot')
plt.show()
```

#### Fixed code

To fix this, you can flatten the arrays to 1D or select a specific slice of the data to plot.

```python
import matplotlib.pyplot as plt
import numpy as np

x_data_3d = np.arange(8).reshape((2, 2, 2))
y_data_3d = np.arange(8).reshape((2, 2, 2))

# Option 1: Flatten the arrays to plot all data points
x_flat = x_data_3d.flatten()
y_flat = y_data_3d.flatten()

plt.plot(x_flat, y_flat)
plt.title('Flattened 3D Data Plot')
plt.show()

# Option 2: Select a 1D slice from the arrays
x_slice = x_data_3d[0, 0, :]
y_slice = y_data_3d[0, 0, :]

plt.plot(x_slice, y_slice)
plt.title('Slice of 3D Data Plot')
plt.show()
```
