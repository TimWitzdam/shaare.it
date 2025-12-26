---
title: "AttributeError: request object has no attribute 'cookies'"
description: "Trying to read cookies outside a request or shadowing request leads to AttributeError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: request has no attribute 'cookies'

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "app.py", line 10, in index
    request.cookies['session']
AttributeError: 'Request' object has no attribute 'cookies'
```

### Why this happens

This usually means you’re accessing `request` outside a request context or you replaced the `request` name with a different object. In standard Flask, `cookies` is always present on `request` during a real request.

### Fix

Access cookies inside views or within a testing request context. Make sure you import `request` from Flask and don’t reassign it.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

# At import time
cookie = request.cookies.get('session')
```

#### Fixed code

```python
from flask import Flask, request
app = Flask(__name__)

@app.route('/')
def index():
    session_cookie = request.cookies.get('session')
    return f"session={bool(session_cookie)}"
```

### Tip

When testing, use `client.set_cookie()` to simulate browser cookies.
