---
title: "ModuleNotFoundError: No module named 'sklearn'"
description: "Why Python cannot find scikit-learn and how to fix the environment."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ModuleNotFoundError: No module named 'sklearn'

```bash
$ python -c "import sklearn"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ModuleNotFoundError: No module named 'sklearn'
```

### Why this happens

- scikit-learn is not installed in the active environment.
- You're using a different Python interpreter than the one with scikit-learn.

### Fix

- Install scikit-learn in the current environment and verify which Python is used.

#### Wrong code

```python
import sklearn
# Attempt to use sklearn without installation
```

#### Fixed code

```python
# After installing: pip install -U scikit-learn
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
print(len(X), len(y))
```
