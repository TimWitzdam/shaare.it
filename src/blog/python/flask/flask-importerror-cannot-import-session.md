---
title: "ImportError: cannot import name 'session' from flask"
description: "Incorrect imports or missing Flask installation when using the session object."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError for session

```bash
$ python -c "from flask import session"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'session' from 'flask'
```

### Why this happens

This typically occurs when Flask is not installed in the environment, or there’s a local file named `flask.py` shadowing the package. In some cases, importing `session` from the wrong place (e.g., `from flask.session import session`) causes confusion—`session` is exposed at the `flask` package level.

### Fix

Install Flask into your active environment and ensure no local files shadow the import. Import `session` exactly as `from flask import session`.

#### Wrong code

```python
# wrong.py
from flask.session import session  # incorrect

session['user_id'] = 1
```

#### Fixed code

```python
# app.py
from flask import Flask, session
app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev'

@app.get('/set')
def set_user():
    session['user_id'] = 1
    return {'ok': True}
```

### Notes

- Verify your environment: `pip show flask`.
- Delete any local `flask.py` or `flask/` directories that shadow the real package.
