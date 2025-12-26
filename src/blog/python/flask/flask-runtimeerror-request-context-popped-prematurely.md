---
title: "RuntimeError: Request context popped prematurely"
description: "Popping the request or app context early causes runtime errors when accessing proxies."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## RuntimeError: Request context popped prematurely

```bash
$ pytest -q
E   RuntimeError: Working outside of request context: popped prematurely
```

### Why this happens

When using `test_client`, manual context management, or background threads, you may inadvertently pop the request/app context while code still needs `request`, `session`, or `current_app`. Accessing these proxies then raises `RuntimeError`.

### Fix

Ensure contexts live for the duration of the work: use `with app.test_request_context(): ...`, avoid leaking work to threads without pushing a fresh context, and let `client` manage context via `with client:`.

#### Wrong code

```python
from flask import Flask, request
app = Flask(__name__)

def background():
    print(request.path)  # no context

@app.route('/')
def index():
    threading.Thread(target=background).start()
    return 'ok'
```

#### Fixed code

```python
from flask import Flask
import threading
app = Flask(__name__)

def background_work(app):
    with app.app_context():
        # safe to use current_app etc.
        pass

@app.route('/')
def index():
    threading.Thread(target=background_work, args=(app,)).start()
    return 'ok'
```

### Tip

In tests, prefer the `with client:` context manager to ensure proper push/pop around each request.
