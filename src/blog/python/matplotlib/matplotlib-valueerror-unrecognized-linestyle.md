---
title: "ValueError: Unrecognized linestyle"
description: "Fixing invalid linestyle arguments in Matplotlib plots."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: Unrecognized linestyle

```bash
$ python plot.py
Traceback (most recent call last):
  ...
ValueError: Unrecognized linestyle 'dashed-line'
```

### Why this happens

You provided a string for the `linestyle` (or `ls`) argument that isn't a valid Matplotlib line style code.

### Fix

Use one of the supported line style strings: `'-'`, `'--'`, `'-.'`, `':'`, or `'solid'`, `'dashed'`, `'dashdot'`, `'dotted'`.

#### Wrong code

```python
import matplotlib.pyplot as plt

plt.plot([1, 2, 3], linestyle='dashed-line')
```

#### Fixed code

```python
import matplotlib.pyplot as plt

plt.plot([1, 2, 3], linestyle='--')  # or 'dashed'
```
