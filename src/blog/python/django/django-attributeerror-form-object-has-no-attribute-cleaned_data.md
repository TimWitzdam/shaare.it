---
title: "AttributeError: 'Form' object has no attribute 'cleaned_data'"
description: "Accessing cleaned_data before form validation."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: 'Form' object has no attribute 'cleaned_data'

```bash
$ python manage.py shell -c "from django import forms; class F(forms.Form): x=forms.IntegerField(); f=F({}); print(f.cleaned_data)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'F' object has no attribute 'cleaned_data'
```

### Why this happens

You didn’t call `is_valid()` yet; `cleaned_data` is only added after successful validation.

### Fix

Call `form.is_valid()` and then access `form.cleaned_data`.

#### Wrong code

```python
f = F(request.POST)
print(f.cleaned_data)
```

#### Fixed code

```python
f = F(request.POST)
if f.is_valid():
    print(f.cleaned_data)
else:
    print(f.errors)
```
