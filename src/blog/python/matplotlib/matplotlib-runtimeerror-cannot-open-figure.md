---
title: "RuntimeError: Cannot open figure"
description: "Backend or environment prevents opening a GUI window."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## RuntimeError: Cannot open figure

```bash
$ python -c "import matplotlib.pyplot as plt; plt.figure(); plt.show()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
RuntimeError: Cannot open figure
```

### Why this happens

A GUI backend isn't available in the current environment.

### Fix

Switch to a compatible backend or save figures to files.

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.figure()
plt.show()
```

#### Fixed code

```python
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
plt.figure()
plt.savefig('figure.png')
```
