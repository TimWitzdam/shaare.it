---
title: "ValidationError: invalid choice for form field"
description: "Submitting a value not present in ChoiceField choices or model choices."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ValidationError: invalid choice for form field

```bash
$ python manage.py shell -c "from django import forms; class F(forms.Form): x=forms.ChoiceField(choices=[('a','A')]); F({'x':'b'}).is_valid()"
False
```

### Why this happens

Value not in `choices`.

### Fix

Add choice or validate input to allowed values.

#### Wrong code

```python
F({"x": "b"}).is_valid()
```

#### Fixed code

```python
F({"x": "a"}).is_valid()
# or expand choices
```
