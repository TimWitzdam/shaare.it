---
title: "ValueError: xlims must be increasing"
description: "Axis limits must be set with min < max; reversed bounds cause errors or warnings."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: xlims must be increasing

```bash
$ python -c "import matplotlib.pyplot as plt; fig, ax = plt.subplots(); ax.set_xlim(10, 0)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: xlims must be increasing
```

### Why this happens

Some scales/backends require increasing limits; reversed order isn't permitted for certain projections.

### Fix

Set limits with lower < upper, or invert using `ax.invert_xaxis()`.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.set_xlim(10, 0)
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.set_xlim(0, 10)
# Or to reverse direction explicitly:
ax.invert_xaxis()
plt.show()
```
