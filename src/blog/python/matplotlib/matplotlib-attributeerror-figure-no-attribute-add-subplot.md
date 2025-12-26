---
title: "AttributeError: 'Figure' has no attribute 'add_subplot'"
description: "Use fig.add_subplot or plt.subplots; avoid shadowing Figure class."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## AttributeError: 'Figure' has no attribute 'add_subplot'

```bash
$ python -c "from matplotlib.figure import Figure; fig = Figure(); fig.add_subplots(111)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'Figure' object has no attribute 'add_subplots'
```

### Why this happens

You called a misspelled method or a custom class shadowed the real `Figure`.

### Fix

Use `fig.add_subplot(111)` or `plt.subplots()`.

#### Wrong code

```python
from matplotlib.figure import Figure
fig = Figure()
fig.add_subplots(111)
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
```
