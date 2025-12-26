---
title: "urllib3.exceptions.ReadError: Error while reading response"
description: "ReadError surfaced in Requests due to server-side issues or bad encodings and how to mitigate."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ReadError: Error reading response

```bash
$ python -c "import requests; r = requests.get('https://example.com/bad'); r.content"
Traceback (most recent call last):
  ...
urllib3.exceptions.ReadError: Error while reading response
```

### Why this happens

Malformed responses, premature connection close, or corrupted encodings.

### Fix

Disable compression, add retries, or validate server behavior.

#### Wrong code

```python
import requests
r = requests.get('https://example.com/bad')
print(len(r.content))
```

#### Fixed code

```python
import requests
headers = {"Accept-Encoding": "identity"}
r = requests.get('https://example.com/bad', headers=headers, timeout=(3, 15))
print(len(r.content))
```
