---
title: "ValueError: invalid interpolation keyword"
description: "Use supported interpolation names for imshow."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: invalid interpolation keyword

```bash
$ python -c "import numpy as np, matplotlib.pyplot as plt; plt.imshow(np.zeros((2,2)), interpolation='foo')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Unknown interpolation 'foo'
```

### Why this happens

You passed an unsupported interpolation string.

### Fix

Use valid options like 'nearest', 'bilinear', 'bicubic'.

#### Wrong code

```python
import numpy as np
import matplotlib.pyplot as plt
plt.imshow(np.zeros((2,2)), interpolation='foo')
```

#### Fixed code

```python
import numpy as np
import matplotlib.pyplot as plt
plt.imshow(np.zeros((2,2)), interpolation='nearest')
plt.show()
```
