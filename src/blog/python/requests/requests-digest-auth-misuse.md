---
title: "DigestAuth misuse causing 401 in Requests"
description: "Incorrect use of HTTP Digest authentication with Requests leads to repeated 401 responses."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## DigestAuth misuse causing 401

```bash
$ python -c "import requests; from requests.auth import HTTPDigestAuth; print(requests.get('https://httpbin.org/digest-auth/auth/user/pass', auth=HTTPDigestAuth('user','wrong')).status_code)"
401
```

### Why this happens

Digest authentication requires the correct realm, nonce handling, and credentials. If the username/password are wrong or the server requires specific qop/algorithm but the client doesn't match, you get 401 loops.

### Fix

Use `HTTPDigestAuth` with correct credentials and target URL. Verify that the endpoint supports Digest and that credentials are accurate.

#### Wrong code

```python
import requests
from requests.auth import HTTPDigestAuth

url = 'https://httpbin.org/digest-auth/auth/user/pass'
# Wrong password
r = requests.get(url, auth=HTTPDigestAuth('user', 'wrong'))
print(r.status_code)
```

#### Fixed code

```python
import requests
from requests.auth import HTTPDigestAuth

url = 'https://httpbin.org/digest-auth/auth/user/pass'
r = requests.get(url, auth=HTTPDigestAuth('user', 'pass'), timeout=5)
r.raise_for_status()
print(r.json())
```

#### Tip: Persistent session

```python
import requests
from requests.auth import HTTPDigestAuth

sess = requests.Session()
sess.auth = HTTPDigestAuth('user', 'pass')
resp = sess.get('https://example.com/protected')
print(resp.status_code)
```
