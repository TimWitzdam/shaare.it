---
title: "TypeError: got multiple values for argument 'pk'"
description: "Duplicate argument passing from URLconf and view signature in Django."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: multiple values for argument 'pk'

```bash
$ python -c "def f(pk, **kwargs): pass; f(1, pk=2)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: f() got multiple values for argument 'pk'
```

### Why this happens

You pass `pk` both positionally and as a keyword, often via URL pattern capturing and also decorating/wrapping the view incorrectly.

### Fix

Accept `pk` only once and avoid passing duplicate args from wrappers.

#### Wrong code

```python
def detail(request, pk):
    return show(request, pk=pk)

def show(request, pk, *args, **kwargs):
    return ...
```

#### Fixed code

```python
def detail(request, pk):
    return show(request, pk)

def show(request, pk, *args, **kwargs):
    return ...
```
