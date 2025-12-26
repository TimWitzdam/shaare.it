---
title: "UserWarning: Matplotlib is currently using a non-GUI backend"
description: "Headless backends cannot show windows; use savefig or switch backend."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## UserWarning: Matplotlib is currently using a non-GUI backend

```bash
$ python -c "import matplotlib; print(matplotlib.get_backend())"
UserWarning: Matplotlib is currently using a non-GUI backend
```

### Why this happens

A non-GUI backend is active in a headless environment.

### Fix

Use `savefig` or select a GUI backend compatible with your environment.

#### Wrong code

```python
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
