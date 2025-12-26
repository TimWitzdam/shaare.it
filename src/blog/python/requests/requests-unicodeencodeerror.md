---
title: "UnicodeEncodeError: Error encoding request body"
description: "UnicodeEncodeError when sending non-ASCII data with Requests and specifying proper encodings."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## UnicodeEncodeError: Encoding request body

```bash
$ python -c "import requests; requests.post('https://example.com', data='é'.encode('ascii'))"
Traceback (most recent call last):
  ...
UnicodeEncodeError: 'ascii' codec can't encode character '\u00e9'
```

### Why this happens

Using an incompatible codec or implicit ASCII when encoding non-ASCII characters.

### Fix

Use UTF-8 or compatible encodings; let Requests handle str bodies or explicitly encode correctly.

#### Wrong code

```python
import requests
requests.post('https://example.com', data='é'.encode('ascii'))
```

#### Fixed code

```python
import requests
requests.post('https://example.com', data='é')  # str -> utf-8 by default
```
