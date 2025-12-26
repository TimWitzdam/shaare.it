---
title: "TypeError / ValueError when concatenating Sparse/Dense dataframes"
description: "Concatenating DataFrames with sparse dtypes and dense dtypes can produce unexpected behavior or errors; here is how to handle it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError / ValueError when concatenating Sparse and Dense data

```bash
$ python - <<'PY'
import pandas as pd
import numpy as np
from pandas.arrays import SparseArray
df_sparse = pd.DataFrame({'a': SparseArray([0, 1])})
df_dense = pd.DataFrame({'a': [1, 2]})
pd.concat([df_sparse, df_dense])
PY
# Depending on versions and dtypes you may get unexpected dtype coercions or ValueError/TypeError
# e.g., TypeError: cannot concatenate object of dtype 'Sparse[int]' with dtype 'int64'
```

### Why this happens

Pandas has a separate `SparseDtype` to efficiently store mostly-empty numeric arrays. When concatenating DataFrames that use sparse dtypes with ones that use dense numeric dtypes, pandas may need to reconcile different internal representations. If the versions or internal APIs don't interoperate cleanly, you may get a `TypeError` or unexpected dtype coercion.

### Fix

Convert all frames to a common dtype before concatenation. Either densify sparse frames using `.sparse.to_dense()` or convert dense frames to `SparseDtype` using `.astype(pd.SparseDtype('int', fill_value=0))`. For cross-version compatibility, densify is simpler.

#### Wrong code

```python
import pandas as pd
from pandas.arrays import SparseArray
df_sparse = pd.DataFrame({'a': SparseArray([0, 1])})
df_dense = pd.DataFrame({'a': [1, 2]})
# May raise TypeError depending on versions/dtypes
pd.concat([df_sparse, df_dense])
```

#### Fixed code

```python
import pandas as pd
from pandas.arrays import SparseArray
df_sparse = pd.DataFrame({'a': SparseArray([0, 1])})
df_dense = pd.DataFrame({'a': [1, 2]})
# Option 1: densify first
pd.concat([df_sparse.sparse.to_dense(), df_dense])

# Option 2: convert dense to SparseDtype
df_dense_sparse = df_dense.astype(pd.SparseDtype('int', 0))
pd.concat([df_sparse, df_dense_sparse])
```
