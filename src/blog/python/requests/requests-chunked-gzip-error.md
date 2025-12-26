---
title: "requests.exceptions.ContentDecodingError: Failed to decode gzip chunked content"
description: "ContentDecodingError when servers misreport gzip with chunked transfer in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ContentDecodingError: Gzip+chunked mismatch

```bash
$ python -c "import requests; requests.get('https://example.com/bad-gzip')"
Traceback (most recent call last):
  ...
requests.exceptions.ContentDecodingError: Failed to decode response content: gzip
```

### Why this happens

Server declares gzip but sends invalid data or mixes chunking incorrectly.

### Fix

Request identity encoding or fix server.

#### Wrong code

```python
import requests
requests.get('https://example.com/bad-gzip')
```

#### Fixed code

```python
import requests
resp = requests.get('https://example.com/resource', headers={'Accept-Encoding': 'identity'})
print(len(resp.content))
```
