---
title: "ValueError: cannot convert float NaN to integer"
description: "NaN in size/shape arguments leads to conversion errors."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: cannot convert float NaN to integer

```bash
$ python -c "import numpy as np, matplotlib.pyplot as plt; plt.figure(figsize=(np.nan, 4))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: cannot convert float NaN to integer
```

### Why this happens

A parameter that expects an integer is computed from NaN (e.g., lengths, sizes, image dimensions).

### Fix

Validate inputs and replace NaNs with suitable numeric values.

#### Wrong code

```python
import numpy as np
import matplotlib.pyplot as plt
plt.figure(figsize=(np.nan, 4))
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.figure(figsize=(6, 4))
plt.show()
```
