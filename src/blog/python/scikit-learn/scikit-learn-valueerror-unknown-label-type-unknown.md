---
title: "ValueError: Unknown label type: 'unknown'"
description: "Diagnosing label type errors and using appropriate estimators or encodings in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: unknown label type

```bash
$ python -c "from sklearn.metrics import accuracy_score; accuracy_score(['a','b'], ['a','b'])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Unknown label type: 'unknown'
```

### Why this happens

- Labels not in expected format (e.g., strings with unsupported estimator/metric).

### Fix

- Encode labels or pick suitable metrics/estimators.

#### Wrong code

```python
accuracy_score(['a','b'], ['a','b'])
```

#### Fixed code

```python
from sklearn.preprocessing import LabelEncoder
import numpy as np
le = LabelEncoder()
y_true = le.fit_transform(np.array(['a','b']))
y_pred = le.transform(np.array(['a','b']))
from sklearn.metrics import accuracy_score
print(accuracy_score(y_true, y_pred))
```
