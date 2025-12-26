---
title: "ValueError: Invalid JSON provided to requests"
description: "Errors when sending invalid JSON payloads with Requests and how to correct them."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Invalid JSON when sending

```bash
$ python -c "import requests, json; requests.post('https://example.com', data='{"a":1,}', headers={'Content-Type':'application/json'})"
Traceback (most recent call last):
  ...
ValueError: Invalid JSON
```

### Why this happens

Malformed JSON string or wrong usage of `data` vs `json` argument.

### Fix

Use `json=` with Python dicts or validate JSON strings.

#### Wrong code

```python
import requests
requests.post('https://example.com', data='{"a":1,}', headers={'Content-Type': 'application/json'})
```

#### Fixed code

```python
import requests
payload = {"a": 1}
resp = requests.post('https://example.com', json=payload)
print(resp.request.body)
```
