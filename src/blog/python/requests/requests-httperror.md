---
title: "requests.exceptions.HTTPError: Bad HTTP status"
description: "Handling HTTPError via raise_for_status and defensive checks."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## HTTPError: Bad HTTP status

```bash
$ python -c "import requests; r = requests.get('https://httpbin.org/status/404'); r.raise_for_status()"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 404 Client Error: NOT FOUND for url: https://httpbin.org/status/404
```

### Why this happens

`raise_for_status()` throws when the server returns 4xx/5xx. It's normal for failed HTTP operations.

### Fix

Check `response.status_code` before calling `raise_for_status()`, or handle exceptions with try/except.

#### Wrong code

```python
import requests
r = requests.get('https://httpbin.org/status/500')
r.raise_for_status()
```

#### Fixed code

```python
import requests
r = requests.get('https://httpbin.org/status/500')
if r.ok:
    print(r.json())
else:
    print("Request failed:", r.status_code)
```
