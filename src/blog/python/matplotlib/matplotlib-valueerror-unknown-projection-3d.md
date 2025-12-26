---
title: "ValueError: Unknown projection '3d'"
description: "3D axes require mplot3d to be imported or correct usage."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: Unknown projection '3d'

```bash
$ python -c "import matplotlib.pyplot as plt; fig = plt.figure(); fig.add_subplot(111, projection='3d')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Unknown projection '3d'
```

### Why this happens

3D projection support lives in `mpl_toolkits.mplot3d`. Without importing or using `plt.subplots(subplot_kw={'projection':'3d'})`, it can fail in some environments.

### Fix

Import `mpl_toolkits.mplot3d` or use the recommended `subplot_kw`.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
```

#### Fixed code

```python
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D  # enables 3D projection registration
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Or
fig, ax = plt.subplots(subplot_kw={"projection":"3d"})
```
