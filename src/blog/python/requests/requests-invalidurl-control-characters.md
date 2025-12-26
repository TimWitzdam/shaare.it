---
title: "requests.exceptions.InvalidURL: URL contains control characters"
description: "InvalidURL due to control characters or unescaped whitespace and how to clean/encode URLs in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## InvalidURL: Control characters in URL

```bash
$ python -c "import requests; requests.get('https://example.com/\npath')"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidURL: URL contains control characters
```

### Why this happens

Newlines, tabs, or spaces in URLs; not properly encoded.

### Fix

Strip whitespace and let Requests encode parameters via `params`.

#### Wrong code

```python
import requests
url = 'https://example.com/search?q=a\n b'
requests.get(url)
```

#### Fixed code

```python
import requests
url = 'https://example.com/search'
resp = requests.get(url, params={'q': 'a b'})
print(resp.url)
```
