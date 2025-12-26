---
title: "AttributeError: request object has no attribute 'args'"
description: "Accessing request.args in the wrong context or shadowing request can cause AttributeError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: request has no attribute 'args'

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "app.py", line 9, in index
    request.args['q']
AttributeError: 'Request' object has no attribute 'args'
```

### Why this happens

Flask's `request` always has `args` during a request context, but this error appears when:

- You are outside a request context (e.g., during import/startup).
- You shadowed `request` with another variable.
- You're using a custom request class missing `args`.

### Fix

Access `request.args` inside a view or with `app.test_request_context()`. Ensure you import `request` from Flask and don’t reassign it.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

q = request.args.get('q')  # executed at import time, no context
```

#### Fixed code

```python
from flask import Flask, request
app = Flask(__name__)

@app.route('/')
def index():
    q = request.args.get('q')
    return f"q={q}"
```

### Notes

Use `request.values` to combine `args` and `form`. In tests, wrap calls with `with app.test_request_context('/?q=hi'):`.
