---
title: "TypeError: files must be a dict of name->file-tuple"
description: "TypeError when uploading files with Requests and constructing proper files payloads."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## TypeError: Invalid files payload

```bash
$ python -c "import requests; requests.post('https://example.com/upload', files=['x'])"
Traceback (most recent call last):
  ...
TypeError: files must be a dictionary of file names to file-like objects
```

### Why this happens

`files` must be dict mapping field names to file tuples.

### Fix

Use `{name: (filename, fileobj, content_type)}` format.

#### Wrong code

```python
import requests
requests.post('https://example.com/upload', files=['file'])
```

#### Fixed code

```python
import requests
from io import BytesIO
files = {"file": ("hello.txt", BytesIO(b"hello"), "text/plain")}
resp = requests.post('https://example.com/upload', files=files)
print(resp.status_code)
```
