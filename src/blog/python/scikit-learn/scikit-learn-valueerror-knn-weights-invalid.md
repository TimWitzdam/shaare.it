---
title: "ValueError: 'weights' must be 'uniform' or 'distance'"
description: "scikit-learn KNN weights invalid value error and how to fix it."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: KNN weights invalid

```bash
$ python -c "from sklearn.neighbors import KNeighborsClassifier; KNeighborsClassifier(weights='avg').fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: weights must be 'uniform', 'distance', or a callable
```

### Why this happens

You passed an unsupported string for weights. Only 'uniform', 'distance', or a callable function are accepted.

### Fix

Use a valid string or provide a custom callable.

#### Wrong code

```python
from sklearn.neighbors import KNeighborsClassifier
KNeighborsClassifier(weights='avg')
```

#### Fixed code

```python
from sklearn.neighbors import KNeighborsClassifier
KNeighborsClassifier(weights='distance')

# Or custom callable
import numpy as np
KNeighborsClassifier(weights=lambda d: 1 / (d + 1e-9))
```
