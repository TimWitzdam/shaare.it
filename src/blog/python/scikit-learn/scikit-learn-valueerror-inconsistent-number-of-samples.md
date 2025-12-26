---
title: "ValueError: Found input variables with inconsistent numbers of samples"
description: "Fixing mismatched sample sizes between X and y in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: inconsistent numbers of samples

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; clf=LogisticRegression(); clf.fit([[0],[1],[2]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Found input variables with inconsistent numbers of samples: [3, 2]
```

### Why this happens

- `X` and `y` have different lengths.

### Fix

- Ensure `len(X) == len(y)`.

#### Wrong code

```python
X = [[0],[1],[2]]
y = [0,1]
clf.fit(X, y)
```

#### Fixed code

```python
X = [[0],[1],[2]]
y = [0,1,0]
clf.fit(X, y)
print(clf.predict([[1]]))
```
