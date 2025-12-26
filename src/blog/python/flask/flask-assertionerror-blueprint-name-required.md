---
title: "AssertionError: Blueprint name is required"
description: "Flask blueprints must have a non-empty name; missing or empty names cause assertion errors."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AssertionError: Blueprint name required

```bash
$ python -c "from flask import Blueprint; Blueprint('', __name__)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AssertionError: A blueprint name is required
```

### Why this happens

Blueprints use their name to derive endpoint prefixes and registration keys. An empty or missing name can collide with others or break routing, so Flask asserts that a valid, non-empty string is provided.

### Fix

Provide a meaningful name when creating a blueprint. Keep names unique across the app.

#### Wrong code

```python
from flask import Blueprint
bp = Blueprint('', __name__)
```

#### Fixed code

```python
from flask import Blueprint
bp = Blueprint('users', __name__)
```

### Tip

Names are used in endpoint naming (e.g., `users.list`). Choose short, stable names.
