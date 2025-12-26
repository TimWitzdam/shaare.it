---
title: "AttributeError: object has no attribute 'objects'"
description: "Using instance instead of model class when accessing the manager 'objects'."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: no 'objects' on instance

```bash
$ python - <<'PY'
class M: pass
m=M()
try:
    print(m.objects)
except Exception as e:
    print(type(e).__name__, e)
PY
AttributeError 'M' object has no attribute 'objects'
```

### Why this happens

`objects` is a manager on the model class, not instances.

### Fix

Access via `Model.objects`.

#### Wrong code

```python
item = Item()
item.objects.all()
```

#### Fixed code

```python
Item.objects.all()
```
