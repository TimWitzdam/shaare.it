---
title: "ImportError: cannot import name 'colors'"
description: "Using matplotlib.colors instead of top-level imports."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ImportError: cannot import name 'colors'

```bash
$ python -c "from matplotlib import colors"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'colors' from 'matplotlib'
```

### Why this happens

`colors` is a submodule: `matplotlib.colors`.

### Fix

Import the correct submodule.

#### Wrong code

```python
from matplotlib import colors
colors.to_rgb('red')
```

#### Fixed code

```python
import matplotlib.colors as colors
colors.to_rgb('red')
```
