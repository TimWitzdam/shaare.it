---
title: "Stream closed error"
description: "Attempting to read response after the connection is closed fails."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Stream closed error

```bash
$ python -c "import requests; r=requests.get('https://example.com', stream=True); r.close(); next(r.iter_content(10))"
Traceback (most recent call last):
  ...
ValueError: I/O operation on closed file.
```

### Why this happens

The response stream was closed before reading content.

### Fix

- Read content before closing or avoid manual close by using context manager.

#### Wrong code

```python
import requests
r = requests.get("https://example.com", stream=True)
r.close()
for chunk in r.iter_content(1024):
    pass
```

#### Fixed code

```python
import requests
with requests.get("https://example.com", stream=True) as r:
    for chunk in r.iter_content(1024):
        # process chunk
        pass
```
