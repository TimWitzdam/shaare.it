---
title: "ValueError: Unknown label type: 'continuous'"
description: "Classification metrics or estimators used with continuous targets and how to fix it."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: Unknown label type 'continuous'

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; import numpy as np; LogisticRegression().fit([[0],[1],[2]], np.array([0.1,0.2,0.3]))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Unknown label type: 'continuous'
```

### Why this happens

- Using classification with continuous targets.

### Fix

- Use regression estimators or discretize labels.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
LogisticRegression().fit([[0],[1],[2]], [0.1, 0.2, 0.3])
```

#### Fixed code

```python
from sklearn.linear_model import LinearRegression
LinearRegression().fit([[0],[1],[2]], [0.1, 0.2, 0.3])
```
