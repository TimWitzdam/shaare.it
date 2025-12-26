---
title: "requests.exceptions.ContentDecodingError/ReadError: Response payload truncated"
description: "Diagnosing truncated responses in Requests and safe handling strategies."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Response payload truncated

```bash
$ python -c "import requests; r = requests.get('https://example.com/partial'); r.content"
Traceback (most recent call last):
  ...
requests.exceptions.ContentDecodingError: Response payload truncated
```

### Why this happens

Server closed early or content-encoding mismatched.

### Fix

Disable compression, retry, or stream carefully.

#### Wrong code

```python
import requests
r = requests.get('https://example.com/partial')
print(len(r.content))
```

#### Fixed code

```python
import requests
headers = {"Accept-Encoding": "identity"}
r = requests.get('https://example.com/partial', headers=headers, timeout=(3, 15))
print(len(r.content))
```
