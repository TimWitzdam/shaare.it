---
title: "Missing Bearer token causes 401 in Requests"
description: "Omitting Authorization: Bearer header leads to unauthorized errors when calling APIs with Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Missing Bearer token causes 401

```bash
$ python -c "import requests; print(requests.get('https://api.example.com/data').status_code)"
401
```

### Why this happens

APIs that require OAuth2/JWT access tokens reject requests without an `Authorization: Bearer <token>` header.

### Fix

Add the Authorization header with a valid token. Ensure the token is not expired and includes necessary scopes.

#### Wrong code

```python
import requests
url = 'https://api.example.com/data'
r = requests.get(url)
print(r.status_code)
```

#### Fixed code

```python
import requests
url = 'https://api.example.com/data'
headers = {'Authorization': 'Bearer eyJhbGciOi...'}
r = requests.get(url, headers=headers, timeout=10)
r.raise_for_status()
print(r.json())
```

#### Using Session

```python
import requests
sess = requests.Session()
sess.headers.update({'Authorization': 'Bearer eyJhbGciOi...'})
resp = sess.get('https://api.example.com/data')
print(resp.ok)
```
