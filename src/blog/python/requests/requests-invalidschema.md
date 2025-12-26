---
title: "requests.exceptions.InvalidSchema: No support for scheme"
description: "InvalidSchema errors when using unsupported URL schemes in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## InvalidSchema: Unsupported scheme

```bash
$ python -c "import requests; requests.get('ftp://example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidSchema: No connection adapters were found for 'ftp://example.com'
```

### Why this happens

Requests supports http/https by default. Other schemes (ftp, file) aren't supported.

### Fix

Use http/https or appropriate libraries for other protocols.

#### Wrong code

```python
import requests
requests.get('file:///etc/hosts')
```

#### Fixed code

```python
import requests
resp = requests.get('https://example.com')
print(resp.text[:100])
```
