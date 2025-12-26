---
title: "ValueError: AdaBoost 'learning_rate' must be positive"
description: "scikit-learn AdaBoost learning_rate must be > 0; error and fix examples."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: AdaBoost learning_rate invalid

```bash
$ python -c "from sklearn.ensemble import AdaBoostClassifier; AdaBoostClassifier(learning_rate=0).fit([[0],[1],[2],[3]],[0,1,1,0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: learning_rate must be > 0
```

### Why this happens

Zero learning rate halts updates.

### Fix

Use a positive float.

#### Wrong code

```python
from sklearn.ensemble import AdaBoostClassifier
AdaBoostClassifier(learning_rate=0)
```

#### Fixed code

```python
from sklearn.ensemble import AdaBoostClassifier
AdaBoostClassifier(learning_rate=0.5)
```
