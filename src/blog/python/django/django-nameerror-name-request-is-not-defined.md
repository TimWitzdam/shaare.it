---
title: "NameError: name 'request' is not defined"
description: "Using request outside of view scope or missing parameter in function-based views."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## NameError: name 'request' is not defined

```bash
$ python -c "print(request)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
NameError: name 'request' is not defined
```

### Why this happens

`request` is provided by Django only inside view functions/methods. If your view doesn't accept `request` or you're using `request` in modules where it's not passed, you'll get `NameError`.

### Fix

Accept `request` in your view signature and pass it along where needed.

#### Wrong code

```python
from django.shortcuts import render

def home():
    return render(request, "home.html")
```

#### Fixed code

```python
from django.shortcuts import render

def home(request):
    return render(request, "home.html")
```
