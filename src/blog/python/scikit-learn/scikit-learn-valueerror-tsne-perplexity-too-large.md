---
title: "ValueError: 'perplexity' must be less than n_samples"
description: "scikit-learn TSNE perplexity upper bound error and how to fix it."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: TSNE perplexity too large

```bash
$ python -c "from sklearn.manifold import TSNE; TSNE(perplexity=50).fit([[0],[1],[2],[3]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: perplexity must be less than n_samples
```

### Why this happens

Perplexity approximates the number of nearest neighbors considered. It must be strictly smaller than the number of samples.

### Fix

Reduce perplexity below the sample count or increase dataset size.

#### Wrong code

```python
from sklearn.manifold import TSNE
TSNE(perplexity=50).fit([[0],[1],[2],[3]])
```

#### Fixed code

```python
from sklearn.manifold import TSNE
TSNE(perplexity=3).fit([[0],[1],[2],[3]])
```
