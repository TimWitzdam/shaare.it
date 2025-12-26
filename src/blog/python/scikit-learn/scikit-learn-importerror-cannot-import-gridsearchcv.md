---
title: "ImportError: cannot import name 'GridSearchCV' from sklearn.model_selection"
description: "Grid search import issues in scikit-learn and how to resolve them."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ImportError: cannot import name 'GridSearchCV'

```bash
$ python -c "from sklearn.model_selection import GridSearchCV"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'GridSearchCV' from 'sklearn.model_selection'
```

### Why this happens

- Outdated scikit-learn version.
- Local shadowing by `sklearn.py` or `sklearn/` directory.
- Using `sklearn` wheels incompatible with your Python.

### Fix

- Upgrade scikit-learn and verify Python version compatibility.
- Remove shadowing files.
- Use correct import.

#### Wrong code

```python
from sklearn.model_selection import GridSearchCV
GridSearchCV # fails to import
```

#### Fixed code

```python
from sklearn.model_selection import GridSearchCV
from sklearn.svm import SVC
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
params = {"C": [0.1, 1, 10]}
clf = GridSearchCV(SVC(), params, cv=3)
clf.fit(X, y)
print(clf.best_params_)
```
