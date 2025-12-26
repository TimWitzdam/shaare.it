---
title: "ValueError: precision_recall_fscore_support average invalid"
description: "Use supported average options for binary/multiclass/multilabel metrics."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid average argument

```bash
$ python -c "from sklearn.metrics import precision_recall_fscore_support; precision_recall_fscore_support([0,1],[0,1], average='invalid')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: average must be one of {'binary','micro','macro','weighted','samples'}
```

### Why this happens

Passing unsupported `average` values causes errors.

### Fix

Choose a valid value matching your problem type.

#### Wrong code

```python
from sklearn.metrics import precision_recall_fscore_support
precision_recall_fscore_support([0,1],[0,1], average='invalid')
```

#### Fixed code

```python
from sklearn.metrics import precision_recall_fscore_support
precision_recall_fscore_support([0,1],[0,1], average='binary')
```
