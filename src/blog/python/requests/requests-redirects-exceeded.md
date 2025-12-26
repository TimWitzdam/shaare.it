---
title: "ValueError: Redirects exceeded"
description: "Redirect limits exceeded in Requests and how to prevent infinite loops."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ValueError: Redirects exceeded

```bash
$ python -c "import requests; requests.get('https://httpbin.org/redirect/50')"
Traceback (most recent call last):
  ...
ValueError: Redirects exceeded
```

### Why this happens

Too many redirects; may indicate a loop.

### Fix

Turn off redirects or fix server-side configuration.

#### Wrong code

```python
import requests
requests.get('https://httpbin.org/redirect/50')
```

#### Fixed code

```python
import requests
resp = requests.get('https://httpbin.org/redirect/50', allow_redirects=False)
print(resp.status_code)
```
