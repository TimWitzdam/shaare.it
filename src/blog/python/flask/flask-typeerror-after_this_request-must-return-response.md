---
title: "TypeError: after_this_request callback must return a response"
description: "Callbacks registered with after_this_request must return the response object they modify."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: after_this_request callback must return a response

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "app.py", line 10, in index
    @after_this_request
  File "/.../flask/helpers.py", line ..., in after_this_request
TypeError: after_this_request handler must return response
```

### Why this happens

`after_this_request` registers a function that receives the response object and must return it (potentially modified). If the callback returns `None` or something else, Flask raises `TypeError`, because the middleware chain expects a response to continue processing.

### Fix

Ensure your callback accepts a `response` argument and returns the same (or a new) response.

#### Wrong code

```python
from flask import Flask, after_this_request
app = Flask(__name__)

@app.route('/')
def index():
    @after_this_request
    def add_header():
        # Forgot to return response
        response.headers['X-Thing'] = 'value'
    return 'Hello'
```

#### Fixed code

```python
from flask import Flask, after_this_request
app = Flask(__name__)

@app.route('/')
def index():
    @after_this_request
    def add_header(response):
        response.headers['X-Thing'] = 'value'
        return response
    return 'Hello'
```

### Notes

- Use `before_request` for pre-processing; `after_this_request` is for per-request post-processing.
- If you need app-wide post-processing, consider `after_request`. Those also must return the response.
