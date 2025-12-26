---
title: "TypeError: headers must be dict-like"
description: "TypeError when passing headers in Requests; ensure mapping types and string values."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## TypeError: headers must be dict-like

```bash
$ python -c "import requests; requests.get('https://example.com', headers=['x','y'])"
Traceback (most recent call last):
  ...
TypeError: headers must be dict-like
```

### Why this happens

Headers must be a dict-like object with string keys/values.

### Fix

Provide a dict of headers.

#### Wrong code

```python
import requests
requests.get('https://example.com', headers=('User-Agent', 'x'))
```

#### Fixed code

```python
import requests
headers = {"User-Agent": "my-app/1.0"}
resp = requests.get('https://example.com', headers=headers)
print(resp.request.headers['User-Agent'])
```
