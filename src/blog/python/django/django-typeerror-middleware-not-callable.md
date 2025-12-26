---
title: "TypeError: Middleware not callable"
description: "Middleware must be a callable that returns a handler; misconfigured class/function leads to TypeError."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: Middleware not callable

```bash
$ python - <<'PY'
class MW:
    pass
try:
    MW('get_response')
except Exception as e:
    print(type(e).__name__, e)
PY
TypeError 'MW' object is not callable
```

### Why this happens

Middleware class missing `__init__(get_response)` or `__call__(request)`.

### Fix

Implement the middleware interface.

#### Wrong code

```python
class MyMW:
    def process_request(self, request): ...
```

#### Fixed code

```python
class MyMW:
    def __init__(self, get_response):
        self.get_response = get_response
    def __call__(self, request):
        # process request
        response = self.get_response(request)
        # process response
        return response
```
