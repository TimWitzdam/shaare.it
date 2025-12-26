---
title: "ValueError: MinMaxScaler feature_range invalid"
description: "Fix reversed or invalid feature_range tuples in MinMaxScaler."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid feature_range

```bash
$ python -c "from sklearn.preprocessing import MinMaxScaler; MinMaxScaler(feature_range=(1,0)).fit([[0],[1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: feature_range must be (min, max) with min < max
```

### Why this happens

Using a non-increasing range (e.g., `(1, 0)`) or invalid types causes errors.

### Fix

Provide a valid increasing tuple like `(0, 1)`.

#### Wrong code

```python
from sklearn.preprocessing import MinMaxScaler
MinMaxScaler(feature_range=(1, 0)).fit([[0],[1]])
```

#### Fixed code

```python
from sklearn.preprocessing import MinMaxScaler
MinMaxScaler(feature_range=(0, 1)).fit([[0],[1]])
```
