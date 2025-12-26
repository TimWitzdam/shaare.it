---
title: "ValueError: invalid number of points for pie"
description: "Pie chart expects positive values; empty or negative causes errors."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: invalid number of points for pie

```bash
$ python -c "import matplotlib.pyplot as plt; plt.pie([])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Wedge sizes 'x' must be non negative values
```

### Why this happens

You passed an empty list or negative values to `pie`.

### Fix

Provide non-empty, non-negative sizes.

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.pie([])
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.pie([30, 40, 30])
plt.show()
```
