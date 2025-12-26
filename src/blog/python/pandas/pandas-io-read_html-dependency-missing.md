---
title: "ImportError: pd.read_html requires an HTML parser (lxml / BeautifulSoup / html5lib)"
description: "Why pd.read_html raises ImportError when optional HTML parsers are missing and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ImportError: pd.read_html requires an HTML parser (lxml / BeautifulSoup / html5lib)

```bash
$ python -c "import pandas as pd; pd.read_html('<table><tr><td>1</td></tr></table>')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: Missing optional dependency 'lxml' - required to use read_html
```

### Why this happens

`pd.read_html` delegates HTML parsing to third-party libraries like `lxml`, `html5lib`, or `BeautifulSoup` (`bs4`). If none of those are installed, pandas can't parse HTML and raises an `ImportError`.

### Fix

Install one of the supported HTML parsers, e.g. `pip install lxml` or `pip install html5lib` and `pip install beautifulsoup4` to ensure `read_html` works. Optionally pass `flavor='bs4'` or `flavor='lxml'` to `read_html` to prefer one parser.

#### Wrong code

```python
import pandas as pd
# Raises ImportError when HTML parser isn't installed
pd.read_html('<table><tr><td>1</td></tr></table>')
```

#### Fixed code

```bash
# Install a parser first
python -m pip install lxml
# or
python -m pip install html5lib beautifulsoup4
```

```python
import pandas as pd
html = '<table><tr><td>1</td></tr></table>'
# Use the lxml/bs4 parser after installing it
df_list = pd.read_html(html, flavor='lxml')
df = df_list[0]
```
