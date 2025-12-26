---
title: "AttributeError: module 'pandas' has no attribute 'read_csv'"
description: "How to diagnose AttributeError when a top-level pandas function like read_csv can't be found (shadowing, corrupted installs, or wrong names)."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## AttributeError: module 'pandas' has no attribute 'read_csv'

```bash
$ python -c "import pandas as pd; pd.read_csv('file.csv')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: module 'pandas' has no attribute 'read_csv'
```

### Why this happens

This is usually one of the following:

- You accidentally have a local file or package named `pandas.py` (or a folder named `pandas`) that shadows the real package.
- You installed a broken/corrupted version of pandas or partially overwrote it.
- You have a variable named `pandas` or `pd` in your code that overrides the package import.

### Fix

- Check for files named `pandas.py` in the working directory and rename them.
- Inspect `print(pandas.__file__)` after import to see which package is being imported.
- Reinstall pandas in the active environment: `python -m pip install --upgrade --force-reinstall pandas`.
- Make sure you are using a proper Python environment (venv/conda) and activate it.

#### Wrong code (example of shadowing)

```python
# File project/pandas.py (bad: shadows the real pandas package)

# file: pandas.py
value = 42

# in a different file
import pandas as pd
pd.read_csv('file.csv')  # raises AttributeError because local pandas.py doesn't expose read_csv
```

#### Fixed code

```python
# Rename local file so it doesn't shadow the real package
# file: myutils.py
value = 42

# actual code
import pandas as pd
print(pd.read_csv('file.csv').head())

# Also sanity-check where pandas is imported from
import pandas
print(pandas.__file__)
```
