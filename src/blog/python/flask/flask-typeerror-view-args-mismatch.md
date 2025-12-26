---
title: "TypeError: view function takes X positional arguments but Y were given"
description: "Why Flask passes parameters from the URL to your view and how to fix mismatched function signatures."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: view function takes X positional arguments but Y were given

```bash
$ python - <<'PY'
from flask import Flask
app = Flask(__name__)
@app.route('/user/<int:id>')
def user():
    return str(id)
with app.test_request_context('/user/5'):
    print(user())
PY
Traceback (most recent call last):
  File "<stdin>", line 6, in <module>
TypeError: user() takes 0 positional arguments but 1 was given
```

### Why this happens

Flask injects path variables (like `<int:id>`) into the view function by passing them as arguments. If your function signature doesn’t accept those parameters, Python raises a `TypeError`. Similarly, extra parameters or mismatched names trigger the same error.

### Fix

- Ensure function parameters match the route variables by name and count.
- Use type converters (`<int:id>`, `<string:name>`) where appropriate and mirror names in your function.
- Avoid unused parameters or rename route placeholders to match your function arguments.

#### Wrong code

```python
@app.route('/user/<int:id>')
def user():  # Missing 'id' parameter
    return 'ok'
```

#### Fixed code

```python
@app.route('/user/<int:id>')
def user(id):
    return f"user={id}"
```

Multiple variables example:

```python
@app.route('/team/<string:name>/member/<int:mid>')
def member(name, mid):
    return f"{name}:{mid}"
```

Keep route placeholders and function arguments in sync to prevent `TypeError`.
