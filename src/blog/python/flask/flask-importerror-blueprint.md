---
title: "ImportError: cannot import name 'Blueprint' from 'flask'"
description: "Ensure Flask version supports blueprints and avoid name shadowing/import mistakes."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: Blueprint

```bash
$ python -c "from flask import Blueprint"
Traceback (most recent call last):
  ...
ImportError: cannot import name 'Blueprint' from 'flask'
```

### Why this happens

- Old Flask version or misinstalled package.
- Local files shadowing imports.

### Fix

- Upgrade Flask and check your environment for shadowing.

#### Wrong code

```python
from flask import Blueprint
Blueprint = 1  # overwrite symbol
```

#### Fixed code

```python
from flask import Blueprint
bp = Blueprint("main", __name__)
```
