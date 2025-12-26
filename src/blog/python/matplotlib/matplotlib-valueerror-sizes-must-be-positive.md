---
title: "ValueError: sizes must be positive"
description: "Scatter marker sizes must be positive numbers."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: sizes must be positive

```bash
$ python -c "import matplotlib.pyplot as plt; plt.scatter([1,2],[3,4], s=[10,-5])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: sizes must be positive
```

### Why this happens

Negative or zero values for `s` (marker area) are invalid.

### Fix

Ensure all sizes are positive numbers.

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.scatter([1,2],[3,4], s=[10,-5])
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.scatter([1,2],[3,4], s=[10,20])
plt.show()
```
