---
title: "AttributeError: request has no attribute 'files'"
description: "Incorrect imports or shadowing can make request look wrong; use correct access for file uploads."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError on request.files

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "/path/to/app.py", line 14, in upload
    file = request.files['avatar']
AttributeError: 'Request' object has no attribute 'files'
```

### Why this happens

`request.files` exists on Flask’s request when the client sends a `multipart/form-data` body. If you see this error, it’s likely due to importing the wrong `request` (e.g., from `requests`), shadowing, or using a test client request without proper content type.

### Fix

Ensure `from flask import request` is used and that the client sends `multipart/form-data` with file parts. Validate presence of keys and handle missing files gracefully.

#### Wrong code

```python
# app.py
from flask import Flask
from requests import request  # shadows flask.request!

app = Flask(__name__)

@app.post('/upload')
def upload():
    file = request.files['avatar']  # AttributeError
    return {'ok': True}
```

#### Fixed code

```python
# app.py
from flask import Flask, request
app = Flask(__name__)

@app.post('/upload')
def upload():
    if 'avatar' not in request.files:
        return {'error': 'no file'}, 400
    file = request.files['avatar']
    file.save('/tmp/avatar.png')
    return {'ok': True}
```

### Tips

- In tests, use `data={'avatar': (io.BytesIO(b'abc'), 'a.png')}` and `content_type='multipart/form-data'`.
- Don’t mix `requests` library with Flask’s `request` name.
