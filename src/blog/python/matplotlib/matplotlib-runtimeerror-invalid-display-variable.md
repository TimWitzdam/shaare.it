---
title: "RuntimeError: Invalid DISPLAY variable"
description: "Troubleshooting display errors when running Matplotlib on servers."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## RuntimeError: Invalid DISPLAY variable

```bash
$ python script.py
Traceback (most recent call last):
  ...
RuntimeError: Invalid DISPLAY variable
```

### Why this happens

Matplotlib is trying to connect to a graphical display server (X11) because the default backend requires a GUI, but the `DISPLAY` environment variable is invalid or not set correctly.

### Fix

Switch to a non-interactive backend like `Agg` if you don't need a window to pop up (e.g., saving to file), or ensure X11 forwarding is configured.

#### Wrong code

```python
# Running on a server without X11
import matplotlib.pyplot as plt
plt.plot([1, 2])
plt.show()
```

#### Fixed code

```python
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
plt.plot([1, 2])
plt.savefig('output.png')
```
