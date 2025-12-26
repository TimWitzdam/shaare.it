---
title: "TypeError: 'PathCollection' object is not subscriptable"
description: "scatter() returns a PathCollection; indexing it like an array is invalid."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## TypeError: 'PathCollection' object is not subscriptable

```bash
$ python -c "import matplotlib.pyplot as plt; pc = plt.scatter([1,2],[3,4]); pc[0]"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'PathCollection' object is not subscriptable
```

### Why this happens

`scatter()` returns a single `PathCollection`, not a list of points.

### Fix

Work with the collection's methods or plot separate series.

#### Wrong code

```python
import matplotlib.pyplot as plt
pc = plt.scatter([1,2],[3,4])
first = pc[0]
```

#### Fixed code

```python
import matplotlib.pyplot as plt
pc = plt.scatter([1,2],[3,4])
# Access properties via methods
pc.set_offsets([[1,3],[2,4]])
plt.show()

# Or plot individual points
plt.scatter([1],[3])
plt.scatter([2],[4])
plt.show()
```
