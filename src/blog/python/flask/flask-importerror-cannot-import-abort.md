---
title: "ImportError: cannot import name 'abort' from 'flask'"
description: "Why importing abort fails and how to fix shadowed packages or broken environments in Flask apps."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: cannot import name 'abort' from 'flask'

```bash
$ python -c "from flask import abort"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'abort' from 'flask' (unknown location)
```

### Why this happens

- A local `flask.py` shadows the real package.
- Flask not installed or wrong interpreter selected.
- Circular import when `abort` is imported from a module executed during app creation.

### Fix

- Delete/rename `flask.py` files/folders in your project.
- Confirm Flask is installed in the active environment.
- Import `abort` within view modules; avoid importing the app inside those modules.

#### Wrong code

```python
# app/__init__.py
from flask import Flask, abort
app = Flask(__name__)

from .routes import x  # routes imports app -> cycle; abort import fails unexpectedly
```

#### Fixed code

```python
# app/__init__.py
from flask import Flask
app = Flask(__name__)

from .routes import bp
app.register_blueprint(bp)

# app/routes.py
from flask import Blueprint, abort
bp = Blueprint('main', __name__)

@bp.route('/secret')
def secret():
    abort(403)
```

Keep imports simple, avoid cycles, and ensure your environment is clean.
