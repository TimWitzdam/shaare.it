---
title: "RuntimeError: Headers already sent"
description: "Modifying headers after the response has begun causes a runtime error in Flask/Werkzeug."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## RuntimeError: Headers already sent

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "app.py", line 20, in stream
    response.headers['X-Late'] = '1'
RuntimeError: Headers already sent
```

### Why this happens

Once Flask starts sending the response body to the client (especially with streaming), headers are finalized and cannot be changed. Trying to mutate headers after the first bytes are sent results in a `RuntimeError`.

### Fix

Set headers before returning the response, or in `before_request`/`after_request`. For streaming, preconfigure headers on the response object you return.

#### Wrong code

```python
from flask import Flask, Response
app = Flask(__name__)

@app.route('/stream')
def stream():
    def generate():
        yield 'chunk1\n'
        # Too late to set headers
        resp.headers['X-Late'] = '1'
        yield 'chunk2\n'
    resp = Response(generate(), mimetype='text/plain')
    return resp
```

#### Fixed code

```python
from flask import Flask, Response
app = Flask(__name__)

@app.route('/stream')
def stream():
    def generate():
        yield 'chunk1\n'
        yield 'chunk2\n'
    resp = Response(generate(), mimetype='text/plain')
    resp.headers['X-Ready'] = '1'
    return resp
```

### Tip

Avoid mutating headers in generators; instead, configure them on the Response before yielding.
