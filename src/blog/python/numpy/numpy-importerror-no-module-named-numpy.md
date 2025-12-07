---
title: "ImportError: No module named numpy"
description: "Why Python can't find NumPy and how to install/configure it."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ImportError: No module named numpy

```bash
$ python -c "import numpy"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ModuleNotFoundError: No module named 'numpy'
```

### Why this happens

NumPy isn't installed in the active Python environment, or you're using a different interpreter/virtualenv than expected.

### Fix

Install NumPy in the active environment (pip, conda) or activate the correct virtual environment/interpreter.

#### Wrong code / state

```bash
# No numpy installed in environment
python -c "import numpy"
```

#### Fixed (install)

```bash
pip install numpy
# or with conda
conda install numpy
```
