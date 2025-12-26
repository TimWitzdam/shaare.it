---
title: "TypeError / ValueError: invalid compression argument when calling DataFrame.to_pickle"
description: "Why setting an unsupported compression type for `to_pickle` raises an error and how to use supported compression values or the recommended approaches."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError / ValueError: invalid compression argument when calling `to_pickle`

```bash
$ python - << 'PY'
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
try:
    df.to_pickle('out.pkl', compression='xyz')
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

`DataFrame.to_pickle()` supports optional compression to reduce file size, but only accepts certain valid compression methods (like `gzip`, `bz2`, `xz`, or `zip`) depending on your pandas and Python environment. Passing a compression string pandas doesn't recognize typically raises `ValueError` or `TypeError`.

### Fix

Use one of the supported compression values, or omit compression and compress the file separately. If you need a format like `zip`, ensure the environment supports it.

#### Wrong code

```python
# Invalid compression string
df.to_pickle('out.pkl', compression='xyz')  # ValueError / TypeError
```

#### Fixed code

```python
# Use supported compressions: e.g., gzip
df.to_pickle('out.gz', compression='gzip')
# Or bz2
df.to_pickle('out.bz2', compression='bz2')
# Or no compression
df.to_pickle('out.pkl', compression=None)
```

Notes:

- Available options depend on pandas and Python versions (for example, `zip` support changed across versions). When in doubt, consult `pd.to_pickle` docs for allowed `compression` values or compress the resulting file with an external tool.
