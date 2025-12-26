---
title: "ValueError: Invalid blueprint name"
description: "Blueprint names must be valid identifiers—avoid collisions and invalid chars in Flask apps."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ValueError: invalid blueprint name

```bash
$ flask run
Traceback (most recent call last):
  ...
ValueError: 'main/home' is not a valid blueprint name
```

### Why this happens

Blueprint names can’t include slashes or invalid characters and must be unique across the app.

### Fix

- Use simple identifiers like `main`, `auth`, `api` and avoid special characters.

#### Wrong code

```python
from flask import Blueprint
bp = Blueprint('main/home', __name__)  # invalid
```

#### Fixed code

```python
from flask import Blueprint
bp = Blueprint('main', __name__)
```
