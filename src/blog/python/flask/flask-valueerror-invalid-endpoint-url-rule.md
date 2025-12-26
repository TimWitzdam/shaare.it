---
title: "ValueError: invalid endpoint or URL rule in Flask"
description: "Why malformed rules or endpoints cause ValueError, and how to define clean routes and build URLs safely."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ValueError: invalid endpoint or URL rule in Flask

```bash
$ python - <<'PY'
from flask import Flask, url_for
app = Flask(__name__)
@app.route('no-leading-slash')
def x(): return 'x'
with app.app_context():
    print(url_for('missing'))
PY
Traceback (most recent call last):
  File "<stdin>", line 6, in <module>
ValueError: invalid endpoint: missing
```

### Why this happens

Two common cases:

- Invalid or malformed URL rules (e.g., missing leading slash, mismatched converters).
- Calling `url_for` with an endpoint that doesn’t exist (typo, unregistered blueprint, or registration order issues).

### Fix

- Ensure all route rules start with `/` and use valid converters.
- Double-check endpoint names and blueprint prefixes; for blueprints, endpoint is `blueprint_name.view_func_name`.
- Import and register blueprints before calling `url_for`.

#### Wrong code

```python
from flask import Flask, url_for
app = Flask(__name__)
@app.route('users')  # Missing leading slash
def users():
    return 'ok'

with app.app_context():
    url_for('admin.dashboard')  # admin blueprint not registered
```

#### Fixed code

```python
from flask import Flask, url_for
app = Flask(__name__)
@app.route('/users')
def users():
    return 'ok'

# After registering the blueprint
# url_for('admin.dashboard') works
```

For blueprints:

```python
bp = Blueprint('admin', __name__)
@bp.route('/dashboard')
def dashboard():
    return 'ok'

app.register_blueprint(bp, url_prefix='/admin')
# Endpoint is 'admin.dashboard'
```

Keep route rules valid and ensure endpoints exist before invoking `url_for`.
