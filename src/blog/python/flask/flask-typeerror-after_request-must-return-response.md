---
title: "TypeError: after_request must return a response"
description: "After-request handlers must return the response object; returning wrong types raises errors."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: after_request must return a response

```bash
$ python -c "from flask import Flask; app=Flask(__name__); @app.after_request\ndef ar(resp): return None"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: after_request must return response
```

### Why this happens

`after_request` handlers receive the response and must return a response object. Returning `None`, strings, or unrelated types breaks the response pipeline and leads to `TypeError` or invalid response errors.

### Fix

Always return the modified or original `Response` instance from the handler.

#### Wrong code

```python
from flask import Flask

app = Flask(__name__)

@app.after_request
def add_header(response):
    response.headers["X-App"] = "demo"
    return None  # ❌ must return response
```

#### Fixed code

```python
from flask import Flask

app = Flask(__name__)

@app.after_request
def add_header(response):
    response.headers["X-App"] = "demo"
    return response  # ✅
```

### Additional notes

- Use `@app.teardown_request` for cleanup that doesn’t affect the response.
- Multiple `after_request` handlers chain; each must return the response.
- Be careful with streaming responses; headers must be set before the body is sent.
