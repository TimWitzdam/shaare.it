---
title: "ImportError: cannot import name 'LogisticRegression' from sklearn.linear_model"
description: "LogisticRegression import issues and fixes in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ImportError: cannot import name 'LogisticRegression'

```bash
$ python -c "from sklearn.linear_model import LogisticRegression"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'LogisticRegression' from 'sklearn.linear_model'
```

### Why this happens

- Incompatible install or shadowing.

### Fix

- Upgrade scikit-learn and clean environment.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression
clf.fit([[0,1],[1,0]], [0,1])
```

#### Fixed code

```python
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression(max_iter=1000)
X = [[0,1],[1,0],[0.4,0.6]]
y = [0,1,0]
clf.fit(X, y)
print(clf.predict([[0.2,0.8]]))
```
