---
title: "ValueError: MLP max_iter must be positive"
description: "Set a positive max_iter for MLP models; avoid 0 to allow convergence."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: MLP max_iter must be > 0

```bash
$ python -c "from sklearn.neural_network import MLPClassifier; MLPClassifier(max_iter=0).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: max_iter must be an integer > 0
```

### Why this happens

Iterations must be positive.

### Fix

Use a positive integer like `200`.

#### Wrong code

```python
from sklearn.neural_network import MLPClassifier
MLPClassifier(max_iter=0)
```

#### Fixed code

```python
from sklearn.neural_network import MLPClassifier
MLPClassifier(max_iter=200)
```
