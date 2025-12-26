---
title: "ImportError: cannot import name 'make_response' from 'flask'"
description: "Troubleshooting make_response import errors caused by shadowed packages, mixed venvs, and circular imports in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: cannot import name 'make_response' from 'flask'

```bash
$ python -c "from flask import make_response"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'make_response' from 'flask' (unknown location)
```

### Why this happens

Same root causes as other top-level imports: a local `flask.py` shadows the package, Flask isn’t installed in the active environment, or circular imports create partially loaded modules.

### Fix

- Remove or rename any local `flask`-named files or folders.
- Verify Flask is installed in the interpreter you’re using.
- Keep your app initialization and route modules decoupled to avoid circular imports.

#### Wrong code

```python
# app/__init__.py
from flask import Flask, make_response
app = Flask(__name__)
from .routes import app_routes  # routes imports app -> cycle
```

#### Fixed code

```python
# app/__init__.py
from flask import Flask
app = Flask(__name__)

from .routes import register
register(app)

# app/routes.py
from flask import make_response

def register(app):
    @app.route('/ping')
    def ping():
        return make_response('pong', 200)
```

This separation avoids cycles, letting `make_response` import cleanly.
