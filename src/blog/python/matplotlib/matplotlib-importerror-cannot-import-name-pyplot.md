---
title: "ImportError: cannot import name 'pyplot' from 'matplotlib'"
description: "Fixing wrong imports or version issues when importing pyplot."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ImportError: cannot import name 'pyplot'

```bash
$ python -c "from matplotlib import pyplot"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'pyplot' from 'matplotlib' (unknown location)
```

### Why this happens

You imported from the wrong place (pyplot is a submodule) or have a corrupted/partial installation.

### Fix

Import via the package path `matplotlib.pyplot`, or reinstall Matplotlib.

#### Wrong code

```python
from matplotlib import pyplot
pyplot.plot([1,2],[3,4])
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.plot([1,2],[3,4])
plt.show()
```
