---
title: "NameError: name 'app' is not defined"
description: "Break circular imports and create the Flask app in a factory—avoid undefined app references."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## NameError: app undefined

```bash
$ flask run
Traceback (most recent call last):
  ...
NameError: name 'app' is not defined
```

### Why this happens

Import cycles and module ordering issues can make `app` unavailable where you reference it. For example, `views.py` imports `app` from `app.py` while `app.py` imports `views.py`—neither completes initialization.

### Fix

- Use an app factory and only reference `current_app` inside request contexts.
- Avoid global imports of `app`; pass it into initialization functions or use `flask run --app yourpackage:create_app`.

#### Wrong code

```python
# views.py
from app import app

@app.route('/')
def index():
    return 'OK'
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
def init(app):
    @app.route('/')
    def index():
        return 'OK'
```
