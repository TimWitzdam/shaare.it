---
title: "NameError: name 'g' is not defined"
description: "Using flask.g safely: contexts, imports, and how to avoid NameError by accessing the proxy correctly."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## NameError: name 'g' is not defined

```bash
$ python - <<'PY'
from flask import Flask
app = Flask(__name__)
print(g)
PY
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
NameError: name 'g' is not defined
```

### Why this happens

`g` is provided by Flask as a context-local proxy stored in `flask.g`. If you reference `g` without importing it or outside an application/request context, you’ll get `NameError` or `RuntimeError`. It’s common when moving code into standalone modules or CLI scripts.

### Fix

- Import `g` explicitly: `from flask import g`.
- Use `with app.app_context():` for application-level data; use request handlers for request data.
- Don’t access `g` at import-time; use it inside functions after context is pushed.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

# Global scope access
g.user_id = 1
```

#### Fixed code

```python
from flask import g

def set_user():
    g.user_id = 1
```

Context example:

```python
from flask import Flask, g
app = Flask(__name__)

with app.app_context():
    g.x = 10
    assert g.x == 10
```

Remember: `g` is per-request/per-context. Import it and use it only when a context is active.
