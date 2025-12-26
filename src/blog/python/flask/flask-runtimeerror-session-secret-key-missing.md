---
title: "RuntimeError: The session is unavailable because no secret key was set"
description: "Flask sessions need SECRET_KEY—configure it securely for dev and prod to avoid runtime errors."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## RuntimeError: session secret key missing

```bash
$ flask run
Traceback (most recent call last):
  ...
RuntimeError: The session is unavailable because no secret key was set.
```

### Why this happens

Flask uses `SECRET_KEY` to sign session cookies. If it’s not configured, any access to `session` will fail. This often happens in new projects or when environment variables aren’t loaded.

### Fix

- Set a `SECRET_KEY` in config and load it before handling requests.
- Use a strong random key for production and avoid committing secrets to source control.

#### Wrong code

```python
from flask import Flask, session
app = Flask(__name__)

@app.route('/')
def index():
    session['x'] = 1  # fails
    return 'OK'
```

#### Fixed code

```python
from flask import Flask, session
app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev-change-me'

@app.route('/')
def index():
    session['x'] = 1
    return 'OK'
```
