---
title: "ModuleNotFoundError: No module named 'matplotlib'"
description: "How to fix the missing matplotlib module error in Python."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ModuleNotFoundError: No module named 'matplotlib'

```bash
$ python script.py
Traceback (most recent call last):
  File "script.py", line 1, in <module>
    import matplotlib.pyplot as plt
ModuleNotFoundError: No module named 'matplotlib'
```

### Why this happens

This error occurs because the `matplotlib` library is not installed in your current Python environment. It might be installed in a different environment, or not installed at all.

### Fix

Install `matplotlib` using pip or conda in the environment you are running your script in.

#### Wrong code

```python
import matplotlib.pyplot as plt
# Fails if matplotlib is not installed
```

#### Fixed code

```bash
# Run this in your terminal
pip install matplotlib
```

```python
# Then run your script
import matplotlib.pyplot as plt
```
