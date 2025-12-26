---
title: "ArrowInvalid / ValueError: Parquet file corrupted or invalid schema"
description: "Why parquet readers (pyarrow/fastparquet) fail when files are corrupted or contain invalid schema and how to recover."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ArrowInvalid / ValueError: Parquet file corrupted or invalid schema

```bash
$ python -c "import pandas as pd; pd.read_parquet('corrupted.parquet')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
pyarrow.lib.ArrowInvalid: Parquet file is corrupted or has an invalid schema
```

### Why this happens

Parquet files are binary columnar files with a schema; if the file is truncated (transfer failures), written by a mismatching/buggy writer, or has incompatible metadata, the parquet reader (`pyarrow` or `fastparquet`) will error when trying to decode it.

### Fix

Try the following:

- Recreate the Parquet file if possible (re-export/redo the write operation).
- Try an alternate engine (install `pyarrow` and/or `fastparquet`) and pass `engine=` explicitly to see if the other one can read it.
- Check the file size / integrity and redownload if corrupted.
- If you have a dataset written in mixed schema files, ensure partitions have the same schema (or use `pyarrow.dataset` for robust reading and schema unification settings).

#### Wrong code

```python
import pandas as pd
# Raises ArrowInvalid for a corrupted parquet file
pd.read_parquet('corrupted.parquet')
```

#### Fixed code

```bash
# Try a different engine
python -m pip install pyarrow fastparquet
```

```python
import pandas as pd
# Try pyarrow explicitly to see if it handles the file
pd.read_parquet('corrupted.parquet', engine='pyarrow')
# If it's corrupted, re-generate the file or fix the transfer that caused truncation
```
