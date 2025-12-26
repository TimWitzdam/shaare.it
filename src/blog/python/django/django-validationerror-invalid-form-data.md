---
title: "ValidationError: Invalid form data"
description: "Form validation errors due to missing required fields, bad types, or custom validators failing."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ValidationError: Invalid form data

```bash
$ python - <<'PY'
from django import forms
class F(forms.Form):
    age = forms.IntegerField(min_value=1)
form = F({'age': 'abc'})
print(form.is_valid(), form.errors)
PY
False {'age': ['Enter a whole number.']}
```

### Why this happens

Input doesn't meet field requirements or custom `clean_*` raises `ValidationError`.

### Fix

Provide correct types, add form error display, and handle invalid states.

#### Wrong code

```python
if form.is_valid():
    save(form.cleaned_data)
# else ignored
```

#### Fixed code

```python
if form.is_valid():
    save(form.cleaned_data)
else:
    return render(request, 'form.html', {'form': form})
```
