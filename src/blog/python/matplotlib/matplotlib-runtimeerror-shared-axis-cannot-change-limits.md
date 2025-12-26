---
title: "RuntimeError: cannot change shared axis limits after plotting"
description: "Shared axes synchronize limits; changing one directly can raise errors in some contexts."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## RuntimeError: cannot change shared axis limits after plotting

```bash
$ python -c "import matplotlib.pyplot as plt; fig, (ax1, ax2) = plt.subplots(2, sharex=True); ax1.plot([1,2]); ax2.plot([3,4]); ax1.set_xlim(10, 20)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
RuntimeError: cannot change shared axis limits after plotting
```

### Why this happens

When axes share limits, changing one may conflict with autoscaling or triggers restrictions.

### Fix

Set limits before plotting or change on the shared axis group via `ax1.get_shared_x_axes().join(ax1, ax2)` appropriately.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig, (ax1, ax2) = plt.subplots(2, sharex=True)
ax1.plot([1,2])
ax2.plot([3,4])
ax1.set_xlim(10, 20)
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, (ax1, ax2) = plt.subplots(2, sharex=True)
ax1.set_xlim(0, 2)  # set before plotting or on both consistently
ax1.plot([1,2])
ax2.plot([3,4])
plt.show()
```
