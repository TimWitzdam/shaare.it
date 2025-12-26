---
title: "TypeError: params must be dict or list of tuples"
description: "TypeError when passing query params to Requests and using supported structures."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## TypeError: Invalid params type

```bash
$ python -c "import requests; requests.get('https://example.com', params='q=1')"
Traceback (most recent call last):
  ...
TypeError: params must be a dict or iterable of tuples
```

### Why this happens

`params` expects mapping or sequence of pairs.

### Fix

Use dict or list of tuples.

#### Wrong code

```python
import requests
requests.get('https://example.com', params=123)
```

#### Fixed code

```python
import requests
requests.get('https://example.com', params={'q': '1', 'page': '2'})
```
