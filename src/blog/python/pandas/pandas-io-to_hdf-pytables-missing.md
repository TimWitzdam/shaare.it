---
title: "ImportError / ValueError: PyTables required for HDF5 (to_hdf / HDFStore)"
description: "Reading/writing HDF5 files with Pandas requires PyTables (`tables`). Here's what causes the error and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ImportError / ValueError: PyTables required for HDF5 (to_hdf / HDFStore)

```bash
$ python -c "import pandas as pd; pd.DataFrame({'a':[1]}).to_hdf('test.h5', 'df')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: No module named 'tables'  # or: ImportError: Missing optional dependency 'tables'
```

### Why this happens

Pandas delegates HDF5 operations to the PyTables library (a.k.a. `tables`). If that library isn't installed, pandas can't read/write HDF5 files. The error indicates the optional dependency is missing.

### Fix

Install the optional dependency. Use `pip install tables` or `conda install -c conda-forge pytables` depending on your environment. If you can't install PyTables, pick a different storage format such as Parquet (`to_parquet`) or Feather (`to_feather`) with their corresponding engines.

#### Wrong code

```python
import pandas as pd
df = pd.DataFrame({'a':[1]})
# This raises an ImportError or ValueError if PyTables isn't installed
df.to_hdf('file.h5', 'df')
```

#### Fixed code

```bash
# Install the dependency first (pip or conda)
python -m pip install tables
# or
conda install -c conda-forge pytables
```

```python
import pandas as pd
df = pd.DataFrame({'a':[1]})
df.to_hdf('file.h5', 'df')
# Now it should work
```
