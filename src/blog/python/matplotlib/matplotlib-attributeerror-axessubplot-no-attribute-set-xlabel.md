---
title: "AttributeError: 'AxesSubplot' has no attribute 'set_xlabel'"
description: "Use ax.set_xlabel or ax.set(xlabel=...) correctly; avoid typos."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## AttributeError: 'AxesSubplot' has no attribute 'set_xlabel'

```bash
$ python -c "import matplotlib.pyplot as plt; fig, ax = plt.subplots(); ax.setXlabel('x')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'AxesSubplot' object has no attribute 'setXlabel'
```

### Why this happens

Method name typo or wrong casing.

### Fix

Use the correct method name: `set_xlabel`.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.setXlabel('x')
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.set_xlabel('x')
```
