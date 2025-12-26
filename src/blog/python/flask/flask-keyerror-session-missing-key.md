---
title: "KeyError: session missing key in Flask"
description: "Accessing session['key'] without setting it or after expiry leads to KeyError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## KeyError when reading from session

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "/path/to/app.py", line 20, in dashboard
    user_id = session['user_id']
KeyError: 'user_id'
```

### Why this happens

`KeyError` occurs when you access a non-existent key. In Flask, common causes are: the key was never set, it was cleared (`session.clear()`), the session cookie expired or changed, or the user is new/anonymous. Another source is setting the key only in certain flows (e.g., login) and assuming it exists elsewhere.

### Fix

Use `session.get('key')` with defaults and handle missing values gracefully. Ensure `SECRET_KEY` is configured (sessions won’t work correctly without it). Set keys consistently after login and remove them on logout.

#### Wrong code

```python
# app.py
from flask import Flask, session
app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev'

@app.get('/dashboard')
def dashboard():
    user_id = session['user_id']  # raises KeyError if not logged in
    return {'user_id': user_id}
```

#### Fixed code

```python
# app.py
from flask import Flask, session, redirect, url_for
app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev'

@app.get('/login-success')
def login_success():
    session['user_id'] = 42
    return redirect(url_for('dashboard'))

@app.get('/logout')
def logout():
    session.pop('user_id', None)
    return {'ok': True}

@app.get('/dashboard')
def dashboard():
    user_id = session.get('user_id')
    if user_id is None:
        return {'error': 'not logged in'}, 401
    return {'user_id': user_id}
```

### Tips

- Don’t store large objects in session; keep it small and serializable.
- Use `permanent` sessions if you rely on expiry, but be conscious of security implications.
