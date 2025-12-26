---
title: "ImportError: to_sql requires SQLAlchemy and/or DB drivers"
description: "Why pandas.to_sql fails when SQLAlchemy or the DB driver is missing and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ImportError: to_sql requires SQLAlchemy and/or DB drivers

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1]}); df.to_sql('table', 'postgresql://user:pass@localhost/db')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: Missing optional dependency 'sqlalchemy' - required for to_sql
```

### Why this happens

`DataFrame.to_sql` is a convenience wrapper that leverages SQLAlchemy for cross-database compatibility. If SQLAlchemy isn't installed, pandas can't build DB-engine connections and raises an `ImportError`. Additionally, specific database drivers like `psycopg2` (Postgres), `pymysql` (MySQL), or `pyodbc` (SQL Server) must be installed for a particular backend.

### Fix

Install SQLAlchemy and any needed DB driver. For example, for Postgres:

```bash
python -m pip install sqlalchemy psycopg2-binary
# or for MySQL
python -m pip install sqlalchemy pymysql
```

Then pass a proper SQLAlchemy URL to `to_sql` or create an engine with SQLAlchemy:

```python
from sqlalchemy import create_engine
engine = create_engine('postgresql://user:pass@localhost/db')
df.to_sql('table', engine)
```

#### Wrong code

```python
import pandas as pd
df = pd.DataFrame({'a':[1]})
# Raises ImportError when SQLAlchemy isn't installed
df.to_sql('table', 'postgresql://user:pass@localhost/db')
```

#### Fixed code

```bash
# Install SQLAlchemy + driver
python -m pip install sqlalchemy psycopg2-binary
```

```python
import pandas as pd
from sqlalchemy import create_engine
engine = create_engine('postgresql://user:pass@localhost/db')
df.to_sql('table', engine)
```
