---
title: "werkzeug.exceptions.MethodNotAllowed: 405"
description: "Route methods must match HTTP verbs—diagnose 405 errors in Flask and fix method lists and forms."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## MethodNotAllowed: 405

```bash
$ curl -X POST http://localhost:5000/
<!doctype html><title>405 Method Not Allowed</title>
```

### Why this happens

You called a route with an HTTP method the route doesn’t accept. For example, `@app.route('/', methods=['GET'])` will reject POSTs.

### Fix

- Add the desired methods to the route or call the correct method.
- For HTML forms, ensure the form’s method matches the route.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return 'OK'
```

#### Fixed code

```python
from flask import Flask
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    return 'OK'
```
