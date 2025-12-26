---
title: "Params Not a Dict"
description: "Passing non-dict types to params causes encoding or URL construction issues in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Params not a dict

```bash
$ python -c "import requests; requests.get('https://example.com', params=['a', 'b'])"
Traceback (most recent call last):
  ...
TypeError: params argument must be a dict or sequence of two-element tuples
```

### Why this happens

Requests expects mapping or sequence of key-value pairs.

### Fix

Use dict or list of tuples.

#### Wrong code

```python
import requests
requests.get('https://example.com', params=['a','b'])
```

#### Fixed code

```python
import requests
requests.get('https://example.com', params={'a':'b'}, timeout=10)
```
