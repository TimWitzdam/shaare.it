---
title: "ImportError: cannot import name 'cm'"
description: "Importing colormap utilities from the correct module."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ImportError: cannot import name 'cm'

```bash
$ python -c "from matplotlib import cm"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'cm' from 'matplotlib'
```

### Why this happens

`cm` is available under `matplotlib.cm` (a submodule), not the top-level.

### Fix

Import the submodule directly.

#### Wrong code

```python
from matplotlib import cm
cmap = cm.get_cmap('viridis')
```

#### Fixed code

```python
import matplotlib.cm as cm
cmap = cm.get_cmap('viridis')
```
