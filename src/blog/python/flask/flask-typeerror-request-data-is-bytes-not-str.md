---
title: "TypeError: request.data is bytes, not str"
description: "Understanding bytes vs. str when reading request bodies in Flask and how to decode correctly."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: request.data is bytes, not str

```bash
$ python -c "from flask import Flask, request; app=Flask(__name__); @app.post('/')\ndef ix():\n    body = request.data + 'x'\n    return 'ok'\n; app.test_client().post('/', data='hi')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: can't concat str to bytes
```

### Why this happens

`request.data` returns raw bytes of the request body. Concatenating it with a Python `str` or passing it to functions expecting `str` will raise `TypeError`. Confusion between bytes and text happens frequently with manual body parsing, custom middleware, or when not using `request.get_json()` for JSON payloads.

### Fix

Decode bytes to text with the correct charset (usually UTF-8) or work with bytes consistently. Prefer structured helpers: `request.get_json()` for JSON, `request.form` for `application/x-www-form-urlencoded`, and `request.files` for multipart uploads.

#### Wrong code

```python
from flask import Flask, request

app = Flask(__name__)

@app.post('/')
def index():
    # ❌ str + bytes
    body = request.data + "\n"
    return body
```

#### Fixed code

```python
from flask import Flask, request

app = Flask(__name__)

@app.post('/')
def index():
    # ✅ decode bytes to str using charset
    text = request.data.decode(request.charset or "utf-8")
    return text + "\n"
```

### Additional notes

- Use `request.get_data(as_text=True)` to get text directly.
- When returning bytes from a view, ensure the `Response` mimetype and charset are set appropriately.
- For JSON, prefer `request.get_json(force=False, silent=False)` to handle content types and errors safely.
