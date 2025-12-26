---
title: "AttributeError: 'Flask' object has no attribute 'config.from_object'"
description: "How to correctly load configuration in Flask using from_object/py files."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: config.from_object misuse

```bash
$ python app.py
Traceback (most recent call last):
  ...
AttributeError: 'Flask' object has no attribute 'config.from_object'
```

### Why this happens

`from_object` is a method on `app.config`, not on `app` directly. Calling `app.from_object(...)` or `app.config.from_object` incorrectly can raise errors.

### Fix

- Use `app.config.from_object('config_module')` or `app.config.from_mapping({...})`.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)
app.from_object("settings")  # wrong
```

#### Fixed code

```python
from flask import Flask
app = Flask(__name__)
app.config.from_object("settings")
```
