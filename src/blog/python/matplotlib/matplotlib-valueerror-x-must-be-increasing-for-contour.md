---
title: "ValueError: x must be increasing for contour"
description: "Contour expects monotonically increasing x and y coordinates."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: x must be increasing for contour

```bash
$ python -c "import numpy as np, matplotlib.pyplot as plt; X=[2,1,0]; Y=[0,1,2]; Z=np.random.rand(3,3); plt.contour(X,Y,Z)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: x must be increasing
```

### Why this happens

Non-monotonic axes are invalid for some contour routines.

### Fix

Sort axes or provide increasing sequences.

#### Wrong code

```python
import numpy as np
import matplotlib.pyplot as plt
X = [2,1,0]
Y = [0,1,2]
Z = np.random.rand(3,3)
plt.contour(X, Y, Z)
```

#### Fixed code

```python
import numpy as np
import matplotlib.pyplot as plt
X = [0,1,2]
Y = [0,1,2]
Z = np.random.rand(3,3)
plt.contour(X, Y, Z)
plt.show()
```
