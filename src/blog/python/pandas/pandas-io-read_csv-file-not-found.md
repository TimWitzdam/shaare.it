---
title: "FileNotFoundError: [Errno 2] No such file or directory"
description: "Read/IO errors when using pd.read_csv or other readers and the file isn't found or path is wrong."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## FileNotFoundError: [Errno 2] No such file or directory

```bash
$ python - <<'PY'
import pandas as pd
pd.read_csv('missing.csv')
PY
Traceback (most recent call last):
  File "<string>", line 2, in <module>
FileNotFoundError: [Errno 2] No such file or directory: 'missing.csv'
```

### Why this happens

Pandas raises `FileNotFoundError` when the path you pass to `read_csv`, `read_excel`, or other I/O helpers doesn't point to an existing file in the filesystem. This happens because the file:

- Doesn't exist at all,
- Is in a different directory than your current working directory,
- The path string is wrong (typos, wrong separators), or
- You're running inside a container or environment with a different working directory.

### Fix

- Verify the file exists, check your current working directory (`pwd`), and use absolute or correct relative paths.
- Use `pathlib.Path` or `os.path` to join path pieces or check `Path.exists()` before calling `pd.read_*`.
- If the file is created at runtime, ensure it was written before reading.

#### Wrong code

```python
import pandas as pd
# expecting file in project root, but running from different cwd
pd.read_csv('data/mydata.csv')  # FileNotFoundError if directory or file not present
```

#### Fixed code

```python
from pathlib import Path
import pandas as pd

base = Path(__file__).parent  # script's directory
file = base / 'data' / 'mydata.csv'
if file.exists():
    df = pd.read_csv(file)
else:
    raise FileNotFoundError(f"Please create the file {file}")

# Or use the exact absolute path
df = pd.read_csv('/absolute/path/to/mydata.csv')
```

Notes:

- When distributing code, prefer configuration or CLI args to pass file paths instead of depending on the working directory.
