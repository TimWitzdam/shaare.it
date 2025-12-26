---
title: "TypeError: before_request handler must be callable"
description: "Registering non-callables for before_request raises TypeError; learn correct signatures and returns."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: before_request handler must be callable

```bash
$ python -c "from flask import Flask; app=Flask(__name__); app.before_request('not a function')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: before_request handler must be callable
```

### Why this happens

`before_request` expects a function with no arguments that optionally returns a response to short-circuit the request. Registering strings, numbers, or other non-callables triggers `TypeError`. Sometimes this happens when decorators return `None` or when a handler is accidentally executed during registration.

### Fix

Provide a proper function and register it as a decorator or via `app.before_request(func)`. Ensure the handler returns either `None` or a valid response.

#### Wrong code

```python
from flask import Flask

app = Flask(__name__)

# ❌ not a function
app.before_request("hello")
```

#### Fixed code

```python
from flask import Flask

app = Flask(__name__)

@app.before_request
def check_auth():
    # return None to continue
    # or return a Response to stop
    return None
```

### Additional notes

- If you need request data, access `flask.request` inside the handler.
- Use blueprints’ `before_app_request` or `before_request` for scoped hooks.
- Make sure the handler doesn’t raise unexpectedly; test with the test client.
