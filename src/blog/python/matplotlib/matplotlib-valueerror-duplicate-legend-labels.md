---
title: "ValueError: cannot have more than one handle with the same label"
description: "Duplicate legend labels cause errors depending on legend construction."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: cannot have more than one handle with the same label

```bash
$ python -c "import matplotlib.pyplot as plt; plt.plot([1,2], label='A'); plt.plot([2,3], label='A'); plt.legend()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: cannot have more than one handle with the same label
```

### Why this happens

Legend tries to resolve duplicate labels when you manually provide handles/labels or certain settings.

### Fix

Use unique labels or filter duplicates before passing to legend.

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.plot([1,2], label='A')
plt.plot([2,3], label='A')
plt.legend()
```

#### Fixed code

```python
import matplotlib.pyplot as plt
line1, = plt.plot([1,2], label='A')
line2, = plt.plot([2,3], label='B')
handles = {l.get_label(): l for l in [line1, line2]}
plt.legend(handles.values())
plt.show()
```
