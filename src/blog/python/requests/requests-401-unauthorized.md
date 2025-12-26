---
title: "requests.exceptions.HTTPError: 401 Unauthorized"
description: "Handling 401 Unauthorized in Requests by providing credentials/tokens or session state."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## HTTPError: 401 Unauthorized

```bash
$ python -c "import requests; r = requests.get('https://httpbin.org/status/401'); r.raise_for_status()"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 401 Client Error: UNAUTHORIZED for url
```

### Why this happens

Missing/invalid auth credentials.

### Fix

Include Basic auth or Bearer tokens.

#### Wrong code

```python
import requests
requests.get('https://api.example.com/protected')
```

#### Fixed code

```python
import requests
resp = requests.get('https://api.example.com/protected', headers={'Authorization': 'Bearer TOKEN'})
print(resp.status_code)
```
