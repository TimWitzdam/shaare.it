---
title: "TypeError: 'Response' object is not callable"
description: "Understanding why a Flask Response is not callable and how to correctly return or use it."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: 'Response' object is not callable

```bash
$ python -c "from flask import Flask, Response; app=Flask(__name__); r=Response('ok'); r()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'Response' object is not callable
```

### Why this happens

A Flask `Response` represents HTTP response data and metadata. It’s not a function and cannot be invoked. Calling `response()` indicates confusion between creating a response and returning it from a view, or between a view function and its return value. This often occurs when trying to reuse a response object across requests or accidentally adding parentheses after a variable holding a response.

### Fix

Return the response from your view, or work with its attributes (`data`, `status_code`, `headers`) without calling it. Create new responses per request; don’t reuse one globally.

#### Wrong code

```python
from flask import Flask, Response

app = Flask(__name__)

@app.get("/")
def index():
    r = Response("hello")
    # ❌ Incorrect: attempting to call the response
    return r()
```

#### Fixed code

```python
from flask import Flask, Response

app = Flask(__name__)

@app.get("/")
def index():
    r = Response("hello", status=200, mimetype="text/plain")
    # ✅ Return the response object directly
    return r
```

### Additional notes

- Use `flask.make_response()` if you need to ensure a proper response type from strings, dicts, or tuples.
- Avoid storing `Response` objects in globals; build them per request to ensure correct headers and content-length.
- When testing, inspect `resp.status_code`, `resp.headers`, and `resp.data`, not `resp()`.
