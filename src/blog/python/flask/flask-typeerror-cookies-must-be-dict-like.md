---
title: "TypeError: cookies must be a dict-like mapping"
description: "Setting or reading cookies incorrectly leads to TypeError; learn the correct mapping usage."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: cookies must be a dict-like mapping

```bash
$ python -c "from flask import Flask, make_response; app=Flask(__name__); r=make_response('ok'); r.set_cookie('session', ['x'])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: cookie value must be a string
```

### Why this happens

Cookies must be strings; attempting to pass non-string types (lists, dicts, objects) or treating the cookies interface like a non-mapping structure triggers `TypeError`. Similarly, trying to bulk assign cookies using incorrect types causes issues.

### Fix

Convert values to strings and use `response.set_cookie(key, value, **options)` for single cookies. For multiple cookies, set them individually. Read cookies from `request.cookies` (a dict-like) using keys.

#### Wrong code

```python
from flask import Flask, make_response

app = Flask(__name__)

@app.get('/')
def index():
    resp = make_response('ok')
    # ❌ non-string value
    resp.set_cookie('user', {"id": 1})
    return resp
```

#### Fixed code

```python
from flask import Flask, make_response

app = Flask(__name__)

@app.get('/')
def index():
    resp = make_response('ok')
    # ✅ convert to string
    resp.set_cookie('user', "1", max_age=3600, httponly=True)
    return resp
```

### Additional notes

- Use JSON or signed session cookies to store structured data server-side instead of stuffing complex objects into cookies.
- Prefer `flask.session` for per-user data; it handles signing and serialization.
- Keep cookie sizes small (<4KB) and avoid sensitive data.
