---
title: "ImportError: cannot import name 'current_app' from 'flask'"
description: "current_app requires proper context—fix imports and call sites to avoid cycles and missing symbols in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: current_app

```bash
$ python -c "from flask import current_app"
Traceback (most recent call last):
  ...
ImportError: cannot import name 'current_app' from 'flask'
```

### Why this happens

Shadowing the Flask package with local files or circular imports can prevent `current_app` from being imported correctly.

### Fix

- Remove local `flask.py` and avoid circular initialization; import `current_app` within functions when necessary.

#### Wrong code

```python
# utils.py
from flask import current_app
print(current_app.name)  # executed at import time
```

#### Fixed code

```python
# utils.py
from flask import current_app

def get_name():
    return current_app.name
```
