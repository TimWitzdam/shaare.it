---
title: "ImportError: cannot import name 'X' from 'pandas'"
description: "ImportError caused by changed/removed public APIs inside pandas, wrong import path, or typing older tutorials with new pandas versions."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ImportError: cannot import name 'X' from 'pandas'

```bash
$ python -c "from pandas import Panel"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'Panel' from 'pandas' (/usr/local/lib/python3.X/site-packages/pandas/__init__.py)
```

### Why this happens

Pandas periodically refactors, moves, or removes APIs. If you try to import a module or symbol that no longer exists (or moved to a different submodule), Python raises an ImportError.

### Fix

Update your imports to the supported API. Check the pandas version and consult the documentation or release notes for migration paths. Where possible, use the new recommended replacements.

#### Wrong code

```python
# Panel was removed in pandas 1.0, older code may try to import it (ImportError)
from pandas import Panel
```

#### Fixed code

```python
# Use a supported replacement. For multi-dimensional arrays, use xarray, or reshape your data
# into a DataFrame with a MultiIndex. For example, convert a Panel-like structure to a MultiIndex DataFrame

import pandas as pd

# Example: create a DataFrame with stacked levels to emulate 3D panel data
idx = pd.MultiIndex.from_product([['item1', 'item2'], ['a', 'b']], names=['item', 'measure'])
df = pd.DataFrame(index=idx, data={'value': [1, 2, 3, 4]})

# If a symbol moved, import from the new location (consult pandas docs)
# from pandas.core.common import is_list_like  # this moved across versions
```
