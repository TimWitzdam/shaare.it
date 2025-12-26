---
title: "Params Need URL Encoding"
description: "Unencoded special characters in query params cause invalid URLs or misinterpretation by servers in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Params need URL encoding

```bash
$ python -c "import requests; requests.get('https://example.com/search?q=a+b&filter=a|b')"
# Server may misinterpret + and |
```

### Why this happens

Reserved characters must be percent-encoded.

### Fix

Let Requests encode via params= or use urllib.parse.quote_plus.

#### Wrong code

```python
import requests
requests.get('https://example.com/search?q=a+b|c')
```

#### Fixed code

```python
import requests
requests.get('https://example.com/search', params={'q':'a b|c'}, timeout=10)
```
