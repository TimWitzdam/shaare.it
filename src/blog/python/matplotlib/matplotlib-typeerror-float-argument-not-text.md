---
title: "TypeError: float() argument must be a string or a real number, not 'Text'"
description: "Passing Text objects where floats are expected causes type errors."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## TypeError: float() argument must be a string or a real number, not 'Text'

```bash
$ python -c "import matplotlib.pyplot as plt; fig, ax = plt.subplots(); t = ax.text(0.5,0.5,'hi'); float(t)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: float() argument must be a string or a real number, not 'Text'
```

### Why this happens

You attempted to cast a `Text` artist to float.

### Fix

Use numeric values or artist properties, not the artist itself.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
t = ax.text(0.5, 0.5, 'hi')
val = float(t)
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
x, y = 0.5, 0.5
val = float(x)
```
