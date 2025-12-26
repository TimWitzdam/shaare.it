---
title: "ValueError: 'oob_score' requires bootstrap=True"
description: "scikit-learn RandomForest out-of-bag scoring requires bootstrap; error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: oob_score requires bootstrap

```bash
$ python -c "from sklearn.ensemble import RandomForestClassifier; RandomForestClassifier(oob_score=True, bootstrap=False).fit([[0],[1],[2],[3]],[0,1,1,0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: oob_score requires bootstrap=True
```

### Why this happens

Out-of-bag scoring uses bootstrap samples.

### Fix

Set bootstrap=True or disable oob_score.

#### Wrong code

```python
from sklearn.ensemble import RandomForestClassifier
RandomForestClassifier(oob_score=True, bootstrap=False)
```

#### Fixed code

```python
from sklearn.ensemble import RandomForestClassifier
RandomForestClassifier(oob_score=True, bootstrap=True)
```
