---
title: "ValueError: Unknown artist property"
description: "Passing unsupported keyword arguments to plotting functions raises property errors."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: Unknown artist property

```bash
$ python -c "import matplotlib.pyplot as plt; plt.plot([1,2],[3,4], linewidths=2)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Unknown artist property: linewidths
```

### Why this happens

You used an invalid keyword; e.g., `linewidths` is for scatter, while `plot` expects `linewidth`.

### Fix

Use the correct property names for the specific artist.

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.plot([1,2],[3,4], linewidths=2)
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.plot([1,2],[3,4], linewidth=2)
plt.show()
```
