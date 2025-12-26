---
title: "ValueError: 'perplexity' must be >= 2"
description: "scikit-learn TSNE perplexity lower bound error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: TSNE perplexity too small

```bash
$ python -c "from sklearn.manifold import TSNE; TSNE(perplexity=1).fit([[0],[1],[2],[3]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: perplexity must be >= 2
```

### Why this happens

Perplexity approximates neighborhood size and must be at least 2.

### Fix

Increase perplexity (e.g., 5-50).

#### Wrong code

```python
from sklearn.manifold import TSNE
TSNE(perplexity=1)
```

#### Fixed code

```python
from sklearn.manifold import TSNE
TSNE(perplexity=30)
```
