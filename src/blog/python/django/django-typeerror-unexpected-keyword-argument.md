---
title: "TypeError: got an unexpected keyword argument 'slug'"
description: "Function-based view doesn't accept kwargs captured by URL pattern."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: unexpected keyword argument

```bash
$ python -c "def f(pk): pass; f(slug='x')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: f() got an unexpected keyword argument 'slug'
```

### Why this happens

URL converter passes `slug` but your view expects `pk` or no kwargs.

### Fix

Match view parameters to URL kwargs or use `**kwargs`.

#### Wrong code

```python
path('items/<slug:slug>/', view)

def view(request, pk):
    ...
```

#### Fixed code

```python
path('items/<slug:slug>/', view)

def view(request, slug):
    ...
```
