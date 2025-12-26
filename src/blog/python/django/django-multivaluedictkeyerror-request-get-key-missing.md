---
title: "MultiValueDictKeyError: request.GET key missing"
description: "Accessing GET parameter by key without checking existence in QueryDict."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## MultiValueDictKeyError: request.GET key missing

```bash
$ python manage.py runserver
...
MultiValueDictKeyError: 'page'
```

### Why this happens

You accessed `request.GET['page']` when the query param is absent.

### Fix

Use `.get()` with default.

#### Wrong code

```python
page = request.GET['page']
```

#### Fixed code

```python
page = request.GET.get('page', '1')
```
