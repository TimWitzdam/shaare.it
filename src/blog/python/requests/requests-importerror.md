---
title: "ImportError: No module named requests"
description: "ImportError when Requests isn't installed in your environment and how to fix it."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ImportError: No module named requests

```bash
$ python -c "import requests"
Traceback (most recent call last):
  ...
ImportError: No module named requests
```

### Why this happens

Requests isn't installed in the active Python environment.

### Fix

Install via pip in the correct environment.

#### Wrong code

```python
# assumes requests is present
import requests
```

#### Fixed code

```python
# install first: pip install requests
import requests
print(requests.__version__)
```
