---
title: "ValueError: MLP activation invalid"
description: "Choose supported activation functions for MLPClassifier/Regressor."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid activation for MLP

```bash
$ python -c "from sklearn.neural_network import MLPClassifier; MLPClassifier(activation='invalid').fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: activation must be one of {'identity','logistic','tanh','relu'}
```

### Why this happens

Unsupported activation names cause validation errors.

### Fix

Pick a supported activation.

#### Wrong code

```python
from sklearn.neural_network import MLPClassifier
MLPClassifier(activation='invalid')
```

#### Fixed code

```python
from sklearn.neural_network import MLPClassifier
MLPClassifier(activation='relu')
```
