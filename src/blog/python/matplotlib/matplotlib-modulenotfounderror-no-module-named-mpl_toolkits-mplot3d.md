---
title: "ModuleNotFoundError: No module named 'mpl_toolkits.mplot3d'"
description: "3D plotting requires mpl_toolkits included with Matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ModuleNotFoundError: No module named 'mpl_toolkits.mplot3d'

```bash
$ python -c "from mpl_toolkits import mplot3d"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ModuleNotFoundError: No module named 'mpl_toolkits.mplot3d'
```

### Why this happens

Matplotlib is missing or installation is corrupted. Sometimes a local folder `mpl_toolkits/` shadows the package.

### Fix

Reinstall Matplotlib and remove shadowing files.

#### Wrong code

```python
from mpl_toolkits import mplot3d
```

#### Fixed code

```python
# pip install matplotlib
from mpl_toolkits.mplot3d import Axes3D
```
