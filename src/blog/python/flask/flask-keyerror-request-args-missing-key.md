---
title: "KeyError: missing key in request.args"
description: "Understanding request.args in Flask, why missing query parameters raise KeyError, and how to safely access optional values."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## KeyError: missing key in request.args

```bash
$ python - <<'PY'
from flask import Flask, request
app = Flask(__name__)
@app.route('/search')
def search():
    return request.args['q']  # Will KeyError if q is absent
with app.test_client() as c:
    r = c.get('/search')
    print(r.status_code)
    print(r.data)
PY
500
b'<!doctype html>...KeyError: q'
```

### Why this happens

`request.args` is an immutable dict of query string parameters. Accessing a missing key via `request.args['q']` raises `KeyError`, which propagates as a 500 if you don’t handle it. This is common when optional parameters are expected or clients forget to supply them.

### Fix

- Use `.get('q')` with a default value for optional parameters.
- Validate required parameters and return a 400 response if missing.
- Consider using type conversion and validation libraries or simple helper functions to centralize parameter parsing.

#### Wrong code

```python
@app.route('/search')
def search():
    q = request.args['q']  # Raises KeyError when ?q= is not provided
    return f"Query={q}"
```

#### Fixed code

```python
from flask import abort

@app.route('/search')
def search():
    q = request.args.get('q')
    if q is None:
        abort(400, description='Missing required query parameter: q')
    return f"Query={q}"
```

Optional parameter approach:

```python
@app.route('/items')
def items():
    page = int(request.args.get('page', 1))
    size = int(request.args.get('size', 20))
    return f"page={page}, size={size}"
```

Treat query parameters like user input: validate presence and type, and handle defaults gracefully to prevent `KeyError` and unexpected 500s.
