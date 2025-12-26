---
title: "TypeError: get_json silent must be a boolean"
description: "Using non-boolean types for get_json's silent parameter raises TypeError; learn correct flags."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: get_json silent must be a boolean

```bash
$ python -c "from flask import Flask, request; app=Flask(__name__); @app.post('/')\ndef ix(): request.get_json(silent='yes'); return 'ok'\n; app.test_client().post('/', json={'x':1})"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: silent must be a boolean
```

### Why this happens

`request.get_json` accepts `silent=True/False`; passing strings or other types results in a `TypeError`. This is common when reading environment variables or config values as strings and forwarding them directly.

### Fix

Pass proper booleans. If you need flexibility, parse strings to booleans before calling.

#### Wrong code

```python
from flask import Flask, request

app = Flask(__name__)

@app.post('/')
def index():
    payload = request.get_json(silent="1")  # ❌ wrong type
    return str(payload)
```

#### Fixed code

```python
from flask import Flask, request

app = Flask(__name__)

@app.post('/')
def index():
    payload = request.get_json(silent=False)  # ✅ boolean
    return str(payload)
```

### Additional notes

- `silent=True` returns `None` instead of raising on invalid JSON.
- Prefer content type `application/json`; otherwise set `force=True` to ignore MIME checks (carefully).
- Validate input schema after parsing.
