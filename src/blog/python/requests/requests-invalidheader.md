---
title: "requests.exceptions.InvalidHeader: Header value must be string"
description: "InvalidHeader errors caused by bad header names/values and how to fix them."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## InvalidHeader: Header value must be string

```bash
$ python -c "import requests; requests.get('https://example.com', headers={'X': 123})"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidHeader: Value for header {X: 123} must be of type str or bytes, not int
```

### Why this happens

Headers must be strings/bytes. Using ints or invalid names triggers errors.

### Fix

Convert values to strings and use valid header names.

#### Wrong code

```python
import requests
requests.get('https://example.com', headers={'User-Agent': None})
```

#### Fixed code

```python
import requests
headers = {"User-Agent": "my-app/1.0", "X-Trace": str(123)}
resp = requests.get('https://example.com', headers=headers)
print(resp.request.headers['X-Trace'])
```
