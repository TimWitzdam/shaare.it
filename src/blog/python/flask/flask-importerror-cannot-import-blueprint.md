---
title: "ImportError: cannot import name 'Blueprint' from 'flask'"
description: "Diagnosing Blueprint import failures from Flask: shadowed packages, wrong environment, and circular imports."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: cannot import name 'Blueprint' from 'flask'

```bash
$ python -c "from flask import Blueprint"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'Blueprint' from 'flask' (unknown location)
```

### Why this happens

- Local shadowing: a `flask.py` or `flask/` directory in your project hides the real package.
- Environment issues: Flask not installed or mixing Python versions/venvs.
- Circular import: importing `Blueprint` in a module that is imported by your `app/__init__.py` before Flask fully initializes.

### Fix

- Remove/rename any local `flask.py` or `flask/` directories.
- Verify Flask is installed in the active environment and you’re using the right interpreter.
- Structure the app so `Blueprint` imports live in the blueprint files, and registration happens after object creation.

#### Wrong code

```python
# app/__init__.py
from flask import Flask, Blueprint
app = Flask(__name__)
from . import routes  # routes imports app, causing circular import on Blueprint
```

#### Fixed code

```python
# app/__init__.py
from flask import Flask
app = Flask(__name__)

# Defer blueprint registration to after app creation
from .routes import bp
app.register_blueprint(bp)

# app/routes.py
from flask import Blueprint
bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    return 'Hello'
```

Check your environment with `python -m pip show flask` and ensure no shadowing files exist.
