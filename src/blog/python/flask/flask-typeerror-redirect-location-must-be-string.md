---
title: "TypeError: redirect location must be a string"
description: "Flask redirect expects a string URL or response object; using the wrong type triggers TypeError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: redirect location must be a string

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "app.py", line 12, in index
    return redirect(12345)
TypeError: location must be a string
```

### Why this happens

`flask.redirect()` expects a string URL, a Werkzeug/Flask response, or an object implementing the response interface. Passing integers, dicts, or other types causes Flask/Werkzeug to raise a `TypeError` while constructing the redirect response and `Location` header.

### Fix

Provide a valid string URL (absolute or relative) or use `url_for()` to build the path. If you meant to return JSON, use `jsonify()` instead of `redirect()`.

#### Wrong code

```python
from flask import Flask, redirect
app = Flask(__name__)

@app.route('/')
def index():
    # Mistakenly passing a number
    return redirect(12345)
```

#### Fixed code

```python
from flask import Flask, redirect, url_for
app = Flask(__name__)

@app.route('/')
def index():
    # Redirect to a valid endpoint
    return redirect(url_for('dashboard'))

@app.route('/dashboard')
def dashboard():
    return 'Welcome!'
```

### Notes

- `redirect('https://example.com')` is valid.
- `redirect(url_for('dashboard'))` is preferred for internal routes.
- If you have a response object already (e.g., `make_response`), you can pass that.
