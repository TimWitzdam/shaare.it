---
title: "AttributeError: 'User' object has no attribute 'is_authenticated'"
description: "Implement Flask-Login requirements on user objects—provide required properties and methods to avoid attribute errors in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: is_authenticated missing

```bash
$ flask run
Traceback (most recent call last):
  ...
AttributeError: 'User' object has no attribute 'is_authenticated'
```

### Why this happens

Flask-Login expects user objects to implement properties/methods like `is_authenticated`, `is_active`, `get_id()`. If your model lacks them, accessing `current_user` will fail.

### Fix

- Implement the interface via mixins or properties.

#### Wrong code

```python
class User:
    pass
```

#### Fixed code

```python
from flask_login import UserMixin

class User(UserMixin):
    def __init__(self, id):
        self.id = id
```
