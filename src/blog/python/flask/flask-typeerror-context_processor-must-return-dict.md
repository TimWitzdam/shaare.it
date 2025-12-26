---
title: "TypeError: context_processor must return a dict"
description: "Template context processors must yield dictionaries; other types raise TypeError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: context_processor must return a dict

```bash
$ python -c "from flask import Flask; app=Flask(__name__); @app.context_processor\ndef cp(): return 123"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: context processor must return a dictionary
```

### Why this happens

A context processor injects variables into templates and must return a dictionary mapping names to values. Returning integers, lists, or other types causes Flask to fail when merging contexts.

### Fix

Return a dict and ensure values are JSON/HTML-safe or serializable as needed.

#### Wrong code

```python
from flask import Flask

app = Flask(__name__)

@app.context_processor
def inject():
    return ["x", "y"]  # ❌ not a dict
```

#### Fixed code

```python
from flask import Flask

app = Flask(__name__)

@app.context_processor
def inject():
    return {"app_name": "Demo", "year": 2025}  # ✅ dict
```

### Additional notes

- For blueprints, use `@bp.context_processor`.
- Avoid heavy computations in context processors; they run per render.
- Name collisions are resolved by later processors overriding earlier keys.
