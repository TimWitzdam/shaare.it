---
title: "FieldError: Cannot resolve keyword 'x' into field"
description: "Filtering across relations with wrong lookup path or typos in field names."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## FieldError: Cannot resolve keyword into field

```bash
$ python -c "d={'name':1}; d['missing']"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
KeyError: 'missing'
```

### Why this happens

The lookup path doesn't exist on the model or relation (e.g., `profile__usernme`).

### Fix

Use correct field names and relation traversals.

#### Wrong code

```python
User.objects.filter(profile__usernme='joe')
```

#### Fixed code

```python
User.objects.filter(profile__username='joe')
```
