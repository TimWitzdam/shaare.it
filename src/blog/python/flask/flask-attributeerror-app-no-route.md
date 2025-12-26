---
title: "AttributeError: 'Flask' object has no attribute 'route'"
description: "Diagnosing missing @app.route on a Flask instance: why the attribute disappears and how to fix imports, shadowing, and initialization order."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: 'Flask' object has no attribute 'route'

```bash
$ python -c "from flask import Flask; app = Flask(__name__); app.route('/')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'Flask' object has no attribute 'route'
```

### Why this happens

You almost never see this with a properly installed Flask. Common causes:

- The name `app` points to the wrong object (e.g., a Blueprint or a function), not a `Flask` instance.
- You shadowed the `flask` package by having a local `flask.py` or `flask/` directory.
- You created the app by subclassing incorrectly or overwrote `route` with another attribute.
- Using `current_app` outside of an application context—trying to call `current_app.route`, which is invalid.

### Fix

- Confirm `app` is a `Flask` instance and not a different object.
- Remove or rename any local modules named `flask.py`.
- Use the canonical `Flask(__name__)` and `@app.route` decorators in the module where the view functions live.
- Do not call `current_app.route`; register routes on the actual `Flask` instance or use Blueprints.

#### Wrong code

```python
# app/routes.py
from flask import current_app

@current_app.route('/hello')  # current_app does not provide route for decorators
def hello():
    return 'Hello'
```

#### Fixed code

```python
# app/__init__.py
from flask import Flask

app = Flask(__name__)

from . import routes

# app/routes.py
from . import app

@app.route('/hello')
def hello():
    return 'Hello'
```

If you prefer Blueprints:

```python
# app/routes.py
from flask import Blueprint

bp = Blueprint('main', __name__)

@bp.route('/hello')
def hello():
    return 'Hello'

# app/__init__.py
from flask import Flask
from .routes import bp

app = Flask(__name__)
app.register_blueprint(bp)
```

Ensure the `app` variable refers to an actual `Flask` instance, and avoid importing `current_app` to declare routes.
