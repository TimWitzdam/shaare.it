---
title: "ModuleNotFoundError: No module named 'cycler'"
description: "Missing Cycler dependency used by Matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ModuleNotFoundError: No module named 'cycler'

```bash
$ python -c "import cycler"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ModuleNotFoundError: No module named 'cycler'
```

### Why this happens

The `cycler` package is not installed in the current environment.

### Fix

Install the dependency.

#### Wrong code

```python
import cycler
cycler.cycler(color=['r', 'g'])
```

#### Fixed code

```python
# pip install cycler
import cycler
cycler.cycler(color=['r', 'g'])
```
