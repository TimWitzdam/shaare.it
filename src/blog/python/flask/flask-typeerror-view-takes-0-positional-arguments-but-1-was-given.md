---
title: "TypeError: view takes 0 positional arguments but 1 was given"
description: "Route variables require matching function parameters; otherwise Flask passes unexpected args."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: Route parameter mismatch

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "/path/to/app.py", line 10, in user
TypeError: user() takes 0 positional arguments but 1 was given
```

### Why this happens

If your route includes variables (e.g., `/users/<int:id>`) Flask will call your view with those variables as arguments. When the function signature doesn’t accept them, Python raises this `TypeError`.

### Fix

Align your view signature with the route rule. Use type converters to ensure predictable types.

#### Wrong code

```python
# app.py
from flask import Flask
app = Flask(__name__)

@app.get('/users/<int:id>')
def user():
    return {'ok': True}
```

#### Fixed code

```python
# app.py
from flask import Flask
app = Flask(__name__)

@app.get('/users/<int:id>')
def user(id):
    return {'id': id}
```

### Tips

- Keep function parameter names identical to route variable names.
- Use default values only for optional parameters handled by query strings, not path variables.
