---
title: "ValueError: label must be a string or None"
description: "Legend labels must be strings; passing arrays or numbers causes errors."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ValueError: label must be a string or None

```bash
$ python -c "import matplotlib.pyplot as plt; plt.plot([1,2],[3,4], label=[1,2])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: label must be a string or None
```

### Why this happens

`label` must be a string for legends. Lists, arrays, or numbers are invalid.

### Fix

Pass a descriptive string or omit the label.

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.plot([1,2],[3,4], label=[1,2])
plt.legend()
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.plot([1,2],[3,4], label="Line A")
plt.legend()
plt.show()
```
