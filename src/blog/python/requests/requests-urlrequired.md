---
title: "requests.exceptions.URLRequired: A valid URL is required"
description: "URLRequired errors and ensuring you pass a proper URL to Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## URLRequired: A valid URL is required

```bash
$ python -c "import requests; requests.get('')"
Traceback (most recent call last):
  ...
requests.exceptions.URLRequired: A valid URL is required to make a request.
```

### Why this happens

Empty or None URL is passed.

### Fix

Provide a non-empty URL string with scheme and host.

#### Wrong code

```python
import requests
url = ''
requests.get(url)
```

#### Fixed code

```python
import requests
url = 'https://example.com'
resp = requests.get(url)
print(resp.status_code)
```
