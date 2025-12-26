---
title: "TypeError: make_response expected str, dict, or tuple"
description: "Creating responses from unsupported types raises TypeError; learn valid return values."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: make_response expected str, dict, or tuple

```bash
$ python -c "from flask import Flask, make_response; app=Flask(__name__); make_response(object())"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: The view function did not return a valid response
```

### Why this happens

`make_response` and view returns must be strings, dicts (JSON), tuples `(body, status, headers)`, or `Response` objects. Returning unsupported types raises errors during response creation.

### Fix

Return allowed types or convert custom objects to strings/JSON first. Use `jsonify` for dicts to ensure correct headers.

#### Wrong code

```python
from flask import Flask, make_response

app = Flask(__name__)

@app.get('/')
def index():
    return object()  # ❌ unsupported
```

#### Fixed code

```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.get('/')
def index():
    # ✅ dict via jsonify
    return jsonify({"message": "ok"})
```

### Additional notes

- Tuples: `(body, status)` or `(body, status, headers)`.
- Use `Response` for streaming or custom MIME control.
- For complex objects, serialize with a schema library (Marshmallow, pydantic) then `jsonify`.
