---
title: "UserWarning: FixedFormatter should only be used together with FixedLocator"
description: "Pair FixedFormatter with FixedLocator to avoid misaligned labels."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## UserWarning: FixedFormatter should only be used together with FixedLocator

```bash
$ python -c "import matplotlib.pyplot as plt; ax = plt.axes(); ax.set_xticklabels(['a','b','c'])"
/usr/lib/.../matplotlib/axis.py:...: UserWarning: FixedFormatter should only be used together with FixedLocator
```

### Why this happens

You set tick labels without fixing tick locations.

### Fix

Use `FixedLocator` with `FixedFormatter` or set ticks via `set_xticks` and labels via `set_xticklabels` paired appropriately.

#### Wrong code

```python
import matplotlib.pyplot as plt
ax = plt.axes()
ax.set_xticklabels(['a','b','c'])
```

#### Fixed code

```python
import matplotlib.pyplot as plt
import matplotlib.ticker as mticker
ax = plt.axes()
ax.xaxis.set_major_locator(mticker.FixedLocator([0,1,2]))
ax.xaxis.set_major_formatter(mticker.FixedFormatter(['a','b','c']))
```
