---
title: "ValueError: ordinal must be >= 1"
description: "Fixing ValueError when using invalid values with colormaps."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: ordinal must be >= 1

```bash
$ python script.py
Traceback (most recent call last):
  ...
ValueError: ordinal must be >= 1
```

### Why this happens

This can happen when converting characters or strings to colors if the data passed to a color mapping function contains invalid values (like null bytes or empty strings) that cannot be converted to an ordinal.

### Fix

Check your data for invalid characters or empty values before passing it to plotting functions that map colors.

#### Wrong code

```python
import matplotlib.pyplot as plt
# chr(0) is invalid for some operations
plt.text(0.5, 0.5, chr(0))
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.text(0.5, 0.5, "Valid Text")
```
