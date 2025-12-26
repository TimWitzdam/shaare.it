---
title: "ValueError: 'c' argument must be a color or a sequence of colors"
description: "Scatter/plot color argument must be a valid color or list of colors."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: 'c' argument must be a color or a sequence of colors

```bash
$ python -c "import matplotlib.pyplot as plt; import numpy as np; plt.scatter([1,2],[3,4], c=np.array([[1,2,3]]))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: 'c' argument must be a color or a sequence of colors
```

### Why this happens

The `c` argument expects a single color spec or an array of colors matching points; wrong shape or values cause errors.

### Fix

Provide a valid color string, RGB(A) tuple, or a 1D array matching data length.

#### Wrong code

```python
import matplotlib.pyplot as plt
import numpy as np
plt.scatter([1,2],[3,4], c=np.array([[1,2,3]]))
```

#### Fixed code

```python
import matplotlib.pyplot as plt
import numpy as np
plt.scatter([1,2],[3,4], c=['red','blue'])
plt.show()
```
