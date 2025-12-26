---
title: "AttributeError: g object has no attribute 'user'"
description: "If you forget to set g.user during the request lifecycle, accessing it raises AttributeError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: g.user missing

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "app.py", line 14, in dashboard
    return f"Hello {g.user['name']}"
AttributeError: 'g' object has no attribute 'user'
```

### Why this happens

`g` is a per-request namespace. If you never set `g.user` (e.g., in `before_request`), attempting to read it later will fail with `AttributeError`.

### Fix

Initialize `g.user` early, typically in a `before_request` handler or inside the view after authentication.

#### Wrong code

```python
from flask import Flask, g
app = Flask(__name__)

@app.route('/dashboard')
def dashboard():
    return f"Hello {g.user['name']}"
```

#### Fixed code

```python
from flask import Flask, g, request
app = Flask(__name__)

@app.before_request
def load_user():
    token = request.headers.get('X-Auth')
    g.user = {'name': 'Guest'} if not token else {'name': 'Alice'}

@app.route('/dashboard')
def dashboard():
    return f"Hello {g.user['name']}"
```

### Tip

Avoid leaking user data between requests; `g` resets each request.
