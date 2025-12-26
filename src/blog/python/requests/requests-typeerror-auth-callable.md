---
title: "TypeError: auth callable has wrong signature"
description: "Custom auth handler must accept request and return modified request."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## TypeError: invalid auth callable

```bash
$ python -c "import requests; session=requests.Session(); session.auth=lambda: None; session.get('https://example.com')"
Traceback (most recent call last):
  ...
TypeError: <lambda>() takes 0 positional arguments but 1 was given
```

### Why this happens

Auth callables must accept a `requests.PreparedRequest` and return it. Wrong signatures raise `TypeError`.

### Fix

- Implement a proper callable or use a tuple `(username, password)` for basic auth.

#### Wrong code

```python
import requests
session = requests.Session()
session.auth = lambda: None  # wrong signature
session.get("https://example.com")
```

#### Fixed code

```python
import requests
class TokenAuth:
    def __call__(self, r):
        r.headers["Authorization"] = "Bearer my-token"
        return r

session = requests.Session()
session.auth = TokenAuth()
response = session.get("https://example.com")
print(response.ok)
```
