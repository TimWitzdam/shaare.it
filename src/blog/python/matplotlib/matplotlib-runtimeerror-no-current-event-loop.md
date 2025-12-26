---
title: "RuntimeError: There is no current event loop"
description: "Async frameworks require an active loop before GUI operations."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## RuntimeError: There is no current event loop

```bash
$ python -c "import asyncio; import matplotlib.pyplot as plt; asyncio.get_event_loop(); plt.show()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
RuntimeError: There is no current event loop
```

### Why this happens

You used async code without initializing an event loop when the backend requires it.

### Fix

Create and run an event loop or avoid mixing async and GUI calls.

#### Wrong code

```python
import asyncio
import matplotlib.pyplot as plt
asyncio.get_event_loop()
plt.show()
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.plot([1,2,3])
plt.show()
# Or set up asyncio loop explicitly if needed
```
