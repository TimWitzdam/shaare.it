---
title: "ImportError / AttributeError: Local file named 'pandas.py' shadows the real pandas package"
description: "Why an ImportError or AttributeError occurs when local files shadow the installed pandas package and how to fix it by renaming files or fixing PYTHONPATH."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## AttributeError: module 'pandas' has no attribute 'DataFrame' (or ImportError)

```bash
$ python - <<'PY'
# If you have a local file called pandas.py, Python will import it instead of the real package
# Create a dummy pandas.py in the current directory with minimal content
# e.g. echo "# local pandas placeholder" > pandas.py

python -c "import pandas as pd; print(pd.DataFrame([1,2]))"
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: module 'pandas' has no attribute 'DataFrame'
```

### Why this happens

Python imports modules by looking in the current directory first. If a local file is named `pandas.py`, Python will import it instead of the installed `pandas` package, so expected attributes like `DataFrame` are missing. This shadowing is a common and frustrating cause of `ImportError`/`AttributeError` when code that previously worked suddenly can't find pandas' attributes.

### Fix

- Rename local files or directories that are named `pandas.py` (or `pandas/`) to something else.
- Remove compiled files like `pandas.pyc` and folders like `__pycache__` after renaming.
- Ensure your current working directory isn't shadowing packages by running `python -c "import sys; print(sys.path)"`.

#### Wrong code

```bash
# Your folder contains pandas.py, which silently shadows the installed package
ls
# pandas.py    my_script.py
python -c "import pandas as pd; print(pd.DataFrame([1,2]))"
```

#### Fixed code

```bash
# Rename the local module to not conflict
mv pandas.py local_pandas_example.py
# or execute your script from a different working directory that doesn't contain pandas.py
python -c "import pandas as pd; print(pd.DataFrame([1,2]))"
```

Also check for other naming collisions like `numpy.py`, `matplotlib.py`, etc. Using a virtual environment for development reduces the chance that system-level packages conflict with local files.
