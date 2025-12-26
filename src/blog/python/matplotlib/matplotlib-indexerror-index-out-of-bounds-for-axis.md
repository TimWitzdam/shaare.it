---
title: "IndexError: index out of bounds for axis"
description: "Accessing indices outside array bounds triggers errors."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## IndexError: index out of bounds for axis

```bash
$ python -c "import numpy as np; a = np.array([1,2,3]); a[3]"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
IndexError: index 3 is out of bounds for axis 0 with size 3
```

### Why this happens

You attempted to access an index beyond the array size.

### Fix

Check array lengths and index safely.

#### Wrong code

```python
import numpy as np
a = np.array([1,2,3])
a[3]
```

#### Fixed code

```python
import numpy as np
a = np.array([1,2,3])
a[2]
```
