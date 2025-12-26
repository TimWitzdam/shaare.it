---
title: "FieldError: Unknown field(s) specified"
description: "Passing non-existent fields to ModelForm or QuerySet filters."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## FieldError: Unknown fields

```bash
$ python -c "class X: pass; getattr(X,'missing')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: type object 'X' has no attribute 'missing'
```

### Why this happens

You referenced fields not on the model (typos, renamed fields) in filters, annotations, or forms.

### Fix

Verify field names against the model; update forms and queries accordingly.

#### Wrong code

```python
User.objects.filter(usename='joe')
```

#### Fixed code

```python
User.objects.filter(username='joe')
```
