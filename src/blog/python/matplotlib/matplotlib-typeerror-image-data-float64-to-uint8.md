---
title: "TypeError: Image data of dtype float64 cannot be converted to uint8"
description: "imshow expects data in a compatible dtype; convert or scale appropriately."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## TypeError: Image data of dtype float64 cannot be converted to uint8

```bash
$ python -c "import matplotlib.pyplot as plt; import numpy as np; plt.imshow(np.random.rand(10,10).astype(float)); plt.show()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: Image data of dtype float64 cannot be converted to uint8
```

### Why this happens

Some backends expect `uint8` or float in range [0,1]. Mismatched dtype or value range triggers errors.

### Fix

Scale/convert data to valid range and dtype.

#### Wrong code

```python
import matplotlib.pyplot as plt
import numpy as np
img = (np.random.rand(10,10) * 300).astype(float)  # values out of range
plt.imshow(img)
```

#### Fixed code

```python
import matplotlib.pyplot as plt
import numpy as np
img = np.random.rand(10,10).astype(np.float32)  # floats in [0,1]
plt.imshow(img)
plt.show()

# Or convert to uint8
img8 = (img * 255).astype(np.uint8)
plt.imshow(img8)
plt.show()
```
