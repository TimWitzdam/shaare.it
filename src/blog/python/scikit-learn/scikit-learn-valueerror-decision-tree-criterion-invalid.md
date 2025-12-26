---
title: "ValueError: 'criterion' must be 'gini' or 'entropy'"
description: "scikit-learn decision tree invalid criterion errors and fixes."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: decision tree criterion invalid

```bash
$ python -c "from sklearn.tree import DecisionTreeClassifier; DecisionTreeClassifier(criterion='accuracy').fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: criterion must be 'gini' or 'entropy'
```

### Why this happens

Unsupported criterion value.

### Fix

Use 'gini' or 'entropy'.

#### Wrong code

```python
from sklearn.tree import DecisionTreeClassifier
DecisionTreeClassifier(criterion='accuracy')
```

#### Fixed code

```python
from sklearn.tree import DecisionTreeClassifier
DecisionTreeClassifier(criterion='gini')
```
