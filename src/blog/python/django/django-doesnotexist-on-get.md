---
title: "DoesNotExist: raised by get()"
description: "Using get() when the object may not exist and safer alternatives like get_object_or_404."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## DoesNotExist on get()

```bash
$ python - <<'PY'
class E(Exception): pass
try:
    raise E('missing')
except Exception as e:
    print(type(e).__name__, e)
PY
E missing
```

### Why this happens

`get()` requires exactly one match; zero matches raises `DoesNotExist`.

### Fix

Use `get_object_or_404` in views or check existence first.

#### Wrong code

```python
item = Item.objects.get(pk=999)
```

#### Fixed code

```python
from django.shortcuts import get_object_or_404
item = get_object_or_404(Item, pk=999)
```
