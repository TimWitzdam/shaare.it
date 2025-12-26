---
title: "UnicodeError: surrogates not allowed in headers/body"
description: "Invalid Unicode surrogates cause encoding failures in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## UnicodeError: surrogates not allowed

```bash
$ python -c "import requests; requests.get('https://example.com', headers={'X-Name': '\ud800'})"
Traceback (most recent call last):
  ...
UnicodeEncodeError: 'utf-8' codec can't encode character '\ud800' in position 0: surrogates not allowed
```

### Why this happens

Python's UTF-8 encoder rejects half-surrogates. Supplying invalid Unicode in headers or data triggers encoding errors.

### Fix

- Sanitize/normalize strings; remove surrogate code points.
- Encode binary data as bytes and set proper content-type.

#### Wrong code

```python
import requests
headers = {"X-Label": "\ud800"}  # invalid surrogate
requests.get("https://example.com", headers=headers)
```

#### Fixed code

```python
import unicodedata
import requests

label = "Valid text"
label = unicodedata.normalize("NFC", label)
requests.get("https://example.com", headers={"X-Label": label})
```
