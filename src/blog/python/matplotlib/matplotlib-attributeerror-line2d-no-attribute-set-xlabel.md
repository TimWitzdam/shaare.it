---
title: "AttributeError: 'Line2D' object has no attribute 'set_xlabel'"
description: "Calling axis-label methods on a line instead of on Axes."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## AttributeError: 'Line2D' object has no attribute 'set_xlabel'

```bash
$ python -c "import matplotlib.pyplot as plt; line, = plt.plot([1,2]); line.set_xlabel('X')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'Line2D' object has no attribute 'set_xlabel'
```

### Why this happens

`set_xlabel` is a method of `Axes`, not of `Line2D`. You're calling it on the wrong object.

### Fix

Call labeling functions on the `Axes` object.

#### Wrong code

```python
import matplotlib.pyplot as plt
line, = plt.plot([1,2])
line.set_xlabel('X')
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.plot([1,2])
ax.set_xlabel('X')
ax.set_ylabel('Y')
plt.show()
```
