---
title: "ValueError: invalid secure cookie data"
description: "Corrupted or mismatched session cookie without SECRET_KEY configuration triggers ValueError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ValueError: invalid secure cookie

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "/path/to/flask/sessions.py", line XX, in decode
ValueError: invalid secure cookie
```

### Why this happens

Flask signs session cookies using `SECRET_KEY`. If the key changes between runs, is unset, or the cookie is corrupted/tampered with, decoding fails, raising `ValueError`.

### Fix

Set a stable `SECRET_KEY` in configuration. Clear old cookies when changing keys. Avoid using different keys across app instances unless you share the key via env or config.

#### Wrong code

```python
# app.py
from flask import Flask, session
app = Flask(__name__)
# SECRET_KEY missing or random per run

@app.get('/')
def index():
    session['x'] = 1
    return {'ok': True}
```

#### Fixed code

```python
# app.py
from flask import Flask, session
app = Flask(__name__)
app.config['SECRET_KEY'] = 'replace-this-with-strong-secret'

@app.get('/')
def index():
    session['x'] = 1
    return {'ok': True}
```

### Tips

- Load secret from environment: `os.environ['SECRET_KEY']`.
- Rotate keys carefully; expect users to re-authenticate.
