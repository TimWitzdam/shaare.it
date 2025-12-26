---
title: "Invalid Redirect Location Header"
description: "Redirects fail when Location header contains a malformed or relative URL not resolvable by Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Invalid redirect Location

```bash
$ python -c "import requests; requests.get('https://httpbin.org/absolute-redirect/1')"
# If server sends a bad Location, Requests raises
```

### Why this happens

Servers may send malformed Location headers or relative paths lacking a base.

### Fix

Disable auto redirects and resolve the Location manually against the base URL.

#### Wrong code

```python
import requests
requests.get('https://example.com', allow_redirects=True)
```

#### Fixed code

```python
import requests, urllib.parse
resp = requests.get('https://example.com', allow_redirects=False, timeout=10)
if resp.is_redirect:
    loc = resp.headers.get('Location')
    new_url = urllib.parse.urljoin('https://example.com', loc)
    resp = requests.get(new_url, timeout=10)
```
