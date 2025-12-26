---
title: "requests.exceptions.InvalidURL: No host supplied"
description: "InvalidURL because the URL lacks a host part and how to fix it in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## InvalidURL: No host supplied

```bash
$ python -c "import requests; requests.get('http:///path')"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidURL: No host supplied
```

### Why this happens

The URL is missing the hostname.

### Fix

Provide a full URL with scheme and host.

#### Wrong code

```python
import requests
requests.get('https:///path')
```

#### Fixed code

```python
import requests
requests.get('https://example.com/path')
```
