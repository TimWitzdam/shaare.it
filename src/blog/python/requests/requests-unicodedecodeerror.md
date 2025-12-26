---
title: "UnicodeDecodeError: Error decoding response.text"
description: "Handling UnicodeDecodeError when decoding non-UTF-8 responses in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## UnicodeDecodeError: Error decoding response.text

```bash
$ python -c "import requests; r = requests.get('https://example.com/latin1'); print(r.text)"
Traceback (most recent call last):
  ...
UnicodeDecodeError: 'utf-8' codec can't decode byte 0xe9 in position 10: invalid continuation byte
```

### Why this happens

Response declares wrong charset or contains bytes not valid for UTF-8.

### Fix

Use `response.content` or set `response.encoding` manually.

#### Wrong code

```python
import requests
r = requests.get('https://example.com/latin1')
print(r.text)
```

#### Fixed code

```python
import requests
r = requests.get('https://example.com/latin1')
r.encoding = 'latin-1'
print(r.text[:50])
```
