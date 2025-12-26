---
title: "AttributeError: current_app has no attribute 'config'"
description: "Accessing current_app.config outside an app context or due to name shadowing leads to AttributeError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError on current_app.config

```bash
$ python app.py
Traceback (most recent call last):
  File "app.py", line 10, in <module>
    print(current_app.config['SECRET_KEY'])
AttributeError: 'LocalProxy' object has no attribute 'config'
```

### Why this happens

`current_app` is a context-local proxy. Outside `app.app_context()` or a request, it isn’t bound to an application, so attribute access fails. It can also fail if you shadow `current_app` with another name.

### Fix

Use `with app.app_context():` before accessing, or pass `app` explicitly to modules/functions that need configuration.

#### Wrong code

```python
# config_reader.py
from flask import current_app
print(current_app.config['SECRET_KEY'])  # runs at import time, no context
```

#### Fixed code

```python
# app.py
from flask import Flask
app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev'

with app.app_context():
    print(app.config['SECRET_KEY'])
```

### Tips

- Avoid executing config reads at import time.
- For tests, wrap config-dependent code in an app context.
