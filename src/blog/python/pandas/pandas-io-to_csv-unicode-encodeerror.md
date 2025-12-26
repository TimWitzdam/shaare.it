---
title: "UnicodeEncodeError when writing CSV with pandas.DataFrame.to_csv"
description: "Why UnicodeEncodeError happens when writing CSV files with an encoding that can't represent characters present in your data and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## UnicodeEncodeError: 'latin-1' codec can't encode character ... when calling DataFrame.to_csv

```bash
$ python - << 'PY'
import pandas as pd

# The em dash character (—) isn't representable in latin-1
df = pd.DataFrame({'text': ['hello', '— long dash', 'mañana']})
try:
    df.to_csv('out.csv', encoding='latin-1')
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

When you write text to files, Python encodes strings using the encoding you specify (or the default platform encoding). Some encodings (like `latin-1`) can't represent all Unicode characters. Trying to write a character that the encoding can't encode causes `UnicodeEncodeError`.

Pandas delegates writing to Python's file handling and UTF/encoding logic; the common fix is to choose an encoding that can represent your characters (`utf-8` is the most common), or to convert the text prior to writing.

### Fix

- Use `encoding='utf-8'` (preferred) or another encoding that supports your characters.
- If you must use a narrower encoding, replace or remove invalid characters with `.encode(..., errors='replace')` or `errors='ignore'` in Python file writes, or normalize text beforehand.

#### Wrong code

```python
# Fails for characters not in latin-1
df.to_csv('out.csv', encoding='latin-1')  # UnicodeEncodeError
```

#### Fixed code

```python
# Use utf-8 to support full Unicode
df.to_csv('out.csv', encoding='utf-8')

# Or replace characters that cannot be encoded
# You can do this string-wise before writing
df['text'] = df['text'].apply(lambda s: s.encode('latin-1', errors='replace').decode('latin-1') if pd.notna(s) else s)
# Now write
df.to_csv('out.csv', encoding='latin-1')
```

#### Tip

If you're reading or writing files across different operating systems, explicitly pass `encoding='utf-8'` to avoid platform encoding surprises. For CSVs that need to be read by software expecting Windows encoding, `encoding='cp1252'` (a superset of `latin-1`) may help but still doesn't cover every Unicode character.
