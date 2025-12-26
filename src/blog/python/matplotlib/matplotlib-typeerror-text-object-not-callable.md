---
title: "TypeError: 'Text' object is not callable"
description: "Text instances are not functions; use set_text or properties."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## TypeError: 'Text' object is not callable

```bash
$ python -c "import matplotlib.pyplot as plt; fig, ax = plt.subplots(); t = ax.set_title('hi'); t('bye')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'Text' object is not callable
```

### Why this happens

You tried to call a `Text` instance as a function.

### Fix

Use `set_text` to change text or assign properties.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
t = ax.set_title('hi')
t('bye')
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
t = ax.set_title('hi')
t.set_text('bye')
plt.draw()
```
