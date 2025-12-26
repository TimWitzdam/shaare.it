---
title: "ValueError: multi_class must be in ('ovr', 'multinomial')"
description: "Setting valid multi_class options in LogisticRegression and compatible solvers."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: logistic multi_class option

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression(multi_class='foo').fit([[0,1],[1,0],[1,1]],[0,1,0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: multi_class must be in ('ovr', 'multinomial')
```

### Why this happens

- Invalid value passed for `multi_class`.

### Fix

- Use `ovr` or `multinomial` and ensure solver supports it.

#### Wrong code

```python
LogisticRegression(multi_class='foo').fit(X, y)
```

#### Fixed code

```python
LogisticRegression(multi_class='multinomial', solver='lbfgs').fit(X, y)
```
