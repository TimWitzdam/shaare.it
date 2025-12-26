---
title: "ValueError: 'learning_rate' invalid for TSNE"
description: "scikit-learn TSNE learning_rate must be > 0 or 'auto'; error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: TSNE learning_rate invalid

```bash
$ python -c "from sklearn.manifold import TSNE; TSNE(learning_rate=0).fit([[0],[1],[2],[3]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: learning_rate must be > 0 or 'auto'
```

### Why this happens

Learning rate cannot be zero.

### Fix

Use a positive float or 'auto'.

#### Wrong code

```python
from sklearn.manifold import TSNE
TSNE(learning_rate=0)
```

#### Fixed code

```python
from sklearn.manifold import TSNE
TSNE(learning_rate='auto')
```
