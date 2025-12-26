---
title: "TypeError: static_folder must be a string"
description: "Setting static_folder to non-string types in Flask app or blueprint raises TypeError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: static_folder must be a string

```bash
$ python -c "from flask import Flask; app=Flask(__name__, static_folder=123)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: static_folder must be a string
```

### Why this happens

`static_folder` config expects a filesystem path as a string. Passing integers or other objects raises `TypeError`. This often happens when reading configuration from environment without converting types.

### Fix

Provide a proper string path or `None` to disable static. Use absolute or relative paths as strings.

#### Wrong code

```python
from flask import Flask

app = Flask(__name__, static_folder=123)
```

#### Fixed code

```python
from flask import Flask

app = Flask(__name__, static_folder="static")
```

### Additional notes

- Blueprints also accept `static_folder` string.
- Combine with `static_url_path` to customize URL.
- Ensure the folder exists to avoid 404 when serving static files.
