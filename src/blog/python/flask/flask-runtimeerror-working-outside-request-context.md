---
title: "RuntimeError: Working outside of request context"
description: "Request-specific objects require a request context—here’s how to manage it."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## RuntimeError: Working outside of request context

```bash
$ python -c "from flask import request; print(request.method)"
Traceback (most recent call last):
  ...
RuntimeError: Working outside of request context.
```

### Why this happens

Objects like `request`, `session`, and `g` are only available during an active request. Accessing them in module scope or before a request is processed triggers this error.

### Fix

- Use these objects inside view functions or push a test request context in setup or scripts.
- For testing, use `app.test_request_context()` or the test client.

#### Wrong code

```python
from flask import Flask, request

app = Flask(__name__)
print(request.path)  # No request yet
```

#### Fixed code

```python
from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def index():
    return f"Method: {request.method}"

if __name__ == "__main__":
    app.run()
```
