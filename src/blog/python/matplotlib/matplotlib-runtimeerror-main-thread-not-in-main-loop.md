---
title: "RuntimeError: main thread is not in main loop"
description: "GUI backends require running on the main thread for show() and interactive use."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## RuntimeError: main thread is not in main loop

```bash
$ python -c "import matplotlib.pyplot as plt; import threading; threading.Thread(target=lambda: plt.show()).start()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
RuntimeError: main thread is not in main loop
```

### Why this happens

Interactive GUI backends (TkAgg, Qt5Agg, etc.) must run in the main thread. Calling `plt.show()` from a worker thread breaks the event loop.

### Fix

Call `plt.show()` on the main thread or switch to a non-interactive backend and save figures to files.

#### Wrong code

```python
import matplotlib.pyplot as plt
import threading

threading.Thread(target=lambda: plt.plot([1,2]); plt.show()).start()
```

#### Fixed code

```python
import matplotlib.pyplot as plt

plt.plot([1,2])
plt.show()  # run on main thread

# Or use a non-interactive backend
import matplotlib
matplotlib.use("Agg")
plt.plot([1,2])
plt.savefig("plot.png")
```
