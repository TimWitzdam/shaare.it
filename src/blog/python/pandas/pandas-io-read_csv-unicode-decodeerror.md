---
title: "UnicodeDecodeError when reading CSV with pandas"
description: "How UnicodeDecodeError happens when pandas tries to read a CSV with the wrong encoding and how to resolve it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## UnicodeDecodeError: 'utf-8' codec can't decode byte

```bash
$ python - <<'PY'
import pandas as pd
# The file contains Windows-1252 encoded characters but pandas uses utf-8 by default
pd.read_csv('file_with_cp1252.csv')
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
UnicodeDecodeError: 'utf-8' codec can't decode byte 0x96 in position 34: invalid start byte
```

### Why this happens

Pandas reads files with Python's default encoding (often `utf-8`). If the input file uses a different encoding (for example `cp1252`/`ISO-8859-1` on Windows), Python will attempt to decode bytes with the wrong codec and raise `UnicodeDecodeError` when invalid byte sequences are encountered.

### Fix

Detect or know the file's real encoding and pass it to `read_csv` via the `encoding` argument, e.g. `encoding='latin1'` or `encoding='cp1252'`. For quick fixes, `encoding='latin1'` often succeeds without decoding errors because it's 1:1 mapping, but it may not preserve every intended Unicode character.

#### Wrong code

```python
# assuming utf-8 but file is in cp1252
df = pd.read_csv('file_with_cp1252.csv')
```

#### Fixed code

```python
# Option 1: specify the correct encoding
df = pd.read_csv('file_with_cp1252.csv', encoding='cp1252')

# Option 2: be permissive (may change characters)
df = pd.read_csv('file_with_cp1252.csv', encoding='latin1')

# Option 3: guess the encoding using chardet or similar and then read
import chardet
with open('file_with_cp1252.csv', 'rb') as f:
    guess = chardet.detect(f.read())
df = pd.read_csv('file_with_cp1252.csv', encoding=guess['encoding'])
```

If you frequently ingest files from multiple sources, consider adding a simple wrapper to auto-detect encodings before reading.
