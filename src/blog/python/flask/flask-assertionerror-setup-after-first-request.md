---
title: "AssertionError: A setup function was called after the first request was handled"
description: "Ensure setup happens before handling requests—understand Flask’s lifecycle and fixes."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AssertionError: setup after first request

```bash
$ flask run
Traceback (most recent call last):
  ...
AssertionError: A setup function was called after the first request was handled
```

### Why this happens

Registering blueprints, URL rules, or error handlers after the app has started serving requests violates Flask’s immutability of the URL map during runtime.

### Fix

- Perform all registrations during app creation, not inside view functions or after `app.run()`.
- Use an application factory and register extensions and blueprints inside it.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
    app.add_url_rule('/late', endpoint='late', view_func=lambda: 'late')  # too late
    return "OK"
```

#### Fixed code

```python
from flask import Flask

def create_app():
    app = Flask(__name__)
    app.add_url_rule('/early', endpoint='early', view_func=lambda: 'early')
    return app
```
