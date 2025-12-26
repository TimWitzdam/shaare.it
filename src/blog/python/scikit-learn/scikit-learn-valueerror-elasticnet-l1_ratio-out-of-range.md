---
title: "ValueError: ElasticNet l1_ratio out of range"
description: "Ensure l1_ratio is between 0 and 1 for ElasticNet models."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: l1_ratio out of range

```bash
$ python -c "from sklearn.linear_model import ElasticNet; ElasticNet(l1_ratio=1.5).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: l1_ratio must be in [0, 1]
```

### Why this happens

`l1_ratio` mixes L1 and L2 penalties. Values outside `[0,1]` are invalid.

### Fix

Use a value between 0 and 1.

#### Wrong code

```python
from sklearn.linear_model import ElasticNet
ElasticNet(l1_ratio=-0.2)
```

#### Fixed code

```python
from sklearn.linear_model import ElasticNet
ElasticNet(l1_ratio=0.5)
```
