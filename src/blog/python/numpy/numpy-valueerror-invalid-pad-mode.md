---
title: "ValueError: invalid pad mode for np.pad"
description: "np.pad raises a ValueError when the 'mode' argument is invalid or misspelled (e.g., 'constant', 'reflect', 'edge', etc.)."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: invalid pad mode for np.pad

```bash
$ python - <<'PY'
import numpy as np
arr = np.array([1, 2, 3])
np.pad(arr, 1, mode='mirror')
PY
# ValueError: mode 'mirror' is not understood
```

### Why this happens

`np.pad` supports a fixed set of modes (e.g., `'constant'`, `'reflect'`, `'edge'`, `'symmetric'`). Using an unsupported mode name (misspelling or an incorrect option) triggers a ValueError because NumPy cannot interpret how to pad the array.

### Fix

Use a valid `mode` string or provide the appropriate `pad_width` and `constant_values` for `'constant'` mode. Double-check the mode name spelling and consult `np.pad` docs for supported modes.

#### Wrong code

```python
import numpy as np
arr = np.array([1, 2, 3])
np.pad(arr, 1, mode='mirror')  # 'mirror' is not a supported mode
```

#### Fixed code

```python
import numpy as np
arr = np.array([1, 2, 3])
# Use a supported mode like 'reflect'
print(np.pad(arr, 1, mode='reflect'))
# Or use constant padding by setting mode='constant'
print(np.pad(arr, 2, mode='constant', constant_values=0))
```
