---
title: "ImportError: cannot import name 'jsonify' from 'flask'"
description: "jsonify is part of Flask—fix shadowing and environment issues when imports fail in Flask apps."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: jsonify

```bash
$ python -c "from flask import jsonify"
Traceback (most recent call last):
  ...
ImportError: cannot import name 'jsonify' from 'flask'
```

### Why this happens

Local shadowing or broken installation. Rarely, circular imports.

### Fix

- Remove local `flask.py`; reinstall Flask; import inside functions if cycles exist.

#### Wrong code

```python
from flask import json  # not jsonify
```

#### Fixed code

```python
from flask import jsonify
```
