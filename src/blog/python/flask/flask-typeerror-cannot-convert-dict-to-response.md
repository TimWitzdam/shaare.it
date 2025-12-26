---
title: "TypeError: cannot convert dict to Response"
description: "Returning plain dicts without jsonify or valid response tuple confuses Flask’s response handling."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError when returning dicts

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "/path/to/flask/app.py", line XX, in wsgi_app
    response = self.make_response(rv)
TypeError: The view function did not return a valid response
```

### Why this happens

Flask expects view functions to return one of: a string/bytes, a `Response` object, a tuple `(body, status, headers)`, or a dict in newer Flask versions (which is auto-JSONified). In older versions or misconfigurations, returning a plain dict may not be understood, leading to a `TypeError`. Another source is returning a custom object that Flask can’t convert.

### Fix

Use `jsonify` for JSON responses or return a valid response tuple. Upgrade Flask if you want to rely on auto-dict JSONification. Ensure you don’t return generators that aren’t iterable or custom classes.

#### Wrong code

```python
# app.py
from flask import Flask
app = Flask(__name__)

@app.get('/info')
def info():
    return {'version': '1.0', 'ok': True}  # may fail on older Flask
```

#### Fixed code

```python
# app.py
from flask import Flask, jsonify
app = Flask(__name__)

@app.get('/info')
def info():
    payload = {'version': '1.0', 'ok': True}
    return jsonify(payload), 200

@app.get('/raw')
def raw():
    return 'hello', 200, {'X-App': 'myapp'}
```

### Notes

- Prefer `jsonify` for explicitness and proper `Content-Type`.
- Returning dicts is supported since Flask 1.1+, but stick to `jsonify` for consistency.
- Log response types in tests to catch invalid returns early.
