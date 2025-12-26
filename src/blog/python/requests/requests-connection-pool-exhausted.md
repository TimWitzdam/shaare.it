---
title: "requests.exceptions.ConnectionError: Connection pool is full"
description: "Connection pool exhaustion in Requests sessions and tuning pool sizes/adapters."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ConnectionError: Connection pool full

```bash
$ python -c "import requests; s = requests.Session(); [s.get('https://example.com') for _ in range(200)]"
Traceback (most recent call last):
  ...
requests.exceptions.ConnectionError: Connection pool is full, discarding connection
```

### Why this happens

Too many concurrent requests without adequate pool size.

### Fix

Tune pool size via HTTPAdapter or limit concurrency.

#### Wrong code

```python
import requests
s = requests.Session()
for _ in range(200):
    s.get('https://example.com')
```

#### Fixed code

```python
import requests
from requests.adapters import HTTPAdapter

s = requests.Session()
s.mount('https://', HTTPAdapter(pool_connections=10, pool_maxsize=50))
for _ in range(50):
    s.get('https://example.com')
```
