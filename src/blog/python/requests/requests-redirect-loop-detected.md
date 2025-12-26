---
title: "Redirect loop detected in Requests"
description: "Repeated redirects cause TooManyRedirects errors in Python Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Redirect loop detected

```bash
$ python -c "import requests; print(requests.get('https://example.com/loop', allow_redirects=True).status_code)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
requests.exceptions.TooManyRedirects: Exceeded 30 redirects.
```

### Why this happens

The server redirects between endpoints in a cycle (A -> B -> A) or keeps issuing 3xx responses without reaching a final destination. Requests enforces a redirect limit.

### Fix

Inspect the Location headers and stop following redirects or fix the server-side redirect rules. You can also raise on redirect or set a lower limit.

#### Wrong code

```python
import requests
# blindly following redirects
r = requests.get('https://example.com/loop', allow_redirects=True)
print(r.status_code)
```

#### Fixed code

```python
import requests
from requests.sessions import Session

s = Session()
resp = s.get('https://example.com/loop', allow_redirects=False, timeout=5)
print(resp.status_code)
print(resp.headers.get('Location'))  # Inspect and fix server
```

#### Limit redirects with adapter

```python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

s = requests.Session()
s.mount('http://', HTTPAdapter(max_retries=Retry(total=3, redirect=3)))
print(s.get('https://example.com/loop').status_code)
```
