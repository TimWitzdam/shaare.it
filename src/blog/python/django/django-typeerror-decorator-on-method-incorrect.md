---
title: "TypeError: decorator applied incorrectly on method"
description: "Using function decorators directly on methods without method_decorator can break CBVs."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: decorator on method incorrect

```bash
$ python - <<'PY'
def dec(f):
    def w(*a, **k): return f(*a, **k)
    return w
class C:
    @dec
    def get(self, request): pass
PY
# Works, but Django-specific decorators may require method_decorator
```

### Why this happens

Decorators like `login_required` expect functions with `request` only; applying directly to methods can change the signature.

### Fix

Wrap with `method_decorator` or decorate `dispatch`.

#### Wrong code

```python
class MyView(View):
    @login_required
    def get(self, request): ...
```

#### Fixed code

```python
from django.utils.decorators import method_decorator

@method_decorator(login_required, name='dispatch')
class MyView(View):
    def get(self, request): ...
```
