---
title: "Resolver404: trailing slash mismatch"
description: "URLs without slash when patterns expect it or vice versa."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## Resolver404: trailing slash mismatch

```bash
$ curl -i http://localhost:8000/api/items
HTTP/1.1 404 Not Found
```

### Why this happens

Your URL pattern includes a trailing slash but request omitted it, and `APPEND_SLASH` is off.

### Fix

Align patterns and requests, or enable `APPEND_SLASH=True`.

#### Wrong code

```python
path("api/items/", views.items)
```

#### Fixed code

```python
path("api/items", views.items)  # no slash
# or enable APPEND_SLASH
```
