---
title: "ValueError: Excel file format cannot be determined, you must specify an engine manually"
description: "How to fix Excel engine errors when Pandas cannot infer the Excel file engine while reading/writing."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: Excel file format cannot be determined, you must specify an engine manually

```bash
$ python - <<'PY'
import pandas as pd
pd.read_excel('data.xls')
PY
Traceback (most recent call last):
  File "<string>", line 3, in <module>
ValueError: Excel file format cannot be determined, you must specify an engine manually
```

### Why this happens

Pandas uses third-party engines (like `openpyxl`, `xlrd`, `pyxlsb`, `odf`) to read/write Excel formats. If none of the required engines for that file format are installed (or are not compatible), pandas can't determine how to open the file and raises this error.

Common causes:

- `xlrd` dropped support for `.xlsx` files in newer releases; `openpyxl` is required for `.xlsx`.
- Using an engine that isn't installed in your environment.
- Passing a file-like object and pandas can't infer the file format.

### Fix

Install an appropriate engine and/or pass the `engine` parameter explicitly:

- For `.xlsx`: `pip install openpyxl` and use `pd.read_excel('file.xlsx', engine='openpyxl')`.
- For `.xls`: use `pip install xlrd==1.2.0` (or prefer `pyxlsb` for binary `.xlsb`).
- For `.xlsb`: `pip install pyxlsb` and `pd.read_excel('file.xlsb', engine='pyxlsb')`.

#### Wrong code

```python
import pandas as pd
# If openpyxl isn't installed, this fails on .xlsx
pd.read_excel('data.xlsx')  # ValueError raised
```

#### Fixed code

```python
import pandas as pd
# Install engine first: python -m pip install openpyxl
df = pd.read_excel('data.xlsx', engine='openpyxl')
```

Notes:

- Avoid trying to use `xlrd` for `.xlsx` files in modern pandas (use `openpyxl`).
- If you rely on `xlrd` for older `.xls` files, install a compatible `xlrd` version.
