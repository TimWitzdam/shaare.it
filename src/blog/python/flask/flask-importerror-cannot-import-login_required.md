---
title: "ImportError: cannot import name 'login_required'"
description: "Missing flask-login installation or incorrect import path for the login_required decorator."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: login_required

```bash
$ python -c "from flask_login import login_required"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'login_required' from 'flask_login'
```

### Why this happens

The `flask-login` package may not be installed in your active environment, or you’re importing from the wrong module. Another possibility is local shadowing: a file named `flask_login.py` in your project hides the real package.

### Fix

Install `flask-login` and import from `flask_login`. Ensure no local shadowing files exist.

#### Wrong code

```python
# wrong.py
from flask_login import LoginRequired  # wrong name/case
```

#### Fixed code

```python
# app.py
from flask import Flask
from flask_login import LoginManager, login_required

app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev'
login_manager = LoginManager(app)

@app.get('/protected')
@login_required
def protected():
    return {'ok': True}
```

### Notes

- Verify installation: `pip show flask-login`.
- Check capitalization and exact names in imports.
