---
title: "TypeError: Middleware missing get_response argument"
description: "Custom middleware not following new-style signature."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: Middleware missing get_response argument

```bash
$ python manage.py runserver
...
TypeError: __init__() missing 1 required positional argument: 'get_response'
```

### Why this happens

Your middleware uses old-style API without `get_response` in `__init__`.

### Fix

Implement new-style middleware signature.

#### Wrong code

```python
class M:
    def process_request(self, request):
        ...
```

#### Fixed code

```python
class M:
    def __init__(self, get_response):
        self.get_response = get_response
    def __call__(self, request):
        return self.get_response(request)
```
