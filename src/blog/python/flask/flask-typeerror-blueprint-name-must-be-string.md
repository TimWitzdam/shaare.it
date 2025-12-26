---
title: "TypeError: Blueprint name must be a string"
description: "Blueprint construction requires a string name; passing wrong types raises TypeError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: Blueprint name must be a string

```bash
$ python -c "from flask import Blueprint; bp=Blueprint(123, __name__)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: name must be a string
```

### Why this happens

`Blueprint(name, import_name)` expects `name` to be a string used for endpoint prefixes and registration. Passing integers, lists, or other types will raise a `TypeError`. This can happen when using constants or enums without converting to strings.

### Fix

Provide a proper string name that uniquely identifies the blueprint. Stick to simple, lowercase names without spaces and avoid collisions.

#### Wrong code

```python
from flask import Blueprint

bp = Blueprint(123, __name__)
```

#### Fixed code

```python
from flask import Blueprint

bp = Blueprint("users", __name__)

@bp.get("/")
def index():
    return "users"
```

### Additional notes

- Blueprint names affect endpoint names: `users.index` for the example.
- Use `url_prefix` to control URL paths; blueprint name controls endpoint namespace, not URLs.
- Check `app.blueprints` and `app.url_map` to inspect registrations.
