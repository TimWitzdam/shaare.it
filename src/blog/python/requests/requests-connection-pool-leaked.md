---
title: "Connection pool leaked"
description: "Not closing sessions leads to connection pool leaks and resource exhaustion."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Connection pool leaked

```bash
$ python -c "import requests; [requests.Session().get('https://example.com') for _ in range(100)]"
# Resource warnings or exhaustion
```

### Why this happens

Creating many sessions without closing keeps sockets open and exhausts resources.

### Fix

- Reuse a single `Session` and close it when done.

#### Wrong code

```python
import requests
for _ in range(100):
    requests.Session().get("https://example.com")
```

#### Fixed code

```python
import requests
with requests.Session() as s:
    for _ in range(100):
        s.get("https://example.com")
```
