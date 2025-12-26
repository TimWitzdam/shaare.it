---
title: "ImportError: cannot import name 'ticker'"
description: "Accessing ticker functions from the right namespace."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ImportError: cannot import name 'ticker'

```bash
$ python -c "from matplotlib import ticker"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'ticker' from 'matplotlib'
```

### Why this happens

`ticker` is in `matplotlib.ticker`.

### Fix

Import the correct submodule.

#### Wrong code

```python
from matplotlib import ticker
formatter = ticker.ScalarFormatter()
```

#### Fixed code

```python
import matplotlib.ticker as ticker
formatter = ticker.ScalarFormatter()
```
