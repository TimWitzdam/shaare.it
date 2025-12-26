---
title: "UserWarning: Starting a Matplotlib GUI outside of the main thread"
description: "Handling threading issues with Matplotlib GUI backends."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## UserWarning: Starting a Matplotlib GUI outside of the main thread

```bash
$ python script.py
UserWarning: Starting a Matplotlib GUI outside of the main thread will likely fail.
```

### Why this happens

Matplotlib's GUI backends (like TkAgg, Qt5Agg) are generally not thread-safe and must be run from the main thread of the application. Running plotting commands in a background thread can cause crashes or this warning.

### Fix

Perform all plotting and GUI operations in the main thread. If you need to plot from a thread, use a non-interactive backend or queue data to the main thread for plotting.

#### Wrong code

```python
import threading
import matplotlib.pyplot as plt

def plot():
    plt.plot([1, 2])
    plt.show()

t = threading.Thread(target=plot)
t.start()
```

#### Fixed code

```python
# Run plotting in main thread
import matplotlib.pyplot as plt

def prepare_data():
    return [1, 2]

data = prepare_data()
plt.plot(data)
plt.show()
```
