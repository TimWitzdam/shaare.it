---
title: "ImportError: backend 'Qt5Agg' not found"
description: "GUI backend missing or Qt bindings not installed."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ImportError: backend 'Qt5Agg' not found

```bash
$ python -c "import matplotlib; matplotlib.use('Qt5Agg')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: Cannot load backend 'Qt5Agg'
```

### Why this happens

The Qt5 GUI dependencies (PyQt5 or PySide2) are not installed, or the environment doesn't support GUI backends.

### Fix

Install Qt bindings or use a non-GUI backend like `Agg` when running headless.

#### Wrong code

```python
import matplotlib
matplotlib.use('Qt5Agg')
import matplotlib.pyplot as plt
plt.plot([1,2,3])
plt.show()
```

#### Fixed code

```python
# Option A: install Qt bindings
# pip install PyQt5

# Option B: headless backend
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
plt.plot([1,2,3])
plt.savefig('plot.png')
```
