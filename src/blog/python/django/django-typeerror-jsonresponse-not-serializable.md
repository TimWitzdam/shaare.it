---
title: "TypeError: JsonResponse not serializable"
description: "Passing QuerySet or complex objects to JsonResponse without safe conversion raises TypeError."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: JsonResponse not serializable

```bash
$ python - <<'PY'
from django.http import JsonResponse
try:
    JsonResponse({'x': set([1])})
except Exception as e:
    print(type(e).__name__, e)
PY
TypeError Object of type set is not JSON serializable
```

### Why this happens

Non-serializable types passed to `JsonResponse`.

### Fix

Convert to lists/dicts or use `safe=False` for non-dict top-level.

#### Wrong code

```python
return JsonResponse(Item.objects.all())
```

#### Fixed code

```python
return JsonResponse(list(Item.objects.values('id','name')), safe=False)
```
