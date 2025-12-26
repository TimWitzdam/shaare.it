---
title: "TypeError: before_request handler has wrong signature"
description: "before_request functions must be zero-arg callables; extra parameters cause TypeError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: before_request wrong signature

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "app.py", line 12, in <module>
    @app.before_request
TypeError: before_request functions must be callable with no arguments
```

### Why this happens

Flask invokes `before_request` functions without arguments. Adding parameters forces Python to require them, leading Flask to raise `TypeError` when it tries to call the function during request processing.

### Fix

Define `before_request` handlers with no parameters and read from global request proxies (`request`, `g`, `current_app`).

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

@app.before_request
def check_user(user_id):
    pass
```

#### Fixed code

```python
from flask import Flask, request
app = Flask(__name__)

@app.before_request
def check_user():
    user_id = request.headers.get('X-User-ID')
    # do something
```

### Tip

Use `before_request` for cross-cutting concerns (auth, tracing). For route-specific parameters, keep logic inside the view function.
