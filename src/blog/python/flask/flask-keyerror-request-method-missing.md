---
title: "KeyError: 'REQUEST_METHOD' in WSGI environ"
description: "WSGI requests must be valid—fix custom middleware, test contexts, and request building in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## KeyError: REQUEST_METHOD missing

```bash
$ flask run
Traceback (most recent call last):
  ...
KeyError: 'REQUEST_METHOD'
```

### Why this happens

Custom middleware or test setups that create a WSGI environ without required keys can cause this error. Flask expects `REQUEST_METHOD`, `PATH_INFO`, and other WSGI variables. Manually constructing requests or misusing the test client may omit them.

### Fix

- Use Flask’s test client (`app.test_client()`) or `app.test_request_context()` to generate valid requests.
- Ensure middleware preserves core WSGI keys and delegates correctly.

#### Wrong code

```python
from flask import Flask, Request
app = Flask(__name__)

# building environ by hand incorrectly
env = {}
req = Request(env)  # raises
```

#### Fixed code

```python
from flask import Flask
app = Flask(__name__)

with app.test_request_context('/'):
    from flask import request
    print(request.method)
```
