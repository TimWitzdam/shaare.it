---
title: "TypeError: a bytes-like object is required"
description: "Returning or writing strings where bytes are expected in Flask file/response handling."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: bytes required

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "/path/to/app.py", line 16, in download
    f.write('text')
TypeError: a bytes-like object is required, not 'str'
```

### Why this happens

Working with binary files or certain response bodies expects `bytes`. Writing a Python `str` to a binary stream or returning mixed types causes this error.

### Fix

Encode strings to bytes (`'text'.encode('utf-8')`) or open files in text mode. For responses, ensure consistent types.

#### Wrong code

```python
# app.py
from flask import Flask, send_file
app = Flask(__name__)

@app.get('/download')
def download():
    with open('/tmp/file.bin', 'wb') as f:
        f.write('text')  # TypeError
    return send_file('/tmp/file.bin')
```

#### Fixed code

```python
# app.py
from flask import Flask, send_file
app = Flask(__name__)

@app.get('/download')
def download():
    with open('/tmp/file.bin', 'wb') as f:
        f.write('text'.encode('utf-8'))
    return send_file('/tmp/file.bin', as_attachment=True)
```

### Tips

- For JSON responses, use `jsonify` and avoid manual byte handling.
- Be explicit about file modes: `'wb'` for bytes, `'w'` for text.
