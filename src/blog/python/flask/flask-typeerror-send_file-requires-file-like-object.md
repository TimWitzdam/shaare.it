---
title: "TypeError: send_file requires a file path or file-like object"
description: "Passing wrong types to send_file results in TypeError; use valid path or file-like objects."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: send_file requires file path or file-like object

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "app.py", line 15, in download
    return send_file(123)
TypeError: file path or file-like object required
```

### Why this happens

`send_file` validates its input to ensure it can read bytes. Passing integers, dicts, or arbitrary objects prevents Flask from determining filename, content type, and streaming behavior, leading to `TypeError`.

### Fix

Provide a string filesystem path, a `pathlib.Path`, or a file-like object with `.read()` (e.g., `io.BytesIO`).

#### Wrong code

```python
from flask import Flask, send_file
app = Flask(__name__)

@app.route('/download')
def download():
    return send_file(123)
```

#### Fixed code

```python
from flask import Flask, send_file
from io import BytesIO
app = Flask(__name__)

@app.route('/download')
def download():
    buf = BytesIO(b'hello')
    buf.seek(0)
    return send_file(buf, download_name='greet.txt', as_attachment=True)
```

### Tip

Use `send_from_directory` when serving files from a known folder; it handles safe path joining.
