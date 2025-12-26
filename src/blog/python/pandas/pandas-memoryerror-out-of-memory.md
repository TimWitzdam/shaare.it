---
title: "MemoryError: Unable to allocate array"
description: "What to do when Pandas runs out of memory while loading or processing data."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## MemoryError: Unable to allocate array

```bash
$ python -c "import pandas as pd; df = pd.read_csv('very_large_file.csv')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
MemoryError: Unable to allocate 4.00 GiB for an array with shape (50000000, ) and data type int64
```

### Why this happens

`MemoryError` occurs when the Python process requests more memory than the OS can allocate. Pandas loads data into memory, and big CSVs or wide DataFrames with many columns or high-precision dtypes can consume large memory.

### Fix

- Read data in chunks with `pd.read_csv(..., chunksize=...)` and process each chunk.
- Use `usecols` to read only required columns.
- Specify dtypes to reduce memory usage (e.g., `float64` -> `float32`, `int64` -> `int32`, or `category` for repeated strings).
- Use `iterator=True` or `dask.dataframe` for out-of-core processing.

#### Wrong code

```python
import pandas as pd

# Try to load the entire CSV (too large for memory)
df = pd.read_csv('huge.csv')
```

#### Fixed code

```python
import pandas as pd

# Read in chunks and process incrementally
for chunk in pd.read_csv('huge.csv', chunksize=100000):
    # process each chunk
    print(chunk.shape)

# Or reduce memory by specifying dtypes
df = pd.read_csv('huge.csv', dtype={'col1': 'int32', 'col2': 'float32'})
```
