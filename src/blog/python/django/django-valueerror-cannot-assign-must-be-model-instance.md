---
title: 'ValueError: Cannot assign "x": must be a "Model" instance'
description: "Assigning raw primary keys or wrong types to ForeignKey fields in Django models."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ValueError: must be a Model instance

```bash
$ python -c "class Parent: pass; class Child: pass; c=Child(); c.parent=1"
# In Django, this raises ValueError when saving
```

### Why this happens

You assigned a raw value to a relationship without using a proper model instance.

### Fix

Fetch the related instance and assign it.

#### Wrong code

```python
child.parent = 1
child.save()
```

#### Fixed code

```python
child.parent = Parent.objects.get(pk=1)
child.save()
```
