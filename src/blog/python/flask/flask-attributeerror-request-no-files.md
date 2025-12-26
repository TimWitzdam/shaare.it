---
title: "AttributeError: request has no attribute 'files'"
description: "Why request.files appears missing in Flask and how HTTP methods, Content-Type, and client code affect file uploads."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: request has no attribute 'files'

```bash
$ python - <<'PY'
from flask import Flask, request
app = Flask(__name__)
@app.route('/upload', methods=['POST'])
def upload():
    return str(hasattr(request, 'files'))
with app.test_client() as c:
    r = c.post('/upload', data=b'plain', headers={'Content-Type': 'text/plain'})
    print(r.data)
PY
b'False'
```

### Why this happens

Flask exposes file uploads through `request.files` only when the incoming request uses `multipart/form-data` with a valid boundary and the server sees file parts. If your client sends `text/plain`, JSON, or a malformed multipart body, `request.files` will be empty. In standard Flask, `request` is a `LocalProxy` to a `Request` object with many attributes, including `.files`. So an error message claiming the attribute is missing usually means you’re inspecting a different object (like a mocked request), you’re outside a request context, or you are misreading an exception caused by something else.

Common causes:

- Wrong HTTP method (GET instead of POST).
- Missing or incorrect `Content-Type: multipart/form-data; boundary=...`.
- Using `fetch` in JS and manually setting `Content-Type`, which prevents the browser from adding the boundary.
- Attempting to access `request.files` outside an active request context.

### Fix

- Use `POST` and send a proper `multipart/form-data` body with a boundary.
- In browser code, construct a `FormData` and do not set the `Content-Type` header manually; the browser will set it.
- In Flask tests, pass a file via `data={'file': (io.BytesIO(b'data'), 'name.txt')}`.
- Ensure you access `request.files` inside a view function or an active request context (`with app.test_request_context():`).

#### Wrong code

```python
# Client-side JavaScript (incorrect)
fetch('/upload', {
  method: 'POST',
  headers: { 'Content-Type': 'multipart/form-data' }, // Wrong: boundary missing
  body: new Blob(['hello'])
});
```

#### Fixed code

```javascript
// Correct: let the browser set Content-Type with boundary
const fd = new FormData();
fd.append("file", fileInput.files[0]);
fetch("/upload", { method: "POST", body: fd });
```

Server-side test example:

```python
import io
from flask import Flask, request
app = Flask(__name__)
@app.route('/upload', methods=['POST'])
def upload():
    f = request.files.get('file')
    return 'ok' if f else 'no-file'

with app.test_client() as c:
    r = c.post('/upload', data={'file': (io.BytesIO(b'data'), 'x.txt')})
    assert r.data == b'ok'
```

`request.files` is always present on Flask’s `Request`, but it’s empty unless the client sends a real multipart/form-data upload. Align method, headers, and body format to make file uploads work.
