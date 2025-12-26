---
title: "AttributeError: 'Blueprint' object has no attribute 'route' (wrong import)"
description: "Blueprints use @bp.route, but ensure you created a Blueprint and imported correctly."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: Blueprint has no route

```bash
$ flask run
Traceback (most recent call last):
  ...
AttributeError: 'Blueprint' object has no attribute 'route'
```

### Why this happens

You may be importing the wrong symbol or have a variable named `Blueprint` that isn’t a Flask blueprint. Another cause: using the app’s `route` instead of the blueprint's.

### Fix

- Create the blueprint via `Blueprint(name, import_name)` and use `@bp.route` on that instance.
- Register the blueprint with `app.register_blueprint(bp)`.

#### Wrong code

```python
from flask import Flask, Blueprint
app = Flask(__name__)
Blueprint = None  # shadows class

@Blueprint.route("/")
def index():
    return "Hello"
```

#### Fixed code

```python
from flask import Flask, Blueprint
app = Flask(__name__)

bp = Blueprint("main", __name__)

@bp.route("/")
def index():
    return "Hello"

app.register_blueprint(bp)
```
