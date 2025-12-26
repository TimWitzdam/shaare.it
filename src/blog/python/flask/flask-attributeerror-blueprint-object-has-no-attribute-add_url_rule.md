---
title: "AttributeError: Blueprint object has no attribute 'add_url_rule'"
description: "Using Blueprint incorrectly or shadowing the symbol can cause missing methods like add_url_rule."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: Blueprint has no add_url_rule

```bash
$ python -c "from flask import Blueprint; bp = Blueprint('x', __name__); bp.add_url_rule('/x', view_func=lambda: 'x')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'Blueprint' object has no attribute 'add_url_rule'
```

### Why this happens

You likely shadowed `Blueprint` with a different class or imported from the wrong module, or you instantiated something else and named it `bp`. In normal Flask, `Blueprint` does have `add_url_rule`.

### Fix

Ensure you import `Blueprint` from `flask` and don’t override it. Alternatively, use the decorator form `@bp.route('/x')` for clarity.

#### Wrong code

```python
from myapp.blueprint import Blueprint  # not Flask's Blueprint
bp = Blueprint('x')

bp.add_url_rule('/x', view_func=lambda: 'x')
```

#### Fixed code

```python
from flask import Blueprint
bp = Blueprint('x', __name__)

@bp.route('/x')
def x():
    return 'x'
```

### Note

Register the blueprint on the app: `app.register_blueprint(bp)`, otherwise routes won’t be active.
