---
title: "AttributeError: module 'matplotlib' has no attribute 'figure'"
description: "Use matplotlib.figure or pyplot.figure; avoid top-level attribute lookup."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## AttributeError: module 'matplotlib' has no attribute 'figure'

```bash
$ python -c "import matplotlib; matplotlib.figure()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: module 'matplotlib' has no attribute 'figure'
```

### Why this happens

`figure` is in `matplotlib.pyplot` or the `matplotlib.figure` module.

### Fix

Import correctly.

#### Wrong code

```python
import matplotlib
matplotlib.figure()
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.figure()
```
