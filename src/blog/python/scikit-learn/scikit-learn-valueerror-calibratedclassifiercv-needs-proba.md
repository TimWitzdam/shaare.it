---
title: "ValueError: CalibratedClassifierCV requires predict_proba"
description: "scikit-learn CalibratedClassifierCV cannot calibrate classifiers without probability estimates; error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: CalibratedClassifierCV needs predict_proba

```bash
$ python -c "from sklearn.calibration import CalibratedClassifierCV; from sklearn.svm import LinearSVC; CalibratedClassifierCV(LinearSVC()).fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: base_estimator must support predict_proba or decision_function
```

### Why this happens

Base estimator lacks required methods.

### Fix

Use an estimator with predict_proba or enable probabilities.

#### Wrong code

```python
from sklearn.calibration import CalibratedClassifierCV
from sklearn.svm import LinearSVC
CalibratedClassifierCV(LinearSVC())
```

#### Fixed code

```python
from sklearn.calibration import CalibratedClassifierCV
from sklearn.svm import SVC
CalibratedClassifierCV(SVC(probability=True))
```
