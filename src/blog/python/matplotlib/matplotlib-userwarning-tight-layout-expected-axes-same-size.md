---
title: "UserWarning: Tight layout not applied. expected axes to have the same size"
description: "Tight layout can fail on differently sized axes or complex grids."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## UserWarning: Tight layout not applied. expected axes to have the same size

```bash
$ python -c "import matplotlib.pyplot as plt; fig = plt.figure(); ax1 = fig.add_subplot(121); ax2 = fig.add_subplot(122, projection='polar'); fig.tight_layout()"
/usr/lib/...: UserWarning: Tight layout not applied. expected axes to have the same size
```

### Why this happens

Mixed projections or unequal axes sizes confuse tight layout.

### Fix

Use `constrained_layout=True` or adjust subplot parameters manually.

#### Wrong code

```python
import matplotlib.pyplot as plt
fig = plt.figure()
ax1 = fig.add_subplot(121)
ax2 = fig.add_subplot(122, projection='polar')
fig.tight_layout()
```

#### Fixed code

```python
import matplotlib.pyplot as plt
fig, (ax1, ax2) = plt.subplots(1, 2, constrained_layout=True)
```
