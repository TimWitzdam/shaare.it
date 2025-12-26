---
title: "TypeError: url_for() got an unexpected keyword argument"
description: "Understanding url_for’s parameter rules and fixing unexpected keyword arguments in endpoint building."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: url_for() got an unexpected keyword argument

```bash
$ python -c "from flask import Flask, url_for; app=Flask(__name__); with app.test_request_context(): url_for('profile', unknow=1)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: url_for() got an unexpected keyword argument 'unknow'
```

### Why this happens

`url_for` only accepts arguments that match variable parts of the route’s URL rule or recognized special parameters like `_external` and `_scheme`. Passing unknown keyword arguments that don’t match the rule variables triggers a `TypeError`. Typos and mismatch between route variable names and `url_for` arguments are the usual cause.

### Fix

Pass only variables defined in the route, and use special flags with leading underscores. Check your route definitions and ensure argument names align exactly.

#### Wrong code

```python
from flask import Flask, url_for

app = Flask(__name__)

@app.get("/user/<int:user_id>")
def profile(user_id):
    return "ok"

with app.app_context():
    # ❌ 'uid' doesn’t exist in the rule
    url_for("profile", uid=5)
```

#### Fixed code

```python
from flask import Flask, url_for

app = Flask(__name__)

@app.get("/user/<int:user_id>")
def profile(user_id):
    return "ok"

with app.app_context():
    # ✅ match route variable name
    url_for("profile", user_id=5)
```

### Additional notes

- Use `_external=True` to build absolute URLs and `_scheme="https"` when needed.
- For blueprints, prefix endpoint names with the blueprint name unless you set `name="..."`.
- Inspect `app.url_map` to verify rules and variable components.
