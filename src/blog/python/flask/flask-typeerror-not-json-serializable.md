---
title: "TypeError: Object of type XYZ is not JSON serializable"
description: "Make Flask JSON responses serializable—use jsonify, asdict, or custom encoders."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: not JSON serializable

```bash
$ flask run
Traceback (most recent call last):
  ...
TypeError: Object of type User is not JSON serializable
```

### Why this happens

`jsonify` or returning a dict may fail if values include custom objects. The JSON encoder only supports basic types by default.

### Fix

- Convert objects to primitives: dicts via `asdict`, `.to_dict()`, or manual mapping.
- Implement `default` in a custom JSON encoder if needed.

#### Wrong code

```python
from flask import Flask, jsonify
app = Flask(__name__)

class User:
    def __init__(self, id):
        self.id = id

@app.route("/")
def index():
    return jsonify(user=User(1))
```

#### Fixed code

```python
from flask import Flask, jsonify
app = Flask(__name__)

class User:
    def __init__(self, id):
        self.id = id

@app.route("/")
def index():
    return jsonify(user={"id": 1})
```
