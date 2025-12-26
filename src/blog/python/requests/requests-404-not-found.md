---
title: "requests.exceptions.HTTPError: 404 Not Found"
description: "Handling 404 Not Found with Requests and safe error checks before raise_for_status."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## HTTPError: 404 Not Found

```bash
$ python -c "import requests; r = requests.get('https://httpbin.org/status/404'); r.raise_for_status()"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 404 Client Error: NOT FOUND for url
```

### Why this happens

Resource doesn't exist or wrong URL.

### Fix

Check the path, use correct endpoint, and handle 404 gracefully.

#### Wrong code

```python
import requests
r = requests.get('https://httpbin.org/status/404')
r.raise_for_status()
```

#### Fixed code

```python
import requests
r = requests.get('https://httpbin.org/status/404')
if r.status_code == 404:
    print('Not found')
```
