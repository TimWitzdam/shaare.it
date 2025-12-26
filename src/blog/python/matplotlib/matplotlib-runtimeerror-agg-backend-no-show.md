---
title: "RuntimeError: The 'Agg' backend does not support show()"
description: "Agg is for off-screen rendering; use savefig instead of show()."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## RuntimeError: The 'Agg' backend does not support show()

```bash
$ python -c "import matplotlib; matplotlib.use('Agg'); import matplotlib.pyplot as plt; plt.show()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
RuntimeError: The 'Agg' backend does not support show()
```

### Why this happens

`Agg` renders to images only; it cannot display GUI windows.

### Fix

Use `savefig` or switch to a GUI backend.

#### Wrong code

```python
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
plt.show()
```

#### Fixed code

```python
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
plt.plot([1,2,3])
plt.savefig('plot.png')
```
