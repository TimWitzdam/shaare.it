---
title: "ValueError: MLP hidden_layer_sizes invalid"
description: "Provide a tuple of positive integers for MLP hidden_layer_sizes."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid hidden_layer_sizes

```bash
$ python -c "from sklearn.neural_network import MLPClassifier; MLPClassifier(hidden_layer_sizes=0).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: hidden_layer_sizes must be a tuple of positive integers
```

### Why this happens

Non-tuple or non-positive integers are invalid.

### Fix

Use, for example, `(100,)` or `(64,32)`.

#### Wrong code

```python
from sklearn.neural_network import MLPClassifier
MLPClassifier(hidden_layer_sizes=0)
```

#### Fixed code

```python
from sklearn.neural_network import MLPClassifier
MLPClassifier(hidden_layer_sizes=(100,))
```
