---
title: "TypeError: GradientBoosting learning_rate must be positive"
description: "Set a positive learning_rate for GradientBoosting models and avoid 0."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: learning_rate must be > 0

```bash
$ python -c "from sklearn.ensemble import GradientBoostingClassifier; GradientBoostingClassifier(learning_rate=0).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: learning_rate must be > 0
```

### Why this happens

Zero or negative learning rates are invalid.

### Fix

Use a small positive value, e.g., `0.1`.

#### Wrong code

```python
from sklearn.ensemble import GradientBoostingClassifier
GradientBoostingClassifier(learning_rate=0)
```

#### Fixed code

```python
from sklearn.ensemble import GradientBoostingClassifier
GradientBoostingClassifier(learning_rate=0.1)
```
