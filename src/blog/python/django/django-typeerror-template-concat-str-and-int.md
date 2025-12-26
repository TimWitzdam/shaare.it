---
title: "TypeError: can't concat str and int in templates"
description: "Mixing types in template concatenation or filters causes TypeError in rendering."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: concat str and int in templates

```bash
$ python - <<'PY'
print('age:' + 10)
PY
Traceback (most recent call last):
TypeError: can only concatenate str (not "int") to str
```

### Why this happens

Using `+` with mixed types in templates via `{{ 'age:' + user.age }}`.

### Fix

Cast to string or use filters.

#### Wrong code

```html
{{ 'age:' + user.age }}
```

#### Fixed code

```html
{{ 'age:'|add:user.age|stringformat:"s" }} # or {{ 'age:' }} {{ user.age }}
```
