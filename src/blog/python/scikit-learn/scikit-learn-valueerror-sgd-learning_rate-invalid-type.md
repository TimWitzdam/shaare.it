---
title: "ValueError: 'learning_rate' invalid for SGD"
description: "scikit-learn SGDClassifier/Regressor learning_rate must be one of the supported strings."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: SGD learning_rate invalid

```bash
$ python -c "from sklearn.linear_model import SGDClassifier; SGDClassifier(learning_rate='fast').fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: learning_rate must be 'constant','optimal','invscaling','adaptive'
```

### Why this happens

Unsupported learning rate schedule.

### Fix

Use one of the valid options.

#### Wrong code

```python
from sklearn.linear_model import SGDClassifier
SGDClassifier(learning_rate='fast')
```

#### Fixed code

```python
from sklearn.linear_model import SGDClassifier
SGDClassifier(learning_rate='adaptive', eta0=0.01)
```
