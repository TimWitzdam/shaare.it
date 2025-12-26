---
title: "TypeError: jsonify is not a function"
description: "Common misuse of jsonify due to shadowing or wrong imports, and how to return JSON correctly in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: jsonify is not a function

```bash
$ python -c "from flask import Flask, jsonify; jsonify = {}; jsonify({'x':1})"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'dict' object is not callable
```

### Why this happens

This usually happens because `jsonify` has been shadowed by a variable, parameter, or import (e.g., `jsonify = {}`), or you imported the wrong symbol (e.g., `from flask.json import jsonify` incorrectly in older contexts). When `jsonify` stops being a callable function and becomes a dict or something else, Python raises a `TypeError` on call.

### Fix

Ensure you import `jsonify` from Flask and don’t reassign it. Use `return jsonify(data)` from within view functions and avoid name collisions.

#### Wrong code

```python
from flask import Flask, jsonify

app = Flask(__name__)

jsonify = {"shadow": True}  # ❌ shadowed

@app.get("/api")
def api():
    return jsonify({"ok": True})
```

#### Fixed code

```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.get("/api")
def api():
    # ✅ use true function
    return jsonify({"ok": True, "version": 1})
```

### Additional notes

- Avoid `return json.dumps(data)`; Flask won’t set MIME `application/json` automatically. Prefer `jsonify` or `make_response` with headers.
- If using Marshmallow or pydantic, serialize first, then `jsonify(serialized)`.
- Never mutate `jsonify` or import it under another name that might conflict.
