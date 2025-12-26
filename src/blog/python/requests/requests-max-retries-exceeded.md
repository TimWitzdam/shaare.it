---
title: "Max retries exceeded with URL"
description: "Requests gives up after configured retries due to persistent failures."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Max retries exceeded

```bash
$ python -c "import requests; requests.get('http://unreachable.example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.RetryError: HTTPSConnectionPool(...): Max retries exceeded
```

### Why this happens

Connection errors persist across retry attempts, or backoff policy is too strict.

### Fix

- Adjust retry settings and fix underlying connectivity.

#### Wrong code

```python
import requests
requests.get("http://unreachable.example.com")
```

#### Fixed code

```python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

session = requests.Session()
session.mount("http://", HTTPAdapter(max_retries=Retry(total=2, backoff_factor=0.2)))
resp = session.get("http://example.com")
print(resp.ok)
```
