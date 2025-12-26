---
title: "TypeError: re_path() pattern must be a string"
description: "Accidentally passing compiled regex object to re_path instead of pattern string."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: re_path() pattern must be a string

```bash
$ python manage.py runserver
...
TypeError: expected string or bytes-like object
```

### Why this happens

You passed `re.compile()` result to `re_path`.

### Fix

Provide the raw regex string.

#### Wrong code

```python
import re
re_path(re.compile(r"^posts/$"), views.index)
```

#### Fixed code

```python
re_path(r"^posts/$", views.index)
```
