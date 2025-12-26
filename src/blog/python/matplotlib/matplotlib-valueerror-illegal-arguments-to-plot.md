---
title: "ValueError: illegal arguments to plot()"
description: "plot() expects x and y as numeric sequences and known format strings."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: illegal arguments to plot()

```bash
$ python -c "import matplotlib.pyplot as plt; plt.plot('x','y')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: illegal arguments to plot()
```

### Why this happens

You passed strings or mismatched types to `plot()`.

### Fix

Provide numeric sequences and optional format strings.

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.plot('x','y')
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.plot([0,1,2],[0,1,4], 'ro-')
plt.show()
```
