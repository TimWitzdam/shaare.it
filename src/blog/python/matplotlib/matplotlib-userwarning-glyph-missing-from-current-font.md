---
title: "UserWarning: Glyph missing from current font"
description: "The chosen font lacks glyphs; switch fonts or install missing ones."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## UserWarning: Glyph missing from current font

```bash
$ python -c "import matplotlib.pyplot as plt; plt.title('Unicode: \u262F'); plt.show()"
/usr/lib/.../matplotlib/textpath.py:...: UserWarning: Glyph missing from current font
```

### Why this happens

The current font doesn't include the required Unicode glyph.

### Fix

Choose a font with the glyph or install fonts that support it.

#### Wrong code

```python
import matplotlib.pyplot as plt
plt.title('\u262F')
```

#### Fixed code

```python
import matplotlib.pyplot as plt
plt.rcParams['font.family'] = 'DejaVu Sans'
plt.title('\u262F')
plt.show()
```
