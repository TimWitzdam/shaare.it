---
title: "AttributeError: 'Settings' object has no attribute 'X'"
description: "Accessing undefined settings or typos leads to AttributeError on settings object."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: Settings missing attribute

```bash
$ python - <<'PY'
class S: pass
s=S()
try:
    print(s.MY_SETTING)
except Exception as e:
    print(type(e).__name__, e)
PY
AttributeError 'S' object has no attribute 'MY_SETTING'
```

### Why this happens

Setting isn't defined in your settings module.

### Fix

Define default or use `getattr(settings, 'X', default)`.

#### Wrong code

```python
if settings.MY_FLAG:
    ...
```

#### Fixed code

```python
from django.conf import settings
if getattr(settings, 'MY_FLAG', False):
    ...
```
