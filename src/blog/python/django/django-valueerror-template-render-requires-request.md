---
title: "ValueError: template render() requires request"
description: "Using TemplateResponse or render with missing request in CBVs or manual responses."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ValueError: template render() requires request

```bash
$ python manage.py runserver
...
ValueError: render() must be called with a request
```

### Why this happens

You called `render()` without passing `request`.

### Fix

Pass `request` from view.

#### Wrong code

```python
return render('template.html', {})
```

#### Fixed code

```python
return render(request, 'template.html', {})
```
