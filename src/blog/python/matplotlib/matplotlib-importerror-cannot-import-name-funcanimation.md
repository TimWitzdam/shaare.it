---
title: "ImportError: cannot import name 'FuncAnimation'"
description: "Importing animation utilities from the right module."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ImportError: cannot import name 'FuncAnimation'

```bash
$ python -c "from matplotlib import FuncAnimation"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'FuncAnimation' from 'matplotlib'
```

### Why this happens

`FuncAnimation` is in `matplotlib.animation`, not at the top level.

### Fix

Import from the correct submodule.

#### Wrong code

```python
from matplotlib import FuncAnimation
anim = FuncAnimation(fig, update, frames=100)
```

#### Fixed code

```python
from matplotlib.animation import FuncAnimation
anim = FuncAnimation(fig, update, frames=100)
```
