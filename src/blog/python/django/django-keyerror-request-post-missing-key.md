---
title: "KeyError: request.POST missing key"
description: "Accessing POST data without checking existence in MultiValueDict."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## KeyError: request.POST missing key

```bash
$ python manage.py runserver
...
KeyError: 'email'
```

### Why this happens

You accessed `request.POST['email']` when the form didn’t send it.

### Fix

Use `.get()` with default or validate form.

#### Wrong code

```python
email = request.POST['email']
```

#### Fixed code

```python
email = request.POST.get('email')
# or use a Form and validate
```
