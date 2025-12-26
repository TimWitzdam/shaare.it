---
title: "ValueError: Lars n_nonzero_coefs out of range"
description: "Ensure valid n_nonzero_coefs for LARS-based algorithms relative to features."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: n_nonzero_coefs out of range

```bash
$ python -c "from sklearn.linear_model import Lars; Lars(n_nonzero_coefs=0).fit([[0,0],[1,1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: n_nonzero_coefs must be in (0, n_features]
```

### Why this happens

Setting zero or too large numbers is invalid.

### Fix

Pick `1..n_features`.

#### Wrong code

```python
from sklearn.linear_model import Lars
Lars(n_nonzero_coefs=0)
```

#### Fixed code

```python
from sklearn.linear_model import Lars
Lars(n_nonzero_coefs=1)
```
