---
title: "Read/Unpickle error: pickle protocol / version mismatch"
description: "Errors when reading pickles created with different Python or pandas versions, and mitigation strategies."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## Read/Unpickle error: pickle protocol / version mismatch

```bash
$ python -c "import pandas as pd; pd.read_pickle('py2_pickle.p')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: unsupported pickle protocol: 4
```

### Why this happens

Pickle files created by a newer Python or pandas version might use a pickle protocol that older Python interpreters can't read. Similarly, pickles created in Python 2 may not decode correctly under Python 3, causing `UnicodeDecodeError` or other exceptions. Also, pickles that serialized module classes unavailable in the current environment can raise `AttributeError` during unpickling.

### Fix

- Recreate the pickle using a lower protocol compatible with your target environment (use `pickle.dump(obj, f, protocol=2)` or `protocol=4` for modern environments).
- If you must read a pickle created by Python 2 in Python 3, use `pd.read_pickle(..., encoding='latin1')`.
- Avoid using pickles for long-term storage or cross-environment exchange; prefer safer formats like Parquet, CSV, or JSON as appropriate.

#### Wrong code

```python
import pandas as pd
# Trying to read an incompatible pickle created by another Python version
pd.read_pickle('py2_pickle.p')
```

#### Fixed code

```python
import pandas as pd
# If created in Python 2, use latin1 to convert bytes safely
df = pd.read_pickle('py2_pickle.p', encoding='latin1')
# Or recreate the pickle in a compatible protocol in the source environment
```
