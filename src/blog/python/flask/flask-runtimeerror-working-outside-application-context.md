---
title: "RuntimeError: Working outside of application context"
description: "Understanding Flask application context and how to use it correctly."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## RuntimeError: Working outside of application context

```bash
$ python app.py
Traceback (most recent call last):
  ...
RuntimeError: Working outside of application context.
```

### Why this happens

Flask requires an application context for operations that use `current_app`, configuration, and extensions bound to the app. Calling such code at import time or outside a pushed context causes this error.

### Fix

- Move code into a view function, CLI command, or explicitly push an app context.
- Use `with app.app_context():` for initialization routines that need access to `current_app` or extensions.

#### Wrong code

```python
from flask import Flask, current_app

app = Flask(__name__)
print(current_app.name)  # outside context
```

#### Fixed code

```python
from flask import Flask, current_app

app = Flask(__name__)

with app.app_context():
    print(current_app.name)
```
