---
title: "MigrationError: App label is not unique"
description: "Duplicate app labels across INSTALLED_APPS or packages."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## MigrationError: App label is not unique

```bash
$ python manage.py makemigrations
...
ImproperlyConfigured: Application labels aren't unique, duplicates: blog
```

### Why this happens

Two apps share the same label (module name) causing conflicts.

### Fix

Rename one app or set `label` in AppConfig.

#### Wrong code

```python
# both apps named 'blog'
INSTALLED_APPS = ["blog", "another.blog"]
```

#### Fixed code

```python
# another/blog/apps.py
class AnotherBlogConfig(AppConfig):
    name = "another.blog"
    label = "another_blog"
```
