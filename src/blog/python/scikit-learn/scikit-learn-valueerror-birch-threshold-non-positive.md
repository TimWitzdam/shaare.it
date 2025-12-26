---
title: "ValueError: Birch threshold must be positive"
description: "Set a positive threshold for Birch clustering to control subcluster size."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: Birch threshold must be > 0

```bash
$ python -c "from sklearn.cluster import Birch; Birch(threshold=0).fit([[0,0],[1,1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: threshold must be > 0
```

### Why this happens

`threshold` cannot be zero or negative.

### Fix

Use a small positive value like `0.5`.

#### Wrong code

```python
from sklearn.cluster import Birch
Birch(threshold=0)
```

#### Fixed code

```python
from sklearn.cluster import Birch
Birch(threshold=0.5)
```
