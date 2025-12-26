---
title: "ValueError: x and y must be finite"
description: "Plotting arrays containing NaN or Inf values fails."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: x and y must be finite

```bash
$ python -c "import numpy as np, matplotlib.pyplot as plt; plt.plot([1, np.nan, 3], [1, 2, np.inf])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: x and y must be finite values
```

### Why this happens

Your data contains NaN or Inf values which some plotting functions reject.

### Fix

Filter or replace invalid values before plotting.

#### Wrong code

```python
import numpy as np
import matplotlib.pyplot as plt
x = np.array([1, np.nan, 3])
y = np.array([1, 2, np.inf])
plt.plot(x, y)
```

#### Fixed code

```python
import numpy as np
import matplotlib.pyplot as plt
x = np.array([1, 2, 3])
y = np.array([1, 2, 3])
# Or clean data
# mask = np.isfinite(x) & np.isfinite(y)
# plt.plot(x[mask], y[mask])
plt.plot(x, y)
plt.show()
```
