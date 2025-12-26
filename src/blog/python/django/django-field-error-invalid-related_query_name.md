---
title: "FieldError: Invalid related_query_name"
description: "Misconfigured related_query_name causing ORM errors."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## FieldError: Invalid related_query_name

```bash
$ python manage.py makemigrations
...
FieldError: 'related_query_name' must be a valid name
```

### Why this happens

You provided an invalid `related_query_name` (contains spaces or conflicts with existing fields).

### Fix

Use a valid Python identifier and ensure it doesn’t clash with fields or managers.

#### Wrong code

```python
class Book(models.Model):
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_query_name="bad name")
```

#### Fixed code

```python
class Book(models.Model):
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_query_name="books")

# Usage
Author.objects.filter(books__title__icontains="Django")
```
