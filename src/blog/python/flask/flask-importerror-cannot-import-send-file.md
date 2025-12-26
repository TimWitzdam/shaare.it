---
title: "ImportError: cannot import name 'send_file' from 'flask'"
description: "Resolving send_file import failures: shadowed Flask packages, environment mix-ups, and safer import structure."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: cannot import name 'send_file' from 'flask'

```bash
$ python -c "from flask import send_file"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'send_file' from 'flask' (unknown location)
```

### Why this happens

The usual suspects apply: local shadowing (a `flask.py` file or `flask/` directory in your project), installing Flask in a different interpreter than you’re using, or creating circular imports that cause partially-initialized modules. Since `send_file` is a top-level Flask import, these issues often manifest early.

### Fix

- Ensure no local files or folders are named `flask`.
- Verify the active environment: `python -m pip show flask` and align your interpreter.
- Import `send_file` only in your route modules; avoid importing the app within those modules.

#### Wrong code

```python
# files.py
from app import app
from flask import send_file

@app.route('/download')
def download():
    return send_file('data.csv')
```

#### Fixed code

```python
# files.py
from flask import send_file

def register(app):
    @app.route('/download')
    def download():
        return send_file('data.csv')

# app/__init__.py
from flask import Flask
from .files import register
app = Flask(__name__)
register(app)
```

Keep imports simple, avoid cycles, and confirm your environment to prevent `ImportError`.
