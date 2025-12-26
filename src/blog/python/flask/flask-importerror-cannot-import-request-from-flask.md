---
title: "ImportError: cannot import name 'request' from 'flask'"
description: "Resolve request import failures in Flask—avoid circular imports and local shadowing."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: cannot import name 'request' from 'flask'

```bash
$ python -c "from flask import request"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'request' from 'flask'
```

### Why this happens

The most common causes:

- You have a local `flask.py` file or `flask/` directory shadowing the real Flask package.
- Circular imports: `app.py` imports `views.py`, which imports `app.py`, and both try to import Flask symbols before initialization completes.

### Fix

- Remove/rename any local modules named `flask`.
- Refactor to an application factory and import inside functions to break cycles.

#### Wrong code

```python
# app.py
from views import index

# views.py
from app import app
from flask import request
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
from flask import request

def init(app):
    @app.get('/')
    def index():
        return request.method
```
