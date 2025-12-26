---
title: "requests.exceptions.TooManyRedirects: Exceeded maximum redirects"
description: "Redirect loops and how to detect and prevent TooManyRedirects in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## TooManyRedirects: Exceeded maximum redirects

```bash
$ python -c "import requests; requests.get('https://httpbin.org/redirect/100')"
Traceback (most recent call last):
  ...
requests.exceptions.TooManyRedirects: Exceeded 30 redirects.
```

### Why this happens

The server redirects in a loop or more than the default limit.

### Fix

Disable redirects or set `allow_redirects=False`, or fix the server-side redirect loop.

#### Wrong code

```python
import requests
requests.get('https://httpbin.org/redirect/100')
```

#### Fixed code

```python
import requests
resp = requests.get('https://httpbin.org/redirect/100', allow_redirects=False)
print(resp.status_code, resp.headers.get('Location'))
```
