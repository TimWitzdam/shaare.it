---
title: "ModuleNotFoundError: No module named 'kiwisolver'"
description: "Missing kiwisolver dependency required by Matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ModuleNotFoundError: No module named 'kiwisolver'

```bash
$ python -c "import kiwisolver"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ModuleNotFoundError: No module named 'kiwisolver'
```

### Why this happens

The `kiwisolver` package is missing.

### Fix

Install the dependency.

#### Wrong code

```python
import kiwisolver
```

#### Fixed code

```python
# pip install kiwisolver
import kiwisolver
```
