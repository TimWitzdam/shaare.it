---
title: "ImportError: cannot import name 'jsonify' from 'flask'"
description: "Why Flask's jsonify import fails, common causes, and how to fix circular imports or wrong import paths."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: cannot import name 'jsonify' from 'flask'

```bash
$ python -c "from flask import jsonify"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'jsonify' from 'flask' (unknown location)
```

### Why this happens

This error typically appears due to one of these reasons:

- A circular import: importing `jsonify` inside a module that Flask imports during app creation, causing partial module initialization.
- Shadowing the `flask` package: a local file or folder named `flask.py` or `flask/` takes precedence over the installed package.
- Broken/incorrect environment: Flask isn’t installed in the active environment, or multiple Python interpreters are in use.
- Wrong import target: importing from a submodule that doesn’t expose `jsonify`.

### Fix

- Ensure Flask is installed and you’re using the intended Python environment.
- Remove or rename any local `flask.py` or `flask/` directories to avoid shadowing.
- Avoid circular imports by moving imports to the top-level or refactoring app structure.
- Import `jsonify` directly from `flask` in your route modules and avoid importing your app in those modules.

#### Wrong code

```python
# app/routes.py
from app import app  # This can trigger circular imports if app imports routes
from flask import jsonify

@app.route('/ping')
def ping():
    return jsonify({"status": "ok"})
```

#### Fixed code

```python
# app/__init__.py
from flask import Flask

app = Flask(__name__)

from . import routes  # Import routes after app is created

# app/routes.py
from flask import jsonify
from . import app

@app.route('/ping')
def ping():
    return jsonify({"status": "ok"})
```

By deferring the import of `routes` until after `app` is created, you avoid the circular dependency that leads to the `ImportError`. Also confirm that no local `flask.py` file shadows the package and that your virtual environment is active.
