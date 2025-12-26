---
title: "TypeError / ValueError: dtype not supported when writing DataFrame.to_sql"
description: "Why `pandas.DataFrame.to_sql` raises TypeError/ValueError when DataFrame columns contain unsupported Python types (lists, dicts, arrays) and how to fix by serializing or transforming the column types."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError / ValueError when writing problematic dtypes to SQL with `to_sql`

```bash
$ python - << 'PY'
import pandas as pd
import sqlite3

# A column contains lists (not supported by SQL as a primitive type)
df = pd.DataFrame({'id': [1, 2], 'payload': [[1, 2], [3, 4]]})
conn = sqlite3.connect(':memory:')
try:
    df.to_sql('table', conn, index=False, if_exists='replace')
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

SQL databases have fixed column types (INTEGER, TEXT, BLOB, etc.). Pandas' `to_sql` converts pandas dtypes into SQL types, but complex Python objects (lists, dicts, numpy arrays, custom objects) can't be written directly unless serialized. Trying to insert them usually raises a `TypeError` or `ValueError` from the underlying DB driver when it tries to adapt the object for insertion.

### Fix

- Serialize complex objects to strings using JSON: `df['payload'] = df['payload'].apply(json.dumps)` and store as TEXT.
- Use BLOB if you must store binary serializations (pickle, msgpack) but be careful with security and portability.
- Normalize the data so that each column contains scalar types supported by relational databases.

#### Wrong code

```python
df.to_sql('table', conn, index=False, if_exists='replace')  # raises TypeError
```

#### Fixed code — serialize with JSON for TEXT storage

```python
import json

df['payload_json'] = df['payload'].apply(json.dumps)
df.to_sql('table', conn, index=False, if_exists='replace')  # works
```

#### Fixed code — keep normalized records

```python
# If payload elements are records, convert to rows instead of storing lists in a column
expanded = df.explode('payload').reset_index(drop=True)
# expand payload into columns if needed
```

Notes:

- When serializing JSON, be mindful of performance and queryability — storing JSON in a TEXT column limits SQL queries on individual properties (though some DBs have JSON types).
- Ensure compatibility with your DB and driver; check the Python DB-API error message for exact reasons when `to_sql` fails.
