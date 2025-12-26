---
title: "FileNotFoundError: [Errno 2] No such file or directory"
description: "Resolving FileNotFoundError when saving Matplotlib plots."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## FileNotFoundError: [Errno 2] No such file or directory

```bash
$ python script.py
Traceback (most recent call last):
  ...
FileNotFoundError: [Errno 2] No such file or directory: 'plots/myplot.png'
```

### Why this happens

You are trying to save a plot using `plt.savefig()` to a directory that does not exist. Matplotlib does not automatically create directories.

### Fix

Create the directory using `os.makedirs()` before saving the file.

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.plot([1, 2])
# Fails if 'plots' folder doesn't exist
plt.savefig('plots/myplot.png')
```

#### Fixed code

```python
import matplotlib.pyplot as plt
import os

os.makedirs('plots', exist_ok=True)
plt.plot([1, 2])
plt.savefig('plots/myplot.png')
```
