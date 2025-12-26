---
title: "TypeError: send_file filename must be path-like or file object"
description: "Correct usage of send_file with strings or file objects; wrong types raise TypeError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: send_file filename must be path-like or file object

```bash
$ python -c "from flask import Flask, send_file; app=Flask(__name__); send_file(123)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: path should be string, bytes, os.PathLike, or file object
```

### Why this happens

`send_file` expects a valid filesystem path or a file-like object (`open(...)`, `BytesIO`). Passing numbers or unrelated objects triggers `TypeError`. Misreading configs or passing JSON-loaded types can lead to this.

### Fix

Pass a proper path string or use `io.BytesIO`/`io.StringIO` opened with correct mode. Configure `download_name`, `as_attachment`, and mimetype as needed.

#### Wrong code

```python
from flask import Flask, send_file

app = Flask(__name__)

@app.get('/file')
def file():
    return send_file(123)
```

#### Fixed code

```python
from flask import Flask, send_file
from io import BytesIO

app = Flask(__name__)

@app.get('/file')
def file():
    buf = BytesIO(b"hello")
    return send_file(buf, mimetype="text/plain", download_name="greeting.txt")
```

### Additional notes

- Prefer `send_from_directory(directory, filename)` for serving safe files from a folder.
- Use `download_name` instead of deprecated `attachment_filename` on newer Flask.
- Validate user-supplied filenames to avoid path traversal.
