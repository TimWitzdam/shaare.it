---
title: "RuntimeError: Invalid DISPLAY variable (Linux)"
description: "GUI backends need a valid X11 DISPLAY; headless servers lack it."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## RuntimeError: Invalid DISPLAY variable (Linux)

```bash
$ python -c "import matplotlib; matplotlib.use('TkAgg'); import matplotlib.pyplot as plt; plt.show()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
RuntimeError: Invalid DISPLAY variable
```

### Why this happens

On headless Linux systems, GUI backends require an X server.

### Fix

Use non-GUI backends like `Agg` or run within an X session.

#### Wrong code

```python
import matplotlib
matplotlib.use('TkAgg')
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
