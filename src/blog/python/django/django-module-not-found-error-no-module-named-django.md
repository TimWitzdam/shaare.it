---
title: "ModuleNotFoundError: No module named 'django'"
description: "Django not installed in environment and resolving missing package errors."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ModuleNotFoundError: No module named 'django'

```bash
$ python -c "import django"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ModuleNotFoundError: No module named 'django'
```

### Why this happens

Django isn't installed in the current Python environment, or you're using a different interpreter/virtualenv than expected.

### Fix

Install Django into the active environment and verify you are using the correct interpreter.

#### Wrong code

```python
import django
print(django.get_version())
```

#### Fixed code

```python
# Ensure the environment has Django installed
# pip install django

import django
print(django.get_version())
```
