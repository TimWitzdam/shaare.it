---
title: "ValueError: roc_auc_score for multiclass needs 'ovr' or 'ovo'"
description: "Set multi_class parameter and valid labels for multiclass ROC AUC."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: multiclass roc_auc needs setting

```bash
$ python -c "from sklearn.metrics import roc_auc_score; roc_auc_score([0,1,2], [0.1,0.2,0.7])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: multi_class must be in {'ovr','ovo'} for multiclass ROC AUC
```

### Why this happens

`roc_auc_score` needs `multi_class` specified and probability scores per class for multiclass problems.

### Fix

Provide `multi_class='ovr'` or `'ovo'` and proper probability arrays.

#### Wrong code

```python
from sklearn.metrics import roc_auc_score
roc_auc_score([0,1,2], [0.1,0.2,0.7])
```

#### Fixed code

```python
from sklearn.metrics import roc_auc_score
# Example with one-vs-rest probabilities
y_true = [0,1,2]
y_score = [[0.8,0.1,0.1],[0.2,0.7,0.1],[0.1,0.2,0.7]]
roc_auc_score(y_true, y_score, multi_class='ovr')
```
