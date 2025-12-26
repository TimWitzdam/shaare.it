---
title: "ValueError: SVR epsilon must be >= 0"
description: "How to fix invalid epsilon values for Support Vector Regression."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: epsilon must be non-negative

```bash
$ python -c "from sklearn.svm import SVR; SVR(epsilon=-0.5).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: epsilon must be >= 0
```

### Why this happens

`epsilon` defines the margin of tolerance in the loss function. Negative values violate the optimization constraints.

### Fix

Use `epsilon >= 0`, commonly a small value like `0.1`.

#### Wrong code

```python
from sklearn.svm import SVR
reg = SVR(epsilon=-1)
reg.fit([[0],[1]], [0,1])
```

#### Fixed code

```python
from sklearn.svm import SVR
reg = SVR(epsilon=0.1)
reg.fit([[0],[1]], [0,1])
```
