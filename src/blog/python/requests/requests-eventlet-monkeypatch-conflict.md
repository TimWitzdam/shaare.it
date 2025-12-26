---
title: "Eventlet monkeypatch conflict"
description: "Green-thread monkeypatching breaks Requests socket/ssl behavior."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Eventlet monkeypatch conflict

```bash
$ python -c "import eventlet; eventlet.monkey_patch(); import requests; requests.get('https://example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.ConnectionError: Green socket/ssl incompatibility
```

### Why this happens

Monkeypatching replaces standard sockets/SSL with green versions that may not fully support urllib3 expectations.

### Fix

- Use compatible versions or avoid monkeypatching; try `requests` in threads.

#### Wrong code

```python
import eventlet
eventlet.monkey_patch()
import requests
requests.get("https://example.com")
```

#### Fixed code

```python
import requests
# Avoid global monkeypatch; use standard blocking I/O
resp = requests.get("https://example.com")
print(resp.status_code)
```
