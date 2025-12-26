---
title: "requests.exceptions.MissingSchema: Invalid URL 'example': No scheme supplied"
description: "Missing URL scheme errors and how to construct valid URLs for Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## MissingSchema: No scheme supplied

```bash
$ python -c "import requests; requests.get('example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.MissingSchema: Invalid URL 'example.com': No scheme supplied. Perhaps you meant https://example.com?
```

### Why this happens

You provided a URL without a scheme (http/https). Requests requires full URLs.

### Fix

Add the correct scheme: `https://example.com`.

#### Wrong code

```python
import requests
requests.get('example.com')
```

#### Fixed code

```python
import requests
resp = requests.get('https://example.com', timeout=5)
print(resp.ok)
```
