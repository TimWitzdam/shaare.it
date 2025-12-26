---
title: "Template Error: VariableDoesNotExist"
description: "Template variable missing due to context errors or typos."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## Template Error: VariableDoesNotExist

```bash
$ python manage.py runserver
...
TemplateSyntaxError: VariableDoesNotExist: Failed lookup for key [usernme]
```

### Why this happens

Context lacks the variable or you mistyped the name.

### Fix

Pass the variable in context or correct the spelling.

#### Wrong code

```python
{{ usernme }}
```

#### Fixed code

```python
{{ username }}
# and ensure your view adds 'username' to context
```
