---
title: "AttributeError: app.config.from_file missing or misused"
description: "Using app.config.from_file incorrectly can raise AttributeError in some Flask versions or custom apps."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AttributeError: app.config.from_file

```bash
$ flask --app app.py shell -c "from app import app; app.config.from_file('config.json', load=json.load)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'Config' object has no attribute 'from_file'
```

### Why this happens

Older Flask versions (and some forks) may not offer `Config.from_file`. Or you tried to call it without providing a loader function (`load=`) for non-Python formats. In other cases, you replaced `app.config` with a plain dict, losing methods.

### Fix

- Use a supported Flask version that includes `Config.from_file`, or use `from_envvar`/direct Python loading.
- Do not overwrite `app.config` with a dict.
- Provide a loader callable for the file format.

#### Wrong code

```python
from flask import Flask
import json
app = Flask(__name__)

# Overwriting app.config removes methods
app.config = {}
app.config.from_file('config.json', load=json.load)
```

#### Fixed code

```python
from flask import Flask
import json
app = Flask(__name__)

# Keep Config object and provide a loader
app.config.from_file('config.json', load=json.load)
# Or fallback:
with open('config.json') as f:
    app.config.update(json.load(f))
```

### Tip

Prefer environment variables plus `Config.from_mapping` to avoid file IO during startup.
