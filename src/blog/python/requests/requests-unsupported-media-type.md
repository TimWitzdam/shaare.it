---
title: "HTTP 415 Unsupported Media Type: Server rejects request body"
description: "Handling 415 status in Requests by using correct Content-Type and payload formats."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## 415 Unsupported Media Type

```bash
$ python -c "import requests; requests.post('https://example.com/api', data='plain', headers={'Content-Type':'application/xml'})"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 415 Client Error: Unsupported Media Type for url: https://example.com/api
```

### Why this happens

Server expects a specific content type (e.g., application/json) but you sent a different one.

### Fix

Send the correct Content-Type and payload format.

#### Wrong code

```python
import requests
requests.post('https://example.com/api', data='plain', headers={'Content-Type': 'application/xml'})
```

#### Fixed code

```python
import requests
resp = requests.post('https://example.com/api', json={'a': 1})
resp.raise_for_status()
print(resp.status_code)
```
