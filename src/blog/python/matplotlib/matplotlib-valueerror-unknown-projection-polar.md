---
title: "ValueError: Unknown projection 'polar'"
description: "Projection names must be recognized by Matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: Unknown projection 'polar'

```bash
$ python -c "import matplotlib.pyplot as plt; plt.subplot(projection='polarx')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Unknown projection 'polarx'
```

### Why this happens

The projection string is misspelled or unsupported.

### Fix

Use a valid projection name.

#### Wrong code

```python
import matplotlib.pyplot as plt
ax = plt.subplot(projection='polarx')
```

#### Fixed code

```python
import matplotlib.pyplot as plt
ax = plt.subplot(projection='polar')
```
