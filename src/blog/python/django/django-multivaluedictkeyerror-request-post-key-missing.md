---
title: "MultiValueDictKeyError: 'key'"
description: "Accessing missing keys in request.POST/GET without defaults throws MultiValueDictKeyError."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## MultiValueDictKeyError: key missing

```bash
$ python - <<'PY'
from django.utils.datastructures import MultiValueDict
m=MultiValueDict()
try:
    print(m['x'])
except Exception as e:
    print(type(e).__name__, e)
PY
MultiValueDictKeyError 'x'
```

### Why this happens

Key not present in request dict.

### Fix

Use `.get('key')` with default or check existence.

#### Wrong code

```python
value = request.POST['email']
```

#### Fixed code

```python
value = request.POST.get('email', '')
```
