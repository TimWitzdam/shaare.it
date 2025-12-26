---
title: "AttributeError: 'Axes' object has no attribute 'title'"
description: "How to correctly set titles on Matplotlib Axes objects."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## AttributeError: 'Axes' object has no attribute 'title'

```bash
$ python script.py
Traceback (most recent call last):
  ...
AttributeError: 'AxesSubplot' object has no attribute 'title'
```

### Why this happens

You are trying to set the title of a plot using `ax.title("My Title")`, but the `Axes` object uses `set_title()` for this purpose. `plt.title()` is for the pyplot interface.

### Fix

Change `ax.title()` to `ax.set_title()`.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.title("My Plot Title")
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.set_title("My Plot Title")
```
