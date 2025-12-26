---
title: "ValueError: You are trying to use label_binarize with binary labels"
description: "Using label_binarize appropriately for multiclass data or choosing suitable methods for binary data in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: label_binarize with binary labels

```bash
$ python -c "from sklearn.preprocessing import label_binarize; label_binarize([0,1,0],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: You are trying to use label_binarize with binary labels. This function is reserved for multi-class problems.
```

### Why this happens

- `label_binarize` used with binary labels.

### Fix

- Use directly binary labels or appropriate encoding methods.

#### Wrong code

```python
from sklearn.preprocessing import label_binarize
label_binarize([0,1,0], [0,1])
```

#### Fixed code

```python
# No binarization needed for binary labels; use them directly
from sklearn.metrics import roc_auc_score
roc_auc_score([0,1,0], [0.1,0.8,0.3])
```
