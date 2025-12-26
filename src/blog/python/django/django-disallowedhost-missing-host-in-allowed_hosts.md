---
title: "DisallowedHost: Invalid HTTP_HOST header"
description: "Requests blocked because host not in ALLOWED_HOSTS."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## DisallowedHost: Invalid HTTP_HOST header

```bash
$ curl -H "Host: example.test" http://localhost:8000/
DisallowedHost: Invalid HTTP_HOST header: 'example.test'. You may need to add 'example.test' to ALLOWED_HOSTS.
```

### Why this happens

Django checks incoming Host header against `ALLOWED_HOSTS`. Unknown hosts are rejected.

### Fix

Add hostnames or wildcard (not recommended) to `ALLOWED_HOSTS`.

#### Wrong code

```python
ALLOWED_HOSTS = []
```

#### Fixed code

```python
ALLOWED_HOSTS = ["localhost", "127.0.0.1", "example.test"]
```
