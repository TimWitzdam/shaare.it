---
title: "ValueError: alpha must be between 0 and 1"
description: "Transparency values outside [0,1] are invalid."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: alpha must be between 0 and 1

```bash
$ python -c "import matplotlib.pyplot as plt; plt.plot([1,2],[3,4], alpha=2.0)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: alpha must be between 0 and 1
```

### Why this happens

`alpha` controls transparency and must be within 0.0–1.0.

### Fix

Clamp `alpha` to [0,1].

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.plot([1,2],[3,4], alpha=1.5)
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.plot([1,2],[3,4], alpha=0.5)
plt.show()
```
