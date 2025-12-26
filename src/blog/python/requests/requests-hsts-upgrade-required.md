---
title: "HSTS upgrade required"
description: "Server enforces HTTPS via HSTS; HTTP requests fail or are redirected."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## HSTS upgrade required

```bash
$ python -c "import requests; r=requests.get('http://secure.example.com'); print(r.status_code, r.url)"
301 https://secure.example.com/
```

### Why this happens

HSTS policies require HTTPS; plain HTTP is redirected or blocked.

### Fix

- Use `https://` URLs.

#### Wrong code

```python
import requests
requests.get("http://secure.example.com/api")
```

#### Fixed code

```python
import requests
requests.get("https://secure.example.com/api")
```
