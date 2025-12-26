---
title: "TemplateSyntaxError: could not parse filter argument"
description: "Incorrect filter syntax or missing quotes in template filters."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TemplateSyntaxError: could not parse filter argument

```bash
$ python manage.py runserver
...
TemplateSyntaxError: Could not parse the remainder: 'lower(' from 'username|lower('
```

### Why this happens

Forgot closing parenthesis or quotes around arguments.

### Fix

Correct filter usage.

#### Wrong code

```python
{{ username|default:Guest }}
```

#### Fixed code

```python
{{ username|default:"Guest" }}
```
