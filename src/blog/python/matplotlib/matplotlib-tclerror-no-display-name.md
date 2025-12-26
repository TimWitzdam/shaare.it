---
title: "TclError: no display name and no $DISPLAY environment variable"
description: "Fixing TclError when running Matplotlib in headless environments."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## TclError: no display name and no $DISPLAY environment variable

```bash
$ python script.py
Traceback (most recent call last):
  ...
_tkinter.TclError: no display name and no $DISPLAY environment variable
```

### Why this happens

This error occurs when you try to generate plots using a GUI backend (like TkAgg) on a server or a headless environment (like a Docker container or SSH session) that doesn't have a display attached.

### Fix

Configure Matplotlib to use a non-interactive backend like `Agg` before importing pyplot, or set the backend in your matplotlibrc.

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.plot([1, 2, 3])
plt.show()
```

#### Fixed code

```python
import matplotlib
matplotlib.use('Agg') # Set backend before importing pyplot
import matplotlib.pyplot as plt

plt.plot([1, 2, 3])
plt.savefig('plot.png') # Save instead of show
```
