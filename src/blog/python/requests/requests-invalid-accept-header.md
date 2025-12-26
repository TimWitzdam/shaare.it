---
title: "Invalid Accept Header"
description: "Server rejects requests with malformed or unsupported Accept header values."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Invalid Accept header

```bash
$ python -c "import requests; requests.get('https://api.example.com/data', headers={'Accept':'application/x-invalid'})"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 406 Client Error: Not Acceptable
```

### Why this happens

The server uses content negotiation. A bad Accept header results in 406 or fallback issues.

### Fix

Send valid media types (e.g., application/json). Review API docs for supported types.

#### Wrong code

```python
import requests
requests.get('https://api.example.com/data', headers={'Accept': 'application/x-invalid'})
```

#### Fixed code

```python
import requests
headers = {"Accept": "application/json"}
requests.get('https://api.example.com/data', headers=headers, timeout=10)
```
