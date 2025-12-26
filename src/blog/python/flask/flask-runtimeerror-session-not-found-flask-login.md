---
title: "RuntimeError: A requested session was not found (Flask-Login)"
description: "Initialize Flask-Login properly and configure session—avoid missing session errors on protected routes in Flask apps."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## RuntimeError: session not found

```bash
$ flask run
Traceback (most recent call last):
  ...
RuntimeError: A requested session was not found
```

### Why this happens

Flask-Login relies on session and `SECRET_KEY`. If sessions are disabled, misconfigured, or not accessible (e.g., during API calls without cookies), protected routes will fail.

### Fix

- Configure `SECRET_KEY` and ensure the client sends cookies; use `login_required` correctly.

#### Wrong code

```python
@login_required
@app.route('/private')
def private():
    return 'secret'
```

#### Fixed code

```python
from flask import Flask
from flask_login import LoginManager, login_required

app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev'
login_manager = LoginManager(app)

@app.route('/private')
@login_required
def private():
    return 'secret'
```
