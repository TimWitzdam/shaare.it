---
title: "requests.exceptions.InvalidURL: Malformed URL"
description: "InvalidURL errors from malformed URLs and how to fix formatting."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## InvalidURL: Malformed URL

```bash
$ python -c "import requests; requests.get('http://exa mple.com')"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidURL: Failed to parse: http://exa mple.com
```

### Why this happens

The URL contains spaces or illegal characters or missing parts (host, path, port).

### Fix

Use a properly encoded URL or pass query params via `params` to let Requests encode them.

#### Wrong code

```python
import requests
url = 'http://exa mple.com/search?q=a b'
requests.get(url)
```

#### Fixed code

```python
import requests
url = 'https://example.com/search'
resp = requests.get(url, params={'q': 'a b'})
print(resp.url)
```
