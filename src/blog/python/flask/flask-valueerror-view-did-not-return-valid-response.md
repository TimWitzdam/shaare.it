---
title: "ValueError: View function did not return a valid response"
description: "Flask views must return response types—learn valid return values and fixes."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ValueError: View function did not return a valid response

```bash
$ flask run
Traceback (most recent call last):
  ...
ValueError: View function did not return a valid response
```

### Why this happens

A view returned `None`, an unsupported type, or forgot to return anything. Flask expects a string, dict (Flask ≥2.2), tuple `(body, status, headers)`, or a `Response` object.

### Fix

- Ensure every code path returns a valid response.
- Use `jsonify` for JSON responses, or return tuples when adding status/headers.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
    if False:
        return "OK"
    # Missing return
```

#### Fixed code

```python
from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/")
def index():
    return jsonify(status="OK")
```
