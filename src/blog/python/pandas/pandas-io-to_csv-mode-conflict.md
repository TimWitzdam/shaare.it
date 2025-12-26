---
title: "TypeError: a bytes-like object is required when using to_csv with binary mode"
description: "Why using `mode='ab'` or binary file modes with `to_csv` raises a TypeError and the correct way to append to CSVs or write in binary when needed."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: a bytes-like object is required, not 'str' when writing CSVs with binary mode

```bash
$ python - << 'PY'
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
try:
    # binary mode 'b' causes a TypeError because to_csv writes text
    df.to_csv('out.csv', mode='ab', index=False)
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

`DataFrame.to_csv()` writes text (strings) to the file. If you open the file in binary mode (`'b'` flag), Python expects bytes, not strings. When `to_csv` tries to write text into a binary file, it raises a `TypeError` similar to `a bytes-like object is required, not 'str'`.

This commonly occurs when users try to append to a CSV using `mode='ab'` instead of text append mode `mode='a'`, or when combining `mode` and `encoding` incorrectly.

### Fix

- Use text mode for appending `df.to_csv('out.csv', mode='a', index=False)`.
- If you must write bytes (e.g., for compressed outputs), use `pathlib.Path.open('wb')` and write a bytes-encoded string: `df.to_csv(fh, encoding='utf-8')` with appropriate wrapping, or prefer `compression` parameter to handle compression.

#### Wrong code

```python
# Opens file in binary mode -> TypeError
df.to_csv('out.csv', mode='ab')
```

#### Fixed code — use text mode

```python
# Append in text mode
with open('out.csv', 'a', encoding='utf-8', newline='') as fh:
    df.to_csv(fh, index=False, header=not os.path.exists('out.csv'))

# Or let pandas open the file with mode='a'
df.to_csv('out.csv', mode='a', index=False, header=False, encoding='utf-8')
```

#### Fixed code — write compressed bytes using compression param

```python
# Use pandas compression (recommended)
df.to_csv('out.csv.gz', compression='gzip', index=False)
```

Notes:

- Avoid binary modes unless you handle encoding/decoding yourself.
- When appending to CSVs, use `header=False` when `mode='a'` or check if the file exists to add the header selectively.
