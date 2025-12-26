---
title: "TypeError: 'Patch' object is not subscriptable"
description: "Artists like Patch cannot be indexed; store data separately."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## TypeError: 'Patch' object is not subscriptable

```bash
$ python -c "import matplotlib.pyplot as plt; p = plt.Rectangle((0,0),1,1); p[0]"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'Patch' object is not subscriptable
```

### Why this happens

`Patch` artists are objects, not sequences.

### Fix

Access attributes (e.g., `get_x()`, `get_y()`) instead of indexing.

#### Wrong code

```python
import matplotlib.pyplot as plt
p = plt.Rectangle((0,0), 1, 1)
x = p[0]
```

#### Fixed code

```python
import matplotlib.pyplot as plt
p = plt.Rectangle((0,0), 1, 1)
x = p.get_x()
```
