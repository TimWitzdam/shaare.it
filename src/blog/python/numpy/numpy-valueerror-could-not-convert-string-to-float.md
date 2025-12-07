---
title: "ValueError: could not convert string to float: '...'"
description: "Raised when trying to convert non-numeric strings to float dtype."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: could not convert string to float

```bash
$ python -c "import numpy as np; a = np.array(['1.0','two']); a.astype(float)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: could not convert string to float: 'two'
```

### Why this happens

The array contains strings that are not valid float literals (like 'two' or malformed numbers).

### Fix

Clean or coerce the data, use pandas for robust parsing, or handle conversion errors explicitly.

#### Wrong code

```python
import numpy as np
a = np.array(['1.0', 'two'])
print(a.astype(float))
```

#### Fixed code

```python
import numpy as np
import pandas as pd
a = np.array(['1.0', 'two'])
# coerce invalid to NaN then fill
vals = pd.to_numeric(a, errors='coerce').fillna(0.0).astype(float)
print(vals)

# or filter
mask = np.vectorize(lambda s: s.replace('.','',1).isdigit())(a)
print(a[mask].astype(float))
```
