---
title: "ValueError: invalid transform"
description: "Artist transforms must be valid (data, axes, figure)."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: invalid transform

```bash
$ python -c "import matplotlib.pyplot as plt; fig, ax = plt.subplots(); t='notatransform'; ax.text(0.5,0.5,'hi', transform=t)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Invalid transform
```

### Why this happens

You passed a string or unsupported object instead of a transform object.

### Fix

Use `ax.transData`, `ax.transAxes`, or `fig.transFigure`.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.text(0.5, 0.5, 'hi', transform='data')
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.text(0.5, 0.5, 'hi', transform=ax.transAxes)
plt.show()
```
