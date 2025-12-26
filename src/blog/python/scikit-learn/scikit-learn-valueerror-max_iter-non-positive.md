---
title: "ValueError: 'max_iter' must be positive"
description: "scikit-learn error when max_iter <= 0 and how to resolve it."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: max_iter must be positive

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression(max_iter=0).fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: max_iter must be > 0
```

### Why this happens

Optimization loops require a positive number of iterations; zero or negative stops training immediately and is invalid.

### Fix

Set max_iter to a positive integer (e.g., 100, 1000).

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression(max_iter=0)
clf.fit([[0],[1]],[0,1])
```

#### Fixed code

```python
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression(max_iter=200)
clf.fit([[0],[1]],[0,1])
```
