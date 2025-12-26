---
title: "ValueError: MLP alpha must be non-negative"
description: "Use non-negative L2 regularization alpha for MLP models to avoid errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: MLP alpha must be >= 0

```bash
$ python -c "from sklearn.neural_network import MLPClassifier; MLPClassifier(alpha=-1).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: alpha must be >= 0
```

### Why this happens

Regularization strength cannot be negative.

### Fix

Choose a small non-negative value, e.g., `1e-4`.

#### Wrong code

```python
from sklearn.neural_network import MLPClassifier
MLPClassifier(alpha=-0.1)
```

#### Fixed code

```python
from sklearn.neural_network import MLPClassifier
MLPClassifier(alpha=1e-4)
```
