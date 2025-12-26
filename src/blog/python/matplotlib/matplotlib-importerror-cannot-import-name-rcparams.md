---
title: "ImportError: cannot import name 'rcParams'"
description: "Access rcParams via matplotlib.rcParams or import from matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ImportError: cannot import name 'rcParams'

```bash
$ python -c "from matplotlib import rcParams"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'rcParams' from 'matplotlib'
```

### Why this happens

`rcParams` is exposed at `matplotlib.rcParams` but not importable via `from matplotlib import rcParams` in some versions.

### Fix

Use `import matplotlib as mpl` then `mpl.rcParams`, or `import matplotlib.pyplot as plt` and configure via `plt.rcParams`.

#### Wrong code

```python
from matplotlib import rcParams
rcParams['figure.figsize'] = (6, 4)
```

#### Fixed code

```python
import matplotlib as mpl
mpl.rcParams['figure.figsize'] = (6, 4)
```
