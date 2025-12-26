---
title: "ImportError: cannot import name 'SVC' from sklearn.svm"
description: "Fixing SVC import failures in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ImportError: cannot import name 'SVC'

```bash
$ python -c "from sklearn.svm import SVC"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'SVC' from 'sklearn.svm'
```

### Why this happens

- Old or corrupted installation, or shadowing.

### Fix

- Upgrade scikit-learn, ensure clean environment.

#### Wrong code

```python
from sklearn.svm import SVC
clf = SVC
clf.fit([[0,1],[1,0]], [0,1])
```

#### Fixed code

```python
from sklearn.svm import SVC
clf = SVC(kernel="rbf", C=1.0)
clf.fit([[0,1],[1,0],[0.5,0.5]], [0,1,0])
print(clf.predict([[0.2,0.8]]))
```
