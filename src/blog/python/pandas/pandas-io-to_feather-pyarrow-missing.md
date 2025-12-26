---
title: "ImportError: pyarrow required for Feather (to_feather / read_feather)"
description: "Using Feather/Arrow formats in pandas requires pyarrow; here's how to resolve the ImportError."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ImportError: pyarrow required for Feather (to_feather / read_feather)

```bash
$ python -c "import pandas as pd; pd.DataFrame({'a':[1]}).to_feather('file.feather')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: Missing optional dependency 'pyarrow' - required for Feather/Arrow support
```

### Why this happens

Feather (and certain Arrow-backed IO) is handled by the `pyarrow` package. If it's not installed, pandas can't read/write Feather files and warns about the missing optional dependency.

### Fix

Install `pyarrow`:

```bash
python -m pip install pyarrow
# or with conda
conda install -c conda-forge pyarrow
```

Then use the `to_feather` / `read_feather` functions as usual:

```python
import pandas as pd
df = pd.DataFrame({'a':[1]})
df.to_feather('file.feather')
pd.read_feather('file.feather')
```

\*\*\* End Patch
