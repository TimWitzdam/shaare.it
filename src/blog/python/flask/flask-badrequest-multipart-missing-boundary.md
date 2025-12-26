---
title: "BadRequest: multipart/form-data missing boundary"
description: "Diagnosing 400 Bad Request for file uploads: missing Content-Type boundary and client/server fixes."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## BadRequest: multipart/form-data missing boundary

```bash
$ python - <<'PY'
from flask import Flask, request
app = Flask(__name__)
@app.route('/upload', methods=['POST'])
def upload():
    return str(bool(request.files))
with app.test_client() as c:
    # Wrong: missing boundary
    r = c.post('/upload', data=b'raw-bytes', headers={'Content-Type': 'multipart/form-data'})
    print(r.status_code)
PY
400
```

### Why this happens

Multipart/form-data requests require a `boundary` parameter in the `Content-Type` header to separate parts. When clients send `multipart/form-data` without a boundary, Werkzeug cannot parse files or form fields and raises a `BadRequest`.

### Fix

- Ensure the client sets `Content-Type: multipart/form-data; boundary=...` and properly formats the body.
- In tests, use `data={'file': (io.BytesIO(b'data'), 'x.txt')}` and let the client set headers.
- For JavaScript, use `FormData` and let the browser supply the boundary automatically.

#### Wrong code

```python
# Test client example
c.post('/upload', data=b'raw', headers={'Content-Type': 'multipart/form-data'})
```

#### Fixed code

```python
# Flask test client
import io
c.post('/upload', data={'file': (io.BytesIO(b'data'), 'x.txt')})
```

Browser example:

```javascript
const fd = new FormData();
fd.append("file", fileInput.files[0]);
fetch("/upload", { method: "POST", body: fd }); // Do not set Content-Type manually
```

Let the client library handle boundaries; don’t manually set a bare `multipart/form-data` header.
