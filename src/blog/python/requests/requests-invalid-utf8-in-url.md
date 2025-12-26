---
title: "Invalid UTF-8 in URL"
description: "Non-UTF-8 bytes or improper encoding in URLs cause parsing failures in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Invalid UTF-8 in URL

```bash
$ python -c "import requests; requests.get('https://example.com/search?q=\xff')"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidURL: URL contains invalid characters
```

### Why this happens

URLs must be ASCII with percent-encoding. Raw non-UTF-8 bytes break parsing.

### Fix

Percent-encode parameters using params= or urllib.parse.

#### Wrong code

```python
import requests
requests.get('https://example.com/search?q=\xff')
```

#### Fixed code

```python
import requests
requests.get('https://example.com/search', params={'q': 'café'}, timeout=10)
```
