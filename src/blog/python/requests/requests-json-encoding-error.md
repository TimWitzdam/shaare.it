---
title: "TypeError: Object of type X is not JSON serializable"
description: "Errors when sending JSON via Requests with non-serializable objects and how to fix serialization."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## TypeError: Not JSON serializable

```bash
$ python -c "import requests; requests.post('https://example.com', json={'when': set()})"
Traceback (most recent call last):
  ...
TypeError: Object of type set is not JSON serializable
```

### Why this happens

Python objects like sets are not JSON serializable by default.

### Fix

Convert to serializable types (list, dict, str) or custom encoder.

#### Wrong code

```python
import requests
requests.post('https://example.com', json={'when': set([1,2])})
```

#### Fixed code

```python
import requests
requests.post('https://example.com', json={'when': [1,2]})
```
