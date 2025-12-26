---
title: "RuntimeError: No application found. Either work inside a view function or push an application context"
description: "Push an application context when using current_app and extensions outside views in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## RuntimeError: no application found

```bash
$ python -c "from flask import current_app; print(current_app.name)"
Traceback (most recent call last):
  ...
RuntimeError: No application found. Either work inside a view function or push an application context.
```

### Why this happens

`current_app` is only available inside an application context. Using it at import time or in standalone scripts without pushing a context triggers this error.

### Fix

- Wrap code with `with app.app_context():` or call within views/CLI commands.

#### Wrong code

```python
from flask import Flask, current_app
app = Flask(__name__)
print(current_app.name)
```

#### Fixed code

```python
from flask import Flask, current_app
app = Flask(__name__)

with app.app_context():
    print(current_app.name)
```
