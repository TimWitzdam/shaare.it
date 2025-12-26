---
title: "TypeError: data must be bytes, file-like, or iterable"
description: "TypeError with Requests body payloads and choosing supported types for data/JSON."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## TypeError: data must be bytes/iterable

```bash
$ python -c "import requests; requests.post('https://example.com', data=object())"
Traceback (most recent call last):
  ...
TypeError: data must be bytes, file-like, or iterable
```

### Why this happens

The body payload is an unsupported type.

### Fix

Use bytes/str, file-like objects, generators, or `json=` for JSON.

#### Wrong code

```python
import requests
requests.post('https://example.com', data={'a': 1})  # dict in data sends form-encoded, OK, but object() is not
```

#### Fixed code

```python
import requests
resp = requests.post('https://example.com', json={'a': 1})
print(resp.request.headers['Content-Type'])
```
