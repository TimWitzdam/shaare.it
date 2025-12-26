---
title: "ValueError: SelectPercentile 'percentile' out of range"
description: "scikit-learn SelectPercentile percentile must be in (0,100]; error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: SelectPercentile invalid

```bash
$ python -c "from sklearn.feature_selection import SelectPercentile; SelectPercentile(percentile=0).fit([[1,2],[3,4]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: percentile must be in (0, 100]
```

### Why this happens

Percentile can't be zero or negative.

### Fix

Use a value in (0,100].

#### Wrong code

```python
from sklearn.feature_selection import SelectPercentile
SelectPercentile(percentile=0)
```

#### Fixed code

```python
from sklearn.feature_selection import SelectPercentile
SelectPercentile(percentile=20)
```
