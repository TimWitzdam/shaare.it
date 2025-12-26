---
title: "Incorrect encoding detection: Garbled response.text"
description: "When Requests guesses wrong encoding for response.text and manually setting encoding."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Encoding detection issue

```bash
$ python -c "import requests; r = requests.get('https://example.com/latin1'); print(r.text[:20])"
Garbled characters...
```

### Why this happens

Server doesn't declare charset or content is mislabeled.

### Fix

Set `response.encoding` explicitly.

#### Wrong code

```python
import requests
r = requests.get('https://example.com/latin1')
print(r.text[:20])
```

#### Fixed code

```python
import requests
r = requests.get('https://example.com/latin1')
r.encoding = 'latin-1'
print(r.text[:20])
```
