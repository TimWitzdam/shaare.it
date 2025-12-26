---
title: "TypeError: view missing required kwargs"
description: "URL pattern requires kwargs that view doesn’t accept or you didn’t pass."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: view missing required kwargs

```bash
$ python manage.py runserver
...
TypeError: detail() missing 1 required positional argument: 'pk'
```

### Why this happens

Pattern includes `<int:pk>` but your view signature doesn’t accept `pk`.

### Fix

Add the parameter to the view or change the pattern.

#### Wrong code

```python
def detail(request):
    ...
```

#### Fixed code

```python
def detail(request, pk):
    ...
```
