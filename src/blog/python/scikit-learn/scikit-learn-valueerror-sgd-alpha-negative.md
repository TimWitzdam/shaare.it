---
title: "ValueError: SGD alpha must be non-negative"
description: "Use non-negative regularization strength for SGD models."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: alpha must be >= 0 for SGD

```bash
$ python -c "from sklearn.linear_model import SGDClassifier; SGDClassifier(alpha=-1).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: alpha must be >= 0
```

### Why this happens

Negative regularization is invalid.

### Fix

Set `alpha` to a small positive value, e.g., `1e-4`.

#### Wrong code

```python
from sklearn.linear_model import SGDClassifier
SGDClassifier(alpha=-0.3)
```

#### Fixed code

```python
from sklearn.linear_model import SGDClassifier
SGDClassifier(alpha=1e-4)
```
