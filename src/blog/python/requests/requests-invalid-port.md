---
title: "requests.exceptions.InvalidURL: Invalid port number"
description: "Invalid port numbers in URLs passed to Requests and how to fix them."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## InvalidURL: Invalid port number

```bash
$ python -c "import requests; requests.get('https://example.com:abc')"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidURL: Failed to parse: invalid port 'abc'
```

### Why this happens

Port must be an integer between 1 and 65535.

### Fix

Provide a numeric port or omit to use default.

#### Wrong code

```python
import requests
requests.get('https://example.com:abc')
```

#### Fixed code

```python
import requests
requests.get('https://example.com:443')
```
