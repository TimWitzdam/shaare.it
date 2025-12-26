---
title: "OSError: [Errno 98] Address already in use"
description: "The dev server port is busy—free the port, change it, or stop the other process."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## OSError: Address already in use

```bash
$ flask run --port 5000
OSError: [Errno 98] Address already in use
```

### Why this happens

Another process is bound to the chosen port (commonly 5000 or 8000). Zombie servers or other apps may be holding it.

### Fix

- Stop the conflicting process or choose another port with `--port`.
- On Linux, identify process via `lsof -i :5000` and kill it.

#### Wrong code

```python
# Hardcoding port used elsewhere
if __name__ == "__main__":
    app.run(port=5000)
```

#### Fixed code

```python
# Make the port configurable
import os

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(port=port)
```
