---
title: "TypeError: QuerySet is not iterable in template context"
description: "Passing non-iterable or evaluating incorrectly in templates causes TypeError during rendering."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: QuerySet not iterable in template

```bash
$ python - <<'PY'
q=None
try:
    for x in q: pass
except Exception as e:
    print(type(e).__name__, e)
PY
TypeError 'NoneType' object is not iterable
```

### Why this happens

Context variable is `None` instead of a queryset.

### Fix

Ensure you pass a queryset or list.

#### Wrong code

```python
return render(request, 'list.html', {'items': None})
```

#### Fixed code

```python
return render(request, 'list.html', {'items': Item.objects.all()})
```
