---
title: "RuntimeError: Working outside of application context in CLI/worker"
description: "Why background tasks and CLI scripts hit Flask's application context errors, and how to push contexts correctly."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## RuntimeError: Working outside of application context in CLI/worker

```bash
$ python - <<'PY'
from flask import Flask, current_app
app = Flask(__name__)
print(current_app.name)
PY
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
  File "/.../flask/globals.py", line ..., in _get_current_object
RuntimeError: Working outside of application context.
```

### Why this happens

`current_app`, `g`, and many Flask helpers rely on the active application context, which is automatically pushed during a request or when using `app.app_context()`. In CLI scripts, background workers, or module-level code, no context is active, so accessing these proxies raises `RuntimeError`.

### Fix

- Wrap non-request code with `with app.app_context():` to push the application context.
- For request-specific objects like `request`, also require a request context (`with app.test_request_context():`).
- Avoid using `current_app` at import-time; defer access inside functions after context activation.

#### Wrong code

```python
# tasks.py
from flask import current_app

# Access at import time (no context)
print(current_app.config['DATABASE_URL'])
```

#### Fixed code

```python
# tasks.py
from flask import current_app
from yourapp import app

def run_task():
    with app.app_context():
        print(current_app.config['DATABASE_URL'])
```

Request context example:

```python
from flask import Flask, request
app = Flask(__name__)

with app.test_request_context('/?x=1'):
    assert request.args['x'] == '1'
```

For Celery/RQ workers, create the app via factory and push context during task execution:

```python
# worker.py
from yourapp import create_app
app = create_app()

def process():
    with app.app_context():
        # use current_app, db, etc.
        pass
```

Push the right context in non-request code to make Flask proxies usable safely.
