---
title: "TypeError: 'str' object is not callable"
description: "How to resolve the TypeError when a string is mistakenly called as a function in Matplotlib."
date: 2025-12-07
tags: ["python", "matplotlib", "errors"]
---

## TypeError: 'str' object is not callable

This `TypeError` is not exclusive to Matplotlib but often occurs when you accidentally overwrite a function with a string and then try to call it as a function. A common case in Matplotlib is assigning a string to a variable that has the same name as a plotting function, like `title` or `xlabel`.

```bash
$ python -c "import matplotlib.pyplot as plt; plt.title = 'My Plot'; plt.title('My Plot')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'str' object is not callable
```

### Why this happens

In Python, variables are references to objects. If you assign a string to a variable name that was previously referencing a function (e.g., `plt.title`), that name now points to the string object. When you later try to use parentheses `()` to call it, you are attempting to call a string, which is not a callable object.

### Fix

The solution is to ensure you do not overwrite built-in or library functions. When setting properties like titles or labels, pass the string as an argument _to_ the function call, rather than assigning it to the function's name.

#### Wrong code

Here, `plt.xlabel` is incorrectly assigned a string, which replaces the function. The subsequent attempt to call it results in a `TypeError`.

```python
import matplotlib.pyplot as plt

x = [1, 2, 3]
y = [4, 5, 6]

plt.plot(x, y)

# Incorrectly assigning a string to the function name
plt.xlabel = "X-axis Label"
plt.ylabel = "Y-axis Label"

# This will fail because plt.xlabel is now a string
plt.xlabel("This will cause an error")
plt.show()
```

#### Fixed code

The correct approach is to call the function and pass the desired string as an argument.

```python
import matplotlib.pyplot as plt

x = [1, 2, 3]
y = [4, 5, 6]

plt.plot(x, y)

# Correctly calling the functions with string arguments
plt.xlabel("X-axis Label")
plt.ylabel("Y-axis Label")
plt.title("My Plot")

plt.show()
```
