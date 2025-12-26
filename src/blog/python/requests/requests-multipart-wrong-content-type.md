---
title: "Wrong Multipart Content-Type"
description: "Incorrect multipart/form-data Content-Type boundary handling causes server parsing errors."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Wrong multipart Content-Type

```bash
$ python -c "import requests; headers={'Content-Type':'multipart/form-data'}; requests.post('https://example.com/upload', headers=headers, data={'a':'b'})"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 400 Client Error: Bad Request
```

### Why this happens

Multipart bodies require a boundary; manually setting Content-Type without boundary breaks parsing.

### Fix

Let Requests set Content-Type when using files= or data= with tuples; don’t override manually.

#### Wrong code

```python
import requests
headers = {"Content-Type": "multipart/form-data"}
requests.post('https://example.com/upload', headers=headers, data={'a':'b'})
```

#### Fixed code

```python
import requests
files = {"file": ("data.txt", b"hello", "text/plain")}
requests.post('https://example.com/upload', files=files, timeout=30)
```
