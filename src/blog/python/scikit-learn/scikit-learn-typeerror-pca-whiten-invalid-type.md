---
title: "TypeError: PCA whiten must be bool"
description: "Use correct boolean for PCA whiten and understand its effect."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: PCA whiten must be bool

```bash
$ python -c "from sklearn.decomposition import PCA; PCA(whiten='yes').fit([[0,0],[1,1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: whiten must be a boolean
```

### Why this happens

`whiten` expects `True` or `False`. Strings or numbers are invalid.

### Fix

Pass a boolean and understand that whitening scales components to unit variance.

#### Wrong code

```python
from sklearn.decomposition import PCA
PCA(whiten='yes')
```

#### Fixed code

```python
from sklearn.decomposition import PCA
PCA(whiten=True)
```
