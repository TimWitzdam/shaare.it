---
title: "KeyError: 'SECRET_KEY' not set"
description: "Sessions and CSRF rely on SECRET_KEY—how to configure it safely in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## KeyError: 'SECRET_KEY' not set

```bash
$ flask run
Traceback (most recent call last):
  ...
KeyError: 'SECRET_KEY'
```

### Why this happens

`SECRET_KEY` is required for session signing and CSRF protection. Accessing `session` or initializing CSRF without setting it leads to failures.

### Fix

- Set `app.config['SECRET_KEY']` or use environment variables and load them via `app.config.from_envvar`/`from_mapping`.
- Use a strong random key in production.

#### Wrong code

```python
from flask import Flask, session
app = Flask(__name__)

@app.route("/")
def index():
    session['x'] = 1  # KeyError if SECRET_KEY missing
    return "OK"
```

#### Fixed code

```python
from flask import Flask, session
app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev-secret-change-me'

@app.route("/")
def index():
    session['x'] = 1
    return "OK"
```
