---
title: "ModuleNotFoundError: No module named 'fontconfig'"
description: "System fontconfig library missing causing font lookup failures."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## ModuleNotFoundError: No module named 'fontconfig'

```bash
$ python -c "import matplotlib.font_manager as fm; fm.findSystemFonts()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ModuleNotFoundError: No module named 'fontconfig'
```

### Why this happens

On some systems, Matplotlib relies on OS-level fontconfig. If it’s missing, font discovery may fail.

### Fix

Install `fontconfig` via your system package manager (Linux: `sudo apt-get install fontconfig`) or use bundled fonts.

#### Wrong code

```python
import matplotlib.font_manager as fm
fm.findSystemFonts()
```

#### Fixed code

```python
# Ensure system dependency installed
# sudo apt-get install -y fontconfig
import matplotlib.font_manager as fm
fm.findSystemFonts()
```
