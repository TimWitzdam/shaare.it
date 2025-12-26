---
title: "RuntimeError: Attempted to use a closed session"
description: "Avoid using request context objects after the request—cleanup and lifecycle in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## RuntimeError: Attempted to use a closed session

```bash
$ flask run
Traceback (most recent call last):
  ...
RuntimeError: Attempted to use a closed session.
```

### Why this happens

Accessing `session` or `request` after the response has been returned, or outside the active request context, causes this error.

### Fix

- Copy values out of `session` during the request.
- Avoid background threads using `request` unless you manually create contexts (advanced) or pass data explicitly.

#### Wrong code

```python
from flask import Flask, session
app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev'

cache = {}

@app.route("/")
def index():
    cache['user'] = session.get('user')
    return "OK"

# later, outside request
print(session['user'])  # raises
```

#### Fixed code

```python
from flask import Flask, session
app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev'

cache = {}

@app.route("/")
def index():
    cache['user'] = session.get('user')
    return "OK"

# Use cached value instead of session
print(cache.get('user'))
```
