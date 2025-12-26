---
title: "KeyError: missing key in request.form"
description: "Why accessing request.form['field'] can raise KeyError and how to handle optional fields and content types properly."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## KeyError: missing key in request.form

```bash
$ python - <<'PY'
from flask import Flask, request
app = Flask(__name__)
@app.route('/submit', methods=['POST'])
def submit():
    return request.form['name']
with app.test_client() as c:
    r = c.post('/submit', data={})
    print(r.status_code)
PY
500
```

### Why this happens

`request.form` contains form fields from `application/x-www-form-urlencoded` or `multipart/form-data` requests. Accessing a missing key raises `KeyError`, which becomes a 500 error if not handled. This is common with optional fields, client mistakes, or when the request body isn’t a form at all (e.g., JSON).

### Fix

- Use `.get('name')` with defaults for optional fields.
- Validate required fields and return 400 when missing.
- Ensure clients send the expected content type, not JSON.

#### Wrong code

```python
@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    return f"Hello {name}"
```

#### Fixed code

```python
from flask import abort

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name')
    if not name:
        abort(400, description='name is required')
    return f"Hello {name}"
```

If you expect JSON:

```python
@app.route('/submit', methods=['POST'])
def submit_json():
    data = request.get_json(silent=True) or {}
    name = data.get('name')
    if not name:
        return {'error': 'name is required'}, 400
    return {'hello': name}
```

Check content type and handle optional vs required fields to avoid `KeyError`.
