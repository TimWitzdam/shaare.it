---
title: "ImportError: cannot import name 'request' from 'flask' (circular import)"
description: "Circular imports between app and views often break request imports—how to fix the layout."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: request circular import

```bash
$ flask run
Traceback (most recent call last):
  ...
ImportError: cannot import name 'request' from 'flask'
```

### Why this happens

Circular imports occur when `app` imports `views`, and `views` import `app`, creating a loop before Flask is fully initialized.

### Fix

- Use an application factory pattern and import inside functions.
- Move `from flask import request` inside the view or rearrange modules so initialization does not depend on views.

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
    @app.route("/")
    def index():
        return request.method
```
