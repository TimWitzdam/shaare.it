---
title: "TypeError: 'NoneType' is not subscriptable in Flask views"
description: "Accessing keys or indexes on None when reading request data or view results."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: 'NoneType' is not subscriptable

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "/path/to/app.py", line 18, in create
    name = data['name']
TypeError: 'NoneType' is not subscriptable
```

### Why this happens

This error usually means you tried to index (`[...]`) a `None` value. In Flask, a common source is `request.get_json()` returning `None` when the client didn’t send a JSON body, sent invalid JSON, or the `Content-Type` wasn’t `application/json`. It can also happen if a helper returns `None` and you immediately index it.

### Fix

Validate inputs before indexing. Use `request.is_json`, handle `None` returns, and provide sensible defaults or aborts. Consider `force=True` only for controlled clients. For form data, use `request.form.get('field')` instead of subscripts.

#### Wrong code

```python
# app.py
from flask import Flask, request
app = Flask(__name__)

@app.post('/users')
def create():
    data = request.get_json()  # may be None
    name = data['name']        # TypeError here when data is None
    return {'name': name}, 201
```

#### Fixed code

```python
# app.py
from flask import Flask, request, abort
app = Flask(__name__)

@app.post('/users')
def create():
    if not request.is_json:
        abort(400, description='Expected application/json')

    data = request.get_json(silent=True)
    if data is None:
        abort(400, description='Invalid or missing JSON body')

    name = data.get('name')
    if not name:
        abort(400, description='Missing field: name')

    return {'name': name}, 201
```

### Extra tips

- For optional keys, prefer `data.get('key')` with defaults.
- When testing, set headers: `Content-Type: application/json`.
- Avoid chaining indexes on unvalidated results from helpers.
