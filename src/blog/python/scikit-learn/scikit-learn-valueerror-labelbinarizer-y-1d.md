---
title: "ValueError: LabelBinarizer 'y' should be 1d"
description: "scikit-learn LabelBinarizer expects 1D labels; error and fix examples."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: LabelBinarizer y 1d

```bash
$ python -c "from sklearn.preprocessing import LabelBinarizer; import numpy as np; LabelBinarizer().fit(np.array([[0,1],[1,0]]))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: y should be a 1d array
```

### Why this happens

Provided labels are multi-dimensional.

### Fix

Flatten to 1D labels.

#### Wrong code

```python
from sklearn.preprocessing import LabelBinarizer
import numpy as np
LabelBinarizer().fit(np.array([[0,1],[1,0]]))
```

#### Fixed code

```python
from sklearn.preprocessing import LabelBinarizer
import numpy as np
LabelBinarizer().fit(np.array([0,1,0,1]))
```
