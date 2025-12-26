---
title: "RuntimeError: populate() isn't reentrant"
description: "Repeated Django setup or recursive app loading leads to non-reentrant populate errors."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## RuntimeError: populate() isn't reentrant

```bash
$ python - <<'PY'
import threading
lock = threading.Lock()
lock.acquire()
lock.acquire()
PY
# Raises a runtime error in similar scenarios
```

### Why this happens

Calling `django.setup()` multiple times concurrently or importing models in a way that triggers re-entrant app population.

### Fix

Call `django.setup()` once at process start; avoid circular imports.

#### Wrong code

```python
import django
django.setup()
django.setup()
```

#### Fixed code

```python
import django
_did_setup = False
if not _did_setup:
    django.setup()
    _did_setup = True
```
