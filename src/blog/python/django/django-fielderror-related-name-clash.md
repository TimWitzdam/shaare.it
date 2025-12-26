---
title: "FieldError: related_name clashes with another field"
description: "Duplicate reverse relation names causing model import errors and checks failures."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## FieldError: related_name clashes

```bash
$ python -c "class A: pass; class B: pass"
# Clash shows during Django checks
```

### Why this happens

Two ForeignKey/ManyToMany fields define the same `related_name`, causing ambiguous reverse accessors.

### Fix

Use unique `related_name` values or `related_name='+'` to disable reverse relation.

#### Wrong code

```python
class Order(models.Model):
    user = models.ForeignKey(User, related_name='items', on_delete=models.CASCADE)

class Cart(models.Model):
    user = models.ForeignKey(User, related_name='items', on_delete=models.CASCADE)
```

#### Fixed code

```python
class Order(models.Model):
    user = models.ForeignKey(User, related_name='orders', on_delete=models.CASCADE)

class Cart(models.Model):
    user = models.ForeignKey(User, related_name='carts', on_delete=models.CASCADE)
```
