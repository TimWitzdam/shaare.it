---
title: "ValueError: Bad input shape for metric"
description: "Using correct shapes for metric functions (precision/recall/f1) to avoid shape errors in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: bad input shape for metric

```bash
$ python -c "from sklearn.metrics import precision_score; precision_score([[0],[1]], [[0],[1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Found input variables with inconsistent numbers of samples or shapes.
```

### Why this happens

- Passing 2D arrays or mismatched shapes.

### Fix

- Pass 1D arrays with same length.

#### Wrong code

```python
precision_score([[0],[1]], [[0],[1]])
```

#### Fixed code

```python
precision_score([0,1], [0,1])
```
