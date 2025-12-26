---
title: "TypeError: got None for ManyToMany add()"
description: "Adding None or unsaved instances to ManyToMany relations raises errors in Django."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: ManyToMany add None

```bash
$ python - <<'PY'
l = []
l.append(None)
PY
# Django ManyToMany.add(None) raises TypeError
```

### Why this happens

You called `add()` with `None` or unsaved objects.

### Fix

Ensure instances are saved and non-null.

#### Wrong code

```python
item.tags.add(None)
```

#### Fixed code

```python
tag = Tag.objects.create(name='x')
item.tags.add(tag)
```
