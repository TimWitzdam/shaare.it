---
title: "ValueError: FeatureHasher n_features must be power of two"
description: "Pick n_features as a power of two for FeatureHasher to work efficiently."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: n_features must be power of two

```bash
$ python -c "from sklearn.feature_extraction import FeatureHasher; FeatureHasher(n_features=100).transform([[('a',1)]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: n_features must be a power of two
```

### Why this happens

Hasher implementations expect `n_features` to be a power of two.

### Fix

Use values like 64, 128, 256, etc.

#### Wrong code

```python
from sklearn.feature_extraction import FeatureHasher
FeatureHasher(n_features=100)
```

#### Fixed code

```python
from sklearn.feature_extraction import FeatureHasher
FeatureHasher(n_features=128)
```
