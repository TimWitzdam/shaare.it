---
title: "Unencoded params cause invalid URL in Requests"
description: "Special characters in query parameters must be encoded to avoid invalid URL errors in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Unencoded params cause invalid URL

```bash
$ python -c "import requests; print(requests.get('https://example.com/search?q=a b').status_code)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
requests.exceptions.InvalidURL: URL has control characters
```

### Why this happens

Spaces and reserved characters must be percent-encoded in URLs. Raw spaces or control characters lead to `InvalidURL`.

### Fix

Use `params=` to let Requests encode query parameters, or manually encode using urllib.

#### Wrong code

```python
import requests
r = requests.get('https://example.com/search?q=a b')
```

#### Fixed code (use params)

```python
import requests
r = requests.get('https://example.com/search', params={'q': 'a b'})
print(r.request.url)  # https://example.com/search?q=a+b
```

#### Manual encoding

```python
import requests
from urllib.parse import urlencode
query = urlencode({'q': 'a b'})
r = requests.get(f'https://example.com/search?{query}', timeout=5)
print(r.request.url)
```
