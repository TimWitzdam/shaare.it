---
title: "Missing Host Header in Requests"
description: "Server rejects requests without a proper Host header (HTTP/1.1)."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Missing Host header

```bash
$ python -c "import requests; requests.get('http://127.0.0.1:8000', headers={'Host': ''})"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 400 Bad Request: Missing Host header
```

### Why this happens

HTTP/1.1 requires a Host header. Overriding it incorrectly or using proxies/misconfigured DNS can cause servers to reject the request.

### Fix

Don’t override the Host header unless necessary. Let Requests set it automatically based on the URL. If using proxies, ensure they don’t strip/modify Host.

#### Wrong code

```python
import requests
requests.get('http://api.local', headers={'Host': ''})
```

#### Fixed code

```python
import requests
requests.get('http://api.local', timeout=10)  # no manual Host header
```
