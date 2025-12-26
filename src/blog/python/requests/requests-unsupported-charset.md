---
title: "Unsupported Charset in Response"
description: "Response declares an unknown or unsupported charset leading to decoding issues in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Unsupported charset

```bash
$ python -c "import requests; r=requests.get('https://example.com'); r.encoding='x-unknown'; r.text"
Traceback (most recent call last):
  ...
UnicodeDecodeError: codec can't decode bytes
```

### Why this happens

Server declares an invalid charset or the content doesn't match the charset.

### Fix

Override encoding to a correct one or use r.content and decode manually.

#### Wrong code

```python
import requests
r = requests.get('https://example.com')
r.encoding = 'x-unknown'
r.text
```

#### Fixed code

```python
import requests
r = requests.get('https://example.com', timeout=10)
r.encoding = r.apparent_encoding
text = r.text
```
