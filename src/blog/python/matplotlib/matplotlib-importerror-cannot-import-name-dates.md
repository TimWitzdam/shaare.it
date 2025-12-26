---
title: "ImportError: cannot import name 'dates'"
description: "Matplotlib date utilities live in matplotlib.dates."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ImportError: cannot import name 'dates'

```bash
$ python -c "from matplotlib import dates"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'dates' from 'matplotlib'
```

### Why this happens

`dates` is a submodule: `matplotlib.dates`.

### Fix

Import from the correct module.

#### Wrong code

```python
from matplotlib import dates
loc = dates.AutoDateLocator()
```

#### Fixed code

```python
import matplotlib.dates as mdates
loc = mdates.AutoDateLocator()
```
