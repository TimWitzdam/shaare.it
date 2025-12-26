---
title: "UserWarning: Matplotlib is currently using agg, which is a non-GUI backend"
description: "The Agg backend doesn't support interactive windows; use a GUI backend or save figures."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## UserWarning: Matplotlib is currently using agg, which is a non-GUI backend

```bash
$ python -c "import matplotlib; matplotlib.use('Agg'); import matplotlib.pyplot as plt; plt.plot([1,2]); plt.show()"
UserWarning: Matplotlib is currently using agg, which is a non-GUI backend, so cannot show the figure.
```

### Why this happens

The Agg backend renders to images only and cannot open interactive windows.

### Fix

Switch to a GUI backend (TkAgg, Qt5Agg) or save figures to files.

#### Wrong code

```python
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
plt.plot([1,2])
plt.show()
```

#### Fixed code

```python
# Interactive
import matplotlib
matplotlib.use('TkAgg')  # or Qt5Agg
import matplotlib.pyplot as plt
plt.plot([1,2])
plt.show()

# Non-interactive save
import matplotlib.pyplot as plt
plt.plot([1,2])
plt.savefig('plot.png')
```
