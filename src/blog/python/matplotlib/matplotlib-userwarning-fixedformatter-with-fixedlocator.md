---
title: "UserWarning: FixedFormatter should only be used together with FixedLocator"
description: "Use FixedFormatter with FixedLocator to avoid mismatched tick positions."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## UserWarning: FixedFormatter should only be used together with FixedLocator

```bash
$ python -c "import matplotlib.pyplot as plt; fig, ax = plt.subplots(); ax.set_xticklabels(['A','B','C'])"
/usr/lib/python3/dist-packages/matplotlib/axes/_base.py:...: UserWarning: FixedFormatter should only be used together with FixedLocator
  ...
```

### Why this happens

You set tick labels without fixing tick positions; Matplotlib warns that labels may not align with ticks.

### Fix

Use `FixedLocator` or set ticks explicitly before labels.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.set_xticklabels(['A','B','C'])
```

#### Fixed code

```python
import matplotlib.pyplot as plt
from matplotlib.ticker import FixedLocator
fig, ax = plt.subplots()
ax.set_xticks([0,1,2])
ax.xaxis.set_major_locator(FixedLocator([0,1,2]))
ax.set_xticklabels(['A','B','C'])
plt.show()
```
