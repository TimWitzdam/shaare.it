---
title: "ValueError: 'multi_class' must be 'ovr' or 'multinomial'"
description: "scikit-learn logistic regression invalid multi_class error and how to fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: logistic multi_class invalid

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression(multi_class='one-vs-one').fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: multi_class must be 'ovr' or 'multinomial'
```

### Why this happens

Unsupported option for multi_class.

### Fix

Use 'ovr' or 'multinomial' consistent with solver.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
LogisticRegression(multi_class='one-vs-one')
```

#### Fixed code

```python
from sklearn.linear_model import LogisticRegression
LogisticRegression(multi_class='multinomial', solver='lbfgs')
```
