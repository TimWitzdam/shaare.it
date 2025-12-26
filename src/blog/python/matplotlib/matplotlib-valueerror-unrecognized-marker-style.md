---
title: "ValueError: Unrecognized marker style"
description: "How to fix invalid marker style errors in Matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: Unrecognized marker style

```bash
$ python plot.py
Traceback (most recent call last):
  ...
ValueError: Unrecognized marker style 'foo'
```

### Why this happens

You passed a string to the `marker` argument that Matplotlib does not recognize as a valid marker symbol.

### Fix

Use a valid marker string (e.g., 'o', 'x', '+', 's', '^'). Check the Matplotlib documentation for the list of supported markers.

#### Wrong code

```python
import matplotlib.pyplot as plt

plt.plot([1, 2, 3], marker='foo')
```

#### Fixed code

```python
import matplotlib.pyplot as plt

plt.plot([1, 2, 3], marker='o')  # 'o' for circle
```
