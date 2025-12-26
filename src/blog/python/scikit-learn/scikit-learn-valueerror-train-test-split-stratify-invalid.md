---
title: "ValueError: 'stratify' cannot be None or invalid in train_test_split"
description: "Using valid stratify arrays matching y to avoid train_test_split errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: train_test_split stratify

```bash
$ python -c "from sklearn.model_selection import train_test_split; train_test_split([[0],[1],[2],[3]], [0,0,1,1], stratify=[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Stratify must be the same length as y.
```

### Why this happens

- `stratify` array length doesn’t match `y` or contains invalid labels.

### Fix

- Pass `stratify=y` with same length and valid class distribution.

#### Wrong code

```python
train_test_split(X, y, stratify=[0,1])
```

#### Fixed code

```python
train_test_split(X, y, stratify=y, test_size=0.2, random_state=42)
```
