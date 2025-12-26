---
title: "Non-ASCII characters in headers"
description: "Invalid header encoding leads to request errors or server rejection."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Non-ASCII headers

```bash
$ python -c "import requests; requests.get('https://example.com', headers={'X-Name':'José\u0000'})"
Traceback (most recent call last):
  ...
ValueError: Invalid header value
```

### Why this happens

Headers must be ASCII and cannot contain control characters. Some servers allow RFC 5987 encoding, but `\u0000` and others are invalid.

### Fix

- Restrict headers to printable ASCII or use proper encoding schemes.

#### Wrong code

```python
import requests
requests.get("https://example.com", headers={"X-Name": "Jos\u0000e"})
```

#### Fixed code

```python
import requests
requests.get("https://example.com", headers={"X-Name": "Jose"})
```
