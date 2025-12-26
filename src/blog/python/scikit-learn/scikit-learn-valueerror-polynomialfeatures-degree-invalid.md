---
title: "ValueError: PolynomialFeatures degree invalid"
description: "Set a positive integer degree for PolynomialFeatures and avoid huge expansions."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid degree for PolynomialFeatures

```bash
$ python -c "from sklearn.preprocessing import PolynomialFeatures; PolynomialFeatures(degree=0).fit_transform([[1],[2]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: degree must be a positive integer
```

### Why this happens

Degree must be a positive integer. Zero or negative values are invalid.

### Fix

Use `degree>=1`, and consider `interaction_only=True` or limiting degree to avoid combinatorial explosion.

#### Wrong code

```python
from sklearn.preprocessing import PolynomialFeatures
PolynomialFeatures(degree=-2)
```

#### Fixed code

```python
from sklearn.preprocessing import PolynomialFeatures
PolynomialFeatures(degree=2)
```
