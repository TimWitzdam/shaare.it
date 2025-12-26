---
title: "ValueError: save() prohibited to prevent data loss due to unsaved related object"
description: "Saving objects with unsaved foreign keys or m2m relations triggers protection in Django ORM."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ValueError: save() prohibited to prevent data loss

```bash
$ python - <<'PY'
class Parent:
    def __init__(self): self.id=None
class Child:
    parent=None
PY
# Django raises ValueError if a related object is unsaved
```

### Why this happens

You assigned an unsaved related object to a foreign key. Django prevents saving to avoid dangling references.

### Fix

Save the related object first.

#### Wrong code

```python
parent = Parent()
child.parent = parent
child.save()
```

#### Fixed code

```python
parent = Parent()
parent.save()
child.parent = parent
child.save()
```
