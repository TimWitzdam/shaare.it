---
title: "AttributeError: 'Axes' object has no attribute 'ylabel'"
description: "Fixing the AttributeError when setting y-axis labels on Axes objects."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## AttributeError: 'Axes' object has no attribute 'ylabel'

```bash
$ python script.py
Traceback (most recent call last):
  ...
AttributeError: 'AxesSubplot' object has no attribute 'ylabel'
```

### Why this happens

Similar to `xlabel`, the `ylabel` method exists on the `plt` interface but not on the `Axes` object. The object-oriented equivalent is `set_ylabel`.

### Fix

Use `ax.set_ylabel()` instead of `ax.ylabel()`.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.ylabel("Amplitude")
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.set_ylabel("Amplitude")
```
