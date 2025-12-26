---
title: "TypeError: 'Response' object is not iterable"
description: "Flask expects iterable response bodies—fix generator/view return types and middleware in Flask apps."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: Response not iterable

```bash
$ flask run
Traceback (most recent call last):
  ...
TypeError: 'Response' object is not iterable
```

### Why this happens

Middleware or view code may try to iterate a `Response` object as if it were a list of bytes. WSGI expects the application to return an iterable of byte strings or a `Response` that implements the iterable interface correctly. Manually wrapping/altering the response incorrectly can trigger this error.

### Fix

- Return a proper Flask `Response` or a string/bytes. Avoid iterating over `Response` unless streaming.
- For generators, yield byte strings and let Flask build the response.

#### Wrong code

```python
from flask import Flask, Response
app = Flask(__name__)

@app.route('/')
def index():
    resp = Response('OK')
    for chunk in resp:  # wrong
        pass
    return resp
```

#### Fixed code

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'OK'
```
