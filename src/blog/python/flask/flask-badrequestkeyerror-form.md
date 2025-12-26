---
title: "BadRequestKeyError: accessing form data"
description: "Handling missing form keys safely with request.form and default patterns in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## BadRequestKeyError on form access

```bash
$ curl -X POST http://localhost:5000/login -d "username=tim"
Traceback (most recent call last):
  ...
werkzeug.exceptions.BadRequestKeyError: 400 Bad Request: KeyError: 'password'
```

### Why this happens

Accessing `request.form['key']` for a missing key raises `BadRequestKeyError`. It’s typical when clients don’t send expected fields or typos occur.

### Fix

- Use `request.form.get('key')` with defaults and validate input.
- Return 400 with a helpful message when required fields are missing.

#### Wrong code

```python
from flask import Flask, request
app = Flask(__name__)

@app.post("/login")
def login():
    username = request.form['username']
    password = request.form['password']  # may raise
    return f"Welcome {username}"
```

#### Fixed code

```python
from flask import Flask, request, jsonify
app = Flask(__name__)

@app.post("/login")
def login():
    username = request.form.get('username')
    password = request.form.get('password')
    if not username or not password:
        return jsonify(error="username and password required"), 400
    return jsonify(message=f"Welcome {username}")
```
