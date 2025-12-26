---
title: "requests.exceptions.InvalidHeader: Invalid header value"
description: "Invalid header values (non-str/bytes or bad encoding) in Requests and how to correct them."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## InvalidHeader: Invalid header value

```bash
$ python -c "import requests; requests.get('https://example.com', headers={'X': object()})"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidHeader: Header value must be str or bytes
```

### Why this happens

Headers must be strings or bytes; objects or None are invalid.

### Fix

Convert to strings and ensure ASCII-safe values or properly encoded bytes.

#### Wrong code

```python
import requests
requests.get('https://example.com', headers={'X': None})
```

#### Fixed code

```python
import requests
requests.get('https://example.com', headers={'X': '1'})
```
