---
title: "ImportError: No module named 'mpl_toolkits'"
description: "Missing mpl_toolkits package for Matplotlib 3D and toolkits."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ImportError: No module named 'mpl_toolkits'

```bash
$ python -c "import mpl_toolkits.mplot3d"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: No module named 'mpl_toolkits'
```

### Why this happens

Your environment doesn't have Matplotlib fully installed (partial install, broken venv), or a local module shadows `mpl_toolkits`.

### Fix

Reinstall Matplotlib and its dependencies; avoid naming local files `mpl_toolkits.py`.

#### Wrong code

```python
from mpl_toolkits.mplot3d import Axes3D
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
```

#### Fixed code

```python
# Ensure matplotlib is installed
# pip install matplotlib
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D  # provided with Matplotlib
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
plt.show()
```
