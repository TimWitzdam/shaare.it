---
title: "ImportError: cannot import name 'url_for' from 'flask'"
description: "Unpacking url_for import errors caused by shadowing, environment mismatches, and circular imports in Flask apps."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: cannot import name 'url_for' from 'flask'

```bash
$ python -c "from flask import url_for"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'url_for' from 'flask' (unknown location)
```

### Why this happens

- Local shadowing by a `flask.py` file or `flask/` directory.
- Flask not installed or wrong interpreter selected.
- Circular import: importing `url_for` in a module imported during app creation.

### Fix

- Remove local shadowing files/folders.
- Use the correct environment and verify Flask installation.
- Import `url_for` in view modules and avoid importing your app inside them.

#### Wrong code

```python
# nav.py
from flask import url_for
from app import app

links = [
    url_for('index'),  # Evaluated at import time (no app context)
]
```

#### Fixed code

```python
# nav.py
from flask import url_for

def get_links():
    return [url_for('index')]

# usage inside a request/app context
with app.app_context():
    get_links()
```

Keep imports clean, avoid cycles, and call `url_for` only when a context is active.
