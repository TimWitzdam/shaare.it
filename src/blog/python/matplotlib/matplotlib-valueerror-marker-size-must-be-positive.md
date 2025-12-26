---
title: "ValueError: marker size must be positive"
description: "Scatter or plot marker sizes cannot be zero or negative."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: marker size must be positive

```bash
$ python -c "import matplotlib.pyplot as plt; plt.plot([1,2,3], marker='o', markersize=-1)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: markersize must be positive
```

### Why this happens

A negative or zero marker size was used.

### Fix

Specify a positive marker size.

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.plot([1,2,3], marker='o', markersize=0)
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.plot([1,2,3], marker='o', markersize=6)
plt.show()
```
