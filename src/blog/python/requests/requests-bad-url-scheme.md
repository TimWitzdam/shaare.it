---
title: "Invalid URL Scheme in Requests"
description: "Errors caused by using an unsupported or malformed URL scheme (e.g., ftp://, ws://, missing scheme)."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Invalid URL scheme

```bash
$ python -c "import requests; requests.get('ftp://example.com/resource')"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidSchema: No connection adapters were found for 'ftp://example.com/resource'
```

### Why this happens

Requests supports http and https. Using unsupported schemes (ftp, ws, file) or malformed schemes (missing scheme) leads to adapter errors.

### Fix

Use http/https URLs. For other protocols, use a dedicated library (e.g., ftplib for FTP, websockets for WS/WSS). Add the correct scheme to the URL.

#### Wrong code

```python
import requests
requests.get('example.com/api')  # missing scheme
```

#### Fixed code

```python
import requests
requests.get('https://example.com/api', timeout=10)
```
