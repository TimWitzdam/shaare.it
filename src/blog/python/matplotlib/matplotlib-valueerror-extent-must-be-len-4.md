---
title: "ValueError: extent must be a sequence of length 4"
description: "imshow extent requires [xmin, xmax, ymin, ymax]."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: extent must be a sequence of length 4

```bash
$ python -c "import matplotlib.pyplot as plt; import numpy as np; plt.imshow(np.zeros((2,2)), extent=[0,1,2])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: extent must be a sequence of length 4
```

### Why this happens

`extent` needs four numbers: `[xmin, xmax, ymin, ymax]`.

### Fix

Provide a length-4 sequence.

#### Wrong code

```python
import matplotlib.pyplot as plt
import numpy as np
plt.imshow(np.zeros((2,2)), extent=[0,1,2])
```

#### Fixed code

```python
import matplotlib.pyplot as plt
import numpy as np
plt.imshow(np.zeros((2,2)), extent=[0, 1, 0, 1])
plt.show()
```
