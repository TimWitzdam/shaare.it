---
title: "BadRequest: 400 Invalid JSON"
description: "Validate request JSON—handle missing content-type and parse failures properly in Flask APIs."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## BadRequest: invalid JSON

```bash
$ curl -X POST http://localhost:5000/api -d '{bad json}' -H 'Content-Type: application/json'
Traceback (most recent call last):
  ...
werkzeug.exceptions.BadRequest: 400 Bad Request: Failed to decode JSON object
```

### Why this happens

The client sent malformed JSON or incorrect `Content-Type`. `request.get_json()` attempts to parse the body and raises on invalid data.

### Fix

- Validate JSON with `silent=True` or catch exceptions and return a 400 with a clear message.
- Enforce content type and schema.

#### Wrong code

```python
from flask import Flask, request
app = Flask(__name__)

@app.post('/api')
def api():
    data = request.get_json()  # may raise
    return data['x']
```

#### Fixed code

```python
from flask import Flask, request, jsonify
app = Flask(__name__)

@app.post('/api')
def api():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify(error='invalid json'), 400
    return jsonify(x=data.get('x'))
```
