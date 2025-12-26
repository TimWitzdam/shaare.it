---
title: "ValueError: Invalid RGBA argument"
description: "How to fix the ValueError that occurs when providing an invalid color or alpha value in Matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: Invalid RGBA argument

This error occurs when you provide an invalid value for a color argument in a Matplotlib function. Matplotlib expects color arguments to be in a recognizable format, such as a named color (e.g., 'red'), a hex string (e.g., '#FF0000'), or an RGBA tuple where each value is between 0 and 1.

```bash
$ python -c "import matplotlib.pyplot as plt; plt.plot([1, 2], [1, 2], color=(255, 0, 0))"
Traceback (most recent call last):
  ...
ValueError: Invalid RGBA argument: (255, 0, 0)
```

### Why this happens

Matplotlib's color processing module is strict about the format of RGBA tuples. While many applications use RGB values in the range of 0-255, Matplotlib expects them to be floating-point numbers scaled between 0.0 and 1.0. When it receives a tuple with values outside this range, it cannot interpret it as a valid color.

This can also happen if you provide a string that is not a recognized color name or hex value.

### Fix

To fix this, ensure your color arguments are in a valid format. If you are using RGBA tuples, divide each of the R, G, and B values by 255.0 to scale them to the required 0-1 range.

#### Wrong code

The code below provides an RGB tuple with values from 0-255, which is incorrect for Matplotlib.

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [2, 5, 3, 6]

# This will cause a ValueError because the RGB values are not in the 0-1 range.
invalid_color = (0, 128, 255)

plt.plot(x, y, color=invalid_color)
plt.title('Plot with Invalid Color')
plt.show()
```

#### Fixed code

The corrected code scales the RGB values by dividing by 255.0. Alternatively, you can use a hex string or a recognized color name.

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [2, 5, 3, 6]

# Option 1: Scale the RGB tuple to the 0-1 range
# (R, G, B) -> (R/255.0, G/255.0, B/255.0)
correct_color_tuple = (0/255.0, 128/255.0, 255/255.0)
plt.plot(x, y, color=correct_color_tuple, linewidth=3)
plt.title('Plot with Corrected RGB Tuple')
plt.show()

# Option 2: Use a hex string
correct_color_hex = '#0080FF'
plt.plot(x, y, color=correct_color_hex, linewidth=3)
plt.title('Plot with Hex Color')
plt.show()

# Option 3: Use a named color (if applicable)
plt.plot(x, y, color='cornflowerblue', linewidth=3)
plt.title('Plot with Named Color')
plt.show()
```
