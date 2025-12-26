---
title: "JSON content-type mismatch"
description: "Server expects application/json but request headers/body are incorrect."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## JSON content-type mismatch

```bash
$ python -c "import requests; requests.post('https://api.example.com', data='{"name": "a"}')"
# Server may respond 415 Unsupported Media Type or 400 Bad Request
```

### Why this happens

Using `data=` sends a raw string without `Content-Type: application/json`. Servers expecting JSON reject or misinterpret it.

### Fix

- Use `json=` to set proper header and encode body.

#### Wrong code

```python
import requests
requests.post("https://api.example.com/users", data="{\"name\": \"alice\"}")
```

#### Fixed code

```python
import requests
requests.post("https://api.example.com/users", json={"name": "alice"})
```
