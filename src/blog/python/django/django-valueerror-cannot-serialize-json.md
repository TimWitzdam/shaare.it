---
title: "ValueError: Cannot serialize to JSON"
description: "Non-serializable types in JsonResponse or DRF responses and how to convert them."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ValueError: Cannot serialize JSON

```bash
$ python - <<'PY'
import json
json.dumps(set([1,2]))
PY
Traceback (most recent call last):
TypeError: Object of type set is not JSON serializable
```

### Why this happens

You return complex types (QuerySet, set, datetime without default) directly in `JsonResponse`.

### Fix

Convert to list/dict, use `values()`, or custom encoder.

#### Wrong code

```python
return JsonResponse({'items': Item.objects.all()})
```

#### Fixed code

```python
return JsonResponse({'items': list(Item.objects.values('id','name'))})
```
