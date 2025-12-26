---
title: "AttributeError: current_app has no attribute 'logger'"
description: "Shadowing current_app or misconfiguring the app object can hide the logger attribute."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: current_app.logger missing

```bash
$ flask --app app.py shell -c "from flask import current_app; print(current_app.logger)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'LocalProxy' object has no attribute 'logger'
```

### Why this happens

Accessing `current_app` outside an application context or replacing the app with a custom object can cause the proxy to point to `None`, making attributes like `logger` inaccessible.

### Fix

Push an app context before using `current_app`, or reference the real `app` object directly in modules where appropriate.

#### Wrong code

```python
from flask import current_app

# At import time
current_app.logger.info('Booting')
```

#### Fixed code

```python
from flask import Flask, current_app
app = Flask(__name__)

with app.app_context():
    current_app.logger.info('Booting')
```

### Tip

Prefer `app.logger` inside the module where you created the app. Use `current_app` in code that runs during a request or within an app context.
