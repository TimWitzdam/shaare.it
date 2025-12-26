---
title: "TypeError: unsupported operand type(s) for +: 'Axes' and 'Axes'"
description: "You can't add Axes together; use subplots or sharex/sharey."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## TypeError: unsupported operand type(s) for +: 'Axes' and 'Axes'

```bash
$ python -c "import matplotlib.pyplot as plt; fig, ax1 = plt.subplots(); fig, ax2 = plt.subplots(); ax1 + ax2"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: unsupported operand type(s) for +: 'Axes' and 'Axes'
```

### Why this happens

`Axes` objects are not numbers; operator `+` is undefined.

### Fix

Create subplots in a single figure or manage axes in a list.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig, ax1 = plt.subplots()
fig, ax2 = plt.subplots()
ax = ax1 + ax2
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, (ax1, ax2) = plt.subplots(1, 2)
```
