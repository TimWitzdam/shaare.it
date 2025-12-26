---
title: "ValueError: Nystroem n_components out of range"
description: "Set n_components <= n_samples for Nystroem kernel approximation."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: Nystroem n_components invalid

```bash
$ python -c "from sklearn.kernel_approximation import Nystroem; Nystroem(n_components=10).fit([[0],[1],[2]], [0,1,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: n_components must be <= n_samples
```

### Why this happens

You can’t sample more components than samples.

### Fix

Use `n_components <= n_samples` or increase data size.

#### Wrong code

```python
from sklearn.kernel_approximation import Nystroem
Nystroem(n_components=10).fit([[0],[1],[2]], [0,1,1])
```

#### Fixed code

```python
from sklearn.kernel_approximation import Nystroem
Nystroem(n_components=3).fit([[0],[1],[2],[3],[4]], [0,1,1,0,1])
```
