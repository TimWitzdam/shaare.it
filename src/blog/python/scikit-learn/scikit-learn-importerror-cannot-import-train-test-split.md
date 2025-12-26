---
title: "ImportError: cannot import name 'train_test_split' from sklearn.model_selection"
description: "Why this import fails, common causes, and how to fix it in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ImportError: cannot import name 'train_test_split'

```bash
$ python -c "from sklearn.model_selection import train_test_split"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'train_test_split' from 'sklearn.model_selection' (unknown location)
```

### Why this happens

- scikit-learn is not installed or the environment is wrong.
- You shadowed the package with a local file or folder named `sklearn/`.
- Very old scikit-learn version missing `model_selection` module.

### Fix

- Install/upgrade scikit-learn and ensure you’re in the right environment.
- Remove/rename local `sklearn.py` or `sklearn/` directories.
- Use the correct import path.

#### Wrong code

```python
# local file named sklearn.py in project directory
from sklearn.model_selection import train_test_split
X = [1,2,3]
y = [0,1,0]
X_train, X_test, y_train, y_test = train_test_split(X, y)
```

#### Fixed code

```python
# Ensure scikit-learn is installed and not shadowed
from sklearn.model_selection import train_test_split
X = [[1],[2],[3]]
y = [0,1,0]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)
print(len(X_train), len(X_test))
```
