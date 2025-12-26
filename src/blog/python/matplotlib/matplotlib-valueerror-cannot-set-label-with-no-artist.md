---
title: "ValueError: cannot set label with no artist"
description: "You must create an artist (line, patch) before labeling."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: cannot set label with no artist

```bash
$ python -c "import matplotlib.pyplot as plt; plt.legend()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: No artists with labels found to put in legend.
```

### Why this happens

You call `legend()` without any artists having labels.

### Fix

Add artists with labels or pass handles and labels explicitly.

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.legend()
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.plot([1,2,3], label='series')
plt.legend()
plt.show()
```
