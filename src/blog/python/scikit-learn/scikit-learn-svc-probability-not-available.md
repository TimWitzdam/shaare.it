---
title: "ValueError: SVC probability estimates not available — set probability=True and fit"
description: "Enabling probability estimates for SVC and fitting properly to avoid errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## SVC probability not available

```bash
$ python -c "from sklearn.svm import SVC; clf=SVC(); clf.fit([[0,1],[1,0]],[0,1]); clf.predict_proba([[0,1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'SVC' object has no attribute 'predict_proba'
```

### Why this happens

- `SVC` lacks `predict_proba` unless `probability=True`.

### Fix

- Initialize with `probability=True` and refit.

#### Wrong code

```python
from sklearn.svm import SVC
clf = SVC()
clf.fit([[0,1],[1,0]],[0,1])
clf.predict_proba([[0,1]])
```

#### Fixed code

```python
from sklearn.svm import SVC
clf = SVC(probability=True)
clf.fit([[0,1],[1,0],[0.5,0.5]],[0,1,0])
print(clf.predict_proba([[0.2,0.8]]))
```
