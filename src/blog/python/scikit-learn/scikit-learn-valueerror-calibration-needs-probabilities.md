---
title: "ValueError: Calibration requires probability estimates"
description: "Ensure base estimators support predict_proba for calibration."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: calibration needs probabilities

```bash
$ python -c "from sklearn.calibration import CalibratedClassifierCV; from sklearn.svm import LinearSVC; CalibratedClassifierCV(LinearSVC()).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Base estimator must support decision_function or predict_proba for calibration
```

### Why this happens

Calibration methods require access to decision scores or probabilities. Base estimators without `decision_function` or `predict_proba` cannot be directly calibrated.

### Fix

Use an estimator exposing `decision_function`/`predict_proba` or wrap appropriately.

#### Wrong code

```python
from sklearn.calibration import CalibratedClassifierCV
from sklearn.naive_bayes import MultinomialNB
CalibratedClassifierCV(MultinomialNB()).fit([[0],[1]], [0,1])
```

#### Fixed code

```python
from sklearn.calibration import CalibratedClassifierCV
from sklearn.svm import LinearSVC
# LinearSVC has decision_function, so calibration works
CalibratedClassifierCV(LinearSVC()).fit([[0],[1]], [0,1])
```
