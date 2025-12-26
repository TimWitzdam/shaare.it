---
title: "TypeError: __init__() missing 1 required positional argument: 'request'"
description: "Manually instantiating class-based views without using as_view leads to missing request argument."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: **init** missing request

```bash
$ python - <<'PY'
class V:
    def __init__(self, request): pass
V()
PY
Traceback (most recent call last):
TypeError: __init__() missing 1 required positional argument: 'request'
```

### Why this happens

You instantiate a CBV directly instead of routing through `as_view()`, which constructs the view and passes `request` when called.

### Fix

Use `MyView.as_view()` in URL patterns.

#### Wrong code

```python
urlpatterns = [
    path('x/', MyView()),
]
```

#### Fixed code

```python
urlpatterns = [
    path('x/', MyView.as_view()),
]
```
