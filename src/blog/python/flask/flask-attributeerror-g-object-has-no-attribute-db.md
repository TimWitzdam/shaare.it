---
title: "AttributeError: g has no attribute 'db'"
description: "Using flask.g for per-request database handles requires setting it during a request context."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: g.db not set

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "/path/to/app.py", line 22, in get_user
    g.db.execute('SELECT 1')
AttributeError: '_AppCtxGlobals' object has no attribute 'db'
```

### Why this happens

`flask.g` is a request/application context-local. If you attempt to use `g.db` without setting it inside a context (e.g., in `before_request`), you’ll get `AttributeError`. It can also happen in tests without an app/request context.

### Fix

Initialize `g.db` in a `before_request` or on first access within a context. Close it in `teardown_appcontext`.

#### Wrong code

```python
# app.py
from flask import Flask, g
app = Flask(__name__)

def get_conn():
    return object()  # placeholder

@app.get('/user')
def get_user():
    g.db.execute('SELECT 1')  # not set
    return {'ok': True}
```

#### Fixed code

```python
# app.py
from flask import Flask, g
app = Flask(__name__)

def get_conn():
    class Dummy:
        def execute(self, q):
            return 1
    return Dummy()

@app.before_request
def open_db():
    if getattr(g, 'db', None) is None:
        g.db = get_conn()

@app.teardown_appcontext
def close_db(_):
    db = getattr(g, 'db', None)
    if db is not None:
        pass  # close here

@app.get('/user')
def get_user():
    return {'ok': bool(getattr(g, 'db', None))}
```

### Notes

- Don’t use `g` outside contexts.
- Consider app factories and extensions for DB management.
