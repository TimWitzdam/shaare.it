---
title: "TypeError: decorator used without parentheses"
description: "Calling parameterized decorators incorrectly leads to unexpected TypeError at import time."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: decorator misuse

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "/path/to/app.py", line 10, in <module>
TypeError: login_required() missing 1 required positional argument: 'f'
```

### Why this happens

Some decorators (like role-based access or custom wrappers) are factories that return a decorator when called with arguments. Using them as plain decorators without parentheses—or vice versa—causes `TypeError`.

### Fix

Know whether your decorator requires configuration. Use `@decorator` for simple wrappers and `@decorator(args...)` for factories.

#### Wrong code

```python
# app.py
from flask import Flask
from myauth import login_required
app = Flask(__name__)

@app.get('/secret')
@login_required(role='admin')  # if login_required is not a factory
def secret():
    return {'ok': True}
```

#### Fixed code

```python
# app.py
from flask import Flask
from myauth import login_required
app = Flask(__name__)

@app.get('/secret')
@login_required  # correct if it’s a simple decorator
def secret():
    return {'ok': True}

# If it is a factory, then define it like:
# @login_required(role='admin')
```

### Tips

- Check decorator definitions; decide between factory vs simple wrapper.
- Add tests catching wrong decorator usage early.
