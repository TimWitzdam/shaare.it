---
title: "AssertionError: blueprint already registered"
description: "How double-registering a Blueprint causes assertion errors and how to structure imports to avoid duplicates."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AssertionError: blueprint already registered

```bash
$ python - <<'PY'
from flask import Flask, Blueprint
bp = Blueprint('main', __name__)
app = Flask(__name__)
app.register_blueprint(bp)
app.register_blueprint(bp)
PY
Traceback (most recent call last):
  File "<stdin>", line 6, in <module>
AssertionError: A blueprint named 'main' is already registered
```

### Why this happens

Flask prevents duplicate Blueprint registrations under the same name to keep routes, templates, and static paths consistent. Double registration usually occurs due to import side effects: importing a module that registers the blueprint at import-time, and then registering it again in `create_app`. Another common case is creating multiple Blueprint instances with the same name.

### Fix

- Register blueprints exactly once, typically inside your `create_app` function.
- Avoid registration at import-time in module globals; expose the blueprint as a symbol and let the application factory register it.
- Use unique `name` values per Blueprint, and ensure `url_prefix` is consistent.

#### Wrong code

```python
# blog/routes.py
from flask import Blueprint
bp = Blueprint('blog', __name__)
# Side-effect registration (bad)
from app import app
app.register_blueprint(bp)
```

#### Fixed code

```python
# blog/routes.py
from flask import Blueprint
bp = Blueprint('blog', __name__)

# app/__init__.py
from flask import Flask
from blog.routes import bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(bp)
    return app
```

Keep registration inside the application factory pattern and avoid import-time side effects to prevent assertion failures.
