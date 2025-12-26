---
title: "SuspiciousOperation: invalid host"
description: "Host header fails validation due to bad characters or format."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## SuspiciousOperation: invalid host

```bash
$ curl -H "Host: bad@host" http://localhost:8000/
SuspiciousOperation: Invalid HTTP_HOST header: 'bad@host'
```

### Why this happens

Host header contains invalid characters.

### Fix

Use valid hostnames and configure `ALLOWED_HOSTS`.

#### Wrong code

```python
ALLOWED_HOSTS = ['bad@host']
```

#### Fixed code

```python
ALLOWED_HOSTS = ['localhost']
```
