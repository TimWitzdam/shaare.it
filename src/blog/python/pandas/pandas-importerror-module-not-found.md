---
title: "ModuleNotFoundError: No module named 'pandas'"
description: "When Pandas cannot be imported: installation, virtual environment or local shadowing issues."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ModuleNotFoundError: No module named 'pandas'

```bash
$ python -c "import pandas as pd"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ModuleNotFoundError: No module named 'pandas'
```

### Why this happens

This error means Python couldn't find the pandas package in the active environment. Common causes:

- Pandas isn't installed in the active interpreter/virtual environment.
- You're using a different interpreter than the one you installed packages into (system vs venv vs conda).
- You have a local file named `pandas.py` (or a folder named `pandas`) in your project that shadows the real package.

### Fix

Install pandas into the environment you're using (or activate the correct environment). Remove/rename any local modules named `pandas` that shadow the real package.

- Install with pip or conda:
  - `python -m pip install pandas`
  - or `conda install -c conda-forge pandas`
- Ensure you're running the same interpreter (check `which python` or `python -m pip show pandas`).
- Remove/rename local `pandas.py` files and make sure the project path doesn't contain directories named `pandas`.

#### Wrong code / situation

```bash
# Running this in a Python env without pandas installed
$ python -c "import pandas as pd"
# Or having a local file that shadows the package
# project/pandas.py
# import pandas as pd  # will import the local file instead of the real package
```

#### Fixed setup

```bash
# Install pandas into the active interpreter
python -m pip install pandas
python -c "import pandas as pd; print(pd.__version__)"

# OR use a proper virtual environment
python -m venv .venv
source .venv/bin/activate
python -m pip install pandas
```
