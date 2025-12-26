---
title: "ModuleNotFoundError: No module named 'PIL' (Pillow)"
description: "Pillow is required for some image IO operations in Matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ModuleNotFoundError: No module named 'PIL'

```bash
$ python -c "from PIL import Image"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ModuleNotFoundError: No module named 'PIL'
```

### Why this happens

Pillow is not installed.

### Fix

Install Pillow.

#### Wrong code

```python
from PIL import Image
Image.open('pic.png')
```

#### Fixed code

```python
# pip install pillow
from PIL import Image
Image.open('pic.png')
```
