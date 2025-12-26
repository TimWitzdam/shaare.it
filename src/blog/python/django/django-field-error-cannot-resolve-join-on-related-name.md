---
title: "FieldError: cannot resolve join on related name"
description: "Using incorrect related names in ORM lookups and filters."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## FieldError: cannot resolve join on related name

```bash
$ python manage.py shell -c "from app.models import Author; Author.objects.filter(book__title='x')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
FieldError: Cannot resolve keyword 'book' into field. Choices are: books
```

### Why this happens

Your foreign key used `related_name='books'` but you queried `book`.

### Fix

Use the configured `related_name` or default `modelname_set`.

#### Wrong code

```python
Author.objects.filter(book__title="x")
```

#### Fixed code

```python
Author.objects.filter(books__title="x")
# or
Author.objects.filter(book_set__title="x")
```
