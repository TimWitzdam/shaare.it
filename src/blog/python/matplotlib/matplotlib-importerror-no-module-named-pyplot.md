---
title: "ImportError: No module named 'pyplot'"
description: "Why matplotlib.pyplot cannot be imported and how to fix it."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ImportError: No module named 'pyplot'

```bash
$ python -c "from matplotlib import pyplot as plt"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: No module named 'pyplot'
```

### Why this happens

Matplotlib is not installed in the current environment, or you're shadowing the `matplotlib` package with a local file or folder named `matplotlib`.

### Fix

Install Matplotlib in the active environment and ensure there is no local `matplotlib/` directory or `matplotlib.py` file.

#### Wrong code

```python
from matplotlib import pyplot as plt
plt.plot([1, 2, 3])
```

#### Fixed code

```python
# Install first: pip install matplotlib
import matplotlib.pyplot as plt
plt.plot([1, 2, 3])
plt.show()
```
