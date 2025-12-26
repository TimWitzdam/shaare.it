---
title: "AttributeError: 'NoneType' object has no attribute 'route' (app not created)"
description: "Initialize the Flask app before using decorators—avoid NoneType route errors from bad order or failed factory in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: None route

```bash
$ flask run
Traceback (most recent call last):
  ...
AttributeError: 'NoneType' object has no attribute 'route'
```

### Why this happens

If `app` is `None` due to failed initialization or incorrect ordering (using `@app.route` before assigning `app`), decorators will attempt to call `route` on `None`.

### Fix

- Create the app first, then declare routes.
- For factories, don’t decorate at import time; register routes inside `create_app()`.

#### Wrong code

```python
@app.route('/')
def index():
    return 'OK'

from flask import Flask
app = Flask(__name__)
```

#### Fixed code

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'OK'
```
