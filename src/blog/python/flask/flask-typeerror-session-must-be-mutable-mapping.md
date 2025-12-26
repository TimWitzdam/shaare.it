---
title: "TypeError: session must be a mutable mapping"
description: "Assigning non-mapping types or immutable structures to session keys raises TypeError; learn proper usage."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: session must be a mutable mapping

```bash
$ python -c "from flask import Flask, session; app=Flask(__name__); app.secret_key='x'; with app.test_request_context(): session.update(123)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: mapping update expected at least a mapping or iterable of key/value pairs
```

### Why this happens

`session` behaves like a dict. Assigning incompatible types or trying to replace `session` with a non-mapping raises `TypeError`. This also happens when forgetting to set `SECRET_KEY`, causing session to be unavailable in some contexts.

### Fix

Treat `session` as a dict: set keys to serializable values (JSON-friendly). Ensure `SECRET_KEY` is configured. Don’t reassign `session` itself; mutate via item assignment or `update()` with dicts.

#### Wrong code

```python
from flask import Flask, session

app = Flask(__name__)

@app.get('/')
def index():
    session = [1, 2, 3]  # ❌ shadowing and wrong type
    return "ok"
```

#### Fixed code

```python
from flask import Flask, session

app = Flask(__name__)
app.secret_key = "super-secret"

@app.get('/')
def index():
    # ✅ assign JSON-serializable values
    session["user_id"] = 42
    return "ok"
```

### Additional notes

- Server-side session backends may have stricter serialization; stick to primitives.
- Avoid storing large blobs in session; it increases cookie size and bandwidth.
- Clear session with `session.clear()` on logout.
