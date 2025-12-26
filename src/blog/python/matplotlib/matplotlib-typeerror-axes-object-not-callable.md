---
title: "TypeError: 'Axes' object is not callable"
description: "Trying to call an Axes as a function instead of using its methods."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## TypeError: 'Axes' object is not callable

```bash
$ python -c "import matplotlib.pyplot as plt; fig, ax = plt.subplots(); ax([1,2],[3,4])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'Axes' object is not callable
```

### Why this happens

You tried to call the `Axes` instance like a function. Plotting is done via methods such as `ax.plot`, `ax.scatter`, etc.

### Fix

Use the appropriate method on `Axes`.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax([1,2],[3,4])
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.plot([1,2],[3,4])
plt.show()
```
