---
title: "ValueError: unknown URL type for redirect"
description: "Passing malformed URLs or paths to redirect() causes unknown URL type errors."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ValueError: unknown URL type for redirect

```bash
$ python - <<'PY'
from urllib.parse import urlparse
print(urlparse('htp://bad'))
PY
ParseResult(scheme='htp', netloc='', path='bad', params='', query='', fragment='')
```

### Why this happens

Invalid scheme or not using `reverse()` for internal paths.

### Fix

Use `redirect('view-name', args...)` or valid absolute URLs.

#### Wrong code

```python
return redirect('htp://bad')
```

#### Fixed code

```python
from django.shortcuts import redirect
return redirect('home')
```
