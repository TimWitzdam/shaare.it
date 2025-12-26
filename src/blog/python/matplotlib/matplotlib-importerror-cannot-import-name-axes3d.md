---
title: "ImportError: cannot import name 'Axes3D'"
description: "Correctly importing Axes3D from mpl_toolkits.mplot3d."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ImportError: cannot import name 'Axes3D'

```bash
$ python -c "from matplotlib import Axes3D"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'Axes3D' from 'matplotlib' (unknown location)
```

### Why this happens

`Axes3D` is defined in `mpl_toolkits.mplot3d`, not directly in `matplotlib`.

### Fix

Import from the correct module.

#### Wrong code

```python
from matplotlib import Axes3D
```

#### Fixed code

```python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
```
