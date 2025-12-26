---
title: "TypeError: 'module' object is not callable"
description: "Resolving the error when incorrectly calling the pyplot module as a function."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## TypeError: 'module' object is not callable

```bash
$ python plot.py
Traceback (most recent call last):
  ...
TypeError: 'module' object is not callable
```

### Why this happens

This usually happens when you try to call `plt()` as if it were a function, instead of calling a function _inside_ the module, like `plt.show()` or `plt.plot()`.

### Fix

Check your code for `plt()` calls and replace them with the correct function call.

#### Wrong code

```python
import matplotlib.pyplot as plt

plt.plot([1, 2, 3])
plt()  # Incorrect
```

#### Fixed code

```python
import matplotlib.pyplot as plt

plt.plot([1, 2, 3])
plt.show()  # Correct
```
