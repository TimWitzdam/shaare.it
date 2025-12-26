---
title: "ValueError: Request body must be bytes or str"
description: "Passing unsupported types as request body causes type errors in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ValueError: invalid body type

```bash
$ python -c "import requests; requests.post('https://example.com', data=object())"
Traceback (most recent call last):
  ...
TypeError: Object of type 'object' is not JSON serializable
```

### Why this happens

Requests expects `data` as bytes or str, or `json` as JSON-serializable types. Providing arbitrary objects fails.

### Fix

- Convert data to bytes/str or use the `json=` parameter with serializable types.

#### Wrong code

```python
import requests
payload = object()  # not serializable
requests.post("https://example.com/api", json=payload)
```

#### Fixed code

```python
import requests
payload = {"name": "alice", "age": 30}
response = requests.post("https://example.com/api", json=payload)
print(response.status_code)
```
