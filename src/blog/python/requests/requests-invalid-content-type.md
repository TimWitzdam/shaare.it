---
title: "Invalid Content-Type Header"
description: "Server rejects or mishandles requests with incorrect Content-Type."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Invalid Content-Type header

```bash
$ python -c "import requests; requests.post('https://api.example.com/items', headers={'Content-Type':'text/plain'}, data='{"x":1}')"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 415 Client Error: Unsupported Media Type
```

### Why this happens

APIs expect specific media types (e.g., application/json). Mismatched Content-Type breaks parsing.

### Fix

Set Content-Type to match the body. Prefer json= for JSON; let Requests set the header automatically.

#### Wrong code

```python
import requests
requests.post('https://api.example.com/items', headers={'Content-Type':'text/plain'}, data='{"x":1}')
```

#### Fixed code

```python
import requests
requests.post('https://api.example.com/items', json={'x': 1}, timeout=10)
```
