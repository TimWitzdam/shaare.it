---
title: "ValueError: TSNE perplexity out of range"
description: "Choose valid perplexity values relative to sample size for TSNE."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: TSNE perplexity out of range

```bash
$ python -c "from sklearn.manifold import TSNE; TSNE(perplexity=0).fit_transform([[0],[1],[2],[3]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: perplexity must be in (0, n_samples - 1)
```

### Why this happens

`perplexity` must be positive and less than `n_samples-1`. Extremely high values relative to sample size are invalid.

### Fix

Pick a value like 5–50, ensuring `perplexity < n_samples`.

#### Wrong code

```python
from sklearn.manifold import TSNE
TSNE(perplexity=100, n_iter=250).fit_transform([[0],[1],[2]])
```

#### Fixed code

```python
from sklearn.manifold import TSNE
TSNE(perplexity=5, n_iter=250).fit_transform([[0],[1],[2],[3],[4],[5],[6],[7],[8],[9]])
```
