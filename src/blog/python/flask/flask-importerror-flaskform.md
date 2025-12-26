---
title: "ImportError: cannot import name 'FlaskForm'"
description: "Install Flask-WTF and import correctly—avoid missing FlaskForm symbol and shadowing in Flask apps."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: FlaskForm

```bash
$ python -c "from flask_wtf import FlaskForm"
Traceback (most recent call last):
  ...
ImportError: cannot import name 'FlaskForm'
```

### Why this happens

`FlaskForm` is provided by Flask-WTF, not Flask. If the package isn’t installed or you shadow it with local files, imports fail.

### Fix

- Install Flask-WTF and import from `flask_wtf`.

#### Wrong code

```python
from flask import FlaskForm  # wrong package
```

#### Fixed code

```python
from flask_wtf import FlaskForm
```
