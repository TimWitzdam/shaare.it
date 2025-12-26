---
title: "RuntimeError: application not registered on db instance (Flask-SQLAlchemy)"
description: "Bind SQLAlchemy to the app correctly—avoid context and factory pitfalls."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## RuntimeError: app not registered on db

```bash
$ flask shell
>>> from yourapp import db
>>> db.session
Traceback (most recent call last):
  ...
RuntimeError: application not registered on db instance and no application bound to current context
```

### Why this happens

The `db` object isn’t initialized with the current app or you’re accessing it outside an application context.

### Fix

- Initialize extensions inside `create_app()` with `db.init_app(app)` and use `with app.app_context():` when needed.

#### Wrong code

```python
from flask_sqlalchemy import SQLAlchemy
from flask import Flask

db = SQLAlchemy()
app = Flask(__name__)
# forgot db.init_app(app)
```

#### Fixed code

```python
from flask_sqlalchemy import SQLAlchemy
from flask import Flask

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
    db.init_app(app)
    return app
```
