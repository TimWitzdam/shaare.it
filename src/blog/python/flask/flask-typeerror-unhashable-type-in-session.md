---
title: "TypeError: unhashable type when storing in session"
description: "Why putting complex objects into Flask sessions can fail, and how to serialize safely with cookies and server-side stores."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: unhashable type when storing in session

```bash
$ python - <<'PY'
from flask import Flask, session
app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev'
@app.route('/')
def index():
    class X: pass
    session['obj'] = {X(): 1}  # dict with non-hashable key
    return 'ok'
with app.test_client() as c:
    r = c.get('/')
    print(r.status_code)
PY
500
```

### Why this happens

Flask’s default session implementation stores JSON-serializable data in a signed cookie. If you attempt to store Python objects, sets, or dicts with non-hashable keys, or data types that aren’t natively serializable, you can hit `TypeError` during JSON encoding or when constructing invalid structures. Even if the data were serializable, cookies have size limits and should contain small, simple values.

### Fix

- Store only primitives (str, int, float, bool), small lists/dicts with string keys.
- Serialize complex objects yourself (e.g., to strings or IDs) and reconstruct them server-side.
- Prefer server-side session stores (Redis, database) for larger or complex data and keep the cookie as a minimal identifier.

#### Wrong code

```python
from flask import session
class User: pass

# Storing an instance directly is unsafe
session['user'] = User()
```

#### Fixed code

```python
# Store an ID or a small JSON-safe dict
session['user_id'] = 42
# Or
session['prefs'] = { 'theme': 'dark', 'lang': 'en' }
```

Server-side approach:

```python
# Pseudocode for server-side sessions
session['cart_id'] = cart.id  # Cookie keeps only identifier
# Retrieve cart from DB/Redis on each request using cart_id
```

Keep session content small and JSON-serializable to avoid `TypeError` and oversized cookies.
