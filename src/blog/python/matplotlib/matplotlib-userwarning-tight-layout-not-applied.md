---
title: "UserWarning: Tight layout not applied"
description: "Understanding why tight_layout fails and how to fix it."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## UserWarning: Tight layout not applied

```bash
$ python plot.py
UserWarning: Tight layout not applied. The left and right margins cannot be made large enough to accommodate all axes decorations.
```

### Why this happens

This warning occurs when `plt.tight_layout()` cannot automatically adjust the subplot parameters to fit the figure area. This often happens when labels are too long, or the figure size is too small for the content.

### Fix

Increase the figure size, rotate labels, or manually adjust subplot parameters using `plt.subplots_adjust()`.

#### Wrong code

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(2, 2))
ax.set_xlabel("A very very very very very long label")
plt.tight_layout()
plt.show()
```

#### Fixed code

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(6, 4)) # Increased size
ax.set_xlabel("A very very very very very long label")
plt.tight_layout()
plt.show()
```
