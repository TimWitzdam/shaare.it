---
title: "AttributeError: 'Pipeline' object has no attribute 'predict_proba'"
description: "Why predict_proba may be missing on your Pipeline and how to fix it."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## AttributeError: Pipeline has no predict_proba

```bash
$ python -c "from sklearn.pipeline import Pipeline; from sklearn.svm import SVC; p=Pipeline([('clf',SVC())]); p.predict_proba([[0,1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'Pipeline' object has no attribute 'predict_proba'
```

### Why this happens

- Final estimator doesn’t implement `predict_proba`.

### Fix

- Use an estimator that provides `predict_proba` (e.g., `LogisticRegression`) or enable `probability=True` for `SVC`.

#### Wrong code

```python
from sklearn.pipeline import Pipeline
from sklearn.svm import SVC
pipe = Pipeline([("clf", SVC())])
pipe.predict_proba([[0,1]])
```

#### Fixed code

```python
from sklearn.pipeline import Pipeline
from sklearn.svm import SVC
pipe = Pipeline([("clf", SVC(probability=True))])
pipe.fit([[0,1],[1,0],[0.5,0.5]],[0,1,0])
print(pipe.predict_proba([[0.2,0.8]]))
```
