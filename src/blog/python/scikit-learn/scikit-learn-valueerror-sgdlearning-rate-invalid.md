---
title: "ValueError: SGD learning_rate invalid"
description: "Select a supported learning_rate schedule for SGD models."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid learning_rate for SGD

```bash
$ python -c "from sklearn.linear_model import SGDClassifier; SGDClassifier(learning_rate='invalid').fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: learning_rate must be one of {'constant', 'optimal', 'invscaling', 'adaptive'}
```

### Why this happens

Unsupported schedules cause validation errors.

### Fix

Use one of the supported schedule names.

#### Wrong code

```python
from sklearn.linear_model import SGDClassifier
SGDClassifier(learning_rate='invalid')
```

#### Fixed code

```python
from sklearn.linear_model import SGDClassifier
SGDClassifier(learning_rate='optimal')
```
