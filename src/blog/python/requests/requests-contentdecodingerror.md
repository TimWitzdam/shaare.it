---
title: "requests.exceptions.ContentDecodingError: Failed to decode response content"
description: "Handling bad Content-Encoding from servers and decoding errors in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ContentDecodingError: Failed to decode content

```bash
$ python -c "import requests; requests.get('https://example.com/bad-encoding')"
Traceback (most recent call last):
  ...
requests.exceptions.ContentDecodingError: Failed to decode response content: gzip
```

### Why this happens

Server declares `Content-Encoding` but sends mismatched or corrupt data.

### Fix

Disable decoding, request uncompressed content, or fix server configuration.

#### Wrong code

```python
import requests
requests.get('https://example.com/bad-encoding')
```

#### Fixed code

```python
import requests
headers = {"Accept-Encoding": "identity"}
resp = requests.get('https://example.com/resource', headers=headers)
print(len(resp.content))
```
