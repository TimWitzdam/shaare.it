---
title: "NoReverseMatch: Reverse with arguments not found"
description: "Mismatch between path converter and provided kwargs when reversing URLs."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## NoReverseMatch: arguments mismatch

```bash
$ python - <<'PY'
from django.urls import reverse
try:
    print(reverse('detail', kwargs={'slug': 'x'}))
except Exception as e:
    print(type(e).__name__, e)
PY
NoReverseMatch Reverse for 'detail' with keyword arguments '{'slug': 'x'}' not found.
```

### Why this happens

Your URL pattern expects different parameters (e.g., `pk` not `slug`) or types (int vs str) than what you're passing.

### Fix

Pass the correct kwargs matching the path converters.

#### Wrong code

```python
path('items/<int:pk>/', detail, name='detail')
reverse('detail', kwargs={'slug': 'x'})
```

#### Fixed code

```python
path('items/<int:pk>/', detail, name='detail')
reverse('detail', kwargs={'pk': 1})
```
