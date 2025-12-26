---
title: "ValueError: MLP solver invalid"
description: "Select supported solvers for MLP models: 'lbfgs', 'sgd', or 'adam'."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid solver for MLP

```bash
$ python -c "from sklearn.neural_network import MLPClassifier; MLPClassifier(solver='invalid').fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: solver must be one of {'lbfgs','sgd','adam'}
```

### Why this happens

Unsupported solvers cause errors.

### Fix

Use `'adam'`, `'sgd'`, or `'lbfgs'`.

#### Wrong code

```python
from sklearn.neural_network import MLPClassifier
MLPClassifier(solver='invalid')
```

#### Fixed code

```python
from sklearn.neural_network import MLPClassifier
MLPClassifier(solver='adam')
```
