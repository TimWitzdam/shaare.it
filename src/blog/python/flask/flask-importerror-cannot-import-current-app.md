---
title: "ImportError: cannot import name 'current_app' from 'flask'"
description: "Fixing current_app import failures: shadowed packages, circular imports, and correct usage within app contexts."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: cannot import name 'current_app' from 'flask'

```bash
$ python -c "from flask import current_app"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'current_app' from 'flask' (unknown location)
```

### Why this happens

- Local shadowing (a `flask.py` file/folder) hides the real Flask package.
- Using the wrong Python interpreter where Flask is not installed.
- Circular imports: importing `current_app` in a module that is imported during app creation, causing partial initialization.

### Fix

- Remove or rename local modules named `flask`.
- Activate the correct virtual environment and ensure Flask is installed.
- Import `current_app` only where needed and after the app is created; don’t import your application in the same module to avoid cycles.

#### Wrong code

```python
# config.py
from flask import current_app
from app import app  # Triggers circular import

def db_url():
    return current_app.config['DATABASE_URL']
```

#### Fixed code

```python
# config.py
from flask import current_app

def db_url():
    return current_app.config['DATABASE_URL']

# app/__init__.py
from flask import Flask

def create_app():
    app = Flask(__name__)
    # ... set config
    return app
```

Access `current_app` at runtime when a context is active, and avoid cycles by separating app creation from modules that consume the app.
