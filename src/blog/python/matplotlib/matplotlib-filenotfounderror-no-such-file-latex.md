---
title: "FileNotFoundError: [Errno 2] No such file or directory: 'latex'"
description: "Fixing the missing LaTeX executable error when using usetex=True."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## FileNotFoundError: [Errno 2] No such file or directory: 'latex'

```bash
$ python plot.py
Traceback (most recent call last):
  ...
FileNotFoundError: [Errno 2] No such file or directory: 'latex'
```

### Why this happens

You enabled `usetex=True` in Matplotlib settings, but a LaTeX distribution (like TeX Live or MiKTeX) is not installed or not in your system's PATH.

### Fix

Install a LaTeX distribution or disable `usetex`.

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.rcParams['text.usetex'] = True  # Fails if latex is not installed

plt.plot([1, 2, 3])
plt.show()
```

#### Fixed code

```python
import matplotlib.pyplot as plt
# Option 1: Disable usetex (default)
plt.rcParams['text.usetex'] = False

# Option 2: Install LaTeX on your system (e.g., sudo apt-get install texlive-full)

plt.plot([1, 2, 3])
plt.show()
```
