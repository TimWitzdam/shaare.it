---
title: "AttributeError: module 'matplotlib' has no attribute 'pyplot'"
description: "Resolving the AttributeError when importing pyplot from matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## AttributeError: module 'matplotlib' has no attribute 'pyplot'

```bash
$ python script.py
Traceback (most recent call last):
  File "script.py", line 2, in <module>
    matplotlib.pyplot.plot([1, 2, 3])
AttributeError: module 'matplotlib' has no attribute 'pyplot'
```

### Why this happens

This usually happens when you import `matplotlib` but try to access `pyplot` as an attribute without importing it explicitly, or if you have a local file named `matplotlib.py` shadowing the library.

### Fix

Import `matplotlib.pyplot` explicitly or check for file name conflicts.

#### Wrong code

```python
import matplotlib
matplotlib.pyplot.plot([1, 2, 3])
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.plot([1, 2, 3])

# OR
import matplotlib.pyplot
matplotlib.pyplot.plot([1, 2, 3])
```
