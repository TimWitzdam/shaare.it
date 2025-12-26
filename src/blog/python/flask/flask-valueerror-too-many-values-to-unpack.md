---
title: "ValueError: too many values to unpack (view returns wrong tuple)"
description: "Flask allows specific return types—fix tuple shapes and avoid unpack errors in views."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ValueError: too many values to unpack

```bash
$ flask run
Traceback (most recent call last):
  ...
ValueError: too many values to unpack (expected 2)
```

### Why this happens

Returning an invalid tuple like `(body, status, headers, extra)` or nesting tuples improperly can break Flask's response handling.

### Fix

- Return permitted types: `str`, `dict` (Flask ≥2.2), `Response`, or tuples of `(body, status)`, `(body, headers)`, `(body, status, headers)`.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
    return ("OK", 200, {"X": "1"}, "extra")
```

#### Fixed code

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
    return "OK", 200, {"X": "1"}
```
