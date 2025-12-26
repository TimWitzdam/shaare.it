---
title: "AssertionError: View function mapping is overwriting an existing endpoint"
description: "How duplicate endpoint names happen in Flask and Blueprints and how to prevent accidental overwrites."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AssertionError: View function mapping is overwriting an existing endpoint

```bash
$ python -c "from flask import Flask; app=Flask(__name__);\n@app.route('/x')\ndef a(): return 'a'\n@app.route('/y', endpoint='a')\ndef b(): return 'b'"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AssertionError: View function mapping is overwriting an existing endpoint function: a
```

### Why this happens

Each route has an endpoint name (default: function name). Registering a route with an endpoint that already exists (same function name reused, same explicit `endpoint` argument, or blueprint name collisions) triggers an `AssertionError` to prevent ambiguous URL building.

### Fix

- Use unique function names or specify unique `endpoint` values.
- In Blueprints, be mindful of `name` and automatic endpoint prefixing; avoid duplicating endpoints across modules.
- Refactor routes into separate functions or use `endpoint='unique_name'`.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

@app.route('/users')
def list():
    return 'list'

@app.route('/admins')
def list():  # Duplicate function name -> duplicate endpoint
    return 'admins'
```

#### Fixed code

```python
from flask import Flask
app = Flask(__name__)

@app.route('/users')
def list_users():
    return 'list'

@app.route('/admins')
def list_admins():
    return 'admins'
```

Or specify endpoints:

```python
@app.route('/users', endpoint='users_list')
def list():
    return 'list'

@app.route('/admins', endpoint='admins_list')
def list():
    return 'admins'
```

Blueprint tip:

```python
bp = Blueprint('admin', __name__)

@bp.route('/dashboard')
def dashboard():
    return 'ok'

# Endpoint becomes 'admin.dashboard' avoiding conflicts with app-level 'dashboard'
```

Ensure every route maps to a unique endpoint to keep `url_for` deterministic.
