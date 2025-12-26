---
title: "TypeError: Cannot cast array data from dtype A to dtype B according to the rule 'safe'"
description: "NumPy raises TypeError when a cast would lose information or can't be done under the chosen 'casting' rule."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: Cannot cast array data from dtype A to dtype B according to the rule 'safe'

```bash
$ python - <<'PY'
import numpy as np
src = np.array([1.1, 2.2])
dst = np.empty(2, dtype=np.int32)
# attempt to copy with 'safe' casting -> not allowed
np.copyto(dst, src, casting='safe')
PY
Traceback (most recent call last):
  File "<string>", line 5, in <module>
TypeError: Cannot cast array data from dtype('float64') to dtype('int32') according to the rule 'safe'
```

### Why this happens

Methods like `np.copyto`, or explicit uses of `np.can_cast` and `np.astype` with a `casting` rule check whether a conversion is considered safe. Conversions that can lose information (for example float -> int) are not considered safe and will raise a TypeError when `casting='safe'` is specified.

### Fix

- Convert explicitly using `.astype()` when you know what you're doing: `src.astype(dst.dtype)`.
- Use a less strict `casting` rule (e.g. `'unsafe'`), but carefully acknowledge that data loss can occur.
- Round or transform data to safe values before casting if necessary.

#### Wrong code

```python
import numpy as np
src = np.array([1.1, 2.2])
dst = np.empty(2, dtype=np.int32)
np.copyto(dst, src, casting='safe')  # TypeError
```

#### Fixed code

```python
import numpy as np
src = np.array([1.1, 2.2])
# Convert explicitly
dst = src.astype(np.int32)
print(dst)  # [1, 2]

# Use copyto with a less strict casting rule (unsafe)
dst2 = np.empty(2, dtype=np.int32)
np.copyto(dst2, src, casting='unsafe')
print(dst2)

# Or handle rounding explicitly
dst3 = np.rint(src).astype(np.int32)
print(dst3)  # [1 2]
```
