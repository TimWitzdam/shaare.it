---
title: "ValueError: SGDClassifier loss invalid"
description: "Pick a supported loss name for SGDClassifier/Regressor."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid loss for SGD

```bash
$ python -c "from sklearn.linear_model import SGDClassifier; SGDClassifier(loss='invalid').fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: The loss 'invalid' is not supported
```

### Why this happens

Only documented losses are supported, e.g., `'hinge'`, `'log_loss'`, `'modified_huber'`.

### Fix

Choose a valid loss name.

#### Wrong code

```python
from sklearn.linear_model import SGDClassifier
SGDClassifier(loss='invalid')
```

#### Fixed code

```python
from sklearn.linear_model import SGDClassifier
SGDClassifier(loss='log_loss')
```
