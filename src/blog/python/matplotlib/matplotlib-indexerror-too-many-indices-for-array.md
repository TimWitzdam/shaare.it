---
title: "IndexError: too many indices for array"
description: "You indexed a 1D array with 2D indices or similar mismatch."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## IndexError: too many indices for array

```bash
$ python -c "import numpy as np, matplotlib.pyplot as plt; a=np.array([1,2,3]); a[0,0]"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
IndexError: too many indices for array
```

### Why this happens

The array has fewer dimensions than your index implies.

### Fix

Match indexing to the array's shape.

#### Wrong code

```python
import numpy as np
import matplotlib.pyplot as plt
a = np.array([1,2,3])
a[0,0]
```

#### Fixed code

```python
import numpy as np
a = np.array([1,2,3])
a[0]
```
