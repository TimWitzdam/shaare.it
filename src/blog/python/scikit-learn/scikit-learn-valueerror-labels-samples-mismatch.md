---
title: "ValueError: Number of labels is different from number of samples"
description: "Aligning X and y lengths to avoid scikit-learn fitting errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: labels vs samples mismatch

```bash
$ python -c "from sklearn.tree import DecisionTreeClassifier; DecisionTreeClassifier().fit([[0],[1],[2]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Number of labels is different from number of samples.
```

### Why this happens

- `y` length doesn’t match `X` length.

### Fix

- Ensure both arrays have the same number of samples.

#### Wrong code

```python
X = [[0],[1],[2]]
y = [0,1]
DecisionTreeClassifier().fit(X, y)
```

#### Fixed code

```python
X = [[0],[1],[2]]
y = [0,1,0]
DecisionTreeClassifier().fit(X, y)
```
