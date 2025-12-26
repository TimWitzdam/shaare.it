---
title: "RuntimeError: Latex was not able to process the following string"
description: "Troubleshooting LaTeX processing errors in Matplotlib figures."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## RuntimeError: Latex was not able to process the following string

```bash
$ python plot.py
Traceback (most recent call last):
  ...
RuntimeError: Latex was not able to process the following string:
b'$E=mc^2'
```

### Why this happens

This error occurs when you have enabled LaTeX rendering (e.g., `plt.rc('text', usetex=True)`) but the string contains invalid LaTeX syntax or missing packages.

### Fix

Ensure your LaTeX string is valid. Escape special characters like `_` or `%` if they are not part of a command, or use raw strings (`r'...'`) to avoid Python escaping issues.

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.rc('text', usetex=True)

plt.title('Efficiency %') # % is a comment in LaTeX
plt.show()
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.rc('text', usetex=True)

plt.title(r'Efficiency \%') # Escape the %
plt.show()
```
