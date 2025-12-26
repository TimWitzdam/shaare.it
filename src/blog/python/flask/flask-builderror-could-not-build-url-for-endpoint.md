---
title: "BuildError: Could not build url for endpoint"
description: "url_for needs an existing endpoint and required params—debug common mistakes."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## BuildError: url_for endpoint

```bash
$ flask run
Traceback (most recent call last):
  ...
werkzeug.routing.BuildError: Could not build url for endpoint 'profile'. Did you mean 'index'?
```

### Why this happens

`url_for` is called with a non-existent endpoint name or missing required path parameters. Blueprint endpoints are prefixed with their blueprint name.

### Fix

- Verify the endpoint exists (`function name` or explicit `endpoint` value).
- Provide all required arguments: `url_for('user', id=42)` if route has `<int:id>`.

#### Wrong code

```python
from flask import Flask, url_for
app = Flask(__name__)

@app.route("/user/<int:id>")
def user(id):
    return "User"

url_for('profile')  # no such endpoint
```

#### Fixed code

```python
from flask import Flask, url_for
app = Flask(__name__)

@app.route("/user/<int:id>")
def user(id):
    return "User"

with app.test_request_context():
    print(url_for('user', id=42))
```
