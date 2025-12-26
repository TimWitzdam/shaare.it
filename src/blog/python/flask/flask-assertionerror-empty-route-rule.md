---
title: "AssertionError: Empty route rule"
description: "Defining a route with an empty string or None will trigger an assertion error in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AssertionError: Empty route rule

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "app.py", line 8, in <module>
    @app.route('')
AssertionError: url rule cannot be empty
```

### Why this happens

The routing system requires a non-empty string to create a URL rule. Using `''` or `None` leaves Flask unable to bind the route, so it asserts to avoid invalid configurations.

### Fix

Use `'/'` for the index route or provide a valid path segment for others.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

@app.route('')
def index():
    return 'Hello'
```

#### Fixed code

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello'
```

### Note

Ensure blueprint routes also start with a leading slash (e.g., `@bp.route('/list')`).
