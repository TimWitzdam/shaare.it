---
title: "ImportError: cannot import name 'Figure' from matplotlib"
description: "Importing Figure directly can fail; use proper submodules."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ImportError: cannot import name 'Figure' from matplotlib

```bash
$ python -c "from matplotlib import Figure"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'Figure' from 'matplotlib'
```

### Why this happens

`Figure` lives in `matplotlib.figure`. Importing from the top-level `matplotlib` module fails.

### Fix

Import from the correct submodule or use `pyplot.figure()`.

#### Wrong code

```python
from matplotlib import Figure
fig = Figure()
```

#### Fixed code

```python
from matplotlib.figure import Figure
fig = Figure()
# Or
import matplotlib.pyplot as plt
fig = plt.figure()
```
