---
title: "ValueError: ManyToMany add() requires iterable items"
description: "Passing a list versus single item incorrectly to M2M add()."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ValueError: ManyToMany add() requires iterable items

```bash
$ python manage.py shell -c "from app.models import A,B; a=A.objects.create(); b=B.objects.create(); a.bs.add([b])"
Traceback (most recent call last):
  ...
TypeError: 'list' object is not a valid argument. Pass individual instances or use set().
```

### Why this happens

`add()` expects individual items not a list.

### Fix

Unpack the list or use `.set()`.

#### Wrong code

```python
a.bs.add([b1, b2])
```

#### Fixed code

```python
a.bs.add(b1, b2)
# or
a.bs.set([b1, b2])
```
