---
title: "Redirect from HTTPS to HTTP"
description: "Security warning when following redirects from HTTPS to plain HTTP in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Redirect from HTTPS to HTTP

```bash
$ python -c "import requests; requests.get('https://example.com/redirect-to-http')"
# May follow to http:// which is insecure
```

### Why this happens

Servers redirect to HTTP for legacy endpoints; this downgrades security.

### Fix

Disallow insecure redirects or re-request over HTTPS.

#### Wrong code

```python
import requests
requests.get('https://example.com/redirect-to-http')
```

#### Fixed code

```python
import requests
r = requests.get('https://example.com/redirect', allow_redirects=False, timeout=10)
loc = r.headers.get('Location','')
if loc.startswith('http://'):
    raise RuntimeError('Insecure redirect')
```
