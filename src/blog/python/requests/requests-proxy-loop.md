---
title: "Proxy Redirect Loop"
description: "Requests stuck following redirects through a proxy due to misconfiguration causing loops."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Proxy redirect loop

```bash
$ python -c "import requests; requests.get('https://example.com', proxies={'http':'http://proxy:3128'})"
Traceback (most recent call last):
  ...
requests.exceptions.TooManyRedirects: Exceeded 30 redirects.
```

### Why this happens

Proxy or server redirects back and forth creating a loop.

### Fix

Inspect Location headers; disable redirects and resolve manually; fix proxy rules.

#### Wrong code

```python
import requests
requests.get('https://example.com', proxies={'http':'http://proxy:3128'})
```

#### Fixed code

```python
import requests
r = requests.get('https://example.com', allow_redirects=False, timeout=10)
print(r.status_code, r.headers.get('Location'))
```
