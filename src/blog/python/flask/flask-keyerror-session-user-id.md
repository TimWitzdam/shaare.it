---
title: "KeyError on session access: 'user_id'"
description: "Avoid KeyErrors when reading from session—use get() and validate presence before access in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## KeyError: session['user_id']

```bash
$ flask run
Traceback (most recent call last):
  ...
KeyError: 'user_id'
```

### Why this happens

Attempting to access a missing session key directly raises `KeyError`. This occurs when users aren’t logged in yet or the session was cleared.

### Fix

- Use `session.get('user_id')` and check for `None`.
- Redirect unauthenticated users or return 401.

#### Wrong code

```python
from flask import Flask, session
app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev'

@app.route('/')
def dashboard():
    uid = session['user_id']  # may raise
    return f'User {uid}'
```

#### Fixed code

```python
from flask import Flask, session, redirect, url_for
app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev'

@app.route('/')
def dashboard():
    uid = session.get('user_id')
    if not uid:
        return redirect(url_for('login'))
    return f'User {uid}'
```
