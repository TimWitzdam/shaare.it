---
title: "AttributeError: 'Request' object has no attribute 'json'"
description: "Access JSON safely across Flask versions—use request.get_json or modern dict returns in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: request.json missing

```bash
$ flask run
Traceback (most recent call last):
  ...
AttributeError: 'Request' object has no attribute 'json'
```

### Why this happens

Older Flask/Werkzeug versions don’t expose `request.json`. Accessing JSON via `request.get_json()` is the stable method. Additionally, if the request `Content-Type` isn’t `application/json`, calling `.json` or `get_json()` may fail.

### Fix

- Use `request.get_json(silent=True)` and validate the result.
- Ensure clients send the correct content type.

#### Wrong code

```python
from flask import Flask, request
app = Flask(__name__)

@app.post('/api')
def api():
    data = request.json  # may not exist
    return data['x']
```

#### Fixed code

```python
from flask import Flask, request, jsonify
app = Flask(__name__)

@app.post('/api')
def api():
    data = request.get_json(silent=True) or {}
    return jsonify(x=data.get('x'))
```
