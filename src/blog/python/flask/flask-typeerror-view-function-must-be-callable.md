---
title: "TypeError: view function must be callable"
description: "Registering a view with non-callable objects triggers TypeError; use proper functions."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: view function must be callable

```bash
$ python -c "from flask import Flask; app=Flask(__name__); app.add_url_rule('/', view_func='not-func')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: view function must be callable
```

### Why this happens

A view function is the function Flask calls to produce a response. Passing strings or other non-callable values as `view_func` raises `TypeError`.

### Fix

Provide a proper function reference. If using class-based views, use `MyView.as_view('name')` which returns a callable.

#### Wrong code

```python
from flask import Flask

app = Flask(__name__)

app.add_url_rule('/', view_func="home")  # ❌ string, not callable
```

#### Fixed code

```python
from flask import Flask

app = Flask(__name__)

@app.get('/')
def home():
    return "ok"

# Or
# app.add_url_rule('/', view_func=home)
```

### Additional notes

- For class views: `app.add_url_rule('/', view_func=MyView.as_view('home'))`.
- Ensure decorators return a callable, not `None`.
- Verify endpoints don’t collide; use unique names.
