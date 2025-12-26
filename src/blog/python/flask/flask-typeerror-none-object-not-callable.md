---
title: "TypeError: 'NoneType' object is not callable (decorator misuse)"
description: "How decorator order and return values in Flask can cause NoneType callable errors."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: 'NoneType' object is not callable

```bash
$ flask run
Traceback (most recent call last):
  ...
TypeError: 'NoneType' object is not callable
```

### Why this happens

This often comes from misusing decorators so that a view function is replaced by `None`. Common causes:

- Assigning the result of `app.route()` instead of using it as a decorator.
- Returning `None` from a factory that should return a callable.
- Overwriting the function name with a variable set to `None`.

### Fix

- Use `@app.route("/path")` above the function definition, don’t call `app.route()` and assign its return to the function name.
- Keep function names unique and avoid rebinding them.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

index = app.route("/")(None)  # wrong: replacing function with None
```

#### Fixed code

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
    return "Hello"

if __name__ == "__main__":
    app.run()
```
