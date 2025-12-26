---
title: "ValueError: Number of features of the model must match the input"
description: "Keeping consistent feature sets between training and prediction time in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: features mismatch

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; clf=LogisticRegression().fit([[0,1],[1,0]],[0,1]); clf.predict([[0,1,2]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: X has 3 features, but LogisticRegression is expecting 2 features as input.
```

### Why this happens

- Different feature count/ordering between training and inference.

### Fix

- Use pipelines and consistent preprocessing; ensure same feature schema.

#### Wrong code

```python
clf.predict([[0,1,2]])
```

#### Fixed code

```python
clf.predict([[0.2,0.8]])
```
