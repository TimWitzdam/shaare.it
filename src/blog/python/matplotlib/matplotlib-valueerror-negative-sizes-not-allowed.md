---
title: "ValueError: negative sizes are not allowed"
description: "Marker sizes, dimensions, bins must be non-negative."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: negative sizes are not allowed

```bash
$ python -c "import matplotlib.pyplot as plt; plt.scatter([1,2,3],[1,2,3], s=-10)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: sizes must be positive
```

### Why this happens

A parameter like marker size or figure dimension is negative.

### Fix

Ensure sizes are positive.

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.scatter([1,2,3],[1,2,3], s=-10)
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.scatter([1,2,3],[1,2,3], s=50)
plt.show()
```
