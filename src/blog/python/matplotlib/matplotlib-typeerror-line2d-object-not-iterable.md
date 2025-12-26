---
title: "TypeError: 'Line2D' object is not iterable"
description: "Plot returns a list of lines; a single line isn't iterable as (x, y)."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## TypeError: 'Line2D' object is not iterable

```bash
$ python -c "import matplotlib.pyplot as plt; line = plt.plot([1,2,3]); for x,y in line: pass"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'Line2D' object is not iterable
```

### Why this happens

You attempted to iterate over a `Line2D` object returned by plotting functions.

### Fix

Unpack the list returned by `plot` or handle the `Line2D` object directly.

#### Wrong code

```python
import matplotlib.pyplot as plt
line = plt.plot([1,2,3])
for x, y in line:
    pass
```

#### Fixed code

```python
import matplotlib.pyplot as plt
line, = plt.plot([1,2,3])
line.set_color('red')
```
