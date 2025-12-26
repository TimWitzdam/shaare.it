---
title: "ValueError: Invalid URL scheme"
description: "Requests only supports http and https; other schemes fail."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ValueError: Invalid URL scheme

```bash
$ python -c "import requests; requests.get('ftp://example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidSchema: No connection adapters were found for 'ftp://example.com'
```

### Why this happens

Requests supports HTTP/HTTPS. Using unsupported schemes like `ftp`, `file`, or `mailto` raises schema/adapter errors.

### Fix

- Use a library that supports the scheme (e.g., `ftplib` for FTP).
- Or access an HTTP endpoint instead.

#### Wrong code

```python
import requests
requests.get("file:///etc/hosts")
```

#### Fixed code

```python
# Use the right library for the scheme
from ftplib import FTP
ftp = FTP("ftp.example.com")
ftp.login()
# Or switch to https API
# import requests; requests.get("https://api.example.com")
```
