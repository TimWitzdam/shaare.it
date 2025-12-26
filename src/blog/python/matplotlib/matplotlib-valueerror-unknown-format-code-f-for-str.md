---
title: "ValueError: Unknown format code 'f' for object of type 'str'"
description: "String passed where a float was expected in formatting."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: Unknown format code 'f' for object of type 'str'

```bash
$ python -c "import matplotlib.ticker as mt; mt.FormatStrFormatter('%.2f')('%s')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Unknown format code 'f' for object of type 'str'
```

### Why this happens

A formatter expects numbers but receives strings.

### Fix

Ensure numeric inputs or cast to float before formatting.

#### Wrong code

```python
import matplotlib.ticker as mt
fmt = mt.FormatStrFormatter('%.2f')
fmt('%s')
```

#### Fixed code

```python
import matplotlib.ticker as mt
fmt = mt.FormatStrFormatter('%.2f')
fmt(1.2345)
```
