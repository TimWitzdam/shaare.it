---
title: "Gevent monkeypatch conflict"
description: "Gevent's monkeypatch can break Requests expectations for sockets/SSL."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Gevent monkeypatch conflict

```bash
$ python -c "from gevent import monkey; monkey.patch_all(); import requests; requests.get('https://example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.ConnectionError: Gevent-SSL incompatibility
```

### Why this happens

Patched sockets diverge from urllib3 behavior.

### Fix

- Avoid global patching or use `httpx` with asyncio instead.

#### Wrong code

```python
from gevent import monkey
monkey.patch_all()
import requests
requests.get("https://example.com")
```

#### Fixed code

```python
import requests
resp = requests.get("https://example.com")
print(resp.ok)
```
