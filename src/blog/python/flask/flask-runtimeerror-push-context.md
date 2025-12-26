---
title: "RuntimeError: Attempted to push a context multiple times"
description: "Improper manual context management can lead to double-push or missing pop errors."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## RuntimeError: context push/pop misuse

```bash
$ python app.py
Traceback (most recent call last):
  File "app.py", line 25, in <module>
    ctx.push(); ctx.push()
RuntimeError: Context is already pushed
```

### Why this happens

Flask uses context stacks. Manually pushing the same context twice, or failing to pop it, raises `RuntimeError`. This surfaces in custom scripts or tests where developers call `app.app_context()` and `push()` repeatedly.

### Fix

Use `with app.app_context():` or `with app.test_request_context():` which correctly handles push/pop. Avoid holding global contexts; keep them scoped.

#### Wrong code

```python
# app.py
from flask import Flask
app = Flask(__name__)

ctx = app.app_context()
ctx.push()
ctx.push()  # wrong: pushing twice
print('config', app.config['SECRET_KEY'])
```

#### Fixed code

```python
# app.py
from flask import Flask
app = Flask(__name__)

with app.app_context():
    print('config', app.config.get('SECRET_KEY'))
```

### Notes

- Use context managers; they’re safer and exception-friendly.
- If you must manually manage, ensure `try/finally: ctx.pop()`.
