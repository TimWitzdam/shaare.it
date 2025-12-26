---
title: "ImportError: cannot import name 'url_for' from 'flask' (wrong usage)"
description: "Understand how to import and use url_for properly, avoid shadowing and circular imports in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: cannot import name 'url_for' from 'flask'

```bash
$ python -c "from flask import url_for"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'url_for' from 'flask'
```

### Why this happens

This error commonly arises due to local module shadowing (a file named `flask.py`), partial installs, or circular imports where your application module design causes Python’s import machinery to resolve the wrong items before Flask is fully available. Another frequent source is mixing `from flask import url_for` inside modules that themselves are imported by the app factory too early, triggering import cycles.

### Fix

- Ensure you don’t have `flask.py` or a `flask/` directory in your project that shadows the package.
- If you use an app factory, import `url_for` inside functions where needed, or move imports to the top-level of files that aren’t part of cycles.
- Keep your package layout clean: models/services shouldn’t import Flask symbols where not necessary—pass URLs or the app instance as parameters.

#### Wrong code

```python
# app.py
from .views import build_profile_link

# views.py
from app import app  # circular
from flask import url_for

def build_profile_link(user_id):
    return url_for('user', id=user_id)
```

#### Fixed code

```python
# app.py
from flask import Flask

def create_app():
    app = Flask(__name__)
    from .views import init
    init(app)
    return app

# views.py
from flask import url_for

def init(app):
    @app.route('/user/<int:id>')
    def user(id):
        return f"User {id}"

    with app.test_request_context():
        print(url_for('user', id=1))
```
