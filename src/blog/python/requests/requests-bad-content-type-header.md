---
title: "ValueError: Incorrect Content-Type header"
description: "Mismatched Content-Type header with payload in Requests causing server-side errors and how to fix it."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ValueError: Incorrect Content-Type

```bash
$ python -c "import requests; requests.post('https://example.com/api', json={'a':1}, headers={'Content-Type':'text/plain'})"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 415 Client Error: Unsupported Media Type
```

### Why this happens

Declared content type doesn't match body format.

### Fix

Let Requests set headers when using `json=` or align header with body.

#### Wrong code

```python
import requests
requests.post('https://example.com/api', json={'a': 1}, headers={'Content-Type': 'text/plain'})
```

#### Fixed code

```python
import requests
resp = requests.post('https://example.com/api', json={'a': 1})
print(resp.request.headers['Content-Type'])
```
