---
title: "AttributeError: 'NoneType' object has no attribute 'headers'"
description: "Accessing request.headers fails because the request is None or used outside a request context."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: request.headers on None

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "/path/to/app.py", line 12, in <module>
    print(request.headers.get('X-Api-Key'))
AttributeError: 'NoneType' object has no attribute 'headers'
```

### Why this happens

This occurs when `request` is accessed outside of an active request context (e.g., at import time or in a module-level global). In such cases, Flask’s context locals aren’t bound, so `flask.request` resolves to a proxy that attempts to load the current request but finds none, effectively yielding `None`. It can also happen if `request` was shadowed by a local variable set to `None`.

### Fix

Only access `request` inside a view function or within a proper request or application context. Use guards and defaults when reading headers. If you need values for app-wide configuration, pass them in as parameters or store them after reading within a request.

#### Wrong code

```python
# app.py
from flask import Flask, request

app = Flask(__name__)

# Accessing request at import/module level – outside context
API_KEY = request.headers.get('X-Api-Key')

@app.get('/ping')
def ping():
    return {'pong': True}
```

#### Fixed code

```python
# app.py
from flask import Flask, request

app = Flask(__name__)

@app.get('/ping')
def ping():
    # Access inside view where a request context exists
    api_key = request.headers.get('X-Api-Key')
    return {'pong': True, 'api_key_present': api_key is not None}

# If you need to extract headers for helpers, pass request in explicitly

def get_api_key_from_request(req):
    return req.headers.get('X-Api-Key')

@app.get('/secure')
def secure():
    api_key = get_api_key_from_request(request)
    if not api_key:
        return {'error': 'missing api key'}, 401
    return {'ok': True}
```

### Notes

- During unit tests, use `with app.test_request_context(...):` before reading `request`.
- Avoid shadowing: don’t assign `request = None` or import a different name that hides Flask’s `request`.
- If middleware or before_request needs header access, do it inside those hooks where context is guaranteed.
