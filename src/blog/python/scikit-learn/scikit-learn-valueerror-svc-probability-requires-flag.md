---
title: "ValueError: SVC probability requires probability=True during fit"
description: "scikit-learn SVC probability estimates need probability flag enabled before fitting; error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: SVC probability requires flag

```bash
$ python -c "from sklearn.svm import SVC; clf=SVC(probability=False).fit([[0],[1]],[0,1]); clf.predict_proba([[2]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: probability estimates are not available; set probability=True before fitting
```

### Why this happens

Model was not trained with probability estimates.

### Fix

Instantiate with probability=True.

#### Wrong code

```python
from sklearn.svm import SVC
clf = SVC(probability=False).fit([[0],[1]],[0,1])
clf.predict_proba([[2]])
```

#### Fixed code

```python
from sklearn.svm import SVC
clf = SVC(probability=True).fit([[0],[1]],[0,1])
clf.predict_proba([[2]])
```
