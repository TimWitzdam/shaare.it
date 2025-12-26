---
title: "ImportError: cannot import name 'redirect' from 'flask'"
description: "Common causes for failing to import redirect in Flask: shadowed packages, virtualenv issues, and circular imports."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: cannot import name 'redirect' from 'flask'

```bash
$ python -c "from flask import redirect"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'redirect' from 'flask' (unknown location)
```

### Why this happens

- Local shadowing of the `flask` package by a file named `flask.py` or folder `flask/`.
- Flask not installed in the active interpreter or mixed environments.
- Circular imports when importing `redirect` in a module that is loaded during app initialization.

### Fix

- Remove or rename local modules named `flask.py` or `flask/`.
- Verify your environment: `python -m pip show flask` and activate the right venv.
- Import `redirect` in your route modules, and avoid importing your app inside those modules to break cycles.

#### Wrong code

```python
# app/routes.py
from app import app
from flask import redirect

@app.route('/go')
def go():
    return redirect('/home')
```

#### Fixed code

```python
# app/__init__.py
from flask import Flask
app = Flask(__name__)

from .routes import register
register(app)

# app/routes.py
from flask import redirect

def register(app):
    @app.route('/go')
    def go():
        return redirect('/home')
```

Separating route registration avoids circular imports and stabilizes imports like `redirect`.
