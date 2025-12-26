---
title: "TypeError: as_view() takes 1 positional argument but 2 were given"
description: "Passing request or extra positional args to as_view instead of using keyword args or URL routing."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: as_view argument mismatch

```bash
$ python - <<'PY'
class V:
    @classmethod
    def as_view(cls): return lambda request: None
V.as_view('extra')
PY
Traceback (most recent call last):
TypeError: as_view() takes 1 positional argument but 2 were given
```

### Why this happens

You passed positional args to `as_view()` instead of providing attributes via `as_view(**kwargs)` or URL parameters.

### Fix

Call `as_view()` without extra positional args; configure via class attributes or keyword args.

#### Wrong code

```python
path('x/', MyView.as_view(request))
```

#### Fixed code

```python
path('x/', MyView.as_view())
```
