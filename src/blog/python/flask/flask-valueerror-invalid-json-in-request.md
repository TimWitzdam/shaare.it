---
title: "ValueError: invalid JSON in request.get_json()"
description: "Diagnosing bad JSON payloads in Flask: Content-Type, charset, and strict parsing rules that trigger errors."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ValueError: invalid JSON in request.get_json()

```bash
$ python - <<'PY'
from flask import Flask, request
app = Flask(__name__)
@app.route('/api', methods=['POST'])
def api():
    return str(bool(request.get_json()))
with app.test_client() as c:
    r = c.post('/api', data=b"{'x':1}", headers={'Content-Type':'application/json'})
    print(r.status_code)
PY
400
```

### Why this happens

`request.get_json()` expects valid JSON, a correct `Content-Type: application/json`, and typically UTF-8 encoding. Single quotes aren’t valid in JSON, trailing commas or comments are disallowed, and incorrect charsets or malformed bodies cause parsing failures. Depending on `silent` and `force` parameters, Flask may raise a `BadRequest` or return `None`.

### Fix

- Ensure clients send proper JSON (double quotes, valid syntax) and set `Content-Type: application/json; charset=UTF-8`.
- In tests, pass `json={'x': 1}` to the test client to let it set headers and encode properly.
- Use `request.get_json(silent=True)` to avoid exceptions when input may be malformed; handle `None` explicitly.

#### Wrong code

```python
@app.route('/api', methods=['POST'])
def api():
    data = request.get_json()  # Raises on bad JSON
    return data['x']
```

#### Fixed code

```python
@app.route('/api', methods=['POST'])
def api():
    data = request.get_json(silent=True)
    if not isinstance(data, dict) or 'x' not in data:
        return {'error': 'invalid json'}, 400
    return {'x': data['x']}
```

Test client tip:

```python
with app.test_client() as c:
    r = c.post('/api', json={'x': 1})  # Proper JSON
    assert r.status_code == 200
```

Validate payloads and use `silent=True` if you expect potentially invalid JSON, returning explicit 4xx errors instead of 500s.
