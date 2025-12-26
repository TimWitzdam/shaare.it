---
title: "Malformed HTTPS URL"
description: "Bad https URL or scheme/cert mix causing connection failures in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Malformed HTTPS URL

```bash
$ python -c "import requests; requests.get('https:/example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidURL: Invalid URL 'https:/example.com': No host supplied
```

### Why this happens

Missing slashes, bad ports, or https used with http servers lead to SSL handshake errors or invalid URL parsing.

### Fix

Ensure proper URL format: https://host/path. Verify server supports TLS on the chosen port.

#### Wrong code

```python
import requests
requests.get('https:/example.com')
```

#### Fixed code

```python
import requests
requests.get('https://example.com', timeout=10)
```
