---
title: "AttributeError: 'Blueprint' object has no attribute 'register'"
description: "Calling register() on a Blueprint directly instead of using app.register_blueprint()."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError on Blueprint.register

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "/path/to/app.py", line 15, in <module>
    bp.register(app)
AttributeError: 'Blueprint' object has no attribute 'register'
```

### Why this happens

Blueprints are descriptors for sets of routes. You don’t "register" a blueprint by calling a method on it; you register it with the application using `app.register_blueprint(bp)`. Calling a non-existent `register` method yields `AttributeError`.

### Fix

Use `app.register_blueprint` and optionally specify a URL prefix. Ensure imports are correct and you are not confusing Blueprints with Flask extensions that do have `init_app`.

#### Wrong code

```python
# app.py
from flask import Flask, Blueprint
app = Flask(__name__)

bp = Blueprint('api', __name__)

@bp.get('/ping')
def ping():
    return {'pong': True}

bp.register(app)  # wrong
```

#### Fixed code

```python
# app.py
from flask import Flask, Blueprint
app = Flask(__name__)

bp = Blueprint('api', __name__)

@bp.get('/ping')
def ping():
    return {'pong': True}

app.register_blueprint(bp, url_prefix='/api')
```

### Tips

- Use unique blueprint names across the app.
- Keep blueprint definitions in their own module and register them in app factory.
