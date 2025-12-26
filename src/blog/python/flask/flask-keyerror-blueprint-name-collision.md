---
title: "KeyError: blueprint name collision"
description: "Duplicate blueprint names overwrite entries in app.blueprints and cause KeyErrors."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## KeyError from duplicate blueprint names

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "/path/to/app.py", line 18, in <module>
    app.register_blueprint(bp2)
KeyError: 'api'
```

### Why this happens

Blueprint names must be unique across the application. Reusing the same name (e.g., `'api'`) for multiple blueprints leads to collisions in `app.blueprints`. Flask raises a `KeyError` or an assertion depending on version.

### Fix

Give each blueprint a unique name and, if needed, distinct URL prefixes. Avoid dynamically generating names; be explicit.

#### Wrong code

```python
# app.py
from flask import Flask, Blueprint
app = Flask(__name__)

bp1 = Blueprint('api', __name__)
@bp1.get('/v1/ping')
def ping1():
    return {'v': 1}

bp2 = Blueprint('api', __name__)  # duplicate name
@bp2.get('/v2/ping')
def ping2():
    return {'v': 2}

app.register_blueprint(bp1)
app.register_blueprint(bp2)  # KeyError
```

#### Fixed code

```python
# app.py
from flask import Flask, Blueprint
app = Flask(__name__)

bp1 = Blueprint('api_v1', __name__)
@bp1.get('/v1/ping')
def ping1():
    return {'v': 1}

bp2 = Blueprint('api_v2', __name__)
@bp2.get('/v2/ping')
def ping2():
    return {'v': 2}

app.register_blueprint(bp1)
app.register_blueprint(bp2)
```

### Tips

- Choose descriptive names: `admin`, `public`, `api_v1`, etc.
- Register in an app factory to keep names centralized.
