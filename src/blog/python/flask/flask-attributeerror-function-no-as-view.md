---
title: "AttributeError: 'function' object has no attribute 'as_view'"
description: "Use class-based views with MethodView properly—avoid calling as_view on functions in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: as_view on function

```bash
$ flask run
Traceback (most recent call last):
  ...
AttributeError: 'function' object has no attribute 'as_view'
```

### Why this happens

`as_view` belongs to `MethodView` subclasses, not regular functions. Calling it on a function indicates confusion between function-based and class-based views.

### Fix

- Subclass `MethodView` and call `as_view('name')` on the class, then add a URL rule.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

def users():
    return 'users'

app.add_url_rule('/users', view_func=users.as_view('users'))
```

#### Fixed code

```python
from flask import Flask
from flask.views import MethodView
app = Flask(__name__)

class UsersView(MethodView):
    def get(self):
        return 'users'

app.add_url_rule('/users', view_func=UsersView.as_view('users'))
```
