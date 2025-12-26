---
title: "RuntimeError: Failed to process string with TeX"
description: "Using usetex requires LaTeX and compatible fonts installed."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## RuntimeError: Failed to process string with TeX

```bash
$ python -c "import matplotlib as mpl; mpl.rcParams['text.usetex']=True; import matplotlib.pyplot as plt; plt.title(r'$x^2$'); plt.show()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
RuntimeError: Failed to process string with TeX
```

### Why this happens

LaTeX or required packages (like `latex`, `dvipng`) are missing.

### Fix

Install LaTeX toolchain or disable `usetex`.

#### Wrong code

```python
import matplotlib as mpl
mpl.rcParams['text.usetex'] = True
import matplotlib.pyplot as plt
plt.title(r'$x^2$')
plt.show()
```

#### Fixed code

```python
# Option A: install LaTeX (platform-specific)
# Option B: disable usetex
import matplotlib as mpl
mpl.rcParams['text.usetex'] = False
import matplotlib.pyplot as plt
plt.title(r'$x^2$')
plt.show()
```
