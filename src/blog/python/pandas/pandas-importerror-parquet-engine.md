---
title: "ImportError: Missing optional dependency 'pyarrow'"
description: "Parquet/other binary file readers require optional libraries like pyarrow or fastparquet. How to resolve ImportError when reading parquet files."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ImportError: Missing optional dependency 'pyarrow'

```bash
$ python - <<'PY'
import pandas as pd
pd.read_parquet('file.parquet')
PY
Traceback (most recent call last):
  File "<string>", line 2, in <module>
ImportError: Missing optional dependency 'pyarrow'
```

### Why this happens

Pandas delegates reading/writing certain file formats (like Parquet) to optional libraries such as `pyarrow` or `fastparquet`. If those packages are not installed, the pandas I/O helper will raise an `ImportError` asking you to install the required dependency.

### Fix

- Install the required package: `python -m pip install pyarrow` or `python -m pip install fastparquet`.
- Or explicitly select an engine: `pd.read_parquet('file.parquet', engine='pyarrow')` (after installing it).

#### Wrong code

```python
import pandas as pd
# pyarrow not installed
pd.read_parquet('data.parquet')  # raises ImportError
```

#### Fixed code

```bash
# Install required engine
python -m pip install pyarrow
```

```python
# After installing, use read_parquet as intended
import pandas as pd
pd.read_parquet('data.parquet')
```

Notes:

- On some environments (like conda), prefer `conda install -c conda-forge pyarrow` to binary-compatible wheels.
- If you need to reduce dependencies, use CSV/JSON instead of Parquet where practical.
